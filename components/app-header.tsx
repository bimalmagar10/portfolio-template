"use client";
import { getRelativeTime } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
  filePath: string;
}

interface AppHeaderProps {
  posts: BlogPost[];
}

const AppHeader = ({ posts }: AppHeaderProps) => {
  // Get the latest post (posts are already sorted by date)
  const latestPost = posts.length > 0 ? posts[0] : null;

  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
            priority
            quality={100}
            unoptimized
          />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-foreground">Your Name</h1>
          <p className="text-sm text-muted-foreground">
            Software Engineer @ Application Development and Support,TTU
          </p>
        </div>
      </div>

      {latestPost && (
        <div className="bg-muted/50 border border-gray-200 dark:border-gray-800 rounded-lg p-3 mb-6">
          <p className="text-sm text-muted-foreground">
            {getRelativeTime(latestPost.date)} - New post:{" "}
            <Link
              href={`/blogs/${latestPost.slug}`}
              className="text-foreground hover:underline"
            >
              {latestPost.title}
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default AppHeader;
