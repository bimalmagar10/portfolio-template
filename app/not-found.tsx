"use client";

import { BackButton } from "@/components/back-button";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center">
              <FileQuestion className="w-16 h-16 text-slate-400 dark:text-slate-300" />
            </div>
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-red-600 font-bold text-lg">404</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100">
            Page Not Found
          </h1>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It
            might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <BackButton variant="primary" />
        </div>

        <div className="pt-8">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            Error Code: 404 | Page Not Found
          </p>
        </div>
      </div>
    </div>
  );
}
