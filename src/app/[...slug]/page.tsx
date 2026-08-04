import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { jharkhandCities, getCityBySlug } from '@/lib/cities';
import { services, getServiceBySlug, getServicesForCity } from '@/lib/services';
import { fleet, getFleetBySlug, getFleetForCity } from '@/lib/fleet';
import { routes, getRoute, getRoutesByFrom, parseRouteSlug } from '@/lib/routes';
import { localRoutes, getLocalRoute, getLocalRoutesByCity } from '@/lib/localRoutes';
import BookingWidget from '@/components/BookingWidget';
import FaqSection from '@/components/FaqSection';
import Breadcrumb from '@/components/Breadcrumb';
import CtaBanner from '@/components/CtaBanner';
import SchemaMarkup from '@/components/SchemaMarkup';
import HeroSlider from '@/components/HeroSlider';
import BlogSection from '@/components/BlogSection';
import FareCalculator from '@/components/FareCalculator';

// ============================================================
// ROUTE MATCHING
// ============================================================

type PageType =
  | { type: 'city-hub'; citySlug: string }
  | { type: 'service-in-city'; citySlug: string; serviceSlug: string }
  | { type: 'fleet-in-city'; citySlug: string; fleetSlug: string }
  | { type: 'outstation-route'; from: string; to: string }
  | { type: 'local-route'; citySlug: string; routeSlug: string };

function matchRoute(slugParts: string[]): PageType | null {
  // Single segment routes
  if (slugParts.length === 1) {
    const slug = slugParts[0];

    // City Hub: /cab-service-[city]
    if (slug.startsWith('cab-service-')) {
      const citySlug = slug.replace('cab-service-', '');
      if (getCityBySlug(citySlug)) {
        return { type: 'city-hub', citySlug };
      }
    }

    // Outstation Route: /[from]-to-[to]-cab
    const routeParsed = parseRouteSlug(slug);
    if (routeParsed) {
      const route = getRoute(routeParsed.from, routeParsed.to);
      if (route) {
        return { type: 'outstation-route', from: routeParsed.from, to: routeParsed.to };
      }
    }
  }

  // Two-segment routes
  if (slugParts.length === 2) {
    const [first, second] = slugParts;

    // Local Route: /local-taxi-[city]/[area-route]
    if (first.startsWith('local-taxi-')) {
      const citySlug = first.replace('local-taxi-', '');
      const localRoute = getLocalRoute(citySlug, second);
      if (localRoute) {
        return { type: 'local-route', citySlug, routeSlug: second };
      }
    }

    // Service or Fleet in City: /[city]/[service-or-fleet]
    const city = getCityBySlug(first);
    if (city) {
      const service = getServiceBySlug(second);
      if (service) {
        return { type: 'service-in-city', citySlug: first, serviceSlug: second };
      }
      const vehicle = getFleetBySlug(second);
      if (vehicle) {
        return { type: 'fleet-in-city', citySlug: first, fleetSlug: second };
      }
    }
  }

  return null;
}

// ============================================================
// STATIC PARAMS
// ============================================================

export async function generateStaticParams() {
  const params: { slug: string[] }[] = [];

  // City hub pages
  jharkhandCities.forEach(city => {
    params.push({ slug: [`cab-service-${city.slug}`] });
  });

  // Service-in-city pages
  jharkhandCities.forEach(city => {
    services.forEach(service => {
      params.push({ slug: [city.slug, service.slug] });
    });
  });

  // Fleet-in-city pages
  jharkhandCities.forEach(city => {
    fleet.forEach(vehicle => {
      params.push({ slug: [city.slug, vehicle.slug] });
    });
  });

  // Route pages
  routes.forEach(route => {
    params.push({ slug: [`${route.from}-to-${route.to}-cab`] });
  });

  // Local route pages
  localRoutes.forEach(route => {
    params.push({ slug: [`local-taxi-${route.city}`, route.slug] });
  });

  return params;
}

// ============================================================
// METADATA
// ============================================================

interface PageProps {
  params: { slug: string[] };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const matched = matchRoute(params.slug);
  if (!matched) return {};

  switch (matched.type) {
    case 'city-hub': {
      const city = getCityBySlug(matched.citySlug)!;
      const isJSR = city.slug === 'jamshedpur';
      const isRanchi = city.slug === 'ranchi';
      const isTier3 = city.tier === 3;
      const titleName = isJSR ? 'Jamshedpur (Tata)' : city.name;
      const seoName = isJSR ? 'Jamshedpur, Tatanagar' : city.name;
      const customTitle = city.seoTitle || `Cab Service ${titleName} 2026 | ₹${city.localFare.hatchback_4hr} | RS Travel`;

      // Tier-3 small towns: noindex to avoid thin-content penalty
      if (isTier3) {
        return {
          title: `Cab Service ${city.name} | RS Travel Jharkhand`,
          description: `Get a cab in ${city.name} — RS Travel. AC taxi, verified driver, fair rates. ☎ +917979877450`,
          robots: { index: false, follow: false },
        };
      }

      return {
        title: customTitle,
        description: `Leading cab service in ${isJSR ? 'Jamshedpur (Tata)' : city.name} ✅ AC cabs from ₹${city.localFare.hatchback_4hr} ✅ 24/7 ✅ Verified drivers ✅ GPS tracked. Outstation, airport & local taxi. ☎ +917979877450`,
        keywords: [
          `cab service ${city.name.toLowerCase()}`, `taxi ${city.name.toLowerCase()}`, `taxi service ${city.name.toLowerCase()}`,
          `cab booking ${city.name.toLowerCase()}`, `car rental ${city.name.toLowerCase()}`, `best cab ${city.name.toLowerCase()}`,
          `outstation cab ${city.name.toLowerCase()}`, `airport taxi ${city.name.toLowerCase()}`, `local taxi ${city.name.toLowerCase()}`,
          ...(isJSR ? ['cab service in tata', 'tatanagar taxi', 'car rental tata', 'tata cab service', 'tatanagar cab booking', 'tata taxi booking online', 'jamshedpur to ranchi cab 2026', 'tata to ranchi cab fare'] : []),
          ...(isRanchi ? ['ranchi airport cab', 'birsa munda airport taxi', 'ranchi to jamshedpur cab 2026', 'ranchi to tata cab fare', 'hatia station cab'] : []),
          `24/7 cab ${city.name.toLowerCase()}`, `cab near me ${city.name.toLowerCase()}`, `taxi near me ${city.name.toLowerCase()}`,
          `one way cab ${city.name.toLowerCase()}`, `round trip cab ${city.name.toLowerCase()}`,
          `cheapest cab ${city.name.toLowerCase()}`, `RS Travel ${city.name.toLowerCase()}`,
          `best cab service ${city.name.toLowerCase()} 2026`, `cab booking online ${city.name.toLowerCase()}`,
          ...(city.hindiKeywords || []),
          ...(city.nearMeKeywords || []),
          ...(city.localKeywords || []),
        ],
        alternates: { canonical: `https://rstravelsjsr.com/cab-service-${city.slug}` },
        openGraph: {
          title: `Top Cab Service in ${titleName} 2026 | RS Travel`,
          description: `Reserve an AC cab in ${seoName}. One way, round trip, outstation, airport & local rides from ₹${city.localFare.hatchback_4hr}. Verified drivers, GPS tracked. ☎ +917979877450`,
          url: `https://rstravelsjsr.com/cab-service-${city.slug}`,
          images: [{ url: '/background/rsbg1.webp', width: 1200, height: 630, alt: `Top Cab Service in ${titleName} — RS Travel Jharkhand` }],
        },
        twitter: {
          card: 'summary_large_image',
          title: `Top Cab Service in ${titleName} 2026 | RS Travel`,
          description: `From ₹${city.localFare.hatchback_4hr}. 24/7 AC cab, verified drivers. ☎ +917979877450`,
          images: ['/background/rsbg1.webp'],
        },
        other: {
          'geo.region': 'IN-JH',
          'geo.placename': `${city.name}, ${city.district}, Jharkhand`,
          'geo.position': `${city.latitude};${city.longitude}`,
          'ICBM': `${city.latitude}, ${city.longitude}`,
          'dateModified': '2026-04-23',
          'revisit-after': '7 days',
          'language': 'English, Hindi',
          'coverage': 'Jharkhand, India',
          'distribution': 'global',
          'rating': 'general',
        },
      };
    }
    case 'service-in-city': {
      const city = getCityBySlug(matched.citySlug)!;
      const service = getServiceBySlug(matched.serviceSlug)!;
      const isJSR = city.slug === 'jamshedpur';
      const titleName = isJSR ? 'Jamshedpur/Tata' : city.name;
      // Tier-3 small towns: noindex thin template pages (same policy as city hubs)
      if (city.tier === 3) {
        return {
          title: `${service.name} ${city.name} | RS Travel`,
          description: `${service.name} in ${city.name} from ₹${service.startingPrice}. AC cab, verified driver. ☎ +917979877450`,
          robots: { index: false, follow: false },
        };
      }
      return {
        title: `${service.name} ${titleName} ₹${service.startingPrice} | RS Travel`,
        description: `${service.name} across ${isJSR ? 'Jamshedpur/Tata' : city.name} from ₹${service.startingPrice} ${service.priceUnit}. AC cab, verified driver, GPS tracked. 24/7 booking ☎ +917979877450`,
        keywords: [
          `${service.name.toLowerCase()} ${city.name.toLowerCase()}`,
          `${service.name.toLowerCase()} in ${city.name.toLowerCase()}`,
          ...(isJSR ? [`${service.name.toLowerCase()} tata`, `${service.name.toLowerCase()} tatanagar`] : []),
          `book ${service.name.toLowerCase()} ${city.name.toLowerCase()}`,
          `${service.slug.replace(/-/g, ' ')} ${city.name.toLowerCase()}`,
          `cheap ${service.name.toLowerCase()} ${city.name.toLowerCase()}`,
          `best ${service.name.toLowerCase()} ${city.name.toLowerCase()}`,
        ],
        alternates: { canonical: `https://rstravelsjsr.com/${city.slug}/${service.slug}` },
        openGraph: {
          title: `${service.name} in ${titleName} | RS Travel`,
          description: `₹${service.startingPrice} ${service.priceUnit}. Book now ☎ +917979877450`,
          url: `https://rstravelsjsr.com/${city.slug}/${service.slug}`,
          images: [{ url: '/background/rsbg1.webp', width: 1200, height: 630, alt: `${service.name} in ${titleName}` }],
        },
      };
    }
    case 'fleet-in-city': {
      const city = getCityBySlug(matched.citySlug)!;
      const vehicle = getFleetBySlug(matched.fleetSlug)!;
      // Tier-3 small towns: noindex thin template pages (same policy as city hubs)
      if (city.tier === 3) {
        return {
          title: `${vehicle.shortName} in ${city.name} | RS Travel`,
          description: `Rent a ${vehicle.shortName} in ${city.name} at ₹${vehicle.perKmRate}/km. Verified driver, GPS tracked. ☎ +917979877450`,
          robots: { index: false, follow: false },
        };
      }
      return {
        title: `${vehicle.shortName} ${city.name} ₹${vehicle.perKmRate}/km | Hire 2026`,
        description: `Rent a ${vehicle.shortName} in ${city.name} at ₹${vehicle.perKmRate}/km. ${vehicle.seatingCapacity}-seater AC, GPS tracked, verified driver. ☎ +917979877450`,
        keywords: [
          `${vehicle.shortName.toLowerCase()} ${city.name.toLowerCase()}`,
          `${vehicle.shortName.toLowerCase()} on rent ${city.name.toLowerCase()}`,
          `hire ${vehicle.shortName.toLowerCase()} ${city.name.toLowerCase()}`,
          `${vehicle.shortName.toLowerCase()} cab ${city.name.toLowerCase()}`,
          `${vehicle.shortName.toLowerCase()} taxi ${city.name.toLowerCase()}`,
          `book ${vehicle.shortName.toLowerCase()} ${city.name.toLowerCase()}`,
          `rent ${vehicle.name.toLowerCase()} ${city.name.toLowerCase()}`,
          `car rental ${vehicle.shortName.toLowerCase()} ${city.name.toLowerCase()}`,
          `${vehicle.name.toLowerCase()} hire ${city.name.toLowerCase()}`,
          `ac taxi ${vehicle.shortName.toLowerCase()} ${city.name.toLowerCase()}`,
          ...(city.slug === 'jamshedpur' ? [`${vehicle.shortName.toLowerCase()} tata`, `${vehicle.shortName.toLowerCase()} tatanagar`, `${vehicle.name.toLowerCase()} hire tata`] : []),
        ],
        alternates: { canonical: `https://rstravelsjsr.com/${city.slug}/${vehicle.slug}` },
        openGraph: {
          title: `${vehicle.name} in ${city.name} | RS Travel`,
          description: `₹${vehicle.perKmRate}/km | ${vehicle.seatingCapacity} seater. Book now ☎ +917979877450`,
          url: `https://rstravelsjsr.com/${city.slug}/${vehicle.slug}`,
          images: [{ url: '/background/rsbg1.webp', width: 1200, height: 630, alt: `${vehicle.name} in ${city.name}` }],
        },
      };
    }
    case 'outstation-route': {
      const route = getRoute(matched.from, matched.to)!;
      const isFromJSR = matched.from === 'jamshedpur';
      const isToJSR = matched.to === 'jamshedpur';
      const fromCity = getCityBySlug(matched.from);
      
      const fromName = isFromJSR ? 'Jamshedpur/Tata' : route.fromName;
      const toName = isToJSR ? 'Jamshedpur/Tata' : route.toName;
      const seoFromName = isFromJSR ? 'Jamshedpur (Tata)' : route.fromName;
      const seoToName = isToJSR ? 'Jamshedpur (Tata)' : route.toName;

      // Hindi route keywords
      const hindiRouteKw: string[] = [];
      if (isFromJSR) hindiRouteKw.push(`जमशेदपुर से ${route.toName} कैब`, `टाटा से ${route.toName} टैक्सी`);
      if (isToJSR) hindiRouteKw.push(`${route.fromName} से जमशेदपुर कैब`, `${route.fromName} से टाटा टैक्सी`);
      if (matched.from === 'ranchi') hindiRouteKw.push(`रांची से ${route.toName} कैब`);
      if (matched.to === 'ranchi') hindiRouteKw.push(`${route.fromName} से रांची कैब`);

      return {
        title: `${seoFromName} to ${seoToName} Cab ₹${route.fares.hatchback.toLocaleString()} | 2026`,
        description: `${seoFromName}→${seoToName} taxi ₹${route.fares.hatchback.toLocaleString()}. ${route.distanceKm}km, ${route.durationHrs}hrs. AC, toll included, verified driver. 24/7 ☎ +917979877450`,
        keywords: [
          `${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()} cab`,
          `${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()} taxi`,
          `${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()} cab fare 2026`,
          `${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()} cab booking`,
          ...(isFromJSR ? [`tata to ${route.toName.toLowerCase()} cab`, `tatanagar to ${route.toName.toLowerCase()} cab`, `car rental tata to ${route.toName.toLowerCase()}`, `tata to ${route.toName.toLowerCase()} taxi fare 2026`] : []),
          ...(isToJSR ? [`${route.fromName.toLowerCase()} to tata cab`, `${route.fromName.toLowerCase()} to tatanagar taxi`, `${route.fromName.toLowerCase()} to tata cab fare 2026`] : []),
          `${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()} taxi fare`,
          `${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()} cab fare`,
          `${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()} distance`,
          `${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()} one way cab`,
          `cab from ${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()}`,
          `taxi from ${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()}`,
          `cheapest cab ${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()}`,
          `outstation cab ${route.fromName.toLowerCase()}`,
          `${route.fromName.toLowerCase()} ${route.toName.toLowerCase()} cab booking`,
          `how much ${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()} cab`,
          `${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()} by car`,
          ...hindiRouteKw,
        ],
        alternates: { canonical: `https://rstravelsjsr.com/${route.from}-to-${route.to}-cab` },
        openGraph: {
          title: `${fromName} to ${toName} Cab 2026 \u2014 \u20b9${route.fares.hatchback.toLocaleString()} Onwards`,
          description: `${route.distanceKm}km \u2022 ${route.durationHrs}hrs. AC cab, toll included, verified driver. Book now \u260e +917979877450`,
          url: `https://rstravelsjsr.com/${route.from}-to-${route.to}-cab`,
          images: [{ url: '/background/rsbg1.webp', width: 1200, height: 630, alt: `${seoFromName} to ${seoToName} Cab Service — RS Travel` }],
        },
        twitter: {
          card: 'summary_large_image',
          title: `${seoFromName} to ${seoToName} Cab \u2014 \u20b9${route.fares.hatchback.toLocaleString()}`,
          description: `${route.distanceKm}km, ${route.durationHrs}hrs. Book \u260e +917979877450`,
        },
        other: {
          'geo.region': 'IN-JH',
          'geo.placename': fromCity ? `${fromCity.name}, Jharkhand` : 'Jharkhand',
          'geo.position': fromCity ? `${fromCity.latitude};${fromCity.longitude}` : '22.8046;86.2029',
          'ICBM': fromCity ? `${fromCity.latitude}, ${fromCity.longitude}` : '22.8046, 86.2029',
          'dateModified': '2026-04-29',
          'revisit-after': '7 days',
        },
      };
    }
    case 'local-route': {
      const lr = getLocalRoute(matched.citySlug, matched.routeSlug)!;
      return {
        title: `Taxi ${lr.fromArea} to ${lr.toArea} ${lr.cityName} | ₹${lr.startingFare} | ☎ +917979877450`,
        description: `Reserve a local taxi from ${lr.fromArea} to ${lr.toArea} in ${lr.cityName} ✅ ₹${lr.startingFare} onwards ✅ ${lr.distanceKm}km ✅ ${lr.durationMin} min ✅ AC cab ✅ Verified driver. Available 24/7. Call +917979877450.`,
        keywords: [
          `${lr.fromArea.toLowerCase()} to ${lr.toArea.toLowerCase()} taxi`,
          `${lr.fromArea.toLowerCase()} to ${lr.toArea.toLowerCase()} cab`,
          `taxi ${lr.fromArea.toLowerCase()} to ${lr.toArea.toLowerCase()} ${lr.cityName.toLowerCase()}`,
          `cab ${lr.fromArea.toLowerCase()} ${lr.cityName.toLowerCase()}`,
          `local taxi ${lr.cityName.toLowerCase()}`,
          `auto ${lr.fromArea.toLowerCase()} to ${lr.toArea.toLowerCase()}`,
          `cab fare ${lr.fromArea.toLowerCase()} to ${lr.toArea.toLowerCase()}`,
          `taxi fare ${lr.fromArea.toLowerCase()} ${lr.cityName.toLowerCase()}`,
          `local cab ${lr.cityName.toLowerCase()}`,
          `hourly taxi ${lr.cityName.toLowerCase()}`,
          `car hire ${lr.fromArea.toLowerCase()} ${lr.cityName.toLowerCase()}`,
        ],
        alternates: { canonical: `https://rstravelsjsr.com/local-taxi-${lr.city}/${lr.slug}` },
        openGraph: {
          title: `Taxi ${lr.fromArea} to ${lr.toArea} \u2014 \u20b9${lr.startingFare}`,
          description: `${lr.distanceKm}km \u2022 ${lr.durationMin}min. Book now \u260e +917979877450`,
          url: `https://rstravelsjsr.com/local-taxi-${lr.city}/${lr.slug}`,
          images: [{ url: '/background/rsbg1.webp', width: 1200, height: 630, alt: `Taxi ${lr.fromArea} to ${lr.toArea}` }],
        },
      };
    }
  }
}

