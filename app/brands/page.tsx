import type { Metadata } from "next"
import { BrandsCarousel } from "@/components/brands/brands-carousel"

export const metadata: Metadata = {
  title: "Brands We Repair",
  description:
    "Appliance repair for Samsung, LG, Whirlpool, GE, Frigidaire, Maytag, KitchenAid and Bosch in London, ON. Same-day service from certified technicians.",
  alternates: { canonical: "https://myappliancepro.ca/brands" },
}

export default function BrandsPage() {
  return <BrandsCarousel />
}
