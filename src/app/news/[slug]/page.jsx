"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import NewsDetailHeader from "@/components/news/NewsDetailHeader";
import NewsArticleBody from "@/components/news/NewsArticleBody";
import RelatedStories from "@/components/news/RelatedStories";
import JoinCTASection from "@/components/home/JoinCTASection";
// import Footer from "@/components/ui/Footer";
import { NEWS_DATA } from "@/lib/newsData";

export default function NewsDetailPage({ params }) {
  // Unwrap params using React.use() for Next.js App Router compatibility
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  const article = NEWS_DATA.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white font-body">
      {/* 1. Article Header */}
      <NewsDetailHeader article={article} />

      {/* 2. Article Image & Body Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        <NewsArticleBody article={article} />
        <RelatedStories
          currentSlug={article.slug}
          category={article.category}
          allArticles={NEWS_DATA}
        />
      </div>

      {/* 3. Join CTA */}
      <JoinCTASection />

      {/* 4. Footer */}
      {/* <Footer /> */}
    </main>
  );
}