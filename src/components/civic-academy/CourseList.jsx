"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { COURSES_MAP } from "@/lib/coursesData";
import { BookOpen, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

export default function CourseList() {
  const [completedKeys, setCompletedKeys] = useState([]);

  // Load completed lesson keys from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("ttc_academy_progress");
      if (saved) {
        setCompletedKeys(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load academy progress in CourseList", e);
    }
  }, []);

  const courses = Object.values(COURSES_MAP);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course) => {
        // Calculate dynamic progress for each course
        const totalLessons = course.lessons.length;
        const completedCount = course.lessons.filter((lesson) =>
          completedKeys.includes(lesson.key)
        ).length;
        const progressPercent = Math.round((completedCount / totalLessons) * 100);
        const isStarted = completedCount > 0;
        const isCompleted = progressPercent === 100;

        return (
          <div
            key={course.slug}
            className="bg-white border border-gray-border rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between group"
          >
            <div>
              {/* Course Thumbnail Image */}
              <div className="relative h-48 w-full bg-navy/10 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Status Badge */}
                {isCompleted && (
                  <div className="absolute top-4 right-4 bg-green-transform text-navy text-[10px] font-bold font-heading uppercase px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Completed</span>
                  </div>
                )}
              </div>

              {/* Course Info Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-heading font-extrabold text-xl text-navy group-hover:text-green-transform transition">
                    {course.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                {/* Course Metadata */}
                <div className="flex items-center gap-4 text-xs font-medium text-gray-mutedText pt-2 border-t border-gray-border">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-navy" />
                    {totalLessons} Lessons
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-gold-warm" />
                    ~{totalLessons * 10} Mins
                  </span>
                </div>

                {/* Instructor Info */}
                <div className="flex items-center gap-3 pt-3">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-border shrink-0">
                    <Image
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-[11px] truncate">
                    <p className="font-bold text-navy truncate">
                      {course.instructor.name}
                    </p>
                    <p className="text-gray-400 truncate">{course.instructor.role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer with Progress & Action Button */}
            <div className="p-6 pt-0 space-y-4">
              {/* Dynamic Progress Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px] font-bold">
                  <span className="text-navy">Course Progress</span>
                  <span className="text-green-transform font-mono">
                    {progressPercent}%
                  </span>
                </div>
                <div className="w-full bg-gray-soft h-2 rounded-full overflow-hidden border border-gray-border">
                  <div
                    className="bg-green-transform h-full transition-all duration-500 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Action Button */}
              <Link
                href={`/civic-academy/${course.slug}`}
                className="w-full py-3 px-4 bg-navy text-white hover:bg-green-transform hover:text-navy font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center justify-center gap-2 shadow-sm"
              >
                <span>
                  {isCompleted
                    ? "Review Course"
                    : isStarted
                    ? "Continue Learning"
                    : "Start Course"}
                </span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}