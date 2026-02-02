"use client";

import { useState, FormEvent } from "react";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; already?: boolean }
  | { kind: "error"; message: string };

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus({ kind: "submitting" });

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
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
      className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
    >
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 bg-surface border border-surface-light rounded-lg px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-amber transition-colors"
        disabled={status.kind === "submitting"}
      />
      <button
        type="submit"
        className="bg-amber hover:bg-amber-dark text-background font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap disabled:opacity-60"
        disabled={status.kind === "submitting"}
      >
        {status.kind === "submitting" ? "Joining..." : "Join the Waitlist"}
      </button>

      {status.kind === "error" ? (
        <p className="text-sm text-red-400 sm:basis-full sm:text-center">
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
