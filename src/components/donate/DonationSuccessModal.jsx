"use client";

import { CheckCircle2, X, Download, RefreshCw } from "lucide-react";

export default function DonationSuccessModal({ isOpen, onClose, transactionData }) {
  if (!isOpen || !transactionData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-2xl relative animate-in fade-in zoom-in duration-200 border border-gray-border">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-navy rounded-full transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-3">
          <div className="w-16 h-16 bg-green-transform/20 text-green-transform rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="font-heading font-extrabold text-2xl text-navy">
            Demo Contribution Recorded
          </h3>
          <p className="text-xs text-gray-mutedText leading-relaxed">
            This is a simulated transaction for demonstration purposes. No real payment was processed.
          </p>
        </div>

        {/* Transaction Summary Card */}
        <div className="p-4 bg-gray-soft rounded-2xl border border-gray-border space-y-2.5 text-xs">
          <div className="flex justify-between items-center text-navy font-bold pb-2 border-b border-gray-border">
            <span>Amount Simulated:</span>
            <span className="text-base text-green-transform">₦{parseInt(transactionData.amount).toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-gray-mutedText">
            <span>Payment Method:</span>
            <span className="font-semibold text-navy">{transactionData.method}</span>
          </div>
          <div className="flex justify-between text-gray-mutedText">
            <span>Reference ID:</span>
            <span className="font-mono text-navy font-semibold">{transactionData.reference}</span>
          </div>
          <div className="flex justify-between text-gray-mutedText">
            <span>Timestamp:</span>
            <span className="text-navy">{transactionData.date}</span>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={onClose}
            className="w-full py-3.5 bg-navy text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-green-transform hover:text-navy transition shadow-md flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Make Another Demo Contribution</span>
          </button>
        </div>
      </div>
    </div>
  );
}