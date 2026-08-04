import { Metadata } from 'next';
import HeroSlider from '@/components/HeroSlider';
import CtaBanner from '@/components/CtaBanner';
import FaqSection from '@/components/FaqSection';

export const metadata: Metadata = {
  title: 'FAQ — RS Travel | Cab Booking Questions Answered | Jamshedpur 2026',
  description: 'All your cab booking questions answered by RS Travel — Jamshedpur\'s trusted taxi service since 2018. Learn about our fares, safety standards, cancellation policy, and more. ☎ +917979877450.',
  keywords: [
    'rs travel faq 2026', 'cab booking questions jamshedpur', 'rs travel help',
    'taxi booking jamshedpur questions', 'rs travel cancellation policy',
    'cab fare jamshedpur 2026', 'rs travel payment options', 'rs travel sonari contact',
    'outstation cab questions jharkhand', 'airport cab jamshedpur faq',
  ],
  alternates: { canonical: 'https://rstravelsjsr.com/faq' },
  openGraph: {
    title: 'RS Travel FAQ 2026 | Cab Booking Questions Answered',
    description: 'Everything you need to know before booking with RS Travel in Jamshedpur, Jharkhand.',
    url: 'https://rstravelsjsr.com/faq',
    images: [{ url: '/background/rsbg1.webp', width: 1200, height: 630, alt: 'RS Travel FAQ — Jamshedpur Cab Service Help' }],
  },
};

