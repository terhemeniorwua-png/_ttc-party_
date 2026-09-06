"use client";

import { UserCircle, ShieldCheck } from "lucide-react";

export default function DashboardHeader({ userName = "Philip" }) {
  return (
    <div className="bg-navy text-white rounded-3xl p-6 sm:p-10 border border-white/10 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-green-transform bg-white/10 px-3 py-1 rounded-full border border-white/10">
            Civic Participant
          </span>
        </div>
        <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
          Welcome back, {userName}.
        </h1>
        <p className="text-xs sm:text-sm text-gray-300">
          Track your civic education progress, registered events, and community contributions.
        </p>
      </div>

      <div className="flex items-center gap-3 bg-white/5 p-3 rounded-2xl border border-white/10 shrink-0">
        <div className="p-2.5 bg-green-transform/20 text-green-transform rounded-xl">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div>
          <span className="text-[10px] font-bold text-gray-400 block uppercase tracking-wider">
            Account Status
          </span>
          <span className="text-xs font-bold text-white">Verified Member</span>
        </div>
      </div>
    </div>
  );
}