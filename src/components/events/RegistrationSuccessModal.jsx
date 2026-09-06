"use client";

import { CheckCircle, X } from "lucide-react";

export default function RegistrationSuccessModal({ isOpen, onClose, attendee, eventTitle }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 space-y-6 shadow-2xl relative animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-navy rounded-full transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-3">
          <div className="w-16 h-16 bg-green-transform/20 text-green-transform rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h3 className="font-heading font-extrabold text-2xl text-navy">
            Registration Confirmed!
          </h3>
          <p className="text-xs text-gray-mutedText leading-relaxed">
            Thank you, <strong className="text-navy">{attendee?.fullName}</strong>. Your seat has been reserved for <strong className="text-navy">{eventTitle}</strong>.
          </p>
        </div>

        <div className="p-4 bg-gray-soft/60 rounded-2xl space-y-1 text-xs border border-gray-border">
          <p className="text-gray-mutedText">Confirmation Sent To:</p>
          <p className="font-bold text-navy">{attendee?.email}</p>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 bg-navy text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-green-transform hover:text-navy transition"
        >
          Done
        </button>
      </div>
    </div>
  );
}