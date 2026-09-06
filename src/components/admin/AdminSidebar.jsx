"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  Calendar,
  HeartHandshake,
  Settings,
  ShieldCheck,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function AdminSidebar({ isCollapsed, onToggle }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Overview", href: "/admin", icon: LayoutDashboard },
    { name: "Courses & Lessons", href: "/admin/courses", icon: BookOpen },
    { name: "User Management", href: "/admin/users", icon: Users },
    { name: "Events & Townhalls", href: "/admin/events", icon: Calendar },
    { name: "Contributions", href: "/admin/contributions", icon: HeartHandshake },
    { name: "Platform Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <aside
      className={`bg-navy text-white min-h-screen border-r border-white/10 transition-all duration-300 flex flex-col justify-between sticky top-0 z-30 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="space-y-6 p-4">
        {/* Brand Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <div className="p-2 bg-green-transform text-navy rounded-xl">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-heading font-extrabold text-base tracking-wide">
                AdminPortal
              </span>
            </div>
          )}
          <button
            onClick={onToggle}
            className="p-2 bg-white/5 hover:bg-white/10 rounded-xl transition text-gray-300 mx-auto"
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-bold font-heading transition ${
                  isActive
                    ? "bg-green-transform text-navy"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
                title={isCollapsed ? item.name : undefined}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {!isCollapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer / Logout */}
      <div className="p-4 border-t border-white/10">
        <button
          onClick={() => {
            localStorage.removeItem("ttc_user_session");
            window.location.href = "/login";
          }}
          className="w-full flex items-center gap-3 px-3.5 py-3 text-xs font-bold text-red-400 hover:bg-red-500/10 rounded-xl transition"
        >
          <LogOut className="w-4 h-4 shrink-0" />
          {!isCollapsed && <span>Sign Out</span>}
        </button>
      </div>
    </aside>
  );
}