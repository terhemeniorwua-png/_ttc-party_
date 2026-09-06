"use client";

import { CheckCircle2, BookMarked, Trophy } from "lucide-react";

export default function ProgressTracker({ completedCoursesCount, totalCoursesCount }) {
  const percentage = Math.round((completedCoursesCount / totalCoursesCount) * 100) || 0;

  return (
    <div className="bg-navy text-white p-6 md:p-8 rounded-3xl border border-white/10 shadow-xl relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-48 h-48 bg-gold-warm/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="grid sm:grid-cols-3 gap-6 items-center relative z-10">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-gold-warm text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-4 h-4 text-green-transform" /> Your Academy Dashboard
          </div>
          <h3 className="font-heading font-bold text-xl md:text-2xl text-white">
            Learning Progress
          </h3>
          <p className="text-xs text-gray-300">
            Track your completed modules and earn certified badges.
          </p>
        </div>

        {/* Status Numbers */}
        <div className="flex items-center gap-6 justify-start sm:justify-center border-y sm:border-y-0 sm:border-x border-white/10 py-4 sm:py-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-green-transform">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="font-heading font-bold text-lg text-white">{completedCoursesCount}</p>
              <p className="text-[11px] text-gray-300">Completed</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-gold-warm">
              <BookMarked className="w-5 h-5" />
            </div>
            <div>
              <p className="font-heading font-bold text-lg text-white">{totalCoursesCount}</p>
              <p className="text-[11px] text-gray-300">Total Courses</p>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs font-bold">
            <span className="text-gray-300">Overall Mastery</span>
            <span className="text-green-transform">{percentage}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden p-0.5 border border-white/10">
            <div
              className="bg-green-transform h-full rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}