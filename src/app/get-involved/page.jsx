"use client";

import GetInvolvedHero from "@/components/get-involved/GetInvolvedHero";
import GetInvolvedGrid from "@/components/get-involved/GetInvolvedGrid";
import JoinCTASection from "@/components/home/JoinCTASection";
import Footer from "@/components/ui/Footer";

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen bg-white font-body">
      {/* 1. Hero */}
      <GetInvolvedHero />

      {/* 2. Get Involved Action Cards Grid */}
      <GetInvolvedGrid />

      {/* 3. Join CTA */}
      <JoinCTASection />

      {/* 4. Footer */}
      {/* <Footer /> */}
    </main>
  );
}