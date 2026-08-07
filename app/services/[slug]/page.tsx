import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  Phone,
  Calendar,
  CheckCircle,
  ArrowRight,
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
import { services, getServiceBySlug, getAllServiceSlugs } from "@/lib/data/services"
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

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return { title: "Service Not Found" }
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const Icon = iconMap[service.icon] || Refrigerator
  const relatedServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3)

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.longDescription,
            provider: {
              "@type": "LocalBusiness",
              name: companyInfo.name,
              telephone: companyInfo.phone,
            },
            areaServed: {
              "@type": "City",
              name: "London, Ontario",
            },
            serviceType: service.title,
          }),
        }}
      />

      <div className="py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: service.title },
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
                    {service.title}
                  </h1>
                  <p className="text-muted-foreground mt-1">
                    Professional repair service in London &amp; area
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-slate max-w-none mb-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.longDescription}
                </p>
              </div>

              {/* Common problems */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    Common Problems We Fix
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

              {/* Benefits */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    Why Choose Us for {service.title}
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

              {/* FAQs */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
                <FAQAccordion faqs={service.faqs} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA card */}
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">
                      Need {service.title}?
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

                {/* Related services */}
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-foreground mb-4">
                      Other Services
                    </h3>
                    <div className="space-y-3">
                      {relatedServices.map((related) => (
                        <Link
                          key={related.slug}
                          href={`/services/${related.slug}`}
                          className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"
                        >
                          <span>{related.title}</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/services"
                      className="block mt-4 text-sm font-medium text-primary hover:underline"
                    >
                      View all services
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
