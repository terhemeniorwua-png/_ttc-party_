"use client";
import Link from "next/link";
import { 
  HeartPulse, 
  GraduationCap, 
  Briefcase, 
  Sprout, 
  Zap, 
  Cpu, 
  ArrowRight 
} from "lucide-react";

export default function PrioritiesSection() {
  const priorities = [
    {
      number: "01",
      title: "Healthcare",
      description: "Accessible, affordable and people-centered healthcare.",
      icon: HeartPulse,
      slug: "/policies#healthcare",
    },
    {
      number: "02",
      title: "Education",
      description: "Modern education and skills development.",
      icon: GraduationCap,
      slug: "/policies#education",
    },
    {
      number: "03",
      title: "Jobs & Entrepreneurship",
      description: "Supporting businesses, innovation and employment.",
      icon: Briefcase,
      slug: "/policies#jobs-and-entrepreneurship",
    },
    {
      number: "04",
      title: "Agriculture",
      description: "Modernizing agriculture and strengthening food systems.",
      icon: Sprout,
      slug: "/policies#agriculture",
    },
    {
      number: "05",
      title: "Infrastructure",
      description: "Better roads, transport, energy and digital infrastructure.",
      icon: Zap,
      slug: "/policies#infrastructure",
    },
    {
      number: "06",
      title: "Digital Transformation",
      description: "Using technology to improve public services.",
      icon: Cpu,
      slug: "/policies#digital-transformation",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-soft font-body">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="px-3.5 py-1 bg-green-transform/10 text-green-transform border border-green-transform/20 font-bold text-xs rounded-full uppercase tracking-wider">
            Policy Pillar Focus
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-navy">
            Our Priorities
          </h2>
          <p className="text-xs md:text-sm text-gray-darkText leading-relaxed">
            Data-backed reform agendas designed to drive sustainable socioeconomic progression across every Local Government Area.
          </p>
        </div>

        {/* 6-Card Priority Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {priorities.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.number}
                className="bg-white rounded-2xl p-6 md:p-8 border border-gray-border shadow-sm flex flex-col justify-between hover:border-blue-trust hover:shadow-md transition duration-300 group"
              >
                <div className="space-y-4">
                  {/* Card Header: Icon & Number */}
                  <div className="flex justify-between items-center">
                    <div className="p-3.5 bg-navy/5 text-navy group-hover:bg-navy group-hover:text-gold-warm rounded-xl transition duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-heading font-extrabold text-2xl text-navy/20 group-hover:text-green-transform transition duration-300">
                      {item.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-xl text-navy group-hover:text-blue-trust transition">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-darkText leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Learn More Action Routing */}
                <div className="pt-6 mt-6 border-t border-gray-border/60">
                  <Link
                    href={item.slug}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-green-transform transition"
                  >
                    Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition duration-200" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}