// ============================================================
// PAGE COMPONENT
// ============================================================

export default function DynamicPage({ params }: PageProps) {
  const matched = matchRoute(params.slug);
  if (!matched) notFound();

  switch (matched.type) {
    case 'city-hub':
      return <CityHubPage citySlug={matched.citySlug} />;
    case 'service-in-city':
      return <ServiceInCityPage citySlug={matched.citySlug} serviceSlug={matched.serviceSlug} />;
    case 'fleet-in-city':
      return <FleetInCityPage citySlug={matched.citySlug} fleetSlug={matched.fleetSlug} />;
    case 'outstation-route':
      return <OutstationRoutePage from={matched.from} to={matched.to} />;
    case 'local-route':
      return <LocalRoutePage citySlug={matched.citySlug} routeSlug={matched.routeSlug} />;
  }
}

// ============================================================
// CITY HUB PAGE
// ============================================================

function CityHubPage({ citySlug }: { citySlug: string }) {
  const city = getCityBySlug(citySlug)!;
  const isJSR = city.slug === 'jamshedpur';
  const displayCityName = isJSR ? 'Jamshedpur / Tata' : city.name;
  const cityServices = getServicesForCity(city.tier);
  const cityFleet = getFleetForCity(city.tier);
  const cityRoutes = getRoutesByFrom(city.slug); // Show ALL routes — no slice limit to prevent orphan pages
  const cityLocalRoutes = getLocalRoutesByCity(city.slug);
  const isRanchi = city.slug === 'ranchi';

  const faqs = [
    { question: `What is the cab fare in ${city.name}?`, answer: `A local cab in ${city.name} begins at ₹${city.localFare.hatchback_4hr} for a 4-hour/40km hatchback package. A sedan sets you back ₹${city.localFare.sedan_4hr} and an SUV ₹${city.localFare.suv_4hr}. Ring +917979877450 for outstation rates.` },
    { question: `How to book a cab in ${city.name}?`, answer: `Just WhatsApp us at +91 79798 77450 or give us a call. Tell us your pickup point, drop location, travel date and cab preference — you'll get instant confirmation along with the driver's details. There's no app to install.` },
    { question: `Do you provide cab service at night in ${city.name}?`, answer: `Absolutely — our cabs run 24/7 across ${city.name}, including late-night and early-morning rides. Every driver is police-verified and has 5+ years on the road.` },
    { question: `Which cabs are available in ${city.name}?`, answer: `We keep a fleet of Swift Dzire, Honda City, Toyota Innova, Innova Crysta, Ertiga and Tempo Traveller — every car is air-conditioned, GPS-enabled and sanitized before each trip.` },
    { question: `Do you serve all areas of ${city.name}?`, answer: `We cover every locality in ${city.name} — from ${city.localities.slice(0, 8).join(', ')} to ${city.localities.length - 8}+ other neighbourhoods.` },
    { question: `Is RS Travel cheaper than Ola/Uber in ${city.name}?`, answer: `In most cases, yes. We quote a fixed, upfront price with no surge — Ola and Uber can double or triple rates during rush hour. Our packages begin at ₹${city.localFare.hatchback_4hr} with everything included.` },
    { question: `${city.name} से कैब कैसे बुक करें? (How to book cab in Hindi)`, answer: `WhatsApp पर +91 79798 77450 पर मैसेज या कॉल कीजिए। पिकअप लोकेशन, डेस्टिनेशन, तारीख और गाड़ी का प्रकार बताइए — तुरंत कन्फर्मेशन मिल जाएगा। ऐप डाउनलोड करने की ज़रूरत नहीं।` },
    { question: `What payment modes are accepted?`, answer: `You can pay by cash, UPI (Google Pay, PhonePe, Paytm), credit card, debit card or bank transfer. Corporate customers can also opt for monthly invoicing with GST billing.` },
    { question: `Are your drivers verified in ${city.name}?`, answer: `Fully verified, without exception. Every driver is police-checked, Aadhaar-registered and holds a valid licence. We re-run background checks every 6 months and our drivers average 7+ years of experience.` },
    { question: `Can I book a cab for outstation from ${city.name}?`, answer: `Yes — we run both one-way and round-trip outstation cabs from ${city.name} to every major city. Favourite routes include ${isJSR ? 'Jamshedpur to Ranchi (₹1,499), Kolkata (₹3,999) and Dhanbad (₹1,999)' : isRanchi ? 'Ranchi to Jamshedpur/Tata (₹2,499), Patna (₹5,299) and Kolkata (₹5,999)' : `${city.name} to Ranchi, Kolkata and Patna`}, with toll and fuel covered in the quote.` },
    { question: `Do you provide airport cab service from ${city.name}?`, answer: `We do. ${isJSR ? 'Get a Jamshedpur-to-Ranchi Airport (Birsa Munda) cab from ₹1,499, and we can also arrange Kolkata Airport transfers.' : isRanchi ? 'A Birsa Munda Airport-to-city cab costs from ₹499, with 24/7 pickups and drops and live flight tracking.' : `Airport transfers are available from ${city.name} — the closest airport is ${city.nearestAirport.name}, about ${city.nearestAirport.distance}km away.`}` },
    { question: `Is there free cancellation?`, answer: `Yes — cancel without any charge up to 2 hours before your trip. We process the full refund within 24 hours, no questions asked.` },
    { question: `What is the best cab service in ${city.name} in 2026?`, answer: `RS Travel is the top-rated cab service in ${city.name}, holding a 4.8/5 score from 2,800+ customers. We combine fixed pricing, verified drivers, GPS tracking and round-the-clock availability. Call +917979877450 to book.` },
    { question: `Do you provide corporate cab service in ${city.name}?`, answer: `Yes — monthly corporate plans start at ₹15,999 and include GST invoicing, a dedicated driver, a central billing dashboard and employee shuttle runs. Call +917979877450 for corporate pricing.` },
    ...(isJSR ? [
      { question: `Tatanagar station se cab kaise milegi?`, answer: `Tatanagar Junction (TATA) ke Gate 1 aur Gate 2 par hamare drivers 24/7 ready milenge. +917979877450 par call karein — 5 minute mein cab aapke paas. Bistupur, Mango, Sakchi, Adityapur — har jagah pickup available hai.` },
      { question: `What is Jamshedpur to Ranchi cab fare in 2026?`, answer: `For 2026, the Jamshedpur/Tata to Ranchi fare is Hatchback ₹1,499, Sedan ₹1,499, SUV ₹2,299 and Innova Crysta ₹5,499. That's for 130 km, roughly 3-4 hours via NH-33, toll included. Book on +917979877450.` },
    ] : []),
    ...(isRanchi ? [
      { question: `Ranchi Airport se city cab ka kiraya kitna hai?`, answer: `Birsa Munda Airport se Ranchi city tak cab ka kiraya: Hatchback ₹499 aur Sedan ₹599. 24/7 airport pickup milti hai aur flight tracking ke saath — flight late hone par koi extra charge nahi. Call +917979877450.` },
      { question: `What is Ranchi to Jamshedpur/Tata cab fare in 2026?`, answer: `The 2026 Ranchi to Jamshedpur (Tata) fare works out to Hatchback ₹2,499, Sedan ₹3,199 and SUV ₹4,299. It's 130 km and takes 3-4 hours via NH-33, all inclusive. Book on +917979877450.` },
    ] : []),
  ];

  return (
    <div className="page-content">
      <SchemaMarkup type="city" data={{ areaServed: `${city.name}, Jharkhand`, cityName: city.name, postalCode: city.pincode, latitude: city.latitude, longitude: city.longitude, faqs, reviews: city.reviews, reviewCount: String(city.reviews.length), breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Jharkhand', url: '/' }, { name: `Cab Service ${city.name}`, url: `/cab-service-${city.slug}` }] }} />

      <section className="hero-section">
        <HeroSlider />
        <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Jharkhand', href: '/' },
            { label: `Cab Service ${displayCityName}` },
          ]} />
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'inline-block', padding: '0.35rem 0.85rem', background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: '8px', fontSize: '0.8rem', color: '#f97316', fontWeight: 600, marginBottom: '1rem' }}>
              🏆 #1 Rated Cab Service in {displayCityName} — 2026
            </div>
            <h1 style={{ marginBottom: '1rem' }}>
              <span className="gold-text">{city.seoH1 || `Cab Service in ${isJSR ? 'Jamshedpur/Tata (Tatanagar)' : city.name}`}</span><br />
              <span style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)', color: '#94a3b8', fontWeight: 600 }}>
                Book 24/7 | +91 79798 77450 | AC Cabs from ₹{city.localFare.hatchback_4hr}
              </span>
            </h1>
          </div>
          <BookingWidget defaultFrom={city.name} cityName={city.name} />
        </div>
      </section>

      <div className="container-main">
        {/* Long-form Content Block — Critical for SEO ranking */}
        <section className="section-spacing">
          <div className="content-block">
            <h2>Top-Rated Cab Service in {isJSR ? 'Jamshedpur (Tata/Tatanagar)' : city.name} — 2026 Guide</h2>
            {city.longDescription ? (
              city.longDescription.split('\n\n').map((para, i) => <p key={i} style={{ marginBottom: '0.75rem' }}>{para}</p>)
            ) : (
              <>
                <p>{city.seoDescription}</p>
                <p>Whether it&apos;s a short hop from {city.localities[0]} to {city.localities[1]}, a long outstation journey, or an airport drop, RS Travel has it sorted — {city.tier === 1 ? '50+' : city.tier === 2 ? '30+' : '15+'} verified cabs, 24/7 service, GPS-tracked cars and sanitized AC interiors.</p>
              </>
            )}
            {city.aka.length > 0 && <p><strong>{city.name}</strong> ({city.aka.join(', ')}), sits in <strong>{city.district}</strong> district with a population of {city.population}. The main railhead is {city.railwayStation}, and the nearest airport is {city.nearestAirport.name} ({city.nearestAirport.code}), about {city.nearestAirport.distance}km away.{city.hindiName ? ` In Hindi: ${city.hindiName}` : ''}</p>}
          </div>
        </section>

        {/* How to Book Guide */}
        <section className="section-spacing">
          <div className="content-block">
            <h2>Booking a Cab in {isJSR ? 'Jamshedpur/Tata' : city.name} — Step by Step</h2>
            <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              <p style={{ marginBottom: '0.75rem' }}>Getting a cab in {isJSR ? 'Jamshedpur (Tata/Tatanagar)' : city.name} with RS Travel takes barely two minutes. Follow these steps:</p>
              <ol style={{ paddingLeft: '1.5rem', marginBottom: '0.75rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>Step 1:</strong> Ring <a href="tel:+917979877450" style={{ color: 'var(--primary)' }}>+91 79798 77450</a> or drop a WhatsApp message telling us your pickup point, destination, date/time and the cab you prefer.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Step 2:</strong> We confirm your ride right away and message you the driver&apos;s name, photo, vehicle number and a live GPS tracking link.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Step 3:</strong> Your driver reaches your pickup point about 10 minutes early. You can follow the trip live on GPS.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Step 4:</strong> Sit back and enjoy the journey. Settle the fare after the ride with cash, UPI, Google Pay, PhonePe or card.</li>
              </ol>
              <p>There&apos;s no app to download, no surge pricing and no surprise charges — just dependable {isJSR ? 'cab service in Tata/Jamshedpur' : `cab service in ${city.name}`} from one of Jharkhand&apos;s most trusted travel companies.</p>
            </div>
          </div>
        </section>

        {/* Hindi Content Block — targets Hindi-language searches */}
        <section className="section-spacing">
          <div className="content-block">
            <h2 lang="hi">{city.hindiName || city.name} में टैक्सी और कैब सेवा — पूरी जानकारी</h2>
            <div lang="hi" style={{ color: 'var(--text-secondary)', lineHeight: 1.9 }}>
              <p style={{ marginBottom: '0.75rem' }}>
                अगर आप {city.hindiName || city.name} में कैब, टैक्सी या कार रेंटल की तलाश में हैं, तो RS Travel झारखंड की सबसे भरोसेमंद ट्रैवल कंपनियों में से एक है। {city.hindiName || city.name} और आसपास के इलाकों में हम 24/7 कैब सेवा उपलब्ध कराते हैं — लोकल कैब, आउटस्टेशन ट्रिप, रेलवे स्टेशन पिकअप और एयरपोर्ट ड्रॉप, सब कुछ। बुकिंग के लिए बस <a href="tel:+917979877450" style={{ color: 'var(--primary)' }}>+91 79798 77450</a> पर कॉल करें या WhatsApp पर मैसेज भेजें — कोई ऐप डाउनलोड करने की ज़रूरत नहीं।
              </p>
              <p style={{ marginBottom: '0.75rem' }}>
                हमारी गाड़ियों में Swift Dzire, Honda City, Toyota Innova, Innova Crysta, Ertiga और Tempo Traveller शामिल हैं। हर गाड़ी AC, GPS-ट्रैक्ड और सैनिटाइज़्ड होती है, और हर ड्राइवर पुलिस-वेरिफाइड है। {city.hindiName || city.name} में लोकल कैब का किराया ₹{city.localFare.hatchback_4hr} से शुरू होता है। सारे किराए में फ्यूल और ड्राइवर खर्च शामिल रहता है — पीक आवर्स में कोई सर्ज प्राइसिंग नहीं।
              </p>
              <p style={{ marginBottom: '0.75rem' }}>
                {city.hindiName || city.name} से बाहर की यात्रा के लिए लोकप्रिय रूट हैं: {cityRoutes.slice(0, 3).map(r => `${r.fromName} से ${r.toName} (₹${r.fares.hatchback.toLocaleString()})`).join(', ')}। टोल, फ्यूल और ड्राइवर खर्च सब कुछ किराए में शामिल है — कोई छिपा चार्ज नहीं।
              </p>
              <p>
                {city.railwayStation} रेलवे स्टेशन और {city.nearestAirport.name} एयरपोर्ट ({city.nearestAirport.code}) से भी 24/7 पिकअप और ड्रॉप मिलती है। एयरपोर्ट ट्रांसफर पर फ्लाइट ट्रैकिंग बिल्कुल फ्री है — फ्लाइट लेट होने पर कोई एक्स्ट्रा चार्ज नहीं।
              </p>
            </div>
          </div>
        </section>


        {/* Areas We Cover In Detail */}
        <section className="section-spacing">
          <div className="content-block">
            <h2>Localities We Serve in {isJSR ? 'Jamshedpur/Tata (Tatanagar)' : city.name}</h2>
            <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              <p style={{ marginBottom: '0.75rem' }}>Our {isJSR ? 'cab network reaches every corner of Jamshedpur and Tata Nagar' : `cab network reaches every corner of ${city.name}`}. Here are the main localities we operate in:</p>
              <ul style={{ paddingLeft: '1.5rem', columns: '2', columnGap: '2rem' }}>
                {city.localities.map(area => (
                  <li key={area} style={{ marginBottom: '0.4rem' }}><strong>{area}</strong> — 24/7 pickup and drop covered</li>
                ))}
              </ul>
              {isJSR && <p style={{ marginTop: '0.75rem' }}>Beyond the city we also cover <strong>Adityapur Industrial Area</strong>, <strong>Gamharia</strong>, <strong>Chandil</strong>, <strong>Seraikela</strong> and <strong>Ghatshila</strong>. Want a pickup from <strong>Tatanagar Railway Station</strong>, <strong>XLRI Jamshedpur</strong>, <strong>NIT Jamshedpur</strong>, <strong>Tata Motors Plant</strong> or <strong>Jubilee Park</strong>? Call RS Travel on +91 79798 77450 and we&apos;ll send a cab right over.</p>}
            </div>
          </div>
        </section>

        {/* Station & Transport Hub Info — Dynamic */}
        <section className="section-spacing">
          <div className="content-block">
            <h2>{isJSR ? 'Cabs from Tatanagar Railway Station & the Airport' : isRanchi ? 'Ranchi Junction, Hatia Station & Airport Cab Options' : `${city.railwayStation} & Airport Transfer`}</h2>
            <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              {city.stationInfo ? (
                city.stationInfo.split('\n\n').map((para, i) => <p key={i} style={{ marginBottom: '0.75rem' }}>{para}</p>)
              ) : (
                <>
                  <p style={{ marginBottom: '0.75rem' }}><strong>{city.railwayStation}</strong> is the main rail hub in {city.name}, and you can book an instant 24/7 pickup or drop cab right from the station.</p>
                  <p><strong>{city.nearestAirport.name}</strong> ({city.nearestAirport.code}) sits about {city.nearestAirport.distance}km from the city. We run dependable airport transfers with live flight tracking included.</p>
                </>
              )}
            </div>
          </div>
        </section>

        {/* How to Reach — MASSIVE search volume keyword */}
        {city.transportGuide && (
          <section className="section-spacing">
            <div className="content-block">
              <h2>How to Reach {isJSR ? 'Jamshedpur (Tata/Tatanagar)' : city.name} in 2026</h2>
              <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                {city.transportGuide.split('\n\n').map((para, i) => <p key={i} style={{ marginBottom: '0.75rem' }}>{para}</p>)}
              </div>
            </div>
          </section>
        )}

        {/* Corporate & Institutional — SEO for corporate searches */}
        {city.corporateInfo && (
          <section className="section-spacing">
            <div className="content-block">
              <h2>{isJSR ? 'Corporate Cab Service in Jamshedpur/Tata' : isRanchi ? 'Government, Corporate & Institutional Cab Service in Ranchi' : `Corporate Cab Service in ${city.name}`}</h2>
              <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                {city.corporateInfo.split('\n\n').map((para, i) => <p key={i} style={{ marginBottom: '0.75rem' }}>{para}</p>)}
              </div>
            </div>
          </section>
        )}

        {/* Nearby Attractions with Details — SEO & Internal Links */}
        {city.nearbyAttractions && city.nearbyAttractions.length > 0 && (
          <section className="section-spacing">
            <div className="content-block">
              <h2>Best Getaways Near {city.name} by Cab — 2026 Travel Guide</h2>
              <p style={{ marginBottom: '1rem' }}>Discover the finest tourist spots around {city.name} with RS Travel. Hop into a comfortable AC cab for sightseeing runs, day trips and weekend escapes.</p>
              <div className="services-grid" style={{ marginTop: '1rem' }}>
                {city.nearbyAttractions.map((attraction, i) => (
                  <div key={i} className="glass-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <h3 style={{ fontSize: '1rem', margin: 0 }}>{attraction.type === 'temple' ? '🛕' : attraction.type === 'waterfall' ? '💧' : attraction.type === 'wildlife' ? '🐘' : attraction.type === 'dam' ? '🌊' : attraction.type === 'hill' ? '⛰️' : attraction.type === 'lake' ? '🏞️' : attraction.type === 'museum' ? '🏛️' : '🌿'} {attraction.name}</h3>
                      <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 700, whiteSpace: 'nowrap' }}>{attraction.distanceKm} km</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>{attraction.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Services */}
        <div className="content-block">
          <h2>Cab Services Available in {city.name}</h2>
          <div className="services-grid" style={{ marginTop: '1rem' }}>
            {cityServices.map(s => (
              <a key={s.slug} href={`/${city.slug}/${s.slug}`} className="service-card">
                <div className="icon">{s.icon}</div>
                <h3>{s.name}</h3>
                <div className="price">₹{s.startingPrice} {s.priceUnit}</div>
                <p>in {city.name}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Routes */}
        {cityRoutes.length > 0 && (
          <div className="content-block" style={{ marginTop: '2.5rem' }}>
            <h2>Top Outstation Routes Out of {city.name}</h2>
            <div className="routes-grid" style={{ marginTop: '1rem' }}>
              {cityRoutes.map(r => (
                <a key={`${r.from}-${r.to}`} href={`/${r.from}-to-${r.to}-cab`} className="route-card">
                  <div className="route-info">
                    <h3>{r.fromName} → {r.toName}</h3>
                    <div className="route-meta"><span>📏 {r.distanceKm} km</span><span>⏱️ {r.durationHrs} hrs</span></div>
                  </div>
                  <div className="route-fare">
                    <div className="price">₹{r.fares.hatchback.toLocaleString()}</div>
                    <div className="label">onwards</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Fleet */}
        <div className="content-block" style={{ marginTop: '2.5rem' }}>
          <h2>Available Fleet in {city.name}</h2>
          <div className="fleet-grid" style={{ marginTop: '1rem' }}>
            {cityFleet.map(v => (
              <a key={v.slug} href={`/${city.slug}/${v.slug}`} className="fleet-card" style={{ backgroundImage: `url(${v.image})` }}>
                <div className="icon">{v.icon}</div>
                <h3>{v.shortName}</h3>
                <div className="capacity">{v.seatingCapacity} passengers</div>
                <div className="rate">₹{v.perKmRate}/km</div>
              </a>
            ))}
          </div>
        </div>

        <div className="content-block" style={{ marginTop: '2.5rem' }}>
          <FareCalculator />
        </div>

        {/* Local Routes */}
        {cityLocalRoutes.length > 0 && (
          <div className="content-block" style={{ marginTop: '2.5rem' }}>
            <h2>Local Cab Routes Across {city.name}</h2>
            <div className="internal-links-grid" style={{ marginTop: '0.75rem' }}>
              {cityLocalRoutes.map(r => (
                <a key={r.slug} href={`/local-taxi-${r.city}/${r.slug}`} className="internal-link">🚖 {r.fromArea} → {r.toArea} (₹{r.startingFare})</a>
              ))}
            </div>
          </div>
        )}

        {/* Areas */}
        <div className="content-block" style={{ marginTop: '2.5rem' }}>
          <h2>Coverage Areas in {city.name}</h2>
          <div className="area-tags" style={{ marginTop: '0.75rem' }}>
            {city.localities.map(a => <span key={a} className="area-tag">{a}</span>)}
          </div>
        </div>



        {/* Tourist Places */}
        {city.touristPlaces.length > 0 && (
          <div className="content-block" style={{ marginTop: '2.5rem' }}>
            <h2>Sightseeing in {city.name} by Cab — Top Tourist Spots</h2>
            <p>See the best of {city.name} and its surroundings with RS Travel. Our drivers know the city inside out and will get you to every popular landmark comfortably.</p>
            <div className="area-tags" style={{ marginTop: '0.75rem' }}>
              {city.touristPlaces.map(p => <span key={p} className="area-tag">🏛️ {p}</span>)}
            </div>
          </div>
        )}

        {/* WHY RS Travel vs COMPETITORS */}
        <div className="content-block" style={{ marginTop: '2.5rem' }}>
          <h2>Why RS Travel Stands Out in {city.name}?</h2>
          <p style={{ marginBottom: '1rem' }}>Looking for a cab in {city.name}? There are plenty of choices out there. Here&apos;s a straight comparison of RS Travel against other taxi services and ride-hailing apps:</p>
          <div className="fare-table-container">
            <table className="fare-table">
              <thead>
                <tr>
                  <th>Points</th>
                  <th style={{ color: 'var(--primary)' }}>RS Travel ✅</th>
                  <th>Ola / Uber</th>
                  <th>Local Operators</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Fixed Pricing</td><td style={{ color: '#22c55e' }}>✅ Fixed, no surge</td><td>❌ Peak-hour surge</td><td>❌ Bargaining needed</td></tr>
                <tr><td>Driver Verification</td><td style={{ color: '#22c55e' }}>✅ Police-verified</td><td>⚠️ Minimal screening</td><td>❌ Unverified</td></tr>
                <tr><td>Outstation Trips</td><td style={{ color: '#22c55e' }}>✅ A core strength</td><td>⚠️ Patchy coverage</td><td>⚠️ Hit or miss</td></tr>
                <tr><td>WhatsApp Booking</td><td style={{ color: '#22c55e' }}>✅ 30-second confirm</td><td>❌ App-dependent</td><td>❌ Phone calls only</td></tr>
                <tr><td>GPS Tracking</td><td style={{ color: '#22c55e' }}>✅ Live, real-time</td><td>✅ Available</td><td>❌ Not offered</td></tr>
                <tr><td>24/7 Availability</td><td style={{ color: '#22c55e' }}>✅ Round the clock</td><td>⚠️ Depends on area</td><td>❌ Fixed hours</td></tr>
                <tr><td>Free Cancellation</td><td style={{ color: '#22c55e' }}>✅ Up to 2 hrs prior</td><td>⚠️ Fees involved</td><td>❌ None defined</td></tr>
                <tr><td>Corporate Billing</td><td style={{ color: '#22c55e' }}>✅ Monthly invoicing</td><td>⚠️ Restricted</td><td>❌ Unavailable</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* RS Travel GUARANTEE */}
        <div className="content-block" style={{ marginTop: '2.5rem' }}>
          <h2>What RS Travel Guarantees for {city.name} Customers</h2>
          <div className="services-grid" style={{ marginTop: '1rem' }}>
            {[
              { icon: '🛡️', title: 'Ride Safety', desc: `Every driver on ${city.name} duty is police-verified with 5+ years behind the wheel. Your family's well-being comes first, always.` },
              { icon: '💰', title: 'Price Match Promise', desc: `You'll get some of the sharpest fares in ${city.name}. Spot a lower quote from a legitimate operator? We'll match it.` },
              { icon: '⏰', title: 'Always On Time', desc: `Drivers in ${city.name} reach the pickup point 10 minutes early. We respect your schedule and won't keep you waiting.` },
              { icon: '🔄', title: 'Easy Cancellation', desc: 'Plans changed? Cancel at no cost up to 2 hours before the trip. Full refund, zero questions, processed right away.' },
            ].map((item, i) => (
              <div key={i} className="glass-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.35rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>


        {/* Local Fare Table */}
        <div className="content-block" style={{ marginTop: '2.5rem' }}>
          <h2>Local Cab Rates in {city.name}</h2>
          <div className="fare-table-container" style={{ marginTop: '1rem' }}>
            <table className="fare-table">
              <thead><tr><th>Package</th><th>Hatchback</th><th>Sedan</th><th>SUV</th></tr></thead>
              <tbody>
                <tr><td>4 Hours / 40 km</td><td className="fare-price">₹{city.localFare.hatchback_4hr}</td><td className="fare-price">₹{city.localFare.sedan_4hr}</td><td className="fare-price">₹{city.localFare.suv_4hr}</td></tr>
                <tr><td>8 Hours / 80 km</td><td className="fare-price">₹{city.localFare.hatchback_8hr}</td><td className="fare-price">₹{city.localFare.sedan_8hr}</td><td className="fare-price">₹{city.localFare.suv_8hr}</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="content-block" style={{ marginTop: '2.5rem' }}>
          <h2>Six Reasons to Pick RS Travel in {city.name}</h2>
          <ul className="features-list">
            <li>🚕 In business since 2018, based out of Sonari, Jamshedpur — a local brand people across the region rely on</li>
            <li>🛡️ Every single driver is police-verified and Aadhaar-registered — no exceptions, ever</li>
            <li>📡 Live GPS tracking on every cab — share your location with family in one tap</li>
            <li>💰 Fixed, upfront fares — fuel, tolls and driver allowance folded into the quote</li>
            <li>🔄 Cancel at no charge up to 2 hours before pickup — full refund, no questions asked</li>
            <li>💬 Book through WhatsApp in about a minute: +91 79798 77450 (no app required)</li>
          </ul>
        </div>

        {/* Reviews */}
        <div className="content-block" style={{ marginTop: '2.5rem' }}>
          <h2>What Customers Say — {city.name}</h2>
          <div className="reviews-grid" style={{ marginTop: '1rem' }}>
            {city.reviews.map((r, i) => (
              <div key={i} className="review-card">
                <div className="review-stars">⭐⭐⭐⭐⭐</div>
                <p className="review-text">&ldquo;{r.text}&rdquo;</p>
                <div className="review-author">{r.name} — {city.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="content-block" style={{ marginTop: '2.5rem' }}>
          <h2>Frequently Asked Questions — {city.name} Cabs</h2>
          <div style={{ marginTop: '1rem' }}><FaqSection faqs={faqs} cityName={city.name} /></div>
        </div>

        {/* Google Business Review CTA */}
        <div className="content-block" style={{ marginTop: '2.5rem' }}>
          <div style={{ textAlign: 'center', padding: '2rem 1.5rem', background: 'linear-gradient(135deg, rgba(66,133,244,0.08), rgba(234,67,53,0.06), rgba(251,188,4,0.06), rgba(52,168,83,0.06))', borderRadius: '16px', border: '1px solid rgba(66,133,244,0.15)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⭐⭐⭐⭐⭐</div>
            <h3 style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)', marginBottom: '0.5rem' }}>
              <span className="gold-text">4.8/5</span> on Google — the go-to cab service in {city.name}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.8rem, 2vw, 0.88rem)', marginBottom: '1rem' }}>Happy with our cab service in {city.name}? Tell others about it on Google!</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
              <a href="https://g.page/r/CQtNNAPh6kJlEBM/review" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.5rem', background: 'linear-gradient(135deg, #4285F4, #34A853)', color: '#fff', borderRadius: '10px', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', transition: 'all 0.3s ease', boxShadow: '0 4px 15px rgba(66,133,244,0.3)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                ⭐ Rate Us on Google
              </a>
              <a href="https://g.page/r/CQtNNAPh6kJlEBM" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(66,133,244,0.3)', color: '#4285F4', borderRadius: '10px', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', transition: 'all 0.3s ease' }}>
                📍 View on Google Maps
              </a>
            </div>
          </div>
        </div>

        <BlogSection pageName={city.name} type="city" />

        <div style={{ marginTop: '2.5rem', marginBottom: '2rem' }}>
          <CtaBanner title={`Get a Cab in ${city.name} Today!`} subtitle="24/7 | AC Cabs | Verified Drivers" whatsappMessage={`Hi RS Travel, I want to book a cab in ${city.name}`} />
        </div>
      </div>
    </div>
  );
}

// ============================================================
// SERVICE IN CITY PAGE
// ============================================================

function ServiceInCityPage({ citySlug, serviceSlug }: { citySlug: string; serviceSlug: string }) {
  const city = getCityBySlug(citySlug)!;
  const service = getServiceBySlug(serviceSlug)!;
  const cityRoutes = getRoutesByFrom(city.slug);
  const isJSR = city.slug === 'jamshedpur';
  const displayCityName = isJSR ? 'Jamshedpur/Tata (Tatanagar)' : city.name;

  const faqs = service.faqs.map(f => ({
    question: f.question.replace(/\{city\}/g, city.name),
    answer: f.answer.replace(/\{city\}/g, city.name).replace(/\{price\}/g, String(service.startingPrice)),
  }));

  return (
    <div className="page-content">
      <SchemaMarkup type="service" data={{ areaServed: `${city.name}, Jharkhand`, faqs, reviews: city.reviews, serviceName: service.name, serviceDescription: service.description, price: String(service.startingPrice), priceUnit: service.priceUnit, breadcrumbs: [{ name: 'Home', url: '/' }, { name: `Cab ${city.name}`, url: `/cab-service-${city.slug}` }, { name: service.name, url: `/${city.slug}/${service.slug}` }] }} />
      <section className="hero-section">
        <HeroSlider />
        <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: `Cab ${isJSR ? 'Jamshedpur/Tata' : city.name}`, href: `/cab-service-${city.slug}` },
            { label: `${service.name}` },
          ]} />
          <h1 style={{ marginBottom: '1rem' }}>
            <span className="gold-text">{service.name} in {displayCityName}</span><br />
            <span style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)', color: '#94a3b8', fontWeight: 600 }}>+91 79798 77450 | ₹{service.startingPrice} {service.priceUnit}</span>
          </h1>
          <BookingWidget defaultFrom={city.name} cityName={city.name} />
        </div>
      </section>

      <div className="container-main section-spacing">
        <div className="content-block">
          <h2>RS Travel — {service.name} in {isJSR ? 'Jamshedpur / Tata (Tatanagar)' : city.name}</h2>
          <p>
            RS Travel runs dependable <strong>{service.name}</strong> across {isJSR ? 'Jamshedpur (also known as Tata / Tatanagar)' : city.name} and the areas around it.
            {city.tier === 1
              ? ` ${city.name} is a Tier-1 hub in Jharkhand, so demand for reliable cabs stays high — our 50+ AC vehicles and seasoned drivers mean you always have a cab when you need one, be it a 3 AM pickup or a same-day booking.`
              : city.tier === 2
              ? ` ${city.name} is one of Jharkhand's key towns, and our network covers all the main areas — ${city.localities.slice(0, 4).join(', ')} and many more.`
              : ` ${city.name} is looked after by our locally based partner drivers who know every road and shortcut in the area.`
            }
            {' '}Our {service.name} from {city.name} kicks off at just <strong>₹{service.startingPrice} {service.priceUnit}</strong>, with toll, fuel and driver allowance built into the price. No surge, no hidden extras — the quoted amount is what you pay.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            Operating from our Sonari, Jamshedpur base, RS Travel&apos;s drivers know <strong>{city.name}</strong> well — including the key localities {city.localities.slice(0, 6).join(', ')}{city.localities.length > 6 ? ` plus ${city.localities.length - 6} more areas` : ''}. Whether it&apos;s a pickup at {city.railwayStation} or a drop at {city.nearestAirport.name} ({city.nearestAirport.distance} km away), we&apos;re available 24/7. Call or WhatsApp <strong>+91 79798 77450</strong> to book instantly.
          </p>
          <h3 style={{ marginTop: '1.25rem', marginBottom: '0.5rem' }}>What is {service.name}?</h3>
          <p>{service.description}</p>
        </div>

        {cityRoutes.length > 0 && (
          <div className="content-block">
            <h2>Fare Card for {service.name} from {city.name}</h2>
            <div className="fare-table-container" style={{ marginTop: '1rem' }}>
              <table className="fare-table">
                <thead><tr><th>Destination</th><th>Distance</th><th>Hatchback</th><th>Sedan</th><th>SUV</th><th>Crysta</th></tr></thead>
                <tbody>
                  {cityRoutes.slice(0, 10).map(r => (
                    <tr key={r.to}>
                      <td><a href={`/${r.from}-to-${r.to}-cab`} style={{ color: 'var(--primary)' }}>{r.toName}</a></td>
                      <td>{r.distanceKm} km</td>
                      <td className="fare-price">₹{r.fares.hatchback.toLocaleString()}</td>
                      <td className="fare-price">₹{r.fares.sedan.toLocaleString()}</td>
                      <td className="fare-price">₹{r.fares.suv.toLocaleString()}</td>
                      <td className="fare-price">₹{r.fares.crysta.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>* Toll, driver allowance and fuel are included in these figures.</p>
          </div>
        )}

        <div className="content-block">
          <h2>Why Choose Our {service.name}</h2>
          <ul className="features-list">{service.benefits.map((b, i) => <li key={i}>{b}</li>)}</ul>
        </div>

        <div className="content-block">
          <h2>Features</h2>
          <ul className="features-list">{service.features.map((f, i) => <li key={i}>{f}</li>)}</ul>
        </div>

        <div className="content-block">
          <h2>Service Areas in {city.name}</h2>
          <div className="area-tags" style={{ marginTop: '0.75rem' }}>{city.localities.map(a => <span key={a} className="area-tag">{a}</span>)}</div>
        </div>

        <div className="content-block" style={{ marginTop: '2.5rem' }}>
          <FareCalculator />
        </div>

        <div className="content-block">
          <h2>More Services We Offer in {city.name}</h2>
          <div className="internal-links-grid" style={{ marginTop: '0.75rem' }}>
            {services.filter(s => s.slug !== service.slug).slice(0, 6).map(s => (
              <a key={s.slug} href={`/${city.slug}/${s.slug}`} className="internal-link">{s.icon} {s.name}</a>
            ))}
          </div>
        </div>

        <div className="content-block">
          <h2>Customer Feedback — {service.name} in {city.name}</h2>
          <div className="reviews-grid" style={{ marginTop: '1rem' }}>
            {city.reviews.map((r, i) => (
              <div key={i} className="review-card">
                <div className="review-stars">⭐⭐⭐⭐⭐</div>
                <p className="review-text">&ldquo;{r.text}&rdquo;</p>
                <div className="review-author">{r.name} — {city.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="content-block">
          <h2>Common Questions — {service.name} in {city.name}</h2>
          <div style={{ marginTop: '1rem' }}><FaqSection faqs={faqs} /></div>
        </div>

        <BlogSection pageName={`${city.name} ${service.name}`} type="city" />

        <CtaBanner title={`Arrange ${service.name} in ${city.name} Today!`} subtitle={`₹${service.startingPrice} ${service.priceUnit}`} whatsappMessage={`Hi, I want ${service.name} in ${city.name}`} />
      </div>
    </div>
  );
}

// ============================================================
// FLEET IN CITY PAGE
// ============================================================

function FleetInCityPage({ citySlug, fleetSlug }: { citySlug: string; fleetSlug: string }) {
  const city = getCityBySlug(citySlug)!;
  const vehicle = getFleetBySlug(fleetSlug)!;
  const cityRoutes = getRoutesByFrom(city.slug);
  const isJSR = city.slug === 'jamshedpur';
  const displayCityName = isJSR ? 'Jamshedpur/Tata (Tatanagar)' : city.name;

  const faqs = vehicle.faqs.map(f => ({
    question: f.question.replace(/\{city\}/g, city.name),
    answer: f.answer.replace(/\{city\}/g, city.name).replace(/\{price\}/g, String(vehicle.perKmRate)),
  }));

  const fareKey = vehicle.slug === 'tempo-traveller' ? 'tempo' : vehicle.slug === 'innova-crysta' ? 'crysta' : vehicle.slug.includes('innova') || vehicle.slug.includes('ertiga') ? 'suv' : vehicle.slug.includes('dzire') ? 'sedan' : 'hatchback';

  return (
    <div className="page-content">
      <SchemaMarkup type="fleet" data={{ areaServed: `${city.name}, Jharkhand`, faqs, reviews: city.reviews, vehicleName: vehicle.shortName, vehicleDescription: vehicle.description, vehicleImage: vehicle.image, price: String(vehicle.perKmRate), seatingCapacity: vehicle.seatingCapacity, breadcrumbs: [{ name: 'Home', url: '/' }, { name: `Cab ${city.name}`, url: `/cab-service-${city.slug}` }, { name: vehicle.shortName, url: `/${city.slug}/${vehicle.slug}` }] }} />
      <section className="hero-section">
        <HeroSlider />
        <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: `Cab ${isJSR ? 'Jamshedpur/Tata' : city.name}`, href: `/cab-service-${city.slug}` },
            { label: vehicle.shortName },
          ]} />
          <h1 style={{ marginBottom: '1rem' }}>
            <span className="gold-text">{vehicle.name} in {displayCityName}</span><br />
            <span style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)', color: '#94a3b8', fontWeight: 600 }}>Book Now +91 79798 77450 | ₹{vehicle.perKmRate}/km</span>
          </h1>
          <BookingWidget defaultFrom={city.name} cityName={city.name} />
        </div>
      </section>

      <div className="container-main section-spacing">
        <div className="content-block">
          <h2>RS Travel — {vehicle.shortName} Hire in {isJSR ? 'Jamshedpur / Tata (Tatanagar)' : city.name}</h2>
          <p>
            Need a <strong>{vehicle.shortName}</strong> in {isJSR ? 'Jamshedpur (Tata/Tatanagar)' : city.name}? RS Travel has clean, well-kept {vehicle.shortName} cabs on call across {city.name} and every nearby area.
            The {vehicle.shortName} is a great match for {vehicle.seatingCapacity <= 4 ? 'solo travellers, couples and small families' : vehicle.seatingCapacity <= 7 ? 'families and small groups' : 'large groups, corporate teams and pilgrimages'} — you can use it for local runs in {city.name}, outstation trips, airport transfers or corporate travel.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            In {city.name}, you can book our {vehicle.shortName} for outstation runs from as little as <strong>₹{vehicle.perKmRate}/km</strong>. For trips inside {city.name}, the 4hr/40km and 8hr/80km packages are handy for shopping trips, hospital visits and city tours. We cover every key area — {city.localities.slice(0, 5).join(', ')} and beyond — with doorstep pickup and drop-off wherever you need it. Call or WhatsApp <strong>+91 79798 77450</strong>.
          </p>
          <h3 style={{ marginTop: '1.25rem', marginBottom: '0.5rem' }}>About {vehicle.shortName}</h3>
          <p>{vehicle.description}</p>
        </div>

        <div className="content-block">
          <h2>Specifications</h2>
          <div className="fare-table-container" style={{ marginTop: '1rem' }}>
            <table className="fare-table">
              <thead><tr><th>Feature</th><th>Details</th></tr></thead>
              <tbody>{vehicle.specs.map((s, i) => <tr key={i}><td style={{ fontWeight: 600 }}>{s.label}</td><td>{s.value}</td></tr>)}</tbody>
            </table>
          </div>
        </div>

        {cityRoutes.length > 0 && (
          <div className="content-block">
            <h2>{vehicle.shortName} Rates from {city.name}</h2>
            <div className="fare-table-container" style={{ marginTop: '1rem' }}>
              <table className="fare-table">
                <thead><tr><th>Route</th><th>Distance</th><th>Price</th></tr></thead>
                <tbody>
                  {cityRoutes.slice(0, 12).map(r => (
                    <tr key={r.to}>
                      <td><a href={`/${r.from}-to-${r.to}-cab`} style={{ color: 'var(--primary)' }}>{r.fromName} to {r.toName}</a></td>
                      <td>{r.distanceKm} km</td>
                      <td className="fare-price">₹{(r.fares[fareKey as keyof typeof r.fares] || r.fares.sedan).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="content-block">
          <h2>Features</h2>
          <ul className="features-list">{vehicle.features.map((f, i) => <li key={i}>{f}</li>)}</ul>
        </div>
        <div className="content-block">
          <h2>Best For</h2>
          <ul className="features-list">{vehicle.bestFor.map((b, i) => <li key={i}>{b}</li>)}</ul>
        </div>

        <div className="content-block">
          <h2>Other Cabs Available in {city.name}</h2>
          <div className="fleet-grid" style={{ marginTop: '0.75rem' }}>
            {fleet.filter(v => v.slug !== vehicle.slug).slice(0, 4).map(v => (
              <a key={v.slug} href={`/${city.slug}/${v.slug}`} className="fleet-card" style={{ backgroundImage: `url(${v.image})` }}>
                <div className="icon">{v.icon}</div><h3>{v.shortName}</h3><div className="rate">₹{v.perKmRate}/km</div>
              </a>
            ))}
          </div>
        </div>

        <div className="content-block" style={{ marginTop: '2.5rem' }}>
          <FareCalculator />
        </div>

        <div className="content-block">
          <h2>Customer Feedback — {vehicle.shortName} in {city.name}</h2>
          <div className="reviews-grid" style={{ marginTop: '1rem' }}>
            {city.reviews.map((r, i) => (
              <div key={i} className="review-card"><div className="review-stars">⭐⭐⭐⭐⭐</div><p className="review-text">&ldquo;{r.text}&rdquo;</p><div className="review-author">{r.name}</div></div>
            ))}
          </div>
        </div>

        <div className="content-block">
          <h2>Common Questions — {vehicle.shortName} in {city.name}</h2>
          <div style={{ marginTop: '1rem' }}><FaqSection faqs={faqs} /></div>
        </div>

        <BlogSection pageName={`${city.name} ${vehicle.name}`} type="city" />

        <CtaBanner title={`Hire ${vehicle.shortName} in ${city.name} Now!`} subtitle={`₹${vehicle.perKmRate}/km | ${vehicle.seatingCapacity} seater`} whatsappMessage={`Hi, I want ${vehicle.shortName} in ${city.name}`} />
      </div>
    </div>
  );
}

// ============================================================
// OUTSTATION ROUTE PAGE
// ============================================================

function OutstationRoutePage({ from, to }: { from: string; to: string }) {
  const route = getRoute(from, to)!;
  const relatedRoutes = routes.filter(r => r.from === route.from && r.to !== route.to).slice(0, 4);
  const reverseRoute = getRoute(route.to, route.from);
  
  const isFromJSR = from === 'jamshedpur';
  const isToJSR = to === 'jamshedpur';
  const fromName = isFromJSR ? 'Jamshedpur/Tata (Tatanagar)' : route.fromName;
  const toName = isToJSR ? 'Jamshedpur/Tata (Tatanagar)' : route.toName;
  const shortFromName = isFromJSR ? 'Jamshedpur/Tata' : route.fromName;
  const shortToName = isToJSR ? 'Jamshedpur/Tata' : route.toName;

  const fromCity = getCityBySlug(from);
  const toCity = getCityBySlug(to);

  const faqs = [
    { question: `What is ${shortFromName} to ${shortToName} cab fare in 2026?`, answer: `For 2026, the ${shortFromName} to ${shortToName} fare is Hatchback ₹${route.fares.hatchback.toLocaleString()}, Sedan ₹${route.fares.sedan.toLocaleString()}, SUV ₹${route.fares.suv.toLocaleString()}, Innova Crysta ₹${route.fares.crysta.toLocaleString()} and Tempo Traveller ₹${route.fares.tempo.toLocaleString()}. Every figure covers toll, fuel and driver allowance — no surprises on the bill.` },
    { question: `How long does ${shortFromName} to ${shortToName} take by cab?`, answer: `Expect roughly ${route.durationHrs} hours via ${route.nh}. The distance works out to ${route.distanceKm} km, roads are ${route.roadCondition}, and the best time to travel is ${route.bestTime}.` },
    { question: `Which route does the cab take from ${shortFromName} to ${shortToName}?`, answer: `The cab follows ${shortFromName} → ${route.via.join(' → ')} → ${shortToName}. It runs on ${route.nh}, and the roads are ${route.roadCondition}.` },
    { question: `Are tolls included in ${shortFromName} to ${shortToName} cab fare?`, answer: `They are. Around ₹${route.tolls} in tolls is already built into the quoted price, so there's nothing extra at the gate. State taxes may apply if you cross into another state.` },
    { question: `Can I book a one way cab from ${shortFromName} to ${shortToName}?`, answer: `Absolutely. A one-way cab from ${shortFromName} to ${shortToName} starts at ₹${route.fares.hatchback.toLocaleString()}, with no return fare added. Book on WhatsApp or ring +917979877450.` },
    { question: `Which is the best cab type for ${shortFromName} to ${shortToName}?`, answer: `${route.distanceKm > 300 ? 'On this long stretch, go with the Innova Crysta for extra comfort or an SUV (Innova/Ertiga) if you are travelling as a family.' : 'A Swift Dzire (Sedan) balances cost and comfort well; pick an Innova for family rides.'}. Groups of 8-12 fit best in a Tempo Traveller.` },
    { question: `Is ${shortFromName} to ${shortToName} cab available at night?`, answer: `Yes — we run 24/7, covering late nights and early mornings. Our drivers know this route well and are trained for night driving, with GPS tracking on the whole way.` },
    { question: `Is it safe to travel from ${shortFromName} to ${shortToName} by cab?`, answer: `Very safe. Every RS Travel driver is police-verified with 5+ years of experience, and GPS stays live for the whole trip so you can share your location with family. The ${route.nh} highway is well-kept and well-lit too.` },
    { question: `How to book ${shortFromName} to ${shortToName} cab online?`, answer: `Ring +91 79798 77450 or message us on WhatsApp with your pickup point, date/time and cab choice. You'll get instant confirmation along with driver details — no app download required.` },
    { question: `Is RS Travel cheaper than Savaari/Ola for ${shortFromName} to ${shortToName}?`, answer: `Usually, yes. We begin at ₹${route.fares.hatchback.toLocaleString()} all-inclusive, with no surge or hidden fees — on this route we typically come in 15-30% below the aggregator apps.` },
    { question: `Can I stop along the way during ${shortFromName} to ${shortToName} trip?`, answer: `Certainly — pull over for food, photos or sightseeing anywhere en route. ${route.pitStops.length > 0 ? 'Favourite stops: ' + route.pitStops.join(', ') + '.' : ''} Sensible stops are free of charge.` },
    ...(isFromJSR || isToJSR ? [
      { question: `${isFromJSR ? 'जमशेदपुर/टाटा' : route.fromName} से ${isToJSR ? 'जमशेदपुर/टाटा' : route.toName} कैब का किराया कितना है?`, answer: `${isFromJSR ? 'जमशेदपुर (टाटा)' : route.fromName} से ${isToJSR ? 'जमशेदपुर (टाटा)' : route.toName} कैब का किराया: हैचबैक ₹${route.fares.hatchback.toLocaleString()}, सेडान ₹${route.fares.sedan.toLocaleString()}, SUV ₹${route.fares.suv.toLocaleString()}। टोल, फ्यूल और ड्राइवर सब कुछ शामिल है। कॉल करें: +917979877450` },
    ] : []),
    ...(from === 'ranchi' || to === 'ranchi' ? [
      { question: `${from === 'ranchi' ? 'रांची' : route.fromName} से ${to === 'ranchi' ? 'रांची' : route.toName} कैब बुक कैसे करें?`, answer: `+91 79798 77450 पर WhatsApp कीजिए। पिकअप लोकेशन, तारीख और गाड़ी का प्रकार बताएं — तुरंत कन्फर्मेशन मिलेगा। किराया ₹${route.fares.hatchback.toLocaleString()} से शुरू।` },
    ] : []),
  ];

  return (
    <div className="page-content">
      <SchemaMarkup type="route" data={{ from: route.fromName, to: route.toName, distance: route.distanceKm, fare: route.fares.hatchback, areaServed: `${route.fromName} to ${route.toName}`, faqs, reviews: fromCity?.reviews, reviewCount: String(fromCity?.reviews?.length || 3), breadcrumbs: [{ name: 'Home', url: '/' }, { name: `Cab ${route.fromName}`, url: `/cab-service-${route.from}` }, { name: `${route.fromName} to ${route.toName}`, url: `/${route.from}-to-${route.to}-cab` }] }} />

      <section className="hero-section">
        <HeroSlider />
        <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: `Cab ${shortFromName}`, href: `/cab-service-${route.from}` },
            { label: `${shortFromName} to ${shortToName}` },
          ]} />
          <h1 style={{ marginBottom: '1rem' }}>
            <span className="gold-text">{fromName} to {toName} Cab Service 2026</span><br />
            <span style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)', color: '#94a3b8', fontWeight: 600 }}>₹{route.fares.hatchback.toLocaleString()} Onwards | {route.distanceKm} km | {route.durationHrs} hrs | ☎ +91 79798 77450</span>
          </h1>
          <BookingWidget defaultFrom={route.fromName} defaultTo={route.toName} />
        </div>
      </section>

      <div className="container-main section-spacing">
        {/* Quick Fare Box */}
        <div className="quick-fare-box" style={{ marginBottom: '2rem' }}>
          <div className="quick-fare-item"><span className="label">Distance</span><span className="value">{route.distanceKm} km</span></div>
          <div className="quick-fare-item"><span className="label">Duration</span><span className="value">{route.durationHrs} hrs</span></div>
          <div className="quick-fare-item"><span className="label">Starting Fare</span><span className="value green">₹{route.fares.hatchback.toLocaleString()}</span></div>
          <div className="quick-fare-item"><span className="label">Route</span><span className="value">{route.nh}</span></div>
          <div className="quick-fare-item"><span className="label">Tolls</span><span className="value">₹{route.tolls} (incl.)</span></div>
        </div>

        {/* Fare Table */}
        <div className="content-block">
          <h2>{route.fromName} to {route.toName} Cab Fares 2026 — Current Rates</h2>
          <div className="fare-table-container" style={{ marginTop: '1rem' }}>
            <table className="fare-table">
              <thead><tr><th>Cab Type</th><th>Vehicle</th><th>Fare</th><th>Includes</th></tr></thead>
              <tbody>
                <tr><td>Hatchback</td><td>Swift Dzire</td><td className="fare-price">₹{route.fares.hatchback.toLocaleString()}</td><td>Toll + Driver + Fuel</td></tr>
                <tr><td>Sedan</td><td>Honda City / Ciaz</td><td className="fare-price">₹{route.fares.sedan.toLocaleString()}</td><td>Toll + Driver + Fuel</td></tr>
                <tr><td>SUV</td><td>Ertiga / Innova</td><td className="fare-price">₹{route.fares.suv.toLocaleString()}</td><td>Toll + Driver + Fuel</td></tr>
                <tr><td>Premium SUV</td><td>Innova Crysta</td><td className="fare-price">₹{route.fares.crysta.toLocaleString()}</td><td>Toll + Driver + Fuel</td></tr>
                <tr><td>Tempo Traveller</td><td>12-Seater</td><td className="fare-price">₹{route.fares.tempo.toLocaleString()}</td><td>Toll + Driver + Fuel</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>* 10% off on round trip. State taxes extra.</p>
        </div>

        <div className="content-block" style={{ marginTop: '2.5rem' }}>
          <FareCalculator />
        </div>

        {/* Route Details */}
        <div className="content-block">
          <h2>Route Overview</h2>
          <div className="fare-table-container" style={{ marginTop: '1rem' }}>
            <table className="fare-table">
              <tbody>
                <tr><td style={{ fontWeight: 600 }}>Distance</td><td>{route.distanceKm} km</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Time</td><td>{route.durationHrs} hours</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Route</td><td>{route.fromName} → {route.via.join(' → ')} → {route.toName}</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Highway</td><td>{route.nh}</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Road</td><td>{route.roadCondition}</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Tolls</td><td>~₹{route.tolls} (included)</td></tr>
                {route.statesCrossed.length > 1 && <tr><td style={{ fontWeight: 600 }}>States</td><td>{route.statesCrossed.join(' → ')}</td></tr>}
                <tr><td style={{ fontWeight: 600 }}>Best Time</td><td>{route.bestTime}</td></tr>
                {route.pitStops.length > 0 && <tr><td style={{ fontWeight: 600 }}>Pit Stops</td><td>{route.pitStops.join(', ')}</td></tr>}
              </tbody>
            </table>
          </div>
        </div>

        {/* Why Book */}
        <div className="content-block">
          <h2>Why Travellers Book with RS Travel</h2>
          <ul className="features-list">
            <li>Drivers with years of highway experience who know the {route.fromName} to {route.toName} stretch inside out</li>
            <li>Tolls on {route.nh}, fuel and driver allowance all wrapped into the quoted fare</li>
            <li>Round-trip bookings earn a flat 10% discount</li>
            <li>Cabs available 24/7 — early mornings, late nights and holidays included</li>
            <li>GPS-tracked, sanitized AC cabs with spotless interiors</li>
            <li>Cancel at no charge up to 2 hours before pickup</li>
            <li>A range of options — Hatchback, Sedan, SUV, Innova Crysta and Tempo Traveller</li>
            <li>Confirm on WhatsApp in 30 seconds — no app to install</li>
          </ul>
        </div>

        {/* Hindi Content Block — targets Hindi-language searches */}
        <div className="content-block">
          <h2 lang="hi">{(fromCity && fromCity.hindiName) || route.fromName} से {(toCity && toCity.hindiName) || route.toName} कैब / टैक्सी — किराया और बुकिंग</h2>
          <div lang="hi" style={{ color: 'var(--text-secondary)', lineHeight: 1.9 }}>
            <p style={{ marginBottom: '0.75rem' }}>
              अगर आप {(fromCity && fromCity.hindiName) || route.fromName} से {(toCity && toCity.hindiName) || route.toName} जाना चाहते हैं, तो RS Travel के साथ कैब बुक करना सबसे आरामदायक और भरोसेमंद तरीका है। यह रूट लगभग {route.distanceKm} किमी का है और {route.nh} रास्ते से करीब {route.durationHrs} घंटे में पूरा होता है। सड़कें {route.roadCondition.toLowerCase()} हैं और ट्रिप के दौरान आप रास्ते में कहीं भी रुक सकते हैं।
            </p>
            <p style={{ marginBottom: '0.75rem' }}>
              इस रूट का किराया ₹{route.fares.hatchback.toLocaleString()} से शुरू होता है — हैचबैक से लेकर टेम्पो ट्रैवलर तक, हर गाड़ी AC और GPS-ट्रैक्ड है। टोल, फ्यूल और ड्राइवर खर्च सब कुछ किराए में शामिल है, इसलिए बिल में कोई सरप्राइज़ नहीं होगा। राउंड ट्रिप बुक करने पर 10% की छूट भी मिलती है।
            </p>
            <p>
              बुकिंग के लिए <a href="tel:+917979877450" style={{ color: 'var(--primary)' }}>+91 79798 77450</a> पर कॉल करें या WhatsApp पर मैसेज भेजें। हमारी सेवा 24/7 उपलब्ध है, हर ड्राइवर पुलिस-वेरिफाइड है, और पीक आवर्स में कोई सर्ज प्राइसिंग नहीं लगती। कोई ऐप डाउनलोड करने की ज़रूरत नहीं।
            </p>
          </div>
        </div>


        {/* Unique Long-Form Route Guide (hand-crafted for top routes) */}
        {route.longContent && (
          <div className="content-block">
            <h2>Detailed Travel Guide: {fromName} to {toName} by Cab</h2>
            <div style={{ color: 'var(--text-secondary)', lineHeight: 2, fontSize: 'clamp(0.88rem, 2.5vw, 0.98rem)' }}>
              {route.longContent.split('\n\n').map((para, i) => (
                <p key={i} style={{ marginBottom: '1rem' }}>{para}</p>
              ))}
            </div>
          </div>
        )}

        {/* Travel Guide */}
        <div className="content-block">
          <h2>Your Journey: {fromName} to {toName}</h2>
          <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '0.75rem' }}>Planning a trip from <strong>{fromName} to {toName}</strong>? Here&apos;s what to expect on this {route.distanceKm}km drive. Travelling via <strong>{route.nh}</strong>, the cab reaches in roughly <strong>{route.durationHrs} hours</strong>, passing {route.via.join(', ')}. With {route.roadCondition.toLowerCase()} roads, it&apos;s a smooth journey in a car.</p>
            <p style={{ marginBottom: '0.75rem' }}>RS Travel is the most dependable {isFromJSR ? 'Jamshedpur/Tata' : route.fromName} to {isToJSR ? 'Jamshedpur/Tata' : route.toName} <strong>cab service</strong>, with drivers who ply this route every day. Choose between <strong>one-way and round-trip</strong> plans. WhatsApp +91 79798 77450 for instant confirmation.</p>
            <h3 style={{ marginTop: '1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Bus, Train or Cab — What Works Best for {route.fromName} to {route.toName}?</h3>
            <div className="fare-table-container" style={{ marginTop: '0.5rem' }}>
              <table className="fare-table">
                <thead><tr><th>Points</th><th style={{ color: 'var(--primary)' }}>Cab (RS Travel) ✅</th><th>Bus</th><th>Train</th></tr></thead>
                <tbody>
                  <tr><td>Door-to-door</td><td style={{ color: '#22c55e' }}>✅ Pickup at your doorstep</td><td>❌ Bus stand only</td><td>❌ Station only</td></tr>
                  <tr><td>Travel Time</td><td style={{ color: '#22c55e' }}>~{route.durationHrs} hrs (direct)</td><td>~{Math.round(Number(route.durationHrs) * 1.5)} hrs</td><td>Varies by schedule</td></tr>
                  <tr><td>Comfort</td><td style={{ color: '#22c55e' }}>AC cab with reclining seats</td><td>Basic</td><td>Depends on class</td></tr>
                  <tr><td>Luggage</td><td style={{ color: '#22c55e' }}>Ample boot room</td><td>Restricted</td><td>Restricted</td></tr>
                  <tr><td>Flexibility</td><td style={{ color: '#22c55e' }}>Leave anytime, 24/7</td><td>Fixed timetable</td><td>Fixed timetable</td></tr>
                  <tr><td>Family Friendly</td><td style={{ color: '#22c55e' }}>A private cab</td><td>Can get crowded</td><td>Shared seating</td></tr>
                  <tr><td>Stops</td><td style={{ color: '#22c55e' }}>Stop anywhere along the way</td><td>Fixed stops</td><td>Fixed stations</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: '0.75rem' }}>For the <strong>{route.fromName} to {route.toName}</strong> stretch, a cab is by far the most comfortable and convenient pick — especially for families, groups, senior citizens and anyone travelling with luggage. With RS Travel, your ₹{route.fares.hatchback.toLocaleString()} fare already covers toll, fuel and driver allowance, with nothing extra at the end.</p>
          </div>
        </div>

        {/* Travel Tips */}
        <div className="content-block">
          <h2>Smart Tips for Your {route.fromName} to {route.toName} Cab Ride</h2>
          <div className="services-grid" style={{ marginTop: '1rem' }}>
            {[
              { icon: '🌅', title: 'Best Time to Leave', desc: `On the ${route.fromName} to ${route.toName} run (${route.distanceKm}km), try to set off ${Number(route.durationHrs) > 5 ? 'early — 5-6 AM — so you arrive before dark' : 'whenever suits you; the drive lasts about ' + route.durationHrs + ' hours'}. Ideal season: ${route.bestTime}.` },
              { icon: '🍽️', title: 'Where to Eat', desc: `${route.pitStops.length > 0 ? 'Decent dining options at: ' + route.pitStops.join(', ') + '.' : 'Your driver knows the cleanest dhabas on this route.'} Take their advice — they travel here every day.` },
              { icon: '🧳', title: 'Packing Essentials', desc: `For the ${route.fromName} to ${route.toName} journey, pack a valid ID, water bottles, a phone charger (our cabs have USB ports), light snacks and comfortable clothes.` },
              { icon: '📱', title: 'Stay in Touch', desc: 'Send your live location to family straight from our driver\'s GPS-tracked cab. Mobile coverage holds up well across this route via ' + route.nh + '.' },
            ].map((tip, i) => (
              <div key={i} className="glass-card">
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{tip.icon}</div>
                <h3 style={{ fontSize: '0.95rem', marginBottom: '0.35rem' }}>{tip.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pickup/Drop */}
        {route.pickupPoints.length > 0 && (
          <div className="content-block">
            <h2>Pickup Spots in {route.fromName}</h2>
            <div className="area-tags" style={{ marginTop: '0.75rem' }}>{route.pickupPoints.map(p => <span key={p} className="area-tag">📍 {p}</span>)}</div>
          </div>
        )}
        {/* Drop Points */}
        {route.dropPoints.length > 0 && (
          <div className="content-block">
            <h2>Drop-off Spots in {route.toName}</h2>
            <div className="area-tags" style={{ marginTop: '0.75rem' }}>{route.dropPoints.map(p => <span key={p} className="area-tag">📍 {p}</span>)}</div>
          </div>
        )}



        {/* Reverse Route */}
        {reverseRoute && (
          <div className="content-block">
            <h2>Return Trip — {route.toName} to {route.fromName} Cab?</h2>
            <a href={`/${route.to}-to-${route.from}-cab`} className="route-card" style={{ marginTop: '0.75rem' }}>
              <div className="route-info"><h3>{route.toName} → {route.fromName}</h3><div className="route-meta"><span>📏 {reverseRoute.distanceKm} km</span></div></div>
              <div className="route-fare"><div className="price">₹{reverseRoute.fares.hatchback.toLocaleString()}</div><div className="label">onwards</div></div>
            </a>
          </div>
        )}

        {/* Cross-links to City Hub Pages — Critical for PageRank */}
        <div className="content-block">
          <h2>Cab Coverage in {route.fromName} & {route.toName}</h2>
          <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '0.75rem' }}>Want to explore more? Head to our dedicated city pages for full details on fares, fleet and coverage:</p>
            <div className="internal-links-grid" style={{ marginTop: '0.75rem' }}>
              <a href={`/cab-service-${route.from}`} className="internal-link">🏙️ Cab Service in {route.fromName} — Every Service & Fare</a>
              <a href={`/cab-service-${route.to}`} className="internal-link">🏙️ Cab Service in {route.toName} — Every Service & Fare</a>
              {fromCity && <a href={`/${route.from}/outstation-cab`} className="internal-link">🚗 Outstation Cabs Leaving {route.fromName}</a>}
              {toCity && <a href={`/${route.to}/outstation-cab`} className="internal-link">🚗 Outstation Cabs Leaving {route.toName}</a>}
            </div>
          </div>
        </div>

        {/* Related Routes */}
        {relatedRoutes.length > 0 && (
          <div className="content-block">
                  <h2>More Routes from {route.fromName}</h2>
            <div className="routes-grid" style={{ marginTop: '0.75rem' }}>
              {relatedRoutes.map(r => (
                <a key={r.to} href={`/${r.from}-to-${r.to}-cab`} className="route-card">
                  <div className="route-info"><h3>{r.fromName} → {r.toName}</h3><div className="route-meta"><span>{r.distanceKm} km</span><span>{r.durationHrs} hrs</span></div></div>
                  <div className="route-fare"><div className="price">₹{r.fares.hatchback.toLocaleString()}</div></div>
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="content-block">
          <h2>FAQ</h2>
          <div style={{ marginTop: '1rem' }}><FaqSection faqs={faqs} /></div>
        </div>

        {/* Google Business Review CTA */}
        <div className="content-block">
          <div style={{ textAlign: 'center', padding: '2rem 1.5rem', background: 'linear-gradient(135deg, rgba(66,133,244,0.08), rgba(234,67,53,0.06), rgba(251,188,4,0.06), rgba(52,168,83,0.06))', borderRadius: '16px', border: '1px solid rgba(66,133,244,0.15)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⭐⭐⭐⭐⭐</div>
            <h3 style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)', marginBottom: '0.5rem' }}>
              <span className="gold-text">4.8/5</span> on Google — among Jharkhand&apos;s most trusted cab services
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.8rem, 2vw, 0.88rem)', marginBottom: '1rem' }}>Done the {route.fromName} to {route.toName} trip with us? Leave a review and help others plan better!</p>
            <a href="https://g.page/r/CQtNNAPh6kJlEBM/review" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.5rem', background: 'linear-gradient(135deg, #4285F4, #34A853)', color: '#fff', borderRadius: '10px', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', transition: 'all 0.3s ease', boxShadow: '0 4px 15px rgba(66,133,244,0.3)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
              ⭐ Rate Us on Google
            </a>
          </div>
        </div>

        {/* SEO: Why RS Travel vs Competitors for this route */}
        <div className="content-block">
          <h2>Why Choose RS Travel for the {shortFromName} to {shortToName} Route?</h2>
          <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '0.75rem' }}>Searching for a <strong>{route.fromName} to {route.toName} cab service</strong> will throw up plenty of names — Savaari, MakeMyTrip, GozoCabs, EaseMyTrip and assorted local operators. Here&apos;s what makes <strong>RS Travel</strong> the highest-rated pick for this {route.distanceKm}km route:</p>
            <div className="fare-table-container" style={{ marginTop: '0.75rem' }}>
              <table className="fare-table">
                <thead><tr><th>Points</th><th style={{ color: 'var(--primary)' }}>RS Travel ✅</th><th>Savaari/MakeMyTrip</th><th>Local Operators</th></tr></thead>
                <tbody>
                  <tr><td>Starting Fare</td><td style={{ color: '#22c55e' }}>₹{route.fares.hatchback.toLocaleString()}</td><td>₹{Math.round(route.fares.hatchback * 1.2).toLocaleString()}+</td><td>Varies (bargaining)</td></tr>
                  <tr><td>Hidden Charges</td><td style={{ color: '#22c55e' }}>✅ None — all inclusive</td><td>⚠️ Extra toll/tax</td><td>❌ Common</td></tr>
                  <tr><td>Driver Knowledge</td><td style={{ color: '#22c55e' }}>✅ On this route daily</td><td>⚠️ Randomly assigned</td><td>⚠️ Inconsistent</td></tr>
                  <tr><td>Booking Speed</td><td style={{ color: '#22c55e' }}>✅ 30-second WhatsApp</td><td>⚠️ App/website forms</td><td>❌ Phone calls only</td></tr>
                  <tr><td>Cancellation</td><td style={{ color: '#22c55e' }}>✅ Free up to 2 hrs prior</td><td>⚠️ Fees apply</td><td>❌ No clear policy</td></tr>
                  <tr><td>Customer Support</td><td style={{ color: '#22c55e' }}>✅ Direct line, 24/7</td><td>⚠️ Call centre</td><td>❌ Limited reach</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: '0.75rem' }}>Backed by a <strong>4.8★ Google rating</strong> and <strong>2,800+ verified reviews</strong>, RS Travel is a <a href="https://g.page/r/CQtNNAPh6kJlEBM" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>Google Verified</a> operator for {route.fromName} to {route.toName} cab bookings in 2026. Reserve your cab on WhatsApp at <a href="https://wa.me/917979877450" style={{ color: 'var(--primary)' }}>+91 79798 77450</a>.</p>
          </div>
        </div>

        <BlogSection pageName={`${route.fromName} to ${route.toName}`} type="route" />

        {/* Related Routes — Internal Link Network for SEO (fixes 1,084 orphan pages) */}
        {(() => {
          const relatedFromRoutes = getRoutesByFrom(route.from).filter(r => r.to !== route.to).slice(0, 12);
          const relatedToRoutes = getRoutesByFrom(route.to).filter(r => r.to !== route.from).slice(0, 6);
          return (
            <div className="content-block" style={{ marginTop: '2.5rem' }}>
              {relatedFromRoutes.length > 0 && (
                <>
            <h2>More Routes from {route.fromName}</h2>
                  <div className="internal-links-grid" style={{ marginTop: '0.75rem' }}>
                    {relatedFromRoutes.map(r => (
                      <a key={`${r.from}-${r.to}`} href={`/${r.from}-to-${r.to}-cab`} className="internal-link">🚗 {r.fromName} → {r.toName} (₹{r.fares.hatchback.toLocaleString()})</a>
                    ))}
                  </div>
                </>
              )}
              {relatedToRoutes.length > 0 && (
                <div style={{ marginTop: '1.5rem' }}>
                  <h2>Routes Out of {route.toName}</h2>
                  <div className="internal-links-grid" style={{ marginTop: '0.75rem' }}>
                    {relatedToRoutes.map(r => (
                      <a key={`${r.from}-${r.to}`} href={`/${r.from}-to-${r.to}-cab`} className="internal-link">🚗 {r.fromName} → {r.toName} (₹{r.fares.hatchback.toLocaleString()})</a>
                    ))}
                  </div>
                </div>
              )}
              <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
                <a href={`/cab-service-${route.from}`} className="btn-outline">See All {route.fromName} Routes →</a>
              </div>
            </div>
          );
        })()}

        <CtaBanner title={`Reserve Your ${route.fromName} to ${route.toName} Cab!`} subtitle={`₹${route.fares.hatchback.toLocaleString()} onwards | ${route.distanceKm} km`} whatsappMessage={`Hi, I want cab from ${route.fromName} to ${route.toName}`} />
      </div>
    </div>
  );
}

// ============================================================
// LOCAL ROUTE PAGE
// ============================================================

function LocalRoutePage({ citySlug, routeSlug }: { citySlug: string; routeSlug: string }) {
  const lr = getLocalRoute(citySlug, routeSlug)!;
  const otherRoutes = getLocalRoutesByCity(citySlug).filter(r => r.slug !== routeSlug);

  const faqs = [
    { question: `Taxi fare from ${lr.fromArea} to ${lr.toArea}?`, answer: `Fares start at ₹${lr.startingFare} for a Hatchback, ₹${lr.fares.sedan} for a Sedan and ₹${lr.fares.suv} for an SUV. It's a fixed rate — no meter, no haggling.` },
    { question: `How long from ${lr.fromArea} to ${lr.toArea}?`, answer: `Roughly ${lr.durationMin} minutes over ${lr.distanceKm} km, depending on traffic on the day.` },
    { question: `Available 24/7?`, answer: `Yes — the ${lr.fromArea} to ${lr.toArea} taxi runs round the clock. Call or WhatsApp +917979877450.` },
    { question: `Why taxi over auto?`, answer: `You get AC, a fixed fare, luggage room, GPS tracking and a verified driver — all from just ₹${lr.startingFare}.` },
    { question: `Return taxi available?`, answer: `Yes — the ${lr.toArea} to ${lr.fromArea} trip carries the same fare. Call +917979877450.` },
  ];

  return (
    <div className="page-content">
      <SchemaMarkup type="local-route" data={{ areaServed: lr.cityName, faqs }} />

      <section className="hero-section">
        <HeroSlider />
        <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: `Cab ${lr.cityName}`, href: `/cab-service-${lr.city}` },
            { label: `${lr.fromArea} to ${lr.toArea}` },
          ]} />
          <h1 style={{ marginBottom: '1rem' }}>
            <span className="gold-text">Taxi: {lr.fromArea} to {lr.toArea}</span><br />
            <span style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)', color: '#94a3b8', fontWeight: 600 }}>{lr.cityName} | ₹{lr.startingFare} | +91 79798 77450</span>
          </h1>
          <BookingWidget defaultFrom={`${lr.fromArea}, ${lr.cityName}`} defaultTo={`${lr.toArea}, ${lr.cityName}`} cityName={lr.cityName} />
        </div>
      </section>

      <div className="container-main section-spacing">
        <div className="quick-fare-box" style={{ marginBottom: '2rem' }}>
          <div className="quick-fare-item"><span className="label">Distance</span><span className="value">~{lr.distanceKm} km</span></div>
          <div className="quick-fare-item"><span className="label">Time</span><span className="value">~{lr.durationMin} min</span></div>
          <div className="quick-fare-item"><span className="label">Fare</span><span className="value green">₹{lr.startingFare}</span></div>
        </div>

        <div className="content-block">
          <h2>About the {lr.fromArea} to {lr.toArea} Run</h2>
          <p>A dependable, budget-friendly taxi between {lr.fromArea} and {lr.toArea} in {lr.cityName}. The trip spans ~{lr.distanceKm} km and takes ~{lr.durationMin} minutes in an AC cab driven by a professional. Rates are fixed from ₹{lr.startingFare} — no meter, no haggling — and it&apos;s far more comfortable than an auto-rickshaw.</p>
        </div>

        <div className="content-block">
          <h2>Fare</h2>
          <div className="fare-table-container" style={{ marginTop: '1rem' }}>
            <table className="fare-table">
              <thead><tr><th>Cab Type</th><th>Capacity</th><th>Fare</th></tr></thead>
              <tbody>
                <tr><td>🚗 Hatchback</td><td>4 pax</td><td className="fare-price">₹{lr.fares.hatchback}</td></tr>
                <tr><td>🚘 Sedan</td><td>4 pax</td><td className="fare-price">₹{lr.fares.sedan}</td></tr>
                <tr><td>🚙 SUV</td><td>6 pax</td><td className="fare-price">₹{lr.fares.suv}</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-block">
          <h2>Pickup Spots in {lr.fromArea}</h2>
          <div className="area-tags" style={{ marginTop: '0.75rem' }}>{lr.fromLandmarks.map(l => <span key={l} className="area-tag">📍 {l}</span>)}</div>
        </div>
        <div className="content-block">
          <h2>Drop-off Spots in {lr.toArea}</h2>
          <div className="area-tags" style={{ marginTop: '0.75rem' }}>{lr.toLandmarks.map(l => <span key={l} className="area-tag">📍 {l}</span>)}</div>
        </div>

        <div className="content-block">
          <h2>Why Take a Taxi Instead of an Auto</h2>
          <ul className="features-list">
            <li>Fixed fare, zero haggling</li><li>Air-conditioned comfort</li><li>GPS-tracked, verified driver</li>
            <li>Room for luggage</li><li>Door-to-door pickup</li><li>Available around the clock</li>
          </ul>
        </div>

        {otherRoutes.length > 0 && (
          <div className="content-block">
            <h2>More Local Routes in {lr.cityName}</h2>
            <div className="internal-links-grid" style={{ marginTop: '0.75rem' }}>
              {otherRoutes.map(r => <a key={r.slug} href={`/local-taxi-${r.city}/${r.slug}`} className="internal-link">🚖 {r.fromArea} → {r.toArea} (₹{r.startingFare})</a>)}
            </div>
          </div>
        )}

        <div className="content-block"><h2>FAQ</h2><div style={{ marginTop: '1rem' }}><FaqSection faqs={faqs} /></div></div>

        <BlogSection pageName={`${lr.fromArea} to ${lr.toArea} in ${lr.cityName}`} type="route" />

        <CtaBanner title={`Reserve Your ${lr.fromArea} to ${lr.toArea} Taxi — ₹${lr.startingFare}!`} subtitle="24/7 | AC Cab | Professional Driver" whatsappMessage={`Hi, I need taxi from ${lr.fromArea} to ${lr.toArea} in ${lr.cityName}`} />
      </div>
    </div>
  );
}
