import AppHeader from "@/components/app-header";
import EducationSection from "@/components/education-section";
import Profile from "@/components/profile";
import RecentPosts from "@/components/recent-posts";
import SocialSection from "@/components/social-section";
import { getAllPosts } from "@/lib/mdx";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <AppHeader posts={posts} />
        <Profile />
        <RecentPosts posts={posts} />
        <EducationSection />
        <SocialSection />
      </div>
    </div>
  );
}
