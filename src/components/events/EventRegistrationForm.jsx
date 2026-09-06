"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function EventRegistrationForm({ eventTitle, onSuccess }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    state: "Lagos",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccess(formData);
  };

  return (
    <div className="bg-gray-soft/60 border border-gray-border p-6 sm:p-8 rounded-3xl space-y-6">
      <div>
        <h3 className="font-heading font-bold text-xl text-navy">Register for Event</h3>
        <p className="text-xs text-gray-mutedText mt-1">
          Reserve your seat for "{eventTitle}". Confirmation details will be emailed to you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-navy mb-1">Full Name</label>
          <input
            type="text"
            required
            placeholder="e.g. Olamide Johnson"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full px-4 py-2.5 bg-white border border-gray-border rounded-xl text-xs text-navy focus:outline-none focus:border-navy"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-navy mb-1">Email Address</label>
          <input
            type="email"
            required
            placeholder="name@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2.5 bg-white border border-gray-border rounded-xl text-xs text-navy focus:outline-none focus:border-navy"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-navy mb-1">Phone Number</label>
          <input
            type="tel"
            required
            placeholder="+234 800 000 0000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2.5 bg-white border border-gray-border rounded-xl text-xs text-navy focus:outline-none focus:border-navy"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-green-transform text-navy font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-navy hover:text-white transition flex items-center justify-center gap-2 shadow-md"
        >
          <span>Complete Registration</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}