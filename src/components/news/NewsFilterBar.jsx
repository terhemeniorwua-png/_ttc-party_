"use client";

import { Search } from "lucide-react";

export default function NewsFilterBar({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}) {
  return (
    <div className="space-y-6">
      {/* Search Input */}
      <div className="relative max-w-xl mx-auto">
        <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search news by keyword, headline, or topic..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-11 pr-4 py-3 bg-gray-soft/80 border border-gray-border rounded-xl text-xs text-navy placeholder-gray-400 focus:outline-none focus:border-navy transition"
        />
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              selectedCategory === cat
                ? "bg-navy text-white shadow-md"
                : "bg-gray-soft text-gray-mutedText hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}