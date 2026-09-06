"use client";

import { useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

export default function LessonVideoPlayer({ videoUrl, title }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="relative aspect-video bg-navy rounded-2xl overflow-hidden border border-gray-border shadow-md group">
      {/* Fallback / Mock Video Frame */}
      {videoUrl ? (
        <iframe
          src={videoUrl}
          title={title}
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-navy via-navy/90 to-black text-white p-6 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-green-transform/20 border border-green-transform/40 flex items-center justify-center text-green-transform group-hover:scale-110 transition duration-300">
            <Play className="w-8 h-8 fill-green-transform ml-1" />
          </div>
          <div className="space-y-1">
            <p className="text-xs font-bold text-gold-warm uppercase tracking-wider">
              Interactive Video Lecture
            </p>
            <h4 className="font-heading font-extrabold text-base text-white max-w-md">
              {title}
            </h4>
          </div>
        </div>
      )}
    </div>
  );
}