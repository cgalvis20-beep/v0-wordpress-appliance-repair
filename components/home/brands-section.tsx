import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { brands } from "@/lib/data/brands"

export function BrandsSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Brands We Service
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Our technicians are trained to repair all major appliance brands. No matter what brand you own, we can fix it.
          </p>
        </div>

        {/* Brand logos grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8">
          {brands.map((brand) => (
            <Link
              key={brand.slug}
              href={`/brands/${brand.slug}`}
              className="group flex items-center justify-center p-6 lg:p-8 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="text-center">
                <span className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {brand.name}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link href="/brands">
              View All Brands
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
