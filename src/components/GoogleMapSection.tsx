"use client";

import { usePathname } from "next/navigation";
import { getCityBySlug } from "@/lib/cities";
import { getRoute, parseRouteSlug } from "@/lib/routes";
import { getLocalRoute } from "@/lib/localRoutes";
import { getServiceBySlug } from "@/lib/services";
import { getFleetBySlug } from "@/lib/fleet";

interface MapInfo {
  isRoute: boolean;
  title: string;
  subtitle: string;
  iframeSrc: string;
  directMapUrl: string;
  locationName: string;
  address: string;
  distanceKm?: number;
  durationHrs?: string;
  durationMin?: number;
  nh?: string;
  via?: string[];
  localities: string[];
  badgeText?: string;
  coverageLabel?: string;
}

/** Capitalize each word in a slug fragment (handles "(allahabad)" → "(Allahabad)"). */
function humanizeSlug(s: string): string {
  const cap = (t: string) =>
    t ? t.charAt(0).toUpperCase() + t.slice(1) : t;
  return s
    .split("-")
    .map((w) => {
      const m = w.match(/^(\(?)(.*?)(\)?)$/);
      if (m) return m[1] + cap(m[2]) + m[3];
      return cap(w);
    })
    .join(" ");
}

function buildOfficeMap(): MapInfo {
  return {
    isRoute: false,
    title: "📍 Visit / Contact RS Travel Office — Jamshedpur",
    subtitle: "Sonari Main Hub • Customer Care & Desk Available 24/7",
    iframeSrc:
      "https://maps.google.com/maps?q=RS+Travel,+Sonari,+Jamshedpur,+Jharkhand+832101&t=&z=14&ie=UTF8&iwloc=&output=embed",
    directMapUrl:
      "https://share.google/30LBOl3p6lv0tKRyX",
    locationName: "RS Travel Office (Sonari)",
    address: "Sonari, Jamshedpur, Jharkhand – 832101",
    localities: ["Sonari", "Bistupur", "Sakchi", "Kadma", "Adityapur", "Mango"],
  };
}

function buildNetworkMap(): MapInfo {
  return {
    isRoute: false,
    title: "📍 RS Travel Service Network & Office Location Map",
    subtitle:
      "Main Hub: Sonari, Jamshedpur • Serving 15+ Cities Across Jharkhand & West Bengal 24/7",
    iframeSrc:
      "https://maps.google.com/maps?q=RS+Travel,+Sonari,+Jamshedpur,+Jharkhand+832101&t=&z=14&ie=UTF8&iwloc=&output=embed",
    directMapUrl:
      "https://share.google/30LBOl3p6lv0tKRyX",
    locationName: "RS Travel Main Desk (Sonari, JSR)",
    address: "Sonari, Jamshedpur, Jharkhand – 832101",
    localities: [
      "Sonari",
      "Tatanagar Station",
      "Ranchi Airport",
      "Kolkata Route",
      "Dhanbad",
      "Bokaro",
    ],
  };
}

/** Outstation route map (from-to-cab) with optional route metadata. */
function buildRouteMap(
  fromName: string,
  toName: string,
  route?: ReturnType<typeof getRoute>
): MapInfo {
  return {
    isRoute: true,
    title: `📍 Driving Route & Highway Map — ${fromName} to ${toName}`,
    subtitle: `${route?.distanceKm ? `${route.distanceKm} km • ` : ""}${
      route?.durationHrs ? `Approx. ${route.durationHrs} hrs • ` : ""
    }${route?.nh ? `Via ${route.nh} • ` : ""}24/7 One Way & Outstation Cab`,
    iframeSrc: `https://maps.google.com/maps?saddr=${encodeURIComponent(
      fromName
    )},India&daddr=${encodeURIComponent(toName)}&t=&z=9&ie=UTF8&iwloc=&output=embed`,
    directMapUrl: `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
      fromName
    )}&destination=${encodeURIComponent(toName)}`,
    locationName: `${fromName} ➔ ${toName} Express Highway Route`,
    address: `Origin: ${fromName} | Destination: ${toName}${
      route?.via && route.via.length > 0 ? ` | Via: ${route.via.join(", ")}` : ""
    }`,
    distanceKm: route?.distanceKm,
    durationHrs: route?.durationHrs,
    nh: route?.nh,
    via: route?.via,
    localities:
      route?.pickupPoints && route.pickupPoints.length > 0
        ? [
            ...route.pickupPoints.slice(0, 3),
            ...(route.dropPoints?.slice(0, 3) || []),
          ]
        : [
            `${fromName} Pickup`,
            `${toName} Drop`,
            "Highway Toll Pass",
            "Express Route",
            "24/7 Driver Support",
          ],
  };
}

