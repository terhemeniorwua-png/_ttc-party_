"use client";

import Image from "next/image";

export default function NewsArticleBody({ article }) {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Large Featured Image */}
      <div className="relative h-72 sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-lg bg-gray-soft">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Paragraph Content */}
      <div className="prose max-w-none space-y-6 text-navy/90 text-sm sm:text-base leading-relaxed">
        {article.content.map((paragraph, idx) => (
          <p key={idx} className="leading-8">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}