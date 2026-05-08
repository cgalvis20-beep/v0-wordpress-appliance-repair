import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  Phone,
  Calendar,
  CheckCircle,
  MapPin,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { cities, getCityBySlug, getAllCitySlugs } from "@/lib/data/cities"
import { services } from "@/lib/data/services"
import { companyInfo } from "@/lib/data/company-info"

interface LocationPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { slug } = await params
  const city = getCityBySlug(slug)

  if (!city) {
    return { title: "Location Not Found" }
  }

  return {
    title: city.metaTitle,
    description: city.metaDescription,
  }
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params
  const city = getCityBySlug(slug)

  if (!city) {
    notFound()
  }

  const otherCities = cities.filter((c) => c.slug !== city.slug).slice(0, 4)

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `${companyInfo.name} - ${city.name}`,
            description: city.description,
            telephone: companyInfo.phone,
            areaServed: {
              "@type": "City",
              name: `${city.name}, Ontario`,
            },
          }),
        }}
      />

      <div className="py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Service Areas", href: "/locations" },
              { label: city.name },
            ]}
          />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <MapPin className="h-5 w-5" />
                  <span className="text-sm font-medium">Service Area</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Appliance Repair in {city.name}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {city.description}
                </p>
              </div>

              {/* Highlights */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    Why {city.name} Residents Choose Us
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {city.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                        <span className="text-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Neighborhoods */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    Neighborhoods We Serve in {city.name}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {city.neighborhoods.map((neighborhood) => (
                      <span
                        key={neighborhood}
                        className="px-3 py-1 rounded-full bg-muted text-foreground text-sm"
                      >
                        {neighborhood}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Services available */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Services Available in {city.name}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-muted/50 transition-colors"
                    >
                      <span className="font-medium text-foreground">
                        {service.title}
                      </span>
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA card */}
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">
                      Need Repair in {city.name}?
                    </h3>
                    <p className="text-primary-foreground/80 mb-6">
                      Same-day service available. Book your appointment now.
                    </p>
                    <div className="space-y-3">
                      <Button
                        asChild
                        size="lg"
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                      >
                        <Link href="/booking">
                          <Calendar className="h-4 w-4 mr-2" />
                          Book Online
                        </Link>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                      >
                        <a href={`tel:${companyInfo.phoneClean}`}>
                          <Phone className="h-4 w-4 mr-2" />
                          {companyInfo.phone}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Other locations */}
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-foreground mb-4">
                      Other Service Areas
                    </h3>
                    <div className="space-y-3">
                      {otherCities.map((otherCity) => (
                        <Link
                          key={otherCity.slug}
                          href={`/locations/${otherCity.slug}`}
                          className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"
                        >
                          <span>{otherCity.name}</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/locations"
                      className="block mt-4 text-sm font-medium text-primary hover:underline"
                    >
                      View all locations
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
