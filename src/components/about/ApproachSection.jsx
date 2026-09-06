"use client";

import { 
  Ear, 
  BrainCircuit, 
  PenTool, 
  Handshake, 
  Zap, 
  BarChart3 
} from "lucide-react";

export default function ApproachSection() {
  const steps = [
    { name: "Listen", desc: "Direct town halls & civic surveys.", icon: Ear },
    { name: "Understand", desc: "Data-driven policy breakdown.", icon: BrainCircuit },
    { name: "Design", desc: "Practical community solutions.", icon: PenTool },
    { name: "Collaborate", desc: "Public & stakeholder partnerships.", icon: Handshake },
    { name: "Act", desc: "Grassroots field implementation.", icon: Zap },
    { name: "Measure", desc: "Transparent progress reporting.", icon: BarChart3 },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold text-green-transform uppercase tracking-wider bg-green-transform/10 px-3 py-1 rounded-full">
          Methodology
        </span>
        <h2 className="font-heading font-extrabold text-3xl text-navy">
          Our Implementation Approach
        </h2>
        <p className="text-gray-mutedText text-sm sm:text-base">
          A structured, iterative workflow designed to turn citizen feedback into measurable civic impact.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
        {steps.map((step, index) => {
          const StepIcon = step.icon;
          return (
            <div
              key={index}
              className="p-5 rounded-2xl border border-gray-border bg-white shadow-sm flex flex-col justify-between space-y-4 hover:border-navy/30 transition"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading font-bold text-xs text-gold-warm bg-navy px-2.5 py-1 rounded-md">
                  0{index + 1}
                </span>
                <StepIcon className="w-5 h-5 text-blue-trust" />
              </div>

              <div className="space-y-1">
                <h3 className="font-heading font-bold text-base text-navy">
                  {step.name}
                </h3>
                <p className="text-xs text-gray-mutedText leading-normal">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}