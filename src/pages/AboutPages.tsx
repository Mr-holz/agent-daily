import { Button } from "@/components/ui/button"
import { Mail, Bell } from "lucide-react"

export function AboutPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">关于本站</h1>

        <div className="prose prose-invert prose-sm max-w-none space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Agent 日报</strong> 是一个专注 AI Agent 垂直领域的资讯甄选与教学平台。
          </p>

          <p className="text-muted-foreground leading-relaxed">
            我们做的不是 AI 新闻搬运工。每天从海量信息中筛选出 3 条最值得关注的 Agent 动态，
            用人话解读，告诉你 "这对你有什么用"。资讯看完，马上能落地。
          </p>

          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="font-semibold mb-3">栏目体系</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">📰</span>
                <span><strong className="text-foreground">每日日报</strong> — 每天早 8 点，3 条 Agent 头条</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">📖</span>
                <span><strong className="text-foreground">教程中心</strong> — 从零基础到高级搭建，手把手教学</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">🛠️</span>
                <span><strong className="text-foreground">工具库</strong> — 精选 Agent 工具，免费付费都收录</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">📋</span>
                <span><strong className="text-foreground">每周复盘</strong> — 每周深度分析，帮你理清行业脉络</span>
              </li>
            </ul>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            同步在小红书运营 <strong className="text-foreground">@若水的Agent今天更新了</strong>，
            每天发布《Agent 每日 3 条头条》，欢迎关注。
          </p>
        </div>
      </div>
    </div>
  )
}

export function SubscribePage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-lg mx-auto text-center">
        <div className="p-8 rounded-xl bg-card border border-border">
          <Bell className="w-10 h-10 text-primary mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">订阅更新</h1>
          <p className="text-sm text-muted-foreground mb-6">
            订阅后，每天早 8:00 准时推送 Agent 领域最新动态
          </p>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="email"
                placeholder="输入邮箱地址..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-background border border-border text-sm focus:outline-none focus:border-primary/50"
              />
            </div>
            <Button>订阅</Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            邮件订阅功能即将上线，敬请期待
          </p>
        </div>
      </div>
    </div>
  )
}
