"use client";

import { useState } from "react";

export default function CallToAction() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "You're in! Welcome to NexaFlow.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <section
      id="cta"
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-1/4 w-64 h-64 rounded-full opacity-10"
          style={{ background: "#0ea5e9", filter: "blur(60px)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-10"
          style={{ background: "#d946ef", filter: "blur(60px)" }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-8"
          style={{ background: "linear-gradient(135deg, #0ea5e9 0%, #d946ef 100%)" }}
        >
          🚀
        </div>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
          Ready to build faster?
        </h2>
        <p className="text-xl text-white/70 mb-10 max-w-xl mx-auto">
          Join 10,000+ developers who ship better products with NexaFlow.
          Start free, no credit card required.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your work email"
            required
            disabled={status === "loading"}
            className="flex-1 px-5 py-4 rounded-xl text-gray-900 text-base font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-70"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-hover px-7 py-4 rounded-xl font-semibold text-white text-base whitespace-nowrap disabled:opacity-70"
            style={{
              background: "linear-gradient(135deg, #0ea5e9 0%, #d946ef 100%)",
              boxShadow: "0 0 20px rgba(14,165,233,0.4)",
            }}
          >
            {status === "loading" ? "Subscribing..." : "Get Early Access"}
          </button>
        </form>

        {/* Status message */}
        {message && (
          <div
            className={`mt-4 px-4 py-3 rounded-lg text-sm font-medium ${
              status === "success"
                ? "bg-green-500/20 text-green-300 border border-green-500/30"
                : "bg-red-500/20 text-red-300 border border-red-500/30"
            }`}
          >
            {message}
          </div>
        )}

        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/50 text-sm">
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            No spam, ever
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Free 14-day trial
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            No credit card required
          </div>
        </div>
      </div>
    </section>
  );
}
