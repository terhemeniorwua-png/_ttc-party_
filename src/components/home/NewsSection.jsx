"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Newspaper, Calendar, Tag } from "lucide-react";

export default function NewsSection() {
  const newsArticles = [
    {
      id: "news-1",
      title: "TTC Releases Education Transformation Framework",
      category: "Policy Framework",
      date: "September 02, 2026",
      excerpt: "A comprehensive policy document outlining modern curriculum upgrades, teacher incentives, and digital classroom integration across public schools.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
      slug: "/media-center#PR-2026-08",
    },
    {
      id: "news-2",
      title: "Youth Innovation and Employment Forum Announced",
      category: "Initiative Launch",
      date: "August 24, 2026",
      excerpt: "Connecting 5,000 young tech innovators, agricultural entrepreneurs, and policy strategists with direct micro-grant opportunities and mentorship.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
      slug: "/youth-incubator",
    },
    {
      id: "news-3",
      title: "Understanding Our Healthcare Proposal",
      category: "Healthcare Reform",
      date: "August 11, 2026",
      excerpt: "Breaking down TTC’s decentralized healthcare model aimed at upgrading primary health centers across all 774 Local Government Areas.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
      slug: "/policies#healthcare",
    },
    {
      id: "news-4",
      title: "Community Participation: Why Your Voice Matters",
      category: "Grassroots Action",
      date: "July 29, 2026",
      excerpt: "How citizen-led budget tracking and active participation in local town halls drive real administrative accountability at the state level.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
      slug: "/transparency",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-soft font-body border-y border-gray-border">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="px-3.5 py-1 bg-green-transform/10 text-green-transform border border-green-transform/20 font-bold text-xs rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
              <Newspaper className="w-3.5 h-3.5" /> Public Communications
            </span>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-navy">
              Latest News & Updates
            </h2>
            <p className="text-xs md:text-sm text-gray-darkText leading-relaxed">
              Official press releases, policy deep-dives, and community reports directly from the Third Choice Coalition desk.
            </p>
          </div>

          <Link
            href="/media-center"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy text-white text-xs font-bold rounded-xl hover:bg-blue-trust transition duration-200 shrink-0 self-start md:self-auto shadow-sm"
          >
            Visit Media Center <ArrowRight className="w-3.5 h-3.5 text-gold-warm" />
          </Link>
        </div>

        {/* 4-Card Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl border border-gray-border overflow-hidden shadow-sm flex flex-col justify-between hover:border-blue-trust hover:shadow-md transition duration-300 group"
            >
              <div className="space-y-4">
                {/* Featured Card Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-navy/10">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-navy/90 text-gold-warm font-bold text-[10px] rounded-md backdrop-blur-md uppercase tracking-wider border border-white/10 flex items-center gap-1">
                      <Tag className="w-2.5 h-2.5" /> {article.category}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="px-5 space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-gray-mutedText font-semibold">
                    <Calendar className="w-3 h-3" />
                    <span>{article.date}</span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-navy leading-snug group-hover:text-blue-trust transition line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs text-gray-darkText leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer Read Action */}
              <div className="p-5 pt-3 mt-4 border-t border-gray-border/60">
                <Link
                  href={article.slug}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-green-transform transition group-hover:translate-x-0.5"
                >
                  Read More <ArrowRight className="w-3.5 h-3.5 text-green-transform group-hover:translate-x-1 transition duration-200" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}