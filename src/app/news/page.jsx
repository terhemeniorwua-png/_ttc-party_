"use client";

import { useState } from "react";
import NewsHero from "@/components/news/NewsHero";
import FeaturedArticle from "@/components/news/FeaturedArticle";
import NewsFilterBar from "@/components/news/NewsFilterBar";
import NewsCard from "@/components/news/NewsCard";
import JoinCTASection from "@/components/home/JoinCTASection";
// import Footer from "@/components/ui/Footer";
import { NEWS_CATEGORIES, NEWS_DATA } from "@/lib/newsData";

const INITIAL_VISIBLE_COUNT = 6;

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const featured = NEWS_DATA.find((a) => a.isFeatured) || NEWS_DATA[0];

  const filteredNews = NEWS_DATA.filter((article) => {
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const visibleArticles = filteredNews.slice(0, visibleCount);
  const hasMore = visibleCount < filteredNews.length;

  return (
    <main className="min-h-screen bg-white font-body">
      {/* 1. Hero */}
      <NewsHero />

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        {/* 2. Featured Article Banner */}
        {selectedCategory === "All" && !searchQuery && (
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-navy/60 font-heading">
              Top Headline
            </h2>
            <FeaturedArticle article={featured} />
          </div>
        )}

        {/* 3. Search & Filter Bar */}
        <NewsFilterBar
          categories={NEWS_CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            setVisibleCount(INITIAL_VISIBLE_COUNT);
          }}
          searchQuery={searchQuery}
          onSearchChange={(q) => {
            setSearchQuery(q);
            setVisibleCount(INITIAL_VISIBLE_COUNT);
          }}
        />

        {/* 4. News Grid */}
        {visibleArticles.length > 0 ? (
          <div className="space-y-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleArticles.map((article) => (
                <NewsCard key={article.slug} article={article} />
              ))}
            </div>

            {/* Load More Trigger */}
            {hasMore && (
              <div className="text-center pt-6">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 3)}
                  className="px-8 py-3.5 bg-navy text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-green-transform hover:text-navy transition shadow-md"
                >
                  Load More Stories
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-soft/40 rounded-2xl border border-gray-border space-y-2">
            <p className="font-heading font-bold text-navy text-lg">No articles found</p>
            <p className="text-xs text-gray-mutedText">
              Try adjusting your search query or choosing a different category filter.
            </p>
          </div>
        )}
      </div>

      {/* 5. Join CTA */}
      <JoinCTASection />

      {/* 6. Footer */}
      {/* <Footer /> */}
    </main>
  );
}