import { SITE_CONFIG } from "@/config/site"
import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
                <span className="text-xs font-bold text-primary font-mono">A</span>
              </div>
              <span className="font-bold">{SITE_CONFIG.name}</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              {SITE_CONFIG.footer.description}
            </p>
            <div className="flex items-center gap-3 mt-4">
              <span className="text-xs text-muted-foreground">关注我们：</span>
              <a
                href={SITE_CONFIG.social.xiaohongshu}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                小红书
              </a>
              <a
                href={SITE_CONFIG.social.rss}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                RSS
              </a>
            </div>
          </div>

          {/* Link Sections */}
          {SITE_CONFIG.footer.sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            本站内容仅供参考，不构成任何投资建议。
          </p>
        </div>
      </div>
    </footer>
  )
}
