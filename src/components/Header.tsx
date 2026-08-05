"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const SERVICE_ITEMS = [
  { href: "/jamshedpur/one-way-cab", label: "One Way Cab", badge: "₹1,499+" },
  { href: "/jamshedpur/round-trip-cab", label: "Round Trip", badge: "10% OFF" },
  { href: "/jamshedpur/outstation-cab", label: "Outstation Cab", badge: "₹11/km" },
  { href: "/jamshedpur/airport-cab", label: "Airport Cab", badge: "24/7" },
  { href: "/jamshedpur/local-taxi", label: "Local Taxi", badge: "₹999+" },
  { href: "/jamshedpur/corporate-cab", label: "Corporate Cab", badge: "GST Bill" },
  { href: "/jamshedpur/wedding-cab", label: "Wedding Cab", badge: "Decorated" },
  { href: "/jamshedpur/pilgrimage-cab", label: "Pilgrimage", badge: "Custom" },
];

const CITY_ITEMS = [
  { href: "/cab-service-jamshedpur", label: "Jamshedpur" },
  { href: "/cab-service-ranchi", label: "Ranchi" },
  { href: "/cab-service-dhanbad", label: "Dhanbad" },
  { href: "/cab-service-bokaro", label: "Bokaro" },
  { href: "/cab-service-deoghar", label: "Deoghar" },
  { href: "/cab-service-hazaribagh", label: "Hazaribagh" },
  { href: "/cab-service-giridih", label: "Giridih" },
  { href: "/cab-service-dumka", label: "Dumka" },
  { href: "/cab-service-chaibasa", label: "Chaibasa" },
  { href: "/cab-service-adityapur", label: "Adityapur" },
  { href: "/cab-service-ramgarh", label: "Ramgarh" },
  { href: "/cab-service-koderma", label: "Koderma" },
  { href: "/cab-service-phusro", label: "Phusro" },
  { href: "/cab-service-daltonganj", label: "Daltonganj" },
  { href: "/cab-service-pakur", label: "Pakur" },
  { href: "/cab-service-kolkata", label: "Kolkata" },
];

const FLEET_ITEMS = [
  { href: "/jamshedpur/swift-dzire-cab", label: "Swift Dzire", seats: "4 Seats", rate: "₹11/km" },
  { href: "/jamshedpur/sedan-cab", label: "Sedan Premium", seats: "4 Seats", rate: "₹12/km" },
  { href: "/jamshedpur/ertiga-cab", label: "Maruti Ertiga", seats: "6 Seats", rate: "₹14/km" },
  { href: "/jamshedpur/innova-cab", label: "Toyota Innova", seats: "7 Seats", rate: "₹17/km" },
  { href: "/jamshedpur/innova-crysta-cab", label: "Innova Crysta", seats: "7 Seats", rate: "₹19/km" },
  { href: "/jamshedpur/tempo-traveller", label: "Tempo Traveller", seats: "12 Seats", rate: "₹24/km" },
  { href: "/jamshedpur/luxury-cab", label: "Luxury Chauffeur", seats: "4 Seats", rate: "On Request" },
];

