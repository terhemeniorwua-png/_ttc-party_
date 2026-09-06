"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  User, 
  BookOpen, 
  Calendar, 
  Heart, 
  Award, 
  CheckCircle, 
  Clock, 
  ArrowRight 
} from "lucide-react";
import { getStorageItem } from "@/lib/storage";

export default function UserDashboard() {
  const [currentUser, setCurrentUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const [donations, setDonations] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Load current active user
    const user = getStorageItem("ttc_current_user");
    setCurrentUser(user || { name: "Philip Okon", email: "philip@example.com", role: "Member" });

    // Load user activity data
    setCourses(getStorageItem("ttc_courses"));
    setDonations(getStorageItem("ttc_donations"));
    setEvents(getStorageItem("ttc_events"));
  }, []);

  const totalContributions = donations.reduce((sum, d) => sum + (Number(d.amount) || 0), 0);

  return (
    <div className="min-h-screen bg-gray-soft py-10 px-6 font-body">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Welcome Header */}
        <div className="bg-white rounded-2xl p-8 border border-gray-border shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-xs font-bold text-blue-trust uppercase tracking-wider">Member Portal</span>
            <h1 className="font-heading font-extrabold text-3xl text-navy mt-1">
              Welcome back, {currentUser?.name?.split(" ")[0] || "Member"}!
            </h1>
            <p className="text-sm text-gray-mutedText mt-1">
              Track your civic academy milestones, upcoming community events, and civic activity.
            </p>
          </div>
          <span className="px-4 py-1.5 bg-green-transform/10 text-green-transform font-bold text-xs rounded-full border border-green-transform/20">
            {currentUser?.role || "Active Member"}
          </span>
        </div>

        {/* Overview Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-border shadow-sm flex items-center gap-4">
            <span className="p-3 bg-blue-trust/10 text-blue-trust rounded-xl">
              <BookOpen className="w-6 h-6" />
            </span>
            <div>
              <p className="text-xs font-bold text-gray-mutedText uppercase">Enrolled Courses</p>
              <p className="font-heading font-bold text-2xl text-navy">{courses.length}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-border shadow-sm flex items-center gap-4">
            <span className="p-3 bg-green-transform/10 text-green-transform rounded-xl">
              <Calendar className="w-6 h-6" />
            </span>
            <div>
              <p className="text-xs font-bold text-gray-mutedText uppercase">Events Registered</p>
              <p className="font-heading font-bold text-2xl text-navy">{events.length}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-border shadow-sm flex items-center gap-4">
            <span className="p-3 bg-gold-warm/10 text-gold-warm rounded-xl">
              <Heart className="w-6 h-6" />
            </span>
            <div>
              <p className="text-xs font-bold text-gray-mutedText uppercase">Contributions</p>
              <p className="font-heading font-bold text-2xl text-navy">₦{totalContributions.toLocaleString()}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-border shadow-sm flex items-center gap-4">
            <span className="p-3 bg-navy/10 text-navy rounded-xl">
              <Award className="w-6 h-6" />
            </span>
            <div>
              <p className="text-xs font-bold text-gray-mutedText uppercase">Civic Badges</p>
              <p className="font-heading font-bold text-2xl text-navy">2 Badges</p>
            </div>
          </div>
        </div>

        {/* Learning Progress Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white p-6 rounded-2xl border border-gray-border shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-heading font-bold text-xl text-navy">My Academy Progress</h2>
              <Link href="/civic-academy" className="text-xs font-bold text-blue-trust hover:underline">
                View All Courses →
              </Link>
            </div>

            <div className="space-y-4">
              {courses.map((course) => (
                <div key={course.id} className="p-4 border border-gray-border rounded-xl bg-gray-soft/50">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-heading font-bold text-navy text-base">{course.title}</h3>
                    <span className="text-xs font-semibold text-gray-mutedText">{course.progress || 0}% Complete</span>
                  </div>
                  <p className="text-xs text-gray-mutedText mb-3">{course.description}</p>
                  <div className="w-full bg-gray-border h-2 rounded-full overflow-hidden mb-3">
                    <div
                      className="bg-green-transform h-full transition-all duration-300"
                      style={{ width: `${course.progress || 0}%` }}
                    ></div>
                  </div>
                  <Link
                    href={`/civic-academy/${course.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-green-transform hover:underline"
                  >
                    Continue Lesson <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Notifications */}
          <div className="bg-white p-6 rounded-2xl border border-gray-border shadow-sm">
            <h2 className="font-heading font-bold text-xl text-navy mb-4">Platform Announcements</h2>
            <div className="space-y-4 text-xs">
              <div className="p-3 bg-blue-trust/5 rounded-lg border border-blue-trust/10">
                <p className="font-bold text-navy mb-1">New Policy Proposal Published</p>
                <p className="text-gray-mutedText">Review the Education Reforms framework in the policy hub.</p>
                <span className="text-[10px] text-gray-mutedText mt-2 block">2 hours ago</span>
              </div>
              <div className="p-3 bg-gold-warm/10 rounded-lg border border-gold-warm/20">
                <p className="font-bold text-navy mb-1">Upcoming Policy Summit</p>
                <p className="text-gray-mutedText">Abuja Youth Innovation Forum scheduled for October 18, 2026.</p>
                <span className="text-[10px] text-gray-mutedText mt-2 block">1 day ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}