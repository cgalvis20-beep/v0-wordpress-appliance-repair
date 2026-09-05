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
    metaTitle: "Refrigerator Repair St. Thomas ON | Same-Day Service",
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
  },
  {
    serviceSlug: "dryer-repair",
    citySlug: "woodstock",
    lastUpdated: "2026-08-11",
    metaTitle: "Dryer Repair Woodstock ON | Fast Service",
    metaDescription:
      "Professional dryer repair in Woodstock, Ontario. We fix heating issues, drum problems, and vent blockages. Same-day appointments for all brands.",
    intro:
      "A dryer that won't heat, or takes multiple cycles to dry a single load, usually points to a specific, fixable problem rather than a sign it's time to replace the unit. We repair dryers throughout Woodstock, from downtown out to the east and west ends, with technicians who travel to Woodstock daily as part of their regular route.",
    localNote:
      "Because Woodstock is a regular stop rather than an occasional one, we're often able to offer a same-day or next-day appointment here even during busier weeks.",
    faqs: [
      {
        question: "How quickly can I get dryer repair in Woodstock?",
        answer:
          "Since we serve Woodstock daily, same-day or next-day appointments are usually available. We'll confirm a specific time window when you call.",
      },
      {
        question: "Do you check dryer vents during a Woodstock repair visit?",
        answer:
          "Yes. A blocked vent is one of the most common causes of long drying times and overheating, so our technicians check the vent path as part of every dryer repair visit, not just the unit itself.",
      },
    ],
  },
  {
    serviceSlug: "dishwasher-repair",
    citySlug: "woodstock",
    lastUpdated: "2026-08-11",
    metaTitle: "Dishwasher Repair Woodstock ON",
    metaDescription:
      "Reliable dishwasher repair in Woodstock, Ontario. We fix draining, cleaning, and leaking issues for all major brands. Same-day service available.",
    intro:
      "A dishwasher that leaves dishes dirty or won't drain properly is usually a targeted repair, not a sign the whole unit is failing. Our technicians service dishwashers across Woodstock, including the Collegeside and North End areas, with same-day appointments frequently available.",
    localNote:
      "We carry the most commonly needed dishwasher parts on the truck for Woodstock calls, since it's one of the areas we visit most consistently, which cuts down on the need for a second visit while parts are ordered.",
    faqs: [
      {
        question: "Why is my dishwasher leaving standing water after a cycle?",
        answer:
          "Standing water is usually caused by a clogged filter, blocked drain hose, or faulty drain pump. Some Woodstock homes on well water see mineral buildup contribute to this faster than homes on municipal water, so we check for that too.",
      },
      {
        question: "Can you repair a dishwasher the same day you're already in Woodstock for another call?",
        answer:
          "Often, yes. If we already have a technician scheduled in Woodstock that day, we'll try to fit in a same-day dishwasher repair rather than booking a separate visit.",
      },
    ],
  },
  {
    serviceSlug: "refrigerator-repair",
    citySlug: "strathroy",
    lastUpdated: "2026-08-11",
    metaTitle: "Refrigerator Repair Strathroy ON",
    metaDescription:
      "Fast refrigerator repair in Strathroy, Ontario. We fix cooling problems, ice makers, and water dispensers for all major brands. Call today.",
    intro:
      "When a refrigerator in Strathroy stops keeping food cold, waiting a few days for a repair isn't really an option. We serve Strathroy and the surrounding Mount Brydges area regularly, and most refrigerator repairs are completed in a single visit.",
    localNote:
      "Strathroy sits a bit further from our other regular routes than some of the other towns we serve, so booking earlier in the day when possible helps us fit your repair in alongside other Strathroy-area calls.",
    faqs: [
      {
        question: "Do you travel to rural properties outside Strathroy for refrigerator repair?",
        answer:
          "Yes, we serve the wider Strathroy area, including properties out toward Mount Brydges. Let us know your general location when booking so we can plan the visit accordingly.",
      },
      {
        question: "What's the most common refrigerator problem you see in Strathroy?",
        answer:
          "Cooling issues and ice maker problems are the two most frequent calls we get in Strathroy. Both are usually diagnosable and repairable in a single visit.",
      },
    ],
  },
  {
    serviceSlug: "oven-repair",
    citySlug: "tillsonburg",
    lastUpdated: "2026-08-11",
    metaTitle: "Oven Repair Tillsonburg ON",
    metaDescription:
      "Expert oven repair in Tillsonburg, Ontario. We fix heating issues, temperature problems, and control panel faults. Same-day service available.",
    intro:
      "An oven that won't heat evenly, or won't reach temperature, can throw off a lot more than one dinner. We repair ovens throughout Tillsonburg, including the Rolph Street and Broadway areas, with technicians who service both gas and electric models.",
    localNote:
      "Tillsonburg is one of our regular service areas, so we're usually able to offer faster scheduling here than in less frequently visited towns.",
    faqs: [
      {
        question: "Do you repair both gas and electric ovens in Tillsonburg?",
        answer:
          "Yes, our technicians are trained on both gas and electric ovens, including the conventional and convection models common in Tillsonburg homes.",
      },
      {
        question: "How soon can I get an oven repair appointment in Tillsonburg?",
        answer:
          "We visit Tillsonburg regularly, so same-day or next-day appointments are usually available. Call us or book online and we'll confirm the earliest opening.",
      },
    ],
  },
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
