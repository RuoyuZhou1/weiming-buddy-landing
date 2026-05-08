import React from "react";

export default function DesignSystem() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-10">
      {/* Three small motif cards — Glassmorphism / Bento Card / 朱砂呼吸光晕 */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {/* Glassmorphism */}
        <div className="card-paper overflow-hidden">
          <div className="flex items-start justify-between px-5 pt-5">
            <div className="font-display text-[18px] font-semibold text-ink">Glassmorphism</div>
            <div className="font-sans text-[11px] text-ink/40 mono">backdrop-filter: blur(16px)</div>
          </div>
          <div className="relative mx-5 mb-5 mt-3 h-[120px] overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-amber via-amber-soft to-cinnabar" />
            <div className="absolute inset-x-6 inset-y-3 rounded-xl bg-white/40 backdrop-blur-md ring-1 ring-white/50 flex items-center justify-center">
              <span className="font-serifcn text-[18px] font-semibold text-white drop-shadow-sm">毛玻璃浮层</span>
            </div>
          </div>
        </div>

        {/* Bento Card */}
        <div className="card-paper overflow-hidden">
          <div className="flex items-start justify-between px-5 pt-5">
            <div className="font-display text-[18px] font-semibold text-ink">Bento Card</div>
            <div className="font-sans text-[11px] text-ink/40 mono">radius 22px · hairline + shadow-paper</div>
          </div>
          <div className="relative mx-5 mb-5 mt-3 h-[120px] rounded-2xl bg-white shadow-paper ring-1 ring-black/[0.04] flex items-center justify-center">
            <span className="font-serifcn text-[16px] text-ink/70">纸质卡片</span>
          </div>
        </div>

        {/* 朱砂呼吸光晕 */}
        <div className="card-paper overflow-hidden">
          <div className="flex items-start justify-between px-5 pt-5">
            <div className="font-display text-[18px] font-semibold text-ink">朱砂呼吸光晕</div>
            <div className="font-sans text-[11px] text-ink/40 mono">animate-breath 2.4s</div>
          </div>
          <div className="relative mx-5 mb-5 mt-3 h-[120px] rounded-xl bg-white/60 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cinnabar/45 blur-xl animate-halo" />
              <div className="relative h-10 w-10 rounded-full bg-cinnabar animate-breath shadow-[0_6px_24px_-4px_rgba(232,90,94,0.6)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Big title */}
      <div className="mt-24 eyebrow">DESIGN SYSTEM</div>
      <h2 className="section-title mt-6">
        新书卷美学<span className="mx-3 text-ink/30">·</span>
        <span className="font-display italic">Neo-Scholar Aesthetic</span>
      </h2>
      <p className="mt-4 max-w-xl font-serifcn text-[15px] text-ink/60">
        像宣纸一样有颗粒、像宋体一样有骨、像未名湖一样有倒影。
      </p>

      {/* Two-up: palette + fonts */}
      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Palette */}
        <div className="card-paper p-6">
          <div className="flex items-center justify-between">
            <div className="font-serifcn text-[18px] font-semibold text-ink">品牌色板</div>
            <div className="font-sans text-[11px] text-ink/50">6 / 6 tokens</div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            <Swatch color="#E85A5E" hex="#E85A5E" name="燕园朱砂" usage="主 CTA · 匹配成功 · 情感强调" dark />
            <Swatch color="#7BB4D9" hex="#7BB4D9" name="未名湖畔" usage="次级导航 · 标签 · 链接" dark />
            <Swatch color="#F4C453" hex="#F4C453" name="银杏琥珀" usage="徽章 · 荣誉高亮 · 校园彩蛋" />
            <Swatch color="#FAF6F0" hex="#FAF6F0" name="宣纸米" usage="全局底色（不用纯白）" />
            <Swatch color="#2B2D33" hex="#2B2D33" name="砚台墨" usage="正文字色（非纯黑）" dark />
            <Swatch color="#EAECEF" hex="#EAECEF" name="晨雾灰" usage="分割线 / Skeleton" />
          </div>
        </div>

        {/* Fonts */}
        <div className="card-paper p-6">
          <div className="flex items-center justify-between">
            <div className="font-serifcn text-[18px] font-semibold text-ink">字体系统</div>
            <div className="font-sans text-[11px] text-ink/50">衬线 + 无衬线 + 彩蛋</div>
          </div>
          <div className="mt-5 space-y-5">
            <FontRow
              label="PLAYFAIR DISPLAY"
              spec="Display Serif · wght 400–900 · 标题与品牌"
              className="font-display text-[36px] font-bold italic text-ink"
            >
              Weiming Buddy 05
            </FontRow>
            <Divider />
            <FontRow
              label="NOTO SERIF SC"
              spec="中文衬线 · 标题 · 书卷气"
              className="font-serifcn text-[30px] font-semibold text-ink"
            >
              未名湖畔<span className="mx-2 text-ink/30">·</span>博雅塔下
            </FontRow>
            <Divider />
            <FontRow
              label="MANROPE"
              spec="Geometric Sans · 正文 · 400/500/600"
              className="font-sans text-[22px] font-medium text-ink"
            >
              The pond never freezes in October.
            </FontRow>
            <Divider />
            <FontRow
              label="MA SHAN ZHENG"
              spec="手写彩蛋 · 用于签名与批注"
              className="font-hand text-[26px] text-cinnabar"
            >
              在勺园独自喝一杯
            </FontRow>
          </div>
        </div>
      </div>

      {/* Three design principles row */}
      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
        <Principle title="模式切换" body="胶囊形 Segmented Control，共享滑块动画；从「寻找搭子」到「一人玩耍」如翻一页书。" />
        <Principle title="五维信誉雷达" body="守约度·边界感·舒适度·合拍度·真诚度；小样本灰显；不具攻击性的人文映射。" />
        <Principle title="沉浸图文" body="宋体衬线标题 · 2em 首行缩进 · 朱砂竖线引用块 · 毛玻璃底栏。" />
      </div>
    </section>
  );
}

function Swatch({
  color,
  hex,
  name,
  usage,
  dark,
}: {
  color: string;
  hex: string;
  name: string;
  usage: string;
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <div
        className="relative h-20 rounded-xl ring-1 ring-black/5"
        style={{ background: color }}
      >
        <span
          className={`absolute bottom-2 left-2 rounded-full px-2 py-0.5 font-sans text-[10px] ${
            dark ? "bg-white/80 text-ink/75" : "bg-ink/10 text-ink/75"
          }`}
        >
          {hex}
        </span>
      </div>
      <div className="mt-2 font-serifcn text-[13px] font-semibold text-ink">{name}</div>
      <div className="mt-0.5 font-sans text-[10px] leading-snug text-ink/50">{usage}</div>
    </div>
  );
}

function FontRow({
  label,
  spec,
  children,
  className,
}: {
  label: string;
  spec: string;
  children: React.ReactNode;
  className: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="font-sans text-[10px] tracking-[0.22em] text-ink/45">{label}</div>
        <div className="font-sans text-[10px] text-ink/40">{spec}</div>
      </div>
      <div className={`mt-1.5 leading-tight ${className}`}>{children}</div>
    </div>
  );
}
function Divider() {
  return <div className="h-px bg-ink/5" />;
}

function Principle({ title, body }: { title: string; body: string }) {
  return (
    <div className="card-paper p-5">
      <div className="font-serifcn text-[15px] font-semibold text-ink">{title}</div>
      <p className="mt-2 font-serifcn text-[12.5px] leading-relaxed text-ink/65">{body}</p>
    </div>
  );
}
