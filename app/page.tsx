import AppHeader from "@/components/app-header";
import EducationSection from "@/components/education-section";
import Profile from "@/components/profile";
import RecentPosts from "@/components/recent-posts";
import SocialSection from "@/components/social-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <AppHeader />
        <Profile />
        <RecentPosts />
        <EducationSection />
        <SocialSection />
      </div>
    </div>
  );
}
