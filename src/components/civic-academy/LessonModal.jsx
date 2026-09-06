"use client";

import { X, CheckCircle2, Circle, ArrowLeft, ArrowRight, BookOpen } from "lucide-react";

export default function LessonModal({
  isOpen,
  onClose,
  lesson,
  courseTitle,
  isCompleted,
  onToggleComplete,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}) {
  if (!isOpen || !lesson) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative animate-in fade-in zoom-in duration-200 border border-gray-border max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-gray-border pb-4 pr-8">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-green-transform bg-green-transform/10 px-2.5 py-1 rounded-full inline-block">
              {courseTitle}
            </span>
            <h3 className="font-heading font-extrabold text-xl text-navy">
              {lesson.id} — {lesson.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-navy rounded-full transition absolute top-4 right-4"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Lesson Body */}
        <div className="overflow-y-auto space-y-4 pr-2 text-xs leading-relaxed text-gray-600 flex-1">
          <div className="p-4 bg-gray-soft rounded-2xl border border-gray-border space-y-2">
            <h4 className="font-heading font-bold text-navy text-sm flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-navy" />
              <span>Lesson Overview</span>
            </h4>
            <p>{lesson.summary}</p>
          </div>

          <div className="space-y-3 pt-2">
            <h5 className="font-heading font-bold text-navy text-xs uppercase tracking-wider">
              Key Learning Takeaways:
            </h5>
            <ul className="space-y-2">
              {lesson.takeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-transform mt-1.5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-gray-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => onToggleComplete(lesson.key)}
            className={`w-full sm:w-auto px-5 py-2.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 ${
              isCompleted
                ? "bg-green-transform/20 text-navy border border-green-transform/40"
                : "bg-navy text-white hover:bg-green-transform hover:text-navy"
            }`}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-green-transform fill-green-transform/30" />
                <span>Marked Complete</span>
              </>
            ) : (
              <>
                <Circle className="w-4 h-4" />
                <span>Mark as Completed</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={onPrev}
              disabled={!hasPrev}
              className="px-3.5 py-2 bg-gray-soft text-navy rounded-xl text-xs font-bold hover:bg-gray-200 disabled:opacity-40 transition flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Prev
            </button>
            <button
              onClick={onNext}
              disabled={!hasNext}
              className="px-3.5 py-2 bg-gray-soft text-navy rounded-xl text-xs font-bold hover:bg-gray-200 disabled:opacity-40 transition flex items-center gap-1"
            >
              Next <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}