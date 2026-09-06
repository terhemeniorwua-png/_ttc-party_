"use client";

import { X, CheckCircle2, Clock, BookOpen, ShieldCheck } from "lucide-react";

export default function CourseModal({ course, isOpen, onClose, isCompleted, onToggleComplete }) {
  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 md:p-8 space-y-6 shadow-2xl relative border border-gray-border animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-gray-soft hover:bg-gray-200 text-navy transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="space-y-2 pr-8">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-navy bg-navy/5 px-3 py-1 rounded-full uppercase tracking-wider">
              {course.category}
            </span>
            <span className="text-xs text-gray-mutedText flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-blue-trust" />
              {course.duration}
            </span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl text-navy">
            {course.title}
          </h2>
        </div>

        {/* Overview */}
        <p className="text-sm text-gray-mutedText leading-relaxed">
          {course.description}
        </p>

        {/* Course Syllabus / Modules */}
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-sm text-navy uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-gold-warm" /> Syllabus Overview
          </h4>
          <div className="space-y-2">
            {course.syllabus.map((item, idx) => (
              <div
                key={idx}
                className="p-3 bg-gray-soft/60 rounded-xl border border-gray-border text-xs text-navy font-semibold flex items-center gap-3"
              >
                <span className="w-6 h-6 rounded-lg bg-navy/10 text-navy flex items-center justify-center font-bold text-[10px]">
                  0{idx + 1}
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-gray-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-gray-mutedText">
            <ShieldCheck className="w-4 h-4 text-green-transform" />
            <span>Open Access • Certified Civic Curriculum</span>
          </div>

          <button
            onClick={() => {
              onToggleComplete(course.id);
            }}
            className={`w-full sm:w-auto px-6 py-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-md ${
              isCompleted
                ? "bg-gray-200 text-navy hover:bg-gray-300"
                : "bg-green-transform text-navy hover:bg-navy hover:text-white"
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isCompleted ? "Mark as Incomplete" : "Complete & Claim Badge"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}   