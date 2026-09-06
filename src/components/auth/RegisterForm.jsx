"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  UserPlus,
} from "lucide-react";

export default function RegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

    // Validation checks
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!formData.agreeTerms) {
      setError("You must agree to the platform terms to create an account.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      try {
        // Fetch existing users or initialize array
        const existingUsersRaw = localStorage.getItem("ttc_users");
        const existingUsers = existingUsersRaw ? JSON.parse(existingUsersRaw) : [];

        // Check if email is already registered
        const userExists = existingUsers.some(
          (u) => u.email.toLowerCase() === formData.email.toLowerCase()
        );

        if (userExists) {
          setError("An account with this email address already exists.");
          setIsLoading(false);
          return;
        }

        // Construct new user record
        const newUser = {
          id: `usr_${Date.now()}`,
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          password: formData.password, // Stored locally for mock auth
          createdAt: new Date().toISOString(),
        };

        // Persist to ttc_users in localStorage
        const updatedUsers = [...existingUsers, newUser];
        localStorage.setItem("ttc_users", JSON.stringify(updatedUsers));

        // Auto-login active session
        localStorage.setItem(
          "ttc_user_session",
          JSON.stringify({
            email: newUser.email,
            fullName: newUser.fullName,
            loggedInAt: new Date().toISOString(),
          })
        );

        setIsLoading(false);
        router.push("/civic-academy");
      } catch (err) {
        console.error("Storage error:", err);
        setError("An unexpected error occurred. Please try again.");
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="w-full max-w-md bg-white border border-gray-border rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
      {/* Header */}
      <div className="space-y-2 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-navy/5 text-navy rounded-2xl mb-1">
          <UserPlus className="w-6 h-6 text-green-transform" />
        </div>
        <h1 className="font-heading font-extrabold text-2xl text-navy">
          Create Account
        </h1>
        <p className="text-xs text-gray-mutedText">
          Join the Civic Academy to unlock learning modules and track progress.
        </p>
      </div>

      {error && (
        <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 text-center font-medium">
          {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label
            htmlFor="fullName"
            className="block text-xs font-bold font-heading text-navy uppercase tracking-wider"
          >
            Full Name
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="fullName"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Amina Okafor"
              required
              className="w-full pl-10 pr-4 py-3 bg-gray-soft/50 border border-gray-border rounded-xl text-xs text-navy placeholder:text-gray-400 focus:outline-none focus:border-navy focus:bg-white transition"
            />
          </div>
        </div>

        {/* Email */}
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

        {/* Phone Number */}
        <div className="space-y-1.5">
          <label
            htmlFor="phone"
            className="block text-xs font-bold font-heading text-navy uppercase tracking-wider"
          >
            Phone Number
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+234 800 000 0000"
              required
              className="w-full pl-10 pr-4 py-3 bg-gray-soft/50 border border-gray-border rounded-xl text-xs text-navy placeholder:text-gray-400 focus:outline-none focus:border-navy focus:bg-white transition"
            />
          </div>
        </div>

        {/* Password */}
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

        {/* Confirm Password */}
        <div className="space-y-1.5">
          <label
            htmlFor="confirmPassword"
            className="block text-xs font-bold font-heading text-navy uppercase tracking-wider"
          >
            Confirm Password
          </label>
          <div className="relative">
            <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full pl-10 pr-10 py-3 bg-gray-soft/50 border border-gray-border rounded-xl text-xs text-navy placeholder:text-gray-400 focus:outline-none focus:border-navy focus:bg-white transition"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-navy transition"
            >
              {showConfirmPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Checkbox: Terms Agreement */}
        <div className="pt-1">
          <label className="flex items-start gap-2.5 cursor-pointer text-xs text-gray-600 select-none leading-relaxed">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="w-4 h-4 rounded border-gray-border text-navy focus:ring-navy cursor-pointer mt-0.5 shrink-0"
            />
            <span>
              I agree to the platform{" "}
              <Link
                href="/terms"
                className="text-navy font-bold underline hover:text-green-transform transition"
              >
                terms and privacy policy
              </Link>
              .
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 bg-navy text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-green-transform hover:text-navy transition shadow-md flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
        >
          {isLoading ? (
            <span>Creating account...</span>
          ) : (
            <>
              <span>Create Account</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* Footer Link */}
      <div className="pt-4 border-t border-gray-border text-center text-xs text-gray-mutedText">
        <span>Already have an account? </span>
        <Link
          href="/login"
          className="font-bold text-navy hover:text-green-transform transition"
        >
          Log in
        </Link>
      </div>
    </div>
  );
}