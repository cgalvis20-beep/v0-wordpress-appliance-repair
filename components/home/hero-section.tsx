import Link from "next/link"
import { Phone, Calendar, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { companyInfo } from "@/lib/data/company-info"

const highlights = [
  "Same-Day Service Available",
  "All Major Brands Serviced",
  "90-Day Warranty on Repairs",
]

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Technicians Available Today
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
            Fast, Reliable{" "}
            <span className="text-primary">Appliance Repair</span>{" "}in London &amp; Area
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Get the fix you need with the protection you deserve. All work is backed by our 90-day warranty, with new 6-month to 1-year extended warranty options available for premium repairs. Book your reliable, same-day appliance repair today!
          </p>

          {/* Highlights */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            {highlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-2 text-foreground">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8">
              <Link href="/booking">
                <Calendar className="h-5 w-5 mr-2" />
                Book Online Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base px-8">
              <a href={`tel:${companyInfo.phoneClean}`}>
                <Phone className="h-5 w-5 mr-2" />
                Call {companyInfo.phone}
              </a>
            </Button>
          </div>

          {/* Trust text */}
          <p className="mt-6 text-sm text-muted-foreground">
            Trusted by 40+ homeowners across Southwestern Ontario
          </p>
        </div>
      </div>
    </section>
  )
}
