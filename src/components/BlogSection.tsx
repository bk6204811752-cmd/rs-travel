'use client';

/**
 * BlogSection — Links to quality blog articles only.
 * Replaces the previous version that generated links to thousands of
 * template-based thin content pages (which Google flagged as spam).
 */

const QUALITY_ARTICLES = [
  {
    slug: 'cab-fare-jamshedpur-to-ranchi',
    title: 'Jamshedpur to Ranchi Cab Fare 2026: Full Price Guide',
    category: 'Fare Guide',
    readTime: '5 min',
  },
  {
    slug: 'cab-fare-jamshedpur-to-kolkata',
    title: 'Jamshedpur to Kolkata Cab Fare 2026: Full Price Guide',
    category: 'Fare Guide',
    readTime: '5 min',
  },
  {
    slug: 'cab-fare-ranchi-to-kolkata',
    title: 'Ranchi to Kolkata Cab Fare 2026: Full Price Guide',
    category: 'Fare Guide',
    readTime: '5 min',
  },
  {
    slug: 'car-rental-jamshedpur',
    title: 'Car Rental in Jamshedpur: AC Cabs from ₹11/km',
    category: 'Car Rental',
    readTime: '5 min',
  },
  {
    slug: 'car-rental-ranchi',
    title: 'Car Rental in Ranchi: AC Cabs from ₹11/km',
    category: 'Car Rental',
    readTime: '5 min',
  },
  {
    slug: 'local-taxi-jamshedpur',
    title: 'Local Taxi in Jamshedpur: 4hr & 8hr Packages',
    category: 'Local Taxi',
    readTime: '4 min',
  },
  {
    slug: 'vehicle-guide-innova-cab-jamshedpur',
    title: 'Toyota Innova Cab in Jamshedpur: ₹16/km Onwards',
    category: 'Vehicle Guide',
    readTime: '4 min',
  },
  {
    slug: 'exploring-jharkhand',
    title: 'Exploring Jharkhand: A Complete Travel Guide',
    category: 'Travel Guide',
    readTime: '7 min',
  },
  {
    slug: 'choose-right-cab',
    title: 'How to Choose the Right Cab for Your Trip',
    category: 'Tips',
    readTime: '5 min',
  },
  {
    slug: 'top-10-destinations',
    title: 'Top 10 Destinations in Jharkhand by Cab',
    category: 'Travel Guide',
    readTime: '6 min',
  },
  {
    slug: 'safety-standards',
    title: 'Our Safety Standards: Police-Verified Drivers & GPS Tracking',
    category: 'Safety',
    readTime: '4 min',
  },
  {
    slug: 'fleet-guide',
    title: 'Complete Fleet Guide: Sedan vs SUV vs Innova Crysta',
    category: 'Vehicle Guide',
    readTime: '5 min',
  },
  {
    slug: 'number-one-rated',
    title: 'Why RS Travel is #1 Rated in Jharkhand',
    category: 'About Us',
    readTime: '4 min',
  },
];

interface BlogSectionProps {
  pageName?: string;
  type?: 'city' | 'route';
}

export default function BlogSection({ pageName, type }: BlogSectionProps) {
  const priority: Record<string, number> =
    type === 'route'
      ? { 'Fare Guide': 0, 'Car Rental': 1, 'Local Taxi': 2, 'Vehicle Guide': 3 }
      : type === 'city'
        ? { 'Car Rental': 0, 'Local Taxi': 1, 'Vehicle Guide': 2, 'Fare Guide': 3 }
        : {};

  const articles = [...QUALITY_ARTICLES]
    .sort(
      (a, b) =>
        (priority[a.category] ?? 4) - (priority[b.category] ?? 4),
    )
    .slice(0, 4);

  return (
    <div className="content-block" style={{ marginTop: '2.5rem' }}>
      <h2>Travel Guides {pageName ? `for ${pageName}` : ''}</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1rem',
          marginTop: '1rem',
        }}
      >
        {articles.map((article) => (
          <a
            key={article.slug}
            href={`/blog/${article.slug}`}
            style={{
              display: 'block',
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              borderRadius: '16px',
              padding: '1.25rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            <div
              style={{
                display: 'inline-block',
                padding: '0.2rem 0.6rem',
                background: 'rgba(249,115,22,0.12)',
                border: '1px solid rgba(249,115,22,0.25)',
                borderRadius: '6px',
                fontSize: '0.7rem',
                color: '#f97316',
                fontWeight: 600,
                marginBottom: '0.5rem',
              }}
            >
              {article.category} • {article.readTime}
            </div>
            <h3
              style={{
                fontSize: '0.95rem',
                color: 'var(--text-primary)',
                lineHeight: 1.4,
                margin: 0,
              }}
            >
              {article.title}
            </h3>
          </a>
        ))}
      </div>
    </div>
  );
}
