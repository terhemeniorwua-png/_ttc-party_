"use client";

import { Download, ShieldCheck, FolderArchive, Image as ImageIcon } from "lucide-react";

const KITS = [
  {
    title: "Official TTC Brand Assets & Vector Logos",
    description: "Includes high-resolution PNGs, SVGs, color palette guidelines, and typography spec sheets.",
    size: "14.2 MB",
    format: "ZIP Archive",
    icon: FolderArchive,
  },
  {
    title: "Grassroots Organizing Flyer Templates",
    description: "Print-ready PDF templates for ward meetings, voter registration, and community drives.",
    size: "8.5 MB",
    format: "PDF / AI",
    icon: ImageIcon,
  },
  {
    title: "Executive Spokesperson Profile Kit",
    description: "Approved leadership bios, official headshots, and speaker introductory notes.",
    size: "5.1 MB",
    format: "ZIP Archive",
    icon: ShieldCheck,
  },
];

export default function DownloadsGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {KITS.map((kit, idx) => {
        const Icon = kit.icon;
        return (
          <div
            key={idx}
            className="bg-white border border-gray-border rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-green-transform/10 text-green-transform rounded-2xl flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-heading font-bold text-lg text-navy group-hover:text-green-transform transition">
                  {kit.title}
                </h3>
                <p className="text-xs text-gray-mutedText leading-relaxed">
                  {kit.description}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-border space-y-4">
              <div className="flex justify-between text-[11px] text-gray-mutedText">
                <span>File Format: <strong className="text-navy">{kit.format}</strong></span>
                <span>Size: <strong className="text-navy">{kit.size}</strong></span>
              </div>

              <button className="w-full py-3 bg-navy text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-green-transform hover:text-navy transition shadow-sm flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                <span>Download Kit</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}