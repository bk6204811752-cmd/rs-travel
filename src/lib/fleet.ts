// ============================================================
// RS Travel — FLEET CONFIGURATION
// All 7 fleet/vehicle types
// ============================================================

export interface FleetData {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  brand: string;
  model: string;
  type: string;
  image?: string;
  seatingCapacity: number;
  luggageCapacity: string;
  acType: string;
  fuelType: string;
  perKmRate: number;
  features: string[];
  bestFor: string[];
  specs: { label: string; value: string }[];
  description: string;
  faqs: { question: string; answer: string }[];
}

export const fleet: FleetData[] = [
  {
    slug: "swift-dzire-cab",
    name: "Swift Dzire Cab",
    shortName: "Swift Dzire",
    icon: "🚗",
    image: "/fleet/SwiftDzire.svg",
    brand: "Maruti Suzuki",
    model: "Swift Dzire",
    type: "Hatchback / Compact Sedan",
    seatingCapacity: 4,
    luggageCapacity: "2 large + 1 small bag",
    acType: "Full AC",
    fuelType: "Petrol / CNG",
    perKmRate: 12,
    features: [
      "Climate-controlled cabin",
      "Roomy four-seat layout",
      "Excellent mileage at pocket-friendly fares",
      "Generous boot for bags",
      "USB port for charging",
      "Inbuilt audio system"
    ],
    bestFor: [
      "Solo travelers and couples",
      "Short outstation trips (up to 300 km)",
      "Airport transfers",
      "Office commute",
      "Budget-friendly travel"
    ],
    specs: [
      { label: "Seating", value: "4 passengers + driver" },
      { label: "Boot Space", value: "378 liters" },
      { label: "AC", value: "Full automatic AC" },
      { label: "Fuel", value: "Petrol / CNG" },
      { label: "Mileage", value: "22-24 km/l" },
      { label: "Rate", value: "₹12/km onwards" }
    ],
    description: "India's favourite compact sedan, the Maruti Suzuki Swift Dzire, has earned its reputation through dependable performance, thrifty fuel consumption, and a smooth riding experience. Its roomy cabin, practical boot, and strong cooling make it a smart pick for value-minded travellers who still expect comfort. Whether it's a solo run, a couple's getaway, or a small family heading out on a short intercity drive, the Dzire fits the bill.",
    faqs: [
      {
        question: "How much does a Swift Dzire cab cost in {city}?",
        answer: "For outstation journeys, the Swift Dzire is priced from ₹12/km in {city}. Day rentals run ₹999 for a 4hr/40km package, while airport pickups start at ₹1,499. Ring +917979877450 for the latest rates."
      },
      {
        question: "What is the seating capacity of a Swift Dzire cab?",
        answer: "The Swift Dzire seats 4 passengers comfortably along with the driver. Both rows offer generous legroom, and the boot easily swallows 2 large suitcases."
      },
      {
        question: "Is the Swift Dzire a good fit for an outstation trip from {city}?",
        answer: "For distances up to 300 km from {city}, the Swift Dzire is a great companion — affordable to run, light on fuel, and comfortable on long stretches. If you're travelling further or with a bigger group, an Innova or Ertiga would suit you better."
      },
      {
        question: "Is the Swift Dzire air-conditioned?",
        answer: "Absolutely — every Swift Dzire in our {city} fleet comes with fully functional AC and automatic climate control. We make sure the cooling is serviced before each journey."
      },
      {
        question: "Can I hire a Swift Dzire round the clock in {city}?",
        answer: "Yes, our Swift Dzire cabs operate 24/7 in {city}. From a 4 AM airport drop to a late-night drive, just call +917979877450 and we'll arrange it."
      }
    ]
  },
  {
    slug: "innova-cab",
    name: "Innova Cab",
    shortName: "Toyota Innova",
    icon: "🚙",
    image: "/fleet/toyota_innova.svg",
    brand: "Toyota",
    model: "Innova",
    type: "MUV / MPV",
    seatingCapacity: 6,
    luggageCapacity: "4 large bags",
    acType: "Full AC with rear vents",
    fuelType: "Diesel",
    perKmRate: 15,
    features: [
      "Airy six-to-seven seater cabin",
      "Sturdy diesel motor",
      "Separate front and rear cooling zones",
      "Bigger-than-usual luggage hold",
      "Stable, comfortable cruising at highway speeds",
      "Multiple USB ports"
    ],
    bestFor: [
      "Family trips (5-6 people)",
      "Long outstation journeys",
      "Corporate travel",
      "Airport group transfers",
      "Wedding guest transport"
    ],
    specs: [
      { label: "Seating", value: "6-7 passengers + driver" },
      { label: "Boot Space", value: "300+ liters" },
      { label: "AC", value: "Dual zone AC" },
      { label: "Fuel", value: "Diesel" },
      { label: "Engine", value: "2.4L Diesel" },
      { label: "Rate", value: "₹15/km onwards" }
    ],
    description: "Few people movers in India command the trust that the Toyota Innova does. Its robust build, roomy cabin, and pliant ride have made it a mainstay of long journeys. Fitting 6-7 passengers with twin AC zones and generous luggage space, it's the natural pick for family holidays, business runs, and group airport transfers alike. Toyota's legendary engineering keeps every trip safe and comfortable, whatever the road throws at you.",
    faqs: [
      {
        question: "What does it cost to hire an Innova in {city}?",
        answer: "Outstation Innova trips from {city} begin at ₹15/km. For local use, the 4hr/40km package starts at ₹1,699 and airport transfers from ₹2,499. Get in touch on +917979877450."
      },
      {
        question: "How many passengers fit in an Innova?",
        answer: "An Innova seats 6-7 people plus the driver across three rows. To keep the third row clear for luggage, we usually advise travelling with 6 passengers."
      },
      {
        question: "Does the Innova hire in {city} come with a driver?",
        answer: "Every Innova booking in {city} includes a professional, police-verified chauffeur. For safety reasons, we don't offer self-drive Innova rentals."
      },
      {
        question: "Is the Innova well suited to long road trips?",
        answer: "The Innova is arguably the best pick for long highway drives from {city}. Its diesel engine is punchy yet efficient, and it stays composed even on patchy roads."
      },
      {
        question: "Can I book an Innova for a wedding in {city}?",
        answer: "Certainly — Innova cabs are available for weddings in {city}. We can provide decorated vehicles for the baarat as well as transport for guests. Call +917979877450 for wedding rates."
      }
    ]
  },
  {
    slug: "innova-crysta-cab",
    name: "Innova Crysta Cab",
    shortName: "Innova Crysta",
    icon: "👑",
    image: "/fleet/innovacrysta.svg",
    brand: "Toyota",
    model: "Innova Crysta",
    type: "Premium MPV",
    seatingCapacity: 7,
    luggageCapacity: "4 large + 2 small bags",
    acType: "Automatic climate control with rear AC",
    fuelType: "Diesel",
    perKmRate: 18,
    features: [
      "Upmarket 7-seater featuring captain chairs",
      "Automatic climate control",
      "Independent rear AC vent controls",
      "Plush leather seat trim",
      "Charging ports in every row",
      "Built-in GPS navigation"
    ],
    bestFor: [
      "Premium family travel",
      "Corporate VIP transport",
      "Long outstation trips in comfort",
      "Airport transfers for executives",
      "Wedding premium car"
    ],
    specs: [
      { label: "Seating", value: "7 passengers + driver" },
      { label: "Boot Space", value: "300 liters" },
      { label: "AC", value: "Auto climate control" },
      { label: "Fuel", value: "Diesel" },
      { label: "Engine", value: "2.4L / 2.7L" },
      { label: "Rate", value: "₹18/km onwards" }
    ],
    description: "Think of the Innova Crysta as the upgraded edition of India's most dependable people mover. Captain-style seats in the second row, auto climate control, supple leather upholstery, and a smooth diesel powerplant come together for a genuinely premium ride. It's the vehicle of choice for executives, upmarket family holidays, and anyone who wants comfort and status on the road.",
    faqs: [
      {
        question: "How much is an Innova Crysta in {city}?",
        answer: "The Innova Crysta starts at ₹18/km for outstation trips from {city}. Local 4hr/40km packages begin at ₹2,499 and airport runs from ₹3,499. Call +917979877450."
      },
      {
        question: "What's the seating capacity of the Innova Crysta?",
        answer: "The Crysta accommodates 7 passengers plus the driver. With captain seats in the middle row, 6 travellers enjoy the most comfort along with ample room for luggage."
      },
      {
        question: "How does the Innova differ from the Innova Crysta?",
        answer: "The Crysta brings captain seats in place of the Innova's bench, auto climate control, richer leather upholstery, a more powerful engine, and a smoother ride. It's Toyota's top-tier MPV offering."
      },
      {
        question: "Can I take an Innova Crysta outstation from {city}?",
        answer: "Yes, the Innova Crysta is available for outstation travel from {city} to any destination. For long-distance journeys with a touch of luxury, it's hard to beat. Book on +917979877450."
      },
      {
        question: "Is the Innova Crysta offered for airport transfers in {city}?",
        answer: "Yes, we run Innova Crysta airport transfers from {city}. A great fit for executives and families, with a generous boot for all your luggage. Reserve via +917979877450."
      }
    ]
  },
  {
    slug: "ertiga-cab",
    name: "Ertiga Cab",
    shortName: "Maruti Ertiga",
    icon: "🚐",
    image: "/fleet/Mariti_ertiga.svg",
    brand: "Maruti Suzuki",
    model: "Ertiga",
    type: "MPV / Family Car",
    seatingCapacity: 6,
    luggageCapacity: "3 large bags",
    acType: "Full AC with rear vents",
    fuelType: "Petrol / CNG",
    perKmRate: 14,
    features: [
      "Roomy six-seater cabin",
      "Economical fuel consumption",
      "Air vents in the rear",
      "Supple, well-tuned suspension",
      "USB charging point",
      "Bluetooth-enabled audio system"
    ],
    bestFor: [
      "Small families (4-5 people)",
      "Budget-friendly group travel",
      "Weekend outstation trips",
      "Local city tours",
      "Office commute for groups"
    ],
    specs: [
      { label: "Seating", value: "6 passengers + driver" },
      { label: "Boot Space", value: "209 liters" },
      { label: "AC", value: "AC with rear vents" },
      { label: "Fuel", value: "Petrol / CNG" },
      { label: "Mileage", value: "19-21 km/l" },
      { label: "Rate", value: "₹14/km onwards" }
    ],
    description: "Sitting neatly between a sedan and an Innova, the Maruti Suzuki Ertiga gives families the extra room they need without stretching the budget. Six well-padded seats, a sensible amount of luggage space, and genuinely frugal running costs add up to real value. Ideal for weekend family getaways, group airport pickups, and day-long city tours.",
    faqs: [
      {
        question: "What does an Ertiga cab cost in {city}?",
        answer: "Ertiga outstation trips in {city} start at ₹14/km. The local 4hr/40km package begins at ₹1,499. For an exact fare to your destination, call +917979877450."
      },
      {
        question: "How many passengers can travel in an Ertiga?",
        answer: "The Ertiga seats 6 passengers along with the driver across three rows. For outstation journeys with luggage, we'd suggest 5 passengers for extra comfort."
      },
      {
        question: "Is the Ertiga or Innova the better choice for trips?",
        answer: "It depends on priorities. The Ertiga is lighter on the pocket and fine for shorter runs, while the Innova wins for long highways and premium comfort. Budget-conscious families usually lean toward the Ertiga."
      },
      {
        question: "Do you offer Ertiga for outstation trips from {city}?",
        answer: "Yes, the Ertiga is available for outstation journeys from {city} to any destination. It's a firm favourite among families travelling to Kolkata, Ranchi, and surrounding cities."
      },
      {
        question: "Can I rent an Ertiga for a whole day in {city}?",
        answer: "Yes, full-day Ertiga rentals in {city} are available at ₹1,499 for 4hr/40km and ₹2,499 for 8hr/80km. Reach us at +917979877450 to book."
      }
    ]
  },
  {
    slug: "tempo-traveller",
    name: "Tempo Traveller",
    shortName: "Tempo Traveller",
    icon: "🚌",
    image: "/fleet/tampo_traveler.svg",
    brand: "Force Motors",
    model: "Tempo Traveller",
    type: "Mini Bus",
    seatingCapacity: 12,
    luggageCapacity: "10+ bags",
    acType: "Full AC with multiple vents",
    fuelType: "Diesel",
    perKmRate: 22,
    features: [
      "Choose between 12 and 15 seats",
      "Full AC with vents at every seat",
      "Reclining push-back seats",
      "Big roof-top luggage carrier",
      "Audio system with microphone",
      "Window curtains for privacy"
    ],
    bestFor: [
      "Group travel (8-12 people)",
      "Family reunion trips",
      "Pilgrimage group tours",
      "Corporate team outings",
      "Wedding guest transport"
    ],
    specs: [
      { label: "Seating", value: "12-15 passengers + driver" },
      { label: "Luggage", value: "Roof carrier + internal" },
      { label: "AC", value: "Multi-zone AC" },
      { label: "Fuel", value: "Diesel" },
      { label: "Engine", value: "2.6L Diesel" },
      { label: "Rate", value: "₹22/km onwards" }
    ],
    description: "For travelling as a group, nothing beats the Tempo Traveller. It carries 12-15 people in reclining push-back seats with full AC and plenty of room for luggage, topped off by a roof carrier for extra bags. Big families, pilgrimage parties, office outings, and wedding guests all fit comfortably. Splitting the fare across a full van makes it the most economical way to move a crowd.",
    faqs: [
      {
        question: "What's the going rate for a Tempo Traveller in {city}?",
        answer: "Tempo Traveller rentals in {city} start at ₹22/km for outstation trips. A local 4hr/40km package begins at ₹3,499, and a minimum booking charge may apply. Call +917979877450."
      },
      {
        question: "How many passengers fit in a Tempo Traveller?",
        answer: "Depending on the configuration, a Tempo Traveller seats 12-15 passengers. In {city} we offer both the more spacious 12-seater and the higher-capacity 15-seater."
      },
      {
        question: "Can I hire a Tempo Traveller for a pilgrimage from {city}?",
        answer: "Yes, the Tempo Traveller is a top choice for group pilgrimages from {city}. We run special packages to Baidyanath Dham, Parasnath, and other temple circuits."
      },
      {
        question: "Can the Tempo Traveller be booked for several days?",
        answer: "Yes, multi-day Tempo Traveller bookings from {city} are available. Driver stay and allowance, tolls, and parking are all taken care of. Call +917979877450 for multi-day pricing."
      },
      {
        question: "Is the Tempo Traveller air-conditioned?",
        answer: "Yes, every Tempo Traveller in our {city} fleet is fully air-conditioned with vents across all rows. The reclining push-back seats keep everyone comfortable throughout the ride."
      }
    ]
  },
  {
    slug: "sedan-cab",
    name: "Sedan Cab",
    shortName: "Sedan",
    icon: "🚘",
    image: "/fleet/sedan.svg",
    brand: "Various",
    model: "Honda City / Ciaz / Verna",
    type: "Premium Sedan",
    seatingCapacity: 4,
    luggageCapacity: "3 large bags",
    acType: "Automatic climate control",
    fuelType: "Petrol / Diesel",
    perKmRate: 14,
    features: [
      "Refined ride and plush comfort",
      "Automatic climate control",
      "Plenty of rear legroom",
      "Quality interior trim",
      "USB port for devices",
      "Expansive boot space"
    ],
    bestFor: [
      "Business travel",
      "Comfortable long-distance trips",
      "Airport VIP transfers",
      "Client meetings",
      "Special occasions"
    ],
    specs: [
      { label: "Seating", value: "4 passengers + driver" },
      { label: "Boot Space", value: "500+ liters" },
      { label: "AC", value: "Automatic AC" },
      { label: "Fuel", value: "Petrol / Diesel" },
      { label: "Models", value: "Honda City / Ciaz / Verna" },
      { label: "Rate", value: "₹14/km onwards" }
    ],
    description: "Our sedan lineup draws on India's finest — the Honda City, Maruti Ciaz, and Hyundai Verna. Each one brings a silky ride, automatic climate control, generous rear legroom, and classy interiors that suit business trips, client pickups, and anyone who simply values comfort. With a boot that swallows three large suitcases with ease, the sedan is the polished all-rounder of our fleet.",
    faqs: [
      {
        question: "How much does a sedan cab cost in {city}?",
        answer: "Sedan rates in {city} start at ₹14/km for outstation trips. The 4hr/40km local package begins at ₹1,299 and airport transfers from ₹1,999. Call +917979877450."
      },
      {
        question: "Which sedan models do you operate in {city}?",
        answer: "Our sedan options in {city} are the Honda City, Maruti Ciaz, and Hyundai Verna. Depending on availability, you can request a particular model."
      },
      {
        question: "Is a sedan preferable to a hatchback for outstation trips?",
        answer: "Yes — sedans bring superior comfort, extra legroom, a larger boot, and a calmer ride than hatchbacks. They're a great fit for journeys beyond 200 km from {city}."
      },
      {
        question: "Can I use a sedan cab for a business meeting in {city}?",
        answer: "Definitely. Sedan cabs in {city} are ideal for work travel — a courteous driver, spotless car, and a professional feel for client meetings and corporate trips."
      },
      {
        question: "Can I hire a sedan for the full day in {city}?",
        answer: "Yes, full-day sedan rentals are available in {city} — 4hr/40km at ₹1,299 and 8hr/80km at ₹2,199. Extensions are billed at hourly rates."
      }
    ]
  },
  {
    slug: "luxury-cab",
    name: "Luxury Cab",
    shortName: "Luxury",
    icon: "✨",
    image: "/fleet/luxury.svg",
    brand: "Toyota / Mercedes",
    model: "Innova Crysta / Fortuner / Mercedes",
    type: "Luxury Vehicle",
    seatingCapacity: 4,
    luggageCapacity: "4 large bags",
    acType: "Dual zone automatic AC",
    fuelType: "Diesel / Petrol",
    perKmRate: 25,
    features: [
      "Top-tier luxury vehicles",
      "Dressed professional chauffeur",
      "Leather seats and refined interiors",
      "State-of-the-art infotainment",
      "Dual-zone climate control",
      "First-class, VIP-level comfort"
    ],
    bestFor: [
      "VIP and executive travel",
      "Wedding premium car",
      "Celebrity and dignitary transport",
      "Special occasion vehicle",
      "Luxury vacation travel"
    ],
    specs: [
      { label: "Seating", value: "4-7 passengers + chauffeur" },
      { label: "Boot Space", value: "500+ liters" },
      { label: "AC", value: "Dual zone auto AC" },
      { label: "Interior", value: "Premium leather" },
      { label: "Models", value: "Crysta / Fortuner / Mercedes" },
      { label: "Rate", value: "₹25/km onwards" }
    ],
    description: "For travel that feels as special as the occasion, our luxury fleet of Innova Crysta, Toyota Fortuner, and Mercedes-Benz sets the bar. Every booking pairs a smartly dressed chauffeur with leather-lined cabins, dual-zone climate control, and attentive, VIP-grade service. Whether it's an executive, a wedding couple, or a milestone celebration, this is travel for those who settle for nothing less.",
    faqs: [
      {
        question: "Which luxury cars can I book in {city}?",
        answer: "Our luxury options in {city} include the Innova Crysta, Toyota Fortuner, and Mercedes-Benz. Availability shifts day to day, so call +917979877450 to confirm and reserve."
      },
      {
        question: "What do luxury cabs cost in {city}?",
        answer: "Luxury cab rates in {city} begin at ₹25/km. The Innova Crysta runs from ₹18/km, the Fortuner from ₹25/km, and the Mercedes from ₹35/km. Call +917979877450 for a precise quote."
      },
      {
        question: "Are luxury cars bookable for weddings in {city}?",
        answer: "Yes, luxury cars are available for wedding bookings in {city}. We'll provide a decorated Fortuner or Mercedes along with a professional chauffeur. Contact us for wedding packages."
      },
      {
        question: "Do luxury cab bookings include a chauffeur?",
        answer: "Yes, every luxury booking in {city} includes a smartly dressed chauffeur. Self-drive isn't offered for these premium vehicles."
      },
      {
        question: "Can I get a luxury cab for airport transfers?",
        answer: "Yes, luxury airport transfers are available in {city} — ideal for VIP arrivals and executive travel. Reserve ahead on +917979877450."
      }
    ]
  }
];

export function getFleetBySlug(slug: string): FleetData | undefined {
  return fleet.find(v => v.slug === slug);
}

export function getAllFleetSlugs(): string[] {
  return fleet.map(v => v.slug);
}

export function getFleetForCity(tier: 1 | 2 | 3): FleetData[] {
  if (tier === 3) {
    return fleet.filter(v =>
      ["swift-dzire-cab", "innova-cab", "ertiga-cab"].includes(v.slug)
    );
  }
  if (tier === 2) {
    return fleet.filter(v =>
      ["swift-dzire-cab", "innova-cab", "innova-crysta-cab", "ertiga-cab", "tempo-traveller"].includes(v.slug)
    );
  }
  return fleet;
}
