# Weiming Buddy · Landing Page

未名搭子 — 像湖面一样通透的校园社区。

落地页基于 **Next.js 14 + TypeScript + Tailwind CSS** 实现，主题为「新书卷美学（Neo-Scholar Aesthetic）」：朱砂红、湖蓝、宣纸米与砚台墨。

## 开发

```bash
npm install
npm run dev
```

打开 http://localhost:3000 查看效果。

## 构建

```bash
npm run build
npm run start
```

## 字体

- 显示字体：Playfair Display（Google Fonts）
- 中文衬线：Noto Serif SC
- 中文无衬线 / 英文正文：Manrope + 系统中文栈
- 手写题字：Ma Shan Zheng

## 结构

- `app/` — App Router 页面与全局样式
- `components/` — Hero / Screens / DesignSystem / TechPlan / Footer 等区块
- `components/phones/` — 三屏手机演示（首页 / 个人主页 / 一人玩耍详情）
