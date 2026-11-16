export interface City {
  slug: string
  lastUpdated: string
  name: string
  metaTitle: string
  metaDescription: string
  description: string
  neighborhoods: string[]
  highlights: string[]
}

export const cities: City[] = [
  {
    slug: "london",
    lastUpdated: "2026-05-11",
    name: "London",
    metaTitle: "Appliance Repair London ON",
    metaDescription:
      "Professional appliance repair in London, Ontario. Same-day service for refrigerators, washers, dryers, and more. Licensed technicians. Call now!",
    description:
      "My Appliance Pro is London's trusted appliance repair service. Our certified technicians provide fast, reliable repairs for all major appliances in London and surrounding neighborhoods. With same-day service available and a 90-day warranty on all repairs, we're the go-to choice for London homeowners.",
    neighborhoods: [
      "Downtown London",
      "Old North",
      "Old South",
      "Wortley Village",
      "Byron",
      "Westmount",
      "Masonville",
      "Oakridge",
      "White Oaks",
      "Lambeth",
      "Pond Mills",
      "Argyle",
    ],
    highlights: [
      "Serving London for over 10 years",
      "Same-day service available",
      "All major brands serviced",
      "Licensed and insured technicians",
    ],
  },
  {
    slug: "st-thomas",
    lastUpdated: "2026-05-11",
    name: "St. Thomas",
    metaTitle: "Appliance Repair St. Thomas ON",
    metaDescription:
      "Expert appliance repair in St. Thomas, Ontario. We fix refrigerators, washers, dryers, dishwashers. Same-day appointments. Call today!",
    description:
      "St. Thomas residents trust My Appliance Pro for all their appliance repair needs. Our technicians serve the entire St. Thomas area, providing prompt and professional service for all major household appliances. We understand how important working appliances are to your daily life.",
    neighborhoods: [
      "Downtown St. Thomas",
      "Elgin Centre",
      "Southdale",
      "North End",
      "Talbot",
      "Port Stanley Road Area",
    ],
    highlights: [
      "Fast service to St. Thomas area",
      "All major appliances repaired",
      "Competitive pricing",
      "90-day warranty on repairs",
    ],
  },
  {
    slug: "dorchester",
    lastUpdated: "2026-05-11",
    name: "Dorchester",
    metaTitle: "Appliance Repair Dorchester ON",
    metaDescription:
      "Local appliance repair in Dorchester, Ontario. Fast, reliable service for all major appliances. Same-day appointments. Call now!",
    description:
      "My Appliance Pro serves Dorchester, Ontario for refrigerator, washer, dryer, dishwasher and oven repair, with same-day service available and a 90-day warranty on repairs.",
    neighborhoods: ["Dorchester Village"],
    highlights: [
      "Local to Dorchester",
      "Fast response times",
      "All appliances repaired",
      "Trusted service",
    ],
  },
]

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug)
}

export function getAllCitySlugs(): string[] {
  return cities.map((city) => city.slug)
}
