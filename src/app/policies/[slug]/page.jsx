"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import PolicyDetailHeader from "@/components/policies/PolicyDetailHeader";
import PolicySection from "@/components/policies/PolicySection";
import PolicyFAQ from "@/components/policies/PolicyFAQ";
import RelatedPolicies from "@/components/policies/RelatedPolicies";
import JoinCTASection from "@/components/home/JoinCTASection";
// import Footer from "@/components/ui/Footer";
import { POLICIES_DATA } from "@/lib/policiesData";

export default function PolicyDetailPage({ params }) {
  // Unwrap params using React.use() for Next.js App Router compatibility
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  const policy = POLICIES_DATA.find((p) => p.slug === slug);

  if (!policy) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white font-body">
      {/* 1. Policy Header Banner */}
      <PolicyDetailHeader policy={policy} />

      {/* 2. Body Details */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        <PolicySection policy={policy} />
        <PolicyFAQ faqs={policy.faqs} />
        <RelatedPolicies
          currentSlug={policy.slug}
          category={policy.category}
          allPolicies={POLICIES_DATA}
        />
      </div>

      {/* 3. Join CTA */}
      <JoinCTASection />

      {/* 4. Footer */}
      {/* <Footer /> */}
    </main>
  );
}