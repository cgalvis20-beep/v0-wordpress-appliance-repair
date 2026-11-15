import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { services } from "@/lib/data/services"
import {
  Refrigerator,
  WashingMachine,
  Wind,
  Sparkles,
  Flame,
  CookingPot,
  ChefHat,
  Snowflake,
  Zap,
  Gauge,
  Fan,
} from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Refrigerator,
  WashingMachine,
  Fan,
  Sparkles,
  Flame,
  CookingPot,
  ChefHat,
  Snowflake,
  Zap,
  Gauge,
  Wind,
}

export function ServicesGrid() {
  const featuredServices = services.slice(0, 6)

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Appliance Repair Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            We repair all major household appliances from refrigerators to dishwashers. Our expert technicians have you covered.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service) => {
            const Icon = iconMap[service.icon] || Refrigerator
            return (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow group border-border hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                          {service.shortDescription}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm font-medium text-primary">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* View all button */}
        <div className="mt-10 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
