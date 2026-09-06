"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Tag, ArrowRight } from "lucide-react";

export default function EventCard({ event }) {
  return (
    <div className="bg-white border border-gray-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between group">
      <div>
        {/* Cover Image */}
        <div className="relative h-48 w-full overflow-hidden bg-gray-soft">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover group-hover:scale-105 transition duration-500 ease-out"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-white/95 backdrop-blur-md text-navy font-bold text-[10px] px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm flex items-center gap-1">
              <Tag className="w-3 h-3 text-green-transform" />
              {event.category}
            </span>
          </div>
        </div>

        {/* Event Meta & Content */}
        <div className="p-6 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-gray-mutedText">
            <span className="flex items-center gap-1 font-semibold text-navy">
              <Calendar className="w-3.5 h-3.5 text-blue-trust" />
              {event.date}
            </span>
            <span className="flex items-center gap-1 text-gray-mutedText">
              <MapPin className="w-3.5 h-3.5 text-gold-warm" />
              {event.location}
            </span>
          </div>

          <h3 className="font-heading font-bold text-lg text-navy leading-snug group-hover:text-green-transform transition line-clamp-2">
            <Link href={`/events/${event.slug}`}>{event.title}</Link>
          </h3>

          <p className="text-xs text-gray-mutedText leading-relaxed line-clamp-3">
            {event.description}
          </p>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 pt-0">
        <Link
          href={`/events/${event.slug}`}
          className="w-full py-2.5 bg-navy text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-green-transform hover:text-navy transition flex items-center justify-center gap-2"
        >
          <span>{event.isUpcoming ? "Register Now" : "View Event Details"}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}