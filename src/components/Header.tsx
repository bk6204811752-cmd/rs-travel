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
            <Image src="/RSLOGO.svg" alt="RS Travel Logo" width={96} height={56} style={{ borderRadius: '6px', objectFit: 'contain' }} priority unoptimized />
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
        className={`mobile-drawer-clean ${isMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal={isMenuOpen}
        aria-hidden={!isMenuOpen}
        aria-label="Main menu"
      >
        {/* Drawer Header */}
        <div className="clean-drawer-header">
          <div className="clean-drawer-brand">
            <span style={{ fontSize: '1.25rem', fontWeight: 900 }}>
              <span style={{ color: 'var(--primary)' }}>RS</span>{' '}
              <span style={{ color: 'var(--cta)' }}>TRAVEL</span>
            </span>
          </div>
          <button
            className="clean-drawer-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Clean Nav Body matching the user image format */}
        <div className="clean-drawer-body">
          {/* 1. Home */}
          <a
            href="/"
            className={`clean-nav-item ${isActive('/') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <span>Home</span>
          </a>

          {/* 2. Services (Accordion) */}
          <div className="clean-accordion">
            <button
              type="button"
              className={`clean-nav-item ${openAccordion === 'services' ? 'active' : ''}`}
              onClick={() => toggleAccordion('services')}
            >
              <span>Services</span>
              <span className={`clean-chevron ${openAccordion === 'services' ? 'rotate' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
            </button>
            {openAccordion === 'services' && (
              <div className="clean-accordion-sub">
                {SERVICE_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="clean-sub-link"
                    onClick={closeMenu}
                  >
                    <span>{item.label}</span>
                    <span className="sub-badge">{item.badge}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* 3. Tours (Accordion) */}
          <div className="clean-accordion">
            <button
              type="button"
              className={`clean-nav-item ${openAccordion === 'tours' ? 'active' : ''}`}
              onClick={() => toggleAccordion('tours')}
            >
              <span>Tours</span>
              <span className={`clean-chevron ${openAccordion === 'tours' ? 'rotate' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
            </button>
            {openAccordion === 'tours' && (
              <div className="clean-accordion-sub">
                {[
                  { href: '/jamshedpur/pilgrimage-cab', label: 'Jharkhand Temple & Shrine Tours', badge: 'Popular' },
                  { href: '/blog/top-10-destinations', label: 'Top 10 Tourist Destinations', badge: 'Guide' },
                  { href: '/jamshedpur/outstation-cab', label: 'Outstation Packages', badge: 'Best Fare' },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="clean-sub-link"
                    onClick={closeMenu}
                  >
                    <span>{item.label}</span>
                    <span className="sub-badge">{item.badge}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* 4. Cities (Accordion) */}
          <div className="clean-accordion">
            <button
              type="button"
              className={`clean-nav-item ${openAccordion === 'cities' ? 'active' : ''}`}
              onClick={() => toggleAccordion('cities')}
            >
              <span>Cities</span>
              <span className={`clean-chevron ${openAccordion === 'cities' ? 'rotate' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
            </button>
            {openAccordion === 'cities' && (
              <div className="clean-accordion-sub grid-sub">
                {CITY_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="clean-sub-link"
                    onClick={closeMenu}
                  >
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* 5. Fleet (Accordion) */}
          <div className="clean-accordion">
            <button
              type="button"
              className={`clean-nav-item ${openAccordion === 'fleet' ? 'active' : ''}`}
              onClick={() => toggleAccordion('fleet')}
            >
              <span>Fleet</span>
              <span className={`clean-chevron ${openAccordion === 'fleet' ? 'rotate' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
            </button>
            {openAccordion === 'fleet' && (
              <div className="clean-accordion-sub">
                {FLEET_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="clean-sub-link"
                    onClick={closeMenu}
                  >
                    <span>{item.label} ({item.seats})</span>
                    <span className="sub-badge text-amber">{item.rate}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* 6. Fare Chart */}
          <a
            href="/fare-chart"
            className={`clean-nav-item ${isActive('/fare-chart') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <span>Fare Chart</span>
          </a>

          {/* 7. Blog */}
          <a
            href="/blog/exploring-jharkhand"
            className={`clean-nav-item ${isActive('/blog/exploring-jharkhand') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <span>Blog</span>
          </a>

          {/* 8. About */}
          <a
            href="/about"
            className={`clean-nav-item ${isActive('/about') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <span>About</span>
          </a>

          {/* 9. Contact */}
          <a
            href="/contact"
            className={`clean-nav-item ${isActive('/contact') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <span>Contact</span>
          </a>
        </div>

        {/* Clean Footer with Divider Line & Call Now + WhatsApp CTA Buttons */}
        <div className="clean-drawer-footer">
          <div className="clean-cta-group">
            <a
              href="tel:+917979877450"
              className="clean-btn-call"
              onClick={closeMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              Call Now
            </a>
            <a
              href="https://wa.me/917979877450?text=Hi%20RS%20Travel%2C%20I%20want%20to%20book%20a%20cab"
              target="_blank"
              rel="noopener noreferrer"
              className="clean-btn-wa"
              onClick={closeMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 0C5.398 0 0 5.398 0 12.031c0 2.12.553 4.195 1.603 6.012L.15 23.361l5.46-1.431A12.008 12.008 0 0012.03 24c6.633 0 12.031-5.398 12.031-12.031S18.664 0 12.031 0zm0 22.012c-1.782 0-3.528-.482-5.06-1.39l-.364-.217-3.766.986.995-3.666-.237-.378a10.021 10.021 0 01-1.536-5.316c0-5.541 4.512-10.053 10.053-10.053 5.54 0 10.051 4.511 10.051 10.053 0 5.541-4.51 10.05-10.05 10.05zm5.518-7.534c-.302-.152-1.793-.886-2.072-.988-.28-.101-.484-.152-.686.151-.202.302-.784.988-.962 1.19-.178.201-.357.227-.659.075-1.921-.973-3.3-2.617-3.87-3.593-.19-.323-.021-.497.132-.647.137-.137.302-.354.453-.53.151-.178.201-.303.302-.505.101-.203.05-.38-.026-.53s-.686-1.65-.939-2.261c-.247-.59-.497-.509-.686-.518-.178-.01-.382-.01-.584-.01-.202 0-.53.076-.808.38C6.915 8.1 6.132 8.834 6.132 10.323c0 1.49 1.159 2.932 1.32 3.146.161.215 2.144 3.275 5.19 4.516.726.297 1.291.473 1.733.606.727.23 1.385.198 1.905.12.58-.086 1.793-.732 2.045-1.442.251-.708.251-1.314.177-1.44-.075-.13-.279-.204-.582-.355z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
