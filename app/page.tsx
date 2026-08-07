import type { Metadata } from "next"
import { HeroSection } from "@/components/home/hero-section"
import { TrustBadges } from "@/components/home/trust-badges"
import { ServicesGrid } from "@/components/home/services-grid"
import { HowItWorks } from "@/components/home/how-it-works"
import { ServiceAreas } from "@/components/home/service-areas"
import { TestimonialsCarousel } from "@/components/home/testimonials-carousel"
import { BrandsSection } from "@/components/home/brands-section"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { CTABanner } from "@/components/home/cta-banner"
import { companyInfo } from "@/lib/data/company-info"

export const metadata: Metadata = {
  description: "Need fast appliance repair in London, ON? My Appliance Pro offers expert, same-day service for all major brands. Licensed, insured & trusted locally. Book today!",
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://myappliancepro.ca",
            name: companyInfo.name,
            image: "https://myappliancepro.ca/logo.png",
            description: companyInfo.description,
            telephone: companyInfo.phone,
            email: companyInfo.email,
            address: {
              "@type": "PostalAddress",
              addressLocality: companyInfo.address.city,
              addressRegion: companyInfo.address.province,
              postalCode: companyInfo.address.postalCode,
              addressCountry: companyInfo.address.country,
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 42.9849,
              longitude: -81.2453,
            },
            url: "https://myappliancepro.ca",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:30",
                closes: "18:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "09:00",
                closes: "14:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Sunday",
                opens: "10:00",
                closes: "13:00",
              },
            ],
            priceRange: "$$",
            areaServed: [
              "London, ON",
              "St. Thomas, ON",
              "Woodstock, ON",
              "Strathroy, ON",
              "Ingersoll, ON",
              "Tillsonburg, ON",
              "Aylmer, ON",
              "Dorchester, ON",
            ],
            serviceType: [
              "Refrigerator Repair",
              "Washer Repair",
              "Dryer Repair",
              "Dishwasher Repair",
              "Oven Repair",
              "Stove Repair",
              "Range Repair",
              "Freezer Repair",
              "Microwave Repair",
              "Cooktop Repair",
              "Range Hood Repair",
            ],
            // Sourced from the business's Google Business Profile.
            // Last verified: 2026-08-06. Update this figure whenever it's
            // rechecked — do not let it drift silently out of sync with
            // the live listing (see SEO audit finding #1, 2026-08-06).
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              reviewCount: "9",
            },
          }),
        }}
      />

      <HeroSection />
      <TrustBadges />
      <ServicesGrid />
      <HowItWorks />
      <ServiceAreas />
      <TestimonialsCarousel />
      <BrandsSection />
      <WhyChooseUs />
      <CTABanner />
    </>
  )
}
