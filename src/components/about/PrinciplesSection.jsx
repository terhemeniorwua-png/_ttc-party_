"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  HeartHandshake, 
  Users, 
  Eye, 
  Lightbulb, 
  Compass 
} from "lucide-react";

export default function PrinciplesSection() {
  const principles = [
    { title: "Integrity", desc: "Uncompromising ethical standards in every policy proposal and community initiative.", icon: Shield },
    { title: "Service", desc: "Prioritizing the needs of citizens over administrative bureaucracy or personal gain.", icon: HeartHandshake },
    { title: "Inclusion", desc: "Ensuring every demographic and community voice has direct representation.", icon: Users },
    { title: "Accountability", desc: "Complete transparency in financial allocations, operations, and policy results.", icon: Eye },
    { title: "Innovation", desc: "Deploying modern technological tools for voter literacy and budget tracking.", icon: Lightbulb },
    { title: "Opportunity", desc: "Creating clear pathways for civic participation and economic leadership.", icon: Compass },
  ];

  return (
    <section className="py-20 bg-gray-soft/40 border-y border-gray-border px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="font-heading font-extrabold text-3xl text-navy">
            Our Guiding Principles
          </h2>
          <p className="text-gray-mutedText text-sm sm:text-base">
            The core values that govern our civic strategy, community programs, and institutional standards.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl border border-gray-border bg-white shadow-sm space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center text-blue-trust">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-navy">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-mutedText leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}