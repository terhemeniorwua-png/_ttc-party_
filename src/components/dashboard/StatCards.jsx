"use client";

import { Award, Calendar, BookOpenCheck, HeartHandshake } from "lucide-react";

export default function StatCards({
  membershipTier = "Active Member",
  eventsCount = 3,
  completedCoursesCount = 1,
  contributionsTotal = "₦25,000",
}) {
  const cards = [
    {
      title: "Membership",
      value: membershipTier,
      icon: Award,
      color: "text-gold-warm",
      bg: "bg-gold-warm/10",
    },
    {
      title: "Events Registered",
      value: eventsCount,
      icon: Calendar,
      color: "text-navy",
      bg: "bg-navy/10",
    },
    {
      title: "Courses Completed",
      value: completedCoursesCount,
      icon: BookOpenCheck,
      color: "text-green-transform",
      bg: "bg-green-transform/20",
    },
    {
      title: "Contributions",
      value: contributionsTotal,
      icon: HeartHandshake,
      color: "text-navy",
      bg: "bg-navy/10",
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div
            key={idx}
            className="bg-white border border-gray-border rounded-2xl p-5 shadow-sm space-y-3 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold font-heading text-gray-mutedText uppercase tracking-wider">
                {card.title}
              </span>
              <div className={`p-2.5 rounded-xl ${card.bg} ${card.color}`}>
                <Icon className="w-5 h-5" />
              </div>
            </div>
            <div className="font-heading font-extrabold text-2xl text-navy">
              {card.value}
            </div>
          </div>
        );
      })}
    </div>
  );
}