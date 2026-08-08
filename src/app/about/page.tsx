import { Metadata } from 'next';
import BookingWidget from '@/components/BookingWidget';
import BannerBookingPanel from '@/components/BannerBookingPanel';
import CtaBanner from '@/components/CtaBanner';
import HeroSlider from '@/components/HeroSlider';

export const metadata: Metadata = {
  title: 'About RS Travel — Sonari, Jamshedpur\'s Punctual Cab Service Since 2018',
  description: 'RS Travel is Jamshedpur\'s people-first cab service operating from Sonari since 2018. 30,000+ rides done, 50+ AC cabs, zero hidden charges. Discover the story, fleet, and team behind Jharkhand\'s fastest-growing taxi brand. ☎ +917979877450.',
  keywords: [
    'about rs travel', 'rs travel jamshedpur sonari', 'rs travel founded 2018',
    'jamshedpur cab company', 'rs travels team', 'rs travel history jamshedpur',
    'trusted taxi company sonari', 'people first cab service jamshedpur',
    'rs travel fleet details', 'rs travel contact sonari', 'rs travel reviews',
  ],
  alternates: { canonical: 'https://www.rstravelsjsr.com/about' },
  openGraph: {
    title: 'About RS Travel | Sonari, Jamshedpur — People-First Cab Service',
    description: 'Founded in 2018 in Sonari, Jamshedpur. 30,000+ completed rides across Jharkhand and beyond. Learn our story.',
    url: 'https://www.rstravelsjsr.com/about',
    images: [{ url: '/background/rsbg1.webp', width: 1200, height: 630, alt: 'About RS Travel — Jamshedpur Cab Service from Sonari' }],
  },
};

