"use client";

import { useState } from "react";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactAdminViewer from "@/components/contact/ContactAdminViewer";
import JoinCTASection from "@/components/home/JoinCTASection";
// import Footer from "@/components/ui/Footer";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleMessageSent = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <main className="min-h-screen bg-white font-body">
      {/* 1. Hero */}
      <ContactHero />

      {/* 2. Contact Grid Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold text-gold-warm uppercase tracking-wider">
                  Secretariat & Support
                </span>
                <h2 className="font-heading font-extrabold text-3xl text-navy">
                  Reach Out to Our Administrative Offices
                </h2>
                <p className="text-xs text-gray-mutedText leading-relaxed">
                  We maintain open channels across national, zonal, and state secretariats to support grassroots mobilization and citizen inquiries.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 bg-gray-soft/50 rounded-2xl border border-gray-border">
                  <div className="p-3 bg-navy text-white rounded-xl shrink-0">
                    <MapPin className="w-5 h-5 text-green-transform" />
                  </div>
                  <div className="space-y-1 text-xs">
                    <h4 className="font-bold text-navy text-sm">National Secretariat</h4>
                    <p className="text-gray-mutedText">
                      Plot 142, Civic Assembly Way, Central Business District, Abuja, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-gray-soft/50 rounded-2xl border border-gray-border">
                  <div className="p-3 bg-navy text-white rounded-xl shrink-0">
                    <Mail className="w-5 h-5 text-green-transform" />
                  </div>
                  <div className="space-y-1 text-xs">
                    <h4 className="font-bold text-navy text-sm">Email Inquiries</h4>
                    <p className="text-gray-mutedText">General: info@ttc.org.ng</p>
                    <p className="text-gray-mutedText">Support: helpdesk@ttc.org.ng</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-gray-soft/50 rounded-2xl border border-gray-border">
                  <div className="p-3 bg-navy text-white rounded-xl shrink-0">
                    <Phone className="w-5 h-5 text-green-transform" />
                  </div>
                  <div className="space-y-1 text-xs">
                    <h4 className="font-bold text-navy text-sm">Hotline & SMS</h4>
                    <p className="text-gray-mutedText">+234 (0) 800 882 2882 (Toll-Free)</p>
                    <p className="text-gray-mutedText">Mon – Fri: 8:00 AM – 5:00 PM WAT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm onMessageSent={handleMessageSent} />
            </div>
          </div>

          {/* Admin Viewer Section */}
          <ContactAdminViewer refreshTrigger={refreshTrigger} />
        </div>
      </section>

      {/* 3. Join CTA */}
      <JoinCTASection />

      {/* 4. Footer */}
      {/* <Footer /> */}
    </main>
  );
}