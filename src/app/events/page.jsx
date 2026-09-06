"use client";

import { useState } from "react";
import EventsHero from "@/components/events/EventsHero";
import EventsFilterBar from "@/components/events/EventsFilterBar";
import EventCard from "@/components/events/EventCard";
import JoinCTASection from "@/components/home/JoinCTASection";
import Footer from "@/components/ui/Footer";
import { EVENT_CATEGORIES, EVENT_LOCATIONS, EVENTS_DATA } from "@/lib/eventsData";

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");

  const filteredEvents = EVENTS_DATA.filter((event) => {
    const matchesTab = activeTab === "upcoming" ? event.isUpcoming : !event.isUpcoming;
    const matchesCategory =
      selectedCategory === "All" || event.category === selectedCategory;
    const matchesLocation =
      selectedLocation === "All Locations" || event.location === selectedLocation;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesCategory && matchesLocation && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white font-body">
      {/* 1. Hero */}
      <EventsHero />

      {/* 2. Filters & Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        <EventsFilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedLocation={selectedLocation}
          onLocationChange={setSelectedLocation}
          categories={EVENT_CATEGORIES}
          locations={EVENT_LOCATIONS}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {filteredEvents.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-soft/40 rounded-2xl border border-gray-border space-y-2">
            <p className="font-heading font-bold text-navy text-lg">No events found</p>
            <p className="text-xs text-gray-mutedText">
              Try adjusting your search filters or switching between Upcoming/Past events.
            </p>
          </div>
        )}
      </div>

      {/* 3. Join CTA */}
      <JoinCTASection />

      {/* 4. Footer */}
      {/* <Footer /> */}
    </main>
  );
}