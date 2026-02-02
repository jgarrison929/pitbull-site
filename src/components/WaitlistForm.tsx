"use client";

import { useState, FormEvent } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      // Placeholder: in production, this would POST to an API
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="mt-8 bg-surface rounded-xl p-8 border border-amber/30">
        <p className="text-lg font-semibold text-amber">You are on the list.</p>
        <p className="mt-2 text-muted">
          We will reach out when early access opens up.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 bg-surface border border-surface-light rounded-lg px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-amber transition-colors"
      />
      <button
        type="submit"
        className="bg-amber hover:bg-amber-dark text-background font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
      >
        Join the Waitlist
      </button>
    </form>
  );
}
