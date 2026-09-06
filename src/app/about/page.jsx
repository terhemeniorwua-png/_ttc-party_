"use client";

import AboutHero from "@/components/about/AboutHero";
import WhoWeAreSection from "@/components/about/WhoWeAreSection";
import PrinciplesSection from "@/components/about/PrinciplesSection";
import ApproachSection from "@/components/about/ApproachSection";
import FullLeadershipSection from "@/components/about/FullLeadershipSection";
import JoinCTASection from "@/components/home/JoinCTASection";
import Footer from "@/components/ui/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white font-body">
      {/* 1. Hero */}
      <AboutHero />

      {/* 2. Who We Are & Our Story */}
      <WhoWeAreSection />

      {/* 3. Principles Grid */}
      <PrinciplesSection />

      {/* 4. Methodology & Implementation Flow */}
      <ApproachSection />

      {/* 5. Complete Leadership Team */}
      <FullLeadershipSection />

      {/* 6. Join CTA Banner */}
      <JoinCTASection />

      {/* 7. Site Footer */}
      <Footer />
    </main>
  );
}