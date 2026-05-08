import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "未名搭子 · Weiming Buddy",
  description:
    "像湖面一样通透的校园社区。基于多维信誉分的一键精准匹配，倡导高质量独处的生活方式社区——为 Z 世代北大人打造一个既可以结伴、也可以独行的数字燕园。",
};

// Strategy:
//   1) Mirror (fonts.font.im) handles the heavy CJK fonts + Manrope — works in
//      mainland China on mobile networks where googleapis.com is often blocked.
//   2) Display serif: Playfair Display — classic high-contrast Modern serif,
//      matches the original screenshot. Used UPRIGHT for "Weiming", ITALIC only
//      on "Buddy" (so the elegant cursive appears as a tasteful accent, not
//      everywhere).
//   3) On networks where Google is unreachable, gracefully falls back to
//      Noto Serif SC / system serif via the var stack.
const MIRROR_HREF =
  "https://fonts.font.im/css2?family=Manrope:wght@300;400;500;600;700&family=Noto+Serif+SC:wght@400;500;600;700;900&family=Ma+Shan+Zheng&display=swap";

const DISPLAY_SERIF_HREF =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.font.im" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.font.im" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* CN-friendly mirror: CJK + Manrope */}
        <link rel="stylesheet" href={MIRROR_HREF} />
        {/* Google Fonts — Playfair Display for the display serif headlines */}
        <link rel="stylesheet" href={DISPLAY_SERIF_HREF} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
