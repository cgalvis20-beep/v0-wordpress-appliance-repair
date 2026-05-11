import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, Users, Calendar, Award, ArrowRight, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { companyInfo, serviceAreas } from "@/lib/data/company-info"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about MyappliancePro, London's trusted appliance repair service. Licensed technicians, same-day service, and a commitment to customer satisfaction.",
}

const stats = [
  { icon: Users, value: "100+", label: "Happy Customers" },
  { icon: Calendar, value: "10+", label: "Years Experience" },
  { icon: Award, value: "4.9", label: "Star Rating" },
  { icon: Wrench, value: "90-Day", label: "Warranty" },
]

const values = [
  {
    title: "Customer First",
    description:
      "Every decision we make starts with the question: 'Is this best for our customers?' We're committed to providing exceptional service that exceeds expectations.",
  },
  {
    title: "Integrity",
    description:
      "We believe in honest, transparent communication. We'll always tell you exactly what's wrong with your appliance and provide fair, upfront pricing.",
  },
  {
    title: "Excellence",
    description:
      "Our technicians are continuously trained on the latest appliance technologies. We take pride in doing the job right the first time.",
  },
  {
    title: "Reliability",
    description:
      "When we say we'll be there, we'll be there. We understand that your time is valuable and treat every appointment with respect.",
  },
]

export default function AboutPage() {
  return (
    <div className="py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "About Us" }]} />

        {/* Hero section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Your Trusted Appliance Repair Partner
          </h1>
          <p className="text-lg text-muted-foreground text-pretty">
            For over a decade, {companyInfo.name} has been helping homeowners
            throughout Southwestern Ontario keep their appliances running
            smoothly. We combine expert knowledge with genuine care for our
            customers.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center">
              <CardContent className="pt-6">
                <stat.icon className="h-8 w-8 mx-auto text-primary mb-3" />
                <p className="text-3xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {companyInfo.name} was founded with a simple mission: to provide
                London and surrounding areas with honest, reliable appliance
                repair service. What started as a one-person operation has grown
                into a team of skilled technicians serving thousands of
                customers each year.
              </p>
              <p>
                We understand how frustrating it is when an appliance breaks
                down. That&apos;s why we&apos;ve built our business around getting your
                life back to normal as quickly as possible. With same-day
                service, upfront pricing, and a commitment to getting it right
                the first time, we&apos;ve earned the trust of homeowners across
                Southwestern Ontario.
              </p>
              <p>
                Today, we&apos;re proud to be one of the region&apos;s most trusted
                appliance repair services. But we haven&apos;t forgotten our roots.
                Every customer is treated like a neighbor, and every repair is
                done as if it were in our own home.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 via-muted to-accent/20 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground text-3xl font-bold mx-auto mb-4">
                  M
                </div>
                <p className="text-xl font-semibold text-foreground">
                  {companyInfo.name}
                </p>
                <p className="text-muted-foreground">Est. 2014</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our values */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <Card key={value.title}>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why choose us */}
        <div className="bg-muted/50 rounded-2xl p-8 lg:p-12 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Why Customers Choose Us
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Same-day service available",
              "Licensed and insured technicians",
              "Upfront, transparent pricing",
              "90-day warranty on all repairs",
              "All major brands serviced",
              "Locally owned and operated",
              "Background-checked technicians",
              "Satisfaction guaranteed",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Service areas */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Proudly Serving
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-primary text-primary-foreground rounded-2xl p-8 lg:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Experience the {companyInfo.name} difference. Book your repair
            appointment today.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Link href="/booking">
              Book Your Repair
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
