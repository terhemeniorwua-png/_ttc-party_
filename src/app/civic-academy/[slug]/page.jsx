"use client";
import { useState, useEffect, use } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle, HelpCircle, Award } from "lucide-react";
import { getStorageItem, setStorageItem } from "@/lib/storage";
import Modal from "@/components/ui/Modal";

export default function LessonPlayerPage({ params }) {

    const {slug} = use(params)


  const [course, setCourse] = useState(null);
  const [activeLesson, setActiveLesson] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mockLessons = [
    {
      id: "l1",
      title: "01 — Structure of Democratic Government",
      content:
        "Government operates through three independent yet coordinated arms: the Executive, Legislature, and Judiciary. Understanding their roles prevents administrative overreach and ensures civil liberty.",
    },
    {
      id: "l2",
      title: "02 — Executive Responsibilities & Civic Oversight",
      content:
        "The executive arm implements laws and manages public resources. Citizens hold executive bodies accountable through public audits, legislative hearings, and participatory budgeting.",
    },
  ];

  const quizQuestion = {
    question: "Which branch of government is responsible for interpreting laws and serving justice?",
    options: ["Executive Branch", "Legislative Branch", "Judicial Branch", "Local Council"],
    correctIndex: 2,
  };

  useEffect(() => {
    const courses = getStorageItem("ttc_courses");
    const found = courses.find((c) => c.slug === slug) || {
      title: "Understanding Government",
      description: "Learn the fundamentals of civic governance.",
      slug: slug,
    };
    setCourse(found);
  }, [slug]);

  const handleQuizSubmit = () => {
    if (selectedAnswer === null) return;
    setQuizSubmitted(true);

    // Calculate progress and store locally
    const updatedCourses = getStorageItem("ttc_courses").map((c) => {
      if (c.slug === slug) {
        return { ...c, progress: 100 };
      }
      return c;
    });

    setStorageItem("ttc_courses", updatedCourses);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white py-10 px-6 font-body">
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Module Completed!"
        message="Congratulations! You have completed this civic course. Your progress is saved to your member profile."
        type="success"
      />

      <div className="max-w-5xl mx-auto">
        <Link
          href="/civic-academy"
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-mutedText hover:text-navy mb-6 transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Civic Academy
        </Link>

        {/* Course Header */}
        <div className="border-b border-gray-border pb-6 mb-8">
          <span className="text-xs font-bold text-green-transform uppercase tracking-wider">
            Interactive Module
          </span>
          <h1 className="font-heading font-extrabold text-3xl text-navy mt-1">
            {course?.title || "Civic Course"}
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Sidebar Lesson List */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-navy uppercase tracking-wider mb-3">Module Lessons</h3>
            {mockLessons.map((lesson, idx) => (
              <button
                key={lesson.id}
                onClick={() => setActiveLesson(idx)}
                className={`w-full text-left p-3.5 rounded-lg text-xs font-semibold transition border ${
                  activeLesson === idx
                    ? "bg-navy text-white border-navy"
                    : "bg-gray-soft text-gray-darkText border-gray-border hover:border-navy"
                }`}
              >
                {lesson.title}
              </button>
            ))}
          </div>

          {/* Main Lesson Reader & Quiz Area */}
          <div className="md:col-span-2 space-y-8">
            <div className="p-6 bg-gray-soft/50 rounded-2xl border border-gray-border">
              <h2 className="font-heading font-bold text-xl text-navy mb-3">
                {mockLessons[activeLesson]?.title}
              </h2>
              <p className="text-sm text-gray-mutedText leading-relaxed">
                {mockLessons[activeLesson]?.content}
              </p>
            </div>

            {/* Knowledge Check Assessment */}
            <div className="p-6 bg-white rounded-2xl border border-gray-border shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <HelpCircle className="w-5 h-5 text-blue-trust" />
                <h3 className="font-heading font-bold text-lg text-navy">Knowledge Check</h3>
              </div>

              <p className="text-sm font-semibold text-gray-darkText mb-4">{quizQuestion.question}</p>

              <div className="space-y-2 mb-6">
                {quizQuestion.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => !quizSubmitted && setSelectedAnswer(idx)}
                    className={`w-full text-left p-3 rounded-lg text-xs font-medium border transition ${
                      selectedAnswer === idx
                        ? "bg-blue-trust/10 border-blue-trust text-blue-trust font-bold"
                        : "bg-white border-gray-border text-gray-darkText hover:border-navy"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {!quizSubmitted ? (
                <button
                  onClick={handleQuizSubmit}
                  disabled={selectedAnswer === null}
                  className="w-full py-2.5 bg-green-transform text-white font-bold text-sm rounded-lg hover:bg-opacity-90 transition disabled:opacity-50"
                >
                  Submit Quiz Answer
                </button>
              ) : (
                <div className="p-4 bg-green-transform/10 rounded-lg border border-green-transform/20 text-center">
                  <CheckCircle className="w-6 h-6 text-green-transform mx-auto mb-1" />
                  <p className="font-heading font-bold text-sm text-navy">
                    Score: {selectedAnswer === quizQuestion.correctIndex ? "1/1 (100%)" : "0/1 (Retry Needed)"}
                  </p>
                  <p className="text-xs text-gray-mutedText mt-1">
                    {selectedAnswer === quizQuestion.correctIndex
                      ? "Excellent! You answered correctly."
                      : "The correct answer is Judicial Branch."}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}