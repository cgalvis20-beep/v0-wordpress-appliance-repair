import type { Metadata } from "next"
import Link from "next/link"
import { brands } from "@/lib/data/brands"
import { companyInfo } from "@/lib/data/company-info"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Brands We Service",
  description: `${companyInfo.name} repairs all major appliance brands including Samsung, LG, Whirlpool, GE, Frigidaire, Bosch, Maytag, and KitchenAid. Expert technicians for every brand.`,
}

export default function BrandsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[{ label: "Brands We Service" }]}
            className="mb-6 text-primary-foreground/80"
          />
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground lg:text-5xl">
              Brands We Service
            </h1>
            <p className="text-lg text-primary-foreground/90 lg:text-xl">
              Our certified technicians are trained to repair all major appliance brands. 
              From Samsung to Whirlpool, we have the expertise to fix your appliances right.
            </p>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Expert Repairs for Every Brand
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We service all major appliance manufacturers. Select a brand below to learn more 
              about our specialized repair services.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {brands.map((brand) => (
              <Link key={brand.slug} href={`/brands/${brand.slug}`}>
                <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                  <CardContent className="flex h-full flex-col items-center p-6 text-center">
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
                      <Wrench className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary">
                      {brand.name}
                    </h3>
                    <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-2">
                      {brand.tagline}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Brand Repairs */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-foreground">
              Why Choose Us for Brand-Specific Repairs?
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-lg bg-card p-6">
                <h3 className="mb-2 font-semibold text-foreground">Factory-Trained</h3>
                <p className="text-sm text-muted-foreground">
                  Our technicians receive ongoing training for all major brands
                </p>
              </div>
              <div className="rounded-lg bg-card p-6">
                <h3 className="mb-2 font-semibold text-foreground">Genuine Parts</h3>
                <p className="text-sm text-muted-foreground">
                  We use OEM parts to maintain your appliance warranty
                </p>
              </div>
              <div className="rounded-lg bg-card p-6">
                <h3 className="mb-2 font-semibold text-foreground">Brand Expertise</h3>
                <p className="text-sm text-muted-foreground">
                  Deep knowledge of brand-specific issues and solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            Need Your Appliance Repaired?
          </h2>
          <p className="mb-8 text-muted-foreground">
            No matter the brand, we can help. Book your service appointment today.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/booking">Book a Repair</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
