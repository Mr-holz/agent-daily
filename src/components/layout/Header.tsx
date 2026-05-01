import { SITE_CONFIG } from "@/config/site"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { useState } from "react"

export function Header() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <span className="text-sm font-bold text-primary font-mono">A</span>
          </div>
          <span className="text-lg font-bold tracking-tight">{SITE_CONFIG.name}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {SITE_CONFIG.nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                location.pathname === item.href
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={cn(
            "block h-0.5 w-5 bg-foreground transition-all",
            mobileOpen && "rotate-45 translate-y-1"
          )} />
          <span className={cn(
            "block h-0.5 w-5 bg-foreground transition-all",
            mobileOpen && "opacity-0"
          )} />
          <span className={cn(
            "block h-0.5 w-5 bg-foreground transition-all",
            mobileOpen && "-rotate-45 -translate-y-1.5"
          )} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container py-4 flex flex-col gap-1">
            {SITE_CONFIG.nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  location.pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
