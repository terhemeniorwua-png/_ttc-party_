"use client";
import { useState } from "react";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight, UserCheck } from "lucide-react";
import Modal from "@/components/ui/Modal";

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const events = [
    {
      id: "evt-101",
      title: "Youth & Innovation Forum",
      dateDay: "18",
      dateMonth: "OCT",
      fullDate: "October 18, 2026",
      location: "Abuja (International Conference Centre)",
      description: "Empowering young leaders and tech innovators to build open-source civic tools and policy solutions.",
      category: "Civic Tech & Youth",
    },
    {
      id: "evt-102",
      title: "Community Policy Dialogue",
      dateDay: "25",
      dateMonth: "OCT",
      fullDate: "October 25, 2026",
      location: "Virtual (Zoom / YouTube Live)",
      description: "An interactive town hall analyzing LGA budget allocations, public health targets, and state accountability.",
      category: "Public Town Hall",
    },
    {
      id: "evt-103",
      title: "Grassroots Organizing Masterclass",
      dateDay: "08",
      dateMonth: "NOV",
      fullDate: "November 08, 2026",
      location: "Lagos (Civic Hub, Victoria Island)",
      description: "Training neighborhood coordinators on voter education strategies, peaceful advocacy, and election tracking.",
      category: "Civic Academy Training",
    },
  ];

  const handleRegister = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  return (
    <section className="py-16 md:py-24 bg-white font-body border-y border-gray-border">
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedEvent ? `Registration Confirmed: ${selectedEvent.title}` : ""}
        message={
          selectedEvent
            ? `Your seat request for "${selectedEvent.title}" on ${selectedEvent.fullDate} (${selectedEvent.location}) has been logged. Access details have been dispatched to your email.`
            : ""
        }
        type="success"
      />

      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="px-3.5 py-1 bg-blue-trust/10 text-blue-trust border border-blue-trust/20 font-bold text-xs rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> Citizen Engagement
            </span>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-navy">
              Upcoming Events & Town Halls
            </h2>
            <p className="text-xs md:text-sm text-gray-darkText leading-relaxed">
              Participate in live policy forums, grassroots organizing masterclasses, and virtual civic debates across Nigeria.
            </p>
          </div>

          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy text-white text-xs font-bold rounded-xl hover:bg-green-transform transition duration-200 shrink-0 self-start md:self-auto shadow-sm"
          >
            View Full Calendar <ArrowRight className="w-3.5 h-3.5 text-gold-warm" />
          </Link>
        </div>

        {/* 3-Column Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((evt) => (
            <div
              key={evt.id}
              className="bg-gray-soft rounded-2xl p-6 border border-gray-border shadow-sm flex flex-col justify-between hover:border-blue-trust hover:shadow-md transition duration-300 group"
            >
              <div className="space-y-4">
                {/* Header: Date Badge & Category */}
                <div className="flex items-start justify-between gap-4">
                  <div className="bg-navy text-white rounded-xl p-3 text-center min-w-[60px] shadow-sm group-hover:bg-green-transform transition duration-300">
                    <span className="block font-heading font-extrabold text-xl leading-none text-gold-warm group-hover:text-white">
                      {evt.dateDay}
                    </span>
                    <span className="block text-[10px] font-bold tracking-wider uppercase mt-1 text-gray-300 group-hover:text-white">
                      {evt.dateMonth}
                    </span>
                  </div>

                  <span className="px-2.5 py-1 bg-white text-navy font-bold text-[10px] rounded-full border border-gray-border uppercase tracking-wider">
                    {evt.category}
                  </span>
                </div>

                {/* Event Details */}
                <div className="space-y-2">
                  <h3 className="font-heading font-bold text-lg text-navy leading-snug group-hover:text-blue-trust transition">
                    {evt.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-green-transform">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{evt.location}</span>
                  </div>

                  <p className="text-xs text-gray-darkText leading-relaxed pt-1">
                    {evt.description}
                  </p>
                </div>
              </div>

              {/* Card Footer: Action */}
              <div className="pt-6 mt-6 border-t border-gray-border/80 flex items-center justify-between">
                <span className="text-[11px] text-gray-mutedText font-medium">
                  {evt.fullDate}
                </span>

                <button
                  onClick={() => handleRegister(evt)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-navy text-white text-xs font-bold rounded-lg hover:bg-green-transform transition duration-200 group-hover:shadow"
                >
                  Register <ArrowRight className="w-3.5 h-3.5 text-gold-warm group-hover:translate-x-1 transition duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}