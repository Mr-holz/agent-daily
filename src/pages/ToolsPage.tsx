import { sampleTools } from "@/data/sample"
import { Button } from "@/components/ui/button"
import { ExternalLink, Search } from "lucide-react"
import { useState } from "react"

const categories = [...new Set(sampleTools.map((t) => t.category))]

export function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filtered = sampleTools.filter((tool) => {
    if (activeCategory && tool.category !== activeCategory) return false
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      return (
        tool.name.toLowerCase().includes(q) ||
        tool.description.toLowerCase().includes(q) ||
        tool.tags.some((t) => t.toLowerCase().includes(q))
      )
    }
    return true
  })

  return (
    <div className="container py-12 md:py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">AI Agent 工具库</h1>
        <p className="text-muted-foreground mt-2">
          精选好用的 AI Agent 相关工具，持续收录中
        </p>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="搜索工具名称、描述或标签..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-card border border-border text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30"
          />
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex items-center gap-2 mb-8 flex-wrap">
        <Button
          variant={activeCategory === null ? "default" : "ghost"}
          size="sm"
          onClick={() => setActiveCategory(null)}
        >
          全部
        </Button>
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={activeCategory === cat ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Tool Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((tool) => (
          <a
            key={tool.id}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold group-hover:text-primary transition-colors">
                {tool.name}
              </h3>
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {tool.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                {tool.category}
              </span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                tool.free ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'
              }`}>
                {tool.free ? "免费" : "付费"}
              </span>
            </div>
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground">没有找到匹配的工具</p>
        </div>
      )}
    </div>
  )
}
