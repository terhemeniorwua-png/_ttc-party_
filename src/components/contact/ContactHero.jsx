"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin, Phone } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative bg-navy text-white py-16 md:py-24 px-6 overflow-hidden border-b border-white/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-transform/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-gold-warm uppercase tracking-wider backdrop-blur-md"
        >
          <MessageSquare className="w-4 h-4 text-green-transform" />
          <span>Get In Touch</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl leading-tight text-white"
        >
          We Want to Hear From You.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
        >
          Have questions about ward membership, policy proposals, or media inquiries? Send us a message and our team will get back to you.
        </motion.p>
      </div>
    </section>
  );
}