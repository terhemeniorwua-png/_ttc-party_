"use client";

import { useState, useEffect } from "react";
import { Shield, Trash2, Mail, Clock, User, MessageSquare, RefreshCw } from "lucide-react";

export default function ContactAdminViewer({ refreshTrigger }) {
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const loadMessages = () => {
    try {
      const stored = JSON.parse(localStorage.getItem("ttc_messages") || "[]");
      setMessages(stored);
    } catch (e) {
      console.error("Failed to read messages from localStorage", e);
    }
  };

  useEffect(() => {
    loadMessages();
  }, [refreshTrigger]);

  const handleClearAll = () => {
    if (confirm("Are you sure you want to clear all stored messages?")) {
      localStorage.removeItem("ttc_messages");
      setMessages([]);
    }
  };

  return (
    <div className="space-y-4">
      {/* Admin Panel Toggle Toggle Button */}
      <div className="flex justify-between items-center bg-gray-soft border border-gray-border rounded-2xl p-4">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-navy" />
          <span className="text-xs font-bold text-navy">Admin Message Console</span>
          <span className="px-2 py-0.5 bg-navy text-white text-[10px] font-bold rounded-full">
            {messages.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={loadMessages}
            className="p-2 text-navy hover:bg-gray-200 rounded-lg transition"
            title="Refresh Messages"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-3 py-1.5 bg-navy text-white text-xs font-bold rounded-lg hover:bg-green-transform hover:text-navy transition"
          >
            {isOpen ? "Hide Inbox" : "View Inbox"}
          </button>
        </div>
      </div>

      {/* Inbox Panel */}
      {isOpen && (
        <div className="bg-navy text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <div>
              <h3 className="font-heading font-extrabold text-lg text-white flex items-center gap-2">
                <Mail className="w-5 h-5 text-green-transform" />
                <span>Submitted Messages (ttc_messages)</span>
              </h3>
              <p className="text-xs text-gray-300">
                Inquiries submitted through the contact form are stored in local storage below.
              </p>
            </div>

            {messages.length > 0 && (
              <button
                onClick={handleClearAll}
                className="px-3 py-1.5 bg-red-500/20 text-red-300 hover:bg-red-500 hover:text-white border border-red-500/30 rounded-xl text-xs font-bold transition flex items-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear Inbox</span>
              </button>
            )}
          </div>

          {messages.length === 0 ? (
            <div className="text-center py-8 text-gray-400 space-y-2">
              <MessageSquare className="w-8 h-8 mx-auto opacity-50" />
              <p className="text-xs">No messages stored in `ttc_messages` yet.</p>
            </div>
          ) : (
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 scrollbar-none">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3 hover:border-green-transform/50 transition"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-2">
                    <div className="flex items-center gap-2 text-gold-warm text-xs font-bold">
                      <User className="w-3.5 h-3.5" />
                      <span>{msg.fullName}</span>
                      <span className="text-gray-400 font-normal">({msg.email})</span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-gray-400">
                      <Clock className="w-3 h-3 text-green-transform" />
                      <span>{msg.timestamp}</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-bold text-white uppercase tracking-wider">
                      Subject: {msg.subject}
                    </p>
                    <p className="text-xs text-gray-300 leading-relaxed bg-black/20 p-3 rounded-xl border border-white/5 whitespace-pre-wrap">
                      {msg.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}