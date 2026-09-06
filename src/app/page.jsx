"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Compass, RefreshCw, Users, CheckCircle } from "lucide-react";
import Modal from "@/components/ui/Modal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-body">
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Demonstration Platform"
        message="TTC is a fictional political organization framework designed purely for demonstration purposes."
      />

      {/* Hero Section */}
      <section className="relative bg-navy text-white py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white/10 text-gold-warm font-semibold text-xs px-3 py-1 rounded-full mb-4 tracking-wider uppercase">
              Trust • Service • Transformation
            </span>
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl leading-tight mb-6">
              Transforming Tomorrow Together.
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-xl">
              Building a future where every citizen has the opportunity to live, learn, work, and thrive through practical civic leadership.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/vision" className="bg-green-transform text-white px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition">
                Explore Our Vision
              </Link>
              <button 
                onClick={() => setModalOpen(true)} 
                className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Join the Movement
              </button>
            </div>
          </motion.div>

          {/* Hero Statistics */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 bg-white/5 p-6 rounded-2xl border border-white/10"
          >
            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <p className="font-heading font-bold text-3xl text-gold-warm">36</p>
              <p className="text-xs text-gray-300 mt-1">States We Aim to Serve</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <p className="font-heading font-bold text-3xl text-green-transform">6</p>
              <p className="text-xs text-gray-300 mt-1">National Priorities</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <p className="font-heading font-bold text-3xl text-blue-trust">100%</p>
              <p className="text-xs text-gray-300 mt-1">Transparency Commitment</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <p className="font-heading font-bold text-3xl text-white">1</p>
              <p className="text-xs text-gray-300 mt-1">Shared Future</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why TTC Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="font-heading font-bold text-3xl text-navy text-center mb-12">
          A Better Future Starts With Us
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: "Trust", desc: "Government working with openness, accountability, and integrity.", icon: Shield },
            { title: "Opportunity", desc: "Access to meaningful economic and personal development.", icon: Compass },
            { title: "Transformation", desc: "Achieving lasting progress through practical civic action.", icon: RefreshCw },
            { title: "Participation", desc: "Ensuring citizens have a direct voice in shaping decisions.", icon: Users },
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -4 }}
              className="p-6 rounded-xl border border-gray-border bg-gray-soft/50 shadow-sm"
            >
              <item.icon className="w-8 h-8 text-blue-trust mb-4" />
              <h3 className="font-heading font-bold text-xl text-navy mb-2">{item.title}</h3>
              <p className="text-sm text-gray-mutedText">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}