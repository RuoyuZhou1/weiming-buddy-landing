import React from "react";

/**
 * 首页 · 双模式 Segmented Control + FOR YOU 卡片 + 匹配按钮 + 底部 Tab
 */
export default function PrimaryPhone() {
  return (
    <div className="flex h-[calc(100%-44px)] flex-col px-4 pt-2">
      {/* Top bar: avatar + date + search + bell */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative h-9 w-9">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber via-amber-soft to-cinnabar/70" />
            <div className="absolute inset-[2px] flex items-center justify-center rounded-full bg-paper">
              <span className="font-serifcn text-[15px] font-semibold text-ink">沈</span>
            </div>
          </div>
          <div className="leading-tight">
            <div className="font-sans text-[10px] tracking-wide text-ink/45">十月·北京雾初起</div>
            <div className="font-serifcn text-[15px] font-semibold text-ink">
              早<span className="mx-1 text-ink/30">·</span>沈斯年
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 text-ink/70">
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/70 shadow-chip">
            <SearchIcon />
          </button>
          <button className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/70 shadow-chip">
            <BellIcon />
            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-cinnabar" />
          </button>
        </div>
      </div>

      {/* Segmented Control */}
      <div className="relative mt-3 grid h-10 grid-cols-2 rounded-full bg-white/70 p-1 shadow-chip">
        <span className="absolute left-1 top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-full bg-ink shadow-[0_6px_16px_-6px_rgba(43,45,51,0.5)] transition-all" />
        <button className="relative z-10 flex items-center justify-center gap-1.5 text-[13px] font-semibold text-paper">
          <DotFilledIcon />
          寻找搭子
        </button>
        <button className="relative z-10 flex items-center justify-center gap-1.5 text-[13px] text-ink/55">
          <MoonIcon />
          一人玩耍
        </button>
      </div>

      {/* Row: FOR YOU + hint */}
      <div className="mt-3 flex items-end justify-between">
        <div className="font-sans text-[10px] uppercase tracking-[0.28em] text-ink/45">
          FOR YOU · <span className="text-ink/70">3 张候选</span>
        </div>
        <div className="font-sans text-[10px] text-ink/40">
          左滑跳过<span className="mx-1 text-ink/20">·</span>右滑匹配
        </div>
      </div>

      {/* Main card */}
      <div className="mt-2 flex-1 overflow-hidden rounded-[22px] bg-white/90 shadow-paper ring-1 ring-black/[0.03]">
        {/* Tags row */}
        <div className="flex gap-1.5 px-3 pt-3">
          {[
            { t: "#银杏季", c: "text-amber-deep bg-amber/15" },
            { t: "#胶片", c: "text-ink/70 bg-ink/5" },
            { t: "#下午3点", c: "text-lake-deep bg-lake/15" },
          ].map((x) => (
            <span
              key={x.t}
              className={`rounded-full px-2.5 py-1 font-sans text-[10px] font-medium ${x.c}`}
            >
              {x.t}
            </span>
          ))}
        </div>

        {/* Gradient poster */}
        <div className="relative mx-3 mt-2 h-[150px] overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-amber via-amber-soft to-cinnabar/70" />
          {/* ginkgo leaf silhouette */}
          <svg
            viewBox="0 0 100 100"
            className="absolute left-1/2 top-[26%] h-[60px] w-[60px] -translate-x-1/2 text-white/90"
          >
            <path
              d="M50 78 C 48 70 42 66 38 60 C 32 52 32 40 42 30 C 50 22 54 12 50 6 C 46 12 50 22 58 30 C 68 40 68 52 62 60 C 58 66 52 70 50 78 Z"
              fill="currentColor"
              opacity=".95"
            />
            <path d="M50 78 L 50 94" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          {/* little leaves scattered */}
          <svg className="absolute right-6 bottom-6 h-6 w-6 text-white/80" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 20 c-1-2-3-3-4-5 c-2-3-2-7 1-9 c2-2 3-5 3-6 c0 1 1 4 3 6 c3 2 3 6 1 9 c-1 2-3 3-4 5z" />
          </svg>
          <svg className="absolute left-5 bottom-8 h-4 w-4 text-white/60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 20 c-1-2-3-3-4-5 c-2-3-2-7 1-9 c2-2 3-5 3-6 c0 1 1 4 3 6 c3 2 3 6 1 9 c-1 2-3 3-4 5z" />
          </svg>
        </div>

        {/* Author row */}
        <div className="flex items-center justify-between px-4 pt-3">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-cinnabar/30 to-amber/40 font-serifcn text-[11px] font-semibold text-ink">
              苏
            </div>
            <div className="leading-tight">
              <div className="font-serifcn text-[12.5px] font-semibold text-ink">
                苏晚照 <span className="text-ink/40 font-sans text-[10px] font-normal">艺术学院·2023级</span>
              </div>
              <div className="mt-0.5 flex gap-1">
                <span className="h-1 w-4 rounded-full bg-cinnabar/80" />
                <span className="h-1 w-4 rounded-full bg-amber/90" />
                <span className="h-1 w-4 rounded-full bg-lake/80" />
                <span className="h-1 w-4 rounded-full bg-ink/15" />
              </div>
            </div>
          </div>
          <div className="text-right leading-tight">
            <div className="font-sans text-[9px] uppercase tracking-[0.18em] text-ink/40">信誉</div>
            <div className="font-display text-[20px] font-semibold text-ink">4.67</div>
          </div>
        </div>

        {/* Title + body */}
        <div className="px-4 pt-2">
          <div className="font-serifcn text-[16px] font-semibold leading-snug text-ink">
            银杏西路出片搭子
          </div>
          <p className="mt-1 font-serifcn text-[12px] leading-relaxed text-ink/70">
            明天 15 点未名湖西岸，想拍一组秋天的复古胶片，找个会构图的同学。
          </p>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-2 px-4 pt-2 text-[10px] text-ink/55">
          <span className="inline-flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-cinnabar" />
            明天 15:00<span className="text-ink/30">·</span>约 2h
          </span>
          <span className="mx-1 h-3 w-px bg-ink/10" />
          <span>未名湖西岸<span className="mx-1 text-ink/25">·</span>银杏大道</span>
        </div>

        {/* Match pill */}
        <div className="mx-4 mb-3 mt-2 inline-flex items-center gap-1.5 rounded-full bg-cinnabar/8 px-2.5 py-1 text-[10px] text-cinnabar-ink">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-cinnabar" />
          门当户对<span className="text-cinnabar/70">·</span>信誉差仅 0.08 分
        </div>
      </div>

      {/* Action row */}
      <div className="mt-3 flex items-center justify-center gap-6">
        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-chip ring-1 ring-black/5">
          <CloseIcon />
        </button>
        <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-chip ring-1 ring-black/5">
          <UpIcon />
        </button>
        <button className="flex h-14 w-14 items-center justify-center rounded-full bg-cinnabar text-white shadow-[0_10px_28px_-8px_rgba(232,90,94,0.7)]">
          <HeartFilled />
        </button>
      </div>

      {/* Bottom Tab Bar */}
      <div className="mt-3 flex items-end justify-between border-t border-ink/5 bg-white/80 px-4 pb-5 pt-2 backdrop-blur-md">
        <Tab icon={<HomeIcon />} label="首页" active />
        <Tab icon={<CompassIcon />} label="发现" />
        <Tab icon={<MessageIcon />} label="消息" />
        <Tab icon={<UserIcon />} label="我" />
      </div>
    </div>
  );
}

function Tab({ icon, label, active }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-0.5 text-center">
      <div className={active ? "text-ink" : "text-ink/40"}>{icon}</div>
      <div className={`font-sans text-[10px] ${active ? "text-ink font-semibold" : "text-ink/50"}`}>{label}</div>
      {active && <div className="h-1 w-1 rounded-full bg-cinnabar" />}
    </div>
  );
}

/* Icons */
function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}
function BellIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M6 8a6 6 0 1112 0c0 6 2 7 2 7H4s2-1 2-7z" />
      <path d="M10 20a2 2 0 004 0" />
    </svg>
  );
}
function DotFilledIcon() {
  return <span className="inline-block h-2 w-2 rounded-full bg-paper" />;
}
function MoonIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M20 14A8 8 0 1110 4a6 6 0 0010 10z" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2B2D33" strokeWidth="2" strokeLinecap="round">
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  );
}
function UpIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2B2D33" strokeWidth="2" strokeLinecap="round">
      <path d="M6 14l6-6 6 6" />
    </svg>
  );
}
function HeartFilled() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.5-7 10-7 10z" />
    </svg>
  );
}
function HomeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
      <path d="M4 11l8-7 8 7" />
      <path d="M6 10v9h12v-9" />
    </svg>
  );
}
function CompassIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9l-1 5-5 1 1-5 5-1z" />
    </svg>
  );
}
function MessageIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 6h16v10H8l-4 4V6z" />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c1.5-3.5 4.5-5 7-5s5.5 1.5 7 5" />
    </svg>
  );
}
