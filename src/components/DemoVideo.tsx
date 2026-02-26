"use client";

import { useState } from "react";

export function DemoVideo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="demo" className="py-16 sm:py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">
            See it in <span className="text-amber">action.</span>
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Watch how Pitbull transforms the way GCs manage projects, documents, and compliance.
          </p>
        </div>

        {/* Video Placeholder */}
        <div
          className="relative max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden bg-background border border-surface-light cursor-pointer group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber/10 via-background to-amber/5" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `linear-gradient(rgba(245, 158, 11, 0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* Play Button */}
            <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-amber flex items-center justify-center transition-all duration-300 ${isHovered ? 'scale-110 shadow-lg shadow-amber/30' : ''}`}>
              <svg 
                className="w-8 h-8 sm:w-10 sm:h-10 text-background ml-1" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            
            {/* Coming Soon Label */}
            <div className="mt-6 text-center">
              <span className="inline-flex items-center gap-2 bg-surface rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-amber rounded-full animate-pulse" />
                <span className="text-sm font-medium">Demo video coming soon</span>
              </span>
              <p className="mt-3 text-sm text-muted max-w-md">
                A walkthrough of the AI features in this portfolio demonstration.
              </p>
            </div>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-amber/30 rounded-tl" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-amber/30 rounded-tr" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-amber/30 rounded-bl" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-amber/30 rounded-br" />
        </div>

        {/* Feature Highlights Below Video */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-2xl mb-2">📄</div>
            <h3 className="font-semibold text-sm">AI Document Reading</h3>
            <p className="text-xs text-muted mt-1">Watch AI extract data from specs and submittals</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-semibold text-sm">Real-Time Flagging</h3>
            <p className="text-xs text-muted mt-1">See issues caught before they become problems</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🔗</div>
            <h3 className="font-semibold text-sm">Everything Connected</h3>
            <p className="text-xs text-muted mt-1">One platform where all your data talks</p>
          </div>
        </div>
      </div>
    </section>
  );
}
