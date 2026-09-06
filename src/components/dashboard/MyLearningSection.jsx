"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export default function MyLearningSection({ coursesProgress = [] }) {
  return (
    <div className="bg-white border border-gray-border rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-border pb-4">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-navy" />
          <h2 className="font-heading font-extrabold text-xl text-navy">
            My Learning
          </h2>
        </div>
        <Link
          href="/civic-academy"
          className="text-xs font-bold text-navy hover:text-green-transform transition flex items-center gap-1"
        >
          View All Courses
        </Link>
      </div>

      <div className="space-y-4">
        {coursesProgress.map((course) => (
          <div
            key={course.slug}
            className="p-4 bg-gray-soft/50 border border-gray-border rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="space-y-1 max-w-md">
              <h3 className="font-heading font-bold text-sm text-navy">
                {course.title}
              </h3>
              <p className="text-xs text-gray-mutedText">
                {course.completedCount} of {course.totalLessons} Lessons Completed
              </p>
            </div>

            <div className="flex items-center gap-4 min-w-[200px]">
              <div className="flex-1 space-y-1">
                <div className="flex justify-between text-[10px] font-bold">
                  <span className="text-navy">Progress</span>
                  <span className="text-green-transform">{course.percent}%</span>
                </div>
                <div className="w-full bg-gray-border h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-green-transform h-full transition-all duration-300 rounded-full"
                    style={{ width: `${course.percent}%` }}
                  />
                </div>
              </div>

              <Link
                href={`/civic-academy/${course.slug}`}
                className="px-4 py-2 bg-navy text-white hover:bg-green-transform hover:text-navy text-xs font-heading font-bold rounded-xl transition shrink-0 flex items-center gap-1"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}