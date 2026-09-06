"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, ShieldCheck } from "lucide-react";

export default function AcademyHero() {
  return (
    <section className="relative bg-navy text-white py-20 md:py-28 px-6 overflow-hidden border-b border-white/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-transform/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-gold-warm uppercase tracking-wider backdrop-blur-md"
        >
          <GraduationCap className="w-4 h-4 text-green-transform" />
          <span>Non-Partisan Learning Platform</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl leading-tight"
        >
          Empowering Citizens Through Civic Literacy.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
        >
          Master public budgeting, legal rights, and local government tracking through self-paced, open-access modules designed for grassroots impact.
        </motion.p>
      </div>
    </section>
  );
}