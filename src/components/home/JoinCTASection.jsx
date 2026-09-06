"use client";
import Link from "next/link";
import { UserPlus, HeartHandshake, Compass, ArrowRight, ShieldCheck } from "lucide-react";

export default function JoinCTASection() {
  return (
    <section className="py-20 md:py-28 bg-navy text-white font-body relative overflow-hidden border-y border-white/10">
      {/* Decorative Brand Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-transform/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-blue-trust/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center space-y-8">
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-gold-warm uppercase tracking-wider backdrop-blur-md">
          <ShieldCheck className="w-4 h-4 text-green-transform" />
          <span>Active Grassroots Movement</span>
        </div>

        {/* Main Headline */}
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight max-w-4xl mx-auto tracking-tight">
          Your voice belongs in the future we’re building.
        </h2>

        {/* Supporting Narrative */}
        <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Whether you want to become an official member, lead voter literacy efforts in your ward, or lend your technical expertise, there is a seat for you at the coalition table.
        </p>

        {/* Three Primary Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          {/* Button 1: Become a Member */}
          <Link
            href="/join"
            className="w-full sm:w-auto px-7 py-4 bg-green-transform text-navy font-heading font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-white transition duration-300 shadow-lg flex items-center justify-center gap-2 group"
          >
            <UserPlus className="w-4 h-4" />
            <span>Become a Member</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition duration-200" />
          </Link>

          {/* Button 2: Volunteer */}
          <Link
            href="/volunteer"
            className="w-full sm:w-auto px-7 py-4 bg-gold-warm text-navy font-heading font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-white transition duration-300 shadow-lg flex items-center justify-center gap-2 group"
          >
            <HeartHandshake className="w-4 h-4" />
            <span>Volunteer</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition duration-200" />
          </Link>

          {/* Button 3: Explore Opportunities */}
          <Link
            href="/academy"
            className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-heading font-extrabold text-xs uppercase tracking-wider rounded-xl border border-white/20 transition duration-300 backdrop-blur-md flex items-center justify-center gap-2 group"
          >
            <Compass className="w-4 h-4 text-gold-warm" />
            <span>Explore Opportunities</span>
          </Link>
        </div>

        {/* Trust Note */}
        <p className="text-[11px] text-gray-400 italic pt-2">
          Open to all Nigerian citizens committed to transparent governance and democratic progression.
        </p>
      </div>
    </section>
  );
}