"use client";

import Image from "next/image";
import { User } from "lucide-react";

export default function EventSpeakers({ speakers }) {
  if (!speakers || speakers.length === 0) return null;

  return (
    <div className="space-y-6">
      <h3 className="font-heading font-bold text-2xl text-navy">Featured Speakers</h3>
      <div className="grid sm:grid-cols-2 gap-6">
        {speakers.map((s, idx) => (
          <div key={idx} className="p-5 bg-white border border-gray-border rounded-2xl flex items-center gap-4 shadow-sm">
            {s.image ? (
              <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border border-gray-border">
                <Image src={s.image} alt={s.name} fill className="object-cover" />
              </div>
            ) : (
              <div className="w-14 h-14 rounded-full bg-navy/10 flex items-center justify-center text-navy shrink-0">
                <User className="w-6 h-6" />
              </div>
            )}
            <div>
              <h4 className="font-heading font-bold text-sm text-navy">{s.name}</h4>
              <p className="text-xs text-gray-mutedText">{s.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}