"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock } from "lucide-react";

export default function CourseDetailHero({ course, completedCount, progressPercent }) {
  const bgHeroImage =
    course.heroImage ||
    course.image ||
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2000&auto=format&fit=crop";

  return (
    <div className="relative bg-navy text-white rounded-3xl overflow-hidden border border-white/10 shadow-xl my-6">
      {/* Subtle Background Image Movement */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={bgHeroImage}
          alt={course.title}
          fill
          className="object-cover opacity-30 animate-bg-movement"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-black/40" />
      </div>

      {/* Floating Ambient Shapes */}
      <div className="absolute top-6 right-10 w-48 h-48 rounded-full bg-green-transform/10 blur-2xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-4 left-1/4 w-56 h-56 rounded-full bg-gold-warm/10 blur-2xl pointer-events-none animate-float-reverse" />

      {/* Back Button Bar */}
      <div className="relative z-10 p-6 sm:p-8 pb-0">
        <Link
          href="/civic-academy"
          className="animate-fade-in inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition backdrop-blur-md border border-white/10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Academy</span>
        </Link>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 p-6 sm:p-10 space-y-8">
        <div className="space-y-4 max-w-3xl animate-fade-in">
          <div className="flex items-center gap-3 text-xs text-gold-warm font-mono font-bold">
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <BookOpen className="w-3.5 h-3.5 text-green-transform" />
              {course.lessons.length} Lessons
            </span>
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <Clock className="w-3.5 h-3.5 text-gold-warm" />
              ~{course.lessons.length * 10} Mins
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white">
            {course.title}
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl">
            {course.description}
          </p>
        </div>

        {/* Instructor & Progress */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/10">
          <div className="flex items-center gap-3 animate-btn-stagger-1">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-green-transform shrink-0">
              <Image
                src={course.instructor.avatar}
                alt={course.instructor.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase tracking-wider text-gold-warm font-bold block">
                Course Lead
              </span>
              <p className="text-xs font-bold text-white">{course.instructor.name}</p>
              <p className="text-[11px] text-gray-400">{course.instructor.role}</p>
            </div>
          </div>

          {/* Dynamic Progress Card */}
          <div className="animate-btn-stagger-2 bg-white/10 border border-white/15 backdrop-blur-md p-4 rounded-2xl space-y-2 min-w-[240px]">
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