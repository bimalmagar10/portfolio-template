"use client";

import { useState } from "react";
import { Search, X, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { getReadingTime, formatShortDate } from "@/lib/utils";

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
    <div className="space-y-6 px-0 sm:px-6 lg:px-8">
      {/* Search Input */}
      <div className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search blog posts by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-sm pl-10 pr-10 py-2 w-full sm:w-2/3 md:w-1/2 lg:w-2/5 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-800 dark:focus-visible:ring-gray-800/20 focus-visible:ring-offset-2 transition-all duration-200"
          />
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors sm:right-3"
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          )}
        </div>
        {searchTerm && (
          <p className="text-xs text-muted-foreground mt-2">
            Found {filteredPosts.length} result(s) for &quot;{searchTerm}&quot;
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
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-sm sm:text-base font-medium text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 leading-tight mb-2">
                      {post.title}
                    </h2>

                    <div className="flex items-center justify-between sm:justify-start gap-2">
                      <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>{formatShortDate(post.date)}</span>
                      </div>

                      {/* Reading time on mobile - shown inline with date */}
                      <div className="flex sm:hidden items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{getReadingTime(post.content)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Reading time on larger screens - shown on the right */}
                  <div className="hidden sm:flex flex-shrink-0 items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{getReadingTime(post.content)}</span>
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
