"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CourseDetailHero({ course, completedCount, progressPercent }) {
  return (
    <div className="bg-navy text-white rounded-3xl overflow-hidden border border-white/10 shadow-xl">
      <div className="relative h-64 sm:h-80 w-full bg-navy/20">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />

        <div className="absolute top-6 left-6 z-10">
          <Link
            href="/civic-academy"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition backdrop-blur-md border border-white/10"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Academy</span>
          </Link>
        </div>
      </div>

      <div className="p-6 sm:p-10 -mt-20 relative z-10 space-y-6">
        <div className="space-y-3 max-w-3xl">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            {course.title}
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            {course.description}
          </p>
        </div>

        {/* Instructor & Meta Info */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-green-transform shrink-0">
              <Image
                src={course.instructor.avatar}
                alt={course.instructor.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase tracking-wider text-gold-warm font-bold block">
                Instructor
              </span>
              <p className="text-xs font-bold text-white">{course.instructor.name}</p>
              <p className="text-[11px] text-gray-400">{course.instructor.role}</p>
            </div>
          </div>

          {/* Overall Course Progress Bar */}
          <div className="bg-white/5 border border-white/10 p-4 rounded-2xl space-y-2 min-w-[240px]">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-gray-300">Course Progress</span>
              <span className="text-green-transform font-mono">{progressPercent}%</span>
            </div>
            <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-green-transform h-full transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="text-[10px] text-gray-400 text-right">
              {completedCount} of {course.lessons.length} Lessons Completed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}