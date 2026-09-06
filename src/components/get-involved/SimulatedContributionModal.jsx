"use client";

import { useState } from "react";
import { X, Heart, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function SimulatedContributionModal({ isOpen, onClose }) {
  const [amount, setAmount] = useState("5000");
  const [customAmount, setCustomAmount] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const presets = ["1000", "5000", "10000", "25000"];

  const handleSimulate = (e) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-2xl relative animate-in fade-in zoom-in duration-200 border border-gray-border">
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-navy rounded-full transition"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-gold-warm/20 text-gold-warm rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-6 h-6 fill-gold-warm" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-navy">
                Support the Cause
              </h3>
              <p className="text-xs text-gray-mutedText">
                This is a <strong>simulated contribution</strong> interface for testing platform workflow. No real payments are processed.
              </p>
            </div>

            <form onSubmit={handleSimulate} className="space-y-5">
              {/* Preset Amounts */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-navy">Select Amount (₦)</label>
                <div className="grid grid-cols-4 gap-2">
                  {presets.map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => {
                        setAmount(val);
                        setCustomAmount("");
                      }}
                      className={`py-2 text-xs font-bold rounded-xl border transition ${
                        amount === val && !customAmount
                          ? "bg-navy text-white border-navy"
                          : "bg-gray-soft text-navy border-gray-border hover:bg-gray-200"
                      }`}
                    >
                      ₦{parseInt(val).toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount Input */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-navy">Or Custom Amount</label>
                <input
                  type="number"
                  placeholder="Enter custom amount in ₦"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setAmount(e.target.value);
                  }}
                  className="w-full px-4 py-2.5 bg-gray-soft border border-gray-border rounded-xl text-xs text-navy focus:outline-none focus:border-navy"
                />
              </div>

              <div className="p-3 bg-blue-trust/10 rounded-xl flex items-center gap-2 text-[11px] text-navy">
                <ShieldCheck className="w-4 h-4 text-blue-trust shrink-0" />
                <span>Simulated Sandbox Mode: Safe & Instant Validation.</span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-green-transform text-navy font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-navy hover:text-white transition shadow-md"
              >
                Simulate ₦{parseInt(amount || 0).toLocaleString()} Contribution
              </button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-5 py-4">
            <div className="w-16 h-16 bg-green-transform/20 text-green-transform rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="font-heading font-extrabold text-2xl text-navy">
                Simulated Contribution Successful!
              </h3>
              <p className="text-xs text-gray-mutedText leading-relaxed">
                Thank you for testing the financial support flow. Your mock contribution of <strong className="text-navy">₦{parseInt(amount || 0).toLocaleString()}</strong> was processed in sandbox mode.
              </p>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 bg-navy text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-green-transform hover:text-navy transition"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}