"use client";

import { Play, Clock } from "lucide-react";

const VIDEOS = [
  {
    id: 1,
    title: "Understanding Electoral Reform: A Grassroots Guide",
    duration: "4:15",
    date: "Feb 2026",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    title: "Highlights from the National Civic Summit",
    duration: "8:30",
    date: "Jan 2026",
    thumbnail: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 3,
    title: "Civic Academy: How Ward Governance Functions",
    duration: "12:10",
    date: "Dec 2025",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function VideosGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {VIDEOS.map((vid) => (
        <div
          key={vid.id}
          className="bg-white border border-gray-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group flex flex-col justify-between"
        >
          <div>
            <div className="relative h-48 w-full overflow-hidden bg-navy/10">
              <img
                src={vid.thumbnail}
                alt={vid.title}
                className="object-cover w-full h-full group-hover:scale-105 transition duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/10 transition" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/90 text-navy rounded-full flex items-center justify-center shadow-lg group-hover:bg-green-transform transition">
                  <Play className="w-5 h-5 fill-navy text-navy ml-0.5" />
                </div>
              </div>

              <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-navy/80 text-white rounded-lg text-[10px] font-bold flex items-center gap-1 backdrop-blur-sm">
                <Clock className="w-3 h-3 text-green-transform" />
                <span>{vid.duration}</span>
              </div>
            </div>

            <div className="p-6 space-y-2">
              <span className="text-[11px] text-gray-mutedText">{vid.date}</span>
              <h3 className="font-heading font-bold text-base text-navy group-hover:text-green-transform transition">
                {vid.title}
              </h3>
            </div>
          </div>

          <div className="p-6 pt-0">
            <button className="w-full py-2.5 bg-navy/5 border border-navy/10 text-navy font-heading font-bold text-xs uppercase tracking-wider rounded-xl group-hover:bg-navy group-hover:text-white transition">
              Watch Broadcast
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}