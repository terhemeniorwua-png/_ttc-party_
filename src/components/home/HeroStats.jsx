"use client";
import { motion } from "framer-motion";

export default function HeroStats() {
  const stats = [
    { value: "36", label: "States We Aim to Serve", color: "text-gold-warm" },
    { value: "6", label: "National Priorities", color: "text-green-transform" },
    { value: "100%", label: "Transparency Commitment", color: "text-blue-trust" },
    { value: "1", label: "Shared Future", color: "text-white" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="grid grid-cols-2 gap-4 bg-white/5 p-6 rounded-2xl border border-white/10"
    >
      {stats.map((stat, idx) => (
        <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/5">
          <p className={`font-heading font-bold text-3xl ${stat.color}`}>
            {stat.value}
          </p>
          <p className="text-xs text-gray-300 mt-1">{stat.label}</p>
        </div>
      ))}
    </motion.div>
  );
}