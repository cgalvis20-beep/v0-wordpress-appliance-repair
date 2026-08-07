import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

const SITE_URL = "https://myappliancepro.ca"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  // Build the full ordered list: synthetic Home entry first, then the passed items.
  const allItems: BreadcrumbItem[] = [{ label: "Home", href: "/" }, ...items]

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => {
      const isLast = index === allItems.length - 1
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        // Google guidance: omit the `item` URL on the final (current-page) entry.
        ...(!isLast && item.href
          ? { item: `${SITE_URL}${item.href}` }
          : {}),
      }
    }),
  }

  return (
    <nav aria-label="Breadcrumb" className={cn("mb-6", className)}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ol className="flex items-center flex-wrap gap-1 text-sm">
        <li>
          <Link
            href="/"
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1">
            <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
            {item.href && index < items.length - 1 ? (
              <Link
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
