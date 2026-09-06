"use client";

import { Shield, Users, Eye, Lightbulb } from "lucide-react";

export default function ValuesGridSection() {
  const values = [
    {
      title: "Radical Transparency",
      desc: "Every resource allocation, project audit, and policy statement is published openly for citizen scrutiny.",
      icon: Eye
    },
    {
      title: "Grassroots Ownership",
      desc: "Solutions are never imposed from the top down; they are designed directly alongside ward communities.",
      icon: Users
    },
    {
      title: "Non-Partisan Integrity",
      desc: "We remain strictly independent of political party affiliations, holding all public officials to identical standards.",
      icon: Shield
    },
    {
      title: "Evidence-Based Reform",
      desc: "Policy advocacy is grounded in verified empirical data, fiscal audits, and field-tested research.",
      icon: Lightbulb
    }
  ];

  return (
    <section className="py-20 bg-gray-soft/40 border-y border-gray-border px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-green-transform uppercase tracking-wider bg-green-transform/10 px-3 py-1 rounded-full">
            Core Values
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy">
            The Principles Guarding Our Vision
          </h2>
          <p className="text-gray-mutedText text-sm sm:text-base">
            These foundational commitments define how our teams operate across every project and region.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-border shadow-sm hover:border-navy/30 transition space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center text-blue-trust">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-navy">{val.title}</h3>
                <p className="text-xs text-gray-mutedText leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}