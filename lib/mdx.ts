import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { parseLocalDate } from "./utils";

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  slug: string;
  tags: string[];
  content: string;
  filePath: string;
}

const postsDirectory = path.join(process.cwd(), "posts");

// Create a consistent UUID based on a string (filename)
function createConsistentUUID(input: string): string {
  // Simple hash function to create consistent "random" values
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }

  // Use the hash to seed a simple random number generator
  const seed = Math.abs(hash);
  const random = () => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  // Generate UUID format using seeded random
  const s4 = () =>
    Math.floor(random() * 0x10000)
      .toString(16)
      .padStart(4, "0");
  return `${s4()}${s4()}-${s4()}-4${s4().slice(
    1
  )}-${s4()}-${s4()}${s4()}${s4()}`;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    // Check if posts directory exists
    if (!fs.existsSync(postsDirectory)) {
      console.warn("Posts directory does not exist");
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsPromises = fileNames
      .filter(
        (fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx")
      )
      .map(async (fileName) => {
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        // Create consistent UUID based on filename
        const uuid = createConsistentUUID(fileName);

        return {
          id: uuid,
          slug: uuid,
          title: data.title || "Untitled",
          date: data.date || new Date().toISOString(),
          tags: data.tags || [],
          content,
          filePath: fullPath,
        } as BlogPost;
      });

    // Wait for all markdown processing to complete
    const allPostsData = await Promise.all(allPostsPromises);

    return allPostsData.sort(
      (a, b) =>
        parseLocalDate(b.date).getTime() - parseLocalDate(a.date).getTime()
    );
  } catch (error) {
    console.error("Error reading posts:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const posts = await getAllPosts();
    return posts.find((post) => post.slug === slug) || null;
  } catch (error) {
    console.error("Error getting post by slug:", error);
    return null;
  }
}

export async function getPostSlugs(): Promise<string[]> {
  try {
    const posts = await getAllPosts();
    return posts.map((post) => post.slug);
  } catch (error) {
    console.error("Error getting post slugs:", error);
    return [];
  }
}
