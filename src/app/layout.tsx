import type { Metadata, Viewport } from "next";
import Image from "next/image";
import "./globals.css";
import Header from "@/components/Header";
import GoogleMapSection from "@/components/GoogleMapSection";
import { Poppins } from 'next/font/google';

const inter = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: "Cab Service Jamshedpur | ₹999 | RS Travel",
    template: "%s | RS Travel Jamshedpur",
  },
  description:
    "#1 cab service in Jamshedpur (Sonari) ✅ AC cabs ₹999 onwards ✅ 24/7 ✅ Police-verified drivers ✅ GPS tracked ✅ 30,000+ happy customers. Outstation, airport & local taxi. ☎ +917979877450",
  metadataBase: new URL("https://www.rstravelsjsr.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.rstravelsjsr.com",
    siteName: "RS Travel",
    title: "RS Travel — #1 Cab Service Jamshedpur (Sonari) & Jharkhand",
    description: "Book reliable AC cab service in Jamshedpur (Sonari), Ranchi, Dhanbad, Bokaro & 15+ Jharkhand cities. Police-verified drivers, fixed pricing, 24/7 availability. Jamshedpur to Ranchi cab ₹2,499. 30,000+ happy customers. Call +917979877450.",
    images: [
      {
        url: "/background/rsbg1.webp",
        width: 1200,
        height: 630,
        alt: "RS Travel — Best Cab Service in Jamshedpur Sonari & Jharkhand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RS Travel — Cab Service Jamshedpur ₹999",
    description: "Book AC cab in Jamshedpur (Sonari), Ranchi, Dhanbad, Bokaro. 24/7, verified drivers, ₹11/km. 30K+ happy rides. Call +917979877450.",
    images: ["/background/rsbg1.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.rstravelsjsr.com',
  },
  other: {
    'geo.region': 'IN-JH',
    'geo.placename': 'Jamshedpur, Sonari, Jharkhand',
    'geo.position': '22.8046;86.2029',
    'ICBM': '22.8046, 86.2029',
    'application-name': 'RS Travel',
    'author': 'RS Travel',
    'format-detection': 'telephone=yes',
  },
  verification: {},
  category: 'travel',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-48x48.png', type: 'image/png', sizes: '48x48' },
      { url: '/favicon-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/logo.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Performance: DNS prefetch for deferred third-party scripts */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        {/* Preload critical font to prevent render-blocking */}
        <meta name="theme-color" content="#1a73e8" />
        <link rel="alternate" hrefLang="en-IN" href="https://www.rstravelsjsr.com" />
        <link rel="alternate" hrefLang="x-default" href="https://www.rstravelsjsr.com" />
        {/* Favicon explicit link tags for Google Search & browsers */}
        <link rel="icon" href="/favicon-48x48.png" sizes="48x48" type="image/png" />
        <link rel="icon" href="/favicon-192x192.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="/logo.png" sizes="512x512" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        {/* TaxiService + LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "TaxiService"],
              "@id": "https://www.rstravelsjsr.com/#organization",
              name: "RS Travel",
              alternateName: ["RS Cab Service", "RS Travel Jamshedpur", "RS Travels Jamshedpur", "RS Travel Sonari"],
              url: "https://www.rstravelsjsr.com",
              logo: "https://www.rstravelsjsr.com/logo.png",
              image: [
                "https://www.rstravelsjsr.com/logo.png",
                "https://www.rstravelsjsr.com/background/rsbg1.webp",
              ],
              telephone: "+917979877450",
              email: "info@rstravels.com",
              foundingDate: "2018",
              description: "Premier cab service in Jamshedpur (Sonari), Jharkhand. Trusted since 2018 with 50+ verified cabs, police-verified drivers, GPS tracking, and transparent pricing. Available 24/7 for local taxi, outstation cab, airport transfer, and corporate car rental across Jharkhand and beyond.",
              slogan: "Jamshedpur's Reliable Cab Service — Every Ride, On Time",
              knowsAbout: ["Cab Service", "Taxi Booking", "Car Rental", "Airport Transfer", "Outstation Cab", "Local Taxi"],
              knowsLanguage: ["Hindi", "English"],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Sonari",
                addressLocality: "Jamshedpur",
                addressRegion: "Jharkhand",
                postalCode: "832101",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 22.8046,
                longitude: 86.2029,
              },
              areaServed: [
                { "@type": "City", name: "Jamshedpur", alternateName: "Tata" },
                { "@type": "City", name: "Tatanagar", alternateName: "Tata Nagar" },
                { "@type": "City", name: "Ranchi" },
                { "@type": "City", name: "Dhanbad" },
                { "@type": "City", name: "Bokaro Steel City", alternateName: "Bokaro" },
                { "@type": "City", name: "Hazaribagh" },
                { "@type": "City", name: "Deoghar" },
                { "@type": "City", name: "Giridih" },
                { "@type": "City", name: "Dumka" },
                { "@type": "City", name: "Chaibasa" },
                { "@type": "City", name: "Adityapur", alternateName: "Gamharia" },
                { "@type": "City", name: "Ramgarh" },
                { "@type": "City", name: "Daltonganj", alternateName: "Medininagar" },
                { "@type": "City", name: "Kolkata", alternateName: "Calcutta" },
                { "@type": "State", name: "Jharkhand" },
                { "@type": "State", name: "West Bengal" },
                { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: 22.8046, longitude: 86.2029 }, geoRadius: "300000" },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Cab Services in Jamshedpur & Jharkhand by RS Travel",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "One Way Cab", description: "Affordable one-way cab from Jamshedpur (Sonari), Ranchi & all Jharkhand cities" }, price: "1799", priceCurrency: "INR" },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Round Trip Cab", description: "Round trip cab service with same driver, 10% discount" }, price: "2999", priceCurrency: "INR" },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Outstation Cab", description: "Outstation cab from Jamshedpur to Ranchi, Kolkata, Patna & more" }, price: "1999", priceCurrency: "INR" },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Airport Transfer", description: "Ranchi Airport & Kolkata Airport cab transfer" }, price: "1499", priceCurrency: "INR" },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local Taxi", description: "Hourly local taxi rental in Jamshedpur, Ranchi, Dhanbad" }, price: "799", priceCurrency: "INR" },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Car Rental", description: "Monthly corporate cab packages with GST billing" }, price: "15999", priceCurrency: "INR" },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Car Rental", description: "Decorated wedding cars with professional chauffeur" }, price: "4999", priceCurrency: "INR" },
                ],
              },
              priceRange: "₹999 - ₹25,000",
              currenciesAccepted: "INR",
              paymentAccepted: "Cash, UPI, Google Pay, PhonePe, Paytm, Credit Card, Debit Card",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
              potentialAction: {
                "@type": "ReserveAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://wa.me/917979877450?text=Hi%20RS%20Travel%2C%20I%20want%20to%20book%20a%20cab",
                  actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
                },
                result: { "@type": "Reservation", name: "Cab Booking" },
              },
            }),
          }}
        />
        {/* WebSite Schema with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "RS Travel",
              url: "https://www.rstravelsjsr.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.rstravelsjsr.com/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.rstravelsjsr.com/#organization",
              name: "RS Travel",
              url: "https://www.rstravelsjsr.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.rstravelsjsr.com/logo.png",
                width: 512,
                height: 512,
              },
              foundingDate: "2018",
              founder: { "@type": "Person", name: "RS Travel Team" },
              sameAs: [
                "https://www.rstravelsjsr.com",
                "https://share.google/30LBOl3p6lv0tKRyX"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+917979877450",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["Hindi", "English"],
              },
            }),
          }}
        />
      </head>
      <body id="top" className={inter.className} suppressHydrationWarning>
        <Header />

        {/* Main Content */}
        <main>{children}</main>

        {/* Dynamic Google Map Section (Above Footer) */}
        <GoogleMapSection />

        {/* Footer */}
        <footer className="site-footer">
          <div className="container-main">
            <div className="footer-grid">
              <div className="footer-section">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div className="footer-logo-wrap">
                    <Image src="/RSLOGO.svg" alt="RS Travel Logo" width={96} height={56} style={{ borderRadius: '6px', objectFit: 'contain' }} unoptimized />
                  </div>
                  <h3 style={{ margin: 0 }}>RS Travel</h3>
                </div>
                <p>
                  Jamshedpur&apos;s trusted cab service since 2018. We serve 15+ cities with 50+ verified
                  cabs, police-verified drivers, and transparent pricing. Available 24/7 for local, outstation,
                  airport transfers, and corporate travel.
                </p>
                <p style={{ marginTop: '0.75rem' }}>
                  📍 Sonari, Jamshedpur, Jharkhand – 832101<br />
                  📞 +91 79798 77450<br />
                  ✉️ info@rstravels.com
                </p>
                {/* Social Media Links */}
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                  <a href="https://wa.me/917979877450" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25D366', textDecoration: 'none', transition: 'all 0.3s ease' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </a>
                  <a href="mailto:info@rstravels.com" target="_blank" rel="noopener noreferrer" aria-label="Email RS Travel" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', textDecoration: 'none', transition: 'all 0.3s ease' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </a>
                </div>
              </div>
              <div className="footer-section">
                <h3>🏙️ Our Cities</h3>
                <ul className="footer-links">
                  <li><a href="/cab-service-jamshedpur">Cab Jamshedpur</a></li>
                  <li><a href="/cab-service-ranchi">Cab Ranchi</a></li>
                  <li><a href="/cab-service-dhanbad">Cab Dhanbad</a></li>
                  <li><a href="/cab-service-bokaro">Cab Bokaro</a></li>
                  <li><a href="/cab-service-deoghar">Cab Deoghar</a></li>
                  <li><a href="/cab-service-hazaribagh">Cab Hazaribagh</a></li>
                  <li><a href="/cab-service-giridih">Cab Giridih</a></li>
                  <li><a href="/cab-service-dumka">Cab Dumka</a></li>
                  <li><a href="/cab-service-chaibasa">Cab Chaibasa</a></li>
                  <li><a href="/cab-service-adityapur">Cab Adityapur</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h3>🚗 Services</h3>
                <ul className="footer-links">
                  <li><a href="/jamshedpur/one-way-cab">One Way Cab</a></li>
                  <li><a href="/jamshedpur/round-trip-cab">Round Trip Cab</a></li>
                  <li><a href="/jamshedpur/outstation-cab">Outstation Cab</a></li>
                  <li><a href="/jamshedpur/local-taxi">Local Taxi</a></li>
                  <li><a href="/jamshedpur/airport-cab">Airport Cab</a></li>
                  <li><a href="/jamshedpur/wedding-cab">Wedding Cab</a></li>
                  <li><a href="/jamshedpur/corporate-cab">Corporate Cab</a></li>
                  <li><a href="/jamshedpur/pilgrimage-cab">Pilgrimage Cab</a></li>
                  <li><a href="/fare-chart">📊 Fare Chart</a></li>
                  <li><a href="/faq">❓ FAQ</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h3>🛣️ Popular Routes</h3>
                <ul className="footer-links">
                  <li><a href="/jamshedpur-to-kolkata-cab">Jamshedpur → Kolkata</a></li>
                  <li><a href="/jamshedpur-to-ranchi-cab">Jamshedpur → Ranchi</a></li>
                  <li><a href="/ranchi-to-kolkata-cab">Ranchi → Kolkata</a></li>
                  <li><a href="/dhanbad-to-kolkata-cab">Dhanbad → Kolkata</a></li>
                  <li><a href="/bokaro-to-ranchi-cab">Bokaro → Ranchi</a></li>
                  <li><a href="/jamshedpur-to-puri-cab">Jamshedpur → Puri</a></li>
                  <li><a href="/ranchi-to-patna-cab">Ranchi → Patna</a></li>
                  <li><a href="/jamshedpur-to-deoghar-cab">Jamshedpur → Deoghar</a></li>
                  <li><a href="/dhanbad-to-ranchi-cab">Dhanbad → Ranchi</a></li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              <p>© {new Date().getFullYear()} RS Travel. All rights reserved. | Jamshedpur&apos;s Trusted Cab Service Since 2018</p>
              <p style={{ marginTop: '0.25rem' }}>📞 +91 79798 77450 | ✉️ info@rstravels.com | 🌐 rstravelsjsr.com | 📍 Sonari, Jamshedpur</p>
              <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', opacity: 0.9 }}>
                Developed by{' '}
                <a
                  href="https://basant.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#f59e0b',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  BASANT KUMAR
                </a>
              </p>
            </div>
          </div>
        </footer>

        {/* Floating Action Buttons */}
        <div className="floating-buttons">
          <a
            href="https://wa.me/917979877450?text=Hi%20RS%20Travel%2C%20I%20want%20to%20book%20a%20cab"
            target="_blank"
            rel="noopener noreferrer"
            className="float-btn float-wa"
            aria-label="Chat on WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 0C5.398 0 0 5.398 0 12.031c0 2.12.553 4.195 1.603 6.012L.15 23.361l5.46-1.431A12.008 12.008 0 0012.03 24c6.633 0 12.031-5.398 12.031-12.031S18.664 0 12.031 0zm0 22.012c-1.782 0-3.528-.482-5.06-1.39l-.364-.217-3.766.986.995-3.666-.237-.378a10.021 10.021 0 01-1.536-5.316c0-5.541 4.512-10.053 10.053-10.053 5.54 0 10.051 4.511 10.051 10.053 0 5.541-4.51 10.05-10.05 10.05zm5.518-7.534c-.302-.152-1.793-.886-2.072-.988-.28-.101-.484-.152-.686.151-.202.302-.784.988-.962 1.19-.178.201-.357.227-.659.075-1.921-.973-3.3-2.617-3.87-3.593-.19-.323-.021-.497.132-.647.137-.137.302-.354.453-.53.151-.178.201-.303.302-.505.101-.203.05-.38-.026-.53s-.686-1.65-.939-2.261c-.247-.59-.497-.509-.686-.518-.178-.01-.382-.01-.584-.01-.202 0-.53.076-.808.38C6.915 8.1 6.132 8.834 6.132 10.323c0 1.49 1.159 2.932 1.32 3.146.161.215 2.144 3.275 5.19 4.516.726.297 1.291.473 1.733.606.727.23 1.385.198 1.905.12.58-.086 1.793-.732 2.045-1.442.251-.708.251-1.314.177-1.44-.075-.13-.279-.204-.582-.355z"/>
            </svg>
          </a>
          <a href="tel:+917979877450" className="float-btn float-call" aria-label="Call Now">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>
        </div>

        {/* Back to Top */}
        <a href="#top" className="back-to-top" aria-label="Scroll to top">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6"/></svg>
        </a>
      </body>
    </html>
  );
}
