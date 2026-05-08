import { Phone, Wrench, CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: Phone,
    title: "Book Your Appointment",
    description:
      "Call us or book online. We offer same-day appointments and flexible scheduling to fit your busy life.",
  },
  {
    number: "2",
    icon: Wrench,
    title: "Expert Diagnosis & Repair",
    description:
      "Our certified technician arrives on time, diagnoses the problem, and provides upfront pricing before any work begins.",
  },
  {
    number: "3",
    icon: CheckCircle2,
    title: "Enjoy Your Working Appliance",
    description:
      "Most repairs are completed on the first visit. All work is backed by our 90-day parts and labor warranty.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Getting your appliance repaired has never been easier. Here&apos;s our simple 3-step process.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {/* Connector line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-border" />
              )}

              {/* Icon */}
              <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                <step.icon className="h-8 w-8" />
                <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-accent-foreground text-sm font-bold">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
