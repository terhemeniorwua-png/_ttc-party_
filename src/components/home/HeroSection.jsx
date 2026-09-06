"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import HeroStats from "./HeroStats";

export default function PageHero({
  badgeText = "Civic Platform",
  title = "Empowering Citizens Through Civic Education",
  description = "Access high-quality learning modules, register for upcoming townhalls, and contribute directly to civic transformation.",
  bgImage = "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=2000&auto=format&fit=crop", // African man presenting/leading civic discussion
  primaryCta = { label: "Explore Courses", href: "/civic-academy" },
  secondaryCta = { label: "Upcoming Events", href: "/events" },
}) {
  return (
    <section className="relative w-full bg-navy text-white rounded-3xl overflow-hidden border border-white/10 shadow-2xl my-6">
      {/* 1. Background Image with Slow Subtle Pan/Zoom Movement */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="African civic leader presenting"
          fill
          className="object-cover opacity-30 animate-bg-movement"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-black/40" />
      </div>

      {/* 2. Ambient Floating Decorative Shapes */}
      <div className="absolute top-8 right-12 w-64 h-64 rounded-full bg-green-transform/10 blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute -bottom-10 left-1/3 w-72 h-72 rounded-full bg-gold-warm/10 blur-3xl pointer-events-none animate-float-reverse" />

      {/* Floating Orbs */}
      <div className="absolute top-10 left-[15%] w-3 h-3 rounded-full bg-green-transform/40 animate-float-slow pointer-events-none" />
      <div className="absolute bottom-12 right-[20%] w-4 h-4 rounded-full bg-gold-warm/30 animate-float-reverse pointer-events-none" />

      {/* 3. Hero Content */}
      <div className="relative z-10 p-8 sm:p-14 lg:p-20 max-w-4xl space-y-8">
        {/* Animated Header & Badge */}
        <div className="space-y-4 animate-fade-in">
          {badgeText && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/15 rounded-full text-xs font-bold font-heading text-gold-warm tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-green-transform" />
              <span>{badgeText}</span>
            </div>
          )}

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
            {title}
          </h1>

          <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>

        {/* 4. Staggered Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {primaryCta && (
            <Link
              href={primaryCta.href}
              className="animate-btn-stagger-1 px-6 py-3.5 bg-green-transform text-navy font-heading font-bold text-xs uppercase tracking-wider rounded-2xl hover:bg-white hover:text-navy transition shadow-lg flex items-center gap-2 group"
            >
              <span>{primaryCta.label}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
          )}

          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="animate-btn-stagger-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-2xl backdrop-blur-md border border-white/15 transition flex items-center gap-2"
            >
              <span>{secondaryCta.label}</span>
            </Link>
          )}
        </div>
        <div className="md:absolute md:top-26 md:-right-96">
           <HeroStats />
        </div>
      </div>
    </section>
  );
}
