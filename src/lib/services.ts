// ============================================================
// RS Travel — SERVICES CONFIGURATION
// All 8 service types with content templates
// ============================================================

export interface ServiceData {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  description: string;
  startingPrice: number;
  priceUnit: string;
  features: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

export const services: ServiceData[] = [
  {
    slug: "one-way-cab",
    name: "One Way Cab",
    shortName: "One Way",
    icon: "🚗",
    description: "Travel one way and pay only for what you use — there's no return fare to worry about. Our one-way cabs are perfect for hopping between cities, with experienced drivers, fully air-conditioned cars, and clear, upfront pricing. Whether it's a commute to the office, a hospital visit, a railway station drop, or any single-direction journey, we've got you covered.",
    startingPrice: 1799,
    priceUnit: "onwards",
    features: [
      "You pay just for the outward journey — zero return charges",
      "Air-conditioned car with a trained driver",
      "Pickup and drop right at your doorstep",
      "Serving every city across Jharkhand",
      "Wide choice of vehicles — hatchback, sedan, and SUV",
      "Tolls and driver allowance bundled in"
    ],
    benefits: [
      "Cut costs by 40-50% versus booking a return trip",
      "No idle-time charges, unlike autos or shared rides",
      "Transparent, fixed fare agreed before you book",
      "A cab all to yourself — no strangers, no shared seats",
      "Room for luggage — pack exactly what you need",
      "Available around the clock, including holidays and late nights"
    ],
    faqs: [
      {
        question: "What does a one-way cab from {city} cost?",
        answer: "One-way fares from {city} start at ₹{price}, depending on where you're headed. Hatchbacks are the most economical, while SUVs and the Innova Crysta sit higher up the price scale. Call +917979877450 for an exact quote."
      },
      {
        question: "How do I book a one-way cab in {city}?",
        answer: "Booking is simple — call +91 79798 77450 or drop a WhatsApp message with your pickup point, destination, travel date, and preferred vehicle. We'll confirm your booking right away."
      },
      {
        question: "Is a one-way cab more economical than a round trip in {city}?",
        answer: "Yes! Since you only pay for travel in one direction, a one-way cab from {city} is 40-50% cheaper than a round trip — no return fare and no waiting charges."
      },
      {
        question: "Which vehicles can I book for a one-way trip from {city}?",
        answer: "For one-way trips from {city} we offer the Swift Dzire, Honda City, Toyota Innova, Innova Crysta, Ertiga, and Tempo Traveller. Every car is air-conditioned, GPS-tracked, and regularly serviced."
      },
      {
        question: "Can I hire a one-way cab at night from {city}?",
        answer: "Certainly — RS Travel's one-way service from {city} runs 24/7, covering late-night pickups and early-morning departures. All our drivers are police-verified for your peace of mind."
      }
    ]
  },
  {
    slug: "round-trip-cab",
    name: "Round Trip Cab",
    shortName: "Round Trip",
    icon: "🔄",
    description: "Heading out and coming back? A round-trip cab locks in your return journey in one booking. You get 10% off the return leg, making it a smart pick for weekend escapes, family outings, and work trips. Your driver waits at the destination and brings you home the same day or whenever you choose.",
    startingPrice: 2999,
    priceUnit: "onwards",
    features: [
      "Save 10% on the return leg of your trip",
      "One familiar driver for the entire round journey",
      "Driver wait time is built into the fare",
      "Return whenever suits you — schedules are flexible",
      "Multi-day round trips can be arranged",
      "One all-inclusive price covering tolls and fuel"
    ],
    benefits: [
      "The same dependable driver stays with you throughout",
      "Skip the headache of hunting for a return cab",
      "Enjoy 10% off the return trip fare",
      "Your car is ready at the destination — you're in control of the schedule",
      "Overnight driver-stay arrangements for multi-day travel",
      "Perfect fit for weekend getaways and family holidays"
    ],
    faqs: [
      {
        question: "How much does a round-trip cab from {city} cost?",
        answer: "Round-trip fares from {city} start at ₹{price}, with 10% off the return leg. The final price depends on your destination and the vehicle you choose. Call +917979877450 for a precise quote."
      },
      {
        question: "Is booking a round trip cheaper than two separate one-way cabs?",
        answer: "Yes! A round trip from {city} offers 10% off the return fare and keeps the same driver for both directions — typically 15-20% cheaper than booking two independent one-way cabs."
      },
      {
        question: "How long does the driver wait at the destination?",
        answer: "For same-day round trips from {city}, up to 4 hours of driver waiting time is included. For multi-day trips, driver allowance and accommodation are handled separately."
      },
      {
        question: "Are multi-day round trips possible from {city}?",
        answer: "Yes — we arrange multi-day round trips from {city}. Driver stay, allowance, and parking are all included. Call +917979877450 to discuss multi-day packages."
      },
      {
        question: "Can I change my return date on a round-trip booking?",
        answer: "Yes, just let us know at least 6 hours ahead and we'll move your return date. Call or WhatsApp +917979877450 to reschedule your round-trip cab from {city}."
      }
    ]
  },
  {
    slug: "outstation-cab",
    name: "Outstation Cab",
    shortName: "Outstation",
    icon: "🛣️",
    description: "Go beyond the city with our outstation cab service. Enjoy relaxed, long-distance travel in air-conditioned cars driven by veterans who know every route like the back of their hand. Whether you need a one-way drop, a round trip, or a multi-city tour, we have a package that fits.",
    startingPrice: 1999,
    priceUnit: "onwards",
    features: [
      "Interstate, long-distance travel",
      "Drivers seasoned on highway routes",
      "All-inclusive fare covering tolls and fuel",
      "Both one-way and round-trip options",
      "Multi-city tour itineraries",
      "Round-the-clock roadside support"
    ],
    benefits: [
      "Stay comfortable through long, tiring stretches",
      "Drivers who know interstate routes inside out",
      "Tolls, fuel, and driver charges all in one price",
      "Stop wherever you like — the itinerary is flexible",
      "No queues for trains or buses",
      "True door-to-door service from your doorstep"
    ],
    faqs: [
      {
        question: "What does an outstation cab from {city} charge?",
        answer: "Outstation trips from {city} start at ₹{price} depending on your destination. We offer competitive rates on hatchbacks, sedans, SUVs, and the Tempo Traveller. Call +917979877450 for destination-wise pricing."
      },
      {
        question: "Which routes do outstation cabs from {city} cover?",
        answer: "From {city} we cover all major destinations — Kolkata, Ranchi, Patna, Dhanbad, Bokaro, Puri, Bhubaneswar, and more. If a city is on your list, call us and we'll make it happen."
      },
      {
        question: "Are tolls part of the outstation fare?",
        answer: "For most routes from {city}, toll charges are included in the quoted fare. Interstate state taxes, where applicable, may be billed separately."
      },
      {
        question: "Can I book an outstation cab a day in advance from {city}?",
        answer: "Yes, advance bookings are welcome. We suggest reserving 6-12 hours ahead to guarantee availability. Call +917979877450 to lock in your cab."
      },
      {
        question: "Does the outstation cab from {city} come with a driver?",
        answer: "Yes, every outstation cab from {city} is driven by an experienced, police-verified professional. For safety reasons we don't offer self-drive."
      }
    ]
  },
  {
    slug: "local-taxi",
    name: "Local Taxi",
    shortName: "Local",
    icon: "🏙️",
    description: "Rent a cab by the hour for all your travel within the city. Pick between a 4-hour/40km or 8-hour/80km package and use it however you need — shopping runs, hospital visits, sightseeing, or a string of errands across town.",
    startingPrice: 799,
    priceUnit: "for 4hr/40km",
    features: [
      "Choose the 4hr/40km or 8hr/80km plan",
      "Unlimited stops within city limits",
      "Driver waits at every stop",
      "Air-conditioned hatchback, sedan, or SUV",
      "Time is yours to use within the package",
      "Extend at a per-hour rate if you need more time"
    ],
    benefits: [
      "Far more affordable than a string of auto rides",
      "A private cab at your service for the full duration",
      "Hop between shopping, hospital, office — all in one cab",
      "Driver waits so you never chase a new ride",
      "Far more comfortable than travelling by auto",
      "Bookable from 5 AM until midnight"
    ],
    faqs: [
      {
        question: "How much is a local taxi in {city}?",
        answer: "Local taxi fares in {city} start at ₹{price} for the 4hr/40km package in a hatchback. Sedans begin at ₹1,099 and SUVs at ₹1,499 for the same plan, with 8hr/80km packages also available."
      },
      {
        question: "Can a local taxi in {city} make multiple stops?",
        answer: "Yes! Within your package hours and kilometres, you can stop as many times as you like. Shop, visit the hospital, collect family — the cab is all yours."
      },
      {
        question: "What if I cross the package limit?",
        answer: "If you go beyond the 4hr/40km or 8hr/80km package in {city}, extra charges apply at ₹12-15/km and ₹100-150/hour depending on the vehicle. We always inform you before adding charges."
      },
      {
        question: "Can I use a local taxi for airport pickup in {city}?",
        answer: "Yes, a local taxi from {city} can handle airport pickups and drops. That said, our dedicated airport transfer service offers better rates and guaranteed availability."
      },
      {
        question: "Can I book a local taxi for the entire day in {city}?",
        answer: "Yes, full-day (8hr/80km) local taxi packages are available in {city} — great for city tours, sightseeing, and multi-stop business schedules. Call +917979877450."
      }
    ]
  },
  {
    slug: "airport-cab",
    name: "Airport Cab",
    shortName: "Airport",
    icon: "✈️",
    description: "Dependable airport transfers, complete with live flight tracking and a meet-and-greet at arrivals. We keep an eye on your flight so you never have to worry about a missed one, and we handle both pickups and drops to the nearest airports.",
    startingPrice: 1499,
    priceUnit: "onwards",
    features: [
      "We monitor your flight and adjust for delays",
      "Meet and greet service at arrivals",
      "Operational 24/7, including pre-dawn hours",
      "Help with your luggage included",
      "30 minutes of free waiting at the airport",
      "Direct drop-off at the terminal door"
    ],
    benefits: [
      "We track flight status so you're never late",
      "No surge fares, unlike app-based cabs",
      "Fixed fare decided before you book",
      "Catching a 6 AM flight? We're there at 3 AM",
      "Clean car with a roomy boot for bags",
      "A pro driver who knows airport routes cold"
    ],
    faqs: [
      {
        question: "What does an airport cab from {city} cost?",
        answer: "Airport cabs from {city} start at ₹{price}, depending on the airport's distance and the vehicle. Our pricing is fixed and transparent. Call +917979877450 for the exact fare."
      },
      {
        question: "Can I get an early-morning airport cab from {city}?",
        answer: "Yes! We run airport cabs from {city} at any hour — including 3 AM, 4 AM, and 5 AM pickups for early flights. Just book at least 4 hours ahead."
      },
      {
        question: "Do you monitor flight arrivals for pickups?",
        answer: "Yes, for pickups at {city}'s nearest airport we track your flight. If it's delayed, the driver adjusts his timing accordingly — with no extra charge."
      },
      {
        question: "How long does the driver wait at the airport?",
        answer: "Your driver offers 30 minutes of free waiting at the airport for pickups from {city}. Beyond that, a ₹100/hour waiting charge applies."
      },
      {
        question: "Can I book an airport cab for a group from {city}?",
        answer: "Yes — for group airport transfers from {city} we offer the Innova (6-seater), Innova Crysta (7-seater), and Tempo Traveller (12-seater). Call +917979877450 for group bookings."
      }
    ]
  },
  {
    slug: "wedding-cab",
    name: "Wedding Cab",
    shortName: "Wedding",
    icon: "💒",
    description: "Add a touch of magic to your big day with our decorated wedding car service. Choose from premium vehicles dressed in ribbons and flowers, driven by chauffeurs in formal attire. We cater to the baarat, the vidaai, and guest transport across the celebration.",
    startingPrice: 4999,
    priceUnit: "per day",
    features: [
      "Car adorned with ribbons and flowers",
      "Chauffeur in crisp formal wear",
      "Premium options — Crysta, Fortuner, Mercedes",
      "Special packages for baarat and vidaai",
      "Full fleet for guest transportation",
      "Multi-day packages for long weddings"
    ],
    benefits: [
      "Arrive in style and leave a lasting impression",
      "A well-dressed chauffeur elevates the occasion",
      "Premium, beautifully decorated rides for the couple",
      "Guests ride in comfort — no parking headaches",
      "Flexible multi-day plans for destination weddings",
      "Vehicles that look great in every photograph"
    ],
    faqs: [
      {
        question: "How much does a wedding car rental cost in {city}?",
        answer: "Wedding car rentals in {city} start at ₹{price} per day. A decorated Innova Crysta runs ₹6,999, the Fortuner ₹9,999, and luxury vehicles from ₹15,999. Call +917979877450 for packages."
      },
      {
        question: "Do you supply decorated cars for weddings in {city}?",
        answer: "Yes! We deliver fully decorated wedding cars in {city} with ribbons, flowers, and bows. Decoration is complimentary on our premium wedding packages."
      },
      {
        question: "Can I book several cars for wedding guests in {city}?",
        answer: "Yes, we arrange fleet bookings for guest transport in {city}. From sedans to Tempo Travellers, we can move anywhere from 50 to 500+ guests. Call us for fleet pricing."
      },
      {
        question: "Is a formally dressed chauffeur provided for weddings?",
        answer: "Yes, every wedding booking in {city} includes a chauffeur in formal attire — black suit and tie for premium packages."
      },
      {
        question: "Can I book a baarat car in {city}?",
        answer: "Yes, we offer special baarat packages in {city} featuring a decorated car, slow-drive mode, and a coordinated procession fleet. Call +917979877450."
      }
    ]
  },
  {
    slug: "corporate-cab",
    name: "Corporate Cab",
    shortName: "Corporate",
    icon: "🏢",
    description: "A polished corporate cab service built for business — monthly packages, employee transport, and end-to-end travel solutions. You get proper GST billing, a dedicated account manager, and a fleet tailored to your company's needs.",
    startingPrice: 15999,
    priceUnit: "per month",
    features: [
      "Monthly and quarterly plans available",
      "GST invoicing and corporate billing",
      "Your own account manager",
      "Employee pickup and drop service",
      "Routes planned around your needs",
      "Live GPS tracking across the fleet"
    ],
    benefits: [
      "Save 30-40% over ad-hoc daily bookings",
      "GST billing for tax advantages",
      "A fleet reserved exclusively for your organisation",
      "Safer commutes with GPS-monitored vehicles",
      "Monthly usage reports and analytics",
      "Easy cancellation and rescheduling"
    ],
    faqs: [
      {
        question: "What do corporate cab packages cost in {city}?",
        answer: "Corporate packages in {city} begin at ₹{price}/month for a dedicated sedan. Pricing is customised around routes, timings, and fleet size. Call +917979877450 for a corporate quote."
      },
      {
        question: "Do you issue GST invoices for corporate cabs?",
        answer: "Yes, all corporate cab services in {city} come with proper GST invoicing. We also send monthly summaries to help your accounts team."
      },
      {
        question: "Can you manage employee transport for our office in {city}?",
        answer: "Absolutely — we specialise in employee transport in {city}, with customised routes, schedules, and dedicated vehicles with trained drivers. We serve companies of 10 to 500+ employees."
      },
      {
        question: "Which vehicles can corporate clients book in {city}?",
        answer: "For corporate travel in {city} we offer the Swift Dzire, Honda City, Toyota Innova, Innova Crysta, and Tempo Traveller. The right choice depends on your team size and route."
      },
      {
        question: "What's the minimum contract term for corporate cabs?",
        answer: "The minimum corporate contract in {city} is 1 month. Quarterly (3-month) and annual contracts earn better rates. Call +917979877450."
      }
    ]
  },
  {
    slug: "pilgrimage-cab",
    name: "Pilgrimage Cab",
    shortName: "Pilgrimage",
    icon: "🙏",
    description: "A dedicated pilgrimage cab service for temple visits and religious journeys. Our drivers know the shrine routes, darshan timings, and local customs, so your trip goes smoothly. We serve Baidyanath Dham, Parasnath, and a host of other sacred destinations.",
    startingPrice: 1999,
    priceUnit: "onwards",
    features: [
      "Drivers who know temple routes well",
      "Well-versed in darshan timings",
      "Packages covering multiple temples",
      "Comfortable cars suited to senior citizens",
      "Flexible waiting time at temples",
      "Transport options for pilgrim groups"
    ],
    benefits: [
      "Skip the stress of navigating unfamiliar temple towns",
      "Drivers who know darshan timings help you save hours",
      "Easier travel for elderly family members",
      "Cover several temples in a single booking",
      "Complete temple-route knowledge from your driver",
      "Special group rates for community pilgrimages"
    ],
    faqs: [
      {
        question: "Do you run cabs to Baidyanath Dham from {city}?",
        answer: "Yes, we run dedicated pilgrimage cabs from {city} to Baidyanath Dham, Deoghar. Our drivers know the temple routes, parking spots, and darshan timings. Call +917979877450."
      },
      {
        question: "How much does a pilgrimage cab from {city} cost?",
        answer: "Pilgrimage fares from {city} start at ₹{price}, depending on the destination. We offer special temple packages that include waiting time. Call for pilgrimage pricing."
      },
      {
        question: "Are your drivers familiar with temple routes and darshan timings?",
        answer: "Yes — our pilgrimage drivers from {city} are experienced with temple routes, parking areas, shoe-deposit points, and darshan timings. They'll help you plan an efficient visit."
      },
      {
        question: "Can I book a cab covering several temples in one trip?",
        answer: "Yes, we offer multi-temple tour packages from {city} — Baidyanath Dham, Parasnath, Rajrappa, and more in a single journey. Call +917979877450 for tour packages."
      },
      {
        question: "Are pilgrimage cabs suitable for senior citizens?",
        answer: "Yes — our pilgrimage cabs from {city} are senior-friendly, with easy entry and exit and drivers who assist elderly passengers throughout the trip."
      }
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug);
}

// Services available per city tier
export function getServicesForCity(tier: 1 | 2 | 3): ServiceData[] {
  if (tier === 3) {
    return services.filter(s =>
      ["one-way-cab", "outstation-cab", "local-taxi", "airport-cab"].includes(s.slug)
    );
  }
  if (tier === 2) {
    // Deoghar gets pilgrimage-cab instead of corporate-cab
    return services;
  }
  return services.filter(s => s.slug !== "pilgrimage-cab");
}
