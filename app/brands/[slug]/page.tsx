import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { brands } from "@/lib/data/brands"
import { services } from "@/lib/data/services"
import { companyInfo } from "@/lib/data/company-info"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { FAQAccordion } from "@/components/shared/faq-accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Calendar,
  CheckCircle,
  Wrench,
  Shield,
  Clock,
  Award,
  ArrowRight,
} from "lucide-react"

interface BrandPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return brands.map((brand) => ({
    slug: brand.slug,
  }))
}

export async function generateMetadata({ params }: BrandPageProps): Promise<Metadata> {
  const { slug } = await params
  const brand = brands.find((b) => b.slug === slug)

  if (!brand) {
    return {
      title: "Brand Not Found",
    }
  }

  return {
    title: `${brand.name} Appliance Repair | ${companyInfo.name}`,
    description: brand.metaDescription,
    alternates: {
      canonical: `/brands/${brand.slug}`,
    },
    openGraph: {
      title: `${brand.name} Appliance Repair | ${companyInfo.name}`,
      description: brand.metaDescription,
    },
  }
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { slug } = await params
  const brand = brands.find((b) => b.slug === slug)

  if (!brand || !brand.appliancesServiced || !brand.commonIssues || !brand.whyChooseUs || !brand.faqs) {
    notFound()
  }

  // Get other brands for cross-linking
  const otherBrands = brands.filter((b) => b.slug !== slug).slice(0, 4)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: "Brands", href: "/brands" },
              { label: brand.name },
            ]}
            className="mb-6 text-primary-foreground/80"
          />
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <Badge className="mb-4 bg-accent text-accent-foreground">
                Certified {brand.name} Repair
              </Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground lg:text-5xl">
                {brand.name} Appliance Repair
              </h1>
              <p className="mb-8 text-lg text-primary-foreground/90">
                {brand.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Link href="/booking">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book {brand.name} Repair
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <a href={`tel:${companyInfo.phoneClean}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    {companyInfo.phone}
                  </a>
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex lg:justify-center">
              <div className="flex h-48 w-48 items-center justify-center rounded-full bg-primary-foreground/10">
                <Wrench className="h-24 w-24 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-b bg-card py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Factory Trained</p>
                <p className="text-sm text-muted-foreground">For {brand.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Same-Day Service</p>
                <p className="text-sm text-muted-foreground">Available</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold text-foreground">90-Day Warranty</p>
                <p className="text-sm text-muted-foreground">On All Repairs</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold text-foreground">OEM Parts</p>
                <p className="text-sm text-muted-foreground">Genuine {brand.name}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appliances We Repair */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              {brand.name} Appliances We Repair
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our technicians are trained to repair all {brand.name} appliances, 
              from refrigerators to washing machines and everything in between.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brand.appliancesServiced?.map((appliance) => {
              const service = services.find(
                (s) => s.name?.toLowerCase().includes(appliance?.toLowerCase() ?? "")
              )
              return (
                <Card key={appliance} className="transition-shadow hover:shadow-md">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                      <Wrench className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">
                        {brand.name} {appliance}
                      </h3>
                      {service && (
                        <Link
                          href={`/services/${service.slug}`}
                          className="text-sm text-primary hover:underline"
                        >
                          View Service Details
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Common {brand.name} Issues We Fix
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We&apos;ve seen it all when it comes to {brand.name} appliances. 
              Here are some of the most common problems our technicians resolve.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {brand.commonIssues?.map((issue) => (
                <div
                  key={issue}
                  className="flex items-center gap-3 rounded-lg bg-card p-4"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-foreground">{issue}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground">
                Why Choose {companyInfo.name} for {brand.name} Repairs?
              </h2>
              <div className="space-y-4">
                {brand.whyChooseUs?.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <p className="text-muted-foreground">{reason}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/booking">
                    Schedule Your {brand.name} Repair
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-xl bg-secondary p-8">
              <h3 className="mb-4 text-xl font-semibold text-foreground">
                {brand.name} Repair Pricing
              </h3>
              <p className="mb-6 text-muted-foreground">
                We offer transparent, upfront pricing for all {brand.name} repairs. 
                Our service call fee includes diagnosis of the problem.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Service Call / Diagnosis</span>
                  <span className="font-semibold text-foreground">$124</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Labor (most repairs)</span>
                  <span className="font-semibold text-foreground">$100 - $200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Parts</span>
                  <span className="font-semibold text-foreground">Varies</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                * 20% of the service call fee is waived if you proceed with the repair
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              {brand.name} Repair FAQs
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Common questions about our {brand.name} appliance repair services.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <FAQAccordion faqs={brand.faqs} />
          </div>
        </div>
      </section>

      {/* Other Brands */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Other Brands We Service
            </h2>
            <p className="text-muted-foreground">
              We repair all major appliance brands
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherBrands.map((otherBrand) => (
              <Link key={otherBrand.slug} href={`/brands/${otherBrand.slug}`}>
                <Card className="group transition-all hover:shadow-md hover:border-primary/50">
                  <CardContent className="flex items-center justify-between p-6">
                    <span className="font-semibold text-foreground group-hover:text-primary">
                      {otherBrand.name}
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/brands">View All Brands</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
            Need Your {brand.name} Appliance Repaired?
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/90">
            Our certified technicians are ready to help. Same-day service available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/booking">Book Online Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href={`tel:${companyInfo.phoneClean}`}>
                <Phone className="mr-2 h-5 w-5" />
                {companyInfo.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${brand.name} Appliance Repair`,
            provider: {
              "@type": "LocalBusiness",
              name: companyInfo.name,
              telephone: companyInfo.phone,
              address: {
                "@type": "PostalAddress",
                addressLocality: companyInfo.address.city,
                addressRegion: companyInfo.address.province,
                postalCode: companyInfo.address.postalCode,
                addressCountry: companyInfo.address.country,
              },
            },
            description: brand.metaDescription,
            areaServed: {
              "@type": "City",
              name: "London, Ontario",
            },
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
            mainEntity: brand.faqs.map((faq) => ({
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
    </div>
  )
}
