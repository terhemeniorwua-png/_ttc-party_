"use client";

import { useState } from "react";
import PolicyHero from "@/components/policies/PolicyHero";
import PolicyFilterBar from "@/components/policies/PolicyFilterBar";
import PolicyCard from "@/components/policies/PolicyCard";
import JoinCTASection from "@/components/home/JoinCTASection";
// import Footer from "@/components/ui/Footer";
import { POLICY_CATEGORIES, POLICIES_DATA } from "@/lib/policiesData";

export default function PoliciesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPolicies = POLICIES_DATA.filter((policy) => {
    const matchesCategory =
      selectedCategory === "All" || policy.category === selectedCategory;
    const matchesSearch =
      policy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      policy.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white font-body">
      {/* 1. Hero */}
      <PolicyHero />

      {/* 2. Filterable Library */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        <PolicyFilterBar
          categories={POLICY_CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {filteredPolicies.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPolicies.map((policy) => (
              <PolicyCard key={policy.slug} policy={policy} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-soft/40 rounded-2xl border border-gray-border space-y-2">
            <p className="font-heading font-bold text-navy text-lg">No policies found</p>
            <p className="text-xs text-gray-mutedText">
              Try adjusting your search keywords or switching category filters.
            </p>
          </div>
        )}
      </div>

      {/* 3. Join CTA Banner */}
      <JoinCTASection />

      {/* 4. Footer */}
      {/* <Footer /> */}
    </main>
  );
}