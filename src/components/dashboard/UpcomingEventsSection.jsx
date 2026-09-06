"use client";

import { Calendar, MapPin, Clock } from "lucide-react";

export default function UpcomingEventsSection() {
  const events = [
    {
      id: "ev-1",
      title: "Townhall: Local Budget Oversight & Citizen Rights",
      date: "Sep 24, 2026",
      time: "10:00 AM WAT",
      location: "Abuja Community Center & Virtual Stream",
    },
    {
      id: "ev-2",
      title: "Electoral Literacy Workshop for First-Time Voters",
      date: "Oct 12, 2026",
      time: "02:00 PM WAT",
      location: "Lagos Civic Hub, Yaba",
    },
  ];

  return (
    <div className="bg-white border border-gray-border rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="border-b border-gray-border pb-4">
        <h2 className="font-heading font-extrabold text-xl text-navy">
          Upcoming Events
        </h2>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-4 bg-gray-soft/50 border border-gray-border rounded-2xl space-y-2"
          >
            <h3 className="font-heading font-bold text-sm text-navy">
              {event.title}
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-mutedText">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-gold-warm" />
                {event.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-navy" />
                {event.time}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-green-transform" />
                {event.location}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}