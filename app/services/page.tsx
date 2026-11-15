import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
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
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { services } from "@/lib/data/services"
import { companyInfo } from "@/lib/data/company-info"

export const metadata: Metadata = {
  title: "Appliance Repair Services",
  description:
    "Professional appliance repair in London and surrounding areas. We repair refrigerators, washers, dryers, dishwashers, ovens, and more. Same-day service.",
  alternates: {
    canonical: '/services',
  },
}

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

export default function ServicesPage() {
  return (
    <div className="py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Services" }]} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Appliance Repair Services
          </h1>
          <p className="text-lg text-muted-foreground">
            We repair all major household appliances. Our certified technicians
            have the expertise to diagnose and fix any problem quickly and
            efficiently.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Refrigerator
            return (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow group border-border hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4">
                      {service.shortDescription}
                    </p>
                    <div className="flex items-center text-sm font-medium text-primary">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* CTA section */}
        <div className="bg-muted/50 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Need Emergency Repair?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We offer same-day service for most appliance repairs. Don&apos;t wait
            - call us now or book online.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/booking">Book Online</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={`tel:${companyInfo.phoneClean}`}>
                <Phone className="h-4 w-4 mr-2" />
                {companyInfo.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