const ROUTE_ITEMS = [
  { href: "/jamshedpur-to-ranchi-cab", title: "Jamshedpur → Ranchi", meta: "130 km", price: "₹1,499" },
  { href: "/jamshedpur-to-kolkata-cab", title: "Jamshedpur → Kolkata", meta: "260 km", price: "₹3,999" },
  { href: "/ranchi-to-kolkata-cab", title: "Ranchi → Kolkata", meta: "390 km", price: "₹5,999" },
  { href: "/jamshedpur-to-puri-cab", title: "Jamshedpur → Puri", meta: "490 km", price: "₹7,499" },
  { href: "/ranchi-to-patna-cab", title: "Ranchi → Patna", meta: "330 km", price: "₹5,299" },
  { href: "/dhanbad-to-ranchi-cab", title: "Dhanbad → Ranchi", meta: "200 km", price: "₹2,499" },
];

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/fare-chart", label: "Fare Chart" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>('services');
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const toggleAccordion = (key: string) => {
    setOpenAccordion(prev => (prev === key ? null : key));
  };

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
            <p style={{ fontSize: '0.75rem', color: '#475569', margin: 0, fontWeight: 500 }}>Sonari, Jamshedpur • Taxi 24/7</p>
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
        aria-modal={isMenuOpen}
        aria-hidden={!isMenuOpen}
        aria-label="Main menu"
      >
        {/* Drawer Header */}
        <div className="mobile-drawer-header">
          <div className="mobile-drawer-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
            <span><strong style={{ color: 'var(--primary)', fontWeight: 800 }}>RS</strong> <strong style={{ color: 'var(--cta)', fontWeight: 800 }}>Travel</strong> <small style={{ color: '#475569', fontSize: '0.75rem', fontWeight: 500 }}>Sonari, JSR</small></span>
          </div>
          <button
            className="mobile-drawer-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        {/* Quick Action Pill Bar */}
        <div style={{ display: 'flex', gap: '0.5rem', padding: '0.75rem 1rem', borderBottom: '1px solid rgba(148, 163, 184, 0.12)', background: 'rgba(15, 23, 42, 0.4)' }}>
          <a
            href="tel:+917979877450"
            style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', padding: '0.65rem', background: 'linear-gradient(135deg, var(--primary), #1557b0)', color: '#fff', borderRadius: '10px', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', boxShadow: '0 4px 12px rgba(26, 115, 232, 0.25)' }}
            onClick={closeMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Call Now
          </a>
          <a
            href="https://wa.me/917979877450?text=Hi%20RS%20Travel%2C%20I%20want%20to%20book%20a%20cab"
            target="_blank"
            rel="noopener noreferrer"
            style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', padding: '0.65rem', background: 'linear-gradient(135deg, #25D366, #128C7E)', color: '#fff', borderRadius: '10px', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', boxShadow: '0 4px 12px rgba(37, 211, 102, 0.25)' }}
            onClick={closeMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 0C5.398 0 0 5.398 0 12.031c0 2.12.553 4.195 1.603 6.012L.15 23.361l5.46-1.431A12.008 12.008 0 0012.03 24c6.633 0 12.031-5.398 12.031-12.031S18.664 0 12.031 0zm0 22.012c-1.782 0-3.528-.482-5.06-1.39l-.364-.217-3.766.986.995-3.666-.237-.378a10.021 10.021 0 01-1.536-5.316c0-5.541 4.512-10.053 10.053-10.053 5.54 0 10.051 4.511 10.051 10.053 0 5.541-4.51 10.05-10.05 10.05zm5.518-7.534c-.302-.152-1.793-.886-2.072-.988-.28-.101-.484-.152-.686.151-.202.302-.784.988-.962 1.19-.178.201-.357.227-.659.075-1.921-.973-3.3-2.617-3.87-3.593-.19-.323-.021-.497.132-.647.137-.137.302-.354.453-.53.151-.178.201-.303.302-.505.101-.203.05-.38-.026-.53s-.686-1.65-.939-2.261c-.247-.59-.497-.509-.686-.518-.178-.01-.382-.01-.584-.01-.202 0-.53.076-.808.38C6.915 8.1 6.132 8.834 6.132 10.323c0 1.49 1.159 2.932 1.32 3.146.161.215 2.144 3.275 5.19 4.516.726.297 1.291.473 1.733.606.727.23 1.385.198 1.905.12.58-.086 1.793-.732 2.045-1.442.251-.708.251-1.314.177-1.44-.075-.13-.279-.204-.582-.355z"/></svg>
            WhatsApp
          </a>
        </div>

        <nav className="mobile-drawer-nav" aria-label="Mobile menu">
          {/* Primary Quick Pages Grid */}
          <div className="mobile-nav-group" style={{ marginBottom: '0.75rem' }}>
            <p className="mobile-nav-group-title" style={{ fontSize: '0.72rem', letterSpacing: '0.08em', color: '#475569', textTransform: 'uppercase' }}>Quick Navigation</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
              {NAV_ITEMS.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`mobile-nav-link${isActive(l.href) ? ' active' : ''}`}
                  onClick={closeMenu}
                  style={{ padding: '0.6rem 0.75rem', borderRadius: '10px', fontWeight: 600, fontSize: '0.85rem' }}
                >
                  <span className="nav-text">{l.label}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}><polyline points="9 18 15 12 9 6"></polyline></svg>
                </a>
              ))}
            </div>
          </div>

          <hr className="mobile-nav-divider" style={{ margin: '0.5rem 0' }} />

          {/* Accordion 1: Cab Services */}
          <div className="drawer-accordion-item">
            <button
              type="button"
              className={`drawer-accordion-header ${openAccordion === 'services' ? 'expanded' : ''}`}
              onClick={() => toggleAccordion('services')}
            >
              <div className="accordion-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
                <span>Cab Services</span>
              </div>
              <div className="accordion-meta">
                <span className="accordion-badge">8 Services</span>
                <svg className={`accordion-chevron ${openAccordion === 'services' ? 'open' : ''}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </div>
            </button>

            {openAccordion === 'services' && (
              <div className="drawer-accordion-body">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', paddingTop: '0.4rem' }}>
                  {SERVICE_ITEMS.map(l => (
                    <a key={l.href} href={l.href} className={`mobile-nav-link${isActive(l.href) ? ' active' : ''}`} onClick={closeMenu} style={{ padding: '0.55rem 0.75rem', fontSize: '0.85rem' }}>
                      <span className="nav-text" style={{ fontWeight: 600 }}>{l.label}</span>
                      <span className="drawer-price-tag">{l.badge}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Accordion 2: Cab by City */}
          <div className="drawer-accordion-item">
            <button
              type="button"
              className={`drawer-accordion-header ${openAccordion === 'cities' ? 'expanded' : ''}`}
              onClick={() => toggleAccordion('cities')}
            >
              <div className="accordion-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--cta)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Cab by City</span>
              </div>
              <div className="accordion-meta">
                <span className="accordion-badge">16 Cities</span>
                <svg className={`accordion-chevron ${openAccordion === 'cities' ? 'open' : ''}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </div>
            </button>

            {openAccordion === 'cities' && (
              <div className="drawer-accordion-body">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.35rem', paddingTop: '0.4rem' }}>
                  {CITY_ITEMS.map(l => (
                    <a key={l.href} href={l.href} className={`mobile-nav-link${isActive(l.href) ? ' active' : ''}`} onClick={closeMenu} style={{ padding: '0.5rem 0.65rem', fontSize: '0.82rem' }}>
                      <span className="nav-text" style={{ fontSize: '0.82rem', fontWeight: 600 }}>{l.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Accordion 3: Our Fleet */}
          <div className="drawer-accordion-item">
            <button
              type="button"
              className={`drawer-accordion-header ${openAccordion === 'fleet' ? 'expanded' : ''}`}
              onClick={() => toggleAccordion('fleet')}
            >
              <div className="accordion-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                <span>Our Fleet</span>
              </div>
              <div className="accordion-meta">
                <span className="accordion-badge">7 Vehicles</span>
                <svg className={`accordion-chevron ${openAccordion === 'fleet' ? 'open' : ''}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </div>
            </button>

            {openAccordion === 'fleet' && (
              <div className="drawer-accordion-body">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', paddingTop: '0.4rem' }}>
                  {FLEET_ITEMS.map(l => (
                    <a key={l.href} href={l.href} className={`mobile-nav-link${isActive(l.href) ? ' active' : ''}`} onClick={closeMenu} style={{ padding: '0.55rem 0.75rem', fontSize: '0.85rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span className="nav-text" style={{ fontWeight: 600 }}>{l.label}</span>
                        <small style={{ color: '#475569', fontSize: '0.72rem' }}>{l.seats}</small>
                      </div>
                      <span className="drawer-price-tag" style={{ background: 'rgba(26, 115, 232, 0.12)', color: 'var(--primary-light)', border: '1px solid rgba(26, 115, 232, 0.25)' }}>{l.rate}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Accordion 4: Popular Routes */}
          <div className="drawer-accordion-item">
            <button
              type="button"
              className={`drawer-accordion-header ${openAccordion === 'routes' ? 'expanded' : ''}`}
              onClick={() => toggleAccordion('routes')}
            >
              <div className="accordion-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
                <span>Popular Routes</span>
              </div>
              <div className="accordion-meta">
                <span className="accordion-badge">6 Routes</span>
                <svg className={`accordion-chevron ${openAccordion === 'routes' ? 'open' : ''}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </div>
            </button>

            {openAccordion === 'routes' && (
              <div className="drawer-accordion-body">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', paddingTop: '0.4rem' }}>
                  {ROUTE_ITEMS.map(l => (
                    <a key={l.href} href={l.href} className={`mobile-nav-link${isActive(l.href) ? ' active' : ''}`} onClick={closeMenu} style={{ padding: '0.55rem 0.75rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span className="nav-text" style={{ fontWeight: 600, fontSize: '0.85rem' }}>{l.title}</span>
                        <small style={{ color: '#475569', fontSize: '0.72rem' }}>{l.meta}</small>
                      </div>
                      <span className="drawer-price-tag" style={{ background: 'rgba(34, 197, 94, 0.12)', color: '#22c55e', border: '1px solid rgba(34, 197, 94, 0.25)' }}>{l.price}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quick Info Bar */}
          <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.5rem' }}>
            <a href="/about" className={`mobile-nav-link${isActive('/about') ? ' active' : ''}`} onClick={closeMenu} style={{ flex: 1, padding: '0.55rem', borderRadius: '8px', fontSize: '0.8rem', textAlign: 'center', justifyContent: 'center' }}>
              About Us
            </a>
            <a href="/blog/exploring-jharkhand" className={`mobile-nav-link${isActive('/blog/exploring-jharkhand') ? ' active' : ''}`} onClick={closeMenu} style={{ flex: 1, padding: '0.55rem', borderRadius: '8px', fontSize: '0.8rem', textAlign: 'center', justifyContent: 'center' }}>
              Travel Blog
            </a>
          </div>

          <div className="mobile-drawer-footer">
            <div className="mobile-footer-rating">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#facc15" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              <span>4.8/5 on Google · 2,800+ Happy Customers</span>
            </div>
            <p style={{ marginTop: '0.3rem', fontSize: '0.75rem', color: '#475569' }}>📍 Sonari, Jamshedpur · 📞 +91 79798 77450</p>
            <p style={{ marginTop: '0.15rem', fontSize: '0.72rem', color: '#64748b' }}>🕒 24/7 Cab Service · Police Verified Drivers</p>
          </div>
        </nav>
      </div>
    </header>
  );
}
