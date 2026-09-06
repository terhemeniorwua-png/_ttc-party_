"use client";

import { Clock, BookOpen, CheckCircle2, ArrowRight } from "lucide-react";

export default function CourseCard({ course, isCompleted, onSelect }) {
  return (
    <div className="bg-white border border-gray-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div className="p-6 space-y-4">
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-bold text-navy bg-navy/5 px-3 py-1 rounded-full uppercase tracking-wider">
            {course.category}
          </span>
          <span className="text-xs font-semibold text-gray-mutedText flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-blue-trust" />
            {course.duration}
          </span>
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <h3 className="font-heading font-bold text-xl text-navy line-clamp-2">
            {course.title}
          </h3>
          <p className="text-xs text-gray-mutedText leading-relaxed line-clamp-3">
            {course.description}
          </p>
        </div>

        {/* Modules Count */}
        <div className="flex items-center gap-2 text-xs text-navy font-semibold pt-2 border-t border-gray-border">
          <BookOpen className="w-4 h-4 text-gold-warm" />
          <span>{course.modulesCount} Learning Modules</span>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-6 py-4 bg-gray-soft/50 border-t border-gray-border flex items-center justify-between">
        {isCompleted ? (
          <span className="text-xs font-bold text-green-transform flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4" /> Completed
          </span>
        ) : (
          <span className="text-xs font-bold text-gray-mutedText">Not Enrolled</span>
        )}

        <button
          onClick={() => onSelect(course)}
          className="px-4 py-2 bg-navy text-white text-xs font-bold font-heading rounded-lg hover:bg-blue-trust transition flex items-center gap-1.5"
        >
          <span>{isCompleted ? "Review Module" : "Start Course"}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}