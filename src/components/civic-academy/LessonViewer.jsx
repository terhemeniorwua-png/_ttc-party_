"use client";

import { CheckCircle2, Circle, ArrowRight, BookOpen, Sparkles } from "lucide-react";

export default function LessonViewer({
  lesson,
  courseTitle,
  isCompleted,
  onToggleComplete,
  onContinue,
  hasNext,
}) {
  if (!lesson) return null;

  return (
    <div className="bg-white border border-gray-border rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm flex flex-col justify-between h-full">
      <div className="space-y-6">
        {/* Lesson Header */}
        <div className="space-y-2 border-b border-gray-border pb-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-navy bg-navy/5 px-2.5 py-1 rounded-full">
              Lesson {lesson.id}
            </span>
            <span className="text-[10px] font-bold text-gray-mutedText">
              • {lesson.duration}
            </span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl text-navy">
            {lesson.title}
          </h2>
        </div>

        {/* Lesson Overview Box */}
        <div className="p-5 bg-gray-soft/60 rounded-2xl border border-gray-border space-y-2">
          <h4 className="font-heading font-bold text-navy text-xs uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-green-transform" />
            <span>Summary & Context</span>
          </h4>
          <p className="text-xs text-gray-600 leading-relaxed">
            {lesson.summary}
          </p>
        </div>

        {/* Takeaways */}
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-navy text-xs uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gold-warm" />
            <span>Key Takeaways:</span>
          </h4>
          <ul className="space-y-2.5">
            {lesson.takeaways.map((point, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-xs text-gray-700 bg-white p-3 rounded-xl border border-gray-border shadow-2xs"
              >
                <span className="w-2 h-2 rounded-full bg-green-transform mt-1.5 shrink-0" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-6 border-t border-gray-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={() => onToggleComplete(lesson.key)}
          className={`w-full sm:w-auto px-5 py-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 ${
            isCompleted
              ? "bg-green-transform/20 text-navy border border-green-transform/40"
              : "bg-navy text-white hover:bg-green-transform hover:text-navy"
          }`}
        >
          {isCompleted ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-green-transform" />
              <span>Marked Complete</span>
            </>
          ) : (
            <>
              <Circle className="w-4 h-4" />
              <span>Mark as Completed</span>
            </>
          )}
        </button>

        {hasNext && (
          <button
            onClick={onContinue}
            className="w-full sm:w-auto px-6 py-3 bg-green-transform text-navy font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-navy hover:text-white transition shadow-sm flex items-center justify-center gap-2"
          >
            <span>Continue Learning</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}