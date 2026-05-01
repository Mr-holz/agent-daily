import { sampleTutorials } from "@/data/sample"
import { Link, useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, BookOpen } from "lucide-react"

const levelLabels = {
  beginner: { label: "入门", color: "text-green-400 bg-green-500/10" },
  intermediate: { label: "进阶", color: "text-yellow-400 bg-yellow-500/10" },
  advanced: { label: "高级", color: "text-red-400 bg-red-500/10" },
}

const categories = [...new Set(sampleTutorials.map((t) => t.category))]

export function TutorialListPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">教程中心</h1>
        <p className="text-muted-foreground mt-2">
          从零基础到高级技巧，手把手教你 AI Agent
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex items-center gap-2 mb-8 flex-wrap">
        <Link to="/tutorials">
          <Button variant="ghost" size="sm">全部</Button>
        </Link>
        {categories.map((cat) => (
          <Link key={cat} to={`/tutorials?category=${cat}`}>
            <Button variant="ghost" size="sm">{cat}</Button>
          </Link>
        ))}
      </div>

      {/* Tutorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sampleTutorials.map((tutorial) => {
          const level = levelLabels[tutorial.level]
          return (
            <Link
              key={tutorial.id}
              to={`/tutorials/${tutorial.id}`}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${level.color}`}>
                  {level.label}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                  {tutorial.category}
                </span>
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {tutorial.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {tutorial.description}
              </p>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {tutorial.duration}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <BookOpen className="w-3 h-3" />
                  {tutorial.date}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export function TutorialDetailPage() {
  const { id } = useParams()
  const tutorial = sampleTutorials.find((t) => t.id === id)

  if (!tutorial) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">教程未找到</h1>
        <Link to="/tutorials">
          <Button variant="secondary">返回教程列表</Button>
        </Link>
      </div>
    )
  }

  const level = levelLabels[tutorial.level]

  return (
    <div className="container py-12 md:py-16">
      <Link to="/tutorials" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" />
        返回教程列表
      </Link>

      <article className="max-w-3xl">
        <div className="flex items-center gap-2 mb-4">
          <span className={`text-xs px-2 py-0.5 rounded-full ${level.color}`}>
            {level.label}
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
            {tutorial.category}
          </span>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {tutorial.duration}
          </span>
        </div>

        <h1 className="text-3xl font-bold mb-4">{tutorial.title}</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          {tutorial.description}
        </p>

        {/* Content placeholder */}
        <div className="p-8 rounded-xl bg-card border border-border text-center">
          <BookOpen className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground">
            教程正文即将上线<br />
            订阅更新，第一时间获取完整教程
          </p>
        </div>

        <div className="flex items-center gap-2 mt-6">
          {tutorial.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
              #{tag}
            </span>
          ))}
        </div>
      </article>
    </div>
  )
}
