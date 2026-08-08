interface SchemaMarkupProps {
  type: 'city' | 'service' | 'fleet' | 'route' | 'local-route';
  data: Record<string, unknown>;
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const generateSchema = () => {
    const schemas: Record<string, unknown>[] = [];

    // TaxiService + LocalBusiness schema (always present)
    schemas.push({
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "TaxiService"],
      "name": "RS Travel",
      "telephone": "+917979877450",
      "email": "info@rstravels.com",
      "url": "https://www.rstravelsjsr.com",
      "logo": "https://www.rstravelsjsr.com/logo.png",
      "image": "https://www.rstravelsjsr.com/background/rsbg1.webp",
      "description": `RS Travel — Jamshedpur's most trusted cab service since 2018. Book reliable AC cabs in ${data.areaServed || 'Jharkhand'} with police-verified drivers, GPS tracking, and transparent pricing. Available 24/7.`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sonari",
        "addressLocality": data.cityName || "Jamshedpur",
        "addressRegion": "Jharkhand",
        "postalCode": data.postalCode || "832101",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": data.latitude || 22.8046,
        "longitude": data.longitude || 86.2029,
      },
      "areaServed": data.areaServed || "Jharkhand, India",
      "priceRange": data.priceRange || "₹999 - ₹25,000",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, UPI, Google Pay, PhonePe, Paytm, Credit Card, Debit Card",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59",
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Cab Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "One Way Cab" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Round Trip Cab" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Outstation Cab" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Airport Transfer" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local Taxi" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Car Rental" } },
        ],
      },
      "sameAs": [
        "https://www.rstravelsjsr.com",
        "https://share.google/30LBOl3p6lv0tKRyX"
      ],
    });

    // BreadcrumbList schema
    if (data.breadcrumbs && Array.isArray(data.breadcrumbs)) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": (data.breadcrumbs as { name: string; url: string }[]).map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.url ? `https://www.rstravelsjsr.com${item.url}` : undefined,
        })),
      });
    }

    // FAQ Schema
    if (data.faqs && Array.isArray(data.faqs)) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": (data.faqs as { question: string; answer: string }[]).map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      });
    }

    // Route-specific schema: TouristTrip + TaxiReservation
    if (type === 'route' && data.from && data.to) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        "name": `${data.from} to ${data.to} Cab Service 2026`,
        "description": `Book cab from ${data.from} to ${data.to}. Distance: ${data.distance}km. Starting fare: ₹${data.fare}. AC cab, police-verified driver. Toll + fuel included. Call +917979877450.`,
        "touristType": "Traveler",
        "provider": {
          "@type": "LocalBusiness",
          "name": "RS Travel",
          "telephone": "+917979877450",
          "url": "https://www.rstravelsjsr.com",
        },
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": String(data.fare),
          "highPrice": String(Number(data.fare) * 4),
          "priceCurrency": "INR",
          "offerCount": "5",
          "availability": "https://schema.org/InStock",
        },
      });

      // TaxiReservation schema for rich booking snippet
      schemas.push({
        "@context": "https://schema.org",
        "@type": "TaxiReservation",
        "reservationStatus": "https://schema.org/ReservationConfirmed",
        "provider": {
          "@type": "LocalBusiness",
          "name": "RS Travel",
          "telephone": "+917979877450",
        },
        "pickupLocation": {
          "@type": "Place",
          "name": String(data.from),
          "address": `${data.from}, Jharkhand, India`,
        },
        "dropoffLocation": {
          "@type": "Place",
          "name": String(data.to),
          "address": `${data.to}, India`,
        },
        "totalPrice": String(data.fare),
        "priceCurrency": "INR",
      });
    }

    // Service-specific schema
    if (type === 'service' && data.serviceName) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `${data.serviceName} in ${data.areaServed} - RS Travel`,
        "description": data.serviceDescription || `Book ${data.serviceName} in ${data.areaServed}. AC cab, verified driver, transparent pricing. Call +917979877450.`,
        "provider": {
          "@type": "LocalBusiness",
          "name": "RS Travel",
          "telephone": "+917979877450",
          "url": "https://www.rstravelsjsr.com",
        },
        "areaServed": data.areaServed,
        "serviceType": "Taxi Service",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": data.price || "999",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": data.price || "999",
            "priceCurrency": "INR",
            "unitText": data.priceUnit || "onwards",
          },
          "availability": "https://schema.org/InStock",
        },
      });
    }

    // Fleet/Vehicle schema — using Service type
    if (type === 'fleet' && data.vehicleName) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `${data.vehicleName} Cab Rental in ${data.areaServed} - RS Travel`,
        "description": data.vehicleDescription || `Hire ${data.vehicleName} in ${data.areaServed}. ${data.seatingCapacity || 4} seater, AC, GPS tracked. ₹${data.price || 12}/km. Call +917979877450.`,
        "provider": {
          "@type": "LocalBusiness",
          "name": "RS Travel",
          "telephone": "+917979877450",
          "url": "https://www.rstravelsjsr.com",
        },
        "areaServed": data.areaServed,
        "serviceType": "Vehicle Rental",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": data.price || "12",
          "unitText": "per km",
          "availability": "https://schema.org/InStock",
        },
      });
    }

    return schemas;
  };

  return (
    <>
      {generateSchema().map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
