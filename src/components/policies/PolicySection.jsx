"use client";

import { CheckCircle2, AlertCircle, Compass, Target, Layers } from "lucide-react";

export default function PolicySection({ policy }) {
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <div className="space-y-3">
        <h2 className="font-heading font-bold text-2xl text-navy">Executive Summary</h2>
        <p className="text-sm md:text-base text-gray-mutedText leading-relaxed">
          {policy.introduction}
        </p>
      </div>

      {/* The Problem */}
      <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-2xl space-y-3">
        <div className="flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-wider">
          <AlertCircle className="w-4 h-4" />
          <span>The Problem</span>
        </div>
        <p className="text-sm text-navy leading-relaxed font-medium">
          {policy.problem}
        </p>
      </div>

      {/* Our Approach */}
      <div className="p-6 bg-navy/5 border border-navy/10 rounded-2xl space-y-3">
        <div className="flex items-center gap-2 text-navy font-bold text-xs uppercase tracking-wider">
          <Compass className="w-4 h-4 text-blue-trust" />
          <span>Our Strategic Approach</span>
        </div>
        <p className="text-sm text-gray-mutedText leading-relaxed">
          {policy.approach}
        </p>
      </div>

      {/* Key Proposals */}
      <div className="space-y-4">
        <h3 className="font-heading font-bold text-xl text-navy flex items-center gap-2">
          <Target className="w-5 h-5 text-green-transform" />
          <span>Key Legislative Proposals</span>
        </h3>
        <div className="space-y-3">
          {policy.keyProposals.map((prop, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border border-gray-border rounded-xl shadow-sm flex items-start gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-green-transform shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-navy font-semibold leading-relaxed">
                {prop}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Expected Outcomes */}
      <div className="space-y-4">
        <h3 className="font-heading font-bold text-xl text-navy">Expected Outcomes</h3>
        <ul className="grid sm:grid-cols-3 gap-4">
          {policy.expectedOutcomes.map((outcome, idx) => (
            <li
              key={idx}
              className="p-4 bg-gray-soft/60 border border-gray-border rounded-xl text-xs text-navy font-bold space-y-1"
            >
              <span className="text-gold-warm font-heading text-lg block">0{idx + 1}</span>
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Implementation Framework */}
      <div className="p-6 bg-navy text-white rounded-2xl border border-white/10 space-y-3">
        <div className="flex items-center gap-2 text-gold-warm font-bold text-xs uppercase tracking-wider">
          <Layers className="w-4 h-4 text-green-transform" />
          <span>Implementation Framework</span>
        </div>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
          {policy.framework}
        </p>
      </div>
    </div>
  );
}