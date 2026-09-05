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
import { FAQAccordion } from "@/components/shared/faq-accordion"
import {
  serviceCityPages,
  getServiceCityPage,
  getServiceSlugsForCity,
} from "@/lib/data/service-city-pages"
import { getServiceBySlug } from "@/lib/data/services"
import { getCityBySlug } from "@/lib/data/cities"
import { companyInfo } from "@/lib/data/company-info"

interface ServiceCityPageProps {
  params: Promise<{ slug: string; city: string }>
}

export async function generateStaticParams() {
  return serviceCityPages.map((page) => ({
    slug: page.serviceSlug,
    city: page.citySlug,
  }))
}

export async function generateMetadata({
  params,
}: ServiceCityPageProps): Promise<Metadata> {
  const { slug, city } = await params
  const page = getServiceCityPage(slug, city)

  if (!page) {
    return { title: "Page Not Found" }
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `/services/${page.serviceSlug}/${page.citySlug}`,
    },
  }
}

export default async function ServiceCityPage({
  params,
}: ServiceCityPageProps) {
  const { slug, city } = await params
  const page = getServiceCityPage(slug, city)
  const service = getServiceBySlug(slug)
  const cityData = getCityBySlug(city)

  if (!page || !service || !cityData) {
    notFound()
  }

  // Other service pages available in this same city, for internal linking.
  const otherServicesInCity = getServiceSlugsForCity(city)
    .filter((s) => s !== slug)
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))

  return (
    <>
      {/* JSON-LD Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${service.title} in ${cityData.name}`,
            description: page.metaDescription,
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
            mainEntity: page.faqs.map((faq) => ({
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
              <div className="mb-8">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <MapPin className="h-5 w-5" />
                  <span className="text-sm font-medium">
                    Serving {cityData.name}, Ontario
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
                  {service.title} in {cityData.name}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {page.intro}
                </p>
              </div>

              {/* Local note */}
              <Card className="mb-8 border-l-4 border-l-accent">
                <CardContent className="pt-6">
                  <h2 className="text-lg font-semibold text-foreground mb-2">
                    Local {cityData.name} Service
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {page.localNote}
                  </p>
                </CardContent>
              </Card>

              {/* Common problems (reused service data) */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    Common {service.title.replace(" Repair", "")} Problems We
                    Fix in {cityData.name}
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

              {/* FAQs (unique per page) */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  {cityData.name} {service.title} FAQs
                </h2>
                <FAQAccordion faqs={page.faqs} />
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

                {/* Related links */}
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-foreground mb-4">
                      More in {cityData.name}
                    </h3>
                    <div className="space-y-3">
                      {otherServicesInCity.map((related) => (
                        <Link
                          key={related.slug}
                          href={`/services/${related.slug}/${cityData.slug}`}
                          className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"
                        >
                          <span>{related.title}</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      ))}
                      <Link
                        href={`/locations/${cityData.slug}`}
                        className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"
                      >
                        <span>All services in {cityData.name}</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                    <Link
                      href={`/services/${service.slug}`}
                      className="block mt-4 text-sm font-medium text-primary hover:underline"
                    >
                      View full service details &amp; pricing
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
