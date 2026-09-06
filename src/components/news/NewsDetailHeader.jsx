"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Tag, Share2, User } from "lucide-react";

export default function NewsDetailHeader({ article }) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Article link copied to clipboard!");
    }
  };

  return (
    <div className="bg-navy text-white pt-12 pb-16 px-6 border-b border-white/10">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Back Button */}
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-300 hover:text-white transition bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg"
        >
          <ArrowLeft className="w-4 h-4 text-green-transform" />
          <span>Back to News</span>
        </Link>

        {/* Category & Date */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
          <span className="bg-green-transform text-navy font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
            <Tag className="w-3 h-3" />
            {article.category}
          </span>
          <span className="text-gray-300 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-gold-warm" />
            Published: {article.date}
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl leading-tight text-white">
          {article.title}
        </h1>

        {/* Author Bar & Share */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            {article.author.avatar ? (
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20 shrink-0">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                <User className="w-5 h-5" />
              </div>
            )}
            <div>
              <p className="text-xs font-bold text-white">{article.author.name}</p>
              <p className="text-[11px] text-gray-300">{article.author.role}</p>
            </div>
          </div>

          <button
            onClick={handleShare}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl border border-white/20 text-xs font-bold transition flex items-center gap-2"
          >
            <Share2 className="w-4 h-4 text-green-transform" />
            <span>Share Story</span>
          </button>
        </div>
      </div>
    </div>
  );
}