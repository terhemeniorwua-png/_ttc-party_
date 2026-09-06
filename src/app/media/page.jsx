"use client";

import MediaHero from "@/components/media/MediaHero";
import MediaTabs from "@/components/media/MediaTabs";
import JoinCTASection from "@/components/home/JoinCTASection";
import Footer from "@/components/ui/Footer";

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-white font-body">
      {/* 1. Hero */}
      <MediaHero />

      {/* 2. Interactive Media Tabs (Photos, Videos, Press, Downloads) */}
      <MediaTabs />

      {/* 3. Join CTA */}
      <JoinCTASection />

      {/* 4. Footer */}
      {/* <Footer /> */}
    </main>
  );
}