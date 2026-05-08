import React from "react";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-screen-2xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:px-12 lg:pt-28 lg:pb-40 xl:px-16">
      {/* Eyebrow */}
      <div className="eyebrow">PEKING UNIVERSITY · CAMPUS SOCIAL</div>

      {/* Display title — Weiming upright + Buddy italic (matches original).
          The italic accent is contained to the second word so the title stays
          modern and readable, with just the right amount of editorial elegance.
          Wraps naturally on mobile; nowrap from sm+ keeps PC on one line.   */}
      <h1 className="display-title mt-7 font-bold leading-[0.95] text-[60px] sm:whitespace-nowrap sm:text-[78px] md:text-[104px] lg:text-[132px] xl:text-[160px] 2xl:text-[180px]">
        <span className="text-cinnabar">W</span>
        <span className="text-ink/90">eiming </span>
        <span className="italic text-lake">Buddy</span>
      </h1>

      {/* Chinese co-title — softer ink (砚台墨 with subtle opacity) */}
      <div className="mt-3 font-serifcn text-[22px] font-semibold leading-tight text-ink/85 sm:text-[30px] md:text-[40px] lg:text-[52px] xl:text-[62px] 2xl:text-[70px]">
        未名搭子<span className="mx-2 text-ink/25 sm:mx-3">·</span>像湖面一样通透的校园社区
      </div>

      {/* Description */}
      <p className="mt-8 max-w-2xl font-serifcn text-[15px] leading-[2] text-ink/70 sm:text-[16.5px] lg:max-w-3xl lg:text-[17px]">
        基于<span className="font-semibold text-ink">多维信誉分</span>的一键精准匹配<span className="mx-1 text-ink/35">·</span>倡导
        <span className="font-semibold text-ink">高质量独处</span>的生活方式社区。为 Z 世代北大人打造一个既可以结伴、也可以独行的数字燕园。
      </p>

      {/* Feature pills */}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Pill bg="bg-amber" textClass="text-ink/90" icon="🍂">
          Neo-Scholar Aesthetic
        </Pill>
        <Pill bg="bg-lake" textClass="text-white" icon="💧">
          5 维信誉评价
        </Pill>
        <Pill bg="bg-white" textClass="text-ink/85" icon="🌙">
          校园彩蛋分类
        </Pill>
        <Pill bg="bg-cinnabar" textClass="text-white" icon="📖">
          一人玩耍社区
        </Pill>
      </div>

      {/* Handwritten tagline — literal em-dashes are part of the cursive text */}
      <div className="mt-14 lg:mt-20">
        <span className="font-hand text-[22px] tracking-[0.04em] text-amber-deep sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px]">
          ——&nbsp;&nbsp;五月的丁香，等一个有趣的人。
        </span>
      </div>
    </section>
  );
}

function Pill({
  children,
  bg,
  textClass,
  icon,
}: {
  children: React.ReactNode;
  bg: string;
  textClass: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full ${bg} px-4 py-2 shadow-chip ring-1 ring-black/5 ${textClass}`}>
      {icon && <span className="flex shrink-0 text-[14px] leading-none">{icon}</span>}
      <span className="font-sans text-[13px] font-semibold tracking-tight">{children}</span>
    </div>
  );
}
