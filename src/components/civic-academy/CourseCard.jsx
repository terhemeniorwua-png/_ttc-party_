"use client";

import { CheckCircle2, Circle, PlayCircle, BookOpen, Clock } from "lucide-react";

export default function CourseCard({ course, completedLessons, onSelectLesson }) {
  const Icon = course.icon;
  const courseLessons = course.lessons;
  const completedCount = courseLessons.filter((l) =>
    completedLessons.includes(l.key)
  ).length;

  const progressPercent = Math.round(
    (completedCount / courseLessons.length) * 100
  );

  return (
    <div className="bg-white border border-gray-border rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition duration-300 space-y-6 flex flex-col justify-between group">
      <div className="space-y-5">
        {/* Course Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="p-3.5 bg-navy text-white rounded-2xl group-hover:bg-green-transform group-hover:text-navy transition">
            <Icon className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-bold text-gray-mutedText bg-gray-soft px-3 py-1 rounded-full flex items-center gap-1">
            <Clock className="w-3 h-3 text-gold-warm" />
            {course.duration}
          </span>
        </div>

        <div className="space-y-2">
          <h3 className="font-heading font-extrabold text-xl text-navy group-hover:text-green-transform transition">
            {course.title}
          </h3>
          <p className="text-xs text-gray-mutedText leading-relaxed">
            {course.description}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5 pt-2">
          <div className="flex justify-between text-[11px] font-bold">
            <span className="text-navy">Course Progress</span>
            <span className="text-green-transform">{progressPercent}%</span>
          </div>
          <div className="w-full bg-gray-soft h-2 rounded-full overflow-hidden">
            <div
              className="bg-green-transform h-full transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Lessons List */}
        <div className="space-y-2 pt-2 border-t border-gray-border">
          <span className="text-[10px] font-bold text-gray-mutedText uppercase tracking-wider block mb-3">
            Lessons Syllabus ({courseLessons.length}):
          </span>

          {courseLessons.map((lesson, idx) => {
            const isDone = completedLessons.includes(lesson.key);
            return (
              <button
                key={lesson.id}
                onClick={() => onSelectLesson(course, idx)}
                className="w-full p-3 bg-gray-soft/60 hover:bg-navy/5 rounded-xl text-left flex items-center justify-between gap-3 transition border border-transparent hover:border-gray-border text-xs group/item"
              >
                <div className="flex items-center gap-2.5 truncate pr-2">
                  <span className="font-mono text-[10px] font-bold text-navy/60 shrink-0">
                    {lesson.id}
                  </span>
                  <span className="font-semibold text-navy truncate group-hover/item:text-green-transform transition">
                    {lesson.title}
                  </span>
                </div>

                {isDone ? (
                  <CheckCircle2 className="w-4 h-4 text-green-transform shrink-0" />
                ) : (
                  <PlayCircle className="w-4 h-4 text-gray-400 group-hover/item:text-navy shrink-0 transition" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}