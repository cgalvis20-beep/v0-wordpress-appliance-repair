export interface City {
  slug: string
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
    name: "London",
    metaTitle: "Appliance Repair London ON | Same-Day Service | MyappliancePro",
    metaDescription:
      "Professional appliance repair in London, Ontario. Same-day service for refrigerators, washers, dryers, and more. Licensed technicians. Call now!",
    description:
      "MyappliancePro is London's trusted appliance repair service. Our certified technicians provide fast, reliable repairs for all major appliances in London and surrounding neighborhoods. With same-day service available and a 90-day warranty on all repairs, we're the go-to choice for London homeowners.",
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
    name: "St. Thomas",
    metaTitle: "Appliance Repair St. Thomas ON | Fast Service | MyappliancePro",
    metaDescription:
      "Expert appliance repair in St. Thomas, Ontario. We fix refrigerators, washers, dryers, dishwashers. Same-day appointments. Call today!",
    description:
      "St. Thomas residents trust MyappliancePro for all their appliance repair needs. Our technicians serve the entire St. Thomas area, providing prompt and professional service for all major household appliances. We understand how important working appliances are to your daily life.",
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
    slug: "woodstock",
    name: "Woodstock",
    metaTitle: "Appliance Repair Woodstock ON | Expert Service | MyappliancePro",
    metaDescription:
      "Professional appliance repair in Woodstock, Ontario. Refrigerator, washer, dryer repair and more. Same-day service. Call MyappliancePro!",
    description:
      "Woodstock homeowners choose MyappliancePro for dependable appliance repair service. Our experienced technicians travel to Woodstock daily, bringing expert repair services right to your door. From refrigerators to dishwashers, we fix them all.",
    neighborhoods: [
      "Downtown Woodstock",
      "North End",
      "South End",
      "East End",
      "West End",
      "Collegeside",
    ],
    highlights: [
      "Regular service to Woodstock",
      "All brands and appliances",
      "Upfront pricing",
      "Satisfaction guaranteed",
    ],
  },
  {
    slug: "strathroy",
    name: "Strathroy",
    metaTitle: "Appliance Repair Strathroy ON | Same-Day | MyappliancePro",
    metaDescription:
      "Reliable appliance repair in Strathroy, Ontario. Fast service for all major appliances. Licensed technicians. Call for same-day service!",
    description:
      "Strathroy residents rely on MyappliancePro for prompt, professional appliance repair. We provide comprehensive repair services for all major household appliances, backed by our 90-day warranty and satisfaction guarantee.",
    neighborhoods: [
      "Downtown Strathroy",
      "North Strathroy",
      "South Strathroy",
      "Strathroy Industrial",
      "Mount Brydges Area",
    ],
    highlights: [
      "Serving Strathroy community",
      "Quick response times",
      "All major brands",
      "Expert technicians",
    ],
  },
  {
    slug: "ingersoll",
    name: "Ingersoll",
    metaTitle: "Appliance Repair Ingersoll ON | All Brands | MyappliancePro",
    metaDescription:
      "Expert appliance repair in Ingersoll, Ontario. We service all major brands and appliances. Same-day appointments available. Call now!",
    description:
      "Ingersoll homeowners trust MyappliancePro for quality appliance repair service. Our technicians bring years of experience to every job, ensuring your appliances are repaired correctly the first time. We service all major brands and offer competitive pricing.",
    neighborhoods: [
      "Downtown Ingersoll",
      "North Ingersoll",
      "South Ingersoll",
      "Canterbury Area",
      "Industrial Road Area",
    ],
    highlights: [
      "Trusted by Ingersoll families",
      "Same-day service available",
      "90-day warranty",
      "All appliances serviced",
    ],
  },
  {
    slug: "tillsonburg",
    name: "Tillsonburg",
    metaTitle: "Appliance Repair Tillsonburg ON | Fast Service | MyappliancePro",
    metaDescription:
      "Professional appliance repair in Tillsonburg, Ontario. Refrigerators, washers, dryers, and more. Quick service. Call MyappliancePro!",
    description:
      "Tillsonburg residents choose MyappliancePro for reliable appliance repair service. We understand the importance of working appliances and strive to provide same-day service whenever possible. Our technicians are licensed, insured, and committed to quality.",
    neighborhoods: [
      "Downtown Tillsonburg",
      "North End",
      "South End",
      "Rolph Street Area",
      "Broadway Area",
    ],
    highlights: [
      "Regular service to Tillsonburg",
      "Affordable pricing",
      "All major appliances",
      "Licensed technicians",
    ],
  },
  {
    slug: "aylmer",
    name: "Aylmer",
    metaTitle: "Appliance Repair Aylmer ON | Expert Service | MyappliancePro",
    metaDescription:
      "Reliable appliance repair in Aylmer, Ontario. We fix all major appliances and brands. Same-day service available. Call today!",
    description:
      "Aylmer homeowners depend on MyappliancePro for expert appliance repair. We bring professional service to the Aylmer community, handling repairs for all major household appliances. Our commitment to quality and customer satisfaction sets us apart.",
    neighborhoods: [
      "Downtown Aylmer",
      "North Aylmer",
      "South Aylmer",
      "Talbot Street Area",
      "John Street Area",
    ],
    highlights: [
      "Serving Aylmer area",
      "Quick turnaround",
      "All brands serviced",
      "Satisfaction guaranteed",
    ],
  },
  {
    slug: "dorchester",
    name: "Dorchester",
    metaTitle: "Appliance Repair Dorchester ON | Local Service | MyappliancePro",
    metaDescription:
      "Local appliance repair in Dorchester, Ontario. Fast, reliable service for all major appliances. Same-day appointments. Call now!",
    description:
      "Dorchester residents trust MyappliancePro for local, reliable appliance repair service. We serve the Dorchester community with the same commitment to quality and customer satisfaction that has made us the region's preferred appliance repair service.",
    neighborhoods: [
      "Dorchester Village",
      "Hamilton Road Area",
      "Belmont Area",
      "Harrietsville Area",
    ],
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
