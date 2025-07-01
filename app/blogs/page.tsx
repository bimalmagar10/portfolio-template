import { BackButton } from "@/components/back-button";
import { BlogSearch } from "@/components/blog-search";
import { getAllPosts } from "@/lib/mdx";

export default async function BlogPage() {
  const blogPosts = await getAllPosts();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-3 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
        <div className="mb-6 sm:mb-8">
          <BackButton />
        </div>
        {/* Search and Blog Posts */}
        <BlogSearch posts={blogPosts} />
      </div>
    </div>
  );
}
