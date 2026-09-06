"use client";

import { CheckCircle2, PlayCircle } from "lucide-react";

export default function CourseLessonList({
  lessons,
  activeLessonIndex,
  completedKeys,
  onSelectLesson,
}) {
  return (
    <div className="bg-white border border-gray-border rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="border-b border-gray-border pb-4">
        <h3 className="font-heading font-extrabold text-xl text-navy">
          Lessons Syllabus
        </h3>
        <p className="text-xs text-gray-mutedText">
          Select a lesson to access materials, video, and quiz.
        </p>
      </div>

      <div className="space-y-3">
        {lessons?.map((lesson, idx) => {
          const isDone = completedKeys.includes(lesson.key);
          const isActive = activeLessonIndex === idx;

          return (
            <button
              key={lesson.id}
              onClick={() => onSelectLesson(idx)}
              className={`w-full p-4 rounded-2xl text-left flex items-center justify-between gap-4 transition border ${
                isActive
                  ? "bg-navy text-white border-navy shadow-md"
                  : "bg-gray-soft/50 hover:bg-gray-soft text-navy border-gray-border"
              }`}
            >
              <div className="flex items-center gap-3.5 truncate">
                <span
                  className={`font-mono text-xs font-bold shrink-0 px-2.5 py-1 rounded-lg ${
                    isActive
                      ? "bg-white/10 text-gold-warm"
                      : "bg-navy/5 text-navy/70"
                  }`}
                >
                  {lesson.id}
                </span>

                <div className="truncate">
                  <h4
                    className={`font-heading font-bold text-sm truncate ${
                      isActive ? "text-white" : "text-navy"
                    }`}
                  >
                    {lesson.title}
                  </h4>
                  <span
                    className={`text-[10px] ${
                      isActive ? "text-gray-300" : "text-gray-mutedText"
                    }`}
                  >
                    Duration: {lesson.duration}
                  </span>
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                {isDone ? (
                  <CheckCircle2 className="w-5 h-5 text-green-transform" />
                ) : (
                  <PlayCircle
                    className={`w-5 h-5 ${
                      isActive ? "text-green-transform" : "text-gray-400"
                    }`}
                  />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}