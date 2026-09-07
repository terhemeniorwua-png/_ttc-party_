"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";

import { ShieldCheck, Eye, EyeOff, Lock, Mail, ArrowRight, AlertCircle } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulated Authentication Logic
    setTimeout(() => {
      if (formData.email === "admin@civic.org" && formData.password === "admin123") {
        // Save session details
        const sessionData = {
          email: formData.email,
          name: "System Administrator",
          role: "Super Admin",
          token: "auth_token_master_123456",
          loginTime: new Date().toISOString(),
        };
        localStorage.setItem("ttc_user_session", JSON.stringify(sessionData));

        // Redirect to Admin Dashboard
        router.push("/admin");
      } else {
        setError("Invalid admin credentials. Please check your email and password.");
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center p-4 relative overflow-hidden font-body">
      {/* Background Animated Image Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=2000&auto=format&fit=crop"
          alt="Admin Background"
          fill
          className="object-cover opacity-20 animate-bg-movement"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 to-navy/70" />
      </div>

      {/* Ambient Floating Lighting */}
      <div className="absolute top-12 right-12 w-72 h-72 rounded-full bg-green-transform/10 blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-12 left-12 w-80 h-80 rounded-full bg-gold-warm/10 blur-3xl pointer-events-none animate-float-reverse" />

      {/* Main Login Card */}
      <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-8 animate-fade-in">
        {/* Card Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center p-3 bg-green-transform text-navy rounded-2xl shadow-lg">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            Admin Portal Access
          </h1>
          <p className="text-xs text-gray-300">
            Sign in with authorized administrative credentials to manage platform records.
          </p>
        </div>

        {/* Demo Credentials Alert Box */}
        <div className="bg-white/10 border border-white/15 rounded-2xl p-3.5 text-[11px] text-gold-warm space-y-1 font-mono">
          <p className="font-bold uppercase tracking-wider">Demo Credentials:</p>
          <p>Email: <span className="text-white">admin@civic.org</span></p>
          <p>Password: <span className="text-white">admin123</span></p>
        </div>

        {/* Error Alert Message */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-3.5 text-xs text-red-400 flex items-center gap-2 animate-fade-in">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-200 uppercase tracking-wider block font-heading">
              Admin Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="admin@civic.org"
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/15 rounded-xl text-xs text-white placeholder:text-gray-400 focus:outline-none focus:border-green-transform focus:bg-white/15 transition"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-200 uppercase tracking-wider block font-heading">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-3 bg-white/10 border border-white/15 rounded-xl text-xs text-white placeholder:text-gray-400 focus:outline-none focus:border-green-transform focus:bg-white/15 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-green-transform text-navy font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-white transition shadow-lg flex items-center justify-center gap-2 group disabled:opacity-50"
          >
            {loading ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <span>Access Dashboard</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}


export default function AdminLayout({ children }) {
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Session Guard Check
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
        <main className="p-6 sm:p-8 flex-1">{children}</main>
      </div>
    </div>
  );
}