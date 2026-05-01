import { sampleDailyPosts } from "@/data/sample"
import { Link, useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Tag, ExternalLink } from "lucide-react"

export function DailyListPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">每日日报</h1>
        <p className="text-muted-foreground mt-2">
          《Agent 每日 3 条头条》—— 每天精选 3 条重磅新闻，附人话解读
        </p>
      </div>

      <div className="space-y-4">
        {sampleDailyPosts.map((post) => (
          <Link
            key={post.id}
            to={`/daily/${post.id}`}
            className="block p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                {post.date}
              </div>
            </div>
            <h2 className="text-lg font-bold mb-4 group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => {
                const headline = post[`headline${i}` as keyof typeof post] as string
                const summary = post[`summary${i}` as keyof typeof post] as string
                return (
                  <div key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5 flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold bg-secondary text-muted-foreground">
                      {i}
                    </span>
                    <div>
                      <div className="text-sm font-medium">{headline}</div>
                      <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{summary}</div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="flex items-center gap-2 mt-4 pt-3 border-t border-border">
              {post.tags.map((tag) => (
                <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                  #{tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination placeholder */}
      <div className="mt-8 text-center text-sm text-muted-foreground">
        共 {sampleDailyPosts.length} 篇 · 查看更多即将上线
      </div>
    </div>
  )
}

export function DailyDetailPage() {
  const { id } = useParams()
  const post = sampleDailyPosts.find((p) => p.id === id) || sampleDailyPosts[0]

  if (!post) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">内容未找到</h1>
        <Link to="/daily">
          <Button variant="secondary">返回日报列表</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container py-12 md:py-16">
      <Link to="/daily" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" />
        返回日报列表
      </Link>

      <article className="max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
          </div>
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <div className="flex items-center gap-2 mt-4">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {[1, 2, 3].map((i) => {
            const headline = post[`headline${i}` as keyof typeof post] as string
            const summary = post[`summary${i}` as keyof typeof post] as string
            return (
              <div key={i} className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                    {i}
                  </span>
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold">
                      {headline}
                      <ExternalLink className="w-4 h-4 inline ml-2 text-muted-foreground hover:text-primary cursor-pointer" />
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {summary}
                    </p>
                    <div className="flex items-center gap-2 pt-2">
                      <Tag className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">查看详情 →</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
          <div>
            {/* Previous post link placeholder */}
          </div>
          <Link to="/daily">
            <Button variant="secondary">
              浏览更多日报
            </Button>
          </Link>
        </div>
      </article>
    </div>
  )
}
