"use client";

import { useState, useEffect } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatCards from "@/components/dashboard/StatCards";
import MyLearningSection from "@/components/dashboard/MyLearningSection";
import UpcomingEventsSection from "@/components/dashboard/UpcomingEventsSection";
import NotificationsSection from "@/components/dashboard/NotificationsSection";
import ContributionHistorySection from "@/components/dashboard/ContributionHistorySection";
import ProfileSection from "@/components/dashboard/ProfileSection";
// import Footer from "@/components/ui/Footer";

export default function DashboardPage() {
  const [user, setUser] = useState({
    fullName: "Philip Okafor",
    email: "philip@example.com",
    phone: "+234 801 234 5678",
  });

  const [completedKeys, setCompletedKeys] = useState([]);

  useEffect(() => {
    try {
      // 1. Fetch logged-in user session if available
      const sessionRaw =
        localStorage.getItem("ttc_user_session") ||
        sessionStorage.getItem("ttc_user_session");
      if (sessionRaw) {
        const parsedSession = JSON.parse(sessionRaw);
        if (parsedSession.fullName) {
          setUser((prev) => ({ ...prev, ...parsedSession }));
        } else if (parsedSession.email) {
          setUser((prev) => ({
            ...prev,
            email: parsedSession.email,
            fullName: parsedSession.email.split("@")[0],
          }));
        }
      }

      // 2. Load academy progress
      const progressRaw = localStorage.getItem("ttc_academy_progress");
      if (progressRaw) {
        setCompletedKeys(JSON.parse(progressRaw));
      }
    } catch (e) {
      console.error("Failed to load session/progress data", e);
    }
  }, []);

  // Compute course learning metrics dynamically
  const coursesCatalog = [
    {
      slug: "understanding-government",
      title: "Understanding Government",
      totalLessons: 5,
      prefix: "gov",
    },
    {
      slug: "understanding-elections",
      title: "Understanding Elections",
      totalLessons: 5,
      prefix: "elec",
    },
    {
      slug: "understanding-public-budgets",
      title: "Understanding Public Budgets",
      totalLessons: 4,
      prefix: "budg",
    },
  ];

  const coursesProgress = coursesCatalog.map((course) => {
    const courseCompleted = completedKeys.filter((k) =>
      k.startsWith(course.prefix)
    ).length;
    return {
      ...course,
      completedCount: courseCompleted,
      percent: Math.round((courseCompleted / course.totalLessons) * 100),
    };
  });

  const completedCoursesCount = coursesProgress.filter(
    (c) => c.percent === 100
  ).length;

  const firstName = user.fullName ? user.fullName.split(" ")[0] : "Philip";

  return (
    <main className="min-h-screen bg-gray-soft font-body flex flex-col justify-between">
      <div className="py-10 px-6 max-w-7xl mx-auto space-y-8 w-full">
        {/* Header */}
        <DashboardHeader userName={firstName} />

        {/* Summary Metric Cards */}
        <StatCards
          membershipTier="Active Member"
          eventsCount={2}
          completedCoursesCount={completedCoursesCount}
          contributionsTotal="₦25,000"
        />

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (Main Focus) */}
          <div className="lg:col-span-7 space-y-8">
            <MyLearningSection coursesProgress={coursesProgress} />
            <UpcomingEventsSection />
            <ContributionHistorySection />
          </div>

          {/* Right Column (Side Context) */}
          <div className="lg:col-span-5 space-y-8">
            <NotificationsSection />
            <ProfileSection user={user} />
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </main>
  );
}