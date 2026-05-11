"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { brands } from "@/lib/data/brands"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, ChevronLeft, ChevronRight } from "lucide-react"

export default function BrandsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const brandsPerPage = 2
  const totalPages = Math.ceil(brands.length / brandsPerPage)

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalPages)
  }, [totalPages])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }, [totalPages])

  // Auto-advance every 4 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 4000)
    return () => clearInterval(interval)
  }, [goToNext])

  // Get visible brands for current page
  const startIndex = currentIndex * brandsPerPage
  const visibleBrands = brands.slice(startIndex, startIndex + brandsPerPage)

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

      {/* Brands Carousel */}
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

          {/* Carousel */}
          <div className="relative mx-auto max-w-2xl">
            {/* Navigation arrows */}
            <button
              type="button"
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 h-12 w-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
              aria-label="Previous brands"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 h-12 w-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
              aria-label="Next brands"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Brand cards - showing 2 at a time */}
            <div className="grid grid-cols-2 gap-6">
              {visibleBrands.map((brand) => (
                <Card key={brand.slug} className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                  <CardContent className="flex h-full flex-col items-center p-8 text-center">
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
                      <Wrench className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-foreground">
                      {brand.name}
                    </h3>
                    <p className="flex-1 text-sm text-muted-foreground">
                      {brand.tagline}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-3 bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
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
