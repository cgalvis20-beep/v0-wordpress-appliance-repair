"use client"

import Link from "next/link"
import { Phone, Calendar } from "lucide-react"
import { companyInfo } from "@/lib/data/company-info"

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background border-t border-border shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="grid grid-cols-2 divide-x divide-border">
        <a
          href={`tel:${companyInfo.phoneClean}`}
          className="flex items-center justify-center gap-2 py-4 text-primary font-semibold hover:bg-muted transition-colors"
        >
          <Phone className="h-5 w-5" />
          <span>Call Now</span>
        </a>
        <Link
          href="/booking"
          className="flex items-center justify-center gap-2 py-4 bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
        >
          <Calendar className="h-5 w-5" />
          <span>Book Online</span>
        </Link>
      </div>
    </div>
  )
}
