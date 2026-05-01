/**
 * ============================================
 * 🌐 Site Configuration
 * ============================================
 * Edit this file to customize your site.
 * 
 * 🔧 DOMAIN: Replace the placeholder below
 *    once you have your real domain.
 * ============================================
 */

export const SITE_CONFIG = {
  /** Site domain — replace with your real domain when ready */
  domain: "agent-daily.example.com",

  /** Site name & branding */
  name: "Agent 日报",
  tagline: "每天 3 分钟，掌握 AI Agent 最新动态",
  description: "AI Agent 垂直领域资讯与教学平台 — 每日精选 Agent 前沿新闻，从零基础到上手搭建，带你读懂 AI Agent 的一切。",

  /** Social links */
  social: {
    xiaohongshu: "https://www.xiaohongshu.com/user/...",
    twitter: "https://twitter.com/...",
    github: "https://github.com/...",
    rss: "/rss.xml",
  },

  /** Navigation */
  nav: [
    { label: "首页", href: "/" },
    { label: "日报", href: "/daily" },
    { label: "教程", href: "/tutorials" },
    { label: "工具库", href: "/tools" },
    { label: "周报", href: "/weekly" },
    { label: "关于", href: "/about" },
  ],

  /** Footer links */
  footer: {
    description: "专注 AI Agent 领域的资讯甄选与落地教学。每天 3 条头条，带你读懂 Agent 前沿动态。",
    sections: [
      {
        title: "内容",
        links: [
          { label: "每日日报", href: "/daily" },
          { label: "教程中心", href: "/tutorials" },
          { label: "工具推荐", href: "/tools" },
          { label: "每周复盘", href: "/weekly" },
        ],
      },
      {
        title: "关于",
        links: [
          { label: "关于本站", href: "/about" },
          { label: "订阅更新", href: "/subscribe" },
          { label: "RSS", href: "/rss.xml" },
        ],
      },
    ],
  },
} as const;

/** Theme colors — CSS variable values */
export const THEME = {
  /** Dark theme (primary) — warm orange/gold tone */
  dark: {
    bg: "#0f0b06",
    bgSecondary: "#1a140e",
    bgTertiary: "#241c13",
    textPrimary: "#f5efe8",
    textSecondary: "#a09080",
    accent: "#f4a261",
    accentMuted: "#5a3d20",
    border: "#2a2218",
  },
  /** Light theme (optional) */
  light: {
    bg: "#ffffff",
    bgSecondary: "#f5f5f5",
    bgTertiary: "#eaeaea",
    textPrimary: "#111111",
    textSecondary: "#666666",
    accent: "#0066cc",
    accentMuted: "#99ccff",
    border: "#dddddd",
  },
} as const;
