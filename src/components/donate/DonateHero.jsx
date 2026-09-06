"use client";

import { motion } from "framer-motion";
import { HeartHandshake, ShieldAlert } from "lucide-react";

export default function DonateHero() {
  return (
    <section className="relative bg-navy text-white py-16 md:py-20 px-6 overflow-hidden border-b border-white/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-transform/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-5">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-gold-warm uppercase tracking-wider backdrop-blur-md"
        >
          <HeartHandshake className="w-4 h-4 text-green-transform" />
          <span>Support Our Grassroots Movement</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading font-extrabold text-3xl sm:text-5xl leading-tight text-white"
        >
          Power Independent Policy Reform.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gold-warm/10 border border-gold-warm/20 rounded-xl text-xs text-gold-warm font-medium max-w-xl mx-auto"
        >
          <ShieldAlert className="w-4 h-4 shrink-0" />
          <span><strong>Demo Environment:</strong> No real payments are processed. All transactions are simulated for testing.</span>
        </motion.div>
      </div>
    </section>
  );
}