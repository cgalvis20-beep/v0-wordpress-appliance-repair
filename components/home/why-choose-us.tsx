import {
  Clock,
  DollarSign,
  Shield,
  Award,
  Truck,
  HeadphonesIcon,
} from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Same-Day Service",
    description:
      "We know broken appliances can't wait. That's why we offer same-day appointments whenever possible.",
  },
  {
    icon: DollarSign,
    title: "Upfront Pricing",
    description:
      "No surprises. We provide a detailed quote before any work begins, so you know exactly what to expect.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description:
      "Our technicians are fully licensed, insured, and background-checked for your peace of mind.",
  },
  {
    icon: Award,
    title: "90-Day Warranty",
    description:
      "We stand behind our work with a 90-day warranty on all repairs.",
  },
  {
    icon: Truck,
    title: "Fully-Stocked Trucks",
    description:
      "Our service vehicles carry common parts, allowing us to complete most repairs on the first visit.",
  },
  {
    icon: HeadphonesIcon,
    title: "Excellent Support",
    description:
      "Have questions? Our friendly customer service team is here to help before, during, and after your repair.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Why Choose My Appliance Pro?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            We&apos;re committed to providing the best appliance repair experience. Here&apos;s what sets us apart.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
