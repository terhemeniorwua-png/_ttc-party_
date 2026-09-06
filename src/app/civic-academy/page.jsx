"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { BookOpen, CheckCircle, Award } from "lucide-react";
import { getStorageItem } from "@/lib/storage";

export default function CivicAcademyPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(getStorageItem("ttc_courses"));

    const handleStorageUpdate = () => {
      setCourses(getStorageItem("ttc_courses"));
    };
    window.addEventListener("storage_updated", handleStorageUpdate);
    return () => window.removeEventListener("storage_updated", handleStorageUpdate);
  }, []);

  return (
    <div className="min-h-screen bg-white py-12 px-6 font-body">
      <div className="max-w-7xl mx-auto">
        {/* Banner */}
        <div className="bg-navy text-white rounded-2xl p-8 md:p-12 mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="text-gold-warm text-xs font-bold uppercase tracking-widest">Empowering Citizens</span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl mt-2">TTC Civic Academy</h1>
            <p className="text-gray-300 text-sm md:text-base mt-2 max-w-xl">
              Understand your government, master election systems, and learn practical citizen leadership skills.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-white/10 px-5 py-3 rounded-xl border border-white/10 shrink-0">
            <Award className="w-8 h-8 text-gold-warm" />
            <div>
              <p className="font-heading font-bold text-lg">Free Certification</p>
              <p className="text-xs text-gray-300">Self-paced learning</p>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <h2 className="font-heading font-bold text-2xl text-navy mb-6">Available Modules</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => {
            const courseProgress = course.progress || 0;
            return (
              <div
                key={course.id}
                className="border border-gray-border rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition bg-white"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2.5 bg-blue-trust/10 text-blue-trust rounded-lg">
                      <BookOpen className="w-5 h-5" />
                    </span>
                    <span className="text-xs font-bold text-gray-mutedText">{course.lessonsCount} Lessons</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-navy mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-mutedText mb-6">{course.description}</p>
                </div>

                <div>
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs font-semibold text-gray-darkText mb-1">
                      <span>Progress</span>
                      <span>{courseProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-soft h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-green-transform h-full transition-all duration-300"
                        style={{ width: `${courseProgress}%` }}
                      ></div>
                    </div>
                  </div>

                  <Link
                    href={`/civic-academy/${course.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-navy text-white font-semibold text-sm rounded-lg hover:bg-opacity-90 transition"
                  >
                    {courseProgress > 0 ? "Continue Course" : "Start Course"}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}