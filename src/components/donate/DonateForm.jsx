"use client";

import { useState } from "react";
import { CreditCard, Landmark, ArrowRight, ShieldCheck } from "lucide-react";
import DonationSuccessModal from "./DonationSuccessModal";

export default function DonateForm() {
  const PRESET_AMOUNTS = ["1000", "5000", "10000", "25000"];

  const [selectedAmount, setSelectedAmount] = useState("5000");
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Demo Card");
  
  // Step state: 1 = Form & Method selection, 2 = Review step
  const [step, setStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lastTransaction, setLastTransaction] = useState(null);

  const activeAmount = customAmount ? customAmount : selectedAmount;

  const handleNextToReview = (e) => {
    e.preventDefault();
    if (!activeAmount || parseInt(activeAmount) <= 0) return;
    setStep(2);
  };

  const handleSimulateContribution = () => {
    const newTransaction = {
      id: Date.now().toString(),
      amount: activeAmount,
      method: paymentMethod,
      reference: `TTC-DEMO-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleString("en-NG", { dateStyle: "medium", timeStyle: "short" }),
    };

    // Save to local storage under key `ttc_donations`
    try {
      const existing = JSON.parse(localStorage.getItem("ttc_donations") || "[]");
      localStorage.setItem("ttc_donations", JSON.stringify([newTransaction, ...existing]));
    } catch (err) {
      console.error("Failed to save demo donation to localStorage", err);
    }

    setLastTransaction(newTransaction);
    setIsModalOpen(true);
  };

  const handleReset = () => {
    setIsModalOpen(false);
    setStep(1);
  };

  return (
    <div className="max-w-xl mx-auto bg-white border border-gray-border rounded-3xl p-6 sm:p-10 shadow-lg space-y-8">
      {step === 1 ? (
        <form onSubmit={handleNextToReview} className="space-y-8">
          {/* Section 1: Choose Amount */}
          <div className="space-y-3">
            <label className="block font-heading font-bold text-sm text-navy uppercase tracking-wider">
              1. Choose Contribution Amount
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {PRESET_AMOUNTS.map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => {
                    setSelectedAmount(amt);
                    setCustomAmount("");
                  }}
                  className={`py-3 px-2 text-xs font-bold rounded-xl border transition ${
                    selectedAmount === amt && !customAmount
                      ? "bg-navy text-white border-navy shadow-sm"
                      : "bg-gray-soft text-navy border-gray-border hover:bg-gray-200"
                  }`}
                >
                  ₦{parseInt(amt).toLocaleString()}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="pt-2">
              <input
                type="number"
                min="100"
                placeholder="Or enter custom amount in ₦"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount("");
                }}
                className="w-full px-4 py-3 bg-gray-soft border border-gray-border rounded-xl text-xs text-navy focus:outline-none focus:border-navy font-semibold"
              />
            </div>
          </div>

          {/* Section 2: Payment Method */}
          <div className="space-y-3">
            <label className="block font-heading font-bold text-sm text-navy uppercase tracking-wider">
              2. Select Demo Payment Method
            </label>
            <div className="grid sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPaymentMethod("Demo Card")}
                className={`p-4 rounded-2xl border text-left flex items-center gap-3 transition ${
                  paymentMethod === "Demo Card"
                    ? "border-navy bg-navy/5 text-navy font-bold"
                    : "border-gray-border bg-gray-soft text-gray-mutedText hover:border-gray-300"
                }`}
              >
                <CreditCard className={`w-5 h-5 ${paymentMethod === "Demo Card" ? "text-green-transform" : ""}`} />
                <div>
                  <p className="text-xs font-bold">Demo Card</p>
                  <p className="text-[10px] text-gray-mutedText">Simulated Visa/Mastercard</p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod("Demo Bank Transfer")}
                className={`p-4 rounded-2xl border text-left flex items-center gap-3 transition ${
                  paymentMethod === "Demo Bank Transfer"
                    ? "border-navy bg-navy/5 text-navy font-bold"
                    : "border-gray-border bg-gray-soft text-gray-mutedText hover:border-gray-300"
                }`}
              >
                <Landmark className={`w-5 h-5 ${paymentMethod === "Demo Bank Transfer" ? "text-green-transform" : ""}`} />
                <div>
                  <p className="text-xs font-bold">Demo Bank Transfer</p>
                  <p className="text-[10px] text-gray-mutedText">Simulated NIBSS Checkout</p>
                </div>
              </button>
            </div>
          </div>

          {/* Action Trigger */}
          <button
            type="submit"
            disabled={!activeAmount || parseInt(activeAmount) <= 0}
            className="w-full py-4 bg-navy text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-green-transform hover:text-navy transition shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <span>Review Contribution</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      ) : (
        /* Review Screen (Step 2) */
        <div className="space-y-6">
          <div className="border-b border-gray-border pb-4">
            <h3 className="font-heading font-extrabold text-xl text-navy">Review Contribution</h3>
            <p className="text-xs text-gray-mutedText mt-1">
              Please verify your contribution parameters before simulating transaction authorization.
            </p>
          </div>

          <div className="p-5 bg-gray-soft rounded-2xl border border-gray-border space-y-3 text-xs">
            <div className="flex justify-between items-center text-navy">
              <span className="text-gray-mutedText">Target Amount:</span>
              <span className="font-heading font-extrabold text-lg text-green-transform">
                ₦{parseInt(activeAmount).toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between text-navy">
              <span className="text-gray-mutedText">Selected Method:</span>
              <span className="font-bold">{paymentMethod}</span>
            </div>
            <div className="flex justify-between text-navy">
              <span className="text-gray-mutedText">Mode:</span>
              <span className="font-semibold text-blue-trust">Sandbox / Demo Simulation</span>
            </div>
          </div>

          <div className="p-3 bg-gold-warm/10 rounded-xl flex items-center gap-2 text-[11px] text-navy">
            <ShieldCheck className="w-4 h-4 text-gold-warm shrink-0" />
            <span>Clicking below will issue a simulated transaction record to local storage.</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="py-3.5 px-6 border border-gray-border text-navy font-heading font-bold text-xs uppercase rounded-xl hover:bg-gray-soft transition"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleSimulateContribution}
              className="flex-1 py-3.5 bg-green-transform text-navy font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-navy hover:text-white transition shadow-md"
            >
              Simulate Contribution
            </button>
          </div>
        </div>
      )}

      {/* Success Modal */}
      <DonationSuccessModal
        isOpen={isModalOpen}
        onClose={handleReset}
        transactionData={lastTransaction}
      />
    </div>
  );
}