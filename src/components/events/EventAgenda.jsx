"use client";

import { Clock } from "lucide-react";

export default function EventAgenda({ agenda }) {
  if (!agenda || agenda.length === 0) return null;

  return (
    <div className="space-y-6">
      <h3 className="font-heading font-bold text-2xl text-navy">Event Agenda</h3>
      <div className="space-y-3">
        {agenda.map((item, idx) => (
          <div
            key={idx}
            className="p-4 bg-gray-soft/60 border border-gray-border rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            <div className="flex items-center gap-2 text-xs font-bold text-blue-trust shrink-0">
              <Clock className="w-4 h-4" />
              <span>{item.time}</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-navy leading-snug">
              {item.topic}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}