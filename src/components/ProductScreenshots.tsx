"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

const screenshots = [
  {
    src: "/screenshots/01-dashboard.png",
    title: "Project Dashboard",
    description: "Getting started wizard, portfolio value, and project overview",
  },
  {
    src: "/screenshots/02-projects.png",
    title: "Project Tracking",
    description: "Status badges, contract values, and project details at a glance",
  },
  {
    src: "/screenshots/05-employees.png",
    title: "Employee Directory",
    description: "Filters, pay rates, classifications, and crew management",
  },
  {
    src: "/screenshots/07-equipment.png",
    title: "Equipment Management",
    description: "Types, rates, serial numbers, and utilization tracking",
  },
  {
    src: "/screenshots/22-reports-labor-cost.png",
    title: "Labor Cost Reports",
    description: "Burden rates, filters, and one-click export",
  },
  {
    src: "/screenshots/26-settings-overtime.png",
    title: "Overtime Rules",
    description: "California labor law compliant overtime configuration",
  },
  {
    src: "/screenshots/29-admin-pay-periods.png",
    title: "Pay Period Management",
    description: "Lock/unlock periods with full audit trail",
  },
  {
    src: "/screenshots/24-reports-legacy-export.png",
    title: "Legacy ERP Export",
    description: "CSV export with step-by-step import instructions",
  },
];

export function ProductScreenshots() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const close = useCallback(() => setSelectedIndex(null), []);

  const goNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % screenshots.length : null
    );
  }, []);

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null
        ? (prev - 1 + screenshots.length) % screenshots.length
        : null
    );
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedIndex, close, goNext, goPrev]);

  return (
    <>
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            See it in <span className="text-amber">action.</span>
          </h2>
          <p className="mt-4 text-lg text-muted max-w-3xl">
            Real screenshots from the platform. No mockups, no Figma renders —
            this is what you actually get.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {screenshots.map((shot, i) => (
              <button
                key={shot.src}
                onClick={() => setSelectedIndex(i)}
                className="group bg-background rounded-xl border border-surface-light overflow-hidden text-left transition-all hover:border-amber/50 hover:shadow-lg hover:shadow-amber/5 focus:outline-none focus:ring-2 focus:ring-amber/50"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={shot.src}
                    alt={shot.title}
                    fill
                    className="object-cover object-top transition-transform group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-sm">{shot.title}</h3>
                  <p className="text-xs text-muted mt-0.5 line-clamp-2">
                    {shot.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={close}
        >
          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl font-light z-10 w-10 h-10 flex items-center justify-center"
            aria-label="Close"
          >
            ×
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl font-light z-10 w-12 h-12 flex items-center justify-center"
            aria-label="Previous"
          >
            ‹
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl font-light z-10 w-12 h-12 flex items-center justify-center"
            aria-label="Next"
          >
            ›
          </button>

          <div
            className="relative w-full max-w-5xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-video">
              <Image
                src={screenshots[selectedIndex].src}
                alt={screenshots[selectedIndex].title}
                fill
                className="object-contain rounded-lg"
                sizes="100vw"
                priority
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-white font-semibold text-lg">
                {screenshots[selectedIndex].title}
              </h3>
              <p className="text-white/60 text-sm mt-1">
                {screenshots[selectedIndex].description}
              </p>
              <p className="text-white/40 text-xs mt-2">
                {selectedIndex + 1} / {screenshots.length} · Click outside or
                press Esc to close · Arrow keys to navigate
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