export default function AboutPage() {
  return (
    <div className="page-content">
      {/* 1. BANNER BOOKING PANEL (Directly below Header) */}
      <div style={{ paddingTop: '1rem', paddingBottom: '0.5rem' }}>
        <div className="container-main">
          <BannerBookingPanel />
        </div>
      </div>

      {/* 2. NAV BANNER WITH TEXT & HERO SLIDER */}
      <section className="hero-section" style={{ minHeight: 'auto', paddingTop: '2rem', paddingBottom: '3rem' }}>
        <HeroSlider />
        <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-block', padding: '0.35rem 0.85rem', background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: '8px', fontSize: '0.8rem', color: '#f97316', fontWeight: 600, marginBottom: '1rem' }}>
            🚕 Serving Jamshedpur Since 2018
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '1.5rem' }}>
            <span className="gold-text">Who We Are — RS Travel</span><br />
            <span style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', color: '#e2e8f0', fontWeight: 600 }}>
              Jamshedpur&apos;s Punctual, People-First Cab Service
            </span>
          </h1>
          <div className="hero-btn-group" style={{ marginBottom: '2rem' }}>
            <a href="tel:+917979877450" className="btn-primary">📞 Call: +91 79798 77450</a>
            <a href="https://wa.me/917979877450?text=Hi%20RS%20Travel" target="_blank" rel="noopener noreferrer" className="btn-whatsapp pulse-animation">💬 WhatsApp Booking</a>
          </div>

          {/* 3. BOOKING WIDGET (WHITE FORM BELOW HERO BANNER) */}
          <BookingWidget />
        </div>
      </section>

      <div className="container-main section-spacing">

        {/* Origin Story */}
        <div className="content-block">
          <h2><span className="gold-text">From Sonari to Every Corner of Jharkhand</span></h2>
          <p style={{ lineHeight: 1.8 }}>
            RS Travel was born in <strong>2018 in the heart of Sonari, Jamshedpur</strong> — a locality that embodies the hardworking spirit of Jharkhand. Our founder, a lifelong Jamshedpur resident, noticed a clear gap: cab services in the city were unreliable, overpriced, or simply unavailable when passengers needed them most — at 4 AM for a Tatanagar train, during the monsoon rush, or on festival nights.
          </p>
          <p style={{ lineHeight: 1.8 }}>
            RS Travel was the answer — a <strong>no-nonsense, punctuality-first taxi service</strong> built specifically for the people of Jamshedpur. Starting with just 3 cabs in Sonari, Bistupur, and Mango, we grew through word of mouth — one satisfied customer at a time. Today, <strong>30,000+ completed rides</strong> and <strong>50+ verified AC cabs</strong> cover Jamshedpur, Ranchi, Dhanbad, and 12+ cities across Jharkhand.
          </p>
        </div>

        {/* Stats — 5-stat grid, unique layout */}
        <div className="stats-grid" style={{ margin: '3rem 0', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))' }}>
          <div className="stat-card glass-card">
            <div className="number">{new Date().getFullYear() - 2018}+</div>
            <div className="label">Years Active</div>
          </div>
          <div className="stat-card glass-card">
            <div className="number">30K+</div>
            <div className="label">Rides Completed</div>
          </div>
          <div className="stat-card glass-card">
            <div className="number">50+</div>
            <div className="label">AC Cabs</div>
          </div>
          <div className="stat-card glass-card">
            <div className="number">15+</div>
            <div className="label">Cities Covered</div>
          </div>
          <div className="stat-card glass-card">
            <div className="number">4.8★</div>
            <div className="label">Google Rating</div>
          </div>
        </div>

        {/* The RS Travel Promise */}
        <div className="content-block">
          <h2>The <span className="gold-text">RS Travel Promise</span></h2>
          <p style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Every cab company claims to be reliable. Here is exactly how RS Travel delivers on that — with concrete policies, not just slogans:
          </p>
          <div className="services-grid" style={{ marginTop: '1.5rem' }}>
            {[
              { icon: '🛡️', title: 'Mandatory Police Verification', desc: 'Every RS Travel driver clears full police verification and a character background check before joining. This is non-negotiable — not just a formality. Re-checked every 12 months.' },
              { icon: '📡', title: 'Live GPS on Every Cab', desc: 'Each vehicle transmits real-time location. After booking, you get a tracking link to share with family — so someone always knows where you are throughout the journey.' },
              { icon: '📋', title: 'No Surprise Bills', desc: 'Your quoted fare covers fuel, driver allowance, and highway toll. The price is locked before you board. No meter tampering, no route manipulation, ever.' },
              { icon: '🌙', title: 'Genuinely 24/7 Operations', desc: 'RS Travel cabs operate at 2 AM for Tatanagar train connections, at 5 AM for Ranchi airport drops, and on Diwali night. Our dispatch team is always staffed.' },
              { icon: '💬', title: 'Book via WhatsApp in 60 Seconds', desc: 'Message your pickup, destination, and vehicle preference to +91 79798 77450. Get a confirmed booking with driver name and cab number — no app download required.' },
              { icon: '✨', title: 'Pre-Trip Cab Sanitization', desc: 'Before each booking, the driver sanitizes the passenger cabin and checks the AC. You always board a clean cab — this is routine, not an exception.' },
              { icon: '💳', title: 'Every Payment Mode Accepted', desc: 'Cash, Google Pay, PhonePe, Paytm, credit card, debit card, or net banking. Corporate clients receive monthly GST invoices with full trip logs.' },
              { icon: '🔄', title: 'Free Cancellation — 2-Hour Window', desc: 'Cancel up to 2 hours before your scheduled pickup for a full, automatic refund. No forms, no waiting, no questions asked.' },
            ].map((item, i) => (
              <div key={i} className="glass-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.35rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fleet */}
        <div className="content-block" style={{ marginTop: '3rem' }}>
          <h2>Our <span className="gold-text">Vehicle Fleet</span></h2>
          <p style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
            RS Travel maintains a carefully selected fleet of air-conditioned, well-serviced vehicles. Each cab goes through monthly mechanical inspection and is retired after 4 years to guarantee consistent ride quality. Choose what suits your group and budget:
          </p>
          <div className="fare-table-container">
            <table className="fare-table">
              <thead><tr><th>Vehicle</th><th>Category</th><th>Capacity</th><th>Rate/km</th><th>Ideal For</th></tr></thead>
              <tbody>
                <tr><td><strong>Swift Dzire</strong></td><td>Compact Hatchback</td><td>4 Passengers</td><td>₹11/km</td><td>Solo travel, couples, budget trips</td></tr>
                <tr><td><strong>Honda City / Ciaz</strong></td><td>Executive Sedan</td><td>4 Passengers</td><td>₹13/km</td><td>Business travel, airport drops</td></tr>
                <tr><td><strong>Maruti Ertiga</strong></td><td>7-Seater MPV</td><td>6 Passengers</td><td>₹16/km</td><td>Families with extra luggage</td></tr>
                <tr><td><strong>Toyota Innova</strong></td><td>Premium SUV</td><td>7 Passengers</td><td>₹18/km</td><td>Large groups, long-distance journeys</td></tr>
                <tr><td><strong>Innova Crysta</strong></td><td>Luxury SUV</td><td>7 Passengers</td><td>₹22/km</td><td>VIP travel, weddings, special events</td></tr>
                <tr><td><strong>Tempo Traveller</strong></td><td>Mini-Bus</td><td>12 Passengers</td><td>₹25/km</td><td>Pilgrimages, team outings, group tours</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Coverage Area */}
        <div className="content-block" style={{ marginTop: '3rem' }}>
          <h2>Where We <span className="gold-text">Operate</span></h2>
          <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
            Our home base is <strong>Sonari, Jamshedpur</strong>. From here, RS Travel cabs serve every locality in the twin-city region and extend across Jharkhand and beyond — from short city trips to multi-day interstate journeys:
          </p>
          <div className="area-tags" style={{ marginTop: '0.75rem' }}>
            {['Jamshedpur', 'Sonari', 'Ranchi', 'Dhanbad', 'Bokaro', 'Deoghar', 'Hazaribagh', 'Giridih', 'Dumka', 'Chaibasa', 'Adityapur', 'Kolkata', 'Patna', 'Puri', 'Bhubaneswar'].map(city => (
              <span key={city} className="area-tag">📍 {city}</span>
            ))}
          </div>
          <p style={{ lineHeight: 1.8, marginTop: '1rem', color: 'var(--text-secondary)' }}>
            Most popular routes: Jamshedpur → Kolkata (250 km), Jamshedpur → Ranchi (130 km), Ranchi → Patna (330 km), Jamshedpur → Puri (490 km). All outstation fares include highway toll and driver accommodation.
          </p>
        </div>

        {/* Booking CTA */}
        <div style={{ marginTop: '3rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            Plan a Trip? <span className="gold-text">Book Right Now</span>
          </h2>
          <BookingWidget />
        </div>

        <div style={{ marginTop: '3rem' }}>
          <CtaBanner
            title="RS Travel — Jamshedpur's Punctual Cab Service"
            subtitle="Available 24/7 | 50+ Cabs | 15+ Cities | ☎ +91 79798 77450"
            whatsappMessage="Hi RS Travel, I want to book a cab"
          />
        </div>
      </div>
    </div>
  );
}
