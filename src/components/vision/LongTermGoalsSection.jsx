"use client";

import { Calendar, CheckCircle } from "lucide-react";

export default function LongTermGoalsSection() {
  const goals = [
    {
      horizon: "2026 - 2027",
      title: "Full LGA Budget Coverage",
      details: "Deploy public expenditure monitoring committees across all 774 Local Government Areas."
    },
    {
      horizon: "2027 - 2028",
      title: "Civic Literacy Accreditation",
      details: "Train 500,000 citizens through the Civic Academy with verified certifications in public finance monitoring."
    },
    {
      horizon: "2028 - 2030",
      title: "Legislative Transparency Act",
      details: "Sponsor and pass mandatory open-data statutes requiring real-time publishing of public procurement contracts."
    }
  ];

  return (
    <section className="py-20 bg-navy text-white px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-gold-warm uppercase tracking-wider bg-white/5 border border-white/10 px-3 py-1 rounded-full">
            Strategic Roadmap
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Our Long-Term Goals
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm">
            Clear time horizons for institutionalizing civic accountability across Nigeria.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {goals.map((g, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md space-y-4 relative"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-green-transform">
                <Calendar className="w-4 h-4" />
                <span>{g.horizon}</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-white">{g.title}</h3>
              <p className="text-xs text-gray-300 leading-relaxed">{g.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}