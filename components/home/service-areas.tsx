import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cities } from "@/lib/data/cities"

export function ServiceAreas() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Serving London &amp; Surrounding Areas
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              We provide appliance repair services throughout Southwestern Ontario. Our technicians travel to your location, saving you time and hassle.
            </p>

            {/* City list */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/locations/${city.slug}`}
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
                >
                  <MapPin className="h-4 w-4 text-accent shrink-0" />
                  <span className="group-hover:underline">{city.name}</span>
                </Link>
              ))}
            </div>

            <Button asChild className="mt-8" variant="outline">
              <Link href="/locations">
                View All Service Areas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Map placeholder */}
          <div className="relative">
            <div className="aspect-square lg:aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 via-muted to-accent/10 overflow-hidden border border-border">
              {/* Stylized map illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full p-8">
                  {/* Map dots representing cities */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      {/* Central London marker */}
                      <div className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                        <div className="h-4 w-4 rounded-full bg-primary animate-pulse" />
                        <span className="mt-1 text-xs font-medium text-foreground bg-background/80 px-2 py-0.5 rounded">
                          London
                        </span>
                      </div>
                      {/* Surrounding cities */}
                      {[
                        { name: "Woodstock", x: 60, y: -50 },
                        { name: "St. Thomas", x: -20, y: 70 },
                        { name: "Strathroy", x: -70, y: -30 },
                        { name: "Ingersoll", x: 80, y: 20 },
                        { name: "Tillsonburg", x: 40, y: 80 },
                        { name: "Aylmer", x: 100, y: 60 },
                        { name: "Dorchester", x: 20, y: 40 },
                      ].map((city) => (
                        <div
                          key={city.name}
                          className="absolute flex flex-col items-center"
                          style={{
                            transform: `translate(${city.x}px, ${city.y}px)`,
                          }}
                        >
                          <div className="h-2.5 w-2.5 rounded-full bg-accent" />
                          <span className="mt-0.5 text-[10px] text-muted-foreground whitespace-nowrap">
                            {city.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Service area circle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-dashed border-primary/30" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-dashed border-accent/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
