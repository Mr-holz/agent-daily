import { sampleWeeklyReports } from "@/data/sample"
import { Link, useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar } from "lucide-react"

export function WeeklyListPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">每周复盘</h1>
        <p className="text-muted-foreground mt-2">
          每周深度复盘 AI Agent 领域大事件，帮你理清行业脉络
        </p>
      </div>

      <div className="space-y-6">
        {sampleWeeklyReports.map((report) => (
          <Link
            key={report.id}
            to={`/weekly/${report.id}`}
            className="block p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span className="font-mono text-primary/80">{report.week}</span>
              <span>{report.date}</span>
            </div>
            <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
              {report.title}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
              {report.summary}
            </p>
            <div className="space-y-2">
              {report.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export function WeeklyDetailPage() {
  const { id } = useParams()
  const report = sampleWeeklyReports.find((r) => r.id === id)

  if (!report) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">报告未找到</h1>
        <Link to="/weekly">
          <Button variant="secondary">返回周报列表</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container py-12 md:py-16">
      <Link to="/weekly" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" />
        返回周报列表
      </Link>

      <article className="max-w-3xl">
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
          <Calendar className="w-3.5 h-3.5" />
          <span className="font-mono text-primary">{report.week}</span>
          <span>{report.date}</span>
        </div>

        <h1 className="text-3xl font-bold mb-6">{report.title}</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          {report.summary}
        </p>

        <div className="space-y-4">
          {report.highlights.map((h, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
              <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-md bg-primary/10 text-xs font-bold text-primary">
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed">{h}</p>
            </div>
          ))}
        </div>
      </article>
    </div>
  )
}
