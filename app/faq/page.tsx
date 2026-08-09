import type { Metadata } from "next"
import Link from "next/link"
import { Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { FAQAccordion } from "@/components/shared/faq-accordion"
import { companyInfo } from "@/lib/data/company-info"

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about our appliance repair services, pricing, warranty, and more. My Appliance Pro - London's trusted repair service.",
  alternates: {
    canonical: '/faq',
  },
}

const generalFAQs = [
  {
    question: "What areas do you serve?",
    answer:
      "We provide appliance repair services throughout Southwestern Ontario, including London, St. Thomas, Woodstock, Strathroy, Ingersoll, Tillsonburg, Aylmer, and Dorchester.",
  },
  {
    question: "Do you offer same-day service?",
    answer:
      "Yes! We offer same-day service for most appointments. Call us in the morning, and we can often have a technician at your home the same day. Same-day availability may vary based on demand.",
  },
  {
    question: "What brands do you service?",
    answer:
      "We service all major appliance brands including Samsung, LG, Whirlpool, GE, Frigidaire, Maytag, KitchenAid, Bosch, and many more. If you don't see your brand listed, give us a call - we likely can help!",
  },
  {
    question: "What appliances do you repair?",
    answer:
      "We repair all major household appliances including refrigerators, washers, dryers, dishwashers, ovens, stoves, ranges, freezers, microwaves, cooktops, and range hoods.",
  },
]

const pricingFAQs = [
  {
    question: "How much does appliance repair cost?",
    answer:
      "Repair costs vary depending on the appliance type and the specific issue. We charge a diagnostic fee of $124 CAD. After diagnosis, we provide an upfront quote so you know exactly what to expect before any work begins.",
  },
  {
    question: "Do you charge for estimates?",
    answer:
      "We charge a $124 CAD diagnostic fee for a technician to come to your home and accurately diagnose the problem. While we are happy to provide free phone estimates, an in-person diagnosis is required to give you a precise repair quote.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, all major credit cards (Visa, MasterCard, American Express), debit cards, and e-transfer. Payment is due upon completion of the repair.",
  },
  {
    question: "Do you offer any discounts?",
    answer:
      "We offer discounts for seniors (65+) and military personnel. We also occasionally run seasonal promotions. Ask our customer service team about current offers when you book your appointment.",
  },
]

const serviceFAQs = [
  {
    question: "How long does a typical repair take?",
    answer:
      "Most repairs are completed within 1-2 hours on the first visit. Complex repairs or those requiring parts may take longer. If parts need to be ordered, we'll schedule a follow-up appointment as soon as they arrive.",
  },
  {
    question: "Do your technicians carry parts?",
    answer:
      "Yes, our service vehicles are stocked with common replacement parts. This allows us to complete most repairs on the first visit. For less common parts, we can usually obtain them within 1-3 business days.",
  },
  {
    question: "What if the repair doesn't work?",
    answer:
      "All our repairs come with a 90-day warranty on parts and labor. If the same issue recurs within 90 days, we'll return and fix it at no additional charge.",
  },
  {
    question: "Should I repair or replace my appliance?",
    answer:
      "As a general rule, if your appliance is less than half its expected lifespan and the repair cost is less than 50% of a new appliance, repair is usually the better option. Our technicians can help you make this decision based on your specific situation.",
  },
]

const bookingFAQs = [
  {
    question: "How do I schedule an appointment?",
    answer:
      "You can book an appointment online through our website, call us directly, or send us an email. Online booking is available 24/7, and our phone lines are open during business hours.",
  },
  {
    question: "What if I need to reschedule?",
    answer:
      "We understand that plans change. Please give us at least 24 hours notice if you need to reschedule. You can call us or use our online booking system to change your appointment.",
  },
  {
    question: "Do I need to be home for the repair?",
    answer:
      "Yes, an adult (18+) must be present during the appointment to authorize the repair and make payment. The homeowner doesn't need to be present, but someone authorized to make decisions about the repair should be.",
  },
  {
    question: "What should I do to prepare for the appointment?",
    answer:
      "Please ensure clear access to the appliance. Remove any items stored on top of or around the appliance. If possible, have your appliance's model number ready (usually found on a sticker inside the door or on the back).",
  },
]

export default function FAQPage() {
  const allFAQs = [
    ...generalFAQs,
    ...pricingFAQs,
    ...serviceFAQs,
    ...bookingFAQs,
  ]

  return (
    <>
      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: allFAQs.map((faq) => ({
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
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "FAQ" }]} />

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our appliance repair
              services.
            </p>
          </div>

          {/* FAQ sections */}
          <div className="space-y-12">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                General Questions
              </h2>
              <FAQAccordion faqs={generalFAQs} />
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Pricing &amp; Payment
              </h2>
              <FAQAccordion faqs={pricingFAQs} />
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Service &amp; Repairs
              </h2>
              <FAQAccordion faqs={serviceFAQs} />
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Booking &amp; Appointments
              </h2>
              <FAQAccordion faqs={bookingFAQs} />
            </section>
          </div>

          {/* Still have questions */}
          <div className="mt-16 text-center bg-muted/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-6">
              Can&apos;t find the answer you&apos;re looking for? Our team is here to
              help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild variant="outline">
                <a href={`tel:${companyInfo.phoneClean}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  {companyInfo.phone}
                </a>
              </Button>
              <Button asChild>
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