/** City area map (city hub / service / fleet / blog city pages). */
function buildCityMap(
  citySlug: string,
  context: { title?: string; subtitle?: string; coverageLabel?: string } = {}
): MapInfo | null {
  const city = getCityBySlug(citySlug);
  if (!city) return null;

  return {
    isRoute: false,
    title:
      context.title ||
      `📍 24/7 Cab Service & Pickup Location — ${city.name}`,
    subtitle:
      context.subtitle ||
      `Fast AC Cab Doorstep Pickup across ${city.name} & surrounding areas`,
    iframeSrc: `https://maps.google.com/maps?q=${encodeURIComponent(
      city.name
    )},+India&t=&z=13&ie=UTF8&iwloc=&output=embed`,
    directMapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      city.name
    )},+India`,
    locationName: `${city.name}, India`,
    address: `${city.name}, ${city.district} District, India - ${city.pincode}`,
    localities: city.localities.slice(0, 6),
    coverageLabel: context.coverageLabel,
  };
}

/** Local area-to-area route map (local-taxi-[city]/[area-route]). */
function buildLocalRouteMap(
  citySlug: string,
  routeSlug: string
): MapInfo | null {
  const lr = getLocalRoute(citySlug, routeSlug);
  if (!lr) return null;
  const city = getCityBySlug(citySlug);

  return {
    isRoute: true,
    badgeText: "🚖 LOCAL CAB ROUTE & MAP",
    title: `📍 Local Cab Route — ${lr.fromArea} to ${lr.toArea}, ${lr.cityName}`,
    subtitle: `~${lr.distanceKm} km • ~${lr.durationMin} min • Fixed Fare ₹${lr.startingFare} onwards`,
    iframeSrc: `https://maps.google.com/maps?saddr=${encodeURIComponent(
      `${lr.fromArea}, ${lr.cityName}`
    )}&daddr=${encodeURIComponent(
      `${lr.toArea}, ${lr.cityName}`
    )}&t=&z=12&ie=UTF8&iwloc=&output=embed`,
    directMapUrl: `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
      `${lr.fromArea}, ${lr.cityName}`
    )}&destination=${encodeURIComponent(`${lr.toArea}, ${lr.cityName}`)}`,
    locationName: `${lr.fromArea} ➔ ${lr.toArea} (${lr.cityName})`,
    address: `Pickup: ${lr.fromArea} | Drop: ${lr.toArea} | ${lr.cityName}${
      city ? `, ${city.district}` : ""
    }`,
    distanceKm: lr.distanceKm,
    durationMin: lr.durationMin,
    localities: [...lr.fromLandmarks.slice(0, 3), ...lr.toLandmarks.slice(0, 3)],
    coverageLabel: "📍 Key Landmarks:",
  };
}

/** Blog pages — pick city/route from the blog slug when possible. */
function buildBlogMap(blogSlug: string): MapInfo | null {
  const parts = blogSlug.split("-to-");

  if (parts.length === 2) {
    const left = parts[0];
    const right = parts[1];
    const fromCityMatch = left.split("-").find((p) => getCityBySlug(p)) || "";
    const toCityMatch = right.split("-").find((p) => getCityBySlug(p)) || "";

    const fromName = fromCityMatch
      ? getCityBySlug(fromCityMatch)!.name
      : humanizeSlug(left);
    const toName = toCityMatch
      ? getCityBySlug(toCityMatch)!.name
      : humanizeSlug(right);

    return buildRouteMap(fromName, toName);
  }

  const citySlug = blogSlug.split("-").find((p) => getCityBySlug(p));
  if (citySlug) {
    return buildCityMap(citySlug, {
      title: `📍 Cab Service & Pickup Areas — ${getCityBySlug(citySlug)!.name}`,
      subtitle: `Serving ${getCityBySlug(citySlug)!.name} & nearby areas 24/7 with RS Travel`,
    });
  }

  return null;
}

function getMapDetails(pathname: string): MapInfo {
  const cleanPath = pathname.replace(/^\/|\/$/g, "").toLowerCase();

  // 1. Contact Page
  if (cleanPath === "contact") return buildOfficeMap();

  // 2. Blog Pages (/blog/[slug]) — before route/city matching
  if (cleanPath.startsWith("blog/")) {
    const blogSlug = cleanPath.slice("blog/".length);
    const blogMap = buildBlogMap(blogSlug);
    if (blogMap) return blogMap;
  }

  // 3. Local Route Pages (/local-taxi-[city]/[area-route])
  const localMatch = cleanPath.match(/^local-taxi-(.+?)\/(.+)$/);
  if (localMatch) {
    const localMap = buildLocalRouteMap(localMatch[1], localMatch[2]);
    if (localMap) return localMap;
  }

  // 4. Outstation Route Pages (/[from]-to-[to]-cab)
  const routeParsed = parseRouteSlug(cleanPath);
  if (routeParsed) {
    const route = getRoute(routeParsed.from, routeParsed.to);
    const fromCity = getCityBySlug(routeParsed.from);
    const toCity = getCityBySlug(routeParsed.to);
    const fromName =
      route?.fromName ||
      fromCity?.name ||
      humanizeSlug(routeParsed.from);
    const toName = route?.toName || toCity?.name || humanizeSlug(routeParsed.to);
    return buildRouteMap(fromName, toName, route);
  }

  // 5. City Hub Pages (/cab-service-[city])
  const cityHubMatch = cleanPath.match(/^cab-service-(.+)$/);
  if (cityHubMatch) {
    const cityMap = buildCityMap(cityHubMatch[1]);
    if (cityMap) return cityMap;
  }

  // 6. Service / Fleet Pages (/[city]/[service-or-vehicle])
  const twoSegMatch = cleanPath.match(/^([a-z0-9-]+)\/([a-z0-9-]+)$/);
  if (twoSegMatch && getCityBySlug(twoSegMatch[1])) {
    const service = getServiceBySlug(twoSegMatch[2]);
    if (service) {
      const city = getCityBySlug(twoSegMatch[1])!;
      return buildCityMap(city.slug, {
        title: `📍 ${service.name} in ${city.name} — Pickup Areas & Coverage`,
        subtitle: `24/7 ${service.name} across ${city.name} with doorstep pickup, from ₹${service.startingPrice} ${service.priceUnit}`,
        coverageLabel: "⚡ Fast Pickup Areas:",
      })!;
    }
    const vehicle = getFleetBySlug(twoSegMatch[2]);
    if (vehicle) {
      const city = getCityBySlug(twoSegMatch[1])!;
      return buildCityMap(city.slug, {
        title: `📍 ${vehicle.shortName} Cab in ${city.name} — Areas & Coverage`,
        subtitle: `${vehicle.seatingCapacity}-seater ${vehicle.shortName} available across ${city.name} at ₹${vehicle.perKmRate}/km`,
        coverageLabel: "⚡ Fast Pickup Areas:",
      })!;
    }
  }

  // 7. Plain City Page (/[city])
  if (getCityBySlug(cleanPath)) {
    return buildCityMap(cleanPath)!;
  }

  // 8. Default / Home / About / FAQ / Fare Chart / non-city blogs
  return buildNetworkMap();
}

export default function GoogleMapSection() {
  const pathname = usePathname();
  const currentMap = getMapDetails(pathname || "/");

  return (
    <section className="site-map-section" suppressHydrationWarning>
      <div className="container-main">
        {/* Section Header */}
        <div className="map-section-header">
          <div className="map-header-badge">
            <span>
              {currentMap.badgeText ||
                (currentMap.isRoute
                  ? "🛣️ HIGHWAY DRIVING ROUTE & MAP"
                  : "🗺️ LIVE LOCATION & COVERAGE")}
            </span>
          </div>
          <h2 className="map-section-title">{currentMap.title}</h2>
          <p className="map-section-subtitle">{currentMap.subtitle}</p>
        </div>

        {/* Map Grid */}
        <div className="map-grid-wrapper">
          {/* Main Map Frame */}
          <div className="map-iframe-card">
            <iframe
              title={`${currentMap.locationName} Map`}
              src={currentMap.iframeSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Location Info Sidebar */}
          <div className="map-info-sidebar">
            <div className="map-info-box">
              <div className="map-info-header">
                <span className="map-pin-icon">
                  {currentMap.isRoute ? "🛣️" : "📍"}
                </span>
                <div>
                  <h3 className="map-info-title">{currentMap.locationName}</h3>
                  <p className="map-info-address">{currentMap.address}</p>
                </div>
              </div>

              {/* Route Specific Stats */}
              {currentMap.isRoute && (
                <div className="map-route-stats">
                  {currentMap.distanceKm && (
                    <div className="route-stat-item">
                      <span className="stat-label">📏 Distance</span>
                      <span className="stat-value">{currentMap.distanceKm} km</span>
                    </div>
                  )}
                  {currentMap.durationMin ? (
                    <div className="route-stat-item">
                      <span className="stat-label">⏱️ Duration</span>
                      <span className="stat-value">{currentMap.durationMin} min</span>
                    </div>
                  ) : (
                    currentMap.durationHrs && (
                      <div className="route-stat-item">
                        <span className="stat-label">⏱️ Duration</span>
                        <span className="stat-value">{currentMap.durationHrs} hrs</span>
                      </div>
                    )
                  )}
                  {currentMap.nh && (
                    <div className="route-stat-item">
                      <span className="stat-label">🛣️ Highway</span>
                      <span className="stat-value">{currentMap.nh}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Via Towns if present */}
              {currentMap.isRoute && currentMap.via && currentMap.via.length > 0 && (
                <div className="map-via-box">
                  <span className="map-via-label">🚩 Key Highway Stops (Via):</span>
                  <p className="map-via-text">{currentMap.via.join(" ➔ ")}</p>
                </div>
              )}

              <hr className="map-divider" />

              {/* Action Buttons */}
              <div className="map-action-buttons">
                <a
                  href="tel:+917979877450"
                  className="map-btn map-btn-call"
                  aria-label="Call 24/7 Helpline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>Call Driver / Desk: +91 79798 77450</span>
                </a>

                <a
                  href="https://wa.me/917979877450?text=Hi%20RS%20Travel%2C%20I%20want%20to%20book%20a%20cab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-btn map-btn-wa"
                  aria-label="Book via WhatsApp"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.031 0C5.398 0 0 5.398 0 12.031c0 2.12.553 4.195 1.603 6.012L.15 23.361l5.46-1.431A12.008 12.008 0 0012.03 24c6.633 0 12.031-5.398 12.031-12.031S18.664 0 12.031 0zm0 22.012c-1.782 0-3.528-.482-5.06-1.39l-.364-.217-3.766.986.995-3.666-.237-.378a10.021 10.021 0 01-1.536-5.316c0-5.541 4.512-10.053 10.053-10.053 5.54 0 10.051 4.511 10.051 10.053 0 5.541-4.51 10.05-10.05 10.05zm5.518-7.534c-.302-.152-1.793-.886-2.072-.988-.28-.101-.484-.152-.686.151-.202.302-.784.988-.962 1.19-.178.201-.357.227-.659.075-1.921-.973-3.3-2.617-3.87-3.593-.19-.323-.021-.497.132-.647.137-.137.302-.354.453-.53.151-.178.201-.303.302-.505.101-.203.05-.38-.026-.53s-.686-1.65-.939-2.261c-.247-.59-.497-.509-.686-.518-.178-.01-.382-.01-.584-.01-.202 0-.53.076-.808.38C6.915 8.1 6.132 8.834 6.132 10.323c0 1.49 1.159 2.932 1.32 3.146.161.215 2.144 3.275 5.19 4.516.726.297 1.291.473 1.733.606.727.23 1.385.198 1.905.12.58-.086 1.793-.732 2.045-1.442.251-.708.251-1.314.177-1.44-.075-.13-.279-.204-.582-.355z" />
                  </svg>
                  <span>Book Cab on WhatsApp</span>
                </a>

                <a
                  href={currentMap.directMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-btn map-btn-directions"
                  aria-label="Open Navigation in Google Maps"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                  </svg>
                  <span>
                    {currentMap.isRoute
                      ? "Start Driving Directions in Google Maps"
                      : "Open Directions in Google Maps"}
                  </span>
                </a>
              </div>

              {/* Coverage / Stops Tags */}
              <div className="map-coverage-box">
                <span className="map-coverage-label">
                  {currentMap.coverageLabel ||
                    (currentMap.isRoute
                      ? "📍 Pickup & Drop Points:"
                      : "⚡ Fast Pickup Areas:")}
                </span>
                <div className="map-tags-wrap">
                  {currentMap.localities.map((area, idx) => (
                    <span key={idx} className="map-area-chip">
                      📍 {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
