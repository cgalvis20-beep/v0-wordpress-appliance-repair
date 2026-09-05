import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Calendar, Star, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/shared/breadcrumbs"
import { testimonials } from "@/lib/data/testimonials"
import { companyInfo } from "@/lib/data/company-info"

const AVERAGE_RATING = 5.0
const TOTAL_REVIEW_COUNT = 13 // includes 2 five-star ratings on Google with no written text

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "See real customer reviews for My Appliance Pro — 5.0 stars from verified Google reviews. Read what homeowners across London and area say about our service.",
  alternates: {
    canonical: "/reviews",
  },
}

export default function ReviewsPage() {
  return (
    <>
      {/* JSON-LD Review + AggregateRating Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: companyInfo.name,
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: AVERAGE_RATING.toFixed(1),
              reviewCount: TOTAL_REVIEW_COUNT,
            },
            review: testimonials.map((t) => ({
              "@type": "Review",
              author: {
                "@type": "Person",
                name: t.name,
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: t.rating,
                bestRating: 5,
              },
              reviewBody: t.text,
            })),
          }),
        }}
      />

      <div className="py-8 lg:py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Reviews" }]} />

          {/* Direct answer, up front */}
          <div className="mb-10 text-center">
            <div className="flex justify-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-7 w-7 fill-accent text-accent" />
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              5.0 Stars from {TOTAL_REVIEW_COUNT} Google Reviews
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These are real reviews from real customers, pulled directly from
              our Google Business Profile. {testimonials.length} of the{" "}
              {TOTAL_REVIEW_COUNT} include written feedback, shown below; the
              rest are five-star ratings without a written comment.
            </p>
            <div className="mt-6">
              <Button asChild variant="outline">
                <a
                  href={companyInfo.social.google}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Us on Google
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>

          {/* Review grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id}>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed mb-4">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="pt-8 pb-8 text-center">
              <h2 className="text-2xl font-semibold mb-2">
                Ready to Experience It Yourself?
              </h2>
              <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
                Book your appointment today and join our customers across
                London and the surrounding area.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <Link href="/booking">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Online
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <a href={`tel:${companyInfo.phoneClean}`}>
                    <Phone className="h-4 w-4 mr-2" />
                    {companyInfo.phone}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
