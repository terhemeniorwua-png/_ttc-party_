"use client";

import { Users, BookOpen, HeartHandshake, Calendar } from "lucide-react";

export default function AdminStatGrid() {
  const stats = [
    {
      title: "Total Registered Users",
      value: "1,248",
      change: "+12% this month",
      icon: Users,
    },
    {
      title: "Course Enrolments",
      value: "3,820",
      change: "+8% this week",
      icon: BookOpen,
    },
    {
      title: "Total Contributions",
      value: "₦4,850,000",
      change: "240 Transactions",
      icon: HeartHandshake,
    },
    {
      title: "Active Events",
      value: "6 Townhalls",
      change: "2 Upcoming",
      icon: Calendar,
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div
            key={idx}
            className="bg-white border border-gray-border rounded-2xl p-5 shadow-2xs space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-gray-mutedText uppercase tracking-wider font-heading">
                {stat.title}
              </span>
              <div className="p-2.5 bg-navy/5 text-navy rounded-xl">
                <Icon className="w-4 h-4" />
              </div>
            </div>

            <div className="space-y-0.5">
              <h3 className="font-heading font-extrabold text-2xl text-navy">
                {stat.value}
              </h3>
              <p className="text-[11px] text-green-transform font-bold">
                {stat.change}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}