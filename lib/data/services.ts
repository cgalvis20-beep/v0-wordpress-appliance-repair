export interface Service {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  icon: string
  shortDescription: string
  longDescription: string
  commonProblems: string[]
  benefits: string[]
  faqs: { question: string; answer: string }[]
}

export const services: Service[] = [
  {
    slug: "refrigerator-repair",
    title: "Refrigerator Repair",
    metaTitle: "Refrigerator Repair London ON | Same-Day Service | MyappliancePro",
    metaDescription:
      "Expert refrigerator repair in London and surrounding areas. We fix all brands including Samsung, LG, Whirlpool. Same-day service available. Call now!",
    icon: "Refrigerator",
    shortDescription:
      "Expert refrigerator repair for all major brands. We fix cooling issues, ice makers, water dispensers, and more.",
    longDescription:
      "Is your refrigerator not cooling properly? Don't let spoiled food ruin your day. Our certified technicians specialize in diagnosing and repairing all refrigerator problems quickly and efficiently. We service all major brands including Samsung, LG, Whirlpool, GE, Frigidaire, and more. With same-day service available and a 90-day warranty on all repairs, MyappliancePro is your trusted choice for refrigerator repair in London and surrounding areas.",
    commonProblems: [
      "Refrigerator not cooling",
      "Ice maker not working",
      "Water dispenser issues",
      "Strange noises",
      "Frost buildup",
      "Door seal problems",
      "Temperature fluctuations",
      "Compressor issues",
    ],
    benefits: [
      "Same-day service available",
      "All major brands serviced",
      "90-day warranty on repairs",
      "Upfront pricing - no hidden fees",
      "Licensed and insured technicians",
    ],
    faqs: [
      {
        question: "How much does refrigerator repair cost?",
        answer:
          "Refrigerator repair costs typically range from $150-$400 depending on the issue. We provide upfront pricing after diagnosis so you know exactly what to expect.",
      },
      {
        question: "Is it worth repairing an old refrigerator?",
        answer:
          "Generally, if your refrigerator is less than 10 years old and the repair cost is less than half the price of a new unit, repair is usually the better option.",
      },
      {
        question: "How long does refrigerator repair take?",
        answer:
          "Most refrigerator repairs are completed within 1-2 hours. If parts need to be ordered, we'll schedule a follow-up visit as soon as they arrive.",
      },
    ],
  },
  {
    slug: "washer-repair",
    title: "Washer Repair",
    metaTitle: "Washing Machine Repair London ON | All Brands | MyappliancePro",
    metaDescription:
      "Professional washer repair in London, Ontario. Fix leaks, spin issues, drainage problems. Same-day service for all brands. Call for fast service!",
    icon: "WashingMachine",
    shortDescription:
      "Professional washing machine repair. We fix leaks, spin cycle issues, drainage problems, and more.",
    longDescription:
      "A broken washing machine can disrupt your entire household routine. Our expert technicians quickly diagnose and repair all washer problems, from simple fixes to complex repairs. We service top-load, front-load, and stackable washers from all major manufacturers. Don't let dirty laundry pile up - call MyappliancePro for fast, reliable washer repair.",
    commonProblems: [
      "Washer won't start",
      "Not draining properly",
      "Excessive vibration",
      "Leaking water",
      "Won't spin",
      "Door won't lock",
      "Error codes",
      "Strange odors",
    ],
    benefits: [
      "Same-day service available",
      "All washer types serviced",
      "90-day warranty on repairs",
      "Upfront pricing",
      "Expert diagnosis",
    ],
    faqs: [
      {
        question: "Why is my washer leaking?",
        answer:
          "Common causes include a damaged door seal, loose hose connections, clogged drain, or a faulty water inlet valve. Our technicians can diagnose the exact cause.",
      },
      {
        question: "Why won't my washer spin?",
        answer:
          "This could be due to an unbalanced load, a broken lid switch, worn drive belt, or motor issues. We'll identify the problem and fix it quickly.",
      },
      {
        question: "How long do washing machines typically last?",
        answer:
          "With proper maintenance, washing machines typically last 10-14 years. Regular cleaning and prompt repairs can extend your washer's lifespan.",
      },
    ],
  },
  {
    slug: "dryer-repair",
    title: "Dryer Repair",
    metaTitle: "Dryer Repair London ON | Fast Service | MyappliancePro",
    metaDescription:
      "Expert dryer repair in London and area. Fix heating issues, tumbling problems, strange noises. Same-day appointments. All brands serviced.",
    icon: "Fan",
    shortDescription:
      "Fast dryer repair service. We fix heating issues, tumbling problems, noisy drums, and more.",
    longDescription:
      "Is your dryer not heating or taking forever to dry clothes? A malfunctioning dryer wastes energy and time. Our certified technicians repair all dryer types including gas and electric models. We diagnose problems accurately and fix them right the first time. Trust MyappliancePro for professional dryer repair in London and surrounding communities.",
    commonProblems: [
      "Dryer not heating",
      "Takes too long to dry",
      "Drum not spinning",
      "Strange noises",
      "Overheating",
      "Won't start",
      "Burning smell",
      "Door won't close",
    ],
    benefits: [
      "Gas and electric dryers",
      "Same-day service",
      "90-day warranty",
      "Upfront pricing",
      "All brands serviced",
    ],
    faqs: [
      {
        question: "Why isn't my dryer heating?",
        answer:
          "Common causes include a faulty heating element, broken thermal fuse, clogged vent, or gas igniter issues. We'll diagnose and fix the problem.",
      },
      {
        question: "How often should I clean my dryer vent?",
        answer:
          "We recommend cleaning your dryer vent at least once a year. Clogged vents reduce efficiency and can be a fire hazard.",
      },
      {
        question: "Is it safe to repair a gas dryer myself?",
        answer:
          "We strongly recommend professional service for gas dryers due to safety concerns. Our technicians are trained to handle gas appliances safely.",
      },
    ],
  },
  {
    slug: "dishwasher-repair",
    title: "Dishwasher Repair",
    metaTitle: "Dishwasher Repair London ON | Expert Service | MyappliancePro",
    metaDescription:
      "Professional dishwasher repair in London. Not cleaning? Not draining? We fix all brands quickly. Same-day service available. Call now!",
    icon: "Sparkles",
    shortDescription:
      "Professional dishwasher repair. We fix cleaning issues, drainage problems, leaks, and more.",
    longDescription:
      "A broken dishwasher means washing dishes by hand - nobody wants that! Our technicians are experts at diagnosing and repairing all dishwasher issues. Whether your dishwasher isn't cleaning properly, won't drain, or is making strange noises, we'll get it working like new. We service all major brands and offer same-day appointments.",
    commonProblems: [
      "Dishes not clean",
      "Not draining",
      "Leaking",
      "Won't start",
      "Strange noises",
      "Door won't latch",
      "No water",
      "Soap dispenser stuck",
    ],
    benefits: [
      "Same-day service",
      "All brands serviced",
      "90-day warranty",
      "Upfront pricing",
      "Expert technicians",
    ],
    faqs: [
      {
        question: "Why are my dishes still dirty after washing?",
        answer:
          "This could be due to a clogged spray arm, faulty water inlet valve, worn wash impeller, or water temperature issues. We'll find and fix the root cause.",
      },
      {
        question: "Why won't my dishwasher drain?",
        answer:
          "Common causes include a clogged filter, blocked drain hose, faulty drain pump, or garbage disposal issues. Our technicians can resolve these quickly.",
      },
      {
        question: "How long should a dishwasher last?",
        answer:
          "Most dishwashers last 9-12 years with proper care. Regular cleaning and timely repairs can maximize your dishwasher's lifespan.",
      },
    ],
  },
  {
    slug: "oven-repair",
    title: "Oven Repair",
    metaTitle: "Oven Repair London ON | All Brands | MyappliancePro",
    metaDescription:
      "Expert oven repair in London, Ontario. Not heating? Temperature issues? We fix all oven types and brands. Same-day service available.",
    icon: "Flame",
    shortDescription:
      "Expert oven repair for gas and electric models. We fix heating issues, temperature problems, and more.",
    longDescription:
      "A malfunctioning oven can put your meal plans on hold. Our certified technicians repair all types of ovens including conventional, convection, gas, and electric models. From heating elements to temperature sensors, we have the expertise to fix it right. Get your oven back to perfect working condition with MyappliancePro.",
    commonProblems: [
      "Oven not heating",
      "Uneven cooking",
      "Temperature inaccurate",
      "Self-clean not working",
      "Door won't close",
      "Burner issues",
      "Control panel problems",
      "Strange smells",
    ],
    benefits: [
      "Gas and electric ovens",
      "Same-day service",
      "90-day warranty",
      "Upfront pricing",
      "All brands serviced",
    ],
    faqs: [
      {
        question: "Why isn't my oven heating up?",
        answer:
          "This could be due to a faulty heating element, broken igniter, malfunctioning thermostat, or electrical issues. We'll diagnose and repair it quickly.",
      },
      {
        question: "Why is my oven cooking unevenly?",
        answer:
          "Uneven cooking is often caused by a faulty heating element, broken convection fan, or calibration issues. Our technicians can fix these problems.",
      },
      {
        question: "Is it safe to use a gas oven that won't ignite?",
        answer:
          "No, you should avoid using it until repaired. A faulty igniter can cause gas buildup which is dangerous. Call us for immediate service.",
      },
    ],
  },
  {
    slug: "stove-repair",
    title: "Stove Repair",
    metaTitle: "Stove Repair London ON | Gas & Electric | MyappliancePro",
    metaDescription:
      "Professional stove repair in London. Burner not working? Ignition issues? We repair all stove types. Same-day service. Call now!",
    icon: "CookingPot",
    shortDescription:
      "Professional stove repair for all types. We fix burner issues, ignition problems, and more.",
    longDescription:
      "Whether you have a gas or electric stove, our technicians have the skills to diagnose and repair any issue. From burners that won't light to control knobs that don't work, we fix it all. Don't let a broken stove keep you from cooking. Contact MyappliancePro for fast, reliable stove repair service.",
    commonProblems: [
      "Burner not lighting",
      "Uneven flame",
      "Electric element not heating",
      "Control knob issues",
      "Spark igniter problems",
      "Gas smell",
      "Indicator lights not working",
      "Surface not level",
    ],
    benefits: [
      "Gas and electric stoves",
      "Same-day service",
      "90-day warranty",
      "Upfront pricing",
      "All brands serviced",
    ],
    faqs: [
      {
        question: "Why won't my gas burner light?",
        answer:
          "Common causes include a dirty igniter, clogged burner ports, faulty spark module, or gas supply issues. We can diagnose and fix the problem.",
      },
      {
        question: "Why is my electric burner not heating?",
        answer:
          "This could be due to a burned-out element, faulty receptacle, or wiring issues. Our technicians will identify and resolve the issue.",
      },
      {
        question: "I smell gas - what should I do?",
        answer:
          "If you smell gas, turn off the stove, open windows, and leave the house immediately. Call your gas company first, then call us for repairs.",
      },
    ],
  },
  {
    slug: "range-repair",
    title: "Range Repair",
    metaTitle: "Range Repair London ON | Expert Service | MyappliancePro",
    metaDescription:
      "Expert range repair in London. Cooktop and oven issues? We fix all range types and brands. Same-day appointments available.",
    icon: "ChefHat",
    shortDescription:
      "Comprehensive range repair service. We fix both cooktop and oven components.",
    longDescription:
      "Your range combines cooktop and oven functionality, and problems with either can disrupt your cooking. Our technicians are trained to repair all range types, from freestanding to slide-in models. We service both the cooktop and oven components, ensuring your entire range works perfectly. Trust MyappliancePro for complete range repair solutions.",
    commonProblems: [
      "Oven not heating",
      "Burners not working",
      "Temperature issues",
      "Control panel problems",
      "Door issues",
      "Ignition problems",
      "Clock/timer not working",
      "Self-clean issues",
    ],
    benefits: [
      "All range types serviced",
      "Same-day service",
      "90-day warranty",
      "Upfront pricing",
      "Expert technicians",
    ],
    faqs: [
      {
        question: "What's the difference between a range and a stove?",
        answer:
          "A range combines a cooktop and oven in one unit. A stove typically refers to just the cooktop. We repair both components of your range.",
      },
      {
        question: "Can you repair both gas and electric ranges?",
        answer:
          "Yes, our technicians are trained and certified to repair both gas and electric ranges of all brands.",
      },
      {
        question: "How long does range repair typically take?",
        answer:
          "Most range repairs are completed in 1-2 hours. Complex repairs may require a follow-up visit if parts need to be ordered.",
      },
    ],
  },
  {
    slug: "freezer-repair",
    title: "Freezer Repair",
    metaTitle: "Freezer Repair London ON | Fast Service | MyappliancePro",
    metaDescription:
      "Professional freezer repair in London and area. Not freezing? Frost buildup? We fix all freezer types. Same-day service available.",
    icon: "Snowflake",
    shortDescription:
      "Expert freezer repair service. We fix cooling issues, frost buildup, and more.",
    longDescription:
      "A malfunctioning freezer puts your frozen goods at risk. Whether you have a chest freezer, upright freezer, or built-in unit, our technicians can diagnose and repair any issue quickly. From compressor problems to defrost system failures, we have the expertise to restore your freezer to optimal performance. Don't lose your frozen food - call MyappliancePro today.",
    commonProblems: [
      "Not freezing",
      "Too cold or too warm",
      "Excessive frost",
      "Running constantly",
      "Strange noises",
      "Door seal issues",
      "Ice buildup",
      "Water leaking",
    ],
    benefits: [
      "All freezer types",
      "Same-day service",
      "90-day warranty",
      "Upfront pricing",
      "All brands serviced",
    ],
    faqs: [
      {
        question: "Why is my freezer not cold enough?",
        answer:
          "This could be due to a faulty thermostat, dirty condenser coils, malfunctioning compressor, or door seal issues. We'll find and fix the problem.",
      },
      {
        question: "Why is there frost buildup in my freezer?",
        answer:
          "Frost buildup is often caused by a failed defrost system, damaged door gasket, or frequently opened door. Our technicians can resolve these issues.",
      },
      {
        question: "Should I repair or replace my old freezer?",
        answer:
          "If your freezer is under 15 years old and repair costs are less than 50% of a new unit, repair is usually worthwhile.",
      },
    ],
  },
  {
    slug: "microwave-repair",
    title: "Microwave Repair",
    metaTitle: "Microwave Repair London ON | All Brands | MyappliancePro",
    metaDescription:
      "Expert microwave repair in London. Not heating? Turntable issues? We fix countertop and built-in microwaves. Call for service!",
    icon: "Zap",
    shortDescription:
      "Fast microwave repair for countertop and built-in units. We fix heating issues and more.",
    longDescription:
      "Microwaves are essential for quick meals and reheating. When yours stops working, you need fast service. Our technicians repair all microwave types including countertop, over-the-range, and built-in models. From magnetron issues to control panel problems, we fix it all. Get your microwave working again with MyappliancePro.",
    commonProblems: [
      "Not heating",
      "Turntable not spinning",
      "Sparking inside",
      "Door won't close",
      "Buttons not working",
      "Display issues",
      "Strange noises",
      "Light not working",
    ],
    benefits: [
      "All microwave types",
      "Same-day service",
      "90-day warranty",
      "Upfront pricing",
      "All brands serviced",
    ],
    faqs: [
      {
        question: "Why is my microwave not heating?",
        answer:
          "The most common cause is a failed magnetron, but it could also be a faulty diode, capacitor, or door switch. Our technicians can diagnose the issue.",
      },
      {
        question: "Is it worth repairing a microwave?",
        answer:
          "For built-in or over-the-range microwaves, repair is often worthwhile. For basic countertop models, replacement may be more cost-effective.",
      },
      {
        question: "Why is my microwave sparking?",
        answer:
          "Sparking can be caused by metal in the microwave, damaged waveguide cover, or failing components. Stop using it immediately and call for service.",
      },
    ],
  },
  {
    slug: "cooktop-repair",
    title: "Cooktop Repair",
    metaTitle: "Cooktop Repair London ON | Gas & Electric | MyappliancePro",
    metaDescription:
      "Professional cooktop repair in London. Gas, electric, and induction cooktops. Burner issues? We fix all brands. Same-day service.",
    icon: "Gauge",
    shortDescription:
      "Professional cooktop repair for gas, electric, and induction models.",
    longDescription:
      "Whether you have a gas, electric, or induction cooktop, our technicians have the expertise to repair it. We fix burner issues, control problems, glass damage, and more. Don't let a broken cooktop keep you from cooking. Contact MyappliancePro for fast, professional cooktop repair service in London and surrounding areas.",
    commonProblems: [
      "Burner not heating",
      "Uneven heat",
      "Control panel issues",
      "Igniter problems",
      "Cracked glass top",
      "Indicator lights out",
      "Power issues",
      "Error codes",
    ],
    benefits: [
      "Gas, electric, induction",
      "Same-day service",
      "90-day warranty",
      "Upfront pricing",
      "All brands serviced",
    ],
    faqs: [
      {
        question: "Can you repair a cracked glass cooktop?",
        answer:
          "Yes, we can replace cracked glass tops for most brands. Using a cracked cooktop is dangerous, so call us right away for replacement.",
      },
      {
        question: "Why does my induction cooktop show an error?",
        answer:
          "Error codes often indicate issues with cookware compatibility, power supply, or internal components. We can diagnose and resolve these errors.",
      },
      {
        question: "How do I know if my cooktop element is bad?",
        answer:
          "Signs include uneven heating, visible damage, or no heat at all. Our technicians can test elements and replace them if needed.",
      },
    ],
  },
  {
    slug: "range-hood-repair",
    title: "Range Hood Repair",
    metaTitle: "Range Hood Repair London ON | All Brands | MyappliancePro",
    metaDescription:
      "Expert range hood repair in London. Fan not working? Light issues? We repair all range hood types. Call for same-day service!",
    icon: "Wind",
    shortDescription:
      "Expert range hood repair. We fix fan issues, lights, controls, and more.",
    longDescription:
      "A properly functioning range hood is essential for removing smoke, odors, and grease from your kitchen. When your range hood stops working, cooking becomes unpleasant and can even trigger smoke alarms. Our technicians repair all range hood types including under-cabinet, wall-mounted, and island hoods. We fix fan motors, lights, controls, and more.",
    commonProblems: [
      "Fan not working",
      "Poor suction",
      "Lights not working",
      "Excessive noise",
      "Control issues",
      "Grease filter problems",
      "Motor issues",
      "Ductwork problems",
    ],
    benefits: [
      "All hood types",
      "Same-day service",
      "90-day warranty",
      "Upfront pricing",
      "All brands serviced",
    ],
    faqs: [
      {
        question: "Why is my range hood fan not working?",
        answer:
          "Common causes include a burned-out motor, faulty switch, wiring issues, or capacitor failure. We'll diagnose and repair the problem.",
      },
      {
        question: "How often should I clean my range hood filter?",
        answer:
          "Metal filters should be cleaned monthly. Charcoal filters should be replaced every 3-6 months depending on usage.",
      },
      {
        question: "Why is my range hood so loud?",
        answer:
          "Excessive noise often indicates a failing motor, loose fan blade, or debris in the ductwork. Our technicians can identify and fix the issue.",
      },
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug)
}
