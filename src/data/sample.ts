export interface DailyPost {
  id: string
  date: string // YYYY-MM-DD
  title: string
  headline1: string
  summary1: string
  headline2: string
  summary2: string
  headline3: string
  summary3: string
  tags: string[]
  link?: string
}

export interface Tutorial {
  id: string
  title: string
  description: string
  level: "beginner" | "intermediate" | "advanced"
  duration: string // e.g. "10 min"
  category: string
  date: string
  tags: string[]
}

export interface Tool {
  id: string
  name: string
  description: string
  url: string
  category: string
  free: boolean
  tags: string[]
}

export interface WeeklyReport {
  id: string
  week: string // e.g. "W18 2026"
  title: string
  summary: string
  highlights: string[]
  date: string
}

// ============= Sample Data =============

export const sampleDailyPosts: DailyPost[] = [
  {
    id: "daily-2026-05-01",
    date: "2026-05-01",
    title: "Agent 每日 3 条头条 | 5月1日",
    headline1: "OpenAI 发布 Agent SDK 2.0，支持多 Agent 协作",
    summary1: "OpenAI 正式推出 Agent SDK 2.0 版本，新增多 Agent 协作编排能力，支持角色分工、任务委派和上下文共享，大幅降低复杂工作流的开发门槛。",
    headline2: "Anthropic 开源 Claude Code 的 MCP 服务器工具包",
    summary2: "Anthropic 发布开源 MCP 服务器工具包，开发者可快速构建自定义工具服务器，与 Claude Desktop 和 Claude Code 无缝集成。",
    headline3: "Google 推出 Gemini Agent 市场，第三方 Agent 可交易",
    summary3: "Google 发布 Gemini Agent Marketplace，开发者可上架基于 Gemini 构建的 Agent 应用，企业用户可直接购买部署。",
    tags: ["OpenAI", "Anthropic", "Google", "Agent SDK", "MCP"],
  },
  {
    id: "daily-2026-04-30",
    date: "2026-04-30",
    title: "Agent 每日 3 条头条 | 4月30日",
    headline1: "微软 Copilot Studio 接入 50+ 第三方 Agent 平台",
    summary1: "微软宣布 Copilot Studio 与 50+ 第三方 Agent 平台深度集成，用户可在 Copilot 中直接调用 Salesforce、Zendesk 等平台的 AI Agent。",
    headline2: "Meta 发布 LLaMA Agent 3.0，性能提升 40%",
    summary2: "Meta 开源 LLaMA Agent 3.0，在多 Agent 协作基准测试中性能提升 40%，支持更长的上下文窗口和工具调用。",
    headline3: "Hugging Face 推出 Agent Hub，聚合 1000+ 开源 Agent",
    summary3: "Hugging Face 新上线 Agent Hub 板块，聚合超过 1000 个开源 AI Agent，支持一键部署和社区协作。",
    tags: ["微软", "Meta", "Hugging Face", "开源", "Copilot"],
  },
  {
    id: "daily-2026-04-29",
    date: "2026-04-29",
    title: "Agent 每日 3 条头条 | 4月29日",
    headline1: "阿里云发布百炼 AgentStudio，零代码搭建 Agent",
    summary1: "阿里云百炼平台推出 AgentStudio，支持零代码可视化搭建 AI Agent，内置30+预置工具模板，面向企业级场景。",
    headline2: "Claude Code 新增自主编程模式，可连续运行数小时",
    summary2: "Claude Code 推出自主编程模式（Autonomous Mode），Agent 可连续数小时独立完成代码编写、调试和部署，开发者只需审核成果。",
    headline3: "Runway 发布 Gen-4 Agent，AI 视频编辑进入 Agent 时代",
    summary3: "Runway 推出 Gen-4 Agent，用户可以用自然语言指令让 Agent 自动完成视频剪辑、特效添加和风格迁移。",
    tags: ["阿里云", "Claude", "Runway", "零代码", "视频AI"],
  },
]

