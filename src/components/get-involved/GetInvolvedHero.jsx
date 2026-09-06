"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function GetInvolvedHero() {
  return (
    <section className="relative bg-navy text-white py-20 md:py-28 px-6 overflow-hidden border-b border-white/10">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-transform/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-trust/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-gold-warm uppercase tracking-wider backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-green-transform" />
          <span>Civic Action Center</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl leading-tight text-white"
        >
          There Are Many Ways to Make a Difference.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
        >
          Real change requires broad participation. Choose how you want to contribute to local governance, policy policy, and grassroots transformation today.
        </motion.p>
      </div>
    </section>
  );
}