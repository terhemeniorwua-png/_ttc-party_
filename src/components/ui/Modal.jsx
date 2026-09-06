"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle } from "lucide-react";

export default function Modal({ isOpen, onClose, title, message, type = "success" }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative border border-gray-border"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-mutedText hover:text-gray-darkText transition"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 mb-4">
              {type === "success" ? (
                <CheckCircle className="w-7 h-7 text-green-transform" />
              ) : (
                <AlertCircle className="w-7 h-7 text-gold-warm" />
              )}
              <h3 className="font-heading font-bold text-xl text-gray-darkText">{title}</h3>
            </div>
            <p className="font-body text-gray-mutedText mb-6">{message}</p>
            <button
              onClick={onClose}
              className="w-full py-2.5 bg-navy text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
            >
              Acknowledge
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}