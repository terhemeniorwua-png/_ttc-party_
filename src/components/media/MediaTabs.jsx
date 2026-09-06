"use client";

import { useState } from "react";
import { Camera, Video, Newspaper, Download } from "lucide-react";
import PhotosGrid from "./PhotosGrid";
import VideosGrid from "./VideosGrid";
import PressResources from "./PressResources";
import DownloadsGrid from "./DownloadsGrid";

export default function MediaTabs() {
  const [activeTab, setActiveTab] = useState("Photos");

  const TABS = [
    { name: "Photos", icon: Camera, component: PhotosGrid },
    { name: "Videos", icon: Video, component: VideosGrid },
    { name: "Press Resources", icon: Newspaper, component: PressResources },
    { name: "Downloads", icon: Download, component: DownloadsGrid },
  ];

  const ActiveComponent = TABS.find((t) => t.name === activeTab)?.component || PhotosGrid;

  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Navigation Bar */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-none border-b border-gray-border">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.name;
            return (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-heading font-bold text-xs uppercase tracking-wider whitespace-nowrap transition ${
                  isActive
                    ? "bg-navy text-white shadow-md"
                    : "bg-gray-soft text-gray-mutedText hover:bg-gray-200 hover:text-navy"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-green-transform" : ""}`} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab View Container */}
        <div>
          <ActiveComponent />
        </div>
      </div>
    </section>
  );
}