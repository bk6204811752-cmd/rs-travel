"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const SERVICE_LINKS = [
  { href: "/jamshedpur/one-way-cab", label: "One Way Cab", icon: "🚗" },
  { href: "/jamshedpur/round-trip-cab", label: "Round Trip", icon: "🔄" },
  { href: "/jamshedpur/outstation-cab", label: "Outstation Cab", icon: "🛣️" },
  { href: "/jamshedpur/airport-cab", label: "Airport Cab", icon: "✈️" },
  { href: "/jamshedpur/local-taxi", label: "Local Taxi", icon: "🏙️" },
  { href: "/jamshedpur/corporate-cab", label: "Corporate Cab", icon: "🏢" },
  { href: "/jamshedpur/wedding-cab", label: "Wedding Cab", icon: "💒" },
  { href: "/jamshedpur/pilgrimage-cab", label: "Pilgrimage", icon: "🛕" },
];

const CITY_LINKS = [
  { href: "/cab-service-jamshedpur", label: "Jamshedpur", icon: "📍" },
  { href: "/cab-service-ranchi", label: "Ranchi", icon: "📍" },
  { href: "/cab-service-dhanbad", label: "Dhanbad", icon: "📍" },
  { href: "/cab-service-bokaro", label: "Bokaro", icon: "📍" },
  { href: "/cab-service-deoghar", label: "Deoghar", icon: "📍" },
  { href: "/cab-service-hazaribagh", label: "Hazaribagh", icon: "📍" },
  { href: "/cab-service-giridih", label: "Giridih", icon: "📍" },
  { href: "/cab-service-dumka", label: "Dumka", icon: "📍" },
  { href: "/cab-service-chaibasa", label: "Chaibasa", icon: "📍" },
  { href: "/cab-service-adityapur", label: "Adityapur", icon: "📍" },
  { href: "/cab-service-ramgarh", label: "Ramgarh", icon: "📍" },
  { href: "/cab-service-koderma", label: "Koderma", icon: "📍" },
  { href: "/cab-service-phusro", label: "Phusro", icon: "📍" },
  { href: "/cab-service-daltonganj", label: "Daltonganj", icon: "📍" },
  { href: "/cab-service-pakur", label: "Pakur", icon: "📍" },
  { href: "/cab-service-kolkata", label: "Kolkata", icon: "📍" },
];

const FLEET_LINKS = [
  { href: "/jamshedpur/swift-dzire-cab", label: "Swift Dzire", icon: "🚗" },
  { href: "/jamshedpur/sedan-cab", label: "Sedan", icon: "🚙" },
  { href: "/jamshedpur/ertiga-cab", label: "Ertiga", icon: "🚐" },
  { href: "/jamshedpur/innova-cab", label: "Toyota Innova", icon: "🚐" },
  { href: "/jamshedpur/innova-crysta-cab", label: "Innova Crysta", icon: "🚙" },
  { href: "/jamshedpur/tempo-traveller", label: "Tempo Traveller", icon: "🚌" },
  { href: "/jamshedpur/luxury-cab", label: "Luxury Cab", icon: "✨" },
];

const ROUTE_LINKS = [
  { href: "/jamshedpur-to-ranchi-cab", label: "Jamshedpur → Ranchi", sub: "130 km · ₹1,499", icon: "🛣️" },
  { href: "/jamshedpur-to-kolkata-cab", label: "Jamshedpur → Kolkata", sub: "260 km · ₹3,999", icon: "🛣️" },
  { href: "/ranchi-to-kolkata-cab", label: "Ranchi → Kolkata", sub: "390 km · ₹5,999", icon: "🛣️" },
  { href: "/jamshedpur-to-puri-cab", label: "Jamshedpur → Puri", sub: "490 km · ₹7,499", icon: "🛣️" },
  { href: "/ranchi-to-patna-cab", label: "Ranchi → Patna", sub: "330 km · ₹5,299", icon: "🛣️" },
  { href: "/dhanbad-to-ranchi-cab", label: "Dhanbad → Ranchi", sub: "200 km · ₹2,499", icon: "🛣️" },
];

