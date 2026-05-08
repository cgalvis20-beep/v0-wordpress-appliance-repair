import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { cities } from "@/lib/data/cities"
import { companyInfo } from "@/lib/data/company-info"

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "MyappliancePro provides appliance repair services in London, St. Thomas, Woodstock, Strathroy, Ingersoll, Tillsonburg, Aylmer, and Dorchester.",
}

export default function LocationsPage() {
  return (
    <div className="py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Service Areas" }]} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Areas We Serve
          </h1>
          <p className="text-lg text-muted-foreground">
            We provide professional appliance repair services throughout
            Southwestern Ontario. Find your city below to learn more about our
            local service.
          </p>
        </div>

        {/* Cities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cities.map((city) => (
            <Link key={city.slug} href={`/locations/${city.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow group border-border hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {city.name}
                    </h2>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {city.description.substring(0, 100)}...
                  </p>
                  <div className="flex items-center text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Map section */}
        <div className="bg-muted/50 rounded-2xl p-8 lg:p-12 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Serving All of Southwestern Ontario
              </h2>
              <p className="text-muted-foreground mb-6">
                Our service area extends throughout the London region. We
                provide the same high-quality service to all our communities,
                with same-day appointments often available.
              </p>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  Same-day service available in all areas
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  No extra charge for travel within our service area
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  Licensed technicians serving all communities
                </li>
              </ul>
            </div>
            <div className="relative aspect-square lg:aspect-[4/3] rounded-xl bg-gradient-to-br from-primary/20 via-muted to-accent/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">8</div>
                <div className="text-lg text-foreground font-medium">
                  Cities Served
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Throughout SW Ontario
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Don&apos;t See Your City?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We may still be able to help! Give us a call to check if we service
            your area.
          </p>
          <Button asChild size="lg" variant="outline">
            <a href={`tel:${companyInfo.phoneClean}`}>
              <Phone className="h-4 w-4 mr-2" />
              Call {companyInfo.phone}
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
