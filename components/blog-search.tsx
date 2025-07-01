"use client";

import { useState } from "react";
import { Search, X, Calendar } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  content: string;
  tags: string[];
}

interface BlogSearchProps {
  posts: BlogPost[];
}

export function BlogSearch({ posts }: BlogSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = searchTerm.trim()
    ? posts.filter((post) => {
        const searchLower = searchTerm.toLowerCase();
        return post.title.toLowerCase().includes(searchLower);
      })
    : posts;

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="space-y-6">
      {/* Search Input */}
      <div className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search blog posts by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-10 py-2 bg-background border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm placeholder:text-muted-foreground"
          />
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          )}
        </div>
        {searchTerm && (
          <p className="text-xs text-muted-foreground mt-2">
            Found {filteredPosts.length} result(s) for "{searchTerm}"
          </p>
        )}
      </div>

      {/* Blog Posts */}
      <div className="space-y-1 sm:space-y-2">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No blog posts found.</p>
          </div>
        ) : (
          filteredPosts.map((post, index) => (
            <Link
              key={post.id}
              href={`/blogs/${post.slug}`}
              className="block group"
            >
              <article
                className="px-3 py-2 sm:px-4 sm:py-3 rounded-md border border-transparent hover:border-gray-300/90 dark:hover:border-gray-600/50 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-start justify-between gap-1 sm:gap-2">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-sm sm:text-base font-medium text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 leading-tight">
                      {post.title}
                    </h2>
                  </div>

                  <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
