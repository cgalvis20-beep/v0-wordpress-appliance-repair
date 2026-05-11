export interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  text: string
  service: string
  date: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Elise Bellemare",
    location: "London, ON",
    rating: 5,
    text: "My refrigerator stopped cooling on a Saturday and My Appliance Pro came out the same day! The technician was professional, explained the problem clearly, and had it fixed within an hour. Highly recommend!",
    service: "Refrigerator Repair",
    date: "2024-01-20",
  },
  {
    id: 2,
    name: "Garret Whitmore",
    location: "St. Thomas, ON",
    rating: 5,
    text: "Great service from start to finish. Called in the morning, technician arrived by afternoon. Fixed my washer quickly and the price was exactly what they quoted. Will definitely use again.",
    service: "Washer Repair",
    date: "2024-02-05",
  },
  {
    id: 3,
    name: "Lachlan MacTavish",
    location: "Woodstock, ON",
    rating: 5,
    text: "I've used My Appliance Pro twice now for different appliances. Both times they were prompt, professional, and affordable. It's rare to find such reliable service these days.",
    service: "Dishwasher Repair",
    date: "2024-02-18",
  },
  {
    id: 4,
    name: "David R.",
    location: "London, ON",
    rating: 5,
    text: "Our dryer was making a terrible noise and we were worried it would be expensive to fix. The technician diagnosed a worn drum roller and replaced it on the spot. Fair price and excellent work!",
    service: "Dryer Repair",
    date: "2024-03-01",
  },
  {
    id: 5,
    name: "Amanda K.",
    location: "Strathroy, ON",
    rating: 5,
    text: "Very impressed with the level of service. The technician was on time, courteous, and very knowledgeable. He took the time to explain what was wrong with my oven and gave me tips to prevent future issues.",
    service: "Oven Repair",
    date: "2024-03-15",
  },
  {
    id: 6,
    name: "Robert J.",
    location: "Ingersoll, ON",
    rating: 5,
    text: "My Appliance Pro saved us from buying a new dishwasher. Other companies said it couldn't be fixed, but their technician found the problem and repaired it for a fraction of the replacement cost.",
    service: "Dishwasher Repair",
    date: "2024-03-28",
  },
  {
    id: 7,
    name: "Lisa P.",
    location: "Tillsonburg, ON",
    rating: 5,
    text: "Fast, friendly, and professional. Our freezer was thawing and they came out right away. Fixed a faulty thermostat and everything is working perfectly now. Thank you!",
    service: "Freezer Repair",
    date: "2024-04-05",
  },
  {
    id: 8,
    name: "Chris B.",
    location: "London, ON",
    rating: 5,
    text: "The best appliance repair experience I've had. No upselling, no hidden fees, just honest service. The technician was clean, professional, and got my stove working again quickly.",
    service: "Stove Repair",
    date: "2024-04-12",
  },
]
