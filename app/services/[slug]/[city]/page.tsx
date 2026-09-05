import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  Phone,
  Calendar,
  CheckCircle,
  ArrowRight,
  MapPin,
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
import { FAQAccordion } from "@/components/shared/faq-accordion"
import { getServiceBySlug } from "@/lib/data/services"
import { getCityBySlug } from "@/lib/data/cities"
import {
  serviceCityPages,
  getServiceCityPage,
  getCitySlugsForService,
  getServiceSlugsForCity,
} from "@/lib/data/service-city-pages"
import { companyInfo } from "@/lib/data/company-info"

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

interface ServiceCityPageProps {
  params: Promise<{ slug: string; city: string }>
}

export async function generateStaticParams() {
  return serviceCityPages.map((p) => ({ slug: p.serviceSlug, city: p.citySlug }))
}

export async function generateMetadata({
  params,
}: ServiceCityPageProps): Promise<Metadata> {
  const { slug, city } = await params
  const combo = getServiceCityPage(slug, city)

  if (!combo) {
    return { title: "Page Not Found" }
  }

  return {
    title: combo.metaTitle,
    description: combo.metaDescription,
    alternates: {
      canonical: `/services/${slug}/${city}`,
    },
  }
}

export default async function ServiceCityPage({ params }: ServiceCityPageProps) {
  const { slug, city } = await params
  const combo = getServiceCityPage(slug, city)
  const service = getServiceBySlug(slug)
  const cityData = getCityBySlug(city)

  if (!combo || !service || !cityData) {
    notFound()
  }

  const Icon = iconMap[service.icon] || Refrigerator

  // Other cities where this same service has a dedicated page.
  const otherCitySlugs = getCitySlugsForService(slug).filter((c) => c !== city)
  // Other services with a dedicated page in this same city.
  const otherServiceSlugs = getServiceSlugsForCity(city).filter((s) => s !== slug)

  return (
    <>
      {/* JSON-LD Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${service.title} in ${cityData.name}, Ontario`,
            description: combo.intro,
            provider: {
              "@type": "LocalBusiness",
              name: companyInfo.name,
              telephone: companyInfo.phone,
            },
            areaServed: {
              "@type": "City",
              name: `${cityData.name}, Ontario`,
            },
            serviceType: service.title,
          }),
        }}
      />

      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: combo.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <div className="py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: service.title, href: `/services/${service.slug}` },
              { label: cityData.name },
            ]}
          />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="flex items-start gap-4 mb-8">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                    {service.title} in {cityData.name}, Ontario
                  </h1>
                  <div className="flex items-center gap-2 text-muted-foreground mt-1">
                    <MapPin className="h-4 w-4" />
                    <span>Serving {cityData.name} &amp; surrounding areas</span>
                  </div>
                </div>
              </div>

              {/* Unique intro */}
              <div className="prose prose-slate max-w-none mb-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {combo.intro}
                </p>
              </div>

              {/* Common problems (service-level, legitimate to reuse) */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    Common {service.title} Problems We Fix
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.commonProblems.map((problem) => (
                      <div key={problem} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                        <span className="text-foreground">{problem}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Local note + neighborhoods (unique local content) */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    {service.title} for {cityData.name} Homeowners
                  </h2>
                  <p className="text-foreground mb-4">{combo.localNote}</p>
                  <div className="flex flex-wrap gap-2">
                    {cityData.neighborhoods.map((neighborhood) => (
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

              {/* Benefits (service-level, legitimate to reuse) */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    Why {cityData.name} Homeowners Choose Us for {service.title}
                  </h2>
                  <div className="space-y-3">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Unique combo FAQs */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
                <FAQAccordion faqs={combo.faqs} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA card */}
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">
                      Need {service.title} in {cityData.name}?
                    </h3>
                    <p className="text-primary-foreground/80 mb-6">
                      Book your appointment today. Same-day service available.
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
                        className="w-full border-border text-foreground hover:bg-muted"
                      >
                        <a href={`tel:${companyInfo.phoneClean}`}>
                          <Phone className="h-4 w-4 mr-2" />
                          {companyInfo.phone}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Other cities for this service */}
                {otherCitySlugs.length > 0 && (
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-foreground mb-4">
                        {service.title} in Other Areas
                      </h3>
                      <div className="space-y-3">
                        {otherCitySlugs.map((otherCity) => {
                          const otherCityData = getCityBySlug(otherCity)
                          if (!otherCityData) return null
                          return (
                            <Link
                              key={otherCity}
                              href={`/services/${slug}/${otherCity}`}
                              className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"
                            >
                              <span>{otherCityData.name}</span>
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Other services in this city */}
                {otherServiceSlugs.length > 0 && (
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-foreground mb-4">
                        Other Services in {cityData.name}
                      </h3>
                      <div className="space-y-3">
                        {otherServiceSlugs.map((otherService) => {
                          const otherServiceData = getServiceBySlug(otherService)
                          if (!otherServiceData) return null
                          return (
                            <Link
                              key={otherService}
                              href={`/services/${otherService}/${city}`}
                              className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"
                            >
                              <span>{otherServiceData.title}</span>
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Parent page links */}
                <Card>
                  <CardContent className="pt-6 space-y-2">
                    <Link
                      href={`/services/${service.slug}`}
                      className="block text-sm font-medium text-primary hover:underline"
                    >
                      View all {service.title} details
                    </Link>
                    <Link
                      href={`/locations/${cityData.slug}`}
                      className="block text-sm font-medium text-primary hover:underline"
                    >
                      View all services in {cityData.name}
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
