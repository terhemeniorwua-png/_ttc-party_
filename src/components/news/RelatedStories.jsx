"use client";

import NewsCard from "./NewsCard";

export default function RelatedStories({ currentSlug, category, allArticles }) {
  const related = allArticles
    .filter((a) => a.slug !== currentSlug && (a.category === category || true))
    .slice(0, 2);

  if (related.length === 0) return null;

  return (
    <div className="pt-12 border-t border-gray-border space-y-6 max-w-4xl mx-auto">
      <h3 className="font-heading font-bold text-2xl text-navy">
        Related Stories
      </h3>
      <div className="grid sm:grid-cols-2 gap-6">
        {related.map((article) => (
          <NewsCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}