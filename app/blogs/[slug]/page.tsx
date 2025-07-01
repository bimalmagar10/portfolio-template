import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/components/mdx-components";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: post.title,
    description: `Read ${post.title} - Published on ${new Date(
      post.date
    ).toLocaleDateString()}`,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-3 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
        {/* Header with back button */}
        <div className="mb-6 sm:mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link
              href="/blogs"
              className="text-sm sm:text-md text-muted-foreground hover:text-foreground px-2 py-1 sm:px-3 sm:py-2"
            >
              <ArrowLeft className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
              Back to blogs
            </Link>
          </Button>
        </div>

        {/* Blog post header */}
        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            {post.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>

            {post.tags.length > 0 && (
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4" />
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Blog post content */}
        <article className="prose prose-lg prose-gray dark:prose-invert max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:text-red-600 dark:prose-code:text-red-400 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm, remarkBreaks],
                rehypePlugins: [rehypeHighlight, rehypeSlug],
              },
            }}
            components={useMDXComponents({})}
          />
        </article>

        {/* Footer with back button */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <Button variant="outline" asChild>
            <Link href="/blogs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all posts
            </Link>
          </Button>
        </footer>
      </div>
    </div>
  );
}
