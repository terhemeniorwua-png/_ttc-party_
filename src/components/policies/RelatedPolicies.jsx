"use client";

import PolicyCard from "./PolicyCard";

export default function RelatedPolicies({ currentSlug, category, allPolicies }) {
  const related = allPolicies
    .filter((p) => p.slug !== currentSlug && (p.category === category || true))
    .slice(0, 2);

  if (related.length === 0) return null;

  return (
    <div className="pt-12 border-t border-gray-border space-y-6">
      <h3 className="font-heading font-bold text-2xl text-navy">
        Related Policy Proposals
      </h3>
      <div className="grid sm:grid-cols-2 gap-6">
        {related.map((p) => (
          <PolicyCard key={p.slug} policy={p} />
        ))}
      </div>
    </div>
  );
}