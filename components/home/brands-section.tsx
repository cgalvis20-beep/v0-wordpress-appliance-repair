"use client"

import { useState, useCallback, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { brands } from "@/lib/data/brands"

export function BrandsSection() {
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

        {/* Brand carousel */}
        <div className="relative max-w-3xl mx-auto">
          {/* Navigation arrows */}
          <button
            type="button"
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 h-10 w-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all cursor-pointer"
            aria-label="Previous brands"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 h-10 w-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all cursor-pointer"
            aria-label="Next brands"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Sliding container */}
          <div className="mx-8" style={{ overflow: "hidden" }}>
            <div
              style={{ 
                display: "flex",
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: "transform 500ms ease-in-out"
              }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => {
                const pageStart = pageIndex * brandsPerPage
                const pageBrands = brands.slice(pageStart, pageStart + brandsPerPage)
                return (
                  <div
                    key={pageIndex}
                    style={{ 
                      minWidth: "100%",
                      flexShrink: 0,
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: "1.5rem",
                      padding: "0 0.25rem"
                    }}
                  >
                    {pageBrands.map((brand) => (
                      <div
                        key={brand.slug}
                        className="flex items-center justify-center p-8 lg:p-12 rounded-xl border border-border bg-card"
                      >
                        <span className="text-2xl lg:text-3xl font-bold text-foreground">
                          {brand.name}
                        </span>
                      </div>
                    ))}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  index === currentIndex
                    ? "w-6 bg-primary"
                    : "w-2 bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
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
