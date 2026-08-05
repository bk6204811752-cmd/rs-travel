import { Metadata } from 'next';
import HeroSlider from '@/components/HeroSlider';
import CtaBanner from '@/components/CtaBanner';
import { routes } from '@/lib/routes';
import { fleet } from '@/lib/fleet';
import { jharkhandCities } from '@/lib/cities';

export const metadata: Metadata = {
  title: 'Fare Chart 2026 — All Routes & Vehicle Rates | RS Travel Jamshedpur',
  description: 'Complete fare chart for RS Travel cab service in Jamshedpur & Jharkhand. Compare fares for Hatchback, Sedan, SUV, Innova, Crysta across all routes. No hidden charges. Call +917979877450.',
  keywords: [
    'cab fare chart jamshedpur', 'taxi fare jamshedpur 2026', 'cab rate per km jharkhand',
    'jamshedpur to ranchi cab fare', 'jamshedpur to kolkata taxi fare',
    'cab fare calculator jamshedpur', 'taxi rate chart ranchi', 'outstation cab fare jharkhand',
    'local taxi fare jamshedpur', 'innova rate per km jamshedpur',
    'tempo traveller rate jamshedpur', 'rs travel fare list 2026',
  ],
  alternates: { canonical: 'https://rstravelsjsr.com/fare-chart' },
  openGraph: {
    title: 'Fare Chart 2026 | RS Travel — All Routes & Rates',
    description: 'Compare cab fares across all Jharkhand routes with RS Travel. Hatchback ₹11/km, Sedan ₹13/km, SUV ₹16/km.',
    url: 'https://rstravelsjsr.com/fare-chart',
    images: [{ url: '/background/rsbg1.webp', width: 1200, height: 630, alt: 'RS Travel Fare Chart 2026' }],
  },
};

