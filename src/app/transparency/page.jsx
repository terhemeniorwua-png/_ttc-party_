"use client";

import TransparencyHero from "@/components/transparency/TransparencyHero";
import TransparencyDashboard from "@/components/transparency/TransparencyDashboard";
import TransparencySections from "@/components/transparency/TransparencySections";
import JoinCTASection from "@/components/home/JoinCTASection";
import Footer from "@/components/ui/Footer";

export default function TransparencyPage() {
  return (
    <main className="min-h-screen bg-white font-body">
      {/* 1. Hero */}
      <TransparencyHero />

      {/* 2. Interactive Document Metrics Dashboard with Admin Update Controls */}
      <TransparencyDashboard />

      {/* 3. Section Tabs & Document Repository */}
      <TransparencySections />

      {/* 4. Join CTA */}
      <JoinCTASection />

      {/* 5. Footer */}
      {/* <Footer /> */}
    </main>
  );
}