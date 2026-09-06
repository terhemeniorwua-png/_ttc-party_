"use client";

import { useState } from "react";
import AcademyHero from "@/components/civic-academy/AcademyHero";
import CourseList from "@/components/civic-academy/CourseLessonList";
import JoinCTASection from "@/components/home/JoinCTASection";
// import Footer from "@/components/ui/Footer";

export default function CivicAcademyPage() {
  const [completedCount, setCompletedCount] = useState(0);
  const [totalLessons, setTotalLessons] = useState(14);

  const handleProgressChange = (completed, total) => {
    setCompletedCount(completed);
    setTotalLessons(total);
  };

  return (
    <main className="min-h-screen bg-white font-body">
      {/* 1. Hero */}
      <AcademyHero completedCount={completedCount} totalLessons={totalLessons} />

      {/* 2. Interactive Course Browser */}
      <CourseList onProgressChange={handleProgressChange} />

      {/* 3. Join CTA */}
      <JoinCTASection />

      {/* 4. Footer */}
      {/* <Footer /> */}
    </main>
  );
}