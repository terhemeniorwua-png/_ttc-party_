"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, MapPin, Tag } from "lucide-react";

export default function EventDetailHeader({ event }) {
  return (
    <div className="bg-navy text-white pt-12 pb-16 px-6 border-b border-white/10">
      <div className="max-w-4xl mx-auto space-y-6">
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-300 hover:text-white transition bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg"
        >
          <ArrowLeft className="w-4 h-4 text-green-transform" />
          <span>Back to Events</span>
        </Link>

        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
          <span className="bg-green-transform text-navy font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
            <Tag className="w-3 h-3" />
            {event.category}
          </span>
          <span className="bg-white/10 text-white px-3 py-1 rounded-full uppercase tracking-wider">
            {event.isUpcoming ? "Upcoming Event" : "Past Event"}
          </span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl leading-tight text-white">
          {event.title}
        </h1>

        <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs">
          <div className="flex items-start gap-2.5">
            <Calendar className="w-4 h-4 text-gold-warm shrink-0 mt-0.5" />
            <div>
              <p className="text-gray-400 uppercase text-[10px] font-bold">Date</p>
              <p className="font-bold text-white">{event.date}</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Clock className="w-4 h-4 text-green-transform shrink-0 mt-0.5" />
            <div>
              <p className="text-gray-400 uppercase text-[10px] font-bold">Time</p>
              <p className="font-bold text-white">{event.time}</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-blue-trust shrink-0 mt-0.5" />
            <div>
              <p className="text-gray-400 uppercase text-[10px] font-bold">Venue</p>
              <p className="font-bold text-white">{event.venue}, {event.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}