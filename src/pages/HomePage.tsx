import { SITE_CONFIG } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { sampleDailyPosts, sampleTutorials, sampleTools, sampleWeeklyReports } from "@/data/sample"
import { ArrowRight, Newspaper, BookOpen, Wrench, BarChart3, Sparkles, ExternalLink } from "lucide-react"

const stats = [
  { label: "累计发布", value: "120+", icon: Newspaper },
  { label: "教程数量", value: "30+", icon: BookOpen },
  { label: "收录工具", value: "50+", icon: Wrench },
  { label: "周报期数", value: "18", icon: BarChart3 },
]

const features = [
  {
    icon: Newspaper,
    title: "每日资讯",
    description: "每天精选 3 条 AI Agent 重磅新闻，附人话解读，不贩卖焦虑。",
  },
  {
    icon: BookOpen,
    title: "上手教程",
    description: "从零基础到高级技巧，手把手教你使用和搭建 AI Agent。",
  },
  {
    icon: Wrench,
    title: "工具合集",
    description: "精选实用 AI Agent 工具，免费与付费工具一网打尽。",
  },
  {
    icon: BarChart3,
    title: "每周复盘",
    description: "每周深度复盘 Agent 领域大事件，帮你理清行业脉络。",
  },
]

export function HomePage() {
  const latestDaily = sampleDailyPosts[0]
  const latestWeekly = sampleWeeklyReports[0]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="container relative py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-medium">
              <Sparkles className="w-3 h-3" />
              AI Agent 垂直资讯平台
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
              {SITE_CONFIG.tagline.split("，").map((part, i) => (
                <span key={i}>
                  {i === 0 ? part : <span className="text-primary glow-text">{part}</span>}
                  {i === 0 && <span className="block mt-1">，</span>}
                </span>
              ))}
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              {SITE_CONFIG.description}
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link to="/daily">
                <Button size="lg">
                  浏览最新日报
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/tutorials">
                <Button variant="secondary" size="lg">
                  从零开始学习
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-border">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="text-center space-y-1">
                  <div className="flex justify-center mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold font-mono">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Latest Daily */}
      <section className="container py-16 md:py-24">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-bold">今日日报</h2>
            <p className="text-sm text-muted-foreground mt-1">
              {latestDaily.date} · 每天 3 分钟掌握 Agent 动态
            </p>
          </div>
          <Link to="/daily">
            <Button variant="ghost" size="sm">
              查看全部 <ArrowRight className="w-3 h-3 ml-1" />
            </Button>
          </Link>
        </div>

        <Link
          to={`/daily/${latestDaily.id}`}
          className="block group"
        >
          <div className="relative p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
            <div className="glow-card" />
            <div className="space-y-6">
              {[1, 2, 3].map((i) => {
                const headline = latestDaily[`headline${i}` as keyof typeof latestDaily] as string
                const summary = latestDaily[`summary${i}` as keyof typeof latestDaily] as string
                return (
                  <div key={i} className="space-y-2">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-0.5 flex h-6 w-6 items-center justify-center rounded-md bg-primary/10 text-xs font-bold text-primary">
                        {i}
                      </span>
                      <div>
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {headline}
                          <ExternalLink className="w-3 h-3 inline ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                          {summary}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="flex items-center gap-2 mt-6 pt-4 border-t border-border">
              {latestDaily.tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-card/50">
        <div className="container py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold">栏目导航</h2>
            <p className="text-sm text-muted-foreground mt-2">
              资讯 + 教学，两条腿走路
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tutorials + Tools Grid */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Latest Tutorials */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">最新教程</h2>
              <Link to="/tutorials">
                <Button variant="ghost" size="sm">
                  全部 <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </Link>
            </div>
            <div className="space-y-3">
              {sampleTutorials.slice(0, 3).map((tutorial) => (
                <Link
                  key={tutorial.id}
                  to={`/tutorials/${tutorial.id}`}
                  className="block p-4 rounded-lg bg-card border border-border hover:border-primary/20 transition-all duration-200 group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1 min-w-0">
                      <h3 className="font-medium text-sm group-hover:text-primary transition-colors truncate">
                        {tutorial.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {tutorial.description}
                      </p>
                    </div>
                    <span className="shrink-0 text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                      {tutorial.duration}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Latest Weekly */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">本周复盘</h2>
              <Link to="/weekly">
                <Button variant="ghost" size="sm">
                  全部 <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </Link>
            </div>
            <Link
              to={`/weekly/${latestWeekly.id}`}
              className="block p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-all duration-200 group"
            >
              <div className="text-xs text-primary font-mono mb-2">{latestWeekly.week}</div>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {latestWeekly.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {latestWeekly.summary}
              </p>
              <div className="mt-4 space-y-1.5">
                {latestWeekly.highlights.slice(0, 3).map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="border-t border-border bg-card/30">
        <div className="container py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold">精选工具库</h2>
              <p className="text-sm text-muted-foreground mt-1">
                收录好用的 AI Agent 相关工具
              </p>
            </div>
            <Link to="/tools">
              <Button variant="ghost" size="sm">
                全部工具 <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sampleTools.slice(0, 6).map((tool) => (
              <a
                key={tool.id}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg bg-card border border-border hover:border-primary/20 transition-all duration-200 group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                    {tool.name}
                  </h3>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-secondary text-muted-foreground">
                    {tool.category}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {tool.description}
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${tool.free ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'}`}>
                    {tool.free ? "免费" : "付费"}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16 md:py-24">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-background to-primary/5 border border-primary/20 p-8 md:p-12 text-center">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              每天 3 分钟，跟紧 AI Agent 最前沿
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              订阅我们的日报，每天早 8:00 准时推送 Agent 领域最新动态
            </p>
            <Link to="/subscribe">
              <Button size="lg" className="mt-2">
                订阅更新
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
