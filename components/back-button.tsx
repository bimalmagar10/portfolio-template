"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export function BackButton({
  variant = "ghost",
  className = "",
}: {
  variant?: "ghost" | "default" | "primary";
  className?: string;
}) {
  const router = useRouter();

  return (
    <Button
      variant={variant === "primary" ? "default" : variant}
      size="sm"
      onClick={() => router.back()}
      className={`cursor-pointer ${
        variant === "primary"
          ? "bg-primary text-primary-foreground hover:bg-primary/90"
          : ""
      } ${className}`}
    >
      <span
        className={`flex items-center justify-start gap-3 text-sm sm:text-base ${
          variant === "primary"
            ? "text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        } px-2 py-1 sm:px-3 sm:py-2`}
      >
        <ArrowLeft className="inline-block mr-1 h-3 w-3 sm:h-5 sm:w-5" />
        Go Back
      </span>
    </Button>
  );
}
