import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { ContactForm } from "@/components/shared/contact-form"
import { companyInfo } from "@/lib/data/company-info"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact MyappliancePro for appliance repair in London and surrounding areas. Call, email, or fill out our contact form. Same-day service available.",
}

export default function ContactPage() {
  return (
    <div className="py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contact Us" }]} />

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <h2 className="text-lg text-muted-foreground font-normal">
            Have a question or ready to schedule your repair? We&apos;re here to
            help. Reach out to us using any of the methods below.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact info cards */}
          <div className="space-y-6">
            {/* Phone */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Phone className="h-5 w-5 text-primary" />
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={`tel:${companyInfo.phoneClean}`}
                  className="text-xl font-semibold text-primary hover:underline"
                >
                  {companyInfo.phone}
                </a>
                <p className="text-sm text-muted-foreground mt-1">
                  Same-day service available
                </p>
              </CardContent>
            </Card>

            {/* Email */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Mail className="h-5 w-5 text-primary" />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-primary hover:underline break-all"
                >
                  {companyInfo.email}
                </a>
                <p className="text-sm text-muted-foreground mt-1">
                  We respond within 24 hours
                </p>
              </CardContent>
            </Card>

            {/* Address */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <address className="not-italic text-foreground">
                  London, Ontario. N6C 5H5
                </address>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Clock className="h-5 w-5 text-primary" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Mon - Fri</span>
                  <span className="text-foreground">
                    {companyInfo.hours.weekdays}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="text-foreground">
                    {companyInfo.hours.saturday}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-foreground">
                    {companyInfo.hours.sunday}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Book online CTA */}
            <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/booking">
                <Calendar className="h-5 w-5 mr-2" />
                Book Online Instead
              </Link>
            </Button>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
