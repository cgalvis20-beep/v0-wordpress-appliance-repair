"use client"

import { useState } from "react"
import { CheckCircle } from "lucide-react"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email.trim()) return
    // No newsletter backend is wired up yet; acknowledge the submission
    // client-side so the form no longer reloads the page.
    setSubscribed(true)
    setEmail("")
  }

  if (subscribed) {
    return (
      <div className="mx-auto flex max-w-md items-center justify-center gap-2 rounded-lg bg-background/10 px-4 py-3 text-primary-foreground">
        <CheckCircle className="h-5 w-5 shrink-0" />
        <span>Thanks for subscribing! Check your inbox soon.</span>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter your email"
        className="flex-1 rounded-lg border-0 bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <button
        type="submit"
        className="rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
      >
        Subscribe
      </button>
    </form>
  )
}
