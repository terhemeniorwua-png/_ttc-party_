"use client";

import { Bell, Search, ShieldAlert } from "lucide-react";

export default function AdminHeader({ adminName = "System Admin" }) {
  return (
    <header className="bg-white border-b border-gray-border py-4 px-6 sm:px-8 flex items-center justify-between gap-4 sticky top-0 z-20 shadow-2xs">
      {/* Search Input */}
      <div className="relative w-full max-w-xs sm:max-w-md">
        <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search records, users, courses, transactions..."
          className="w-full pl-10 pr-4 py-2 bg-gray-soft/60 border border-gray-border rounded-xl text-xs text-navy placeholder:text-gray-400 focus:outline-none focus:border-navy focus:bg-white transition"
        />
      </div>

      {/* Status & Profile Actions */}
      <div className="flex items-center gap-4 shrink-0">
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-green-transform/10 border border-green-transform/30 rounded-full text-navy text-[11px] font-bold">
          <ShieldAlert className="w-3.5 h-3.5 text-green-transform" />
          <span>Master Privilege</span>
        </div>

        <button className="p-2.5 bg-gray-soft hover:bg-navy/5 text-navy rounded-xl transition relative">
          <Bell className="w-4 h-4" />
          <span className="w-2 h-2 rounded-full bg-red-500 absolute top-2 right-2" />
        </button>

        <div className="flex items-center gap-3 pl-2 border-l border-gray-border">
          <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center font-bold text-xs font-heading">
            {adminName.charAt(0)}
          </div>
          <div className="hidden md:block space-y-0.5">
            <p className="text-xs font-bold text-navy leading-none">{adminName}</p>
            <span className="text-[10px] text-gray-400 block leading-none">Super Administrator</span>
          </div>
        </div>
      </div>
    </header>
  );
}