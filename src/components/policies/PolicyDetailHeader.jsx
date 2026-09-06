"use client";

import Link from "next/link";
import { ArrowLeft, Download, Share2, Calendar, Tag } from "lucide-react";

export default function PolicyDetailHeader({ policy }) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: policy.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Policy link copied to clipboard!");
    }
  };

  const handleDownload = () => {
    alert(`Downloading full PDF proposal for: "${policy.title}"`);
  };

  return (
    <div className="bg-navy text-white py-16 md:py-24 px-6 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-6 relative z-10">
        {/* Back Link */}
        <Link
          href="/policies"
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-300 hover:text-white transition bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg"
        >
          <ArrowLeft className="w-4 h-4 text-green-transform" />
          <span>Back to Policies</span>
        </Link>

        {/* Metadata Badges */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
          <span className="bg-green-transform text-navy font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
            <Tag className="w-3 h-3" />
            {policy.category}
          </span>
          <span className="text-gray-300 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-gold-warm" />
            Last Updated: {policy.lastUpdated}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl leading-tight text-white max-w-4xl">
          {policy.title}
        </h1>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <button
            onClick={handleDownload}
            className="px-5 py-3 bg-green-transform text-navy font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-white transition flex items-center gap-2 shadow-lg"
          >
            <Download className="w-4 h-4" />
            <span>Download Policy PDF</span>
          </button>

          <button
            onClick={handleShare}
            className="px-5 py-3 bg-white/10 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl border border-white/20 hover:bg-white/20 transition flex items-center gap-2"
          >
            <Share2 className="w-4 h-4" />
            <span>Share Proposal</span>
          </button>
        </div>
      </div>
    </div>
  );
}