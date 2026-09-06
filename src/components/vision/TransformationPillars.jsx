"use client";

import { Layers, ArrowRight } from "lucide-react";

export default function TransformationPillars() {
  const pillars = [
    {
      step: "01",
      title: "Data Dissection",
      desc: "Converting complex government financial disclosures into plain-language dashboards accessible on any mobile device."
    },
    {
      step: "02",
      title: "Citizen Capacity Building",
      desc: "Training ward leaders and youth delegates through the Civic Academy to conduct peaceful budget advocacy."
    },
    {
      step: "03",
      title: "Direct Stakeholder Town Halls",
      desc: "Creating mandatory dialogue spaces where public officers present project progress directly to local voters."
    },
    {
      step: "04",
      title: "Institutional Policy Reform",
      desc: "Presenting audited field findings to legislative bodies to mandate legal safeguards against public fund diversion."
    }
  ];

  return (
    <section className="py-20 md:py-28 px-6 max-w-7xl mx-auto space-y-16">
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-navy bg-navy/5 px-3 py-1 rounded-full uppercase tracking-wider">
          <Layers className="w-4 h-4 text-green-transform" />
          <span>Transformation Framework</span>
        </div>
        <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-navy leading-tight">
          What Transformation Means in Practice
        </h2>
        <p className="text-gray-mutedText text-sm sm:text-base leading-relaxed">
          Real transformation is not symbolic—it is a repeatable sequence of transparency, civic education, and structured legislative pressure.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((item, idx) => (
          <div
            key={idx}
            className="p-6 bg-white border border-gray-border rounded-2xl shadow-sm space-y-4 relative overflow-hidden group hover:border-green-transform transition"
          >
            <span className="font-heading font-extrabold text-3xl text-navy/20 group-hover:text-green-transform transition">
              {item.step}
            </span>
            <h3 className="font-heading font-bold text-lg text-navy">{item.title}</h3>
            <p className="text-xs text-gray-mutedText leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}