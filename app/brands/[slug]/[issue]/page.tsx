import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  Phone,
  Calendar,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Wrench,
  ClipboardCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { FAQAccordion } from "@/components/shared/faq-accordion"
import { brands } from "@/lib/data/brands"
import {
  brandIssuePages,
  getBrandIssuePage,
  getIssueSlugsForBrand,
  getBrandIssuePageByLabel,
} from "@/lib/data/brand-issue-pages"
import { companyInfo } from "@/lib/data/company-info"

interface BrandIssuePageProps {
  params: Promise<{ slug: string; issue: string }>
}

export async function generateStaticParams() {
  return brandIssuePages.map((p) => ({ slug: p.brandSlug, issue: p.issueSlug }))
}

export async function generateMetadata({
  params,
}: BrandIssuePageProps): Promise<Metadata> {
  const { slug, issue } = await params
  const page = getBrandIssuePage(slug, issue)

  if (!page) {
    return { title: "Page Not Found" }
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `/brands/${slug}/${issue}`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
    },
  }
}

export default async function BrandIssuePage({ params }: BrandIssuePageProps) {
  const { slug, issue } = await params
  const page = getBrandIssuePage(slug, issue)
  const brand = brands.find((b) => b.slug === slug)

  if (!page || !brand) {
    notFound()
  }

  // Other documented issues for this same brand, for internal links.
  const otherIssueSlugs = getIssueSlugsForBrand(slug).filter((s) => s !== issue)

  return (
    <>
      {/* JSON-LD Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: page.title,
            description: page.metaDescription,
            provider: {
              "@type": "LocalBusiness",
              name: companyInfo.name,
              telephone: companyInfo.phone,
            },
            areaServed: {
              "@type": "City",
              name: "London, Ontario",
            },
            serviceType: `${brand.name} Appliance Repair`,
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
              { label: "Brands", href: "/brands" },
              { label: brand.name, href: `/brands/${brand.slug}` },
              { label: page.matchedCommonIssue },
            ]}
          />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="flex items-start gap-4 mb-8">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <AlertTriangle className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                    {page.title}
                  </h1>
                  <p className="text-muted-foreground mt-1">
                    Expert {brand.name}{" "}repair in London &amp; surrounding areas
                  </p>
                </div>
              </div>

              {/* Symptoms / unique intro */}
              <div className="prose prose-slate max-w-none mb-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {page.symptoms}
                </p>
              </div>

              {/* Common causes */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    Common Causes
                  </h2>
                  <div className="space-y-3">
                    {page.causes.map((cause) => (
                      <div key={cause} className="flex items-start gap-3">
                        <Wrench className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-foreground">{cause}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* What to expect */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <ClipboardCheck className="h-5 w-5 text-primary" />
                    What to Expect From Our Repair
                  </h2>
                  <p className="text-foreground leading-relaxed">
                    {page.whatToExpect}
                  </p>
                </CardContent>
              </Card>

              {/* FAQs */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Frequently Asked Questions
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
                      Need {brand.name} Repair?
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

                {/* Other issues for this brand */}
                {otherIssueSlugs.length > 0 && (
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-foreground mb-4">
                        Other {brand.name} Issues We Fix
                      </h3>
                      <div className="space-y-3">
                        {otherIssueSlugs.map((otherIssue) => {
                          const otherPage = getBrandIssuePage(slug, otherIssue)
                          if (!otherPage) return null
                          return (
                            <Link
                              key={otherIssue}
                              href={`/brands/${slug}/${otherIssue}`}
                              className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"
                            >
                              <span>{otherPage.matchedCommonIssue}</span>
                              <ArrowRight className="h-4 w-4 shrink-0" />
                            </Link>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Common issues on this brand (that don't yet have pages) */}
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-foreground mb-4">
                      Common {brand.name} Problems
                    </h3>
                    <div className="space-y-3">
                      {brand.commonIssues.map((commonIssue) => {
                        const issuePage = getBrandIssuePageByLabel(slug, commonIssue)
                        const isCurrent = commonIssue === page.matchedCommonIssue
                        return (
                          <div
                            key={commonIssue}
                            className="flex items-center gap-3"
                          >
                            <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                            {issuePage && !isCurrent ? (
                              <Link
                                href={`/brands/${slug}/${issuePage.issueSlug}`}
                                className="text-foreground hover:text-primary hover:underline transition-colors"
                              >
                                {commonIssue}
                              </Link>
                            ) : (
                              <span
                                className={
                                  isCurrent
                                    ? "font-medium text-primary"
                                    : "text-foreground"
                                }
                              >
                                {commonIssue}
                              </span>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Parent page link */}
                <Card>
                  <CardContent className="pt-6">
                    <Link
                      href={`/brands/${brand.slug}`}
                      className="block text-sm font-medium text-primary hover:underline"
                    >
                      View all {brand.name} repair details
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
