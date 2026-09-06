"use client";

import VisionHero from "@/components/vision/VisionHero";
import VisionMissionSection from "@/components/vision/VisionMissionSection";
import ValuesGridSection from "@/components/vision/ValuesGridSection";
import TransformationPillars from "@/components/vision/TransformationPillars";
import LongTermGoalsSection from "@/components/vision/LongTermGoalsSection";
import ProgressMetricsSection from "@/components/vision/ProgressMetricsSection";
import JoinCTASection from "@/components/home/JoinCTASection";
import CTASection from "@/components/home/CTASection";
// import Footer from "@/components/ui/Footer";

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-white font-body">
      {/* 1. Hero */}
      <VisionHero />

      {/* 2. Vision & Mission Section */}
      <VisionMissionSection />

      {/* 3. Core Values Grid */}
      <ValuesGridSection />

      {/* 4. Practical Transformation Pillars */}
      <TransformationPillars />

      {/* 5. Roadmap Goals */}
      <LongTermGoalsSection />

      {/* 6. Animated Statistics & Measurement Metrics */}
      <ProgressMetricsSection />

      {/* 7. Join CTA Banner */}
      <JoinCTASection />

      {/* 8. Dual-Tab Newsletter & Volunteer Input */}
      <CTASection />

      {/* 9. Footer */}
      {/* <Footer /> */}
    </main>
  );
}