export const sampleTutorials: Tutorial[] = [
  {
    id: "tut-001",
    title: "什么是 AI Agent？一个例子让你秒懂",
    description: "用最通俗的语言和生活中的例子，解释 AI Agent 是什么、能做什么，零基础也能看懂。",
    level: "beginner",
    duration: "5 min",
    category: "入门概念",
    date: "2026-04-28",
    tags: ["入门", "概念", "科普"],
  },
  {
    id: "tut-002",
    title: "5 步搭建你的第一个 AI Agent（无需写代码）",
    description: "使用 Coze / Dify 等平台，零代码搭建一个能自动搜集信息并生成报告的 AI Agent。",
    level: "beginner",
    duration: "15 min",
    category: "上手实践",
    date: "2026-04-25",
    tags: ["零代码", "Coze", "Dify", "实践"],
  },
  {
    id: "tut-003",
    title: "Agent 提示词工程：让 AI 更懂你的指令",
    description: "学会给 AI Agent 写高质量的提示词，包括角色设定、任务分解、输出格式化等技巧。",
    level: "intermediate",
    duration: "20 min",
    category: "进阶技巧",
    date: "2026-04-22",
    tags: ["提示词", "Prompt", "技巧"],
  },
  {
    id: "tut-004",
    title: "用 Claude Code + MCP 搭建个人编程助手",
    description: "手把手教你配置 Claude Code 和 MCP 服务器，打造一个专属的 AI 编程助手。",
    level: "intermediate",
    duration: "30 min",
    category: "工具配置",
    date: "2026-04-20",
    tags: ["Claude Code", "MCP", "编程助手"],
  },
  {
    id: "tut-005",
    title: "多 Agent 协作：让多个 AI 分工合作完成复杂任务",
    description: "深入讲解多 Agent 架构设计，包括任务分解、Agent 通信、结果聚合等核心概念。",
    level: "advanced",
    duration: "25 min",
    category: "架构设计",
    date: "2026-04-18",
    tags: ["多Agent", "架构", "协作"],
  },
]

export const sampleTools: Tool[] = [
  {
    id: "tool-001",
    name: "Claude Code",
    description: "Anthropic 出品的终端 AI 编程助手，支持自主编程模式和 MCP 工具集成。",
    url: "https://claude.ai/code",
    category: "编程助手",
    free: false,
    tags: ["编程", "终端", "MCP"],
  },
  {
    id: "tool-002",
    name: "Coze",
    description: "字节跳动出品的 AI Agent 搭建平台，零代码可视化编排，内置丰富插件。",
    url: "https://www.coze.com",
    category: "Agent 搭建",
    free: true,
    tags: ["零代码", "可视化", "插件"],
  },
  {
    id: "tool-003",
    name: "Dify",
    description: "开源 LLM 应用开发平台，支持 Agent 工作流编排、RAG 管道和模型管理。",
    url: "https://dify.ai",
    category: "Agent 搭建",
    free: true,
    tags: ["开源", "工作流", "RAG"],
  },
  {
    id: "tool-004",
    name: "OpenAI Agent SDK",
    description: "OpenAI 官方 Agent 开发套件，支持多 Agent 协作和工具调用。",
    url: "https://github.com/openai/openai-agents-python",
    category: "开发工具",
    free: true,
    tags: ["SDK", "Python", "多Agent"],
  },
  {
    id: "tool-005",
    name: "MCP 服务器工具包",
    description: "Anthropic 开源的 MCP 服务器构建工具，快速创建自定义工具集成。",
    url: "https://github.com/anthropics/mcp-server",
    category: "开发工具",
    free: true,
    tags: ["MCP", "开源", "集成"],
  },
  {
    id: "tool-006",
    name: "百炼 AgentStudio",
    description: "阿里云推出的一站式 Agent 开发平台，支持零代码搭建和企业级部署。",
    url: "https://bailian.console.aliyun.com",
    category: "Agent 搭建",
    free: true,
    tags: ["阿里云", "企业级", "零代码"],
  },
]

export const sampleWeeklyReports: WeeklyReport[] = [
  {
    id: "weekly-2026-w18",
    week: "W18 2026",
    title: "本周 Agent 大事件复盘 | 4月第4周",
    summary: "本周 AI Agent 领域迎来多项重磅更新：OpenAI 发布 Agent SDK 2.0、Anthropic 开源 MCP 工具包、Google 推出 Agent 市场，三大巨头同时发力 Agent 生态。",
    highlights: [
      "OpenAI Agent SDK 2.0 支持多 Agent 协作，标志 Agent 开发进入新阶段",
      "Anthropic 开源 MCP 工具包，降低开发者构建自定义工具的门槛",
      "Google Agent Marketplace 上线，Agent 应用走向平台化交易",
      "微软 Copilot Studio 集成 50+ 第三方 Agent 平台",
      "Meta 开源 LLaMA Agent 3.0，性能大幅提升",
    ],
    date: "2026-04-28",
  },
  {
    id: "weekly-2026-w17",
    week: "W17 2026",
    title: "本周 Agent 大事件复盘 | 4月第3周",
    summary: "本周焦点：阿里云百炼推出 AgentStudio、Claude Code 自主编程模式上线、Runway Gen-4 Agent 发布，中国企业也在加速布局。",
    highlights: [
      "阿里云百炼 AgentStudio 零代码搭建 Agent，降低企业使用门槛",
      "Claude Code 自主模式上线，AI 编程首次实现全流程自动化",
      "Runway Gen-4 Agent 让视频编辑进入自然语言交互时代",
      "多家创业公司获得 Agent 赛道融资，市场热度持续攀升",
    ],
    date: "2026-04-21",
  },
]
