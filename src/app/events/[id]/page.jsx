"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Share2, 
  CheckCircle, 
  User, 
  Mail, 
  Phone, 
  Building 
} from "lucide-react";
import { getStorageItem, addItem } from "@/lib/storage";
import Modal from "@/components/ui/Modal";

export default function EventDetailPage({ params }) {
  const [event, setEvent] = useState(null);
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
  });

  useEffect(() => {
    // Load event data from storage or fallback defaults
    const storedEvents = getStorageItem("ttc_events");
    const foundEvent = storedEvents.find((e) => String(e.id) === String(params?.id)) || {
      id: params?.id || "1",
      title: "Abuja National Youth Leadership Summit 2026",
      category: "Town Hall",
      date: "October 18, 2026",
      time: "09:00 AM - 03:00 PM WAT",
      location: "International Conference Centre, Abuja",
      organizer: "TTC Youth Wing",
      capacity: 500,
      registeredCount: 312,
      description:
        "Join civic innovators, youth advocates, and public administrators for an interactive summit on institutional integrity, civic participation, and digital democracy.",
      agenda: [
        { time: "09:00 AM", title: "Registration & Keynote Reception" },
        { time: "10:30 AM", title: "Panel: Rebuilding Institutional Trust" },
        { time: "01:00 PM", title: "Civic Innovation Workshops & Networking" },
      ],
    };

    setEvent(foundEvent);

    // Check if user is already registered locally
    const myEvents = getStorageItem("ttc_my_registered_events");
    const alreadyRegistered = myEvents.some((e) => String(e.id) === String(params?.id));
    setIsRegistered(alreadyRegistered);

    // Pre-fill user details if logged in
    const user = getStorageItem("ttc_current_user");
    if (user) {
      setFormData({
        fullName: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        organization: "Civic Advocate",
      });
    }
  }, [params]);

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();

    const registrationRecord = {
      eventId: event.id,
      eventTitle: event.title,
      eventDate: event.date,
      registeredAt: new Date().toISOString(),
      ...formData,
    };

    // Save to user's registered events
    addItem("ttc_my_registered_events", event);
    addItem("ttc_event_registrations", registrationRecord);

    // Update local state and open confirmation
    setIsRegistered(true);
    setIsRegModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  if (!event) return null;

  const seatsRemaining = Math.max(0, event.capacity - event.registeredCount);

  return (
    <div className="min-h-screen bg-white py-12 px-6 font-body">
      {/* Registration Success Confirmation Modal */}
      <Modal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        title="Registration Confirmed!"
        message={`You have successfully registered for "${event.title}". A pass has been reserved for ${formData.email}.`}
        type="success"
      />

      <div className="max-w-5xl mx-auto space-y-8">
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-mutedText hover:text-navy transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Events
        </Link>

        {/* Main Event Header Banner */}
        <div className="bg-navy rounded-2xl p-8 md:p-10 text-white relative overflow-hidden shadow-md">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="px-3 py-1 bg-green-transform text-white font-bold text-xs rounded-full uppercase tracking-wider">
              {event.category}
            </span>
            <h1 className="font-heading font-extrabold text-3xl md:text-4xl leading-tight">
              {event.title}
            </h1>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed">
              {event.description}
            </p>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Details & Agenda */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-border space-y-4">
              <h2 className="font-heading font-bold text-xl text-navy">Event Overview</h2>
              <p className="text-sm text-gray-mutedText leading-relaxed">
                This session brings together key stakeholders to share transparent updates, review citizen initiatives, and foster active policy collaboration across Nigeria.
              </p>
            </div>

            {/* Event Schedule Agenda */}
            {event.agenda && event.agenda.length > 0 && (
              <div className="bg-white p-6 rounded-2xl border border-gray-border space-y-4">
                <h2 className="font-heading font-bold text-xl text-navy">Event Schedule</h2>
                <div className="space-y-3">
                  {event.agenda.map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-3 bg-gray-soft/60 rounded-xl items-center text-xs">
                      <span className="font-bold text-blue-trust shrink-0">{item.time}</span>
                      <span className="font-semibold text-gray-darkText">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Action Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-border shadow-sm space-y-6">
              <h3 className="font-heading font-bold text-lg text-navy">Event Information</h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-green-transform shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-navy">Date</span>
                    <span className="text-gray-mutedText">{event.date}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-blue-trust shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-navy">Time</span>
                    <span className="text-gray-mutedText">{event.time}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold-warm shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-navy">Venue</span>
                    <span className="text-gray-mutedText">{event.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-navy shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-navy">Attendance Capacity</span>
                    <span className="text-gray-mutedText">{event.registeredCount} attending ({seatsRemaining} seats left)</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              {isRegistered ? (
                <div className="w-full py-3 bg-green-transform/10 text-green-transform font-bold text-xs rounded-xl border border-green-transform/20 flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4" /> Pass Reserved
                </div>
              ) : (
                <button
                  onClick={() => setIsRegModalOpen(true)}
                  disabled={seatsRemaining === 0}
                  className="w-full py-3 bg-green-transform text-white font-bold text-sm rounded-xl hover:bg-opacity-90 transition shadow-sm disabled:opacity-50"
                >
                  {seatsRemaining > 0 ? "Reserve Free Seat" : "Event Sold Out"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Registration Form Modal */}
      {isRegModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 border border-gray-border shadow-xl space-y-5">
            <div className="flex justify-between items-center border-b border-gray-border pb-3">
              <h3 className="font-heading font-bold text-lg text-navy">Confirm Seat Reservation</h3>
              <button onClick={() => setIsRegModalOpen(false)} className="text-gray-mutedText hover:text-navy">
                ✕
              </button>
            </div>

            <form onSubmit={handleRegistrationSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-gray-darkText mb-1">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-mutedText absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 border border-gray-border rounded-lg focus:outline-none focus:border-blue-trust"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-gray-darkText mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-mutedText absolute left-3 top-2.5" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 border border-gray-border rounded-lg focus:outline-none focus:border-blue-trust"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-gray-darkText mb-1">Phone Number</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-mutedText absolute left-3 top-2.5" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 border border-gray-border rounded-lg focus:outline-none focus:border-blue-trust"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsRegModalOpen(false)}
                  className="w-1/2 py-2.5 border border-gray-border font-bold text-gray-darkText rounded-lg hover:bg-gray-soft"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-2.5 bg-navy text-white font-bold rounded-lg hover:bg-opacity-90"
                >
                  Confirm Pass
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}