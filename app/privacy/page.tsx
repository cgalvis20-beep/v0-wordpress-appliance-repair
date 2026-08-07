import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { companyInfo } from "@/lib/data/company-info"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${companyInfo.name}. Learn how we collect, use, and protect your personal information.`,
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Privacy Policy" }]}
            className="mb-4 text-primary-foreground/70"
          />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Last Updated: May 11, 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {companyInfo.name} is committed to maintaining the accuracy, confidentiality, and security of your personal information. This Privacy Policy describes how we collect, use, and disclose personal information in accordance with the Personal Information Protection and Electronic Documents Act (PIPEDA) and Ontario&apos;s privacy standards.
            </p>

            {/* Section 1 */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. Accountability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {companyInfo.name} is responsible for personal information under its control. We have designated a Privacy Officer who is accountable for our compliance with this Policy.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. Information We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To provide professional appliance services, we collect:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">Contact Information:</strong> Name, service address, telephone number, and email address.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">Appliance Data:</strong> Make, model, serial number, and history of your household appliances.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">Payment Details:</strong> Credit card or banking information for processing payments via secure, PCI-compliant third-party processors.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">Technical Data:</strong> IP address, browser type, and usage patterns collected via cookies when you visit our website.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">Media:</strong> Photos or videos of appliances taken by technicians during service for quality control and documentation.</span>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. Purposes for Collection
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information for the following purposes:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>To schedule and perform appliance repair, maintenance, and installation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>To process payments and manage accounts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>To provide warranty support and service reminders.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>To comply with safety regulations and legal obligations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">Communication:</strong> We send transactional messages (appointment confirmations, reminders) under &quot;implied consent&quot; per CASL. Promotional messages are sent only with your express &quot;opt-in&quot; consent.</span>
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. Consent
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By using our website or booking a service, you consent to the collection and use of your information as outlined here. You may withdraw consent for marketing communications at any time via the &quot;unsubscribe&quot; link in our emails or by contacting us directly.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. Disclosure to Third Parties
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {companyInfo.name} does not sell or rent customer lists. We share data only with:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Technicians/Staff required to fulfill the service.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Parts manufacturers (when necessary for warranty claims).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Service providers (e.g., Google Calendar, Amelia Booking, payment processors) who are contractually bound to protect your data.</span>
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. Data Retention and Security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain personal information only as long as necessary for business or legal purposes (typically 7 years for financial records). We employ physical, technological, and administrative safeguards, including HTTPS encryption and secure server protocols, to prevent unauthorized access.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                7. Your Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to access the personal information we hold about you and request corrections. To exercise these rights, contact our Privacy Officer at the email address provided below.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                8. Contact Information
              </h2>
              <div className="bg-muted/50 rounded-xl p-6 border border-border">
                <p className="text-foreground font-semibold mb-2">
                  Privacy Officer
                </p>
                <p className="text-foreground font-semibold mb-4">
                  {companyInfo.name}
                </p>
                <p className="text-muted-foreground mb-2">
                  <strong className="text-foreground">Email Subject:</strong> Privacy Information Request – [Customer Name]
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-primary hover:underline"
                  >
                    {companyInfo.email}
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
