"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";

// Mock data for blog posts
const recentPosts = [
  {
    id: "deep-learning-transformers",
    title: "Understanding Transformers in Deep Learning",
    description:
      "A comprehensive guide to transformer architecture and its applications in NLP",
    date: "2024-01-15",
    slug: "deep-learning-transformers",
  },
  {
    id: "voice-ai-research",
    title: "Advances in Voice AI Research",
    description:
      "Latest developments in voice recognition and synthesis technologies",
    date: "2024-01-10",
    slug: "voice-ai-research",
  },
];

const RecentPosts = () => {
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
        {recentPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <Card className="hover:bg-muted/50 transition-colors cursor-pointer py-2">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-foreground rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-background text-xs font-medium">
                      AI
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-foreground mb-1">
                      {post.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {post.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
