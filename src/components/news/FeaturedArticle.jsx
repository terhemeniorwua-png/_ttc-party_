"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Tag, User } from "lucide-react";

export default function FeaturedArticle({ article }) {
  if (!article) return null;

  return (
    <div className="bg-white border border-gray-border rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition group">
      <div className="grid lg:grid-cols-12 items-center">
        {/* Large Cover Image */}
        <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[420px] w-full overflow-hidden bg-gray-soft">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition duration-700 ease-out"
            priority
          />
          <div className="absolute top-4 left-4">
            <span className="bg-green-transform text-navy font-bold text-[11px] px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-md">
              Featured Story
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-5 p-8 sm:p-10 space-y-6 flex flex-col justify-between h-full">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs text-gray-mutedText">
              <span className="text-navy font-bold bg-navy/5 px-2.5 py-1 rounded-md uppercase tracking-wider flex items-center gap-1">
                <Tag className="w-3 h-3 text-green-transform" />
                {article.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-blue-trust" />
                {article.date}
              </span>
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy leading-snug group-hover:text-green-transform transition">
              <Link href={`/news/${article.slug}`}>{article.title}</Link>
            </h2>

            <p className="text-xs sm:text-sm text-gray-mutedText leading-relaxed line-clamp-3">
              {article.summary}
            </p>
          </div>

          {/* Author & Action */}
          <div className="pt-6 border-t border-gray-border flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {article.author.avatar ? (
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-gray-border shrink-0">
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-9 h-9 rounded-full bg-navy/10 flex items-center justify-center text-navy shrink-0">
                  <User className="w-4 h-4" />
                </div>
              )}
              <div>
                <p className="text-xs font-bold text-navy leading-tight">{article.author.name}</p>
                <p className="text-[10px] text-gray-mutedText">{article.author.role}</p>
              </div>
            </div>

            <Link
              href={`/news/${article.slug}`}
              className="p-3 bg-navy text-white rounded-xl hover:bg-green-transform hover:text-navy transition flex items-center justify-center shrink-0"
              aria-label="Read featured story"
            >
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}