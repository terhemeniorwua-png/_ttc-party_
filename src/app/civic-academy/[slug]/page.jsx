"use client";

import { useState } from "react";
import AcademyHero from "@/components/civic-academy/AcademyHero";
import CourseList from "@/components/civic-academy/CourseList";
import JoinCTASection from "@/components/home/JoinCTASection";
import Footer from "@/components/ui/Footer";

export default function CivicAcademyPage() {
  const [completedCount, setCompletedCount] = useState(0);
  const [totalLessons, setTotalLessons] = useState(14);

  const handleProgressChange = (completed, total) => {
    setCompletedCount(completed);
    setTotalLessons(total);
  };

  return (
    <main className="min-h-screen bg-white font-body">
      {/* 1. Portal Header Hero */}
      <AcademyHero
        completedCount={completedCount}
        totalLessons={totalLessons}
      />

      {/* 2. Course Cards Grid & Progress Sync */}
      <CourseList onProgressChange={handleProgressChange} />

      {/* 3. Community Call to Action */}
      <JoinCTASection />

      {/* 4. Global Footer */}
      {/* <Footer /> */}
    </main>
  );
}