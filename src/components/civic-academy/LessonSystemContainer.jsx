"use client";

import { useState, useEffect } from "react";
import LessonVideoPlayer from "./LessonVideoPlayer";
import LessonQuiz from "./LessonQuiz";
import { CheckCircle2, Circle, ArrowRight, BookOpen, Film } from "lucide-react";

export default function LessonSystemContainer({
  lesson,
  courseProgress,
  onToggleComplete,
  onNext,
  hasNext,
}) {
  const [activeTab, setActiveTab] = useState("content"); // 'content' | 'video' | 'quiz'

  const isCompleted = courseProgress.completedKeys.includes(lesson.key);

  // Auto-progress percent bar generator for UI feedback
  const progressPercent = Math.round(
    (courseProgress.completedKeys.length / courseProgress.totalLessons) * 100
  );

  return (
    <div className="bg-white border border-gray-border rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
      {/* Course Overall Progress Indicator */}
      <div className="bg-navy text-white p-4 rounded-2xl space-y-2">
        <div className="flex justify-between items-center text-xs font-bold">
          <span className="text-gray-300 uppercase tracking-wider font-heading">
            Course Progress
          </span>
          <span className="text-green-transform font-mono">{progressPercent}%</span>
        </div>
        <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
          <div
            className="bg-green-transform h-full transition-all duration-500 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Tab Controls */}
      <div className="flex items-center gap-2 border-b border-gray-border pb-3 overflow-x-auto">
        <button
          onClick={() => setActiveTab("content")}
          className={`px-4 py-2 rounded-xl text-xs font-bold font-heading uppercase tracking-wider transition flex items-center gap-2 ${
            activeTab === "content"
              ? "bg-navy text-white shadow-sm"
              : "bg-gray-soft text-gray-mutedText hover:text-navy"
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Lesson Content</span>
        </button>

        <button
          onClick={() => setActiveTab("video")}
          className={`px-4 py-2 rounded-xl text-xs font-bold font-heading uppercase tracking-wider transition flex items-center gap-2 ${
            activeTab === "video"
              ? "bg-navy text-white shadow-sm"
              : "bg-gray-soft text-gray-mutedText hover:text-navy"
          }`}
        >
          <Film className="w-3.5 h-3.5" />
          <span>Watch Video</span>
        </button>

        {lesson.quiz && (
          <button
            onClick={() => setActiveTab("quiz")}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-heading uppercase tracking-wider transition flex items-center gap-2 ${
              activeTab === "quiz"
                ? "bg-navy text-white shadow-sm"
                : "bg-gray-soft text-gray-mutedText hover:text-navy"
            }`}
          >
            <span>Take Quiz</span>
          </button>
        )}
      </div>

      {/* Tab Panels */}
      {activeTab === "content" && (
        <div className="space-y-4 text-xs leading-relaxed text-gray-700">
          <p className="text-sm font-semibold text-navy leading-relaxed">
            {lesson.summary}
          </p>

          <div className="space-y-2 pt-2">
            <h5 className="font-heading font-bold text-navy text-xs uppercase tracking-wider">
              Core Takeaways:
            </h5>
            <ul className="space-y-2">
              {lesson.takeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-transform mt-1.5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {activeTab === "video" && (
        <LessonVideoPlayer videoUrl={lesson.videoUrl} title={lesson.title} />
      )}

      {activeTab === "quiz" && lesson.quiz && (
        <LessonQuiz
          quiz={lesson.quiz}
          onQuizPass={() => onToggleComplete(lesson.key)}
        />
      )}

      {/* Action Footer */}
      <div className="pt-6 border-t border-gray-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={() => onToggleComplete(lesson.key)}
          className={`w-full sm:w-auto px-5 py-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 ${
            isCompleted
              ? "bg-green-transform/20 text-navy border border-green-transform"
              : "bg-navy text-white hover:bg-green-transform hover:text-navy"
          }`}
        >
          {isCompleted ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-green-transform" />
              <span>Lesson Completed</span>
            </>
          ) : (
            <>
              <Circle className="w-4 h-4" />
              <span>Mark Complete</span>
            </>
          )}
        </button>

        {hasNext && (
          <button
            onClick={onNext}
            className="w-full sm:w-auto px-6 py-3 bg-green-transform text-navy font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-navy hover:text-white transition shadow-sm flex items-center justify-center gap-2"
          >
            <span>Next Lesson</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}