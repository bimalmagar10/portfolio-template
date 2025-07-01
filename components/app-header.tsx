"use client";
import Image from "next/image";
import Link from "next/link";

const AppHeader = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={48}
            height={48}
            className=" h-12 w-12 rounded-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-foreground">Your Name</h1>
          <p className="text-sm text-muted-foreground">
            Software Engineer @ Application Development and Support,TTU
          </p>
        </div>
      </div>

      {/* Recent Post Notification */}
      <div className="bg-muted/50 border border-gray-200 dark:border-gray-800 rounded-lg p-3 mb-6">
        <p className="text-sm text-muted-foreground">
          3 days ago - New post:{" "}
          <Link
            href="/blog/deep-learning-transformers"
            className="text-foreground hover:underline"
          >
            Understanding Transformers in Deep Learning
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AppHeader;
