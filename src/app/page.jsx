// app/page.jsx
"use client";

import { useState } from "react";
import Modal from "@/components/ui/Modal";

// Modular Section Imports
import HeroSection from "@/components/home/HeroSection";
import WhyTTCSection from "@/components/home/WhyTTCSection";
import VisionSection from "@/components/home/VisionSection";
import PrioritiesSection from "@/components/home/PrioritiesSection";
import CivicAcademySection from "@/components/home/CivicAcademySection";
import CommitmentsSection from "@/components/home/CommitmentsSection";
import LeadershipSection from "@/components/home/LeadershipSection";
import NewsSection from "@/components/home/NewsSection";
import EventsSection from "@/components/home/EventsSection";
import JoinCTASection from "@/components/home/JoinCTASection";
import CTASection from "@/components/home/CTASection";
// import Footer from "@/components/ui/Footer";

export default function HomePage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white font-body">
      {/* Platform Disclaimer Modal */}
      <Modal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        title="Demonstration Platform"
        message="TTC is a fictional political organization framework designed purely for demonstration purposes."
      />

      {/* 1. Primary Hero Section (with Animated Stats Grid) */}
      <HeroSection onOpenModal={() => setDemoModalOpen(true)} />

      {/* 2. Four Core Pillars (Trust, Opportunity, Transformation, Participation) */}
      <WhyTTCSection />

      {/* 3. Vision & Core Mission Statement */}
      <VisionSection />

      {/* 4. Strategic Priorities & Focus Areas */}
      <PrioritiesSection />

      {/* 5. Non-Partisan Civic Academy Preview (Objective Education) */}
      <CivicAcademySection />

      {/* 6. Operational Commitments & Benchmarks */}
      <CommitmentsSection />

      {/* 7. Leadership & Executive Committee */}
      <LeadershipSection />

      {/* 8. Media Center, News & Press Releases */}
      <NewsSection />

      {/* 9. Upcoming Town Halls & Community Events */}
      <EventsSection />

      {/* 10. Large Navy Join CTA Banner */}
      <JoinCTASection />

      {/* 11. Dual-Tab Newsletter & Volunteer Form Section */}
      <CTASection />

      {/* 12. Main Site Footer */}
      {/* <Footer /> */}
    </main>
  );
}