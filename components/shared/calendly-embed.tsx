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
const CAL_ELEMENT_ID = "my-cal-inline-30min"

let calScriptPromise: Promise<void> | undefined

function loadCalScript() {
  if (calScriptPromise) return calScriptPromise

  if (!window.Cal) {
    const cal = ((...args: unknown[]) => {
      cal.q = cal.q || []
      cal.q.push(args)
    }) as CalApi
    cal.q = []
    cal.ns = {}

    const namespace: CalNamespace = (...args: unknown[]) => {
      namespace.q = namespace.q || []
      namespace.q.push(args)
    }
    namespace.q = []
    cal.ns[CAL_NAMESPACE] = namespace
    cal.q.push(["initNamespace", CAL_NAMESPACE])
    window.Cal = cal
  }

  calScriptPromise = new Promise<void>((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${CAL_SCRIPT_URL}"]`,
    )

    if (existingScript) {
      if (window.Cal?.loaded) {
        resolve()
      } else {
        existingScript.addEventListener("load", () => resolve(), { once: true })
        existingScript.addEventListener(
          "error",
          () => reject(new Error("Unable to load the Cal.com embed.")),
          { once: true },
        )
      }
      return
    }

    const script = document.createElement("script")
    script.src = CAL_SCRIPT_URL
    script.async = true
    script.addEventListener("load", () => resolve(), { once: true })
    script.addEventListener(
      "error",
      () => reject(new Error("Unable to load the Cal.com embed.")),
      { once: true },
    )
    document.head.appendChild(script)
  })

  return calScriptPromise
}

function configureCal(elementId: string) {
  const cal = window.Cal
  if (!cal) return

  cal("init", CAL_NAMESPACE, { origin: "https://app.cal.com" })
  cal.config = { ...cal.config, forwardQueryParams: true }

  const namespace = cal.ns?.[CAL_NAMESPACE]
  if (!namespace) return

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
  useEffect(() => {
    let active = true

    loadCalScript()
      .then(() => {
        if (active) configureCal(CAL_ELEMENT_ID)
      })
      .catch(() => {
        // Keep the phone fallback available if the booking embed cannot load.
      })

    return () => {
      active = false
      document.getElementById(CAL_ELEMENT_ID)?.replaceChildren()
    }
  }, [])

  return (
    <div
      id={CAL_ELEMENT_ID}
      className="w-full overflow-scroll rounded-lg border border-border"
      style={{ minWidth: "320px", height: `${height}px` }}
    />
  )
}
