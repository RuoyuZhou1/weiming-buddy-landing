import React from "react";

/**
 * 个人主页 · 信誉画像 + 四维雷达图 + 校园徽章
 */
export default function ProfilePhone() {
  return (
    <div className="flex h-[calc(100%-44px)] flex-col px-4 pt-2">
      {/* Header: big avatar + name + handwritten accent */}
      <div className="flex items-start gap-3">
        <div className="relative h-16 w-16 shrink-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber via-amber-soft to-cinnabar/70" />
          <div className="absolute inset-[2px] flex items-center justify-center rounded-full bg-paper">
            <span className="font-serifcn text-[26px] font-semibold text-ink">沈</span>
          </div>
        </div>
        <div className="flex-1 leading-tight">
          <div className="flex items-baseline gap-2">
            <div className="font-serifcn text-[22px] font-semibold text-ink">沈斯年</div>
            <div className="font-sans text-[10px] text-ink/50">
              中文系<span className="mx-1 text-ink/25">·</span>研二
            </div>
          </div>
          <div className="mt-0.5 font-hand text-[14px] text-cinnabar/75">燕园深处</div>
          <p className="mt-1.5 font-serifcn text-[12px] leading-relaxed text-ink/70">
            读《围城》读到忘了吃饭，找个饭搭子聊钱钟书。
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-3 grid grid-cols-4 rounded-2xl bg-white/80 py-2.5 shadow-chip ring-1 ring-black/[0.03]">
        {[
          { n: "42", l: "搭子" },
          { n: "42", l: "被评" },
          { n: "18", l: "帖子" },
          { n: "42", l: "关注" },
        ].map((x, i) => (
          <div key={i} className="relative flex flex-col items-center">
            <div className="font-display text-[18px] font-semibold text-ink">{x.n}</div>
            <div className="font-sans text-[10px] text-ink/50">{x.l}</div>
            {i < 3 && <div className="absolute right-0 top-2 h-6 w-px bg-ink/8" />}
          </div>
        ))}
      </div>

      {/* Section label */}
      <div className="mt-4 flex items-end justify-between">
        <div>
          <div className="font-serifcn text-[15px] font-semibold text-ink">信誉画像</div>
          <div className="font-sans text-[10px] text-ink/45">TA 在同学中的五维映像</div>
        </div>
      </div>

      {/* Radar chart card */}
      <div className="mt-2 flex-1 overflow-hidden rounded-2xl bg-white/85 p-4 shadow-chip ring-1 ring-black/[0.03]">
        <RadarChart />
        <div className="mt-1 flex items-center justify-center gap-1.5 text-[12px]">
          <StarIcon />
          <span className="font-serifcn font-semibold text-ink">总体 4.78</span>
          <span className="text-ink/25">·</span>
          <span className="font-hand text-[14px] text-amber-deep">极佳</span>
        </div>
        <div className="mt-1 text-center font-sans text-[10px] text-ink/45">
          同学们的首选<span className="mx-1 text-ink/20">·</span>基于 42 位同学的匿名评价
        </div>
      </div>

      {/* Badges */}
      <div className="mt-3 flex items-end justify-between">
        <div>
          <div className="font-serifcn text-[15px] font-semibold text-ink">校园徽章</div>
          <div className="font-sans text-[10px] text-ink/45">每一枚都由行动解锁</div>
        </div>
        <div className="font-sans text-[10px] text-ink/50">
          已得 <span className="font-semibold text-ink">3</span>/6
        </div>
      </div>
      <div className="mb-2 mt-2 grid grid-cols-6 gap-1.5">
        {[
          "from-amber to-amber-deep",
          "from-cinnabar to-cinnabar-ink",
          "from-lake to-lake-deep",
          "from-ink/15 to-ink/25",
          "from-ink/15 to-ink/25",
          "from-ink/15 to-ink/25",
        ].map((g, i) => (
          <div
            key={i}
            className={`relative aspect-square rounded-xl bg-gradient-to-br ${g} shadow-chip ring-1 ring-black/5`}
          >
            {i < 3 && (
              <div className="absolute inset-[3px] rounded-[9px] bg-white/30 mix-blend-overlay" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function RadarChart() {
  // 5-axis radar (clockwise from top): 守约度, 舒适度, 合拍度, 真诚度, 边界感
  // Values out of 5
  const cx = 120,
    cy = 105,
    r = 64;
  const angles = [-90, -18, 54, 126, 198].map((d) => (d * Math.PI) / 180);
  const vertex = (i: number, scale = 1): [number, number] => [
    cx + r * scale * Math.cos(angles[i]),
    cy + r * scale * Math.sin(angles[i]),
  ];
  const ringPoints = (k: number) =>
    angles.map((_, i) => vertex(i, k).join(",")).join(" ");
  const vals = [4.8, 4.7, 4.6, 4.85, 4.9];
  const valuePoints = vals.map((v, i) => vertex(i, v / 5).join(",")).join(" ");
  const dotColors = ["#E85A5E", "#7BB4D9", "#F4C453", "#E85A5E", "#7BB4D9"];

  // Pre-computed offsets for label placement (cos/sin of pentagon angles)
  const cR = 0.951; // cos(18°)
  const sR = 0.309; // sin(18°)
  const cB = 0.588; // cos(54°)
  const sB = 0.809; // sin(54°)

  return (
    <div className="mx-auto w-full">
      <svg viewBox="0 0 240 220" className="mx-auto w-full max-w-[260px]">
        {/* rings */}
        {[1, 0.75, 0.5, 0.25].map((k, i) => (
          <polygon key={i} className="radar-ring" points={ringPoints(k)} />
        ))}
        {/* axes */}
        {angles.map((_, i) => {
          const [x, y] = vertex(i, 1);
          return (
            <line key={i} x1={cx} y1={cy} x2={x} y2={y} className="radar-ring" />
          );
        })}
        {/* fill polygon */}
        <polygon
          points={valuePoints}
          fill="#E85A5E"
          fillOpacity="0.18"
          stroke="#E85A5E"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* vertex dots */}
        {vals.map((v, i) => {
          const [x, y] = vertex(i, v / 5);
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="4.5" fill="#fff" />
              <circle cx={x} cy={y} r="3" fill={dotColors[i]} />
            </g>
          );
        })}
        {/* labels */}
        {/* 守约度 (top) */}
        <text x={cx} y={cy - r - 10} textAnchor="middle" className="fill-ink font-serifcn" fontSize="10" fontWeight="600">
          守约度
        </text>
        <text x={cx} y={cy - r + 1} textAnchor="middle" className="fill-ink/45" fontSize="7">
          极佳
        </text>
        {/* 舒适度 (top-right) */}
        <text x={cx + r * cR + 4} y={cy - r * sR - 4} textAnchor="start" className="fill-ink font-serifcn" fontSize="10" fontWeight="600">
          舒适度
        </text>
        <text x={cx + r * cR + 4} y={cy - r * sR + 7} textAnchor="start" className="fill-ink/45" fontSize="7">
          极佳
        </text>
        {/* 合拍度 (bottom-right) */}
        <text x={cx + r * cB + 4} y={cy + r * sB + 14} textAnchor="middle" className="fill-ink font-serifcn" fontSize="10" fontWeight="600">
          合拍度
        </text>
        <text x={cx + r * cB + 4} y={cy + r * sB + 24} textAnchor="middle" className="fill-ink/45" fontSize="7">
          极佳
        </text>
        {/* 真诚度 (bottom-left) */}
        <text x={cx - r * cB - 4} y={cy + r * sB + 14} textAnchor="middle" className="fill-ink font-serifcn" fontSize="10" fontWeight="600">
          真诚度
        </text>
        <text x={cx - r * cB - 4} y={cy + r * sB + 24} textAnchor="middle" className="fill-ink/45" fontSize="7">
          极佳
        </text>
        {/* 边界感 (top-left) */}
        <text x={cx - r * cR - 4} y={cy - r * sR - 4} textAnchor="end" className="fill-ink font-serifcn" fontSize="10" fontWeight="600">
          边界感
        </text>
        <text x={cx - r * cR - 4} y={cy - r * sR + 7} textAnchor="end" className="fill-ink/45" fontSize="7">
          极佳
        </text>
      </svg>
    </div>
  );
}

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="#F4C453">
      <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
    </svg>
  );
}