const allFaqs = [
  // Booking
  { question: 'How do I place a cab booking with RS Travel?', answer: 'Call us at +91 79798 77450 or send a WhatsApp message with your pickup point, drop-off location, travel date, time, and preferred vehicle type. Our team confirms the booking instantly and shares your assigned driver\'s name, photo, and vehicle number.' },
  { question: 'Is WhatsApp booking with RS Travel instant?', answer: 'Yes — WhatsApp is the fastest way to book. Message +91 79798 77450 with your trip details and receive full booking confirmation in under 60 seconds. No app download, no account creation required.' },
  { question: 'Can RS Travel arrange a cab for a family member who is not tech-savvy?', answer: 'Absolutely. Share the passenger\'s name and phone number with us. RS Travel will call them directly, confirm pickup details, and send the driver\'s information to their mobile number.' },
  { question: 'What is the ideal booking lead time for RS Travel?', answer: 'Local rides: at least 2 hours in advance. Outstation trips: 12-24 hours recommended. Airport transfers: minimum 4 hours ahead. We do our best to handle urgent last-minute bookings based on fleet availability.' },

  // Pricing
  { question: 'What are RS Travel\'s cab fares in Jamshedpur?', answer: 'Local taxi from ₹999 (4hr/40km Hatchback). Outstation one-way rates: Hatchback ₹11/km, Sedan ₹13/km, SUV/Ertiga ₹16/km, Innova ₹18/km, Crysta ₹22/km, Tempo ₹25/km. Call +917979877450 for a personalised fare quote.' },
  { question: 'Does the RS Travel fare include toll and fuel?', answer: 'Yes. Our quoted price covers fuel and standard highway tolls for most domestic routes. For inter-state travel (Jharkhand ↔ West Bengal, Bihar, Odisha), state entry tax is charged at cost. No hidden components.' },
  { question: 'Will RS Travel charge more for late-night trips?', answer: 'Outstation trips have no night surcharge. For local taxi bookings departing between 10 PM and 6 AM, a transparent 10% night premium may be applied — communicated to you before booking is confirmed.' },
  { question: 'Is there a minimum trip distance for outstation bookings?', answer: 'Round-trip outstation bookings carry a minimum of 250 km per day. One-way trips are billed on actual kilometres driven. Call +917979877450 for exact per-trip pricing.' },

  // Fleet
  { question: 'What vehicles are available in the RS Travel fleet?', answer: 'We operate: Swift Dzire (compact, 4-seater, ₹11/km), Honda City/Ciaz (sedan, 4-seater, ₹13/km), Maruti Ertiga (MPV, 6-seater, ₹16/km), Toyota Innova (SUV, 7-seater, ₹18/km), Innova Crysta (luxury, 7-seater, ₹22/km), Tempo Traveller (12-15 seater, ₹25/km).' },
  { question: 'Is AC guaranteed in all RS Travel cabs?', answer: 'Yes — 100% of our fleet is air-conditioned. Each driver pre-checks the AC before every trip to ensure it is working optimally. No exceptions, no surprises.' },
  { question: 'Can I choose a specific vehicle model for my trip?', answer: 'Yes. Mention your preferred vehicle (e.g., Innova Crysta, Ertiga) while booking and we will allocate it based on availability. For weddings and VIP travel, advance booking of 24+ hours is recommended.' },

  // Safety
  { question: 'How does RS Travel verify its drivers?', answer: 'Every RS Travel driver clears police verification and an Aadhaar-based background check before joining. They hold a valid commercial driving licence, have 5+ years of experience, and undergo re-verification every 12 months.' },
  { question: 'Can I track my RS Travel cab in real time?', answer: 'Yes. All RS Travel vehicles transmit live GPS location. Once your booking is confirmed, you receive a shareable tracking link — so you and your family always know where the cab is.' },
  { question: 'How safe is RS Travel for women traveling alone?', answer: 'Extremely safe. Every driver is police-verified with Aadhaar registration. Vehicles are GPS-tracked with real-time sharing. Our 24/7 emergency helpline (+91 79798 77450) is always staffed. A significant portion of our repeat customers are working women and solo female travelers.' },

  // Cancellation
  { question: 'What is RS Travel\'s cancellation and refund policy?', answer: 'Cancel at least 2 hours before your scheduled pickup and receive a 100% refund — processed automatically with no forms to fill. Cancellations within the 2-hour window may attract a ₹200-₹500 fee depending on the trip distance.' },
  { question: 'Can I reschedule an RS Travel booking?', answer: 'Yes. Call or WhatsApp +91 79798 77450 at least 2 hours before your original pickup time to change the date, time, pickup point, or destination. No rescheduling fee for advance notice.' },

  // Payment
  { question: 'What payment options does RS Travel offer?', answer: 'Cash at trip end, UPI (Google Pay, PhonePe, Paytm, BHIM), credit and debit cards, and net banking. Corporate clients can opt for monthly invoicing with GST receipts and itemised trip reports.' },
  { question: 'Is upfront payment required for RS Travel bookings?', answer: 'No. Standard bookings require no advance payment — you pay the driver on trip completion. Wedding packages and multi-day outstation bookings require a 20% advance to lock in your slot.' },

  // Services
  { question: 'Does RS Travel cover airport pickups and drops?', answer: 'Yes. RS Travel provides 24/7 airport transfer service to Birsa Munda Airport (Ranchi), Deoghar Airport, and surrounding airports. We track your flight for delays and hold your cab with no extra waiting charges for up to 30 minutes.' },
  { question: 'Does RS Travel provide decorated cars for weddings?', answer: 'Yes. Wedding cab packages start at ₹4,999/day and include a decorated Innova Crysta with a professionally presented chauffeur. We also arrange guest fleet logistics for large wedding parties. Advance booking of 3-5 days is recommended for peak season.' },
  { question: 'Does RS Travel offer employee transport or corporate packages?', answer: 'Yes. Monthly corporate packages from ₹15,999 include a dedicated vehicle, driver, GST billing, monthly trip summaries, and an account manager. Email info@rstravels.com to discuss your company\'s requirements.' },

  // Cities
  { question: 'Which Jharkhand cities does RS Travel operate in?', answer: 'RS Travel covers Jamshedpur (Sonari base), Ranchi, Dhanbad, Bokaro Steel City, Deoghar, Hazaribagh, Giridih, Dumka, Chaibasa, Adityapur, Ramgarh, Koderma, Phusro, Daltonganj, and Pakur. Interstate routes available to Kolkata, Patna, Puri, Bhubaneswar, and more.' },
  { question: 'Can RS Travel take me from Jharkhand to another state?', answer: 'Absolutely. We regularly operate outstation cabs to West Bengal (Kolkata, Durgapur), Bihar (Patna, Gaya, Bodh Gaya), and Odisha (Puri, Bhubaneswar). Both one-way and round-trip bookings available with all-inclusive pricing.' },

  // Miscellaneous
  { question: 'Are pets allowed in RS Travel cabs?', answer: 'Pets are permitted with advance notification during booking. We assign a pet-friendly vehicle when you inform us. A cleaning fee of ₹200-₹500 applies to cover post-trip sanitization.' },
  { question: 'Does RS Travel provide infant or child car seats?', answer: 'Yes, child seats are available on request at no additional cost. Mention this while booking so we can install the appropriate seat before pickup.' },
  { question: 'What if my RS Travel cab breaks down mid-journey?', answer: 'In the rare case of a mechanical breakdown, we dispatch a replacement vehicle immediately at no extra cost. Our 24/7 roadside support line (+91 79798 77450) handles emergencies to ensure you reach your destination on time.' },
  { question: 'How do I reach RS Travel support?', answer: 'Call or WhatsApp: +91 79798 77450 (available 24 hours, 7 days). Email: info@rstravels.com. Office: Sonari, Jamshedpur, Jharkhand – 832101. WhatsApp messages receive a response within 60 seconds.' },
];

