"use client";

import { motion } from "framer-motion";
import { Activity, Award, Users2, MapPin } from "lucide-react";

export default function ProgressMetricsSection() {
  const stats = [
    { label: "Active LGA Delegates", value: "12,400+", icon: Users2 },
    { label: "Communities Audited", value: "340", icon: MapPin },
    { label: "Academy Graduates", value: "48,000+", icon: Award },
    { label: "Town Halls Hosted", value: "1,250", icon: Activity }
  ];

  return (
    <section className="py-20 md:py-28 px-6 max-w-7xl mx-auto space-y-16">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold text-green-transform uppercase tracking-wider bg-green-transform/10 px-3 py-1 rounded-full">
          Accountability Framework
        </span>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy">
          How We Measure Progress
        </h2>
        <p className="text-gray-mutedText text-sm sm:text-base">
          We track concrete civic participation data rather than promises.
        </p>
      </div>

      {/* Animated Metrics Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((st, idx) => {
          const IconComponent = st.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-8 bg-gray-soft/60 border border-gray-border rounded-3xl text-center space-y-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-navy text-gold-warm flex items-center justify-center mx-auto shadow-md">
                <IconComponent className="w-6 h-6" />
              </div>
              <p className="font-heading font-extrabold text-3xl sm:text-4xl text-navy">
                {st.value}
              </p>
              <p className="text-xs font-bold text-gray-mutedText uppercase tracking-wider">
                {st.label}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Feature Image Banner */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-border h-80 md:h-96">
        <img
          src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=1600"
          alt="Civic Assembly Progress"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/60 backdrop-blur-xs flex flex-col justify-center items-center text-center p-6 space-y-4">
          <h3 className="font-heading font-extrabold text-2xl md:text-4xl text-white max-w-2xl">
            "Transparency is not a political gift. It is an institutional right."
          </h3>
          <p className="text-xs md:text-sm text-gold-warm font-bold uppercase tracking-wider">
            TTC Steering Committee Charter
          </p>
        </div>
      </div>
    </section>
  );
}