export interface Brand {
  slug: string
  name: string
  tagline: string
  metaTitle: string
  metaDescription: string
  description: string
  appliancesServiced: string[]
  commonIssues: string[]
  whyChooseUs: string[]
  faqs: { question: string; answer: string }[]
}

export const brands: Brand[] = [
  {
    slug: "samsung",
    name: "Samsung",
    tagline: "Expert Samsung Appliance Repair",
    metaTitle: "Samsung Appliance Repair London ON | Certified Service | My Appliance Pro",
    metaDescription:
      "Expert Samsung appliance repair in London. We fix Samsung refrigerators, washers, dryers, dishwashers. Certified technicians. Call now!",
    description:
      "My Appliance Pro is your trusted Samsung appliance repair specialist in London and surrounding areas. Our technicians are trained to diagnose and repair all Samsung appliances, from smart refrigerators to high-efficiency washers. We use quality parts and back every repair with our 90-day warranty.",
    appliancesServiced: [
      "Refrigerators",
      "Washers",
      "Dryers",
      "Dishwashers",
      "Ranges",
      "Microwaves",
      "Cooktops",
    ],
    commonIssues: [
      "Ice maker not working",
      "Washer not spinning",
      "Dryer not heating",
      "Refrigerator not cooling",
      "Dishwasher not draining",
      "Error codes displaying",
    ],
    whyChooseUs: [
      "Samsung-trained technicians who understand the technology",
      "Quality replacement parts for lasting repairs",
      "Smart appliance expertise for connected devices",
      "90-day warranty on all repairs",
    ],
    faqs: [
      {
        question: "Do you use genuine Samsung parts?",
        answer: "Yes, we use quality parts that meet Samsung specifications for all repairs.",
      },
      {
        question: "Can you repair Samsung smart appliances?",
        answer: "Absolutely! Our technicians are trained on Samsung's smart technology and WiFi-connected appliances.",
      },
      {
        question: "How long does a Samsung repair typically take?",
        answer: "Most Samsung repairs are completed in a single visit, typically within 1-2 hours.",
      },
    ],
  },
  {
    slug: "lg",
    name: "LG",
    tagline: "Professional LG Appliance Service",
    metaTitle: "LG Appliance Repair London ON | Expert Service | My Appliance Pro",
    metaDescription:
      "Professional LG appliance repair in London. Refrigerators, washers, dryers, dishwashers. Same-day service. Call My Appliance Pro!",
    description:
      "Trust My Appliance Pro for all your LG appliance repair needs. Our experienced technicians specialize in LG's innovative appliances, including ThinQ-enabled smart appliances. Whether it's a refrigerator, washer, dryer, or any other LG appliance, we have the expertise to fix it right.",
    appliancesServiced: [
      "Refrigerators",
      "Washers",
      "Dryers",
      "Dishwashers",
      "Ranges",
      "Microwaves",
      "Cooktops",
    ],
    commonIssues: [
      "Linear compressor problems",
      "Washer balance issues",
      "Dryer sensor malfunctions",
      "Ice maker failures",
      "Control board errors",
      "Door seal leaks",
    ],
    whyChooseUs: [
      "LG appliance specialists with years of experience",
      "ThinQ smart appliance expertise",
      "Fast diagnosis and efficient repair",
      "Genuine parts available for all models",
    ],
    faqs: [
      {
        question: "Can you fix LG linear compressor issues?",
        answer: "Yes, our technicians are experienced with LG's linear compressor technology and can diagnose and repair these issues.",
      },
      {
        question: "Do you repair LG ThinQ smart appliances?",
        answer: "Yes, we're fully trained on LG's ThinQ technology and can repair all smart features.",
      },
      {
        question: "What's the warranty on LG repairs?",
        answer: "All our LG repairs come with a 90-day warranty on parts and labor.",
      },
    ],
  },
  {
    slug: "whirlpool",
    name: "Whirlpool",
    tagline: "Trusted Whirlpool Repair Service",
    metaTitle: "Whirlpool Appliance Repair London ON | All Models | My Appliance Pro",
    metaDescription:
      "Reliable Whirlpool appliance repair in London. We service all Whirlpool models. Same-day appointments. Call for expert service!",
    description:
      "My Appliance Pro provides expert Whirlpool appliance repair throughout London and the surrounding region. Whirlpool has been a trusted name in home appliances for decades, and our technicians are fully trained to repair all Whirlpool products efficiently and affordably.",
    appliancesServiced: [
      "Refrigerators",
      "Washers",
      "Dryers",
      "Dishwashers",
      "Ovens",
      "Ranges",
      "Microwaves",
      "Freezers",
    ],
    commonIssues: [
      "Washer not draining",
      "Refrigerator too warm",
      "Dryer not tumbling",
      "Dishwasher leaking",
      "Oven not heating evenly",
      "Ice dispenser jammed",
    ],
    whyChooseUs: [
      "Whirlpool repair experts with extensive training",
      "All models serviced from classic to current",
      "Affordable repair rates with no hidden fees",
      "Same-day service available in most areas",
    ],
    faqs: [
      {
        question: "Do you service older Whirlpool models?",
        answer: "Yes, we service all Whirlpool models regardless of age, and can often source parts for older units.",
      },
      {
        question: "How quickly can you repair my Whirlpool appliance?",
        answer: "We offer same-day service for most Whirlpool repairs and carry common parts on our trucks.",
      },
      {
        question: "Is Whirlpool repair expensive?",
        answer: "We offer competitive rates and provide upfront pricing before any work begins.",
      },
    ],
  },
  {
    slug: "ge",
    name: "GE",
    tagline: "Factory-Trained GE Repair",
    metaTitle: "GE Appliance Repair London ON | Factory-Trained | My Appliance Pro",
    metaDescription:
      "Expert GE appliance repair in London, Ontario. All GE appliances serviced. Factory-trained technicians. Call for same-day service!",
    description:
      "GE appliances are known for their reliability and innovation. When your GE appliance needs repair, trust the experts at My Appliance Pro. Our factory-trained technicians have the knowledge and tools to repair any GE appliance, from classic models to the latest smart appliances.",
    appliancesServiced: [
      "Refrigerators",
      "Washers",
      "Dryers",
      "Dishwashers",
      "Ovens",
      "Ranges",
      "Microwaves",
      "Freezers",
    ],
    commonIssues: [
      "Refrigerator compressor issues",
      "Washer lid switch problems",
      "Dryer heating element failure",
      "Dishwasher pump problems",
      "Oven igniter issues",
      "Control panel malfunctions",
    ],
    whyChooseUs: [
      "GE certified service technicians",
      "Smart appliance expertise for WiFi models",
      "Quality GE parts for all repairs",
      "Warranty-backed repairs you can trust",
    ],
    faqs: [
      {
        question: "Are your technicians GE certified?",
        answer: "Yes, our technicians are factory-trained and certified to repair all GE appliances.",
      },
      {
        question: "Can you repair GE Profile and Cafe series?",
        answer: "Absolutely! We service all GE product lines including Profile, Cafe, and Monogram.",
      },
      {
        question: "Do you carry GE parts?",
        answer: "We stock common GE parts and can quickly order any specialized parts needed.",
      },
    ],
  },
  {
    slug: "frigidaire",
    name: "Frigidaire",
    tagline: "Fast Frigidaire Appliance Repair",
    metaTitle: "Frigidaire Appliance Repair London ON | Fast Service | My Appliance Pro",
    metaDescription:
      "Professional Frigidaire appliance repair in London. Refrigerators, freezers, ranges, dishwashers. Quick service. Call today!",
    description:
      "Frigidaire has been a kitchen staple for over a century. My Appliance Pro technicians are experts in Frigidaire appliance repair, handling everything from refrigerators and freezers to ranges and dishwashers. We provide fast, reliable service backed by our satisfaction guarantee.",
    appliancesServiced: [
      "Refrigerators",
      "Freezers",
      "Washers",
      "Dryers",
      "Dishwashers",
      "Ranges",
      "Cooktops",
    ],
    commonIssues: [
      "Freezer frost buildup",
      "Refrigerator running constantly",
      "Range burner not lighting",
      "Dishwasher not cleaning well",
      "Washer vibrating excessively",
      "Dryer taking too long",
    ],
    whyChooseUs: [
      "Frigidaire specialists with decades of experience",
      "Fast turnaround on most repairs",
      "Competitive pricing with honest quotes",
      "All models repaired including Gallery series",
    ],
    faqs: [
      {
        question: "How long have you been repairing Frigidaire?",
        answer: "Our team has over 10 years of experience repairing Frigidaire appliances.",
      },
      {
        question: "Do you repair Frigidaire Gallery appliances?",
        answer: "Yes, we service all Frigidaire lines including Gallery and Professional series.",
      },
      {
        question: "What's the average repair time?",
        answer: "Most Frigidaire repairs are completed within 1-2 hours during a single visit.",
      },
    ],
  },
  {
    slug: "maytag",
    name: "Maytag",
    tagline: "Reliable Maytag Repair Service",
    metaTitle: "Maytag Appliance Repair London ON | Trusted Service | My Appliance Pro",
    metaDescription:
      "Reliable Maytag appliance repair in London. Expert service for all Maytag appliances. Same-day appointments. Call My Appliance Pro!",
    description:
      "Maytag appliances are built to last, but when they need repair, My Appliance Pro is here to help. Our technicians are experienced with all Maytag products and use quality parts to ensure lasting repairs. Trust us to keep your Maytag appliances running strong.",
    appliancesServiced: [
      "Washers",
      "Dryers",
      "Refrigerators",
      "Dishwashers",
      "Ranges",
      "Microwaves",
    ],
    commonIssues: [
      "Washer not agitating",
      "Dryer drum not turning",
      "Refrigerator making noise",
      "Dishwasher door latch issues",
      "Range temperature problems",
      "Control board failures",
    ],
    whyChooseUs: [
      "Maytag repair experts who know these machines",
      "Built-to-last repairs using quality parts",
      "Quality parts that match Maytag standards",
      "Extended warranty options available",
    ],
    faqs: [
      {
        question: "Are Maytag appliances worth repairing?",
        answer: "Absolutely! Maytag appliances are built to last and repairs are often more economical than replacement.",
      },
      {
        question: "Do you service commercial Maytag units?",
        answer: "Yes, we repair both residential and commercial Maytag appliances.",
      },
      {
        question: "What parts do you use for Maytag repairs?",
        answer: "We use quality parts that meet or exceed Maytag specifications.",
      },
    ],
  },
  {
    slug: "kitchenaid",
    name: "KitchenAid",
    tagline: "Premium KitchenAid Appliance Service",
    metaTitle: "KitchenAid Appliance Repair London ON | Premium Service | My Appliance Pro",
    metaDescription:
      "Expert KitchenAid appliance repair in London. Premium service for KitchenAid refrigerators, dishwashers, ranges. Call now!",
    description:
      "KitchenAid represents premium kitchen performance. My Appliance Pro provides the expert service your KitchenAid appliances deserve. Our technicians understand the craftsmanship behind KitchenAid products and deliver repairs that maintain their high standards of performance.",
    appliancesServiced: [
      "Refrigerators",
      "Dishwashers",
      "Ranges",
      "Ovens",
      "Cooktops",
      "Microwaves",
      "Range Hoods",
    ],
    commonIssues: [
      "Dishwasher not drying",
      "Refrigerator ice maker issues",
      "Range igniter problems",
      "Oven temperature calibration",
      "Cooktop burner issues",
      "Control panel errors",
    ],
    whyChooseUs: [
      "Premium KitchenAid service from trained technicians",
      "Expert technicians who respect your investment",
      "Quality craftsmanship in every repair",
      "Satisfaction guaranteed on all work",
    ],
    faqs: [
      {
        question: "Do you repair KitchenAid built-in appliances?",
        answer: "Yes, we service all KitchenAid appliances including built-in refrigerators and wall ovens.",
      },
      {
        question: "Are KitchenAid repairs expensive?",
        answer: "While KitchenAid is a premium brand, our repair rates are competitive and we provide honest quotes.",
      },
      {
        question: "Can you match KitchenAid's quality standards?",
        answer: "Absolutely. We use quality parts and our technicians are trained to maintain KitchenAid's standards.",
      },
    ],
  },
  {
    slug: "bosch",
    name: "Bosch",
    tagline: "German-Engineered Bosch Repair",
    metaTitle: "Bosch Appliance Repair London ON | German Engineering | My Appliance Pro",
    metaDescription:
      "Professional Bosch appliance repair in London. Expert service for Bosch dishwashers, washers, dryers, refrigerators. Call today!",
    description:
      "Bosch appliances are renowned for German engineering and quality. My Appliance Pro technicians are trained to service Bosch's precision appliances, from their whisper-quiet dishwashers to compact laundry solutions. We provide the expert care your Bosch appliances need.",
    appliancesServiced: [
      "Dishwashers",
      "Washers",
      "Dryers",
      "Refrigerators",
      "Ranges",
      "Cooktops",
      "Microwaves",
    ],
    commonIssues: [
      "Dishwasher not draining",
      "Washer door lock issues",
      "Dryer ventilation problems",
      "Refrigerator temperature issues",
      "Control module errors",
      "Water inlet valve failures",
    ],
    whyChooseUs: [
      "Bosch-trained technicians who understand German engineering",
      "European appliance expertise for precision repairs",
      "Precision repairs that maintain Bosch quality",
      "Genuine Bosch parts available for all models",
    ],
    faqs: [
      {
        question: "Do you understand Bosch's European design?",
        answer: "Yes, our technicians are specially trained on European appliance designs and engineering.",
      },
      {
        question: "Can you get Bosch parts quickly?",
        answer: "We maintain stock of common Bosch parts and have expedited ordering for specialized components.",
      },
      {
        question: "Are Bosch appliances difficult to repair?",
        answer: "Bosch appliances require specialized knowledge, which our trained technicians possess.",
      },
    ],
  },
]

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((brand) => brand.slug === slug)
}

export function getAllBrandSlugs(): string[] {
  return brands.map((brand) => brand.slug)
}
