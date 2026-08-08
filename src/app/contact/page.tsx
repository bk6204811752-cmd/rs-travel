import { Metadata } from 'next';
import CtaBanner from '@/components/CtaBanner';
import BookingWidget from '@/components/BookingWidget';
import BannerBookingPanel from '@/components/BannerBookingPanel';
import HeroSlider from '@/components/HeroSlider';

export const metadata: Metadata = {
  title: 'Contact RS Travel | Book Cab ☎ +917979877450 | WhatsApp Booking',
  description: 'Contact RS Travel for cab booking in Jamshedpur & Jharkhand. ☎ Call +917979877450, WhatsApp booking in 30 seconds. Office: Sonari, Jamshedpur. 24/7 available. Email: info@rstravels.com.',
  keywords: [
    'contact rs travel', 'rs travel phone number', 'rs travel jamshedpur contact',
    'cab booking jamshedpur phone number', 'rs travel whatsapp', 'rs travel address',
    'taxi booking number jamshedpur', 'cab service contact jharkhand',
    'rs travel sonari jamshedpur', 'contact rs travels',
  ],
  alternates: { canonical: 'https://www.rstravelsjsr.com/contact' },
  openGraph: {
    title: 'Contact RS Travel | ☎ +917979877450',
    description: 'Call, WhatsApp, or email us. 24/7 cab booking across Jharkhand from Sonari, Jamshedpur.',
    url: 'https://www.rstravelsjsr.com/contact',
    images: [{ url: '/background/rsbg1.webp', width: 1200, height: 630, alt: 'Contact RS Travel' }],
  },
};

