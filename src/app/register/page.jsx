"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { User, Mail, Lock, Phone, CheckSquare, ArrowRight } from "lucide-react";
import { addItem, setStorageItem } from "@/lib/storage";
import Modal from "@/components/ui/Modal";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDetails, setModalDetails] = useState({ title: "", message: "", type: "success" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setModalDetails({
        title: "Password Mismatch",
        message: "The passwords you entered do not match. Please verify and try again.",
        type: "warning",
      });
      setIsModalOpen(true);
      return;
    }

    if (!formData.agreeTerms) {
      setModalDetails({
        title: "Terms Required",
        message: "You must accept the platform terms and civic commitments to join.",
        type: "warning",
      });
      setIsModalOpen(true);
      return;
    }

    const newUser = {
      id: `usr-${Date.now()}`,
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      role: "Member",
      joinedDate: new Date().toISOString().split("T")[0],
    };

    // Save user to local storage databases
    addItem("ttc_users", newUser);
    setStorageItem("ttc_current_user", newUser);

    setModalDetails({
      title: "Welcome to TTC!",
      message: "Your membership profile has been created successfully. Redirecting to your member dashboard...",
      type: "success",
    });
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    if (modalDetails.type === "success") {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gray-soft py-16 px-6 font-body flex items-center justify-center">
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title={modalDetails.title}
        message={modalDetails.message}
        type={modalDetails.type}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl w-full bg-white rounded-2xl border border-gray-border p-8 shadow-sm"
      >
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-green-transform uppercase tracking-widest">
            Join The Movement
          </span>
          <h1 className="font-heading font-extrabold text-3xl text-navy mt-1">
            Become a TTC Member
          </h1>
          <p className="text-sm text-gray-mutedText mt-2">
            Participate in policy dialogues, complete academy courses, and engage in local civic projects.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-darkText mb-1">Full Name</label>
            <div className="relative">
              <User className="w-4 h-4 text-gray-mutedText absolute left-3 top-3" />
              <input
                type="text"
                required
                placeholder="Philip Okon"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-border rounded-lg text-sm focus:outline-none focus:border-blue-trust"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-darkText mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-gray-mutedText absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  placeholder="philip@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-border rounded-lg text-sm focus:outline-none focus:border-blue-trust"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-darkText mb-1">Phone Number</label>
              <div className="relative">
                <Phone className="w-4 h-4 text-gray-mutedText absolute left-3 top-3" />
                <input
                  type="tel"
                  required
                  placeholder="+234 800 000 0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-border rounded-lg text-sm focus:outline-none focus:border-blue-trust"
                />
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-darkText mb-1">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-gray-mutedText absolute left-3 top-3" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-border rounded-lg text-sm focus:outline-none focus:border-blue-trust"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-darkText mb-1">Confirm Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-gray-mutedText absolute left-3 top-3" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-border rounded-lg text-sm focus:outline-none focus:border-blue-trust"
                />
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2 pt-2">
            <input
              type="checkbox"
              id="terms"
              checked={formData.agreeTerms}
              onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
              className="mt-1 rounded text-green-transform focus:ring-green-transform"
            />
            <label htmlFor="terms" className="text-xs text-gray-mutedText leading-relaxed">
              I agree to the TTC platform guidelines, citizen charter, and privacy commitments.
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-navy text-white font-heading font-bold rounded-lg hover:bg-opacity-90 transition flex items-center justify-center gap-2 mt-4"
          >
            Complete Registration <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <p className="text-center text-xs text-gray-mutedText mt-6">
          Already registered?{" "}
          <Link href="/login" className="text-blue-trust font-semibold hover:underline">
            Sign in here
          </Link>
        </p>
      </motion.div>
    </div>
  );
}