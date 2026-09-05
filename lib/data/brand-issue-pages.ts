export interface BrandIssuePage {
  brandSlug: string
  issueSlug: string
  lastUpdated: string
  matchedCommonIssue: string // must exactly match an entry in that brand's commonIssues array
  title: string
  metaTitle: string
  metaDescription: string
  symptoms: string
  causes: string[]
  whatToExpect: string
  faqs: { question: string; answer: string }[]
}

export const brandIssuePages: BrandIssuePage[] = [
  {
    brandSlug: "samsung",
    issueSlug: "ice-maker-not-working",
    lastUpdated: "2026-08-12",
    matchedCommonIssue: "Ice maker not working",
    title: "Samsung Refrigerator Ice Maker Not Working",
    metaTitle: "Samsung Refrigerator Ice Maker Not Working | My Appliance Pro",
    metaDescription:
      "Samsung ice maker not making ice or jammed with frost? We diagnose and repair Samsung refrigerator ice makers, including twin cooling models. Same-day service.",
    symptoms:
      "A Samsung ice maker that has stopped producing ice, is making misshapen or hollow cubes, or has frozen over completely is usually pointing to one of a small number of specific failures rather than a mystery problem. Samsung's twin cooling system, which manages the freezer and fridge compartments separately, adds a couple of failure points that don't exist on simpler single-evaporator models.",
    causes: [
      "Frozen or blocked water supply line to the ice maker",
      "Faulty water inlet valve not supplying enough water",
      "Failed ice maker module or motor",
      "Frost buildup from a failing door seal letting in warm, humid air",
      "Control board fault specific to Samsung's twin cooling logic",
    ],
    whatToExpect:
      "Our technicians test the water supply and inlet valve first, since that's the most common cause, before moving on to the ice maker module itself. If the issue traces back to frost buildup, we'll also check the door seal, since a Samsung ice maker will keep failing repeatedly if the underlying seal problem isn't fixed at the same time.",
    faqs: [
      {
        question: "Why does my Samsung ice maker keep freezing over?",
        answer:
          "Repeated frost buildup usually means humid air is getting into the freezer compartment, often from a door seal that isn't sealing properly, rather than a problem with the ice maker itself. We check the seal as part of diagnosing a recurring ice maker issue.",
      },
      {
        question: "Can you repair Samsung's twin cooling system?",
        answer:
          "Yes, our technicians are trained on Samsung's twin cooling design, including how it interacts with the ice maker's water supply and defrost cycle.",
      },
    ],
  },
  {
    brandSlug: "lg",
    issueSlug: "linear-compressor-problems",
    lastUpdated: "2026-08-12",
    matchedCommonIssue: "Linear compressor problems",
    title: "LG Refrigerator Linear Compressor Problems",
    metaTitle: "LG Refrigerator Linear Compressor Repair | My Appliance Pro",
    metaDescription:
      "LG refrigerator not cooling or making unusual compressor noise? We diagnose and repair LG's linear compressor systems. Same-day service available.",
    symptoms:
      "LG refrigerators use a linear compressor design rather than the standard reciprocating compressor found in most other brands, which changes both how they fail and how they sound when something's wrong. A linear compressor problem usually shows up as a refrigerator that's warmer than it should be, a compressor that runs constantly without cycling off, or a noticeable change in the normal operating sound, such as new clicking, humming, or grinding.",
    causes: [
      "Compressor motor winding failure",
      "Faulty compressor start relay or capacitor",
      "Refrigerant leak reducing cooling efficiency",
      "Control board fault misreading temperature and overdriving the compressor",
    ],
    whatToExpect:
      "Diagnosing a linear compressor issue starts with confirming whether the compressor is actually running and cycling normally, since a compressor that sounds fine but never shuts off often points to a control board problem rather than the compressor itself. If a compressor replacement is genuinely needed, check your original LG paperwork or contact LG directly first, since compressors on some models carry an extended manufacturer warranty separate from our own repair warranty.",
    faqs: [
      {
        question: "Is my LG refrigerator's compressor covered under a separate warranty?",
        answer:
          "Some LG refrigerator compressors carry an extended manufacturer warranty beyond the standard appliance warranty. We recommend checking your original LG documentation or contacting LG directly to confirm what applies to your specific model before booking a paid repair.",
      },
      {
        question: "Why is my LG fridge's compressor running all the time?",
        answer:
          "A compressor that never cycles off is often trying to compensate for a cooling problem elsewhere, such as a refrigerant leak or a control board misreading the internal temperature, rather than being faulty on its own. We diagnose the full cooling system, not just the compressor, before recommending a repair.",
      },
    ],
  },
  {
    brandSlug: "whirlpool",
    issueSlug: "washer-not-draining",
    lastUpdated: "2026-08-12",
    matchedCommonIssue: "Washer not draining",
    title: "Whirlpool Washer Not Draining",
    metaTitle: "Whirlpool Washer Not Draining | My Appliance Pro",
    metaDescription:
      "Whirlpool washer stuck with standing water? We diagnose and repair drain pump, hose, and filter issues on Whirlpool washers. Same-day service available.",
    symptoms:
      "A Whirlpool washer that ends its cycle with standing water in the drum, or that displays a drain-related error code, is one of the most common service calls we get on this brand. It's almost always a mechanical blockage or pump failure rather than an electrical fault, which is good news since it's usually a straightforward, single-visit repair.",
    causes: [
      "Clogged drain pump filter, often from coins, lint, or small items",
      "Kinked or blocked drain hose behind the machine",
      "Failed drain pump motor",
      "Blocked coin trap on models that have one",
    ],
    whatToExpect:
      "We start by checking the drain pump filter, since it's the most common cause and the quickest to resolve. If the filter is clear, we trace the drain hose and pump itself for a blockage or motor failure. Most Whirlpool drain issues are resolved in a single visit once the specific blockage or failed part is identified.",
    faqs: [
      {
        question: "Can I clear a clogged Whirlpool washer filter myself?",
        answer:
          "Some Whirlpool models have an accessible drain filter you can check yourself, usually behind a small panel at the front base of the machine. If clearing it doesn't resolve the issue, the problem is likely further along in the drain system and worth a professional diagnosis.",
      },
      {
        question: "Why does my Whirlpool washer show a drain error code but still have water in it?",
        answer:
          "This usually means the pump is either blocked or has failed to fully clear the water within the time the control board expects, which triggers the error even though the pump may still be partially working. We test the pump directly rather than relying on the error code alone.",
      },
    ],
  },
  {
    brandSlug: "ge",
    issueSlug: "dryer-heating-element-failure",
    lastUpdated: "2026-08-12",
    matchedCommonIssue: "Dryer heating element failure",
    title: "GE Dryer Not Heating (Heating Element Failure)",
    metaTitle: "GE Dryer Not Heating | Heating Element Repair | My Appliance Pro",
    metaDescription:
      "GE dryer running but not heating? We diagnose and repair heating element and thermal fuse failures on GE dryers. Same-day service available.",
    symptoms:
      "A GE dryer that tumbles normally but produces little or no heat is one of the most common calls we get on this brand, and it's almost always traced back to the heating element or a related safety component rather than the motor or drum.",
    causes: [
      "Burnt-out heating element coil",
      "Tripped thermal fuse, often caused by the same restricted airflow that damages the element",
      "Faulty cycling thermostat",
      "Blocked dryer vent restricting airflow and causing overheating, which then trips the thermal fuse",
    ],
    whatToExpect:
      "Because a blocked vent is a common underlying cause of thermal fuse failures, we check the vent path as part of every heating-related dryer visit, not just the heating element itself. Replacing the element without addressing a vent blockage often means the same failure happens again within months.",
    faqs: [
      {
        question: "Why does my GE dryer run but not get warm?",
        answer:
          "This almost always points to the heating element itself, or a tripped thermal fuse that's cutting power to it as a safety measure. Both are diagnosable and repairable in most cases without needing a full dryer replacement.",
      },
      {
        question: "Will fixing the heating element solve the problem for good?",
        answer:
          "Only if the underlying cause, often a blocked dryer vent restricting airflow, is also addressed. We check the vent path during the visit so the same failure doesn't happen again shortly after the repair.",
      },
    ],
  },
  {
    brandSlug: "frigidaire",
    issueSlug: "refrigerator-running-constantly",
    lastUpdated: "2026-08-12",
    matchedCommonIssue: "Refrigerator running constantly",
    title: "Frigidaire Refrigerator Running Constantly",
    metaTitle: "Frigidaire Refrigerator Running Constantly | My Appliance Pro",
    metaDescription:
      "Frigidaire fridge compressor never shutting off? We diagnose condenser, seal, and thermostat issues on Frigidaire refrigerators. Same-day service available.",
    symptoms:
      "A Frigidaire refrigerator that never seems to cycle off, running continuously rather than in the normal on-off pattern, is usually working harder than it should to compensate for a specific, fixable problem elsewhere in the cooling system.",
    causes: [
      "Dirty or blocked condenser coils restricting heat release",
      "Failing condenser fan motor not moving enough air across the coils",
      "Door seal not sealing properly, letting warm air in continuously",
      "Faulty temperature control thermostat misreading the internal temperature",
    ],
    whatToExpect:
      "We check the condenser coils and door seals first, since both are common, low-cost causes that are quick to confirm. If those check out, we move on to testing the condenser fan motor and thermostat directly rather than guessing.",
    faqs: [
      {
        question: "Is a constantly running Frigidaire fridge a fire risk?",
        answer:
          "It's not typically a fire risk on its own, but it does mean the compressor and fan are under more strain than normal, which can shorten their lifespan and increase your energy bill. It's worth having it looked at rather than leaving it.",
      },
      {
        question: "Can I clean the condenser coils myself to fix this?",
        answer:
          "If the coils are accessible and simply dusty, cleaning them yourself is a reasonable first step. If the fridge still runs constantly afterward, the cause is likely elsewhere, such as the door seal or fan motor, and worth a professional diagnosis.",
      },
    ],
  },
  {
    brandSlug: "maytag",
    issueSlug: "washer-not-agitating",
    lastUpdated: "2026-08-12",
    matchedCommonIssue: "Washer not agitating",
    title: "Maytag Washer Not Agitating",
    metaTitle: "Maytag Washer Not Agitating | My Appliance Pro",
    metaDescription:
      "Maytag washer spinning but not agitating? We diagnose and repair agitator, drive belt, and motor coupling issues on Maytag washers. Same-day service.",
    symptoms:
      "A Maytag top-load washer that fills and spins normally but doesn't actually agitate clothes during the wash cycle usually points to a specific mechanical part that's worn out, rather than an electrical or control board issue.",
    causes: [
      "Worn agitator dogs or coupling, a common wear point on Maytag top-load models",
      "Broken or slipped drive belt",
      "Failed motor coupling connecting the motor to the transmission",
      "Worn transmission itself, though this is less common than the parts above",
    ],
    whatToExpect:
      "The agitator dogs and motor coupling are both known wear parts on Maytag top-load washers and are the first things we check, since they're the most common cause and a straightforward repair. We confirm the actual point of failure before recommending any parts replacement.",
    faqs: [
      {
        question: "Is a Maytag washer not agitating an expensive repair?",
        answer:
          "In most cases, no. The most common causes, worn agitator dogs or a failed motor coupling, are relatively inexpensive parts to replace. A worn transmission is less common and would cost more, but we'll confirm the actual cause before quoting you.",
      },
      {
        question: "Why does my washer spin fine but not agitate?",
        answer:
          "Spinning and agitating are driven by different parts of the same drive system, so it's possible for one to fail while the other keeps working. This is exactly the pattern we see with worn agitator dogs or a failed motor coupling.",
      },
    ],
  },
]

export function getBrandIssuePage(
  brandSlug: string,
  issueSlug: string
): BrandIssuePage | undefined {
  return brandIssuePages.find(
    (p) => p.brandSlug === brandSlug && p.issueSlug === issueSlug
  )
}

export function getBrandIssuePageByLabel(
  brandSlug: string,
  matchedCommonIssue: string
): BrandIssuePage | undefined {
  return brandIssuePages.find(
    (p) => p.brandSlug === brandSlug && p.matchedCommonIssue === matchedCommonIssue
  )
}

export function getIssueSlugsForBrand(brandSlug: string): string[] {
  return brandIssuePages
    .filter((p) => p.brandSlug === brandSlug)
    .map((p) => p.issueSlug)
}
