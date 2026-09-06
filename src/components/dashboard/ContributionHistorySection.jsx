"use client";

import { HeartHandshake } from "lucide-react";

export default function ContributionHistorySection() {
  const history = [
    {
      id: "cnt-101",
      date: "Aug 15, 2026",
      cause: "Civic Academy Open Learning Fund",
      amount: "₦15,000",
      status: "Completed",
    },
    {
      id: "cnt-102",
      date: "Jun 02, 2026",
      cause: "Youth Voter Registration Drive",
      amount: "₦10,000",
      status: "Completed",
    },
  ];

  return (
    <div className="bg-white border border-gray-border rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="border-b border-gray-border pb-4 flex items-center gap-2">
        <HeartHandshake className="w-5 h-5 text-navy" />
        <h2 className="font-heading font-extrabold text-xl text-navy">
          Contribution History
        </h2>
      </div>

      <div className="space-y-3">
        {history.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-gray-soft/50 border border-gray-border rounded-2xl flex items-center justify-between text-xs"
          >
            <div className="space-y-1">
              <p className="font-heading font-bold text-navy">{item.cause}</p>
              <p className="text-[10px] text-gray-400">{item.date}</p>
            </div>
            <div className="text-right space-y-1">
              <p className="font-heading font-extrabold text-navy text-sm">
                {item.amount}
              </p>
              <span className="text-[10px] font-bold text-green-transform bg-green-transform/10 px-2 py-0.5 rounded-full inline-block">
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}