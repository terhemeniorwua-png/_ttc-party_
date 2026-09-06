"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";

export default function PolicyCard({ policy }) {
  return (
    <div className="bg-white border border-gray-border rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-6">
      <div className="space-y-4">
        {/* Category & Date */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-bold text-navy bg-navy/5 px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
            <Tag className="w-3 h-3 text-green-transform" />
            {policy.category}
          </span>
          <span className="text-xs text-gray-mutedText flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-blue-trust" />
            {policy.lastUpdated}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading font-bold text-xl text-navy leading-snug">
          {policy.title}
        </h3>

        {/* Summary */}
        <p className="text-xs text-gray-mutedText leading-relaxed line-clamp-3">
          {policy.summary}
        </p>
      </div>

      {/* Read Action */}
      <div className="pt-4 border-t border-gray-border flex items-center justify-between">
        <Link
          href={`/policies/${policy.slug}`}
          className="text-xs font-bold text-navy hover:text-green-transform transition flex items-center gap-1.5"
        >
          <span>Read Policy</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}