export default function ContactPage() {
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
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '1rem' }}>
            <span className="gold-text">Contact RS Travel</span><br />
            <span style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', color: '#e2e8f0', fontWeight: 600 }}>
              Jamshedpur&apos;s Fastest Cab Booking — Call, WhatsApp, or Email
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
        {/* Contact Cards */}
        <div className="services-grid" style={{ marginBottom: '3rem' }}>
          <a href="tel:+917979877450" className="glass-card" style={{ textAlign: 'center', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>📞</div>
            <h3 style={{ marginBottom: '0.5rem' }}>Call Us</h3>
            <p style={{ color: 'var(--primary)', fontSize: '1.25rem', fontWeight: 800 }}>+91 79798 77450</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem' }}>Available 24/7 — Instant response</p>
          </a>
          <a href="https://wa.me/917979877450?text=Hi%20RS%20Travel%2C%20I%20want%20to%20book%20a%20cab" target="_blank" rel="noopener noreferrer" className="glass-card" style={{ textAlign: 'center', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>💬</div>
            <h3 style={{ marginBottom: '0.5rem' }}>WhatsApp</h3>
            <p style={{ color: '#25D366', fontSize: '1.25rem', fontWeight: 800 }}>+91 79798 77450</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem' }}>Book in 30 seconds — No app needed</p>
          </a>
          <a href="mailto:info@rstravels.com" className="glass-card" style={{ textAlign: 'center', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>✉️</div>
            <h3 style={{ marginBottom: '0.5rem' }}>Email</h3>
            <p style={{ color: 'var(--primary)', fontSize: '1.1rem', fontWeight: 700 }}>info@rstravels.com</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem' }}>Corporate queries & bulk booking</p>
          </a>
          <a href="https://share.google/30LBOl3p6lv0tKRyX" target="_blank" rel="noopener noreferrer" className="glass-card" style={{ textAlign: 'center', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>📍</div>
            <h3 style={{ marginBottom: '0.5rem' }}>Office & GMB Location</h3>
            <p style={{ color: 'var(--primary)', fontSize: '0.95rem', fontWeight: 700 }}>Sonari, Jamshedpur</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Jharkhand – 832101</p>
            <span style={{ display: 'inline-block', marginTop: '0.5rem', fontSize: '0.78rem', color: '#f97316', fontWeight: 700 }}>⭐ View RS Travel GMB Map →</span>
          </a>
        </div>

        {/* Office Hours */}
        <div className="content-block" style={{ marginBottom: '3rem' }}>
          <h2>Office <span className="gold-text">Hours</span></h2>
          <div className="fare-table-container" style={{ marginTop: '1rem' }}>
            <table className="fare-table">
              <thead><tr><th>Day</th><th>Booking Hours</th><th>Office Hours</th></tr></thead>
              <tbody>
                <tr><td>Monday – Friday</td><td style={{ color: '#22c55e', fontWeight: 700 }}>24/7 (Always Open)</td><td>9:00 AM – 8:00 PM</td></tr>
                <tr><td>Saturday</td><td style={{ color: '#22c55e', fontWeight: 700 }}>24/7 (Always Open)</td><td>9:00 AM – 6:00 PM</td></tr>
                <tr><td>Sunday & Holidays</td><td style={{ color: '#22c55e', fontWeight: 700 }}>24/7 (Always Open)</td><td>10:00 AM – 4:00 PM</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            * Cab booking is available 24 hours a day, 365 days a year via phone and WhatsApp. Office visits are during listed hours only.
          </p>
        </div>



        {/* Quick Booking Form */}
        <div className="content-block" style={{ marginBottom: '3rem' }}>
          <h2>Quick <span className="gold-text">Booking</span></h2>
          <p style={{ marginBottom: '1.5rem' }}>Fill in your details and book your cab with RS Travel instantly:</p>
          <BookingWidget />
        </div>

        {/* FAQ */}
        <div className="content-block" style={{ marginBottom: '3rem' }}>
          <h2>Frequently Asked <span className="gold-text">Questions</span></h2>
          <div style={{ marginTop: '1rem' }}>
            {[
              { q: 'Does RS Travel operate from Sonari, Jamshedpur?', a: 'Yes. RS Travel is headquartered in Sonari, Jamshedpur, Jharkhand. Our cabs cover the entire Jamshedpur twin-city area including Bistupur, Mango, Adityapur, Sakchi, Jugsalai, and all surrounding localities.' },
              { q: 'What is RS Travel\'s WhatsApp booking number?', a: 'Our WhatsApp booking number is +91 79798 77450. Send your pickup location, destination, date, and vehicle preference. Receive a confirmed booking with driver details in under 60 seconds.' },
              { q: 'Can I get a GST invoice from RS Travel?', a: 'Yes. RS Travel issues GST-compliant invoices for all corporate and business bookings. Contact info@rstravels.com with your GSTIN to set up a corporate account.' },
              { q: 'How quickly does RS Travel dispatch a cab after booking?', a: 'For pre-booked trips, the driver arrives at your pickup location 10 minutes before the scheduled time. For immediate/on-demand bookings, dispatch time is 15-25 minutes depending on your location in Jamshedpur.' },
              { q: 'Is there an RS Travel app?', a: 'Currently, RS Travel operates primarily via WhatsApp and phone booking — making it the fastest cab service to book in Jamshedpur without any app download. A mobile app is in development and will launch soon.' },
            ].map((faq, i) => (
              <div key={i} className="glass-card" style={{ marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>{faq.q}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <CtaBanner
          title="Ready to Book? Call RS Travel Now!"
          subtitle="24/7 | 15+ Cities | 50+ Cabs | ☎ +91 79798 77450"
          whatsappMessage="Hi RS Travel, I want to book a cab"
        />
      </div>

      {/* ContactPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact RS Travel",
            "url": "https://www.rstravelsjsr.com/contact",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "RS Travel",
              "telephone": "+917979877450",
              "email": "info@rstravels.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sonari",
                "addressLocality": "Jamshedpur",
                "addressRegion": "Jharkhand",
                "postalCode": "832101",
                "addressCountry": "IN",
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 22.8046,
                "longitude": 86.2029,
              },
            },
          }),
        }}
      />
    </div>
  );
}