const INFO_LINKS = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/about", label: "About RS Travel", icon: "🏢" },
  { href: "/fare-chart", label: "Fare Chart 2026", icon: "📊" },
  { href: "/faq", label: "FAQ", icon: "❓" },
  { href: "/blog/exploring-jharkhand", label: "Travel Blog", icon: "📝" },
  { href: "/contact", label: "Contact Us", icon: "📞" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isMenuOpen]);

  const isActive = (href: string) => mounted && pathname === href;

  return (
    <header className="site-header" suppressHydrationWarning>
      <div className="header-top-bar" suppressHydrationWarning>
        <span className="topbar-full" suppressHydrationWarning>📞 24/7 Booking: +91 79798 77450 | ✉️ info@rstravels.com | 🏆 Jamshedpur&apos;s Trusted Cab Service — Sonari, JSR</span>
        <span className="topbar-mobile" suppressHydrationWarning>📞 +91 79798 77450 | ✉️ info@rstravels.com</span>
      </div>
      <div className="header-main">
        <a href="/" className="logo-area" style={{ textDecoration: 'none' }}>
          <div className="logo-img-wrap">
            <Image src="/logo.webp" alt="RS Travel Logo" width={96} height={56} style={{ borderRadius: '6px', objectFit: 'contain' }} priority unoptimized />
          </div>
          <div className="logo-text" suppressHydrationWarning>
            <div className="logo-title">
              <span style={{ color: 'var(--primary)', fontWeight: 800 }}>RS</span>{' '}
              <span style={{ color: 'var(--cta)', fontWeight: 800 }}>Travel</span>
            </div>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0, fontWeight: 500 }}>Sonari, Jamshedpur • Taxi 24/7</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="header-nav">
          <a href="/" className={`nav-link desktop-only${isActive('/') ? ' active' : ''}`}>Home</a>
          <a href="/about" className={`nav-link desktop-only${isActive('/about') ? ' active' : ''}`}>About</a>
          <a href="/fare-chart" className={`nav-link desktop-only${isActive('/fare-chart') ? ' active' : ''}`}>Fare Chart</a>
          <a href="/faq" className={`nav-link desktop-only${isActive('/faq') ? ' active' : ''}`}>FAQ</a>
          <a href="/contact" className={`nav-link desktop-only${isActive('/contact') ? ' active' : ''}`}>Contact</a>
          <div className="header-actions">
            <a href="tel:+917979877450" className="header-phone desktop-only">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span className="phone-text">+91 79798 77450</span>
            </a>
            <a
              href="https://wa.me/917979877450?text=Hi%20RS%20Travel%2C%20I%20want%20to%20book%20a%20cab"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp header-wa-btn desktop-only"
              aria-label="Book a cab via WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 0C5.398 0 0 5.398 0 12.031c0 2.12.553 4.195 1.603 6.012L.15 23.361l5.46-1.431A12.008 12.008 0 0012.03 24c6.633 0 12.031-5.398 12.031-12.031S18.664 0 12.031 0zm0 22.012c-1.782 0-3.528-.482-5.06-1.39l-.364-.217-3.766.986.995-3.666-.237-.378a10.021 10.021 0 01-1.536-5.316c0-5.541 4.512-10.053 10.053-10.053 5.54 0 10.051 4.511 10.051 10.053 0 5.541-4.51 10.05-10.05 10.05zm5.518-7.534c-.302-.152-1.793-.886-2.072-.988-.28-.101-.484-.152-.686.151-.202.302-.784.988-.962 1.19-.178.201-.357.227-.659.075-1.921-.973-3.3-2.617-3.87-3.593-.19-.323-.021-.497.132-.647.137-.137.302-.354.453-.53.151-.178.201-.303.302-.505.101-.203.05-.38-.026-.53s-.686-1.65-.939-2.261c-.247-.59-.497-.509-.686-.518-.178-.01-.382-.01-.584-.01-.202 0-.53.076-.808.38C6.915 8.1 6.132 8.834 6.132 10.323c0 1.49 1.159 2.932 1.32 3.146.161.215 2.144 3.275 5.19 4.516.726.297 1.291.473 1.733.606.727.23 1.385.198 1.905.12.58-.086 1.793-.732 2.045-1.442.251-.708.251-1.314.177-1.44-.075-.13-.279-.204-.582-.355z"/></svg> WhatsApp
            </a>
          </div>

          {/* Hamburger Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-drawer"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </nav>
      </div>

      {/* Overlay */}
      <div
        className={`mobile-drawer-overlay ${isMenuOpen ? 'open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div
        id="mobile-drawer"
        className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
      >
        {/* Drawer Header */}
        <div className="mobile-drawer-header">
          <div className="mobile-drawer-title">
            <span className="mobile-drawer-logo">🚕</span>
            <span><strong style={{ color: 'var(--primary)' }}>RS</strong> <strong style={{ color: 'var(--cta)' }}>Travel</strong> <small style={{ color: '#94a3b8' }}>Menu</small></span>
          </div>
          <button
            className="mobile-drawer-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        {/* Quick CTA Buttons */}
        <div style={{ display: 'flex', gap: '0.6rem', padding: '0 1rem 1rem', borderBottom: '1px solid var(--card-border)' }}>
          <a
            href="tel:+917979877450"
            style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', padding: '0.65rem', background: 'linear-gradient(135deg, var(--primary), #e85d04)', color: '#fff', borderRadius: '10px', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none' }}
            onClick={closeMenu}
          >
            📞 Call Now
          </a>
          <a
            href="https://wa.me/917979877450?text=Hi%20RS%20Travel%2C%20I%20want%20to%20book%20a%20cab"
            target="_blank"
            rel="noopener noreferrer"
            style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', padding: '0.65rem', background: 'linear-gradient(135deg, #25D366, #128C7E)', color: '#fff', borderRadius: '10px', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none' }}
            onClick={closeMenu}
          >
            💬 WhatsApp
          </a>
        </div>

        <nav className="mobile-drawer-nav" aria-label="Mobile menu">

          {/* Booking Strip */}
          <div style={{ margin: '1rem 0 0.5rem', padding: '0.75rem 0.9rem', borderRadius: '14px', background: 'linear-gradient(135deg, rgba(234,179,8,0.14), rgba(249,115,22,0.12))', border: '1px solid rgba(234,179,8,0.3)', textAlign: 'center' }}>
            <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#facc15' }}>🏆 #1 Rated Cab Service in Jharkhand</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>Sonari, Jamshedpur · Est. 2018 · 30,000+ Rides</div>
          </div>

          {/* Quick Actions */}
          <div className="mobile-quick-actions">
            <a href="tel:+917979877450" className="mobile-nav-btn mobile-call-btn" onClick={closeMenu} aria-label="Call RS Travel now">
              📞 Call Now
            </a>
            <a
              href="https://wa.me/917979877450?text=Hi%20RS%20Travel%2C%20I%20want%20to%20book%20a%20cab"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-nav-btn mobile-wa-btn"
              onClick={closeMenu}
              aria-label="Book a cab via WhatsApp"
            >
              💬 WhatsApp
            </a>
          </div>

          {/* Popular Services */}
          <div className="mobile-nav-group">
            <p className="mobile-nav-group-title">🚕 Popular Services</p>
            <div className="mobile-nav-group-list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.35rem' }}>
              {SERVICE_LINKS.map(l => (
                <a key={l.href} href={l.href} className={`mobile-nav-link${isActive(l.href) ? ' active' : ''}`} onClick={closeMenu} style={{ padding: '0.55rem 0.65rem', fontSize: '0.88rem', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px' }}>
                  <span className="nav-icon" style={{ fontSize: '1rem' }}>{l.icon}</span>
                  <span className="nav-text" style={{ fontSize: '0.85rem', fontWeight: 600 }}>{l.label}</span>
                </a>
              ))}
            </div>
          </div>

          <hr className="mobile-nav-divider" />

          {/* Cab by City — all 16 cities */}
          <div className="mobile-nav-group">
            <p className="mobile-nav-group-title">🏙️ Cab by City</p>
            <div className="mobile-nav-group-list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.35rem' }}>
              {CITY_LINKS.map(l => (
                <a key={l.href} href={l.href} className={`mobile-nav-link${isActive(l.href) ? ' active' : ''}`} onClick={closeMenu} style={{ padding: '0.55rem 0.65rem', fontSize: '0.88rem', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px' }}>
                  <span className="nav-icon" style={{ fontSize: '0.95rem' }}>{l.icon}</span>
                  <span className="nav-text" style={{ fontSize: '0.85rem', fontWeight: 600 }}>{l.label}</span>
                </a>
              ))}
            </div>
          </div>

          <hr className="mobile-nav-divider" />

          {/* Our Fleet */}
          <div className="mobile-nav-group">
            <p className="mobile-nav-group-title">🚗 Our Fleet</p>
            <div className="mobile-nav-group-list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.35rem' }}>
              {FLEET_LINKS.map(l => (
                <a key={l.href} href={l.href} className={`mobile-nav-link${isActive(l.href) ? ' active' : ''}`} onClick={closeMenu} style={{ padding: '0.55rem 0.65rem', fontSize: '0.88rem', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px' }}>
                  <span className="nav-icon" style={{ fontSize: '0.95rem' }}>{l.icon}</span>
                  <span className="nav-text" style={{ fontSize: '0.85rem', fontWeight: 600 }}>{l.label}</span>
                </a>
              ))}
            </div>
          </div>

          <hr className="mobile-nav-divider" />

          {/* Popular Routes */}
          <div className="mobile-nav-group">
            <p className="mobile-nav-group-title">🛣️ Popular Routes</p>
            <div className="mobile-nav-group-list">
              {ROUTE_LINKS.map(l => (
                <a key={l.href} href={l.href} className={`mobile-nav-link${isActive(l.href) ? ' active' : ''}`} onClick={closeMenu}>
                  <span className="nav-icon">{l.icon}</span>
                  <span className="nav-text">{l.label}</span>
                  <span className="nav-sub">{l.sub}</span>
                </a>
              ))}
            </div>
          </div>

          <hr className="mobile-nav-divider" />

          {/* Quick Links */}
          <div className="mobile-nav-group">
            <p className="mobile-nav-group-title">📋 Quick Links</p>
            <div className="mobile-nav-group-list">
              {INFO_LINKS.map(l => (
                <a key={l.href} href={l.href} className={`mobile-nav-link${isActive(l.href) ? ' active' : ''}`} onClick={closeMenu}>
                  <span className="nav-icon">{l.icon}</span>
                  <span className="nav-text">{l.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="mobile-drawer-footer">
            <div className="mobile-footer-rating">⭐ 4.8/5 on Google · 2,800+ Happy Customers</div>
            <p style={{ marginTop: '0.5rem' }}>📍 Sonari, Jamshedpur, Jharkhand – 832101</p>
            <p>📞 +91 79798 77450 · ✉️ info@rstravels.com</p>
            <p style={{ marginTop: '0.4rem' }}>🕒 24/7 Booking · 365 Days a Year</p>
            <p>🛡️ Police-Verified Drivers · GPS-Tracked Fleet</p>
          </div>
        </nav>
      </div>
    </header>
  );
}