export default function FareChartPage() {
  const tier1Cities = jharkhandCities.filter(c => c.tier === 1);

  return (
    <div className="page-content">
      <section className="hero-section" style={{ minHeight: '40vh' }}>
        <HeroSlider />
        <div className="container-main" style={{ position: 'relative', zIndex: 1, paddingTop: '6rem', paddingBottom: '3rem' }}>
          <div style={{ display: 'inline-block', padding: '0.35rem 0.85rem', background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: '8px', fontSize: '0.8rem', color: '#f97316', fontWeight: 600, marginBottom: '1rem' }}>
            📊 Updated for 2026 — Zero Hidden Charges
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '1rem' }}>
            <span className="gold-text">Cab Fare Chart</span> — RS Travel Jharkhand<br />
            <span style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', color: '#e2e8f0', fontWeight: 600 }}>
              All Routes × All Vehicles | Fully Transparent Pricing
            </span>
          </h1>
        </div>
      </section>

      <div className="container-main section-spacing">
        {/* Per KM Rate Card */}
        <div className="content-block">
          <h2>Per Kilometer <span className="gold-text">Rate Card</span></h2>
          <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>Base rates for outstation and one-way cab travel with RS Travel. These rates are all-inclusive of fuel. Toll and state tax charged as actuals.</p>
          <div className="fare-table-container">
            <table className="fare-table">
              <thead>
                <tr>
                  <th>Vehicle</th>
                  <th>Type</th>
                  <th>Seats</th>
                  <th>Rate/km</th>
                  <th>Best For</th>
                </tr>
              </thead>
              <tbody>
                {fleet.map(v => (
                  <tr key={v.slug}>
                    <td style={{ fontWeight: 700 }}>{v.icon} {v.shortName}</td>
                    <td>{v.type}</td>
                    <td>{v.seatingCapacity}</td>
                    <td className="fare-price">₹{v.perKmRate}/km</td>
                    <td style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{v.bestFor[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Outstation Route Fare Table */}
        <div className="content-block" style={{ marginTop: '3rem' }}>
          <h2>Outstation <span className="gold-text">Route Fares</span> — 2026</h2>
          <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>One-way fares for popular outstation routes with RS Travel. All fares include toll, fuel, and driver allowance.</p>
          <div className="fare-table-container">
            <table className="fare-table">
              <thead>
                <tr>
                  <th>Route</th>
                  <th>Distance</th>
                  <th>Duration</th>
                  <th>Hatchback</th>
                  <th>Sedan</th>
                  <th>SUV</th>
                  <th>Crysta</th>
                  <th>Tempo</th>
                </tr>
              </thead>
              <tbody>
                {routes.map(r => (
                  <tr key={`${r.from}-${r.to}`}>
                    <td>
                      <a href={`/${r.from}-to-${r.to}-cab`} style={{ color: 'var(--primary)', fontWeight: 600 }}>
                        {r.fromName} → {r.toName}
                      </a>
                    </td>
                    <td>{r.distanceKm} km</td>
                    <td>{r.durationHrs} hrs</td>
                    <td className="fare-price">₹{r.fares.hatchback.toLocaleString()}</td>
                    <td className="fare-price">₹{r.fares.sedan.toLocaleString()}</td>
                    <td className="fare-price">₹{r.fares.suv.toLocaleString()}</td>
                    <td className="fare-price">₹{r.fares.crysta.toLocaleString()}</td>
                    <td className="fare-price">₹{r.fares.tempo.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>* 10% discount on round trips. State taxes extra for interstate routes. Prices subject to revision.</p>
        </div>

        {/* Local Taxi Fare Table */}
        <div className="content-block" style={{ marginTop: '3rem' }}>
          <h2>Local Taxi <span className="gold-text">Packages</span> — City-wise</h2>
          <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>Hourly rental packages for within-city travel with RS Travel. All packages include fuel, driver and AC.</p>
          <div className="fare-table-container">
            <table className="fare-table">
              <thead>
                <tr>
                  <th>City</th>
                  <th>Package</th>
                  <th>Hatchback</th>
                  <th>Sedan</th>
                  <th>SUV</th>
                </tr>
              </thead>
              <tbody>
                {tier1Cities.map(city => (
                  <>
                    <tr key={`${city.slug}-4hr`}>
                      <td rowSpan={2} style={{ fontWeight: 700 }}>
                        <a href={`/cab-service-${city.slug}`} style={{ color: 'var(--primary)' }}>{city.name}</a>
                      </td>
                      <td>4hr / 40km</td>
                      <td className="fare-price">₹{city.localFare.hatchback_4hr}</td>
                      <td className="fare-price">₹{city.localFare.sedan_4hr}</td>
                      <td className="fare-price">₹{city.localFare.suv_4hr}</td>
                    </tr>
                    <tr key={`${city.slug}-8hr`}>
                      <td>8hr / 80km</td>
                      <td className="fare-price">₹{city.localFare.hatchback_8hr}</td>
                      <td className="fare-price">₹{city.localFare.sedan_8hr}</td>
                      <td className="fare-price">₹{city.localFare.suv_8hr}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* What's Included */}
        <div className="content-block" style={{ marginTop: '3rem' }}>
          <h2>What&apos;s <span className="gold-text">Included</span> in Every RS Travel Fare</h2>
          <p style={{ marginBottom: '1.25rem', color: 'var(--text-secondary)' }}>No asterisks. No fine print. Every RS Travel quote covers the following — you pay exactly what you are told before departure:</p>
          <div className="services-grid" style={{ marginTop: '1rem' }}>
            {[
              { icon: '⛽', title: 'Fuel Cost — Always', desc: 'The entire petrol or diesel cost is built into your quoted fare. You will never receive a separate fuel bill at trip end.' },
              { icon: '🛣️', title: 'Standard Highway Tolls', desc: 'Toll charges on national and state highways within Jharkhand are covered. Interstate tolls (e.g., Jharkhand → West Bengal) are charged at cost.' },
              { icon: '👨‍✈️', title: 'Driver Bata (Allowance)', desc: 'For outstation and multi-day trips, driver food and overnight stay allowance is included upfront. No last-minute additions.' },
              { icon: '🧹', title: 'Sanitized, AC-Ready Cab', desc: 'The driver runs a pre-trip AC check and sanitizes the passenger area. You board a clean, fresh vehicle — every single ride.' },
              { icon: '📡', title: 'Live GPS Location', desc: 'Your cab is GPS-tracked throughout the journey. Share your real-time location with family from trip start to destination arrival.' },
              { icon: '🛡️', title: 'Passenger Insurance', desc: 'All passengers are covered under the vehicle commercial insurance policy for the full trip duration. Travel with complete peace of mind.' },
            ].map((item, i) => (
              <div key={i} className="glass-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '0.95rem', marginBottom: '0.3rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What's Extra */}
        <div className="content-block" style={{ marginTop: '2.5rem' }}>
          <h2>What&apos;s <span style={{ color: '#ef4444' }}>Not Included</span></h2>
          <ul className="features-list">
            <li>State entry tax for interstate routes (Jharkhand ↔ West Bengal, Bihar, Odisha)</li>
            <li>Parking charges at destinations (malls, hospitals, airports)</li>
            <li>Permit fees for specific restricted areas</li>
            <li>Extra kilometres beyond the package limit (charged per km)</li>
            <li>Extra hours beyond the package limit (charged per hour)</li>
          </ul>
        </div>

        {/* Internal Links */}
        <div className="content-block" style={{ marginTop: '3rem' }}>
          <h2>Explore <span className="gold-text">Cab Services</span> by City</h2>
          <div className="internal-links-grid" style={{ marginTop: '0.75rem' }}>
            {jharkhandCities.map(city => (
              <a key={city.slug} href={`/cab-service-${city.slug}`} className="internal-link">🏙️ Cab in {city.name}</a>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '2.5rem' }}>
          <CtaBanner
            title="Get Exact Fare Quote — Call RS Travel Now!"
            subtitle="Transparent pricing | No hidden charges | ☎ +91 79798 77450"
            whatsappMessage="Hi RS Travel, I want to know the fare for my trip"
          />
        </div>
      </div>
    </div>
  );
}
