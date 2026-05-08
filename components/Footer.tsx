import React from "react";

export default function Footer() {
  return (
    <footer className="relative mt-8 border-t border-ink/10 bg-ink text-paper/80">
      {/* ginkgo-amber hairline */}
      <div className="h-[2px] w-full bg-gradient-to-r from-amber via-cinnabar to-lake opacity-80" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 py-8 sm:grid-cols-[auto_1fr_auto] sm:items-center lg:px-10">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber via-amber-soft to-cinnabar/80" />
            <div className="absolute inset-[2px] flex items-center justify-center rounded-full bg-ink">
              <span className="font-serifcn text-[14px] font-semibold text-paper">未</span>
            </div>
          </div>
          <div className="leading-tight">
            <div className="font-serifcn text-[15px] font-semibold text-paper">
              未名搭子<span className="mx-2 text-paper/35">·</span>
              <span className="font-display">Weiming Buddy</span>
            </div>
            <div className="font-sans text-[11px] text-paper/50">
              Peking University Campus Social<span className="mx-1.5 text-paper/25">·</span>Concept Prototype
            </div>
          </div>
        </div>
        <div className="hidden sm:block" />
        <div className="flex items-center gap-4 text-[11px] text-paper/50">
          <span>© 2026 Concept Draft</span>
          <span className="h-3 w-px bg-paper/20" />
          <span>Built with Next.js 14 · Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
