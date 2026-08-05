import { Metadata } from 'next';
import BookingWidget from '@/components/BookingWidget';
import CtaBanner from '@/components/CtaBanner';
import HeroSlider from '@/components/HeroSlider';
import BlogSection from '@/components/BlogSection';
import FaqSection from '@/components/FaqSection';
import { jharkhandCities } from '@/lib/cities';
import { services } from '@/lib/services';
import { fleet } from '@/lib/fleet';
import { routes } from '@/lib/routes';
import FareCalculator from '@/components/FareCalculator';

export const metadata: Metadata = {
  title: 'Cab Service Jamshedpur Sonari ₹999 | RS Travel 2026',
  description: '#1 cab in Jamshedpur (Sonari) ₹999 onwards ✅ 24/7 AC cabs ✅ Verified drivers ✅ GPS tracked ✅ 30K+ rides. Jamshedpur→Ranchi ₹1,499. ☎ +917979877450',
  keywords: [
    // Brand
    'rs travel', 'rs travel jamshedpur', 'rs travels jamshedpur', 'rs travel sonari', 'rstravelsjsr.com',
    // Primary — high volume
    'cab service jamshedpur', 'cab service in jamshedpur', 'cab service in tata', 'tata cab service', 'tatanagar taxi',
    'best cab service jamshedpur', 'best cab service in jamshedpur 2026', 'best taxi service jamshedpur',
    'taxi jamshedpur', 'taxi service jamshedpur', 'taxi booking jamshedpur',
    'car rental jamshedpur', 'car rental tata', 'car hire jamshedpur',
    'cab service ranchi', 'cab ranchi', 'taxi ranchi', 'taxi service ranchi', 'car rental ranchi',
    'cab service jharkhand', 'taxi jharkhand', 'car rental jharkhand',
    // Near me (very high mobile intent)
    'cab near me', 'taxi near me', 'cab near me jamshedpur', 'taxi near me jamshedpur',
    'cab service near me', 'taxi service near me', 'car rental near me',
    'cab near tatanagar station', 'cab near me tata', 'taxi near me ranchi',
    // Sonari local intent
    'cab service sonari jamshedpur', 'taxi sonari', 'cab sonari', 'sonari jamshedpur taxi',
    'cab service agrico jamshedpur', 'cab parsudih jamshedpur', 'taxi bhuiyandih jamshedpur',
    // Route — highest conversion
    'jamshedpur to ranchi cab', 'tata to ranchi cab', 'tatanagar to ranchi cab',
    'ranchi to jamshedpur cab', 'ranchi to tata cab',
    'jamshedpur to kolkata cab', 'tata to kolkata cab', 'kolkata to jamshedpur cab',
    'ranchi to kolkata cab', 'ranchi to patna cab',
    'jamshedpur to dhanbad cab', 'jamshedpur to bokaro cab', 'jamshedpur to puri cab',
    // Price-intent
    'jamshedpur to ranchi cab fare', 'jamshedpur to ranchi cab fare 2026',
    'tata to ranchi taxi fare', 'jamshedpur to kolkata cab fare',
    'cheapest cab jamshedpur', 'affordable cab jamshedpur',
    'low price cab jamshedpur', 'budget cab jamshedpur',
    // Service type
    'outstation cab jamshedpur', 'one way cab jamshedpur', 'round trip cab jamshedpur',
    'airport taxi ranchi', 'airport cab ranchi', 'birsa munda airport taxi',
    'local taxi jamshedpur', 'hourly cab jamshedpur',
    'corporate cab jamshedpur', 'wedding car jamshedpur',
    // Vehicle-specific
    'innova crysta hire jamshedpur', 'innova on rent jamshedpur', 'ertiga cab jamshedpur',
    'swift dzire cab jamshedpur', 'tempo traveller jamshedpur',
    // Hindi
    'जमशेदपुर कैब सर्विस', 'टाटा कैब सर्विस', 'रांची कैब सर्विस',
    // Booking intent
    'book cab online jamshedpur', 'cab booking jamshedpur', 'taxi booking online jharkhand',
    'whatsapp cab booking jamshedpur', '24/7 cab service jamshedpur',
  ],
  alternates: { canonical: 'https://rstravelsjsr.com' },
  openGraph: {
    title: 'RS Travel — #1 Cab Service Jamshedpur (Sonari) ₹999',
    description: 'Book reliable AC cabs in Jamshedpur (Sonari) & Ranchi — 15+ cities, 50+ cabs, 24/7. Jamshedpur→Ranchi ₹1,499. 30K+ happy rides. ☎ +917979877450',
    url: 'https://rstravelsjsr.com',
    images: [{ url: 'https://rstravelsjsr.com/background/rsbg1.webp', width: 1200, height: 630, alt: 'RS Travel — Best Cab Service in Jamshedpur Sonari and Jharkhand' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cab Service Jamshedpur ₹999 | RS Travel',
    description: '#1 rated. 30K+ rides. 24/7 AC cabs. ☎ +917979877450',
    images: ['https://rstravelsjsr.com/background/rsbg1.webp'],
  },
};

export default function HomePage() {
  const tier1Cities = jharkhandCities.filter(c => c.tier === 1);
  const topRoutes = routes.filter(r => r.from === 'jamshedpur').slice(0, 10);
  const ranchiRoutes = routes.filter(r => r.from === 'ranchi').slice(0, 6);

  return (
    <div className="page-content">
      {/* HERO SECTION */}
      <section className="hero-section">
        <HeroSlider />
        <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '700px', marginBottom: '1.75rem' }}>
            <div style={{ display: 'inline-block', padding: '0.3rem 0.75rem', background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: '8px', fontSize: '0.75rem', color: '#f97316', fontWeight: 600, marginBottom: '0.85rem' }}>
              🏆 Jamshedpur&apos;s Most Trusted Cab Service — Serving Since 2018
            </div>
            <h1 style={{ fontSize: 'clamp(1.6rem, 5vw, 3rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '0.85rem' }}>
              <span className="gold-text">Best Cab Service in Jamshedpur</span> (Sonari & Tata)<br />
              <span style={{ fontSize: 'clamp(0.85rem, 2.5vw, 1.5rem)', color: '#e2e8f0', fontWeight: 600 }}>
                15 Cities • 50+ Cabs • 24/7 Taxi Service • ₹11/km
              </span>
            </h1>
            <p style={{ color: '#cbd5e1', fontSize: 'clamp(0.85rem, 2.5vw, 1rem)', maxWidth: '550px', marginBottom: '1.25rem', lineHeight: 1.6 }}>
              RS Travel offers dependable AC cabs across Jamshedpur (Sonari, Bistupur, Mango, Sakchi), Ranchi, Dhanbad & Bokaro — police-verified drivers, GPS-tracked fleet, no hidden charges. One way, outstation & local taxi available 24/7.
            </p>
            <div className="hero-btn-group">
              <a href="tel:+917979877450" className="btn-primary">
                📞 Call: +91 79798 77450
              </a>
              <a href="https://wa.me/917979877450?text=Hi%20RS%20Travel%2C%20I%20want%20to%20book%20a%20cab" target="_blank" rel="noopener noreferrer" className="btn-whatsapp pulse-animation" aria-label="Book a cab on WhatsApp">
                💬 Book on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING WIDGET SECTION — Mobile me Hero Banner ke nichhe, Desktop me clean transition */}
      <div className="hero-booking-wrapper">
        <div className="container-main">
          <BookingWidget />
        </div>
      </div>

      {/* STATS */}
      <section className="section-spacing" style={{ background: 'linear-gradient(180deg, var(--dark) 0%, rgba(26,115,232,0.08) 50%, var(--dark) 100%)' }}>
        <div className="container-main">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="number">15+</div>
              <div className="label">Cities Covered</div>
            </div>
            <div className="stat-card">
              <div className="number">50+</div>
              <div className="label">Verified Cabs</div>
            </div>
            <div className="stat-card">
              <div className="number">30K+</div>
              <div className="label">Happy Customers</div>
            </div>
            <div className="stat-card">
              <div className="number">4.7★</div>
              <div className="label">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS BAR */}
      <section style={{ background: 'linear-gradient(90deg, var(--darker), rgba(15,23,42,0.95), var(--darker))', borderTop: '1px solid rgba(249,115,22,0.12)', borderBottom: '1px solid rgba(249,115,22,0.12)', padding: '1.25rem 0' }}>
        <div className="container-main">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem 2rem', alignItems: 'center' }}>
            {[
              '✅ Verified Drivers',
              '📡 GPS Tracked',
              '💰 No Hidden Charges',
              '🔒 Safe Rides',
              '⭐ 4.7★ Rated',
              '🏆 Since 2018',
              '📍 Sonari, Jamshedpur',
            ].map((badge, i) => (
              <span key={i} style={{ fontSize: 'clamp(0.72rem, 2vw, 0.88rem)', color: '#cbd5e1', fontWeight: 600, whiteSpace: 'nowrap', letterSpacing: '0.01em' }}>{badge}</span>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="section-spacing">
        <div className="container-main">
          <h2 style={{ textAlign: 'center', marginBottom: '0.4rem' }}>
            <span className="gold-text">Our Cab Services</span> Across Jharkhand
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '550px', marginLeft: 'auto', marginRight: 'auto', fontSize: 'clamp(0.82rem, 2.5vw, 0.95rem)' }}>
            From local rides in Jamshedpur to outstation trips — RS Travel covers every travel need across 15+ cities
          </p>
          <div className="services-grid">
            {services.filter(s => s.slug !== 'pilgrimage-cab').map(service => (
              <a key={service.slug} href={`/jamshedpur/${service.slug}`} className="service-card">
                <div className="icon">{service.icon}</div>
                <h3>{service.name}</h3>
                <div className="price">₹{service.startingPrice} {service.priceUnit}</div>
                <p>Available in all 15 cities</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CITIES WE SERVE */}
      <section className="section-spacing" style={{ background: 'linear-gradient(180deg, var(--dark) 0%, rgba(26,115,232,0.06) 50%, var(--dark) 100%)' }}>
        <div className="container-main">
          <h2 style={{ textAlign: 'center', marginBottom: '0.4rem' }}>
            <span className="gold-text">Cities We Serve</span> in Jharkhand
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: 'clamp(0.82rem, 2.5vw, 0.95rem)' }}>
            RS Travel provides cab coverage across all major Jharkhand cities — reliable, on-time, every time
          </p>
          <div className="services-grid">
            {jharkhandCities.map(city => (
              <a key={city.slug} href={`/cab-service-${city.slug}`} className="service-card">
                <div className="icon">🏙️</div>
                <h3>Cab in {city.name}</h3>
                <div className="price">From ₹{city.localFare.hatchback_4hr}</div>
                <p>{city.localities.slice(0, 3).join(', ')}...</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR ROUTES */}
      <section className="section-spacing">
        <div className="container-main">
          <h2 style={{ textAlign: 'center', marginBottom: '0.4rem' }}>
            <span className="gold-text">Popular Outstation Routes</span> from Jamshedpur
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: 'clamp(0.82rem, 2.5vw, 0.95rem)' }}>
            Book AC cab for outstation trips at affordable rates — all-inclusive pricing, no surprises
          </p>
          <div className="routes-grid">
            {topRoutes.map(route => (
              <a key={`${route.from}-${route.to}`} href={`/${route.from}-to-${route.to}-cab`} className="route-card">
                <div className="route-info">
                  <h3>{route.fromName} → {route.toName}</h3>
                  <div className="route-meta">
                    <span>📏 {route.distanceKm} km</span>
                    <span>⏱️ {route.durationHrs} hrs</span>
                  </div>
                </div>
                <div className="route-fare">
                  <div className="price">₹{route.fares.hatchback.toLocaleString()}</div>
                  <div className="label">Hatchback onwards</div>
                </div>
              </a>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
            <a href="/cab-service-jamshedpur" className="btn-outline">View All Routes →</a>
          </div>
        </div>
      </section>

      {/* POPULAR ROUTES FROM RANCHI */}
      <section className="section-spacing" style={{ background: 'linear-gradient(180deg, var(--dark) 0%, rgba(26,115,232,0.06) 50%, var(--dark) 100%)' }}>
        <div className="container-main">
          <h2 style={{ textAlign: 'center', marginBottom: '0.4rem' }}>
            <span className="gold-text">Popular Routes</span> from Ranchi
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: 'clamp(0.82rem, 2.5vw, 0.95rem)' }}>
            Outstation cab from Ranchi to Jamshedpur, Kolkata, Patna & all major cities
          </p>
          <div className="routes-grid">
            {ranchiRoutes.map(route => (
              <a key={`${route.from}-${route.to}`} href={`/${route.from}-to-${route.to}-cab`} className="route-card">
                <div className="route-info">
                  <h3>{route.fromName} → {route.toName}</h3>
                  <div className="route-meta">
                    <span>📏 {route.distanceKm} km</span>
                    <span>⏱️ {route.durationHrs} hrs</span>
                  </div>
                </div>
                <div className="route-fare">
                  <div className="price">₹{route.fares.hatchback.toLocaleString()}</div>
                  <div className="label">Hatchback onwards</div>
                </div>
              </a>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
            <a href="/cab-service-ranchi" className="btn-outline">View All Ranchi Routes →</a>
          </div>
        </div>
      </section>

      {/* OUR FLEET */}
      <section className="section-spacing" style={{ background: 'linear-gradient(180deg, var(--dark) 0%, rgba(26,115,232,0.06) 50%, var(--dark) 100%)' }}>
        <div className="container-main">
          <h2 style={{ textAlign: 'center', marginBottom: '0.4rem' }}>
            <span className="gold-text">Our Fleet</span> — Choose Your Ride
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: 'clamp(0.82rem, 2.5vw, 0.95rem)' }}>
            Well-maintained AC vehicles for every budget and group size
          </p>
          <div className="fleet-grid">
            {fleet.map(vehicle => (
              <a key={vehicle.slug} href={`/jamshedpur/${vehicle.slug}`} className="fleet-card" style={{ backgroundImage: `url(${vehicle.image})` }}>
                <div className="icon">{vehicle.icon}</div>
                <h3>{vehicle.shortName}</h3>
                <div className="capacity">{vehicle.seatingCapacity} passengers • {vehicle.type}</div>
                <div className="rate">₹{vehicle.perKmRate}/km onwards</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FARE CALCULATOR */}
      <section className="section-spacing" style={{ paddingTop: 0 }}>
        <div className="container-main">
          <FareCalculator />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-spacing">
        <div className="container-main">
          <h2 style={{ textAlign: 'center', marginBottom: '0.4rem' }}>
            <span className="gold-text">Why Choose</span> RS Travel?
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: 'clamp(0.82rem, 2.5vw, 0.95rem)' }}>
            Jamshedpur&apos;s most dependable cab service — here&apos;s why 30,000+ customers ride with us
          </p>
          <div className="services-grid">
            {[
              { icon: '🛡️', title: 'Police-Verified Drivers', desc: 'Every RS Travel driver undergoes strict police verification and background checks before joining our fleet' },
              { icon: '📍', title: 'GPS Tracked Fleet', desc: 'Real-time vehicle tracking on all our cabs. Share your live trip location with loved ones for peace of mind' },
              { icon: '💰', title: 'Zero Hidden Charges', desc: 'Fare includes toll, fuel & driver allowance. What you see is what you pay — complete pricing transparency' },
              { icon: '🕐', title: '24/7 Availability', desc: 'Book anytime — 3 AM airport drops, late-night arrivals, festival holidays — RS Travel never says no' },
              { icon: '🧹', title: 'Sanitized AC Cabs', desc: 'All vehicles are cleaned and sanitized before each trip. Fresh AC, comfortable interiors, every ride' },
              { icon: '❌', title: 'Free Cancellation', desc: 'Cancel up to 2 hours before your trip at no cost. Full refund, no questions, no stress' },
              { icon: '📱', title: 'WhatsApp Booking', desc: 'Book your cab in under 30 seconds on WhatsApp. No app to download, no registration required' },
              { icon: '💳', title: 'Multiple Payments', desc: 'UPI, Google Pay, PhonePe, Cash, Card, Paytm — pay your way, always hassle-free' },
            ].map((item, i) => (
              <div key={i} className="glass-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '0.4rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: 'clamp(0.88rem, 2.5vw, 1rem)', marginBottom: '0.3rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO BOOK — with HowTo schema for rich snippets */}
      <section className="section-spacing" style={{ background: 'linear-gradient(180deg, var(--dark) 0%, rgba(26,115,232,0.06) 50%, var(--dark) 100%)' }}>
        <div className="container-main">
          {/* HowTo Schema — triggers rich snippet in Google */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'HowTo',
                'name': 'How to Book a Cab in Jamshedpur with RS Travel',
                'description': 'Book a reliable AC cab in Jamshedpur (Sonari, Bistupur, Mango), Ranchi, or anywhere in Jharkhand in just 30 seconds via WhatsApp or phone.',
                'totalTime': 'PT1M',
                'estimatedCost': { '@type': 'MonetaryAmount', 'currency': 'INR', 'value': '999' },
                'step': [
                  { '@type': 'HowToStep', 'position': 1, 'name': 'Call or WhatsApp RS Travel', 'text': 'Contact RS Travel at +91 79798 77450 via call or WhatsApp. Share your travel plan — pickup, destination, date and time.' },
                  { '@type': 'HowToStep', 'position': 2, 'name': 'Get Instant Fare Quote', 'text': 'Share your pickup location, destination, date and cab type preference. Receive an instant all-inclusive fare quote with no hidden charges.' },
                  { '@type': 'HowToStep', 'position': 3, 'name': 'Booking Confirmed', 'text': 'Receive your booking confirmation with driver name, contact number, and vehicle details on WhatsApp. Driver arrives 10 minutes early.' },
                ],
              }),
            }}
          />
          {/* ItemList Schema — cities served */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'ItemList',
                'name': 'Cities Served by RS Travel',
                'numberOfItems': jharkhandCities.length,
                'itemListElement': jharkhandCities.slice(0, 10).map((city, i) => ({
                  '@type': 'ListItem',
                  'position': i + 1,
                  'name': `Cab Service in ${city.name}`,
                  'url': `https://rstravelsjsr.com/cab-service-${city.slug}`,
                })),
              }),
            }}
          />
          <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span className="gold-text">Book Your Cab</span> in 3 Easy Steps
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', maxWidth: '900px', margin: '0 auto' }}>
            {[
              { step: '1', icon: '📞', title: 'Call or WhatsApp', desc: 'Reach RS Travel at +91 79798 77450 via call or WhatsApp. Tell us your travel plan.' },
              { step: '2', icon: '📝', title: 'Share Trip Details', desc: 'Provide pickup, destination, date & cab type. Get an instant all-inclusive fare quote.' },
              { step: '3', icon: '✅', title: 'Ride Confirmed', desc: 'Receive booking confirmation with driver name, number & vehicle info on WhatsApp.' },
            ].map((item, i) => (
              <div key={i} className="glass-card" style={{ textAlign: 'center', position: 'relative', paddingTop: '2rem' }}>
                <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', width: '30px', height: '30px', background: 'var(--gradient-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, color: '#000', fontSize: '0.85rem' }}>
                  {item.step}
                </div>
                <div style={{ fontSize: '2rem', marginBottom: '0.4rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)', marginBottom: '0.3rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section-spacing">
        <div className="container-main">
          <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span className="gold-text">What Our Customers</span> Say
          </h2>
          <div className="reviews-grid">
            {tier1Cities.flatMap(city => city.reviews.slice(0, 1).map((review, i) => (
              <div key={`${city.slug}-${i}`} className="review-card">
                <div className="review-stars">⭐⭐⭐⭐⭐</div>
                <p className="review-text">&ldquo;{review.text}&rdquo;</p>
                <div className="review-author">{review.name} — {city.name}</div>
              </div>
            )))}
          </div>
        </div>
      </section>

      {/* SEO CONTENT BLOCK */}
      <section className="section-spacing" style={{ background: 'linear-gradient(180deg, var(--dark) 0%, rgba(30,41,59,0.4) 50%, var(--dark) 100%)' }}>
        <div className="container-main">
          <div className="content-block">
            <h2 style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
              <span className="gold-text">About RS Travel</span> — Reliable Cab Service in Jamshedpur (Sonari)
            </h2>
            <div style={{ maxWidth: '900px', margin: '0 auto', color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)' }}>
              <p style={{ marginBottom: '0.85rem' }}>
                <strong>RS Travel</strong> is a premier <strong>cab service in Jamshedpur</strong>, operating from our base in <strong>Sonari, Jamshedpur, Jharkhand</strong>. Founded in 2018, we have grown from a small operation to one of the most reliable taxi companies in the region, serving <strong>30,000+ satisfied passengers</strong> with a fleet of 50+ verified cabs. Our area expertise spans Sonari, Bistupur, Mango, Sakchi, Telco, Agrico, Parsudih, Bhuiyandih, Azadnagar, Kadma and all corners of Jamshedpur (Tata / Tatanagar).
              </p>
              <p style={{ marginBottom: '0.85rem' }}>
                Our AC cabs cover Jamshedpur, Ranchi, Dhanbad, Bokaro Steel City, Hazaribagh, Deoghar, Giridih, Dumka, Chaibasa and Adityapur (Gamharia). Whether you need a <strong>one way cab from Jamshedpur to Ranchi</strong> (₹1,799), a <strong>Jamshedpur to Kolkata taxi</strong> (₹3,999), or a <strong>local cab within Tatanagar</strong> from just ₹999, RS Travel has the right vehicle for you — Swift Dzire, Honda City Sedan, Toyota Innova, Innova Crysta, Maruti Ertiga, and Tempo Travellers.
              </p>
              <p style={{ marginBottom: '0.85rem' }}>
                What sets RS Travel apart is our unwavering commitment to <strong>transparent, fixed pricing</strong>. Every fare quoted includes toll, fuel and driver batta — no surprise extras at journey&apos;s end. All our drivers are <strong>police-verified</strong> with a minimum 5 years of experience on Jharkhand roads. We accept Cash, UPI, Google Pay, PhonePe, Paytm and Card payments.
              </p>
              <h3 style={{ marginBottom: '0.6rem', marginTop: '1.2rem', color: 'var(--text-primary)' }}>Cab Service from Tatanagar Railway Station</h3>
              <p style={{ marginBottom: '0.85rem' }}>
                Looking for a <strong>cab from Tatanagar station</strong>? RS Travel offers prompt pickup service from <strong>Tatanagar Junction railway station</strong> round the clock. Whether you&apos;re heading to Sonari, Adityapur, Gamharia or any outstation destination like Ranchi, Dhanbad or Kolkata, our drivers are stationed near the station for immediate pickup. Book your <strong>Tatanagar station taxi</strong> via WhatsApp at +91 79798 77450 — confirmed within minutes.
              </p>
              <h3 style={{ marginBottom: '0.6rem', marginTop: '1.2rem', color: 'var(--text-primary)' }}>Ranchi Airport Cab Service</h3>
              <p style={{ marginBottom: '0.85rem' }}>
                Flying via Ranchi? RS Travel provides a dependable <strong>Birsa Munda Airport cab service</strong> for both arrivals and departures. Our drivers monitor your flight status — if your flight is delayed, we adjust at no extra charge. Fixed fares: Airport to Ranchi city from ₹499; Airport to Jamshedpur from ₹2,499. Book your <strong>Ranchi airport taxi</strong> with RS Travel for guaranteed on-time pickup.
              </p>
              <h3 style={{ marginBottom: '0.6rem', marginTop: '1.2rem', color: 'var(--text-primary)' }}>Popular Routes from Jamshedpur (Sonari)</h3>
              <p style={{ marginBottom: '0.85rem' }}>
                Our highest-booked outstation routes include <strong>Jamshedpur to Ranchi cab</strong> (130 km, ~3 hrs, ₹1,799 Hatchback), <strong>Jamshedpur to Kolkata cab</strong> (260 km, ~5-6 hrs, ₹3,999), <strong>Jamshedpur to Dhanbad cab</strong> (80 km, ~2 hrs, ₹1,799), <strong>Jamshedpur to Bokaro cab</strong> (120 km, ~3 hrs, ₹2,399), and <strong>Jamshedpur to Puri cab</strong> (520 km, ~10 hrs, ₹7,999). All fares are all-inclusive — toll, fuel, driver allowance covered.
              </p>
              <h3 style={{ marginBottom: '0.6rem', marginTop: '1.2rem', color: 'var(--text-primary)' }}>Local Taxi in Jamshedpur / Sonari Area</h3>
              <p style={{ marginBottom: '0.85rem' }}>
                For travel within Jamshedpur, RS Travel offers flexible <strong>local taxi packages</strong> (4hr/40km from ₹999 and 8hr/80km). Ideal for hospital visits, corporate meetings, shopping in Bistupur, or sightseeing at Jubilee Park, Dimna Lake and Dalma Wildlife Sanctuary. Our cabs cover Sonari, Mango, Bistupur, Sakchi, Jugsalai, Adityapur, Telco, Kadma, Golmuri, Baridih and all city zones.
              </p>
              <h3 style={{ marginBottom: '0.6rem', marginTop: '1.2rem', color: 'var(--text-primary)' }}>Why RS Travel vs Other Cab Services?</h3>
              <p>
                Unlike app-based services with surge pricing and limited driver availability in Jamshedpur, <strong>RS Travel</strong> is a locally-rooted cab company with fixed fares, 24/7 availability and personally known drivers. With <strong>30,000+ satisfied customers</strong> and a strong reputation in Sonari and across Jamshedpur, RS Travel is the go-to choice for anyone needing a <strong>reliable cab in Jamshedpur, Tata, Tatanagar</strong> or anywhere in Jharkhand. Book instantly at +91 79798 77450 — no app, no wait.
              </p>
            </div>
          </div>

          {/* PAYMENT & BOOKING OPTIONS */}
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1.25rem', color: 'var(--text-primary)', fontSize: 'clamp(1rem, 3vw, 1.25rem)' }}>Accepted <span className="gold-text">Payment Methods</span></h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem' }}>
              {['Cash', 'Google Pay', 'PhonePe', 'Paytm', 'UPI', 'Credit Card', 'Debit Card', 'Net Banking'].map((method, i) => (
                <span key={i} className="area-tag">💳 {method}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOMEPAGE FAQ */}
      <section className="section-spacing">
        <div className="container-main">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                  { '@type': 'Question', name: 'What is the cab fare from Jamshedpur to Ranchi?', acceptedAnswer: { '@type': 'Answer', text: 'RS Travel offers Jamshedpur to Ranchi cab starting at ₹1,799 (Hatchback), ₹2,299 (Sedan), ₹2,999 (SUV), ₹3,499 (Innova Crysta). Distance: 130 km, Duration: ~3 hrs. All-inclusive of toll, fuel, driver allowance. Call +917979877450.' } },
                  { '@type': 'Question', name: 'Which is the best cab service in Jamshedpur (Sonari)?', acceptedAnswer: { '@type': 'Answer', text: 'RS Travel is one of the top-rated cab services in Jamshedpur (Sonari) with 30,000+ happy customers, 50+ verified cabs, and police-verified drivers. We offer GPS-tracked rides, transparent pricing, and 24/7 service. Call +917979877450.' } },
                  { '@type': 'Question', name: 'How do I book a cab with RS Travel in Jamshedpur?', acceptedAnswer: { '@type': 'Answer', text: 'Book a cab with RS Travel by calling +91 79798 77450 or sending a WhatsApp message. Share your pickup, destination, date and cab preference. You get instant confirmation with driver details in 30 seconds. No app needed.' } },
                  { '@type': 'Question', name: 'Is RS Travel available 24 hours a day?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, RS Travel operates 24 hours a day, 7 days a week across 15+ Jharkhand cities. Early morning airport runs, late-night arrivals, festive rush — we are always available at +91 79798 77450.' } },
                  { '@type': 'Question', name: 'Does RS Travel provide one way cab service?', acceptedAnswer: { '@type': 'Answer', text: 'Yes! RS Travel provides one-way cab service throughout Jharkhand. Pay only for your direction of travel. Starting at ₹11/km (Hatchback). Available from Jamshedpur, Ranchi, Dhanbad, Bokaro and 15+ cities.' } },
                  { '@type': 'Question', name: 'What vehicles does RS Travel have?', acceptedAnswer: { '@type': 'Answer', text: 'RS Travel offers: Swift Dzire (₹11/km), Sedan (₹13/km), Ertiga SUV (₹16/km), Innova (₹18/km), Innova Crysta (₹22/km), and Tempo Traveller (₹25/km). All are AC, GPS-tracked and regularly maintained.' } },
                ],
              }),
            }}
          />
          <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span className="gold-text">Frequently Asked</span> Questions
          </h2>
          <FaqSection faqs={[
            { question: 'What is the cab fare from Jamshedpur to Ranchi?', answer: 'RS Travel offers Jamshedpur to Ranchi cab starting at ₹1,799 (Hatchback), ₹2,299 (Sedan), ₹2,999 (SUV), ₹3,499 (Innova Crysta). Distance: 130 km, ~3 hrs. All-inclusive of toll, fuel, driver allowance. Call +917979877450.' },
            { question: 'Which is the best cab service in Jamshedpur (Sonari)?', answer: 'RS Travel is one of the top-rated cab services in Jamshedpur with 30,000+ happy customers, 50+ verified cabs. GPS-tracked rides, transparent pricing, 24/7 service. Call +917979877450.' },
            { question: 'How do I book a cab with RS Travel in Jamshedpur?', answer: 'Book by calling +91 79798 77450 or WhatsApp. Share pickup, destination, date & cab type. Get instant confirmation with driver details in 30 seconds. No app needed.' },
            { question: 'Is RS Travel available 24 hours a day?', answer: 'Yes, RS Travel operates 24/7 across 15+ Jharkhand cities. Early morning, late night, festivals — always available at +91 79798 77450.' },
            { question: 'Does RS Travel provide one way cab service?', answer: 'Yes! One-way cab service across Jharkhand from ₹11/km. Pay only for your direction. Available from Jamshedpur, Ranchi, Dhanbad, Bokaro & 15+ cities.' },
            { question: 'What vehicles does RS Travel have?', answer: 'Swift Dzire (₹11/km), Sedan (₹13/km), Ertiga (₹16/km), Innova (₹18/km), Innova Crysta (₹22/km), Tempo Traveller (₹25/km). All AC, GPS-tracked.' },
          ]} />
          <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
            <a href="/faq" className="btn-outline">View All FAQs →</a>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="section-spacing" style={{ background: 'linear-gradient(180deg, var(--dark) 0%, rgba(26,115,232,0.06) 50%, var(--dark) 100%)' }}>
        <div className="container-main">
          <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span className="gold-text">Quick Links</span> — Explore Our Services
          </h2>
          <div className="internal-links-grid">
            <a href="/fare-chart" className="internal-link">📊 Fare Chart 2026</a>
            <a href="/faq" className="internal-link">❓ FAQ</a>
            <a href="/about" className="internal-link">ℹ️ About Us</a>
            <a href="/contact" className="internal-link">📞 Contact</a>
            {jharkhandCities.slice(0, 8).map(city => (
              <a key={city.slug} href={`/cab-service-${city.slug}`} className="internal-link">🏙️ Cab in {city.name}</a>
            ))}
            {services.filter(s => s.slug !== 'pilgrimage-cab').slice(0, 6).map(s => (
              <a key={s.slug} href={`/jamshedpur/${s.slug}`} className="internal-link">{s.icon} {s.shortName}</a>
            ))}
          </div>

          {/* POPULAR SEARCHES */}
          <div style={{ marginTop: '1.5rem' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--text-primary)', fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)' }}>🔍 <span className="gold-text">Popular Searches</span></h3>
            <div className="internal-links-grid">
              <a href="/jamshedpur-to-ranchi-cab" className="internal-link">🚗 Jamshedpur to Ranchi Cab ₹1,799</a>
              <a href="/jamshedpur-to-kolkata-cab" className="internal-link">🚗 Jamshedpur to Kolkata Cab ₹3,999</a>
              <a href="/ranchi-to-jamshedpur-cab" className="internal-link">🚗 Ranchi to Jamshedpur Cab ₹1,799</a>
              <a href="/ranchi-to-kolkata-cab" className="internal-link">🚗 Ranchi to Kolkata Cab ₹5,999</a>
              <a href="/ranchi-to-patna-cab" className="internal-link">🚗 Ranchi to Patna Cab ₹5,299</a>
              <a href="/jamshedpur-to-dhanbad-cab" className="internal-link">🚗 Jamshedpur to Dhanbad Cab ₹1,799</a>
              <a href="/jamshedpur-to-puri-cab" className="internal-link">🚗 Jamshedpur to Puri Cab ₹7,999</a>
              <a href="/bokaro-to-ranchi-cab" className="internal-link">🚗 Bokaro to Ranchi Cab ₹2,199</a>
              <a href="/dhanbad-to-kolkata-cab" className="internal-link">🚗 Dhanbad to Kolkata Cab</a>
              <a href="/jamshedpur-to-deoghar-cab" className="internal-link">🚗 Jamshedpur to Deoghar Cab ₹2,899</a>
              <a href="/jamshedpur-to-bokaro-cab" className="internal-link">🚗 Jamshedpur to Bokaro Cab ₹2,399</a>
              <a href="/jamshedpur-to-patna-cab" className="internal-link">🚗 Jamshedpur to Patna Cab ₹5,499</a>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className="section-spacing" style={{ background: 'var(--darker)' }}>
        <div className="container-main">
          <BlogSection pageName="Jharkhand" />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-spacing">
        <div className="container-main">
          <CtaBanner
            title="Ready to Book Your Cab? Call RS Travel Now!"
            subtitle="Available 24/7 across 15+ Jharkhand cities. Best rates, zero hidden charges."
            whatsappMessage="Hi RS Travel, I want to book a cab in Jharkhand"
          />
        </div>
      </section>
    </div>
  );
}
