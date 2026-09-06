"use client";

import { Bell, CheckCircle2, Info } from "lucide-react";

export default function NotificationsSection() {
  const notifications = [
    {
      id: "notif-1",
      type: "success",
      message: "You completed Lesson 01 of 'Understanding Government'.",
      time: "2 hours ago",
    },
    {
      id: "notif-2",
      type: "info",
      message: "Reminder: Townhall event takes place on Sep 24, 2026.",
      time: "1 day ago",
    },
  ];

  return (
    <div className="bg-white border border-gray-border rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="border-b border-gray-border pb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bell className="w-5 h-5 text-navy" />
          <h2 className="font-heading font-extrabold text-xl text-navy">
            Notifications
          </h2>
        </div>
      </div>

      <div className="space-y-3">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className="p-3.5 bg-gray-soft/50 border border-gray-border rounded-2xl flex items-start gap-3"
          >
            {notif.type === "success" ? (
              <CheckCircle2 className="w-4 h-4 text-green-transform shrink-0 mt-0.5" />
            ) : (
              <Info className="w-4 h-4 text-navy shrink-0 mt-0.5" />
            )}
            <div className="space-y-0.5">
              <p className="text-xs text-navy font-medium leading-relaxed">
                {notif.message}
              </p>
              <span className="text-[10px] text-gray-400 block">
                {notif.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}