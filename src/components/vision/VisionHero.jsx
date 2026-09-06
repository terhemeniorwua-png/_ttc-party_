"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowDown } from "lucide-react";

export default function VisionHero() {
  return (
    <section className="relative bg-navy text-white py-24 md:py-36 px-6 overflow-hidden border-b border-white/10">
      {/* Background Image Overlay with Gradient Mask */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1920"
          alt="Civic Assembly and Vision"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy to-navy" />
      </div>

      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-transform/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-gold-warm uppercase tracking-wider backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-green-transform" />
          <span>Long-Term Strategic Vision</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl leading-tight text-white max-w-4xl mx-auto"
        >
          A Better Future Is Built, <span className="text-green-transform">Not Promised.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-base md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Moving beyond rhetoric to establish self-sustaining civic institutions, transparent local budgets, and citizen-led governance across every ward.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="pt-6 flex justify-center"
        >
          <a
            href="#vision-mission"
            className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:text-white hover:border-green-transform transition"
          >
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}