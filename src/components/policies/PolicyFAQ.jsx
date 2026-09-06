"use client";

import { HelpCircle } from "lucide-react";

export default function PolicyFAQ({ faqs }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="pt-8 border-t border-gray-border space-y-6">
      <div className="flex items-center gap-2 text-navy font-bold text-xl font-heading">
        <HelpCircle className="w-5 h-5 text-gold-warm" />
        <span>Questions & Answers</span>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="p-5 bg-gray-soft/40 border border-gray-border rounded-2xl space-y-2">
            <h4 className="font-heading font-bold text-sm text-navy">{faq.question}</h4>
            <p className="text-xs text-gray-mutedText leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}