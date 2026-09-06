"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck } from "lucide-react";

export default function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill in all required fields.");
      return;
    }

    setIsLoading(true);

    // Simulated Authentication
    setTimeout(() => {
      setIsLoading(false);
      
      // Store session token/flag locally
      try {
        const sessionData = {
          email: formData.email,
          loggedInAt: new Date().toISOString(),
        };
        if (formData.rememberMe) {
          localStorage.setItem("ttc_user_session", JSON.stringify(sessionData));
        } else {
          sessionStorage.setItem("ttc_user_session", JSON.stringify(sessionData));
        }
      } catch (err) {
        console.error("Session storage error:", err);
      }

      router.push("/civic-academy");
    }, 1000);
  };

  return (
    <div className="w-full max-w-md bg-white border border-gray-border rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
      {/* Header */}
      <div className="space-y-2 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-navy/5 text-navy rounded-2xl mb-1">
          <ShieldCheck className="w-6 h-6 text-green-transform" />
        </div>
        <h1 className="font-heading font-extrabold text-2xl text-navy">
          Welcome Back
        </h1>
        <p className="text-xs text-gray-mutedText">
          Sign in to access your Civic Academy dashboard and saved progress.
        </p>
      </div>

      {error && (
        <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 text-center font-medium">
          {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Field */}
        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="block text-xs font-bold font-heading text-navy uppercase tracking-wider"
          >
            Email Address
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              required
              className="w-full pl-10 pr-4 py-3 bg-gray-soft/50 border border-gray-border rounded-xl text-xs text-navy placeholder:text-gray-400 focus:outline-none focus:border-navy focus:bg-white transition"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="space-y-1.5">
          <label
            htmlFor="password"
            className="block text-xs font-bold font-heading text-navy uppercase tracking-wider"
          >
            Password
          </label>
          <div className="relative">
            <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full pl-10 pr-10 py-3 bg-gray-soft/50 border border-gray-border rounded-xl text-xs text-navy placeholder:text-gray-400 focus:outline-none focus:border-navy focus:bg-white transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-navy transition"
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Options Row */}
        <div className="flex items-center justify-between text-xs pt-1">
          <label className="flex items-center gap-2 cursor-pointer text-gray-600 select-none">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="w-4 h-4 rounded border-gray-border text-navy focus:ring-navy cursor-pointer"
            />
            <span>Remember me</span>
          </label>

          <Link
            href="/forgot-password"
            className="text-navy font-bold hover:text-green-transform transition"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 bg-navy text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-green-transform hover:text-navy transition shadow-md flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
        >
          {isLoading ? (
            <span>Signing in...</span>
          ) : (
            <>
              <span>Login</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* Footer Link */}
      <div className="pt-4 border-t border-gray-border text-center text-xs text-gray-mutedText">
        <span>Don&apos;t have an account? </span>
        <Link
          href="/register"
          className="font-bold text-navy hover:text-green-transform transition"
        >
          Create Account
        </Link>
      </div>
    </div>
  );
}