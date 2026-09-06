"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroStats from "./HeroStats";

export default function HeroSection({ onOpenModal }) {
  return (
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
            <Link
              href="/vision"
              className="bg-green-transform text-white px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition"
            >
              Explore Our Vision
            </Link>
            <button
              onClick={onOpenModal}
              className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Join the Movement
            </button>
          </div>
        </motion.div>

        <HeroStats />
      </div>
    </section>
  );
}