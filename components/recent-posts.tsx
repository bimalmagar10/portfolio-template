"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { createTagInitials } from "@/lib/utils";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
  filePath: string;
}

interface RecentPostsProps {
  posts: BlogPost[];
}

const RecentPosts = ({ posts }: RecentPostsProps) => {
  // Get top 2 recent posts (posts are already sorted by date)
  const recentPosts = posts.slice(0, 2);

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-medium text-foreground">Recent Posts</h2>
        <Button variant="ghost" size="sm" asChild>
          <Link
            href="/blogs"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            View all posts <ArrowUpRight className="ml-1 h-3 w-3" />
          </Link>
        </Button>
      </div>

      <div className="flex flex-col space-y-3">
        {recentPosts.length === 0 ? (
          <div className="text-sm text-muted-foreground">
            No recent posts found.
          </div>
        ) : (
          recentPosts.map((post) => (
            <Link key={post.id} href={`/blogs/${post.slug}`}>
              <Card className="hover:bg-muted/50 dark:hover:border-gray-600 transition-colors cursor-pointer py-2">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-foreground rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-background text-xs font-medium">
                        {createTagInitials(post.tags)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-foreground mb-2">
                        {post.title}
                      </h3>
                      <div className="flex flex-wrap gap-1">
                        {post.tags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))
        )}
      </div>
    </section>
  );
};

export default RecentPosts;
