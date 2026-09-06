"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, Landmark, ShieldCheck, Heart } from "lucide-react";
import { addItem } from "@/lib/storage";
import Modal from "@/components/ui/Modal";

export default function DonatePage() {
  const [amount, setAmount] = useState("10000");
  const [customAmount, setCustomAmount] = useState("");
  const [method, setMethod] = useState("card");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDetails, setModalDetails] = useState({ title: "", message: "", type: "success" });

  const presetAmounts = ["1000", "5000", "10000", "25000"];

  const handleDonation = (e) => {
    e.preventDefault();
    const finalAmount = customAmount || amount;

    if (!finalAmount || Number(finalAmount) <= 0) {
      setModalDetails({
        title: "Invalid Amount",
        message: "Please select or enter a valid donation amount.",
        type: "warning"
      });
      setIsModalOpen(true);
      return;
    }

    const newDonation = {
      id: `don-${Date.now()}`,
      donorName: fullName || "Anonymous Supporter",
      email: email || "N/A",
      amount: Number(finalAmount),
      method: method === "card" ? "Demo Card" : "Demo Bank Transfer",
      date: new Date().toISOString().split("T")[0],
      status: "Simulated Success"
    };

    addItem("ttc_donations", newDonation);

    setModalDetails({
      title: "Demo Contribution Recorded",
      message: `Thank you for supporting TTC! This is a simulated transaction of ₦${Number(finalAmount).toLocaleString()} for demonstration purposes. No real payment was processed.`,
      type: "success"
    });
    setIsModalOpen(true);

    // Reset form fields
    setCustomAmount("");
    setFullName("");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gray-soft py-12 px-6 font-body">
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalDetails.title}
        message={modalDetails.message}
        type={modalDetails.type}
      />

      <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-border p-8 shadow-sm">
        <div className="text-center mb-8">
          <span className="inline-block p-3 bg-green-transform/10 text-green-transform rounded-full mb-3">
            <Heart className="w-6 h-6" />
          </span>
          <h1 className="font-heading font-extrabold text-3xl text-navy">Support Our Movement</h1>
          <p className="text-gray-mutedText text-sm mt-2">
            Fuel our civic engagement programs, academy workshops, and policy research across Nigeria.
          </p>
        </div>

        <form onSubmit={handleDonation} className="space-y-6">
          {/* Preset Amounts */}
          <div>
            <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
              Select Amount (NGN)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {presetAmounts.map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => {
                    setAmount(amt);
                    setCustomAmount("");
                  }}
                  className={`py-3 rounded-lg font-heading font-bold text-sm border transition ${
                    amount === amt && !customAmount
                      ? "bg-navy text-white border-navy"
                      : "bg-white text-gray-darkText border-gray-border hover:border-navy"
                  }`}
                >
                  ₦{Number(amt).toLocaleString()}
                </button>
              ))}
            </div>
            <input
              type="number"
              placeholder="Or enter custom amount (₦)"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="w-full mt-3 px-4 py-2.5 border border-gray-border rounded-lg text-sm focus:outline-none focus:border-blue-trust"
            />
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
              Payment Method (Simulated)
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setMethod("card")}
                className={`p-4 rounded-xl border flex items-center gap-3 transition ${
                  method === "card" ? "border-blue-trust bg-blue-trust/5 text-blue-trust" : "border-gray-border text-gray-mutedText"
                }`}
              >
                <CreditCard className="w-5 h-5" />
                <span className="font-semibold text-sm">Demo Card</span>
              </button>
              <button
                type="button"
                onClick={() => setMethod("bank")}
                className={`p-4 rounded-xl border flex items-center gap-3 transition ${
                  method === "bank" ? "border-blue-trust bg-blue-trust/5 text-blue-trust" : "border-gray-border text-gray-mutedText"
                }`}
              >
                <Landmark className="w-5 h-5" />
                <span className="font-semibold text-sm">Bank Transfer</span>
              </button>
            </div>
          </div>

          {/* User Details */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-darkText mb-1">Full Name</label>
              <input
                type="text"
                required
                placeholder="Amina Bello"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-border rounded-lg text-sm focus:outline-none focus:border-blue-trust"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-darkText mb-1">Email Address</label>
              <input
                type="email"
                required
                placeholder="amina@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-border rounded-lg text-sm focus:outline-none focus:border-blue-trust"
              />
            </div>
          </div>

          {/* Security Disclaimer Notice */}
          <div className="flex items-center gap-2 p-3 bg-gray-soft rounded-lg text-xs text-gray-mutedText">
            <ShieldCheck className="w-4 h-4 text-green-transform shrink-0" />
            <span>This platform is for demonstration purposes. No live credit card information is processed.</span>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-green-transform text-white font-heading font-bold rounded-lg hover:bg-opacity-90 transition shadow-sm"
          >
            Complete Simulated Contribution
          </button>
        </form>
      </div>
    </div>
  );
}