"use client";

import { Eye, Target, CheckCircle2 } from "lucide-react";

export default function VisionMissionSection() {
  return (
    <section id="vision-mission" className="py-20 md:py-28 px-6 max-w-7xl mx-auto space-y-16">
      {/* Our Vision */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy/5 text-navy font-bold text-xs rounded-md uppercase tracking-wider">
            <Eye className="w-4 h-4 text-blue-trust" />
            <span>Our Vision</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-navy leading-tight">
            An Informed Citizenry Driving Institutional Accountability
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            We envision a society where democratic power resides genuinely with the people. Public funds are systematically tracked, community priorities directly inform local budgets, and leadership is judged strictly by operational outcomes.
          </p>
          <ul className="space-y-3 pt-2">
            {[
              "Decentralized civic oversight in all 774 Local Government Areas",
              "100% transparent access to state and ward expenditure data",
              "Institutionalized voter literacy before every electoral cycle"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-navy font-semibold">
                <CheckCircle2 className="w-4 h-4 text-green-transform shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-border h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=1000"
            alt="Community Forum"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent flex items-end p-8">
            <p className="text-white font-heading font-bold text-lg">
              "Civic participation is not an event every four years—it is an everyday standard."
            </p>
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="bg-navy text-white rounded-3xl p-8 md:p-14 relative overflow-hidden border border-white/10 shadow-2xl">
        <div className="absolute right-0 top-0 w-96 h-96 bg-green-transform/10 rounded-full blur-3xl pointer-events-none" />
        <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-gold-warm font-bold text-xs uppercase tracking-wider">
              <Target className="w-4 h-4 text-green-transform" />
              <span>Our Mission</span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-4xl leading-tight text-white">
              To build practical civic software, organize ward-level assemblies, and equip citizens with tools to audit public services.
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              We bridge policy formulation with direct field action, turning passive observation into active, constructive civic partnership.
            </p>
          </div>
          <div className="md:col-span-4 bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md space-y-3">
            <h4 className="font-heading font-bold text-lg text-gold-warm">Operational Focus</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Every initiative launched by TTC must meet three strict metrics: **Public Transparency**, **Measurable Utility**, and **Scalable Local Adoption**.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}