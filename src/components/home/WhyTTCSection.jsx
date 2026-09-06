"use client";
import { motion } from "framer-motion";
import { Shield, Compass, RefreshCw, Users } from "lucide-react";

export default function WhyTTCSection() {
  const pillars = [
    { title: "Trust", desc: "Government working with openness, accountability, and integrity.", icon: Shield },
    { title: "Opportunity", desc: "Access to meaningful economic and personal development.", icon: Compass },
    { title: "Transformation", desc: "Achieving lasting progress through practical civic action.", icon: RefreshCw },
    { title: "Participation", desc: "Ensuring citizens have a direct voice in shaping decisions.", icon: Users },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="font-heading font-bold text-3xl text-navy text-center mb-12">
        A Better Future Starts With Us
      </h2>
      <div className="grid md:grid-cols-4 gap-6">
        {pillars.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="p-6 rounded-xl border border-gray-border bg-gray-soft/50 shadow-sm"
            >
              <IconComponent className="w-8 h-8 text-blue-trust mb-4" />
              <h3 className="font-heading font-bold text-xl text-navy mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-mutedText">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}