"use client";

import { Target, Flag, ShieldCheck } from "lucide-react";

export default function WhoWeAreSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto space-y-20">
      {/* Who We Are & Our Story */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 bg-navy/5 text-navy font-bold text-xs rounded-md uppercase tracking-wider">
            Who We Are
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy leading-tight">
            A United Front for Civic Renewal
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            We are a coalition of policy analysts, community organizers, grassroots leaders, and dedicated citizens working together to build functional democratic systems. Our work bridges the gap between public policy design and community-level execution.
          </p>
        </div>

        <div className="bg-gray-soft/60 border border-gray-border p-8 rounded-2xl space-y-4">
          <div className="inline-block px-3 py-1 bg-gold-warm/20 text-navy font-bold text-xs rounded-md uppercase tracking-wider">
            Our Story
          </div>
          <h3 className="font-heading font-bold text-2xl text-navy">
            Why TTC Was Created
          </h3>
          <p className="text-gray-mutedText leading-relaxed text-sm sm:text-base">
            TTC was established to address systemic gaps in civic engagement and public sector accountability. Traditional political frameworks often insulate decision-making from public input. TTC was built to empower citizens with objective data, structured voter literacy, and direct collaborative channels with local governance.
          </p>
        </div>
      </div>

      {/* Our Mission Statement Card */}
      <div className="bg-navy text-white rounded-3xl p-8 md:p-12 relative overflow-hidden border border-white/10 shadow-xl">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-green-transform/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="flex items-center gap-2 text-gold-warm font-bold text-xs uppercase tracking-wider">
            <Target className="w-4 h-4 text-green-transform" />
            <span>Our Mission</span>
          </div>
          <h3 className="font-heading font-extrabold text-2xl sm:text-4xl leading-tight text-white">
            "To promote practical ideas, civic participation and responsible leadership."
          </h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            We measure our impact by the tangible improvements in community infrastructure, voter literacy rates, and the transparent operation of local public institutions.
          </p>
        </div>
      </div>
    </section>
  );
}