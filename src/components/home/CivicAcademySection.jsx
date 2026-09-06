"use client";
import Link from "next/link";
import { 
  GraduationCap, 
  Landmark, 
  Vote, 
  ShieldAlert, 
  Wallet, 
  FileText, 
  SearchCheck, 
  Users, 
  Sparkles, 
  ArrowRight,
  BookOpen
} from "lucide-react";

export default function CivicAcademySection() {
  const courses = [
    {
      title: "Understanding Government",
      description: "An overview of the executive, legislative, and judicial branches at local, state, and federal levels.",
      icon: Landmark,
      level: "Foundational",
      duration: "4 Modules",
    },
    {
      title: "How Elections Work",
      description: "A breakdown of electoral processes, voter registration, polling unit procedures, and vote counting.",
      icon: Vote,
      level: "Foundational",
      duration: "3 Modules",
    },
    {
      title: "Your Rights as a Citizen",
      description: "Exploring constitutional rights, civic responsibilities, and legal avenues for protecting public interest.",
      icon: ShieldAlert,
      level: "Essential",
      duration: "5 Modules",
    },
    {
      title: "How Public Budgets Work",
      description: "Demystifying public revenue, capital expenditure, and tracking government spending in your LGA.",
      icon: Wallet,
      level: "Intermediate",
      duration: "4 Modules",
    },
    {
      title: "Understanding Public Policy",
      description: "How laws are drafted, public hearings are conducted, and citizen feedback shapes legislation.",
      icon: FileText,
      level: "Intermediate",
      duration: "4 Modules",
    },
    {
      title: "How to Spot Misinformation",
      description: "Critical thinking tools, media literacy techniques, and fact-checking methods for political news.",
      icon: SearchCheck,
      level: "Essential",
      duration: "3 Modules",
    },
    {
      title: "Community Leadership",
      description: "Practical strategies for neighborhood organizing, town hall facilitation, and community advocacy.",
      icon: Users,
      level: "Advanced",
      duration: "6 Modules",
    },
    {
      title: "Responsible Civic Participation",
      description: "Ethical civic engagement, constructive dialogue, and peaceful community problem-solving.",
      icon: Sparkles,
      level: "Foundational",
      duration: "3 Modules",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-soft font-body border-y border-gray-border">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1 bg-green-transform/10 text-green-transform border border-green-transform/20 font-bold text-xs rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4" /> Non-Partisan Education
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-navy">
            Understand Your Democracy. Shape Your Future.
          </h2>
          <p className="text-xs md:text-sm text-gray-darkText leading-relaxed">
            The <strong className="text-navy">TTC Civic Academy</strong> delivers accessible, objective learning modules designed to build informed, active citizens. All courses provide neutral, factual instruction on governance structures and civic processes.
          </p>
        </div>

        {/* 8-Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, idx) => {
            const IconComponent = course.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-gray-border shadow-sm flex flex-col justify-between hover:border-blue-trust hover:shadow-md transition duration-300 group"
              >
                <div className="space-y-4">
                  {/* Header Icon & Level Badge */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-navy/5 text-navy rounded-xl group-hover:bg-navy group-hover:text-gold-warm transition duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-mutedText uppercase tracking-wider bg-gray-soft px-2 py-1 rounded-md border border-gray-border">
                      {course.level}
                    </span>
                  </div>

                  {/* Course Title & Description */}
                  <div className="space-y-1.5">
                    <h3 className="font-heading font-bold text-base text-navy leading-snug group-hover:text-blue-trust transition">
                      {course.title}
                    </h3>
                    <p className="text-xs text-gray-darkText leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Metadata */}
                <div className="pt-4 mt-4 border-t border-gray-border/60 flex items-center justify-between text-[11px] font-semibold text-gray-mutedText">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3 h-3 text-green-transform" /> {course.duration}
                  </span>
                  <span className="text-blue-trust group-hover:underline">Free Access</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center pt-4">
          <Link
            href="/academy"
            className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-green-transform transition duration-300 shadow-md group"
          >
            Explore Civic Academy
            <ArrowRight className="w-4 h-4 text-gold-warm group-hover:translate-x-1 transition duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}