/**
 * Blog slug generator — shared between generateStaticParams & sitemap.
 * Includes both hand-curated articles AND slugs that Google is actively crawling.
 * Removing crawled slugs wastes crawl budget on 404s — better to keep them indexed.
 */

const QUALITY_BLOG_SLUGS = [
  // ── RS Travel-specific articles (unique to this brand, NOT shared with sreetravel.com) ──
  'rs-travel-sonari-jamshedpur-story',        // RS Travel origin story — Sonari base unique
  'cab-service-sonari-jamshedpur-guide',      // Sonari area deep guide — unique to RS Travel
  'jamshedpur-to-kolkata-road-trip-guide',    // JSR→Kolkata NH-49 route guide
  'rs-travel-corporate-cab-jamshedpur',       // RS Travel corporate service guide
  'adityapur-industrial-area-cab-guide',      // Adityapur industrial area — RS Travel turf
  'deoghar-baidyanath-darshan-cab-guide',     // Deoghar pilgrimage from RS Travel angle

  // ── Cab fare guides (high-volume price-intent keywords) ──
  'cab-fare-jamshedpur-to-ranchi',
  'cab-fare-jamshedpur-to-kolkata',
  'cab-fare-ranchi-to-kolkata',
  'cab-fare-jamshedpur-to-dhanbad',
  'cab-fare-jamshedpur-to-bokaro',
  'cab-fare-ranchi-to-patna',
  'cab-fare-bokaro-to-ranchi',
  'cab-fare-dhanbad-to-kolkata',
  'cab-fare-jamshedpur-to-deoghar',
  'cab-fare-jamshedpur-to-puri',
  'cab-fare-jamshedpur-to-patna',
  'cab-fare-ranchi-to-dhanbad',

  // ── Car rental guides ──
  'car-rental-jamshedpur',
  'car-rental-ranchi',
  'car-rental-dhanbad',
  'car-rental-bokaro',
  'car-rental-deoghar',

  // ── Local taxi guides ──
  'local-taxi-jamshedpur',
  'local-taxi-ranchi',
  'local-taxi-dhanbad',

  // ── Vehicle guides ──
  'vehicle-guide-innova-cab-jamshedpur',
  'vehicle-guide-innova-crysta-cab-jamshedpur',
  'vehicle-guide-ertiga-cab-jamshedpur',
  'vehicle-guide-tempo-traveller-jamshedpur',
  'vehicle-guide-swift-dzire-cab-jamshedpur',
  'vehicle-guide-luxury-cab-jamshedpur',

  // ── Google-crawled blog slugs (actively indexed — do NOT remove) ──
  'restaurants-kolkata-to-kharagpur',
  'suv-choice-jamshedpur-local-taxi',
  'road-trip-guide-bokaro-to-bodh-gaya',
  'train-vs-cab-jamshedpur-to-prayagraj-allahabad',
  'train-vs-cab-deoghar-tempo-traveller',
  'corporate-travel-jamshedpur-outstation-cab',
];

/**
 * Returns every blog slug that should exist on the site.
 * These are pre-rendered at build time via generateStaticParams.
 * dynamicParams = false ensures any slug NOT in this list returns 404.
 */
export function getAllBlogSlugs(): string[] {
  return [...QUALITY_BLOG_SLUGS];
}

