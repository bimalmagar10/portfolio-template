import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import readingTime from "reading-time";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateUUID(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Create initials from tags
export function createTagInitials(tags: string[]): string {
  if (tags.length === 0) return "AI";

  const shortestTag = tags.reduce((shortest, current) =>
    current.length < shortest.length ? current : shortest
  );

  const words = shortestTag
    .trim()
    .split(" ")
    .filter((word) => word.length > 0);

  if (words.length === 1) {
    return shortestTag;
  }

  return words.map((word) => word.charAt(0).toUpperCase()).join("");
}

// Parse date string as local date to avoid timezone issues
export function parseLocalDate(dateString: string): Date {
  // For YYYY-MM-DD format, create date in local timezone to avoid UTC conversion
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day); // month is 0-indexed
}

// Format a date string for display (avoiding timezone issues)
export function formatDisplayDate(dateString: string): string {
  const date = parseLocalDate(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Format a date string for short display (e.g., "Jan 15, 2024")
export function formatShortDate(dateString: string): string {
  const date = parseLocalDate(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// Format relative time
export function getRelativeTime(dateString: string): string {
  const now = new Date();
  const postDate = parseLocalDate(dateString);
  const diffInSeconds = Math.floor((now.getTime() - postDate.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`;
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  } else if (diffInSeconds < 2592000) {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} day${days === 1 ? "" : "s"} ago`;
  } else if (diffInSeconds < 31536000) {
    const months = Math.floor(diffInSeconds / 2592000);
    return `${months} month${months === 1 ? "" : "s"} ago`;
  } else {
    const years = Math.floor(diffInSeconds / 31536000);
    return `${years} year${years === 1 ? "" : "s"} ago`;
  }
}

// Calculate reading time for blog content
export function getReadingTime(content: string): string {
  const stats = readingTime(content);
  return stats.text;
}
