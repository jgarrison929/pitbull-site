"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-surface-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Pitbull Construction Solutions"
              width={56}
              height={56}
              className="rounded"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-amber leading-tight">Pitbull</span>
              <span className="text-xs text-muted hidden sm:inline leading-tight">
                Construction Solutions
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/features" className="text-sm font-medium bg-amber hover:bg-amber-dark text-background px-4 py-2 rounded-lg transition-colors">Features</Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-6 bg-foreground transition-transform ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-foreground transition-opacity ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-foreground transition-transform ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-surface-light pt-4">
            <div className="flex flex-col gap-4">
              <Link href="/features" className="font-medium bg-amber hover:bg-amber-dark text-background px-4 py-2 rounded-lg transition-colors text-center" onClick={() => setIsOpen(false)}>Features</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
