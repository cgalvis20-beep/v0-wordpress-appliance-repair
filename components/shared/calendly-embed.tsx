"use client"

import { useEffect } from "react"
import { companyInfo } from "@/lib/data/company-info"

interface CalendlyEmbedProps {
  url?: string
  height?: number
}

export function CalendlyEmbed({
  url = companyInfo.calendlyUrl,
  height = 700,
}: CalendlyEmbedProps) {
  useEffect(() => {
    const head = document.querySelector("head")
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    head?.appendChild(script)

    return () => {
      head?.removeChild(script)
    }
  }, [])

  return (
    <div
      className="calendly-inline-widget w-full rounded-lg overflow-hidden border border-border"
      data-url={url}
      style={{ minWidth: "320px", height: `${height}px` }}
    />
  )
}
