"use client";

import { useState } from "react";
import { CheckCircle2, XCircle, HelpCircle, RotateCcw } from "lucide-react";

export default function LessonQuiz({ quiz, onQuizPass }) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  if (!quiz || !quiz.questions || quiz.questions.length === 0) return null;

  const handleSelectOption = (qIdx, optIdx) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleSubmitQuiz = () => {
    let correctCount = 0;
    quiz.questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        correctCount += 1;
      }
    });

    const finalPercent = Math.round((correctCount / quiz.questions.length) * 100);
    setScore(finalPercent);
    setSubmitted(true);

    if (finalPercent >= 70 && onQuizPass) {
      onQuizPass();
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  return (
    <div className="bg-gray-soft/60 border border-gray-border rounded-2xl p-6 space-y-6">
      <div className="flex items-center justify-between border-b border-gray-border pb-4">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-gold-warm" />
          <h3 className="font-heading font-extrabold text-navy text-base">
            Lesson Knowledge Check
          </h3>
        </div>
        {submitted && (
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full ${
              score >= 70
                ? "bg-green-transform/20 text-navy border border-green-transform"
                : "bg-red-100 text-red-700 border border-red-300"
            }`}
          >
            Score: {score}% {score >= 70 ? "— Passed!" : "— Try Again"}
          </span>
        )}
      </div>

      <div className="space-y-6">
        {quiz.questions.map((q, qIdx) => {
          const isSelected = selectedAnswers[qIdx] !== undefined;
          const isCorrect = submitted && selectedAnswers[qIdx] === q.correctAnswer;
          const isWrong =
            submitted &&
            isSelected &&
            selectedAnswers[qIdx] !== q.correctAnswer;

          return (
            <div key={qIdx} className="space-y-3">
              <p className="font-heading font-bold text-navy text-xs sm:text-sm">
                {qIdx + 1}. {q.question}
              </p>

              <div className="grid gap-2">
                {q.options.map((option, optIdx) => {
                  const chosen = selectedAnswers[qIdx] === optIdx;
                  let btnStyle = "bg-white border-gray-border text-navy hover:bg-navy/5";

                  if (submitted) {
                    if (optIdx === q.correctAnswer) {
                      btnStyle = "bg-green-transform/20 border-green-transform text-navy font-bold";
                    } else if (chosen && optIdx !== q.correctAnswer) {
                      btnStyle = "bg-red-50 border-red-300 text-red-700";
                    }
                  } else if (chosen) {
                    btnStyle = "bg-navy text-white border-navy font-semibold";
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(qIdx, optIdx)}
                      disabled={submitted}
                      className={`p-3 rounded-xl border text-left text-xs transition flex items-center justify-between gap-3 ${btnStyle}`}
                    >
                      <span>{option}</span>
                      {submitted && optIdx === q.correctAnswer && (
                        <CheckCircle2 className="w-4 h-4 text-green-transform shrink-0" />
                      )}
                      {submitted && chosen && optIdx !== q.correctAnswer && (
                        <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-4 border-t border-gray-border flex items-center justify-between">
        {submitted ? (
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-navy/10 hover:bg-navy hover:text-white text-navy font-bold text-xs rounded-xl transition flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Retry Quiz
          </button>
        ) : (
          <button
            onClick={handleSubmitQuiz}
            disabled={Object.keys(selectedAnswers).length < quiz.questions.length}
            className="w-full sm:w-auto px-6 py-2.5 bg-green-transform text-navy font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-navy hover:text-white disabled:opacity-40 transition shadow-sm"
          >
            Submit Quiz
          </button>
        )}
      </div>
    </div>
  );
}