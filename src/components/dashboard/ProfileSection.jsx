"use client";

import { User, Mail, Phone, Shield } from "lucide-react";

export default function ProfileSection({ user }) {
  return (
    <div className="bg-white border border-gray-border rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="border-b border-gray-border pb-4 flex items-center justify-between">
        <h2 className="font-heading font-extrabold text-xl text-navy">
          Profile Overview
        </h2>
        <span className="text-[10px] font-bold uppercase tracking-wider text-navy bg-navy/5 px-2.5 py-1 rounded-full">
          Personal Details
        </span>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 text-xs">
        <div className="p-3.5 bg-gray-soft/50 border border-gray-border rounded-xl space-y-1">
          <span className="text-gray-400 font-bold uppercase text-[10px] flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-navy" /> Full Name
          </span>
          <p className="font-heading font-bold text-navy">{user.fullName}</p>
        </div>

        <div className="p-3.5 bg-gray-soft/50 border border-gray-border rounded-xl space-y-1">
          <span className="text-gray-400 font-bold uppercase text-[10px] flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-navy" /> Email Address
          </span>
          <p className="font-heading font-bold text-navy">{user.email}</p>
        </div>

        <div className="p-3.5 bg-gray-soft/50 border border-gray-border rounded-xl space-y-1">
          <span className="text-gray-400 font-bold uppercase text-[10px] flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-navy" /> Phone Number
          </span>
          <p className="font-heading font-bold text-navy">{user.phone}</p>
        </div>

        <div className="p-3.5 bg-gray-soft/50 border border-gray-border rounded-xl space-y-1">
          <span className="text-gray-400 font-bold uppercase text-[10px] flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-navy" /> Role
          </span>
          <p className="font-heading font-bold text-navy">Civic Learner</p>
        </div>
      </div>
    </div>
  );
}