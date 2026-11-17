export interface ServiceCityPage {
  serviceSlug: string
  citySlug: string
  lastUpdated: string
  metaTitle: string
  metaDescription: string
  intro: string
  localNote: string
  faqs: { question: string; answer: string }[]
}

// Each entry here needs genuinely unique content — a real intro, a specific
// local detail, and dedicated FAQs — not just service + city facts glued
// together. Reusing generic service/city data on top of this is fine; this
// file is what keeps these pages from reading as thin or templated.
export const serviceCityPages: ServiceCityPage[] = [
  {
    serviceSlug: "refrigerator-repair",
    citySlug: "st-thomas",
    lastUpdated: "2026-08-11",
    metaTitle: "Refrigerator Repair St. Thomas ON",
    metaDescription:
      "Fast, reliable refrigerator repair in St. Thomas, Ontario. We fix cooling issues, ice makers, and more for all major brands. Book same-day service today.",
    intro:
      "When a refrigerator stops cooling in St. Thomas, spoiled groceries and a warm kitchen aren't something that can wait until next week. We send technicians out to St. Thomas regularly, from Downtown St. Thomas out to the Talbot and Port Stanley Road areas, so a same-day appointment is usually within reach.",
    localNote:
      "Our technicians know the drive to St. Thomas well and build it into daily scheduling rather than treating it as a special trip, which is part of why we can usually offer faster turnaround here than a technician traveling in from further away.",
    faqs: [
      {
        question: "How fast can you get a technician to St. Thomas for a refrigerator repair?",
        answer:
          "We schedule regular appointments throughout St. Thomas, and same-day service is usually available if you call before early afternoon. We'll confirm a specific arrival window when you book.",
      },
      {
        question: "Do you service refrigerators in older St. Thomas homes?",
        answer:
          "Yes. We regularly work on the older electrical setups and tighter kitchen layouts found in St. Thomas's established neighborhoods, and we'll flag anything unrelated to the appliance itself, like wiring concerns, if we spot it.",
      },
    ],
  },
  {
    serviceSlug: "washer-repair",
    citySlug: "st-thomas",
    lastUpdated: "2026-08-11",
    metaTitle: "Washing Machine Repair St. Thomas ON",
    metaDescription:
      "Expert washer repair in St. Thomas, Ontario. We fix leaks, drainage issues, and spin problems for all brands. Same-day appointments available.",
    intro:
      "A washer that won't drain or spin is a bigger disruption than most appliance problems, since laundry doesn't wait. We provide washer repair throughout St. Thomas, from the North End down through Southdale, with technicians who carry the parts needed for most common repairs on the first visit.",
    localNote:
      "Many St. Thomas homes we visit have washers tucked into smaller utility spaces or basements, so our technicians come prepared to work efficiently in tight spots without turning a repair into an all-day project.",
    faqs: [
      {
        question: "Can you repair a leaking washer in St. Thomas the same day I call?",
        answer:
          "In most cases, yes. Leaks are one of the most common calls we get in St. Thomas, and our technicians usually carry the parts needed to fix common causes, like a worn door seal or loose hose connection, on the first visit.",
      },
      {
        question: "Do you repair stackable washers common in St. Thomas apartments and townhomes?",
        answer:
          "Yes, we service stackable, front-load, and top-load washers, and we're experienced working in the smaller laundry closets typical of St. Thomas's townhome and apartment units.",
      },
    ],
  }

]

export function getServiceCityPage(
  serviceSlug: string,
  citySlug: string
): ServiceCityPage | undefined {
  return serviceCityPages.find(
    (p) => p.serviceSlug === serviceSlug && p.citySlug === citySlug
  )
}

export function getCitySlugsForService(serviceSlug: string): string[] {
  return serviceCityPages
    .filter((p) => p.serviceSlug === serviceSlug)
    .map((p) => p.citySlug)
}

export function getServiceSlugsForCity(citySlug: string): string[] {
  return serviceCityPages
    .filter((p) => p.citySlug === citySlug)
    .map((p) => p.serviceSlug)
}
