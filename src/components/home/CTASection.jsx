"use client";

import { useState } from "react";
import {
Mail,
HeartHandshake,
ArrowRight,
ShieldCheck,
CheckCircle2,
Loader2,
MapPin,
User,
} from "lucide-react";

import { saveSubscriber, saveVolunteer } from "@/lib/storage";

export default function CTASection() {
const [activeTab, setActiveTab] = useState("newsletter");
const [loading, setLoading] = useState(false);
const [statusMessage, setStatusMessage] = useState(null);

const [formData, setFormData] = useState({
name: "",
email: "",
lga: "",
});

const handleInputChange = (e) => {
const { name, value } = e.target;

setFormData((prev) => ({
  ...prev,
  [name]: value,
}));


};

const handleTabChange = (tab) => {
setActiveTab(tab);
setStatusMessage(null);

setFormData({
  name: "",
  email: "",
  lga: "",
});


};

const handleSubmit = async (e) => {
e.preventDefault();

if (loading) return;

setLoading(true);
setStatusMessage(null);

try {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (activeTab === "newsletter") {
    const email = formData.email.trim();

    saveSubscriber({
      email,
      subscribedAt: new Date().toISOString(),
    });

    setStatusMessage({
      type: "success",
      text: `Thank you! ${email} has been subscribed to our weekly policy dispatches.`,
    });
  } else {
    const name = formData.name.trim();
    const email = formData.email.trim();
    const lga = formData.lga.trim();

    saveVolunteer({
      name,
      email,
      lga,
      registeredAt: new Date().toISOString(),
    });

    setStatusMessage({
      type: "success",
      text: `Welcome aboard, ${name}! Our local team in ${lga} will reach out shortly.`,
    });
  }

  // Reset form
  setFormData({
    name: "",
    email: "",
    lga: "",
  });
} catch (error) {
  console.error("Form submission error:", error);

  setStatusMessage({
    type: "error",
    text: "An error occurred while saving your details. Please try again.",
  });
} finally {
  setLoading(false);
}


};

return ( <section className="relative overflow-hidden border-t border-white/10 bg-navy py-16 font-body text-white md:py-24">
{/* Background Glow Accents */} <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-green-transform/10 blur-3xl" />


  <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-trust/10 blur-3xl" />

  <div className="relative z-10 mx-auto max-w-5xl px-6">
    <div className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md md:p-12">

      {/* Header */}
      <div className="mx-auto max-w-2xl space-y-4 text-center">

        {/* Tabs */}
        <div className="inline-flex rounded-xl border border-white/10 bg-navy/80 p-1.5 shadow-inner">

          {/* Newsletter */}
          <button
            type="button"
            onClick={() => handleTabChange("newsletter")}
            className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold transition duration-200 ${
              activeTab === "newsletter"
                ? "bg-green-transform text-navy shadow-md"
                : "text-gray-300 hover:text-white"
            }`}
          >
            <Mail className="h-4 w-4" />
            Newsletter Dispatch
          </button>

          {/* Volunteer */}
          <button
            type="button"
            onClick={() => handleTabChange("volunteer")}
            className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold transition duration-200 ${
              activeTab === "volunteer"
                ? "bg-gold-warm text-navy shadow-md"
                : "text-gray-300 hover:text-white"
            }`}
          >
            <HeartHandshake className="h-4 w-4" />
            Volunteer With TTC
          </button>
        </div>

        {/* Heading */}
        <h2 className="font-heading text-2xl font-extrabold leading-tight md:text-4xl">
          {activeTab === "newsletter"
            ? "Stay Informed with Grassroots Policy Updates"
            : "Help Us Build Sustainable Systems in Your LGA"}
        </h2>

        {/* Description */}
        <p className="text-xs leading-relaxed text-gray-300 md:text-sm">
          {activeTab === "newsletter"
            ? "Receive weekly civic analysis, legislative policy deep-dives, and town hall schedules directly in your inbox."
            : "Join over 12,000 active volunteers driving voter education, local budget tracking, and town hall organizing across Nigeria."}
        </p>
      </div>

      {/* Status Message */}
      {statusMessage && (
        <div
          className={`mx-auto flex max-w-2xl items-center gap-2 rounded-xl border p-4 text-xs font-semibold ${
            statusMessage.type === "success"
              ? "border-green-transform/40 bg-green-transform/20 text-green-transform"
              : "border-red-500/40 bg-red-500/20 text-red-200"
          }`}
        >
          {statusMessage.type === "success" ? (
            <CheckCircle2 className="h-4 w-4 shrink-0" />
          ) : (
            <ShieldCheck className="h-4 w-4 shrink-0" />
          )}

          <span>{statusMessage.text}</span>
        </div>
      )}

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-2xl space-y-4"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

          {/* Name - Volunteer */}
          {activeTab === "volunteer" && (
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-gray-300"
              >
                <User className="h-3 w-3 text-gold-warm" />
                Full Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                required
                autoComplete="name"
                placeholder="e.g. Amina Bello"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-xs text-white outline-none transition placeholder:text-gray-400 focus:border-gold-warm"
              />
            </div>
          )}

          {/* Email */}
          <div
            className={
              activeTab === "newsletter"
                ? "md:col-span-2"
                : ""
            }
          >
            <label
              htmlFor="email"
              className="mb-1.5 flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-gray-300"
            >
              <Mail className="h-3 w-3 text-green-transform" />
              Email Address
            </label>

            <input
              id="email"
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="e.g. citizen@domain.ng"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-xs text-white outline-none transition placeholder:text-gray-400 focus:border-green-transform"
            />
          </div>

          {/* LGA - Volunteer */}
          {activeTab === "volunteer" && (
            <div className="md:col-span-2">
              <label
                htmlFor="lga"
                className="mb-1.5 flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-gray-300"
              >
                <MapPin className="h-3 w-3 text-gold-warm" />
                State / Local Government Area (LGA)
              </label>

              <input
                id="lga"
                type="text"
                name="lga"
                required
                placeholder="e.g. Abuja Municipal / Ikeja / Kano Municipal"
                value={formData.lga}
                onChange={handleInputChange}
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-xs text-white outline-none transition placeholder:text-gray-400 focus:border-gold-warm"
              />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`flex w-full items-center justify-center gap-2 rounded-xl py-4 text-xs font-bold uppercase tracking-wider text-navy shadow-lg transition duration-300 disabled:cursor-not-allowed disabled:opacity-50 ${
            activeTab === "newsletter"
              ? "bg-green-transform hover:bg-white"
              : "bg-gold-warm hover:bg-white"
          }`}
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              {activeTab === "newsletter"
                ? "Subscribe To Dispatch"
                : "Submit Volunteer Application"}

              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>

      {/* Trust Guarantees */}
      <div className="flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-4 text-[11px] text-gray-300">

        <span className="flex items-center gap-1.5">
          <ShieldCheck className="h-4 w-4 text-green-transform" />
          Zero Spam Policy
        </span>

        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="h-4 w-4 text-gold-warm" />
          Decentralized Grassroots Action
        </span>

      </div>
    </div>
  </div>
</section>


);
}
