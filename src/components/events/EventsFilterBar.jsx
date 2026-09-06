"use client";

import { Search, MapPin, Filter } from "lucide-react";

export default function EventsFilterBar({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedLocation,
  onLocationChange,
  categories,
  locations,
  activeTab,
  onTabChange,
}) {
  return (
    <div className="space-y-6">
      {/* Upcoming / Past Toggle */}
      <div className="flex justify-center">
        <div className="bg-gray-soft p-1.5 rounded-2xl border border-gray-border flex gap-1">
          <button
            onClick={() => onTabChange("upcoming")}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold transition ${
              activeTab === "upcoming"
                ? "bg-navy text-white shadow-md"
                : "text-gray-mutedText hover:text-navy"
            }`}
          >
            Upcoming Events
          </button>
          <button
            onClick={() => onTabChange("past")}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold transition ${
              activeTab === "past"
                ? "bg-navy text-white shadow-md"
                : "text-gray-mutedText hover:text-navy"
            }`}
          >
            Past Gatherings
          </button>
        </div>
      </div>

      {/* Search & Dropdown Filters */}
      <div className="grid sm:grid-cols-12 gap-4 max-w-4xl mx-auto">
        {/* Search */}
        <div className="sm:col-span-6 relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search events by title or keyword..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-gray-soft/80 border border-gray-border rounded-xl text-xs text-navy placeholder-gray-400 focus:outline-none focus:border-navy transition"
          />
        </div>

        {/* Category Filter */}
        <div className="sm:col-span-3 relative">
          <Filter className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full pl-10 pr-8 py-3 bg-gray-soft/80 border border-gray-border rounded-xl text-xs text-navy focus:outline-none focus:border-navy appearance-none font-semibold"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c === "All" ? "All Categories" : c}
              </option>
            ))}
          </select>
        </div>

        {/* Location Filter */}
        <div className="sm:col-span-3 relative">
          <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <select
            value={selectedLocation}
            onChange={(e) => onLocationChange(e.target.value)}
            className="w-full pl-10 pr-8 py-3 bg-gray-soft/80 border border-gray-border rounded-xl text-xs text-navy focus:outline-none focus:border-navy appearance-none font-semibold"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}