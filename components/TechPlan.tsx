import React from "react";

export default function TechPlan() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-24 lg:px-10">
      <div className="eyebrow">TECHNICAL PLAN</div>
      <h2 className="section-title mt-6">数据层统一，服务层正交</h2>
      <p className="mt-4 max-w-2xl font-serifcn text-[15px] leading-relaxed text-ink/65">
        一张 <span className="font-semibold text-ink">Post</span> 表承载两种内容，两个 Service 完全独立；瀑布流走游标分页，匹配走
        <span className="mx-1 text-ink/85 font-semibold">召回 - 过滤 - 排序</span>三段。
      </p>

      {/* Top row — 01 Post schema + 02 match algorithm */}
      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* 01 schema */}
        <div className="card-paper p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-display text-[14px] font-semibold tracking-tight text-ink/55">01</span>
              <span className="font-serifcn text-[16px] font-semibold text-ink">
                数据库<span className="mx-1.5 text-ink/30">·</span>Post 表
              </span>
            </div>
            <span className="font-sans text-[11px] text-ink/40 mono">backend/schema.sql</span>
          </div>
          <pre className="mono mt-4 overflow-x-auto rounded-xl bg-ink/[0.03] p-4 text-[12px] leading-relaxed text-ink/80 ring-1 ring-ink/5">
{`CREATE TABLE post (
    id               BIGINT PRIMARY KEY,
    user_id          BIGINT NOT NULL,
    post_type        TINYINT NOT NULL,     `}<span className="text-ink/40">{`-- 1 buddy · 2 solo`}</span>{`
    category         VARCHAR(32),
    cover_url        VARCHAR(255),
    location_geo     POINT NOT NULL SRID 4326,
    scheduled_start  DATETIME,             `}<span className="text-ink/40">{`-- buddy`}</span>{`
    min_credit       DECIMAL(3,2),         `}<span className="text-ink/40">{`-- buddy 门槛`}</span>{`
    heat_score       DECIMAL(10,4),        `}<span className="text-ink/40">{`-- solo 排序`}</span>{`
    status           TINYINT,
    INDEX idx_solo_feed
      (post_type, status, heat_score DESC, id DESC),
    INDEX idx_buddy_match
      (post_type, status, scheduled_start),
    SPATIAL INDEX idx_geo (location_geo)
);`}
          </pre>
        </div>

        {/* 02 match algorithm */}
        <div className="card-paper p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-display text-[14px] font-semibold tracking-tight text-ink/55">02</span>
              <span className="font-serifcn text-[16px] font-semibold text-ink">
                一键匹配<span className="mx-1.5 text-ink/30">·</span>三段算法
              </span>
            </div>
            <span className="font-sans text-[11px] text-ink/40 mono">buddy_match.py</span>
          </div>
          <div className="mt-5 space-y-4">
            <Step
              n={1}
              color="bg-lake"
              title="召回"
              body="Redis GEOSEARCH 1.5km 半径 + 时间分片，候选 < 500 条"
            />
            <Step
              n={2}
              color="bg-[#3BA06A]"
              title="过滤"
              body="category / 时间窗交集 / 信誉门当户对 / 黑名单"
            />
            <Step
              n={3}
              color="bg-cinnabar"
              title="排序"
              body={
                <>
                  w1·geo + w2·time + w3·credit + w4·vibe <span className="text-ink/50">→ Top 10</span>
                </>
              }
            />
            <Step
              n={4}
              color="bg-amber"
              title="破冰"
              body="模板槽位生成（< 30ms）· 可升级 LLM A/B"
            />
          </div>
        </div>
      </div>

      {/* 03 — full width */}
      <div className="mt-6 card-paper p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-display text-[14px] font-semibold tracking-tight text-ink/55">03</span>
            <span className="font-serifcn text-[16px] font-semibold text-ink">
              一人玩耍<span className="mx-1.5 text-ink/30">·</span>热度衰减
            </span>
          </div>
          <span className="font-sans text-[11px] text-ink/40 mono">hot_score.py</span>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="font-serifcn text-[13px] leading-relaxed text-ink/70">
              改良 <span className="font-semibold text-ink">Hacker News</span> 模型：收藏权重最高（长期价值），浏览权重最低（防刷），温和衰减（24h ≈ 30%），新帖 2h 内有 1.3× 冷启动加成，10–11 月银杏季对校园彩蛋额外 +15%。
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Redis ZSet", "15min 离线重算", "Kafka 异步微调", "分层抽样打散"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white px-3 py-1 font-sans text-[12px] text-ink/70 shadow-chip ring-1 ring-black/5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Formula card */}
          <div className="rounded-xl bg-gradient-to-br from-white to-amber/10 p-5 shadow-chip ring-1 ring-black/5">
            <div className="font-display text-[13px] font-semibold text-ink/55">heat_score =</div>
            <div className="mt-3 flex flex-col items-center">
              <div className="font-display text-[22px] text-cinnabar">
                (L + 1.5F + 0.2V)<sup className="text-[12px]">0.8</sup>
              </div>
              <div className="my-1 h-px w-52 bg-ink/30" />
              <div className="font-display text-[22px] text-lake-deep">
                (T<sub className="text-[12px]">hrs</sub> + 2)<sup className="text-[12px]">1.6</sup>
              </div>
            </div>
            <div className="mt-3 text-center font-sans text-[11px] text-ink/50">
              L = likes &nbsp; F = favorites &nbsp; V = views &nbsp; T = age(hours)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({
  n,
  color,
  title,
  body,
}: {
  n: number;
  color: string;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${color} font-display text-[13px] font-semibold text-white shadow-chip`}>
        {n}
      </div>
      <div>
        <div className="font-serifcn text-[15px] font-semibold text-ink">{title}</div>
        <div className="mt-0.5 font-sans text-[12.5px] text-ink/60">{body}</div>
      </div>
    </div>
  );
}
