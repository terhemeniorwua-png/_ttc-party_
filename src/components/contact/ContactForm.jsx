"use client";

import { useState } from "react";
import { Send, CheckCircle2, ShieldCheck } from "lucide-react";

export default function ContactForm({ onMessageSent }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      return;
    }

    const newMessage = {
      id: Date.now().toString(),
      ...formData,
      timestamp: new Date().toLocaleString("en-NG", {
        dateStyle: "medium",
        timeStyle: "short",
      }),
    };

    // Save message to localStorage key `ttc_messages`
    try {
      const existing = JSON.parse(localStorage.getItem("ttc_messages") || "[]");
      const updated = [newMessage, ...existing];
      localStorage.setItem("ttc_messages", JSON.stringify(updated));
      if (onMessageSent) onMessageSent();
    } catch (err) {
      console.error("Failed to save message to localStorage", err);
    }

    setIsSubmitted(true);
    setFormData({ fullName: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-white border border-gray-border rounded-3xl p-6 sm:p-10 shadow-xl space-y-6">
      <div className="space-y-2 border-b border-gray-border pb-4">
        <h2 className="font-heading font-extrabold text-2xl text-navy">
          Send a Message
        </h2>
        <p className="text-xs text-gray-mutedText">
          Fill out the form below to submit an inquiry directly to the TTC secretariats.
        </p>
      </div>

      {isSubmitted ? (
        <div className="p-8 text-center space-y-4 bg-green-transform/10 rounded-2xl border border-green-transform/20">
          <div className="w-14 h-14 bg-green-transform text-navy rounded-full flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="font-heading font-bold text-xl text-navy">
              Message Received!
            </h3>
            <p className="text-xs text-gray-mutedText leading-relaxed max-w-md mx-auto">
              Your inquiry has been saved to <strong className="text-navy">ttc_messages</strong>. Administrators can review it directly in the message panel below.
            </p>
          </div>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-2.5 bg-navy text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-green-transform hover:text-navy transition shadow-sm"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-navy uppercase tracking-wider">
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Amina Bello"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-4 py-3 bg-gray-soft border border-gray-border rounded-xl text-xs text-navy focus:outline-none focus:border-navy font-medium"
            />
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-navy uppercase tracking-wider">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="e.g. amina@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-gray-soft border border-gray-border rounded-xl text-xs text-navy focus:outline-none focus:border-navy font-medium"
            />
          </div>

          {/* Subject */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-navy uppercase tracking-wider">
              Subject
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Membership Application Query"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-3 bg-gray-soft border border-gray-border rounded-xl text-xs text-navy focus:outline-none focus:border-navy font-medium"
            />
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-navy uppercase tracking-wider">
              Message
            </label>
            <textarea
              required
              rows={5}
              placeholder="Write your message here..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-gray-soft border border-gray-border rounded-xl text-xs text-navy focus:outline-none focus:border-navy font-medium resize-none"
            />
          </div>

          <div className="p-3 bg-blue-trust/10 rounded-xl flex items-center gap-2 text-[11px] text-navy">
            <ShieldCheck className="w-4 h-4 text-blue-trust shrink-0" />
            <span>Messages are safely saved to local storage for administrative review.</span>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-navy text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-green-transform hover:text-navy transition shadow-md flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </button>
        </form>
      )}
    </div>
  );
}