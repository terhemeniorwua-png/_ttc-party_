"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import AcademyHero from "@/components/academy/AcademyHero";
import ProgressTracker from "@/components/academy/ProgressTracker";
import CourseCard from "@/components/academy/CourseCard";
import CourseModal from "@/components/academy/CourseModal";
import JoinCTASection from "@/components/home/JoinCTASection";
// import Footer from "@/components/ui/Footer";
import { getCompletedCourses, toggleCourseCompletion } from "@/lib/storage";

const COURSES = [
  {
    id: "civic-101",
    title: "Understanding Public Finance & LGA Budgets",
    category: "Public Finance",
    duration: "45 mins",
    modulesCount: 4,
    description: "Learn how local government budgets are allocated, tracked, and audited. Empower yourself with skills to ask informed questions at ward meetings.",
    syllabus: [
      "Introduction to Revenue Sharing & Federal Allocations",
      "Reading & Interpreting Local Budget Sheets",
      "Tracking Capital Projects in Your Community",
      "Conducting Public Budget Audits"
    ]
  },
  {
    id: "civic-102",
    title: "Constitutional Rights & Voter Literacy",
    category: "Rights & Law",
    duration: "60 mins",
    modulesCount: 5,
    description: "Master your legal protections, electoral rights, and procedures for monitoring polling units peacefully and legally.",
    syllabus: [
      "Fundamental Human Rights Under Section 4 of the Constitution",
      "Electoral Act Guidelines & Voter Protections",
      "Peaceful Assembly & Civic Petition Rights",
      "How to Report Polling Violations Safely"
    ]
  },
  {
    id: "civic-103",
    title: "Grassroots Organizing & Town Hall Leadership",
    category: "Leadership",
    duration: "30 mins",
    modulesCount: 3,
    description: "A practical guide to organizing ward-level town halls, mobilizing neighbors, and presenting structured petitions to elected representatives.",
    syllabus: [
      "Structuring Effective Community Meetings",
      "Drafting Impactful Civic Petitions",
      "Building Local Coalition Alliances"
    ]
  },
  {
    id: "civic-104",
    title: "Digital Freedom & Anti-Disinformation",
    category: "Media Literacy",
    duration: "40 mins",
    modulesCount: 4,
    description: "Identify fake news, verify online policy claims, and protect your digital privacy during elections.",
    syllabus: [
      "Fact-Checking Public Official Statements",
      "Spotting Coordinated Bot Campaigns",
      "Digital Safety for Civic Activists"
    ]
  }
];

const CATEGORIES = ["All", "Public Finance", "Rights & Law", "Leadership", "Media Literacy"];

export default function CivicAcademyPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [completedCourses, setCompletedCourses] = useState([]);
  const [activeCourse, setActiveCourse] = useState(null);

  useEffect(() => {
    setCompletedCourses(getCompletedCourses());
  }, []);

  const handleToggleComplete = (courseId) => {
    const updated = toggleCourseCompletion(courseId);
    setCompletedCourses(updated);
  };

  const filteredCourses = COURSES.filter((course) => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white font-body">
      {/* 1. Hero */}
      <AcademyHero />

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* 2. Real-time Progress Dashboard */}
        <ProgressTracker
          completedCoursesCount={completedCourses.length}
          totalCoursesCount={COURSES.length}
        />

        {/* 3. Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  selectedCategory === cat
                    ? "bg-navy text-white shadow-md"
                    : "bg-gray-soft text-gray-mutedText hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-soft/80 border border-gray-border rounded-xl text-xs text-navy placeholder-gray-400 focus:outline-none focus:border-navy transition"
            />
          </div>
        </div>

        {/* 4. Course Cards Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                isCompleted={completedCourses.includes(course.id)}
                onSelect={(c) => setActiveCourse(c)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-soft/40 rounded-2xl border border-gray-border space-y-2">
            <p className="font-heading font-bold text-navy text-lg">No courses found</p>
            <p className="text-xs text-gray-mutedText">Try adjusting your search query or category filter.</p>
          </div>
        )}
      </div>

      {/* 5. Course Learning Modal */}
      <CourseModal
        course={activeCourse}
        isOpen={!!activeCourse}
        onClose={() => setActiveCourse(null)}
        isCompleted={activeCourse ? completedCourses.includes(activeCourse.id) : false}
        onToggleComplete={handleToggleComplete}
      />

      {/* 6. Join Call To Action Banner */}
      <JoinCTASection />

      {/* 7. Footer */}
      {/* <Footer /> */}
    </main>
  );
}