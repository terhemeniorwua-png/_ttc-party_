"use client";
import { useState, useEffect, useRef } from "react";
import { Target, CheckCircle2, ShieldCheck, Layers } from "lucide-react";

export default function CommitmentsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Trigger counter animation on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const metrics = [
    {
      value: 6,
      suffix: "",
      label: "Priority Areas",
      description: "Pillar reform agendas across core economic sectors",
      icon: Target,
    },
    {
      value: 24,
      suffix: "",
      label: "Policy Commitments",
      description: "Actionable frameworks published for public oversight",
      icon: Layers,
    },
    {
      value: 12,
      suffix: "",
      label: "Community Initiatives",
      description: "Grassroots civic action targets across regional hubs",
      icon: CheckCircle2,
    },
    {
      value: 100,
      suffix: "%",
      label: "Transparency Commitment",
      description: "Operational promise for open financial reporting",
      icon: ShieldCheck,
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-navy text-white font-body relative overflow-hidden">
      {/* Decorative Brand Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-trust/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-transform/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="px-3.5 py-1 bg-gold-warm/20 text-gold-warm border border-gold-warm/30 font-bold text-xs rounded-full uppercase tracking-wider inline-block">
            Platform Framework Targets
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl">
            Our Commitments & Operational Benchmarks
          </h2>
          <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
            The quantitative standards guiding our platform’s governance blueprint, civic education programs, and policy deployment across Nigeria.
          </p>
        </div>

        {/* Counter Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 space-y-4 text-center hover:border-green-transform/40 transition duration-300 backdrop-blur-sm"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-green-transform/10 text-green-transform flex items-center justify-center border border-green-transform/20">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Counter */}
                <div className="font-heading font-extrabold text-4xl md:text-5xl text-gold-warm tracking-tight">
                  <AnimatedNumber target={metric.value} isVisible={isVisible} />
                  {metric.suffix}
                </div>

                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-base text-white">
                    {metric.label}
                  </h3>
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Sub-component for incrementing counters
function AnimatedNumber({ target, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 1500; // 1.5 seconds animation
    const increment = Math.ceil(target / (duration / 16));

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, isVisible]);

  return <span>{count}</span>;
}