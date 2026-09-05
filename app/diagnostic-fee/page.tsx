import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Calendar, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { FAQAccordion } from "@/components/shared/faq-accordion"
import { companyInfo } from "@/lib/data/company-info"

export const metadata: Metadata = {
  title: "Diagnostic Fee",
  description:
    "Our diagnostic fee is a flat $124 CAD for every service visit. See exactly what it covers, our non-refundable policy, and our cancellation terms.",
  alternates: {
    canonical: "/diagnostic-fee",
  },
}

const faqs = [
  {
    question: "How much is your diagnostic fee?",
    answer:
      "Our diagnostic fee is a flat $124 CAD for every service visit, regardless of the appliance type or issue. After diagnosis, we provide an upfront quote for the repair before any work begins.",
  },
  {
    question: "Is the diagnostic fee refundable?",
    answer:
      "No. The diagnostic fee is non-refundable once the technician has arrived at the service address, regardless of whether the appliance is deemed repairable. This covers the technician's travel and the time spent accurately diagnosing the problem.",
  },
  {
    question: "Do you charge for phone estimates?",
    answer:
      "We're happy to provide a free estimate over the phone based on what you describe, but an in-person diagnosis is required for a precise, guaranteed repair quote.",
  },
  {
    question: "What happens if I need to cancel my appointment?",
    answer:
      "Appointments cancelled or rescheduled at least 24 hours in advance have no fee. Cancelling with less than 24 hours' notice results in a cancellation fee equal to the standard diagnostic fee.",
  },
]

export default function DiagnosticFeePage() {
  return (
    <>
      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
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
          <Breadcrumbs items={[{ label: "Diagnostic Fee" }]} />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Direct answer, up front, per AEO best practice */}
              <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Our Diagnostic Fee Is a Flat $124 CAD
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every service visit, regardless of appliance type or issue, starts
                  with a flat $124 CAD diagnostic fee. This covers your technician's
                  travel to your home and the time needed to accurately identify
                  the problem. Once diagnosed, we give you an upfront repair quote
                  before any further work begins &mdash; no surprises.
                </p>
              </div>

              {/* What's included */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    What the Diagnostic Fee Covers
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-foreground">
                        A licensed technician traveling to your home
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-foreground">
                        A full, hands-on diagnosis of the actual problem
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-foreground">
                        An upfront, written repair quote before work begins
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Policy notes */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    Fee Policy
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                      <span className="text-foreground">
                        Non-refundable once the technician arrives at your home,
                        regardless of whether the appliance turns out to be
                        repairable.
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                      <span className="text-foreground">
                        Cancelling or rescheduling with less than 24 hours&apos;
                        notice results in a fee equal to the standard
                        diagnostic fee.
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQs */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
                <FAQAccordion faqs={faqs} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">
                      Ready to Book?
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

                <Card>
                  <CardContent className="pt-6 space-y-2">
                    <Link
                      href="/faq"
                      className="block text-sm font-medium text-primary hover:underline"
                    >
                      View all FAQs
                    </Link>
                    <Link
                      href="/terms"
                      className="block text-sm font-medium text-primary hover:underline"
                    >
                      Read our full Terms of Service
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
