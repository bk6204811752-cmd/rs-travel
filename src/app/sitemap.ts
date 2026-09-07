import { MetadataRoute } from 'next';
import { jharkhandCities } from '@/lib/cities';
import { services } from '@/lib/services';
import { fleet } from '@/lib/fleet';
import { routes } from '@/lib/routes';
import { localRoutes } from '@/lib/localRoutes';
import { getAllBlogSlugs } from '@/lib/blogSlugs';

/**
 * Sitemap generator for rstravelsjsr.com â€” optimized for Google crawl budget.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.rstravelsjsr.com';

  // Fixed dates â€” only update these when you ACTUALLY update content
  const HOMEPAGE_DATE = '2026-09-07';
  const CITY_DATE = '2026-09-07';
  const ROUTE_DATE = '2026-09-07';
  const SERVICE_DATE = '2026-09-07';
  const FLEET_DATE = '2026-09-07';
  const BLOG_DATE = '2026-09-07';
  const STATIC_DATE = '2026-09-07';

  const urls: MetadataRoute.Sitemap = [];

  // â”€â”€ Homepage â”€â”€
  urls.push({
    url: baseUrl,
    lastModified: HOMEPAGE_DATE,
    changeFrequency: 'weekly',
    priority: 1.0,
  });

  // â”€â”€ Static Pages â”€â”€
  ['about', 'contact', 'faq', 'fare-chart'].forEach(page => {
    urls.push({
      url: `${baseUrl}/${page}`,
      lastModified: STATIC_DATE,
      changeFrequency: 'monthly',
      priority: 0.5,
    });
  });

  // â”€â”€ City Hub Pages (Tier-1 & Tier-2 only â€” Tier-3 are noindex/thin content) â”€â”€
  const topCitySlugs = ['jamshedpur', 'ranchi', 'dhanbad', 'bokaro'];
  jharkhandCities.filter(c => c.tier <= 2).forEach(city => {
    const isTopCity = topCitySlugs.includes(city.slug);
    urls.push({
      url: `${baseUrl}/cab-service-${city.slug}`,
      lastModified: CITY_DATE,
      changeFrequency: 'weekly',
      priority: isTopCity ? 0.9 : 0.7,
    });
  });

  // â”€â”€ Top Route Pages (highest transactional value) â”€â”€
  const topRouteKeys = new Set([
    'jamshedpur-to-ranchi', 'ranchi-to-jamshedpur',
    'jamshedpur-to-kolkata', 'kolkata-to-jamshedpur',
    'ranchi-to-kolkata', 'kolkata-to-ranchi',
    'ranchi-to-patna', 'patna-to-ranchi',
    'jamshedpur-to-dhanbad', 'dhanbad-to-jamshedpur',
    'ranchi-to-dhanbad', 'dhanbad-to-ranchi',
    'jamshedpur-to-bokaro', 'bokaro-to-jamshedpur',
    'jamshedpur-to-puri', 'jamshedpur-to-patna',
    'bokaro-to-ranchi', 'ranchi-to-bokaro',
    'dhanbad-to-kolkata', 'jamshedpur-to-deoghar',
  ]);

  routes.forEach(route => {
    const routeKey = `${route.from}-to-${route.to}`;
    const isTopRoute = topRouteKeys.has(routeKey);
    urls.push({
      url: `${baseUrl}/${routeKey}-cab`,
      lastModified: ROUTE_DATE,
      changeFrequency: 'weekly',
      priority: isTopRoute ? 0.9 : 0.6,
    });
  });

  // â”€â”€ Service Ã— City Pages (only tier 1 & 2 cities to save crawl budget) â”€â”€
  const serviceCities = jharkhandCities.filter(c => c.tier <= 2);
  serviceCities.forEach(city => {
    services.forEach(service => {
      urls.push({
        url: `${baseUrl}/${city.slug}/${service.slug}`,
        lastModified: SERVICE_DATE,
        changeFrequency: 'monthly',
        priority: 0.5,
      });
    });
  });

  // â”€â”€ Fleet Ã— City Pages (only tier 1 cities) â”€â”€
  const fleetCities = jharkhandCities.filter(c => c.tier === 1);
  fleetCities.forEach(city => {
    fleet.forEach(vehicle => {
      urls.push({
        url: `${baseUrl}/${city.slug}/${vehicle.slug}`,
        lastModified: FLEET_DATE,
        changeFrequency: 'monthly',
        priority: 0.4,
      });
    });
  });

  // â”€â”€ Local Route Pages â”€â”€
  localRoutes.forEach(route => {
    urls.push({
      url: `${baseUrl}/local-taxi-${route.city}/${route.slug}`,
      lastModified: SERVICE_DATE,
      changeFrequency: 'monthly',
      priority: 0.4,
    });
  });

  // â”€â”€ Blog Articles â”€â”€
  getAllBlogSlugs().forEach(slug => {
    urls.push({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: BLOG_DATE,
      changeFrequency: 'monthly',
      priority: 0.3,
    });
  });

  return urls;
}

