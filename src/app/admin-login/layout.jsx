
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";

export default function AdminLayout({ children }) {
  const router = useRouter();

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const session = localStorage.getItem("ttc_user_session");

    if (!session) {
      router.push("/admin-login");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center text-white text-xs font-heading">
        Verifying Session...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-soft flex font-body">
      <AdminSidebar
        isCollapsed={isCollapsed}
        onToggle={() => setIsCollapsed(!isCollapsed)}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <AdminHeader />

        <main className="p-6 sm:p-8 flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
