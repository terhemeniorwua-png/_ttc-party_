"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import EventDetailHeader from "@/components/events/EventDetailHeader";
import EventAgenda from "@/components/events/EventAgenda";
import EventSpeakers from "@/components/events/EventSpeakers";
import EventRegistrationForm from "@/components/events/EventRegistrationForm";
import RegistrationSuccessModal from "@/components/events/RegistrationSuccessModal";
import JoinCTASection from "@/components/home/JoinCTASection";
// import Footer from "@/components/ui/Footer";
import { EVENTS_DATA } from "@/lib/eventsData";

export default function EventDetailPage({ params }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  const event = EVENTS_DATA.find((e) => e.slug === slug);

  const [registeredAttendee, setRegisteredAttendee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!event) {
    notFound();
  }

  const handleRegistrationSuccess = (attendeeData) => {
    setRegisteredAttendee(attendeeData);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white font-body">
      {/* 1. Event Header */}
      <EventDetailHeader event={event} />

      {/* 2. Main Detail Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        {/* Large Event Banner */}
        <div className="relative h-72 sm:h-[420px] w-full rounded-3xl overflow-hidden shadow-lg bg-gray-soft">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Details Column */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-2xl text-navy">About This Event</h2>
              <p className="text-sm sm:text-base text-gray-mutedText leading-relaxed">
                {event.description}
              </p>
            </div>

            <EventAgenda agenda={event.agenda} />
            <EventSpeakers speakers={event.speakers} />
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-8">
            {event.isUpcoming ? (
              <EventRegistrationForm
                eventTitle={event.title}
                onSuccess={handleRegistrationSuccess}
              />
            ) : (
              <div className="p-8 bg-gray-soft border border-gray-border rounded-3xl text-center space-y-3">
                <p className="font-heading font-bold text-navy text-lg">Event Completed</p>
                <p className="text-xs text-gray-mutedText">
                  This gathering has already taken place. Check our news section for outcome reports.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3. Success Modal */}
      <RegistrationSuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        attendee={registeredAttendee}
        eventTitle={event.title}
      />

      {/* 4. Join CTA */}
      <JoinCTASection />

      {/* 5. Footer */}
      {/* <Footer /> */}
    </main>
  );
}