import Link from "next/link";
import { Shield, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white font-body border-t border-gray-border/20">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Main Four Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Column 1: Brand Info (Takes 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-green-transform/20 rounded-lg text-green-transform border border-green-transform/30">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl tracking-tight text-white block">TTC</span>
                <span className="text-[10px] uppercase font-bold text-gold-warm tracking-wider block">
                  Trust & Transformation Coalition
                </span>
              </div>
            </div>
            
            <p className="font-heading font-bold text-lg text-green-transform">
              Transforming Tomorrow Together.
            </p>
            
            <p className="text-xs text-gray-300 max-w-sm leading-relaxed">
              Empowering citizens, deepening electoral integrity, and deploying open-source civic technology across Nigeria’s 774 Local Government Areas.
            </p>
          </div>

          {/* Column 2: Explore */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-gold-warm uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <Link href="/about" className="hover:text-green-transform transition inline-flex items-center gap-1">
                  About
                </Link>
              </li>
              <li>
                <Link href="/vision" className="hover:text-green-transform transition">
                  Our Vision
                </Link>
              </li>
              <li>
                <Link href="/policies" className="hover:text-green-transform transition">
                  Policies
                </Link>
              </li>
              <li>
                <Link href="/media-center" className="hover:text-green-transform transition">
                  News
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-green-transform transition">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/academy" className="hover:text-green-transform transition">
                  Civic Academy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Participate */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-gold-warm uppercase tracking-wider">
              Participate
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <Link href="/join" className="hover:text-green-transform transition font-semibold text-white">
                  Join TTC
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="hover:text-green-transform transition">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-green-transform transition">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-transform transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Transparency */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-gold-warm uppercase tracking-wider">
              Transparency
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <Link href="/transparency" className="hover:text-green-transform transition">
                  Financial Reports
                </Link>
              </li>
              <li>
                <Link href="/governance" className="hover:text-green-transform transition">
                  Governance
                </Link>
              </li>
              <li>
                <Link href="/policy-documents" className="hover:text-green-transform transition">
                  Policy Documents
                </Link>
              </li>
              <li>
                <Link href="/transparency#audits" className="hover:text-green-transform transition">
                  Accountability
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs text-gray-300 font-semibold">
            © 2026 TTC — Trust & Transformation Coalition
          </p>
          <p className="text-[11px] text-gray-400 italic bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
            Fictional political organization created for demonstration and design purposes.
          </p>
        </div>

      </div>
    </footer>
  );
}