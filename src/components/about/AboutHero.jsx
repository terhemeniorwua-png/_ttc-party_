"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Compass } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative bg-navy text-white py-24 md:py-32 px-6 overflow-hidden border-b border-white/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-transform/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-gold-warm uppercase tracking-wider backdrop-blur-md"
        >
          <Compass className="w-4 h-4 text-green-transform" />
          <span>Non-Partisan Civic Movement</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight"
        >
          Pioneering Practical Leadership for Sustainable Progress.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
        >
          TTC is a citizen-first coalition working to transform civic participation, transparent governance, and institutional accountability across every community.
        </motion.p>
      </div>
    </section>
  );
}