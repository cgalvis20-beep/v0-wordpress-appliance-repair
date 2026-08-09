import { Metadata } from "next"
import { companyInfo } from "@/lib/data/company-info"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${companyInfo.name}. Read our terms governing appliance repair services in London, St. Thomas, Woodstock, and surrounding areas.`,
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Terms of Service" }]}
            className="text-primary-foreground/70 mb-6"
          />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Terms of Service
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing the {companyInfo.name} website or booking a service appointment, you agree to be bound by these Terms of Service and all applicable Canadian laws. These terms govern all services provided by {companyInfo.name} in London, Saint Thomas, Woodstock, and surrounding areas.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. Diagnostic Services and Fee Waiver
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Diagnostic Fee:</strong> We charge a flat $124 CAD diagnostic fee for every service visit. This ensures our technician can travel to your home, dedicate the necessary time, and comprehensively assess your appliance.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Non-Refundability:</strong> The Diagnostic Fee is non-refundable once the technician has arrived at the service address, regardless of whether the appliance is deemed repairable.</span>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. Customer Obligations
              </h2>
              <p className="text-muted-foreground mb-3">The customer agrees to:</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Ensure an adult (18+) is present for the duration of the appointment.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Provide a safe, clean, and well-lit environment for the technician.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Ensure the appliance is &quot;Readily Accessible.&quot; We will not provide service if the appliance is in a crawl space, attic, or area that poses a safety risk.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Clear all items from and around the appliance prior to the technician&apos;s arrival.</span>
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. Payment and Collections
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Payment for all services and parts is due immediately upon completion of the service call.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Overdue Accounts:</strong> Invoices unpaid after 30 days will accrue interest at 2% per month (26.82% per annum).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Collection Fees:</strong> Unpaid accounts referred to a third-party collection agency will be subject to an additional collection fee of 35% of the outstanding balance, for which the customer is responsible.</span>
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. Limited Warranty
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Labor:</strong> We provide a 90-day warranty on labor performed.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Parts:</strong> Parts are covered by a 120-day warranty unless otherwise specified by the manufacturer.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Exclusions:</strong> This warranty is void if the appliance is moved, misused, or repaired by unauthorized parties. The warranty does not cover &quot;no-fault&quot; issues such as clogs caused by foreign objects or external electrical surges.</span>
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-muted-foreground font-semibold mb-3">
                MY APPLIANCE PRO SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Specific Exclusions:</strong> We are not liable for food spoilage (refrigerators), water damage (washers/dishwashers), or fire damage resulting from lint buildup (dryers).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Property Damage:</strong> We are not liable for damage to floors, walls, or cabinetry caused by the necessary movement of appliances during the repair process.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Monetary Cap:</strong> Our total liability for any claim shall not exceed the total amount paid by the customer for the specific service provided.</span>
                </li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                7. Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada. Any disputes shall be resolved in the courts of Ontario.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                8. Cancellation Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Appointments must be cancelled or rescheduled at least 24 hours in advance. Failure to provide 24 hours&apos; notice will result in a cancellation fee equal to the standard Diagnostic Fee.
              </p>
            </div>

            {/* Contact Section */}
            <div className="mt-12 p-6 bg-muted rounded-xl">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Contact Us
              </h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>{companyInfo.name}</strong></p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href={`tel:${companyInfo.phoneClean}`} className="text-primary hover:underline">
                    {companyInfo.phone}
                  </a>
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
