import Link from "next/link"
import { Phone, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { companyInfo } from "@/lib/data/company-info"

export function CTABanner() {
  return (
    <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">
            Ready to Get Your Appliance Fixed?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto text-pretty">
            Don&apos;t let a broken appliance disrupt your life. Book your repair appointment today and experience the My Appliance Pro difference.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8"
            >
              <Link href="/booking">
                <Calendar className="h-5 w-5 mr-2" />
                Book Online Now
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-foreground/30 bg-background text-foreground hover:bg-background/90 text-base px-8"
            >
              <a href={`tel:${companyInfo.phoneClean}`}>
                <Phone className="h-5 w-5 mr-2" />
                {companyInfo.phone}
              </a>
            </Button>
          </div>

          {/* Hours */}
          <p className="mt-6 text-sm text-primary-foreground/60">
            Available Mon-Fri {companyInfo.hours.weekdays} | Sat{" "}
            {companyInfo.hours.saturday} | Sun {companyInfo.hours.sunday}
          </p>
        </div>
      </div>
    </section>
  )
}
