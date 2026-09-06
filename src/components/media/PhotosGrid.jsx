"use client";

import Image from "next/image";
import { ExternalLink, Tag } from "lucide-react";

const PHOTOS = [
  {
    id: 1,
    title: "Grassroots Town Hall Engagement",
    category: "Community",
    date: "Feb 2026",
    url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    title: "Ward Level Youth Organizing Summit",
    category: "Youth Assembly",
    date: "Jan 2026",
    url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 3,
    title: "Civic Participation Workshop",
    category: "Education",
    date: "Jan 2026",
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 4,
    title: "Volunteers Distributing Policy Pamphlets",
    category: "Volunteers",
    date: "Dec 2025",
    url: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 5,
    title: "Open Governance Roundtable Discussion",
    category: "Policy",
    date: "Nov 2025",
    url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 6,
    title: "Community Outreach & Voter Education Drive",
    category: "Outreach",
    date: "Nov 2025",
    url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function PhotosGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {PHOTOS.map((photo) => (
        <div
          key={photo.id}
          className="bg-white border border-gray-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group flex flex-col justify-between"
        >
          <div>
            <div className="relative h-56 w-full overflow-hidden bg-navy/5">
              <Image
                src={photo.url}
                alt={photo.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-500 ease-out"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-navy shadow-sm flex items-center gap-1.5 uppercase tracking-wider">
                <Tag className="w-3 h-3 text-green-transform" />
                <span>{photo.category}</span>
              </div>
            </div>

            <div className="p-6 space-y-2">
              <span className="text-[11px] text-gray-mutedText">{photo.date}</span>
              <h3 className="font-heading font-bold text-lg text-navy group-hover:text-green-transform transition">
                {photo.title}
              </h3>
            </div>
          </div>

          <div className="p-6 pt-0">
            <a
              href={photo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-navy/5 border border-navy/10 text-navy font-heading font-bold text-xs uppercase tracking-wider rounded-xl group-hover:bg-navy group-hover:text-white transition flex items-center justify-center gap-2"
            >
              <span>Download Hi-Res Photo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}