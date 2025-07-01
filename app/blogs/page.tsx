import { Button } from "@/components/ui/button";
import { BlogSearch } from "@/components/blog-search";
import { getAllPosts } from "@/lib/mdx";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function BlogPage() {
  const blogPosts = await getAllPosts();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-3 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link
              href="/"
              className="text-sm sm:text-md text-muted-foreground hover:text-foreground px-2 py-1 sm:px-3 sm:py-2"
            >
              <ArrowLeft className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
              {"Back to home"}
            </Link>
          </Button>
        </div>

        {/* Search and Blog Posts */}
        <BlogSearch posts={blogPosts} />
      </div>
    </div>
  );
}
