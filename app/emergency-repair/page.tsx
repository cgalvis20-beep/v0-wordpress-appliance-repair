import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Calendar, CheckCircle, AlertTriangle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { FAQAccordion } from "@/components/shared/faq-accordion"
import { services } from "@/lib/data/services"
import { companyInfo } from "@/lib/data/company-info"

export const metadata: Metadata = {
  title: "Emergency Appliance Repair | Same-Day Service",
  description:
    "Need appliance repair today? We offer same-day service for refrigerators, washers, dryers, and more across London and area. Call now or book online.",
  alternates: {
    canonical: "/emergency-repair",
  },
}

const faqs = [
  {
    question: "Do you offer same-day emergency appliance repair?",
    answer:
      "Yes, same-day service is available for most appliance repairs. Call as early in the day as possible to get the best chance of a same-day appointment — we'll confirm a specific arrival window when you book.",
  },
  {
    question: "My refrigerator is leaking water and I smell something burning. Is it safe to keep using it?",
    answer:
      "If you notice a burning smell, unplug the appliance immediately and don't use it again until a technician has inspected it. A burning smell can indicate an electrical fault, which is a genuine fire risk.",
  },
  {
    question: "My gas oven or stove won't ignite. What should I do?",
    answer:
      "Turn off the gas supply to the appliance and avoid repeated ignition attempts. A faulty igniter can allow gas to build up, which is dangerous. Call us for professional service rather than troubleshooting a gas appliance yourself.",
  },
  {
    question: "Do you charge extra for emergency or same-day appointments?",
    answer:
      "Same-day appointments are billed at our standard diagnostic fee — there's no separate emergency surcharge on top of it.",
  },
]

export default function EmergencyRepairPage() {
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
          <Breadcrumbs items={[{ label: "Emergency Repair" }]} />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Direct answer, up front */}
              <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Need Appliance Repair Today?
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A broken fridge, a flooding washer, or an oven that won&apos;t heat
                  doesn&apos;t wait for a convenient time. We offer same-day service
                  for most appliance repairs across London and the surrounding
                  area &mdash; call us directly for the fastest response.
                </p>
              </div>

              {/* Safety first */}
              <Card className="mb-8 border-accent/40">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-4">
                    <AlertTriangle className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <h2 className="text-xl font-semibold text-foreground">
                      If Something Seems Unsafe, Act First
                    </h2>
                  </div>
                  <div className="space-y-3 text-foreground">
                    <p>
                      If an appliance is sparking, smells like it&apos;s burning, or
                      you smell gas, don&apos;t wait for a technician before taking
                      basic precautions:
                    </p>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Unplug the appliance if it&apos;s safe to reach the plug</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Turn off the gas supply if you smell gas near a gas appliance</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Don&apos;t attempt to use the appliance again until it&apos;s been inspected</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Appliances covered */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  We Repair All Major Appliances
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
                      Call Now for Fastest Service
                    </h3>
                    <p className="text-primary-foreground/80 mb-6">
                      Calling directly is the quickest way to check same-day
                      availability.
                    </p>
                    <div className="space-y-3">
                      <Button
                        asChild
                        size="lg"
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                      >
                        <a href={`tel:${companyInfo.phoneClean}`}>
                          <Phone className="h-4 w-4 mr-2" />
                          {companyInfo.phone}
                        </a>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="w-full border-border text-foreground hover:bg-muted"
                      >
                        <Link href="/booking">
                          <Calendar className="h-4 w-4 mr-2" />
                          Book Online
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 space-y-2">
                    <Link
                      href="/diagnostic-fee"
                      className="block text-sm font-medium text-primary hover:underline"
                    >
                      What does a diagnostic visit cost?
                    </Link>
                    <Link
                      href="/faq"
                      className="block text-sm font-medium text-primary hover:underline"
                    >
                      View all FAQs
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
