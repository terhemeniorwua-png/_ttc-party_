"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Tag, User } from "lucide-react";

export default function NewsCard({ article }) {
  return (
    <div className="bg-white border border-gray-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between group">
      <div>
        {/* Cover Image */}
        <div className="relative h-48 w-full overflow-hidden bg-gray-soft">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition duration-500 ease-out"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-white/90 backdrop-blur-md text-navy font-bold text-[10px] px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm flex items-center gap-1">
              <Tag className="w-3 h-3 text-green-transform" />
              {article.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <div className="flex items-center gap-1.5 text-[11px] text-gray-mutedText">
            <Calendar className="w-3 h-3 text-blue-trust" />
            <span>{article.date}</span>
          </div>

          <h3 className="font-heading font-bold text-lg text-navy leading-snug group-hover:text-green-transform transition line-clamp-2">
            <Link href={`/news/${article.slug}`}>{article.title}</Link>
          </h3>

          <p className="text-xs text-gray-mutedText leading-relaxed line-clamp-3">
            {article.summary}
          </p>
        </div>
      </div>

      {/* Footer / Author */}
      <div className="px-6 pb-6 pt-4 border-t border-gray-border/60 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {article.author.avatar ? (
            <div className="relative w-7 h-7 rounded-full overflow-hidden border border-gray-border shrink-0">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-7 h-7 rounded-full bg-navy/10 flex items-center justify-center text-navy shrink-0">
              <User className="w-3.5 h-3.5" />
            </div>
          )}
          <span className="text-xs font-semibold text-navy truncate max-w-[120px]">
            {article.author.name}
          </span>
        </div>

        <Link
          href={`/news/${article.slug}`}
          className="text-xs font-bold text-navy hover:text-green-transform transition flex items-center gap-1"
        >
          <span>Read</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}