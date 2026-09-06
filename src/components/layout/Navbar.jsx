"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// TTC Custom Logo Component
function TTCLogo({ className = "w-9 h-9" }) {
  return (
    <div className="flex items-center gap-2.5 group">
      <svg
        className={className}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Shield / Trust Foundation */}
        <path
          d="M20 3L6 9V19C6 28.5 12 35.8 20 38C28 35.8 34 28.5 34 19V9L20 3Z"
          className="fill-navy group-hover:fill-blue-trust transition-colors duration-300"
        />
        {/* Dynamic Growth / Transformation Leaf Curve */}
        <path
          d="M20 10C15 15 13 22 15 28C17 28 22 27 26 21C28 18 27.5 13 25 11C23 9.5 21 9.5 20 10Z"
          className="fill-green-transform"
        />
        {/* Accent Node */}
        <circle cx="20" cy="18" r="3" className="fill-gold-warm" />
      </svg>
      
      <div className="flex flex-col">
        <span className="font-heading font-extrabold text-xl text-navy leading-none tracking-tight flex items-center">
          TTC
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-transform ml-0.5"></span>
        </span>
        <span className="text-[9px] font-bold text-gray-mutedText tracking-wider uppercase leading-none mt-1">
          Trust & Transformation
        </span>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full z-40 font-body">
      {/* Utility Bar */}
      {!scrolled && (
        <div className="bg-navy text-white text-xs py-2 px-6 flex justify-between items-center border-b border-white/10">
          <div className="font-medium tracking-wide">
            TTC — Trust & Transformation Coalition
          </div>
          <div className="hidden sm:flex gap-4 font-normal">
            <Link href="/civic-academy" className="hover:text-gold-warm transition">
              Civic Academy
            </Link>
            <Link href="/transparency" className="hover:text-gold-warm transition">
              Transparency
            </Link>
            <Link href="/login" className="hover:text-gold-warm transition">
              Login
            </Link>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <motion.nav
        animate={{ y: 0 }}
        className={`w-full bg-white transition-all duration-300 ${
          scrolled
            ? "fixed top-0 left-0 shadow-md py-3 backdrop-blur-md bg-white/95"
            : "py-4 border-b border-gray-border"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo Link */}
          <Link href="/" className="flex items-center">
            <TTCLogo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-gray-darkText">
            <Link href="/" className="hover:text-blue-trust transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-trust transition">
              About
            </Link>
            <Link href="/vision" className="hover:text-blue-trust transition">
              Vision
            </Link>
            <Link href="/policies" className="hover:text-blue-trust transition">
              Policies
            </Link>
            <Link href="/news" className="hover:text-blue-trust transition">
              News
            </Link>
            <Link href="/events" className="hover:text-blue-trust transition">
              Events
            </Link>
            <Link href="/civic-academy" className="hover:text-blue-trust transition">
              Civic Academy
            </Link>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/get-involved"
              className="bg-green-transform text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-opacity-90 transition shadow-sm active:scale-95"
            >
              Get Involved
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-navy hover:bg-gray-soft rounded-lg transition"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-border px-6 py-6 space-y-4 shadow-lg overflow-hidden"
            >
              <div className="flex flex-col gap-3 font-semibold text-gray-darkText text-base">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-blue-trust transition"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-blue-trust transition"
                >
                  About
                </Link>
                <Link
                  href="/vision"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-blue-trust transition"
                >
                  Vision
                </Link>
                <Link
                  href="/policies"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-blue-trust transition"
                >
                  Policies
                </Link>
                <Link
                  href="/news"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-blue-trust transition"
                >
                  News
                </Link>
                <Link
                  href="/events"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-blue-trust transition"
                >
                  Events
                </Link>
                <Link
                  href="/civic-academy"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-blue-trust transition"
                >
                  Civic Academy
                </Link>
                <Link
                  href="/transparency"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-blue-trust transition"
                >
                  Transparency
                </Link>
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-blue-trust transition"
                >
                  Login
                </Link>
              </div>

              <div className="pt-4 border-t border-gray-border flex flex-col gap-3">
                <Link
                  href="/get-involved"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center bg-green-transform text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition"
                >
                  Get Involved
                </Link>
                <Link
                  href="/donate"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center bg-navy text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition"
                >
                  Donate
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}