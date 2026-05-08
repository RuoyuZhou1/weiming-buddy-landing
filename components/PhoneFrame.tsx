import React from "react";

type Props = {
  children: React.ReactNode;
  /** Tilt in degrees. Use to stagger the mockup trio. */
  tilt?: number;
  label?: string;
  sublabel?: string;
  /** When true, the page content scrolls inside the phone rather than being clipped. */
  scrollable?: boolean;
};

/**
 * A lightweight iPhone-style frame rendered in pure CSS/SVG — no assets required.
 * Inside, children fill a ~375x812 viewport.
 */
export default function PhoneFrame({ children, tilt = 0, label, sublabel, scrollable = false }: Props) {
  return (
    <div className="relative flex flex-col items-center">
      {label && (
        <div className="mb-2 text-center">
          <div className="font-sans text-[10px] uppercase tracking-[0.38em] text-ink/45">{label}</div>
          {sublabel && <div className="mt-1 font-hand text-[15px] text-cinnabar/85">{sublabel}</div>}
        </div>
      )}

      <div
        className="relative"
        style={{ transform: `rotate(${tilt}deg)`, transformOrigin: "center bottom" }}
      >
        {/* Outer device shell */}
        <div className="relative h-[640px] w-[300px] rounded-[46px] bg-[#111214] p-[6px] shadow-phone sm:h-[720px] sm:w-[340px] sm:rounded-[52px]">
          {/* Inner bezel */}
          <div className="relative h-full w-full overflow-hidden rounded-[40px] bg-[#0a0b0d] sm:rounded-[46px]">
            {/* Screen surface */}
            <div
              className={
                "relative h-full w-full bg-paper " +
                (scrollable ? "overflow-y-auto phone-scroll" : "overflow-hidden")
              }
            >
              {/* Dynamic-island-ish pill */}
              <div className="pointer-events-none absolute left-1/2 top-[10px] z-30 h-[26px] w-[94px] -translate-x-1/2 rounded-full bg-black sm:top-[12px] sm:h-[28px] sm:w-[108px]" />
              {/* Status bar */}
              <div className="relative z-20 flex h-[44px] items-center justify-between px-6 pt-1">
                <span className="font-sans text-[13px] font-semibold tracking-tight text-ink/80">9:41</span>
                <span className="flex items-center gap-1 text-ink/70">
                  <SignalIcon />
                  <WifiIcon />
                  <BatteryIcon />
                </span>
              </div>
              {/* Screen body */}
              <div className="relative">{children}</div>
              {/* Home indicator */}
              <div className="pointer-events-none absolute bottom-2 left-1/2 z-30 h-[4px] w-[112px] -translate-x-1/2 rounded-full bg-black/70" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SignalIcon() {
  return (
    <svg width="16" height="10" viewBox="0 0 16 10" fill="currentColor">
      <rect x="0" y="7" width="2.4" height="3" rx="0.6" />
      <rect x="3.8" y="5" width="2.4" height="5" rx="0.6" />
      <rect x="7.6" y="3" width="2.4" height="7" rx="0.6" />
      <rect x="11.4" y="0" width="2.4" height="10" rx="0.6" />
    </svg>
  );
}
function WifiIcon() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M1 3.4c3.7-3.2 8.3-3.2 12 0" />
      <path d="M3 5.6c2.4-2 5.6-2 8 0" />
      <path d="M5 7.8c1.2-1 2.8-1 4 0" />
      <circle cx="7" cy="9.2" r="0.6" fill="currentColor" />
    </svg>
  );
}
function BatteryIcon() {
  return (
    <svg width="22" height="10" viewBox="0 0 22 10" fill="none">
      <rect x="0.5" y="0.5" width="18" height="9" rx="2.2" stroke="currentColor" strokeOpacity=".5" />
      <rect x="2" y="2" width="13" height="6" rx="1.2" fill="currentColor" />
      <rect x="20" y="3" width="1.6" height="4" rx="0.6" fill="currentColor" opacity=".5" />
    </svg>
  );
}
