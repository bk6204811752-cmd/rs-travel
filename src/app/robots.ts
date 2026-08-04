import { MetadataRoute } from 'next';

/**
 * Dynamic robots.txt for rstravelsjsr.com
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/fonts/'],
      },
    ],
    sitemap: [
      'https://rstravelsjsr.com/sitemap.xml',
    ],
  };
}