export default function FaqPage() {
  return (
    <div className="page-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": allFaqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          }),
        }}
      />

      <section className="hero-section" style={{ minHeight: '40vh' }}>
        <HeroSlider />
        <div className="container-main" style={{ position: 'relative', zIndex: 1, paddingTop: '6rem', paddingBottom: '3rem' }}>
          <div style={{ display: 'inline-block', padding: '0.35rem 0.85rem', background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: '8px', fontSize: '0.8rem', color: '#f97316', fontWeight: 600, marginBottom: '1rem' }}>
            ❓ 30+ Questions Answered
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '1rem' }}>
            <span className="gold-text">RS Travel — Help &amp; FAQ</span><br />
            <span style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', color: '#94a3b8', fontWeight: 600 }}>
              Cab Booking Questions Answered for Jamshedpur &amp; Jharkhand
            </span>
          </h1>
        </div>
      </section>

      <div className="container-main section-spacing">
        {[
          { title: '📞 How to Book', faqs: allFaqs.slice(0, 4) },
          { title: '💰 Pricing & Fare Details', faqs: allFaqs.slice(4, 8) },
          { title: '🚗 Vehicle & Fleet', faqs: allFaqs.slice(8, 11) },
          { title: '🛡️ Safety & Driver Verification', faqs: allFaqs.slice(11, 14) },
          { title: '❌ Cancellation & Rescheduling', faqs: allFaqs.slice(14, 16) },
          { title: '💳 Payments & Billing', faqs: allFaqs.slice(16, 18) },
          { title: '🚕 Speciality Services', faqs: allFaqs.slice(18, 21) },
          { title: '🏙️ Coverage & Cities', faqs: allFaqs.slice(21, 23) },
          { title: '📋 General Queries', faqs: allFaqs.slice(23) },
        ].map((category, ci) => (
          <div key={ci} className="content-block" style={{ marginBottom: '2.5rem' }}>
            <h2><span className="gold-text">{category.title}</span></h2>
            <div style={{ marginTop: '1rem' }}>
              <FaqSection faqs={category.faqs} />
            </div>
          </div>
        ))}

        <div className="content-block" style={{ marginTop: '3rem' }}>
          <h2>Quick Links — <span className="gold-text">RS Travel Services</span></h2>
          <div className="internal-links-grid" style={{ marginTop: '1rem' }}>
            <a href="/jamshedpur/one-way-cab" className="internal-link">🚗 One Way Cab</a>
            <a href="/jamshedpur/round-trip-cab" className="internal-link">🔄 Round Trip</a>
            <a href="/jamshedpur/outstation-cab" className="internal-link">🛣️ Outstation Cab</a>
            <a href="/jamshedpur/local-taxi" className="internal-link">🏙️ Local Taxi</a>
            <a href="/jamshedpur/airport-cab" className="internal-link">✈️ Airport Cab</a>
            <a href="/jamshedpur/wedding-cab" className="internal-link">💒 Wedding Cab</a>
            <a href="/jamshedpur/corporate-cab" className="internal-link">🏢 Corporate Cab</a>
            <a href="/fare-chart" className="internal-link">📊 Fare Chart</a>
          </div>
        </div>

        <div style={{ marginTop: '2.5rem' }}>
          <CtaBanner
            title="Question Not Answered? Call RS Travel Directly!"
            subtitle="24/7 helpline | ☎ +91 79798 77450 | WhatsApp reply in 60 seconds"
            whatsappMessage="Hi RS Travel, I have a question about your cab service"
          />
        </div>
      </div>
    </div>
  );
}
