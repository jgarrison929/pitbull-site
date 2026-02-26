"use client";

import { useState, FormEvent } from "react";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; already?: boolean }
  | { kind: "error"; message: string };

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [currentTools, setCurrentTools] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus({ kind: "submitting" });

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ 
          email, 
          company, 
          role, 
          companySize, 
          currentTools 
        }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        already?: boolean;
      };

      if (!res.ok) {
        setStatus({
          kind: "error",
          message: data?.error || "Something went wrong. Try again.",
        });
        return;
      }

      setStatus({ kind: "success", already: Boolean(data?.already) });
    } catch {
      setStatus({ kind: "error", message: "Network error. Try again." });
    }
  };

  if (status.kind === "success") {
    return (
      <div className="mt-8 bg-surface rounded-xl p-8 border border-amber/30">
        <p className="text-lg font-semibold text-amber">You are on the list.</p>
        <p className="mt-2 text-muted">
          {status.already
            ? "We already had you. We will reach out when early access opens up."
            : "We will reach out when early access opens up."}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 max-w-lg mx-auto space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-surface border border-surface-light rounded-lg px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-amber transition-colors"
          disabled={status.kind === "submitting"}
        />
        <input
          type="text"
          placeholder="Company name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="bg-surface border border-surface-light rounded-lg px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-amber transition-colors"
          disabled={status.kind === "submitting"}
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Your role/title"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="bg-surface border border-surface-light rounded-lg px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-amber transition-colors"
          disabled={status.kind === "submitting"}
        />
        <select
          value={companySize}
          onChange={(e) => setCompanySize(e.target.value)}
          className="bg-surface border border-surface-light rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-amber transition-colors"
          disabled={status.kind === "submitting"}
        >
          <option value="">Company size</option>
          <option value="1-10">1-10 employees</option>
          <option value="11-50">11-50 employees</option>
          <option value="51-200">51-200 employees</option>
          <option value="200+">200+ employees</option>
        </select>
      </div>

      <input
        type="text"
        placeholder="Current tools (PM software, plan review, Excel, etc.)"
        value={currentTools}
        onChange={(e) => setCurrentTools(e.target.value)}
        className="w-full bg-surface border border-surface-light rounded-lg px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-amber transition-colors"
        disabled={status.kind === "submitting"}
      />

      <button
        type="submit"
        className="w-full bg-amber hover:bg-amber-dark text-background font-semibold px-6 py-3 rounded-lg transition-colors disabled:opacity-60"
        disabled={status.kind === "submitting"}
      >
        {status.kind === "submitting" ? "Joining..." : "Join the Waitlist"}
      </button>

      {status.kind === "error" ? (
        <p className="text-sm text-red-400 text-center">
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
