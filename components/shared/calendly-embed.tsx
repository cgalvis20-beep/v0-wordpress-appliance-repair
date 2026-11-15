"use client"

import { useEffect } from "react"

interface CalendlyEmbedProps {
  height?: number
}

type CalNamespace = {
  (...args: unknown[]): void
  q?: unknown[]
}

type CalApi = {
  (command: string, ...args: unknown[]): void
  ns?: Record<string, CalNamespace>
  config?: { forwardQueryParams?: boolean }
  loaded?: boolean
  q?: unknown[]
}

declare global {
  interface Window {
    Cal?: CalApi
  }
}

const CAL_SCRIPT_URL = "https://app.cal.com/embed/embed.js"
const CAL_NAMESPACE = "30min"
const CAL_LINK = "carlos-galvis-62ij3z/30min"

function configureCal(elementId: string) {
  const cal = window.Cal
  const namespace = cal?.ns?.[CAL_NAMESPACE]

  if (!cal || !namespace) return

  namespace("inline", {
    elementOrSelector: `#${elementId}`,
    config: {
      layout: "month_view",
      useSlotsViewOnSmallScreen: "true",
    },
    calLink: CAL_LINK,
  })
  namespace("ui", {
    hideEventTypeDetails: false,
    layout: "month_view",
  })
}

export function CalendlyEmbed({ height = 700 }: CalendlyEmbedProps) {
  const elementId = "my-cal-inline-30min"

  useEffect(() => {
    const existingCal = window.Cal

    if (!existingCal) {
      const cal = ((...args: unknown[]) => {
        cal.q = cal.q || []
        cal.q.push(args)
      }) as CalApi
      cal.q = []
      cal.ns = {}
      window.Cal = cal

      const namespace: CalNamespace = (...args: unknown[]) => {
        namespace.q = namespace.q || []
        namespace.q.push(args)
      }
      namespace.q = []
      cal.ns[CAL_NAMESPACE] = namespace
      cal.q.push(["initNamespace", CAL_NAMESPACE])

      const script = document.createElement("script")
      script.src = CAL_SCRIPT_URL
      script.async = true
      document.head.appendChild(script)
    }

    const cal = window.Cal
    if (!cal) return

    cal("init", CAL_NAMESPACE, { origin: "https://app.cal.com" })
    cal.config = cal.config || {}
    cal.config.forwardQueryParams = true

    const namespace = cal.ns?.[CAL_NAMESPACE]
    if (namespace) {
      configureCal(elementId)
    } else {
      window.setTimeout(() => configureCal(elementId), 0)
    }
  }, [])

  return (
    <div
      id={elementId}
      className="w-full overflow-scroll rounded-lg border border-border"
      style={{ minWidth: "320px", height: `${height}px` }}
    />
  )
}
