"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getStorageItem } from "@/lib/storage";

export default function PoliciesPage() {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    setPolicies(getStorageItem("ttc_policies"));

    const handleStorageChange = () => {
      setPolicies(getStorageItem("ttc_policies"));
    };
    window.addEventListener("storage_updated", handleStorageChange);
    return () => window.removeEventListener("storage_updated", handleStorageChange);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-12 px-6 font-body">
      <h1 className="font-heading font-extrabold text-4xl text-navy mb-4">Policy Frameworks</h1>
      <p className="text-gray-mutedText mb-8">
        Transparent, actionable policy documents designed for civic development.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {policies.map((policy) => (
          <div key={policy.id} className="p-6 border border-gray-border rounded-xl shadow-sm hover:shadow-md transition">
            <span className="text-xs font-bold text-blue-trust uppercase">{policy.category}</span>
            <h3 className="font-heading font-bold text-xl text-navy mt-2 mb-3">{policy.title}</h3>
            <p className="text-sm text-gray-mutedText mb-4">{policy.summary}</p>
            <Link 
              href={`/policies/${policy.slug}`}
              className="text-sm font-semibold text-green-transform hover:underline inline-flex items-center gap-1"
            >
              Read Policy →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}