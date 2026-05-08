"use client";

import React, { useState } from "react";
import PhoneFrame from "./PhoneFrame";
import PrimaryPhone from "./phones/PrimaryPhone";
import ProfilePhone from "./phones/ProfilePhone";
import SoloPhone from "./phones/SoloPhone";

type Tab = "primary" | "profile" | "solo";

const tabs: { id: Tab; label: string }[] = [
  { id: "primary", label: "首页" },
  { id: "profile", label: "个人主页" },
  { id: "solo", label: "一人玩耍详情" },
];

export default function Screens() {
  const [active, setActive] = useState<Tab>("primary");

  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-10">
      <div className="eyebrow">SCREENS</div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="section-title">三大核心页面</h2>
          <p className="mt-3 max-w-xl font-serifcn text-[15px] leading-relaxed text-ink/65">
            首页的双模式切换<span className="mx-1 text-ink/30">·</span>个人主页的信誉画像
            <span className="mx-1 text-ink/30">·</span>一人玩耍的沉浸阅读
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-3">
          <div className="font-sans text-[11px] uppercase tracking-[0.32em] text-ink/40">主屏切换</div>
          <div className="flex gap-1.5 rounded-full bg-white/70 p-1 shadow-chip ring-1 ring-black/[0.04]">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={
                  "rounded-full px-4 py-1.5 font-sans text-[13px] transition-all " +
                  (active === t.id
                    ? "bg-ink text-paper shadow-[0_6px_16px_-8px_rgba(43,45,51,0.5)]"
                    : "text-ink/60 hover:text-ink")
                }
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Phone trio — 3 phones with subtle tilt; the active one scales up */}
      <div className="relative mt-16 flex flex-wrap items-end justify-center gap-10 lg:gap-16">
        <ActiveGate active={active} id="primary" idleTilt={-6}>
          <PhoneFrame
            label="PRIMARY SCREEN"
            sublabel="可交互原型"
            tilt={active === "primary" ? 0 : -6}
            scrollable
          >
            <PrimaryPhone />
          </PhoneFrame>
        </ActiveGate>

        <ActiveGate active={active} id="profile" idleTilt={3}>
          <PhoneFrame
            label="PROFILE"
            sublabel="信誉画像"
            tilt={active === "profile" ? 0 : 3}
            scrollable
          >
            <ProfilePhone />
          </PhoneFrame>
        </ActiveGate>

        <ActiveGate active={active} id="solo" idleTilt={6}>
          <PhoneFrame
            label="SOLO DETAIL"
            sublabel="沉浸阅读"
            tilt={active === "solo" ? 0 : 6}
            scrollable
          >
            <SoloPhone />
          </PhoneFrame>
        </ActiveGate>
      </div>
    </section>
  );
}

/** Scales the active phone up and dims the idle ones. */
function ActiveGate({
  active,
  id,
  children,
}: {
  active: Tab;
  id: Tab;
  idleTilt: number;
  children: React.ReactNode;
}) {
  const isActive = active === id;
  return (
    <div
      className={
        "transition-all duration-500 ease-out " +
        (isActive ? "scale-[1.04] opacity-100" : "scale-[0.92] opacity-70 saturate-[0.85]")
      }
    >
      {children}
    </div>
  );
}
