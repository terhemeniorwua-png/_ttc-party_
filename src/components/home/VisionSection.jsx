"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Eye } from "lucide-react";

export default function VisionSection() {
  return (
    <section className="py-16 md:py-24 bg-white font-body border-y border-gray-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Visual Representation */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-border group">
            <div className="aspect-[4/3] relative w-full bg-navy/10">
              <Image
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=1200"
                alt="Nigerian community leaders collaborating in a local town hall"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-[10px] uppercase font-bold text-gold-warm tracking-wider">
                Community Action
              </span>
              <p className="text-xs font-semibold text-gray-200">
                Grassroots civic empowerment across 774 Local Government Areas.
              </p>
            </div>
          </div>

          {/* Right: Vision Copy */}
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="px-3.5 py-1 bg-blue-trust/10 text-blue-trust border border-blue-trust/20 font-bold text-xs rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5" /> Foundational Ideology
              </span>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-navy leading-tight">
                Our Vision
              </h2>
            </div>

            <blockquote className="font-heading font-bold text-xl md:text-2xl text-navy leading-snug border-l-4 border-green-transform pl-5 py-1">
              “A society where opportunity is not determined by where you were born, but strengthened by the systems we build together.”
            </blockquote>

            <p className="text-xs md:text-sm text-gray-darkText leading-relaxed">
              We are constructing an inclusive governance ecosystem that replaces systemic barriers with institutional access. Through open public budgets, youth leadership incubation, and decentralized grassroots civic education, we empower every citizen to participate in nation-building.
            </p>

            <div className="pt-2">
              <Link
                href="/vision"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-navy text-white text-xs font-bold rounded-xl hover:bg-green-transform transition duration-300 shadow-md group"
              >
                Read Our Vision
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition duration-200 text-gold-warm" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}