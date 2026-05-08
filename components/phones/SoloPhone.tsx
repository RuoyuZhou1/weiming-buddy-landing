import React from "react";

/**
 * 一人玩耍详情 · 沉浸阅读：衬线正文 + 2em 首行缩进 + 朱砂竖线引用 + 相似角落
 */
export default function SoloPhone() {
  return (
    <div className="flex h-[calc(100%-44px)] flex-col px-5 pt-2">
      {/* Reading body */}
      <p className="mt-2 font-serifcn text-[13px] leading-[1.95] text-ink/85 [text-indent:2em]">
        这不是我最喜欢的独处地点，但是最容易被人忽视的一个。欢迎你偷偷来，但请不要告诉太多人。
      </p>

      {/* Quote-like separator with cinnabar rule */}
      <div className="relative mt-3 pl-3">
        <span className="absolute left-0 top-1 h-4 w-[2px] rounded-full bg-cinnabar" />
        <div className="font-hand text-[16px] text-ink/80">—— 记于未名湖畔·沈斯年</div>
      </div>

      {/* Section label */}
      <div className="mt-5 flex items-baseline justify-between">
        <div className="font-serifcn text-[15px] font-semibold text-ink">相似角落</div>
        <div className="font-sans text-[10px] text-lake-deep">同一块未名湖 →</div>
      </div>

      {/* Card grid — two columns, uneven like a Pinterest-ish waterfall */}
      <div className="mt-2 grid flex-1 grid-cols-2 gap-2 overflow-hidden">
        {/* Left column */}
        <div className="flex flex-col gap-2">
          <MiniCard
            tag="#未名湖畔"
            imageHeight={100}
            imageBg="bg-gradient-to-br from-lake/30 via-lake-soft/40 to-paper"
            title="博雅塔的倒影在秋天变软"
            author="沈"
            authorName="沈斯年"
            likes="1.1k"
          />
        </div>
        {/* Right column */}
        <div className="flex flex-col gap-2">
          <MiniCard
            tag="#独处书单"
            imageHeight={56}
            imageBg="bg-gradient-to-br from-amber/25 via-amber-soft/30 to-paper"
            title="在勺园独自喝咖啡的角落"
            author="沈"
            authorName="沈斯年"
            likes="842"
          />
          <MiniCard
            tag="#自习角落"
            imageHeight={70}
            imageBg="bg-gradient-to-br from-ink/5 via-mist to-paper"
            title="三教二楼最角落的学习位"
            author="陆"
            authorName="陆时砚"
            avatarGrad="from-lake to-lake-deep"
            likes="618"
          />
        </div>
      </div>

      {/* Bottom action bar */}
      <div className="-mx-5 mt-1 flex items-center justify-between border-t border-ink/5 bg-white/80 px-5 pb-5 pt-3 backdrop-blur-md">
        <div className="flex items-center gap-4 text-ink/70">
          <ActionCount icon={<Heart />} n="842" />
          <ActionCount icon={<Bookmark />} n="267" />
          <ActionCount icon={<Bubble />} n="53" />
        </div>
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-cinnabar text-white shadow-[0_6px_18px_-6px_rgba(232,90,94,0.6)]">
          <Send />
        </button>
      </div>
    </div>
  );
}

function MiniCard({
  tag,
  imageHeight,
  imageBg,
  title,
  author,
  authorName,
  avatarGrad = "from-amber to-cinnabar/70",
  likes,
}: {
  tag: string;
  imageHeight: number;
  imageBg: string;
  title: string;
  author: string;
  authorName: string;
  avatarGrad?: string;
  likes: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl bg-white/90 shadow-chip ring-1 ring-black/[0.03]">
      <div className="px-2 pt-2">
        <span className="inline-block rounded-full bg-ink/5 px-2 py-0.5 font-sans text-[9px] font-medium text-ink/65">
          {tag}
        </span>
      </div>
      <div className={`mx-2 mt-1.5 rounded-lg ${imageBg}`} style={{ height: imageHeight }} />
      <div className="px-2 pb-2 pt-1.5">
        <div className="font-serifcn text-[11.5px] font-semibold leading-snug text-ink">{title}</div>
        <div className="mt-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className={`flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br ${avatarGrad}`}>
              <span className="font-serifcn text-[7px] text-ink">{author}</span>
            </div>
            <span className="font-sans text-[9px] text-ink/55">{authorName}</span>
          </div>
          <div className="flex items-center gap-0.5 text-[9px] text-ink/55">
            <Heart small />
            <span>{likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionCount({ icon, n }: { icon: React.ReactNode; n: string }) {
  return (
    <div className="flex items-center gap-1 text-[12px]">
      {icon}
      <span>{n}</span>
    </div>
  );
}

function Heart({ small }: { small?: boolean }) {
  const s = small ? 10 : 16;
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.5-7 10-7 10z" />
    </svg>
  );
}
function Bookmark() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4h12v17l-6-4-6 4V4z" />
    </svg>
  );
}
function Bubble() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6h16v10H8l-4 4V6z" />
    </svg>
  );
}
function Send() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3l18 9-18 9 4-9-4-9z" />
    </svg>
  );
}
