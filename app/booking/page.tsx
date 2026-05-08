import type { Metadata } from "next"
import { Phone, Clock, CheckCircle } from "lucide-react"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { CalendlyEmbed } from "@/components/shared/calendly-embed"
import { companyInfo } from "@/lib/data/company-info"

export const metadata: Metadata = {
  title: "Book Appliance Repair Service",
  description:
    "Schedule your appliance repair appointment online. Same-day service available in London and surrounding areas. Fast, easy booking.",
}

const benefits = [
  "Same-day appointments available",
  "Upfront pricing before any work",
  "90-day warranty on all repairs",
  "Licensed & insured technicians",
]

export default function BookingPage() {
  return (
    <div className="py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Book Online" }]} />

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Book Your Repair
            </h1>
            <p className="text-muted-foreground mb-6">
              Schedule your appliance repair appointment online. Select a
              convenient time and we&apos;ll handle the rest.
            </p>

            {/* Benefits list */}
            <div className="space-y-3 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Contact card */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-4">
                Prefer to Call?
              </h3>
              <a
                href={`tel:${companyInfo.phoneClean}`}
                className="flex items-center gap-3 text-primary hover:underline font-medium"
              >
                <Phone className="h-5 w-5" />
                {companyInfo.phone}
              </a>
              <div className="flex items-start gap-3 mt-4 text-sm text-muted-foreground">
                <Clock className="h-5 w-5 shrink-0" />
                <div>
                  <p>Mon-Fri: {companyInfo.hours.weekdays}</p>
                  <p>Sat: {companyInfo.hours.saturday}</p>
                  <p>Sun: {companyInfo.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Calendly embed */}
          <div className="lg:col-span-2">
            <CalendlyEmbed />
          </div>
        </div>
      </div>
    </div>
  )
}
