// ============================================================
// RS Travel — JHARKHAND CITIES DATA
// All 15 cities with complete SEO metadata
// ============================================================

export interface NearbyAttraction {
  name: string;
  distanceKm: number;
  description: string;
  type: 'temple' | 'nature' | 'park' | 'dam' | 'museum' | 'hill' | 'waterfall' | 'wildlife' | 'historical' | 'lake' | 'beach' | 'other';
}

export interface CityData {
  slug: string;
  name: string;
  hindiName: string;
  aka: string[];
  district: string;
  population: string;
  pincode: string;
  latitude: number;
  longitude: number;
  airportCode: string | null;
  nearestAirport: { name: string; code: string; distance: number };
  railwayStation: string;
  additionalStations?: string[];
  tier: 1 | 2 | 3;
  localities: string[];
  localFare: {
    hatchback_4hr: number;
    sedan_4hr: number;
    suv_4hr: number;
    hatchback_8hr: number;
    sedan_8hr: number;
    suv_8hr: number;
  };
  touristPlaces: string[];
  nearbyAttractions: NearbyAttraction[];
  seoTitle: string;
  seoH1: string;
  seoDescription: string;
  longDescription: string;
  transportGuide: string;
  corporateInfo: string;
  stationInfo: string;
  hindiKeywords: string[];
  nearMeKeywords: string[];
  localKeywords: string[];
  reviews: { name: string; text: string; rating: number }[];
}

export const jharkhandCities: CityData[] = [
  {
    slug: "jamshedpur",
    name: "Jamshedpur",
    hindiName: "जमशेदपुर",
    aka: ["Tata Nagar", "Steel City", "JSR", "Tata", "Tatanagar"],
    district: "East Singhbhum",
    population: "1.3 million",
    pincode: "831001",
    latitude: 22.8046,
    longitude: 86.2029,
    airportCode: null,
    nearestAirport: { name: "Birsa Munda Airport, Ranchi", code: "IXR", distance: 130 },
    railwayStation: "Tatanagar Junction (TATA)",
    additionalStations: ["Gamharia Station", "Adityapur Halt"],
    tier: 1,
    localities: [
      "Mango", "Bistupur", "Sakchi", "Jugsalai", "Adityapur",
      "Gamharia", "Telco Colony", "Kadma", "Golmuri", "Dimna",
      "Baridih", "Sonari", "Boram", "Ulidih", "Bhuiyadih",
      "Agrico", "Sidhgora", "Sitaramdera", "Pardih", "Marine Drive",
      "Vijay Nagar", "Kalimati", "Azad Nagar", "Birsanagar", "Kasidih",
      "Bagbera", "New Baridih", "Nildih", "Govindpur", "Chandil Road"
    ],
    localFare: {
      hatchback_4hr: 999,
      sedan_4hr: 1299,
      suv_4hr: 1699,
      hatchback_8hr: 1699,
      sedan_8hr: 2199,
      suv_8hr: 2899
    },
    touristPlaces: [
      "Jubilee Park", "Dalma Wildlife Sanctuary", "Dimna Lake",
      "Tata Steel Zoo", "Jayanti Sarovar", "Bhubneshwari Temple",
      "Hudco Lake", "Russi Modi Centre", "JRD Tata Sports Complex"
    ],
    nearbyAttractions: [
      { name: "Jubilee Park", distanceKm: 2, description: "Tata Steel's green heart in Bistupur, with a musical fountain, rose garden and zoo — a favourite family hangout.", type: "park" },
      { name: "Dalma Wildlife Sanctuary", distanceKm: 13, description: "Wild elephants, deer and sloth bears roam these Dalma Hills, which offer sweeping views of Jamshedpur; visit between October and March.", type: "wildlife" },
      { name: "Dimna Lake", distanceKm: 12, description: "A calm hill-ringed reservoir where boating, picnics and birdwatching are the draws — an easy escape from the city bustle.", type: "lake" },
      { name: "Tata Steel Zoological Park", distanceKm: 4, description: "Inside the Jubilee Park complex, this well-kept zoo houses lions, tigers, leopards and exotic birds — among Jharkhand's finest.", type: "park" },
      { name: "Bhubneshwari Temple", distanceKm: 5, description: "A centuries-old shrine to Goddess Bhubneshwari perched on a hill, with panoramic views of the Subarnarekha river and the city skyline.", type: "temple" },
      { name: "Chandil Dam", distanceKm: 35, description: "A big Subarnarekha river dam and favourite weekend drive from Jamshedpur, offering boating and pleasant surroundings.", type: "dam" },
      { name: "Ghatsila", distanceKm: 45, description: "A quaint copper town with Phuldungri Hill, Burudi Lake and the Galudihi Barrage — a lovely day-trip from Jamshedpur.", type: "nature" },
      { name: "Ranchi Hills", distanceKm: 130, description: "Jharkhand's capital, ringed by waterfalls and hills; a Jamshedpur to Ranchi cab lets you cover Hundru Falls and Rock Garden in a day.", type: "waterfall" }
    ],
    seoTitle: "Jamshedpur Cab Service 2026 | Tatanagar Taxi +917979877450",
    seoH1: "Cab Service in Jamshedpur, Tata & Tatanagar — Book Online 2026",
    seoDescription: "Book a cab in Jamshedpur (Tata) 2026 — local taxi from ₹999, outstation to Ranchi ₹1,799 & Kolkata ₹3,999. AC cars 24/7, fixed fares. Call +917979877450.",
    longDescription: "Most people in Jharkhand simply call it 'Tata' — though on paper it is Jamshedpur or Tatanagar — and they are right to regard it as the state's industrial heartbeat. Founded between 1907 and 1919 under the vision of Jamsetji Nusserwanji Tata, this steel capital of India grew up around Tata Steel's enormous integrated plant and is counted among the subcontinent's most thoughtfully planned cities. Nestled where the Subarnarekha and Kharkai rivers meet, in East Singhbhum district, Jamshedpur houses close to 1.3 million residents and drives much of Jharkhand's commercial momentum.\n\nRS Travel runs its operations out of Sonari, right in the middle of the city, and has earned the trust of locals, business travellers and tourists since 2018. With a fleet of 50+ air-conditioned cars, we reach every corner of the city — from the busy markets of Bistupur and the Mango township to the Adityapur Industrial Area, Gamharia, Golmuri, Kadma, Telco Colony and Sonari itself. Where app-based cab firms quietly inflate prices at rush hour, RS Travel holds to one simple promise: the fare we quote is the fare you pay.\n\nOur most popular outstation runs from Jamshedpur are the Tata to Ranchi route (130 km, roughly 3 hrs, from ₹1,799), Jamshedpur to Kolkata (260 km, about 5-6 hrs, from ₹3,999) and Jamshedpur to Dhanbad (80 km, nearly 2 hrs, from ₹1,799). Every outstation price already includes tolls, fuel and driver allowance, so nothing is added later. Inside the city, local taxi packages begin at ₹999 for 4 hours and 40 km.\n\nJamshedpur is also a campus town of sorts: XLRI ranks among India's premier business schools, NIT Jamshedpur draws engineering students from across the country, and companies such as Tata Motors, Tata Cummins and the Adityapur Industrial Area — one of Asia's largest industrial estates — keep the city buzzing. RS Travel ferries executives, students and plant workers every day, and our corporate cab packages are a steady favourite with firms that need dependable staff transport.\n\nFor visitors, Jubilee Park's musical fountain, the wild elephants of Dalma Wildlife Sanctuary, the calm waters of Dimna Lake, the well-kept Tata Steel Zoological Park and the hilltop Bhubneshwari Temple overlooking the Subarnarekha are all easy to cover by car. Weekend excursions to Chandil Dam (35 km), Ghatsila (45 km) and the waterfalls around Ranchi are equally effortless.\n\nRS Travel maintains round-the-clock pickup at Tatanagar Junction (TATA). Whether your train arrives before dawn or after midnight, our drivers are already waiting at the station. Book your Jamshedpur cab on WhatsApp at +91 79798 77450 — no app to download, and confirmation arrives instantly.",
    transportGuide: "Jamshedpur (Tata/Tatanagar) is linked to the rest of India by road, rail and air, and getting in or out is rarely a problem.\n\n🚂 BY TRAIN: Tatanagar Junction (Station Code: TATA) is the city's principal station, handling 100+ trains a day with connections to Kolkata (4-5 hrs), Ranchi (3-4 hrs), Delhi (18 hrs), Mumbai (24 hrs), Chennai (30 hrs) and Patna (8 hrs). Rajdhani Express, Jan Shatabdi and the Steel Express are among the notable services. Drivers from RS Travel are stationed at the junction around the clock — call +917979877450 and a car will be waiting.\n\n✈️ BY AIR: Birsa Munda Airport, Ranchi (IXR), about 130 km away (~3 hours), is the nearest major airport; a Jamshedpur to Ranchi Airport cab starts at ₹1,499. Sonari Airport (IXW) inside Jamshedpur sees only limited traffic, while Kolkata Airport (CCU) lies 260 km away.\n\n🚌 BY BUS: JBVNL and several private operators run services from Jamshedpur to Ranchi, Dhanbad, Kolkata and Patna, with stands at Mango More and Sakchi. Still, a cab beats the bus on speed, comfort and door-to-door convenience.\n\n🚗 BY CAB: Driving remains the quickest, most comfortable option. From Ranchi: 130 km via NH-33 (3 hrs, ₹1,499). From Kolkata: 260 km via NH-49 (5 hrs, ₹3,999). From Dhanbad: 80 km via NH-32 (2 hrs, ₹1,999). RS Travel books one-way, round trip and airport transfers on all these routes, round the clock.",
    corporateInfo: "Jamshedpur is India's leading industrial city, home to corporate headquarters and sprawling manufacturing units. RS Travel runs a dedicated corporate cab service for every major name:\n\n🏭 MAJOR COMPANIES: Tata Steel (HQ), Tata Motors (Telco), Tata Cummins Ltd, Tinplate Company of India, Tata Steel Long Products, TRF Limited, Tata Metaliks, NML (National Metallurgical Lab), JUSCO (Jamshedpur Utilities & Services Company)\n\n🎓 EDUCATIONAL INSTITUTIONS: XLRI Jamshedpur (India's #2 B-School), NIT Jamshedpur, IIM Ranchi Jamshedpur Campus, Loyola School, DBMS English School, JRS Degree College\n\n🏗️ INDUSTRIAL AREAS: Adityapur Industrial Area (Phase 1 & 2), Gamharia Industrial Estate, Kandra Industrial Area, TATA Industrial Complex\n\nWhat we offer: monthly corporate cab packages from ₹15,999 | GST billing | dedicated driver allotment | centralized billing portal | airport transfer for visiting clients | employee shuttle service. Contact: +917979877450",
    stationInfo: "📍 TATANAGAR JUNCTION (TATA): Jharkhand's busiest railway station. RS Travel keeps drivers on hand 24/7 at Gate 1 (Main Exit), Gate 2 (Platform 1 Side) and the Parking Area, with an average wait of under 5 minutes. We run cabs to every part of the city — Bistupur (2 km), Mango (3 km), Sakchi (1.5 km), Adityapur (8 km), Telco (5 km), Dimna (10 km) — and handle outstation pickups from Tatanagar to Ranchi, Kolkata, Dhanbad and cities across Jharkhand.\n\n📍 GAMHARIA STATION: Near the Adityapur Industrial Area. Cab pickup available — a convenient option for workers and executives in the industrial belt.\n\n📍 SONARI AIRPORT (IXW): A small airstrip handling limited commercial flights. Airport transfer service is available; the airport sits 8 km from Bistupur.\n\n📍 BUS STANDS: Mango Bus Stand and Sakchi Bus Stand. Cab pickup is available from both.",
    hindiKeywords: [
      "जमशेदपुर कैब सर्विस", "टाटा कैब सर्विस", "टाटानगर टैक्सी", "जमशेदपुर टैक्सी",
      "टाटा से रांची कैब", "जमशेदपुर से रांची टैक्सी", "जमशेदपुर से कोलकाता कैब",
      "टाटानगर स्टेशन कैब", "जमशेदपुर कार रेंटल", "टाटा में कैब बुकिंग",
      "जमशेदपुर में सबसे अच्छी कैब", "टाटा गाड़ी भाड़ा", "जमशेदपुर से धनबाद गाड़ी"
    ],
    nearMeKeywords: [
      "cab near me jamshedpur", "taxi near me tata", "cab service near tatanagar station",
      "car rental near me jamshedpur", "taxi near bistupur", "cab near sakchi",
      "best cab near me tata nagar", "24 hour cab near me jamshedpur",
      "cheapest cab near me in tata", "cab service near me jharkhand"
    ],
    localKeywords: [
      "jamshedpur to ranchi cab fare 2026", "tata to ranchi taxi", "tatanagar to kolkata cab",
      "jamshedpur cab booking online", "tata cab booking whatsapp", "jamshedpur airport cab",
      "tatanagar station taxi stand", "adityapur cab service", "mango jamshedpur taxi",
      "bistupur cab booking", "jamshedpur outstation cab rate", "tata to dhanbad cab fare",
      "jamshedpur to puri cab", "jamshedpur to bokaro taxi", "cab service gamharia",
      "tata to deoghar cab", "jamshedpur to patna cab", "xlri jamshedpur cab",
      "nit jamshedpur taxi", "tata steel plant cab service"
    ],
    reviews: [
      { name: "Sanjay Verma", text: "RS Travel ka base Sonari mein hai, isi liye bharosa raha. Driver local tha aur Tatanagar station se Mango tak 15 minute mein pahuncha diya. Zabardast service!", rating: 5 },
      { name: "Meenakshi Jha", text: "I booked a Jamshedpur to Ranchi cab for an early flight. The driver showed up at Sonari right at 4 AM — flawless and professional. I won't book with anyone else now.", rating: 5 },
      { name: "Ritesh Poddar", text: "Took an Innova Crysta from Bistupur to Ranchi for a family trip. Impeccably clean, AC perfect, driver skilled — and the final bill matched the WhatsApp quote exactly. Brilliant!", rating: 5 },
      { name: "CA Deepak Agrawal", text: "Being an accountant, clear billing matters to me. RS Travel shares the fare in writing upfront — toll and driver allowance included — so there is no surprise at the end. They also handle corporate billing.", rating: 5 },
      { name: "Savita Singh", text: "सोनारी से ही RS Travel बुक किया था। ड्राइवर ठीक समय पर पहुंचे और गाड़ी बिल्कुल साफ थी। टाटा से धनबाद का किराया भी काफी उचित लगा। पूरा परिवार आराम से सफर कर पाया।", rating: 5 },
      { name: "Pradeep Mahto", text: "For the past year I've been commuting between Jamshedpur and Kolkata weekly for work, and RS Travel hasn't slipped once — same driver, same punctuality, same fare. The best outstation service in Tata.", rating: 5 },
      { name: "Kamla Devi", text: "Deoghar yatra ke liye hamne 14 logon ke saath Tempo Traveller rakha. RS Travel ne pickup Sonari se lekar wapas Tata drop tak sab sambhal liya. Hum sab bilkul khush hain. Dhanyavaad!", rating: 5 },
      { name: "Rahul Choudhary (NIT Jamshedpur)", text: "RS Travel picked me up from NIT Jamshedpur at 2 AM — the driver actually arrived before I did! Exactly the punctuality you hope for. Spotless Dzire, ice-cold AC. Five stars.", rating: 5 }
    ]
  },
  {
    slug: "ranchi",
    name: "Ranchi",
    hindiName: "रांची",
    aka: ["City of Waterfalls", "Capital City", "Jharkhand Capital", "RNC"],
    district: "Ranchi",
    population: "1.1 million",
    pincode: "834001",
    latitude: 23.3441,
    longitude: 85.3096,
    airportCode: "IXR",
    nearestAirport: { name: "Birsa Munda Airport", code: "IXR", distance: 7 },
    railwayStation: "Ranchi Junction (RNC)",
    additionalStations: ["Hatia Junction (HTE)", "Namkum Station"],
    tier: 1,
    localities: [
      "Doranda", "Kanke", "Lalpur", "Harmu", "Dhurwa",
      "Morabadi", "Bariatu", "Hinoo", "Kokar", "Ratu Road",
      "Booty More", "Argora", "Namkum", "Hatia", "Ashok Nagar",
      "Chutia", "Upper Bazar", "Main Road", "Piska More", "Mesra",
      "Sukhdeonagar", "Kadru", "Pundag", "Kutchery Chowk", "Circular Road",
      "Kantatoli", "Albert Ekka Chowk", "Birsa Chowk", "Khelgaon", "Ormanjhi"
    ],
    localFare: {
      hatchback_4hr: 999,
      sedan_4hr: 1299,
      suv_4hr: 1699,
      hatchback_8hr: 1699,
      sedan_8hr: 2199,
      suv_8hr: 2899
    },
    touristPlaces: [
      "Hundru Falls", "Dassam Falls", "Rock Garden", "Kanke Dam",
      "Tagore Hill", "Pahari Mandir", "Ranchi Lake", "Jonha Falls",
      "Birsa Munda Museum", "Sun Temple Bundu", "Panchghagh Falls"
    ],
    nearbyAttractions: [
      { name: "Hundru Falls", distanceKm: 45, description: "The state's best-known waterfall — a 98m Subarnarekha river cascade and a Ranchi must-see; RS Travel can arrange your day trip.", type: "waterfall" },
      { name: "Dassam Falls", distanceKm: 40, description: "A lovely 44m Kanchi river waterfall near Bundu, ideal for picnics from July to November.", type: "waterfall" },
      { name: "Jonha Falls (Gautamdhara)", distanceKm: 40, description: "A 140-foot cascade with a Buddhist monastery below it, reached by a scenic 700-plus-step climb — a rewarding day trip.", type: "waterfall" },
      { name: "Rock Garden", distanceKm: 4, description: "An unusual park built from industrial waste on Kanke Dam, with sculptures, waterfalls and an amphitheatre — a favourite with families.", type: "park" },
      { name: "Pahari Mandir", distanceKm: 3, description: "A Shiva temple on a hill, climbed via 468 steps; from the summit you can see all of Ranchi spread below — go at sunrise.", type: "temple" },
      { name: "Tagore Hill", distanceKm: 5, description: "The green hilltop where Tagore's elder brother once lived is now a quiet heritage park with fine views.", type: "hill" },
      { name: "Ranchi Lake (Bada Talab)", distanceKm: 2, description: "The lake at the centre of the city is a classic Ranchi landmark — good for evening strolls, boating and street food.", type: "lake" },
      { name: "Kanke Dam", distanceKm: 7, description: "A forest-fringed reservoir beside the Rock Garden and the old Mental Hospital campus, prized for its sunsets.", type: "dam" },
      { name: "Birsa Munda Museum", distanceKm: 3, description: "Housed in the old Ranchi Jail, this museum honours tribal hero Birsa Munda — a key cultural and historical stop.", type: "museum" },
      { name: "Patratu Valley", distanceKm: 40, description: "A breathtaking ghat-road drive past a vast reservoir — among the state's loveliest routes; book a Ranchi to Patratu cab.", type: "nature" },
      { name: "Netarhat", distanceKm: 160, description: "Crowned the 'Queen of Chotanagpur', this hill station sits at 3,700 ft and is famed for its sunrises; weekend trips by cab are easy.", type: "hill" },
      { name: "Betla National Park", distanceKm: 170, description: "A Palamu tiger reserve sheltering elephants, tigers and bison — book a Ranchi to Betla safari cab to explore it.", type: "wildlife" }
    ],
    seoTitle: "Ranchi Cab 2026 | Car Rental & Airport Taxi +917979877450",
    seoH1: "Cab Service in Ranchi, Jharkhand's Capital — Book Online 2026",
    seoDescription: "AC cab in Ranchi 2026 — Birsa Munda Airport taxi ₹499, Ranchi to Jamshedpur ₹1,799, local taxi ₹999. Fixed fares 24/7. Call +917979877450.",
    longDescription: "Ranchi wears two crowns — it is Jharkhand's capital and its 'City of Waterfalls', a nickname earned by delights such as Hundru Falls (98m), Dassam Falls and the graceful Jonha Falls. Perched on the Chota Nagpur Plateau at 651 metres above sea level, the city enjoys weather noticeably cooler than the rest of Jharkhand and has grown into a hub for government, education, healthcare and technology.\n\nRS Travel reaches the Ranchi market through our base in Jamshedpur (Sonari) and through trusted partner drivers based in Ranchi. Our air-conditioned cabs cover the whole city — Doranda, Lalpur, Harmu, Dhurwa, Morabadi, Bariatu, Kanke, Kokar, Ratu Road, Mesra, Kadru, Pundag and everything in between — on a simple formula of fixed fares, verified drivers and zero last-minute shocks.\n\nTravellers flying into Birsa Munda Airport (IXR) get dedicated airport cab service with live flight tracking; if your plane is late, the driver simply waits, at no extra charge. Airport to city starts from ₹499 (Hatchback), while a Ranchi to Jamshedpur airport cab is available from ₹1,799. Ranchi Junction (RNC) and Hatia Junction (HTE) are also served around the clock for station pickups and drops.\n\nAs the seat of the Jharkhand government, Ranchi hosts the Jharkhand High Court, State Secretariat, Raj Bhavan and Jharkhand Vidhan Sabha. That means steady demand from lawyers, bureaucrats and officials — demand RS Travel answers with punctuality and discretion. Our corporate cab packages are also a regular choice for RIMS, BIT Mesra, Medica Hospital and Coal India subsidiaries in Ranchi.\n\nDay trips from Ranchi cover Hundru Falls (45 km), Dassam Falls (40 km), Jonha Falls (40 km), Rock Garden (4 km) and the serene Patratu Valley (40 km). For longer getaways we arrange Ranchi to Netarhat cabs and Ranchi to Betla National Park cabs at reasonable rates.\n\nBook your Ranchi cab with RS Travel on WhatsApp (+91 79798 77450) — instant response, no app needed, transparent pricing, and driver details shared within minutes.",
    transportGuide: "Ranchi, the capital of Jharkhand, is well served by air, rail and road.\n\n✈️ BY AIR: Birsa Munda Airport (IXR), Ranchi's international airport, is just 7 km from the city centre, with daily flights to Delhi, Mumbai, Kolkata, Bengaluru, Patna, Hyderabad and Chennai on Air India, IndiGo, SpiceJet and Vistara. RS Travel runs airport cabs 24/7 — city drop from ₹499, pickup within 10 minutes of your call. Jamshedpur/Tata to Ranchi Airport: ₹1,499.\n\n🚂 BY TRAIN: Ranchi Junction (RNC) is the main station, with services including the Rajdhani Express to Delhi, the Hatia Express to Kolkata, the LTT Express to Mumbai, plus trains to Patna and Jamshedpur. Hatia Junction (HTE), the second major station, originates several long-distance trains. RS Travel keeps drivers at both stations 24/7, so a cab is usually available within 5 minutes of exiting the platform.\n\n🚌 BY BUS: Birsa Munda Bus Terminal (Kanta Toli) connects Ranchi with Jamshedpur, Dhanbad, Bokaro, Hazaribagh and Patna, run by state transport (JBVNL) and private Volvo operators. A cab, however, remains faster, more comfortable and door-to-door.\n\n🚗 BY CAB: Good highways link Ranchi everywhere. From Jamshedpur/Tata: 130 km via NH-33 (3 hrs, ₹2,499). From Dhanbad: 160 km (3.5 hrs, ₹2,899). From Bokaro: 100 km (2.5 hrs, ₹2,199). From Patna: 330 km (6 hrs, ₹5,299). From Kolkata: 390 km (7 hrs, ₹5,999). One-way and round-trip bookings are available on all routes.",
    corporateInfo: "As the state capital, Ranchi is a serious hub for government, corporate and educational travel. RS Travel provides specialised cab services to:\n\n🏛️ GOVERNMENT OFFICES: Jharkhand High Court, Raj Bhavan, State Secretariat (Project Building), Jharkhand Vidhan Sabha, Doranda Complex, DGP Headquarters, Income Tax Office, GST Bhawan. Advocates, bureaucrats and government employees travel with us every day.\n\n🏥 MEDICAL INSTITUTIONS: RIMS (Rajendra Institute of Medical Sciences), Medica Superspeciality Hospital, Orchid Medical Centre, Raj Hospital, Sadar Hospital, TMH Jamshedpur referral transfers\n\n🎓 EDUCATIONAL INSTITUTIONS: BIT Mesra (Birla Institute of Technology), Ranchi University, NUSRL (National Law University), XISS (Xavier Institute), Central University of Jharkhand, Amity University Jharkhand, St. Xavier's College\n\n🏢 CORPORATE: MECON Limited (HQ), HEC (Heavy Engineering Corporation), CCL (Central Coalfields Ltd), Vedanta Electrosteel, CMPDI (Central Mine Planning), Coal India subsidiaries\n\nMonthly corporate packages starting ₹15,999 | GST billing | airport transfer for dignitaries | court hearing cab service | hospital emergency transport. Contact: +917979877450",
    stationInfo: "📍 RANCHI JUNCTION (RNC): The main station, linking Ranchi with Delhi, Mumbai, Kolkata and all major cities. RS Travel drivers are stationed 24/7 at the main exit, the auto stand area and the VIP lounge exit, with average pickup under 5 minutes. Services to Doranda (3 km), Lalpur (2 km), Airport (6 km), Morabadi (2 km), Bariatu (4 km).\n\n📍 HATIA JUNCTION (HTE): The second major station and origin of many long-distance trains. Cab pickup available 24/7 from the main exit, covering Namkum, Dhurwa, Mesra and south Ranchi.\n\n📍 BIRSA MUNDA AIRPORT (IXR): International airport 7 km from the city centre, serving IndiGo, Air India, SpiceJet and Vistara. Cabs wait at the arrival gate — no pre-booking needed, though advance booking is advised for outstation trips. Airport to city: ₹499 (Hatchback), ₹599 (Sedan).\n\n📍 BIRSA MUNDA BUS TERMINAL (KANTA TOLI): The main inter-city bus stand. Cab pickup available here, and it also serves as a pickup point for local taxi bookings.",
    hindiKeywords: [
      "रांची कैब सर्विस", "रांची टैक्सी", "रांची एयरपोर्ट कैब", "रांची कार रेंटल",
      "रांची से जमशेदपुर कैब", "रांची से टाटा टैक्सी", "रांची से पटना कैब",
      "रांची से कोलकाता टैक्सी", "बिरसा मुंडा एयरपोर्ट टैक्सी",
      "रांची में कैब बुकिंग", "रांची में सबसे अच्छी टैक्सी", "रांची लोकल टैक्सी",
      "हटिया स्टेशन कैब", "रांची जंक्शन टैक्सी", "रांची से धनबाद कैब"
    ],
    nearMeKeywords: [
      "cab near me ranchi", "taxi near me ranchi", "cab service near ranchi airport",
      "car rental near me ranchi", "taxi near ranchi junction", "cab near hatia station",
      "best cab near me ranchi", "24 hour cab near me ranchi",
      "cheapest cab near me ranchi", "airport taxi near me ranchi"
    ],
    localKeywords: [
      "ranchi to jamshedpur cab fare 2026", "ranchi to tata taxi", "ranchi airport cab booking",
      "birsa munda airport taxi", "ranchi cab booking online", "ranchi to patna cab",
      "ranchi to kolkata cab", "ranchi to dhanbad cab", "ranchi to bokaro taxi",
      "ranchi local taxi rate", "ranchi sightseeing cab", "hundru falls cab from ranchi",
      "ranchi to netarhat cab", "ranchi to deoghar cab", "hatia station cab service",
      "ranchi junction pickup cab", "ranchi to patratu valley taxi", "best cab service ranchi 2026",
      "ranchi corporate cab", "ranchi government office taxi"
    ],
    reviews: [
      { name: "Sanjay Verma", text: "Great car rental in Ranchi — I take their Ranchi to Tata cab every week. Always on time and cheaper than the rest.", rating: 5 },
      { name: "Neha Gupta", text: "Chose the Innova Crysta for my Ranchi to Jamshedpur (Tatanagar) run. Smooth, comfortable and the driver was courteous — easily the best cab service in Ranchi.", rating: 5 },
      { name: "Vikram Jha", text: "Excellent airport transfers and online outstation taxi booking in Ranchi. They've never been late for my early-morning flights.", rating: 5 },
      { name: "Advocate Suresh Pandey", text: "My daily commute is from Ranchi Junction to the High Court complex, and RS Travel's monthly package fits it perfectly — one steady driver, punctual every day, and easy on the pocket.", rating: 5 },
      { name: "Meera Kumari", text: "रांची एयरपोर्ट से टाटा (जमशेदपुर) जाने के लिए कैब बुक की थी। गाड़ी बिल्कुल नई थी और AC भी पूरी तरह चालू। किराया भी दूसरों से कम पड़ा। सर्विस से पूरी तरह संतुष्ट हूँ!", rating: 5 },
      { name: "Prof. R.K. Singh (BIT Mesra)", text: "For BIT Mesra to Airport transfers we only use RS Travel now. They work around academic calendars and never fuss about early departures. Very dependable.", rating: 5 },
      { name: "Amitabh Roy", text: "My sightseeing cab covered Hundru Falls, Rock Garden and Pahari Mandir, and the driver doubled as a great guide. A full day for ₹2,199 is fair money — best sightseeing cab in Ranchi.", rating: 5 },
      { name: "Dr. Priya Sinha (RIMS)", text: "I refer every patient travelling to RIMS Ranchi from Jamshedpur, Dhanbad or Bokaro to RS Travel — clean vehicles, vetted drivers, ideal for medical journeys.", rating: 5 }
    ]
  },
  {
    slug: "dhanbad",
    hindiName: "धनबाद",
    name: "Dhanbad",
    aka: ["Coal Capital of India", "Black Diamond City"],
    district: "Dhanbad",
    population: "1.2 million",
    pincode: "826001",
    latitude: 23.7957,
    longitude: 86.4304,
    airportCode: null,
    nearestAirport: { name: "Ranchi Airport", code: "IXR", distance: 160 },
    railwayStation: "Dhanbad Junction",
    tier: 1,
    localities: [
      "Jharia", "Sindri", "Katras", "Phusro", "Topchanchi",
      "Govindpur", "Hirapur", "Saraidhela", "Kenduadih", "Bank More",
      "Dhansar", "Bhaga", "Wasseypur", "Joraphatak", "Putki",
      "Baliapur", "Tundi", "Nirsa", "Bhuli", "City Centre"
    ],
    localFare: {
      hatchback_4hr: 899,
      sedan_4hr: 1199,
      suv_4hr: 1599,
      hatchback_8hr: 1599,
      sedan_8hr: 2099,
      suv_8hr: 2799
    },
    touristPlaces: [
      "Maithon Dam", "Panchet Dam", "Topchanchi Lake",
      "Shakti Mandir", "Indian School of Mines", "Bhatinda Falls"
    ],
    nearbyAttractions: [
      { name: "Maithon Dam", distanceKm: 48, description: "A big Barakar river dam with boating and a deer park — a favourite Dhanbad weekend escape, lovely at sunset.", type: "dam" },
      { name: "Panchet Dam", distanceKm: 55, description: "A picture-postcard DVC reservoir ringed by hills and woodland, made for picnics, photography and nature walks.", type: "dam" },
      { name: "Topchanchi Lake", distanceKm: 32, description: "A peaceful, forest-girdled lake where birdwatchers and nature lovers come to unwind away from Dhanbad.", type: "lake" },
      { name: "IIT ISM Dhanbad Campus", distanceKm: 3, description: "India's top mining and engineering institute (erstwhile ISM), whose sprawling green campus welcomes visitors.", type: "other" },
      { name: "Bhatinda Falls", distanceKm: 35, description: "A scenic falls near Topchanchi that comes alive in the July–September monsoon — a refreshing day out.", type: "waterfall" }
    ],
    seoTitle: "Dhanbad Cab Service 2026 | Coal Capital Taxi +917979877450",
    seoH1: "Cab Service in Dhanbad, Coal Capital of India — Book Online 2026",
    seoDescription: "Cab service in Dhanbad 2026 — local taxi ₹899, outstation to Kolkata ₹4,499 & Ranchi ₹2,899. IIT (ISM) pickup, GT Road routes. Call +917979877450.",
    longDescription: "Dhanbad wears the title 'Coal Capital of India' with good reason. Home to about 1.2 million people, it stands astride the Grand Trunk Road (NH-19) at the centre of the Jharia coalfields, which hold Asia's single largest reserve of coking coal. The city's fortunes are tied to the black diamond itself, with major public-sector firms such as Bharat Coking Coal Limited (BCCL) and Eastern Coalfields Ltd (ECL) based here.\n\nRS Travel runs a dependable cab service in Dhanbad across Bank More, Hirapur, Jharia, Sindri, Govindpur and the always-busy Wasseypur area. Our drivers know every by-lane and shortcut in town, which is exactly what you want when speed and punctuality matter. The IIT (ISM) Dhanbad campus — one of India's most respected engineering institutions — is likewise served for faculty, staff and student bookings.\n\nSitting on the GT Road, Dhanbad is a natural staging point for inter-city travel. RS Travel connects it to Jamshedpur (80 km via NH-32, about 2 hours), Ranchi (160 km, roughly 3.5 hours), Kolkata (270 km via NH-19, around 5 hours) and Bokaro (50 km, 1.5 hours). All fares are fixed and all-inclusive — toll, fuel and driver allowance are built in, with no haggling required.\n\nFor a break from the industrial grind, Maithon Dam (48 km) and Topchanchi Lake (32 km) are popular escapes, and RS Travel offers affordable day-trip packages to both.\n\nBook your Dhanbad cab on WhatsApp at +91 79798 77450. Immediate response, air-conditioned cars and police-verified drivers.",
    transportGuide: "🚂 BY TRAIN: Dhanbad Junction is one of eastern India's busiest rail junctions, with services to Kolkata (4 hrs by Rajdhani), Delhi (12 hrs), Mumbai (20 hrs), Ranchi (3 hrs) and Jamshedpur (1.5 hrs). RS Travel offers 24/7 cab pickup from the Dhanbad Junction main exit.\n\n✈️ BY AIR: The nearest airport is Birsa Munda Airport, Ranchi (IXR), 160 km away (~3.5 hrs). Book a Dhanbad to Ranchi Airport cab from ₹2,899 with RS Travel.\n\n🚗 BY CAB: Dhanbad is well connected via NH-19 (GT Road). From Jamshedpur: 80 km (2 hrs, ₹1,999). From Bokaro: 50 km (1.5 hrs, ₹1,499). From Ranchi: 160 km (3.5 hrs, ₹2,899). From Kolkata: 270 km (5 hrs, ₹4,499). RS Travel serves every one of these routes.",
    corporateInfo: "Dhanbad’s economy runs on coal mining and heavy engineering. RS Travel provides corporate cab services to:\n\n⛏️ MINING COMPANIES: BCCL (Bharat Coking Coal Ltd), ECL (Eastern Coalfields), CMPDI, CMPDIL\n🏛️ INSTITUTIONS: IIT (ISM) Dhanbad, BIT Sindri, Rajendra Institute, DAV Schools\n🏢 CORPORATE: IISCO, Damodar Valley Corporation (DVC), numerous coal washeries and coke plants\n\nMonthly corporate packages from ₹14,999 | GST billing | employee shuttle service. Contact: +917979877450",
    stationInfo: "📍 DHANBAD JUNCTION: One of the busiest junctions in Eastern India. Cab pickup is available 24/7 from the main exit, the auto stand and the Platform 1 exit, covering Bank More (2 km), Hirapur (3 km), IIT ISM (4 km) and Jharia (10 km).\n\n📍 GOMOH JUNCTION: 25 km from Dhanbad city. Cab available for pickup. The station is historically significant — it is where Netaji Subhas Chandra Bose slipped past British surveillance.",
    hindiKeywords: [
      "धनबाद कैब सर्विस", "धनबाद टैक्सी", "धनबाद से कोलकाता कैब", "धनबाद से रांची कैब",
      "धनबाद से जमशेदपुर टैक्सी", "धनबाद कार रेंटल", "धनबाद में कैब बुकिंग",
      "झरिया कैब सर्विस", "बैंक मोर टैक्सी"
    ],
    nearMeKeywords: [
      "cab near me dhanbad", "taxi near me dhanbad", "cab service near dhanbad junction",
      "car rental near me dhanbad", "taxi near bank more dhanbad", "cab near iit ism dhanbad",
      "cheapest cab near me dhanbad", "24 hour cab near me dhanbad"
    ],
    localKeywords: [
      "dhanbad to kolkata cab fare 2026", "dhanbad to ranchi cab", "dhanbad to jamshedpur taxi",
      "dhanbad cab booking online", "dhanbad outstation cab", "dhanbad airport cab",
      "dhanbad to bokaro cab", "dhanbad to patna cab", "dhanbad to deoghar cab",
      "dhanbad local taxi rate", "jharia cab service", "sindri cab booking",
      "iit ism dhanbad cab", "bccl dhanbad taxi", "best cab service dhanbad 2026",
      "dhanbad corporate cab", "dhanbad wedding car", "dhanbad station cab"
    ],
    reviews: [
      { name: "Ravi Prasad", text: "Work keeps me shuttling between Dhanbad and Bokaro, and RS Travel is the one I always call. Never lets me down.", rating: 5 },
      { name: "Pooja Devi", text: "Took a Swift Dzire from Dhanbad to Kolkata — comfortable, reasonably priced, and the driver clearly knew his job.", rating: 5 },
      { name: "Manish Tiwari", text: "The finest taxi service in Dhanbad for getting around town — tidy cars, courteous drivers, honest rates.", rating: 5 }
    ]
  },
  {
    slug: "bokaro",
    hindiName: "बोकारो",
    name: "Bokaro Steel City",
    aka: ["Steel City", "Bokaro"],
    district: "Bokaro",
    population: "0.6 million",
    pincode: "827001",
    latitude: 23.6693,
    longitude: 86.1511,
    airportCode: null,
    nearestAirport: { name: "Ranchi Airport", code: "IXR", distance: 100 },
    railwayStation: "Bokaro Steel City Station",
    tier: 1,
    localities: [
      "Sector 1", "Sector 4", "Sector 9", "Sector 12", "Chas",
      "City Centre", "Naya More", "Balidih", "Kandra", "Phusro",
      "Bermo", "Tenughat", "Jai Prakash Nagar", "Marafari", "Siwandih"
    ],
    localFare: {
      hatchback_4hr: 899,
      sedan_4hr: 1199,
      suv_4hr: 1599,
      hatchback_8hr: 1599,
      sedan_8hr: 2099,
      suv_8hr: 2799
    },
    touristPlaces: [
      "Bokaro Steel Plant", "City Park", "Garga Dam", "Jawaharlal Nehru Biological Park",
      "Parasnath Hill (nearby)", "Tenughat Dam"
    ],
    nearbyAttractions: [
      { name: "Jawaharlal Nehru Biological Park", distanceKm: 5, description: "A tidy zoo-and-park complex with animals, birds and a toy train — Bokaro's favourite family outing.", type: "park" },
      { name: "Garga Dam", distanceKm: 12, description: "A greenery-surrounded dam and reservoir that Bokaro locals love for evening sunsets and picnics.", type: "dam" },
      { name: "Parasnath Hill", distanceKm: 80, description: "Jharkhand's loftiest summit (1,365m) and a sacred Jain pilgrimage spot — easily done as a day trip by cab.", type: "temple" },
      { name: "Tenughat Dam", distanceKm: 45, description: "A vast Damodar river dam ringed by scenery, popular for boating and relaxed picnics.", type: "dam" },
      { name: "City Park Bokaro", distanceKm: 2, description: "The steel city's pleasant urban park, complete with musical fountain, kids' play zone and walking tracks.", type: "park" }
    ],
    seoTitle: "Bokaro Cab Service 2026 | Steel City Taxi +917979877450",
    seoH1: "Bokaro Steel City Cab Service — Book Online 2026",
    seoDescription: "AC cab in Bokaro Steel City 2026 — local taxi ₹899, outstation to Ranchi ₹2,199 & Jamshedpur ₹2,399. SAIL & sector-wise corporate bookings. Call +917979877450.",
    longDescription: "Bokaro Steel City is Jharkhand's great planned experiment — a town raised from open fields in the 1960s to host the Bokaro Steel Plant (BSL), one of SAIL's largest integrated steel works and among the biggest in Asia. The city is laid out in neat Sectors 1 through 12, with wide, tree-shaded avenues and a level of order you rarely find in eastern India's industrial towns.\n\nRS Travel fields a dedicated fleet of air-conditioned cabs in Bokaro, covering every sector, Chas town, City Centre, Naya More, Balidih and the industrial zones around the Bokaro Steel Plant Gate. Residents regularly travel to Ranchi (100 km), Jamshedpur (120 km) and Dhanbad (50 km) for work, medical care and education, and RS Travel serves all three routes at fixed, transparent prices.\n\nThe steel plant and the SAIL township create constant demand for dependable corporate transport. RS Travel offers monthly corporate packages for SAIL employees, contractors and visiting executives, with GST billing and dedicated vehicles. Our drivers are familiar with BSL Gate timings and shift-change patterns, so early-morning and late-night pickups run smoothly.\n\nFor families and tourists, Bokaro offers the Jawaharlal Nehru Biological Park (a well-maintained zoo), Garga Dam (12 km, a favourite sunset point) and City Park, all easily covered with our local taxi packages. Parasnath Hill — Jharkhand's highest peak and a major Jain pilgrimage site — is 80 km away and comfortable for a day trip.\n\nCall or WhatsApp RS Travel at +91 79798 77450 to book your Bokaro cab — instant confirmation, no app required.",
    transportGuide: "🚂 BY TRAIN: Bokaro Steel City Station connects to Kolkata, Delhi, Ranchi, Dhanbad and Jamshedpur, with Chas Road station also serving the area. RS Travel provides 24/7 cab pickup from both stations.\n\n✈️ BY AIR: The nearest airport is Birsa Munda Airport, Ranchi (IXR), 100 km away (~2.5 hrs). Book a Bokaro to Ranchi Airport cab from ₹2,199.\n\n🚗 BY CAB: From Ranchi: 100 km (2.5 hrs, ₹2,199). From Jamshedpur: 120 km (3 hrs, ₹2,399). From Dhanbad: 50 km (1.5 hrs, ₹1,499). All routes served by RS Travel with air-conditioned cabs.",
    corporateInfo: "Bokaro’s economy is built on the steel industry. RS Travel provides corporate cab services to:\n\n🏭 STEEL COMPANIES: Bokaro Steel Plant (SAIL-BSL), Bokaro Power Supply Co. (BPSCL), numerous ancillary steel units\n🏛️ INSTITUTIONS: Bokaro General Hospital (BGH), DPS Bokaro, DAV Public School Sector-6\n🏢 INDUSTRIAL: Chas Industrial Area, Heavy Machine Building Plant\n\nMonthly corporate packages from ₹14,999 | GST billing | sector-wise employee shuttle. Contact: +917979877450",
    stationInfo: "📍 BOKARO STEEL CITY STATION: The main station serving the steel city. Cab pickup is available 24/7 from the main exit, covering City Centre (3 km), Sector 4 (2 km), Chas (5 km) and BSL Gate (1 km).\n\n📍 CHAS ROAD STATION: A secondary station serving the Chas market area. Cabs are available for pickup to all Bokaro sectors.",
    hindiKeywords: [
      "बोकारो कैब सर्विस", "बोकारो टैक्सी", "बोकारो से रांची कैब", "बोकारो से जमशेदपुर टैक्सी",
      "बोकारो कार रेंटल", "बोकारो में कैब बुकिंग", "बोकारो से धनबाद कैब"
    ],
    nearMeKeywords: [
      "cab near me bokaro", "taxi near me bokaro", "cab service near bokaro station",
      "car rental near me bokaro", "cheapest cab near me bokaro", "24 hour cab bokaro"
    ],
    localKeywords: [
      "bokaro to ranchi cab fare 2026", "bokaro to jamshedpur cab", "bokaro to dhanbad taxi",
      "bokaro cab booking online", "bokaro outstation cab", "bokaro airport cab ranchi",
      "bokaro to kolkata cab", "bokaro to patna cab", "bokaro local taxi rate",
      "chas bokaro cab service", "bokaro steel city taxi", "best cab service bokaro 2026",
      "bokaro corporate cab", "sail bokaro cab service", "bokaro sector 4 taxi"
    ],
    reviews: [
      { name: "Suresh Mahato", text: "RS Travel handles all my office travel in Bokaro. The cabs are always fresh and comfortable — I recommend them without hesitation.", rating: 5 },
      { name: "Anita Roy", text: "Chartered an Ertiga for our family's Bokaro to Ranchi journey. Effortless ride, courteous driver.", rating: 5 },
      { name: "Deepak Kumar", text: "The best cab service in Bokaro Steel City — dependable whether you're staying local or heading outstation.", rating: 5 }
    ]
  },
  {
    slug: "deoghar",
    hindiName: "देवघर",
    name: "Deoghar",
    aka: ["Baidyanath Dham", "Temple City"],
    district: "Deoghar",
    population: "0.4 million",
    pincode: "814112",
    latitude: 24.4764,
    longitude: 86.6942,
    airportCode: "DBR",
    nearestAirport: { name: "Deoghar Airport", code: "DBR", distance: 15 },
    railwayStation: "Jasidih Junction",
    tier: 2,
    localities: [
      "Tower Chowk", "Kachahri", "Satsang Ashram", "Baidyanath Dham",
      "Jasidih", "Mohanpur", "Rohini", "Tapin North", "Madhupur",
      "Nandan Pahar", "Sravani Mela Ground", "Bazar Samiti"
    ],
    localFare: {
      hatchback_4hr: 799,
      sedan_4hr: 1099,
      suv_4hr: 1499,
      hatchback_8hr: 1499,
      sedan_8hr: 1999,
      suv_8hr: 2699
    },
    touristPlaces: [
      "Baidyanath Temple", "Nandan Pahar", "Trikut Pahar",
      "Satsang Ashram", "Tapovan Hills", "Naulakha Mandir"
    ],
    nearbyAttractions: [
      { name: "Baidyanath Dham Temple", distanceKm: 0, description: "Among the twelve Jyotirlingas, this age-old Shiva temple is Jharkhand's holiest shrine, drawing millions each Sravani Mela (July-August).", type: "temple" },
      { name: "Nandan Pahar", distanceKm: 3, description: "A hill combining an amusement park, ropeway and fine viewpoints — a firm favourite with Deoghar families.", type: "hill" },
      { name: "Trikut Pahar", distanceKm: 7, description: "Three peaks and a cable car make Trikut a Deoghar essential — the ropeway ride alone is worth it.", type: "hill" },
      { name: "Satsang Ashram", distanceKm: 1, description: "A calm spiritual campus established by Sri Sri Thakur Anukulchandra, with a temple, gardens and community facilities.", type: "temple" },
      { name: "Tapovan Hills", distanceKm: 10, description: "Legend says sages meditated on these hills; today they offer sweeping panoramas of Deoghar town.", type: "nature" }
    ],
    seoTitle: "Deoghar Cab Service 2026 | Baidyanath Dham Taxi +917979877450",
    seoH1: "Cab Service in Deoghar, Baidyanath Dham Temple City — Book Online 2026",
    seoDescription: "Deoghar cab service 2026 for Baidyanath Dham darshan — local taxi ₹799, airport transfer ₹499. Temple tours & outstation trips available. Call +917979877450.",
    longDescription: "Deoghar, whose name means 'Abode of the Gods', is Jharkhand's most sacred city, crowned by the legendary Baidyanath Dham Temple — one of the twelve Jyotirlingas of Lord Shiva. Pilgrims from across India pour in throughout the year, and during the Sravani Mela of July-August the town swells into one vast festival of faith.\n\nRS Travel offers a specialised pilgrimage cab service in Deoghar, with drivers who know every temple route, parking spot and darshan timing by heart. Whether you land at the new Deoghar Airport (DBR), step off a train at Jasidih Junction, or drive in from Jamshedpur (280 km), Ranchi (330 km) or Kolkata (370 km), we make sure the journey is smooth and stress-free.\n\nBeyond the main shrine, Deoghar has much to offer: Nandan Pahar's amusement park and ropeway, the cable car up Trikut Pahar, the serene Satsang Ashram, the Tapovan Hills and Naulakha Mandir. Our local taxi packages let you cover all of them in a single day.\n\nThe new Deoghar Airport (DBR), opened in 2022, links the city to Delhi, Mumbai and Kolkata on regular flights, and RS Travel provides round-the-clock airport transfer.\n\nBook your Deoghar pilgrimage cab on WhatsApp at +91 79798 77450.",
    transportGuide: "✈️ BY AIR: Deoghar Airport (DBR), a newly inaugurated airport 15 km from the city centre, operates flights to Delhi, Mumbai and Kolkata. RS Travel provides airport cabs from ₹499.\n\n🚂 BY TRAIN: Jasidih Junction (JSM) is the nearest major railway station, 7 km from Deoghar city, with connections to Kolkata, Delhi, Patna and Ranchi. Cab pickup is available 24/7.\n\n🚗 BY CAB: From Jamshedpur: 280 km (5 hrs). From Ranchi: 330 km (6 hrs). From Kolkata: 370 km (7 hrs). From Dhanbad: 180 km (4 hrs). All routes served by RS Travel.",
    corporateInfo: "Deoghar’s economy is powered by religious tourism and a fast-growing hospitality sector. RS Travel provides:\n\n🛕 PILGRIMAGE: Baidyanath Dham darshan tours, Sravani Mela special cabs, multi-temple tour packages\n✈️ AIRPORT: Deoghar Airport (DBR) transfer — 24/7\n🏛️ INSTITUTIONS: Satsang Ashram, AIIMS Deoghar (upcoming), Sido Kanhu University\n\nSpecial pilgrimage packages available during Sravani Mela. Contact: +917979877450",
    stationInfo: "📍 JASIDIH JUNCTION (JSM): The main railway station for Deoghar, 7 km from the city centre and Baidyanath Dham. Cab pickup is available 24/7, with direct service to the temple area (₹199), Nandan Pahar and the airport.\n\n📍 DEOGHAR AIRPORT (DBR): A new airport 15 km from the city. Cabs are available from arrivals, with city drop from ₹499.",
    hindiKeywords: [
      "देवघर कैब सर्विस", "बैद्यनाथ धाम टैक्सी", "देवघर से कोलकाता कैब",
      "जसीडीह स्टेशन टैक्सी", "देवघर एयरपोर्ट कैब", "देवघर में कैब बुकिंग",
      "श्रावणी मेला देवघर कैब", "देवघर दर्शन टैक्सी"
    ],
    nearMeKeywords: [
      "cab near me deoghar", "taxi near me deoghar", "cab near baidyanath dham",
      "taxi near jasidih station", "cab near deoghar airport", "cheapest cab deoghar"
    ],
    localKeywords: [
      "deoghar cab booking", "baidyanath dham taxi", "deoghar airport cab",
      "jasidih junction cab", "deoghar to jamshedpur cab", "deoghar to kolkata cab",
      "deoghar to ranchi cab", "deoghar to dhanbad taxi", "deoghar local taxi",
      "sravani mela cab deoghar", "trikut pahar cab", "nandan pahar taxi",
      "best cab service deoghar 2026", "deoghar pilgrimage cab", "deoghar darshan taxi"
    ],
    reviews: [
      { name: "Ramesh Pandey", text: "Hired a cab for our Baidyanath Dham visit and the driver knew every temple route. Genuinely helpful folks.", rating: 5 },
      { name: "Sunita Devi", text: "Even in the madness of Sravani Mela, our cab arrived on schedule. RS Travel, thank you for the smooth service!", rating: 5 },
      { name: "Arun Mishra", text: "RS Travel took us from Deoghar to Kolkata — an easy ride in a spotless car at a sensible fare.", rating: 5 }
    ]
  },
  {
    slug: "hazaribagh",
    hindiName: "हज़ारीबाग",
    name: "Hazaribagh",
    aka: ["City of Thousand Gardens", "Lake City"],
    district: "Hazaribagh",
    population: "0.3 million",
    pincode: "825301",
    latitude: 23.9925,
    longitude: 85.3637,
    airportCode: null,
    nearestAirport: { name: "Ranchi Airport", code: "IXR", distance: 100 },
    railwayStation: "Hazaribagh Road Station",
    tier: 2,
    localities: [
      "Court Area", "Keredari", "Barhi", "Ichak", "Bishnugarh",
      "Canary Hill", "Hazaribagh Lake", "Civil Lines", "Boddom Bazar",
      "Guru Gobind Singh Nagar", "Sadak Tola", "Sadar Hospital Area"
    ],
    localFare: {
      hatchback_4hr: 799,
      sedan_4hr: 1099,
      suv_4hr: 1499,
      hatchback_8hr: 1499,
      sedan_8hr: 1999,
      suv_8hr: 2699
    },
    touristPlaces: [
      "Hazaribagh Lake", "Canary Hill", "Hazaribagh National Park",
      "Konar Dam", "Rajrappa Temple", "Isko Rock Art"
    ],
    nearbyAttractions: [
      { name: "Hazaribagh Lake", distanceKm: 1, description: "A tree-lined lake right in town, ideal for morning strolls and gentle boating.", type: "lake" },
      { name: "Canary Hill", distanceKm: 3, description: "A pretty hilltop lookout above the town, made for sunrise and sunset shots.", type: "hill" },
      { name: "Hazaribagh National Park", distanceKm: 20, description: "A protected forest sheltering sambhar deer, wild boar and leopards, with nature trails for exploring.", type: "wildlife" },
      { name: "Rajrappa Temple", distanceKm: 80, description: "The holy Chhinnamasta shrine where the Damodar and Bhairavi rivers meet — a major pilgrimage destination.", type: "temple" },
      { name: "Konar Dam", distanceKm: 50, description: "A big DVC dam with a pretty reservoir, favoured for picnics and weekend escapes from Hazaribagh.", type: "dam" }
    ],
    seoTitle: "Hazaribagh Cab Service 2026 | Lake City Taxi +917979877450",
    seoH1: "Cab Service in Hazaribagh, City of Thousand Gardens — Book Online 2026",
    seoDescription: "Hazaribagh cab service 2026 — City of Thousand Gardens. Local taxi ₹799, outstation Ranchi ₹2,199, Rajrappa & Netarhat tours. Call +917979877450.",
    longDescription: "Hazaribagh, literally the 'City of a Thousand Gardens', is one of Jharkhand's most picturesque towns. Set on the Chota Nagpur Plateau at 616 metres above sea level, it enjoys gentle weather and opens the door to some of the state's finest natural sights — Rajrappa Temple, Konar Dam and Hazaribagh National Park among them.\n\nRS Travel provides reliable cab service in Hazaribagh for residents and tourists alike. Take a local taxi for sightseeing around Canary Hill and Hazaribagh Lake, or book an outstation cab to Ranchi (100 km, ₹2,199), Bokaro (90 km) or Dhanbad (120 km).\n\nHazaribagh is also a serious educational and administrative centre, home to Vinoba Bhave University, St. Columba's College and the District Collectorate. Sitting on NH-33, the town serves as a natural halt for travellers moving between Ranchi and Patna.\n\nBook your Hazaribagh cab on WhatsApp at +91 79798 77450.",
    transportGuide: "🚂 BY TRAIN: Hazaribagh Road Station is the nearest railhead, 67 km from town, on the Grand Chord route connecting to Kolkata and Delhi. Cab pickup is available.\n\n🚗 BY CAB: From Ranchi: 100 km (2.5 hrs, ₹2,199). From Bokaro: 90 km (2 hrs). From Dhanbad: 120 km (3 hrs). All routes by RS Travel.",
    corporateInfo: "Hazaribagh functions as an educational and administrative hub. RS Travel provides cab services to:\n\n🏛️ INSTITUTIONS: Vinoba Bhave University, St. Columba’s College, DAV Hazaribagh\n🏢 GOVERNMENT: District Collectorate, Civil Court, Sadar Hospital\n\nContact: +917979877450",
    stationInfo: "📍 HAZARIBAGH ROAD STATION: The nearest railhead, 67 km from town on the Grand Chord route. Cabs are available for pickup to Hazaribagh town.\n\n📍 HAZARIBAGH BUS STAND: The main bus stand in the town centre. Cabs are available for local and outstation trips.",
    hindiKeywords: [
      "हज़ारीबाग कैब सर्विस", "हज़ारीबाग टैक्सी", "हज़ारीबाग से रांची कैब",
      "हज़ारीबाग कार रेंटल", "राजरप्पा मंदिर कैब"
    ],
    nearMeKeywords: [
      "cab near me hazaribagh", "taxi near me hazaribagh", "car rental near me hazaribagh",
      "cheapest cab hazaribagh", "24 hour cab hazaribagh"
    ],
    localKeywords: [
      "hazaribagh to ranchi cab", "hazaribagh to bokaro cab", "hazaribagh to dhanbad taxi",
      "hazaribagh cab booking", "hazaribagh outstation cab", "hazaribagh local taxi",
      "rajrappa temple cab hazaribagh", "canary hill taxi", "best cab hazaribagh 2026",
      "hazaribagh to patna cab", "konar dam cab", "hazaribagh sightseeing cab"
    ],
    reviews: [
      { name: "Vivek Sinha", text: "Took an RS Travel cab from Hazaribagh to Ranchi — on-time pickup and a spotless car. Excellent experience.", rating: 5 },
      { name: "Kavita Kumari", text: "Did all my Hazaribagh sightseeing with RS Travel, ticking off every major spot in total comfort.", rating: 5 },
      { name: "Manoj Pathak", text: "For my frequent Bokaro office runs I rely on RS Travel — they've proved dependable every single time in Hazaribagh.", rating: 5 }
    ]
  },
  {
    slug: "giridih",
    hindiName: "गिरिडीह",
    name: "Giridih",
    aka: ["Land of Hills"],
    district: "Giridih",
    population: "0.25 million",
    pincode: "815301",
    latitude: 24.1854,
    longitude: 86.3015,
    airportCode: null,
    nearestAirport: { name: "Ranchi Airport", code: "IXR", distance: 170 },
    railwayStation: "Giridih Station",
    tier: 2,
    localities: [
      "Gandhi Chowk", "Bagodar", "Tisri", "Bengabad", "Dhanwar",
      "Surguja Colony", "Station Road", "Court Area", "Gawan",
      "Harihar Colony", "Parasnath", "Madhuban"
    ],
    localFare: {
      hatchback_4hr: 799,
      sedan_4hr: 1099,
      suv_4hr: 1499,
      hatchback_8hr: 1499,
      sedan_8hr: 1999,
      suv_8hr: 2699
    },
    touristPlaces: [
      "Parasnath Hill", "Madhuban Jain Temple", "Usri Falls",
      "Khandoli Dam", "Harihar Dham"
    ],
    nearbyAttractions: [
      { name: "Parasnath Hill", distanceKm: 25, description: "Rising to 1,365m, this is Jharkhand's highest summit and one of Jainism's most sacred tirthas, crowned by the Shikharji temple.", type: "temple" },
      { name: "Madhuban Jain Temple", distanceKm: 22, description: "The staging point for the climb to Parasnath, dotted with elegant Jain shrines and pilgrim lodgings (dharamshalas).", type: "temple" },
      { name: "Usri Falls", distanceKm: 15, description: "A pretty cascade on the Usri river that is at its fullest and finest in the monsoon months of July to September.", type: "waterfall" },
      { name: "Khandoli Dam", distanceKm: 12, description: "A hill-ringed reservoir where visitors can try kayaking, rock climbing and other adventure activities.", type: "dam" }
    ],
    seoTitle: "Cab Service Giridih 2026 | Parasnath Hill Taxi +917979877450",
    seoH1: "Cab Service in Giridih — Parasnath Hill Gateway | Book Online 2026",
    seoDescription: "Need a cab service in Giridih 2026? RS Travel — taxi, car rental, airport transfer, fixed fares. Local cab from ₹799, 24/7, Parasnath covered. ☎ +917979877450",
    longDescription: "Known as the 'Land of Hills', Giridih is a charming town in Jharkhand that sits right at the foot of Parasnath Hill, the highest peak in the state at 1,365 metres. For the Jain community, this place holds deep spiritual meaning — Parasnath Hill, or Shikharji, is counted among the most sacred of all Jain tirthas, where 20 of the 24 Tirthankaras are said to have attained Moksha.\n\nRS Travel runs a dedicated cab service in Giridih centred on Parasnath Hill and Madhuban Jain Temple pilgrimages. Our drivers have spent years on these hill routes; they know every parking area, resting point and darshan timing. Within town, our local taxis cover Gandhi Chowk, Station Road and Court Area smoothly.\n\nHeading out of the city? RS Travel links Giridih to Dhanbad (60 km), Bokaro (70 km), Ranchi (170 km) and Kolkata (330 km) at transparent, all-inclusive fares — the figure quoted on the phone is the figure you pay at the end.\n\nTo book a cab in Giridih, WhatsApp or call RS Travel at +917979877450.",
    transportGuide: "🚂 BY TRAIN: Giridih Station links the town to Dhanbad and Madhupur Junction. RS Travel drivers are stationed there for immediate pickup.\n\n🚗 BY CAB: Dhanbad is 60 km away (about 1.5 hours), Bokaro 70 km (2 hours) and Ranchi 170 km (4 hours). RS Travel operates on all of these routes.",
    corporateInfo: "Giridih's local economy rests on three pillars — mica mining, religious tourism and agriculture. RS Travel supports the town with cabs for:\n\n🛕 PILGRIMAGE: Darshan trips to Parasnath Hill, Madhuban and Shikharji\n⛏️ MINING: Mica mines and their associated industries\n🏛️ INSTITUTIONS: Giridih College and the various DAV schools\n\nContact: +917979877450",
    stationInfo: "📍 GIRIDIH STATION: The town's railhead, with services running to Dhanbad and Madhupur. RS Travel offers round-the-clock pickup from the main exit.",
    hindiKeywords: [
      "गिरिडीह कैब सर्विस", "पारसनाथ हिल टैक्सी", "मधुबन जैन मंदिर कैब",
      "गिरिडीह से धनबाद कैब", "शिखरजी तीर्थ टैक्सी"
    ],
    nearMeKeywords: [
      "cab near me giridih", "taxi near me giridih", "cab near parasnath hill",
      "taxi near madhuban", "cheapest cab giridih"
    ],
    localKeywords: [
      "giridih to dhanbad cab", "giridih to bokaro cab", "giridih to ranchi taxi",
      "parasnath hill cab", "madhuban jain temple taxi", "shikharji cab booking",
      "giridih cab booking", "giridih local taxi", "best cab giridih 2026",
      "giridih to kolkata cab", "giridih outstation cab", "usri falls cab giridih"
    ],
    reviews: [
      { name: "Rakesh Jain", text: "Took their cab from Giridih for the Parasnath Hill yatra. The driver handled the uphill stretches with total confidence. Thoroughly impressed!", rating: 5 },
      { name: "Suman Kumari", text: "As a Giridih local, I have to say their cars are spotless and the rates very fair.", rating: 5 },
      { name: "Pankaj Verma", text: "Did a Giridih to Dhanbad return journey with them. The sedan was genuinely comfortable throughout.", rating: 5 }
    ]
  },
  {
    slug: "dumka",
    hindiName: "दुमका",
    name: "Dumka",
    aka: ["Santhal Pargana Headquarters"],
    district: "Dumka",
    population: "0.15 million",
    pincode: "814101",
    latitude: 24.2640,
    longitude: 87.2490,
    airportCode: null,
    nearestAirport: { name: "Deoghar Airport", code: "DBR", distance: 60 },
    railwayStation: "Dumka Station",
    tier: 2,
    localities: [
      "Hansdiha", "Jarmundi", "Shikaripara", "Gopikandar",
      "Maslia", "Raneshwar", "Court Area", "Station Road",
      "Sido Kanhu University Area", "Motijheel"
    ],
    localFare: {
      hatchback_4hr: 799,
      sedan_4hr: 1099,
      suv_4hr: 1499,
      hatchback_8hr: 1499,
      sedan_8hr: 1999,
      suv_8hr: 2699
    },
    touristPlaces: [
      "Masanjore Dam", "Sido Kanhu University", "Maluti Temples",
      "Baskinath Temple"
    ],
    nearbyAttractions: [
      { name: "Masanjore Dam", distanceKm: 25, description: "A big dam across the Mayurakshi river, raised with the help of Canadian engineers, whose pretty reservoir draws picnickers and boating enthusiasts.", type: "dam" },
      { name: "Maluti Temples", distanceKm: 55, description: "Seventy-two ancient terracotta shrines dating from the 17th and 18th centuries, often dubbed Jharkhand's 'Mini Khajuraho'.", type: "temple" },
      { name: "Baskinath Temple", distanceKm: 45, description: "A revered old Shiva temple steeped in history, and one of the most visited pilgrimage spots across Santhal Pargana.", type: "temple" }
    ],
    seoTitle: "Cab Service Dumka 2026 | Santhal Pargana Taxi +917979877450",
    seoH1: "Cab Service in Dumka — Santhal Pargana HQ | Book Online 2026",
    seoDescription: "Need a cab service in Dumka 2026? RS Travel offers Santhal Pargana taxi, car rental and Deoghar airport transfer. Local cab from ₹799, 24/7. ☎ +917979877450",
    longDescription: "Dumka wears two hats — it is both the divisional headquarters of Santhal Pargana and a city steeped in tribal tradition. Sitting in the eastern part of Jharkhand, it is best known for the culture and heritage of the Santhal community, and it opens the door to some of the region's most significant sites, including the ancient Maluti Temples and the beautiful Masanjore Dam.\n\nRS Travel runs a dependable cab service in Dumka that links the city to Deoghar (65 km), Jamshedpur (300 km), Kolkata (350 km) and several other destinations. Whether you want a quick local taxi or a full outstation trip, our police-verified drivers are at your service around the clock.\n\nDumka is also home to Sido Kanhu Murmu University, counted among Jharkhand's biggest universities, and it functions as the headquarters of the entire Santhal Pargana division.\n\nTo reserve a cab, reach RS Travel on WhatsApp at +91 79798 77450.",
    transportGuide: "🚂 BY TRAIN: Dumka Station offers services towards Jasidih Junction and Bhagalpur, though trains here are limited — which is why most travellers prefer a cab.\n\n✈️ BY AIR: The closest airport is Deoghar Airport (DBR), about 60 km away. RS Travel operates convenient cab runs to and from Deoghar Airport.\n\n🚗 BY CAB: Deoghar is 65 km away (about 1.5 hours), Jamshedpur 300 km (6 hours) and Kolkata 350 km (7 hours). RS Travel covers all of these routes.",
    corporateInfo: "Dumka is the administrative heart of the Santhal Pargana division, and RS Travel keeps its officials and institutions moving:\n\n🏛️ INSTITUTIONS: Sido Kanhu Murmu University, Dumka College, Dumka Medical College\n🏢 GOVERNMENT: Divisional Commissioner Office, District Collectorate\n\nContact: +917979877450",
    stationInfo: "📍 DUMKA STATION: A modest town railhead with limited train services. RS Travel cabs are available from the station exit for both local and outstation trips.",
    hindiKeywords: [
      "दुमका कैब सर्विस", "दुमका टैक्सी", "दुमका से देवघर कैब",
      "दुमका से कोलकाता कैब", "संथाल परगना टैक्सी"
    ],
    nearMeKeywords: [
      "cab near me dumka", "taxi near me dumka", "cheapest cab dumka",
      "car rental dumka", "24 hour cab dumka"
    ],
    localKeywords: [
      "dumka to deoghar cab", "dumka to jamshedpur cab", "dumka to kolkata taxi",
      "dumka cab booking", "dumka local taxi", "dumka outstation cab",
      "masanjore dam cab dumka", "maluti temple taxi", "best cab dumka 2026",
      "dumka to ranchi cab", "dumka to patna cab"
    ],
    reviews: [
      { name: "Santosh Murmu", text: "Hands down the finest cab service Dumka has to offer — tidy vehicles and courteous, well-trained drivers.", rating: 5 },
      { name: "Rita Baskey", text: "Arranged a Dumka to Deoghar trip for the Baidyanath Dham darshan. The ride went off without a hitch.", rating: 5 },
      { name: "Ajay Tudu", text: "Have used their outstation service from Dumka, including a run to Kolkata, and I honestly have nothing to complain about.", rating: 5 }
    ]
  },
  {
    slug: "chaibasa",
    hindiName: "चाईबासा",
    name: "Chaibasa",
    aka: ["West Singhbhum HQ"],
    district: "West Singhbhum",
    population: "0.1 million",
    pincode: "833201",
    latitude: 22.5500,
    longitude: 85.8000,
    airportCode: null,
    nearestAirport: { name: "Ranchi Airport", code: "IXR", distance: 170 },
    railwayStation: "Chaibasa Station",
    tier: 2,
    localities: [
      "Thakurbadi", "Gudri", "Chhota Govindpur", "Bara Govindpur",
      "Court Area", "Station Road", "College Road", "Hata Gamharia",
      "Sundergarh Road"
    ],
    localFare: {
      hatchback_4hr: 799,
      sedan_4hr: 1099,
      suv_4hr: 1499,
      hatchback_8hr: 1499,
      sedan_8hr: 1999,
      suv_8hr: 2699
    },
    touristPlaces: [
      "Lupungutu Falls", "Hirni Falls", "Saranda Forest",
      "Kiriburu Hills", "Meghahatuburu"
    ],
    nearbyAttractions: [
      { name: "Saranda Forest", distanceKm: 30, description: "The biggest sal forest in Asia, teeming with elephants, leopards and a host of other wildlife amid breathtaking scenery.", type: "wildlife" },
      { name: "Lupungutu Falls", distanceKm: 20, description: "A lovely waterfall tucked inside the woodlands around Chaibasa; it looks its best during the monsoon.", type: "waterfall" },
      { name: "Kiriburu Hills", distanceKm: 60, description: "A pleasant hill station set in the iron ore belt, offering cool weather and sweeping views across the Saranda forest.", type: "hill" }
    ],
    seoTitle: "Cab Service Chaibasa 2026 | West Singhbhum Taxi +917979877450",
    seoH1: "Cab Service in Chaibasa — West Singhbhum HQ | Book Online 2026",
    seoDescription: "Book a cab service in Chaibasa 2026? RS Travel — West Singhbhum taxi, car rental and airport transfer to Ranchi. Local cab from ₹799. Call +917979877450.",
    longDescription: "Chaibasa serves as the headquarters of West Singhbhum district, a town wrapped in greenery by the Saranda Forest, Asia's largest sal forest. Lying about 65 km south of Jamshedpur, it is the natural entry point to southern Jharkhand's mineral-rich belt, which holds the iron ore mines of Kiriburu, Meghahatuburu and Noamundi.\n\nRS Travel provides a steady cab service in Chaibasa connecting the town with Jamshedpur (65 km, from ₹1,499), Ranchi (170 km), Rourkela (90 km) and Kolkata (320 km). Inside the town, our local taxis cover Thakurbadi, Gudri and Court Area with ease.\n\nChaibasa is the cultural heart of the Ho tribal community, and it is blessed with natural beauty — the Lupungutu and Hirni waterfalls tumble down nearby, while the Saranda forest shelters a rich variety of wildlife.\n\nTo book a cab in Chaibasa, WhatsApp or call RS Travel at +917979877450.",
    transportGuide: "🚂 BY TRAIN: Chaibasa Station is linked to Jamshedpur (Tatanagar) and Rourkela. Cabs are available right at the station.\n\n🚗 BY CAB: Jamshedpur lies 65 km away (about 1.5 hours, from ₹1,499), Ranchi 170 km (4 hours) and Rourkela 90 km (2 hours). RS Travel operates on all three routes.",
    corporateInfo: "As the district headquarters and a gateway to some of Jharkhand's biggest mining operations, Chaibasa keeps RS Travel busy:\n\n⛏️ MINING: SAIL's Kiriburu and Meghahatuburu iron ore mines, plus Noamundi (Tata Steel)\n🏛️ INSTITUTIONS: Chaibasa Engineering College, Kolhan University\n🏢 GOVERNMENT: District Collectorate, Civil Court\n\nContact: +917979877450",
    stationInfo: "📍 CHAIBASA STATION: A town station on the Tatanagar–Rourkela line. RS Travel provides cab pickup from here to every part of the town.",
    hindiKeywords: [
      "चाईबासा कैब सर्विस", "चाईबासा टैक्सी", "चाईबासा से जमशेदपुर कैब",
      "चाईबासा कार रेंटल"
    ],
    nearMeKeywords: [
      "cab near me chaibasa", "taxi near me chaibasa", "cheapest cab chaibasa",
      "car rental chaibasa"
    ],
    localKeywords: [
      "chaibasa to jamshedpur cab", "chaibasa to ranchi cab", "chaibasa to rourkela taxi",
      "chaibasa cab booking", "chaibasa local taxi", "chaibasa outstation cab",
      "saranda forest cab", "kiriburu cab", "best cab chaibasa 2026",
      "chaibasa to kolkata cab"
    ],
    reviews: [
      { name: "Birsa Hembrom", text: "Their Chaibasa to Jamshedpur service has never failed me — the cab is always there whenever I ask.", rating: 5 },
      { name: "Lakshmi Mahato", text: "Hired RS Travel for moving around Chaibasa locally. Pocket-friendly and dependable.", rating: 5 },
      { name: "Sunil Singh", text: "Went from Chaibasa to Ranchi in one of their cars — neat vehicle, seasoned driver. Could not have asked for more.", rating: 5 }
    ]
  },
  {
    slug: "adityapur",
    hindiName: "आदित्यपुर",
    name: "Adityapur",
    aka: ["Gamharia", "Industrial Area"],
    district: "Seraikela-Kharsawan",
    population: "0.2 million",
    pincode: "832109",
    latitude: 22.7817,
    longitude: 86.1645,
    airportCode: null,
    nearestAirport: { name: "Ranchi Airport", code: "IXR", distance: 135 },
    railwayStation: "Gamharia Station",
    tier: 2,
    localities: [
      "Adityapur Industrial Area", "Gamharia", "Kandra",
      "Seraikela", "Ichagarh", "Nimdih", "Champua Road",
      "Adityapur Phase 1", "Adityapur Phase 2"
    ],
    localFare: {
      hatchback_4hr: 799,
      sedan_4hr: 1099,
      suv_4hr: 1499,
      hatchback_8hr: 1499,
      sedan_8hr: 1999,
      suv_8hr: 2699
    },
    touristPlaces: [
      "Kailash Parvat Temple", "Adityapur Industrial Complex",
      "Gamharia Market", "Seraikela Palace"
    ],
    nearbyAttractions: [
      { name: "Adityapur Industrial Area", distanceKm: 0, description: "One of the biggest industrial estates in Asia, housing more than 1,000 factories right on Jamshedpur's doorstep.", type: "other" },
      { name: "Jubilee Park", distanceKm: 8, description: "A beautifully maintained Tata Steel park in Bistupur with a musical fountain, rose garden and zoo all on site.", type: "park" },
      { name: "Seraikela Chhau Dance", distanceKm: 12, description: "Seraikela is renowned for the age-old Chhau dance form, which is inscribed as UNESCO Intangible Cultural Heritage.", type: "other" }
    ],
    seoTitle: "Cab Service Adityapur 2026 | Gamharia Taxi +917979877450",
    seoH1: "Cab Service in Adityapur/Gamharia — Industrial Area | Book Online 2026",
    seoDescription: "Need a cab service in Adityapur (Gamharia) 2026? RS Travel — corporate taxi, car rental, outstation cab from ₹799. All industrial zones covered. ☎ +917979877450",
    longDescription: "Adityapur, better known locally as Gamharia, ranks among Asia's largest industrial areas and sits right next to Jamshedpur in Seraikela-Kharsawan district. With more than 1,000 factories and manufacturing units spread over Phase 1 and Phase 2, it has rightly earned the title of the backbone of Jharkhand's industrial economy.\n\nRS Travel runs a cab service in Adityapur built for this vast industrial workforce. Need a daily commute from Adityapur to Bistupur, Mango or Sakchi? Or an outstation run to Ranchi (135 km), Kolkata (270 km) or Dhanbad (90 km)? Our verified fleet is on call 24/7 for both.\n\nThe neighbourhood also takes in Seraikela, celebrated for the ancient Chhau dance tradition that carries UNESCO Intangible Cultural Heritage status, as well as the town of Kandra. RS Travel connects all of these areas with reliable, budget-friendly cabs.\n\nBook your ride now — WhatsApp RS Travel at +91 79798 77450.",
    transportGuide: "🚂 BY TRAIN: Gamharia Station looks after the Adityapur area, with services connecting to Jamshedpur and other cities. Cab pickup is available from here.\n\n🚗 BY CAB: Jamshedpur (Bistupur) is just 8 km away (20 minutes), Ranchi 135 km (3 hours) and Dhanbad 90 km (2 hours) — all covered by RS Travel.",
    corporateInfo: "Adityapur is Jharkhand's industrial powerhouse, and RS Travel is the corporate cab partner of choice here:\n\n🏭 INDUSTRIES: Adityapur Industrial Area Phase 1 & 2, home to 1,000+ factories\n🏭 COMPANIES: Auto component units, steel processing plants, engineering firms\n🏢 ADMIN: Seraikela-Kharsawan District HQ\n\nMonthly corporate packages from ₹12,999 | Employee shuttle service. Contact: +917979877450",
    stationInfo: "📍 GAMHARIA STATION: The railhead serving the Adityapur Industrial Area. RS Travel cabs are available for every industrial zone and the surrounding towns.",
    hindiKeywords: [
      "आदित्यपुर कैब सर्विस", "गमहरिया टैक्सी", "आदित्यपुर से जमशेदपुर कैब",
      "आदित्यपुर कार रेंटल"
    ],
    nearMeKeywords: [
      "cab near me adityapur", "taxi near me gamharia", "cheapest cab adityapur",
      "car rental adityapur", "cab near adityapur industrial area"
    ],
    localKeywords: [
      "adityapur to jamshedpur cab", "gamharia to bistupur cab", "adityapur to ranchi taxi",
      "adityapur cab booking", "adityapur corporate cab", "gamharia local taxi",
      "adityapur to dhanbad cab", "seraikela cab service", "best cab adityapur 2026",
      "kandra cab service", "adityapur industrial area taxi"
    ],
    reviews: [
      { name: "Rohit Agarwal", text: "RS Travel has been my everyday ride on the Adityapur to Bistupur route. Rock solid and punctual.", rating: 5 },
      { name: "Meera Devi", text: "Their Adityapur service has worked well for me — neat cabs and punctual arrivals every single time.", rating: 5 },
      { name: "Suraj Mahato", text: "Took a sedan from Gamharia to Ranchi with them. Room enough to stretch out and the fare was very reasonable.", rating: 5 }
    ]
  },
  {
    slug: "ramgarh",
    hindiName: "रामगढ़",
    name: "Ramgarh",
    aka: ["Ramgarh Cantonment"],
    district: "Ramgarh",
    population: "0.15 million",
    pincode: "829122",
    latitude: 23.6302,
    longitude: 85.5102,
    airportCode: null,
    nearestAirport: { name: "Ranchi Airport", code: "IXR", distance: 60 },
    railwayStation: "Ramgarh Cantonment Station",
    tier: 3,
    localities: [
      "Ramgarh Cantt", "Patratu", "Mandu", "Gola", "Dulmi",
      "Chitarpur", "Rajrappa", "Bhurkunda"
    ],
    localFare: {
      hatchback_4hr: 799,
      sedan_4hr: 1099,
      suv_4hr: 1499,
      hatchback_8hr: 1499,
      sedan_8hr: 1999,
      suv_8hr: 2699
    },
    touristPlaces: [
      "Patratu Valley", "Rajrappa Temple", "Patratu Dam",
      "Chitarpur Fort"
    ],
    nearbyAttractions: [
      { name: "Patratu Valley", distanceKm: 15, description: "A drive that snakes through hills with jaw-dropping valley panoramas — easily one of Jharkhand's most beautiful routes.", type: "nature" },
      { name: "Rajrappa Temple", distanceKm: 30, description: "The holy Chhinnamasta temple, standing where the Damodar and Bhairavi rivers meet.", type: "temple" },
      { name: "Patratu Dam", distanceKm: 18, description: "A pretty reservoir with boating on offer, much loved for its sunsets and weekend outings.", type: "dam" }
    ],
    seoTitle: "Cab Service Ramgarh 2026 | Patratu Valley Taxi +917979877450",
    seoH1: "Cab Service in Ramgarh — Patratu Valley Gateway | Book Online 2026",
    seoDescription: "Need a cab service in Ramgarh 2026? RS Travel — taxi, car rental, outstation cab from ₹799. Patratu Valley, Rajrappa, Ramgarh Cantt. ☎ +917979877450",
    longDescription: "Ramgarh, officially styled Ramgarh Cantonment, is a scenic town strung along NH-33 between Ranchi and Bokaro. It draws both travellers and devotees thanks to two very different attractions: the stunning Patratu Valley, whose winding roads make it one of the most celebrated drives in Jharkhand, and the sacred Rajrappa Temple.\n\nRS Travel runs a dependable cab service in Ramgarh for local sightseeing around Patratu Valley and Rajrappa, as well as outstation trips to Ranchi (60 km, from ₹1,499), Bokaro (50 km) and Hazaribagh (55 km).\n\nThe town carries deep military history through its cantonment, and it acts as a key transit point on the road between Ranchi and the coal belt.\n\nTo book a cab in Ramgarh, WhatsApp or call RS Travel at +917979877450.",
    transportGuide: "🚂 BY TRAIN: Ramgarh Cantonment Station sits on the Ranchi–Bokaro line, with cabs waiting at the exit.\n\n🚗 BY CAB: Ranchi is 60 km away (about 1.5 hours), Bokaro 50 km (1.5 hours) and Hazaribagh 55 km (1.5 hours). RS Travel handles all of these routes.",
    corporateInfo: "Ramgarh is both a transit hub and a tourism gateway, and RS Travel provides:\n\n🏞️ TOURISM: Sightseeing cabs for Patratu Valley, Rajrappa Temple and Patratu Dam\n⛏️ MINING: Transport for the CCL coal mines in the area\n🏛️ CANTONMENT: Transport across the military cantonment area\n\nContact: +917979877450",
    stationInfo: "📍 RAMGARH CANTONMENT STATION: Located on the Ranchi–Dhanbad–Kolkata line. RS Travel cabs are available from the station for all destinations.",
    hindiKeywords: [
      "रामगढ़ कैब सर्विस", "पतरातू वैली टैक्सी", "राजरप्पा मंदिर कैब",
      "रामगढ़ से रांची कैब"
    ],
    nearMeKeywords: [
      "cab near me ramgarh", "taxi near me ramgarh", "cheapest cab ramgarh",
      "patratu valley cab", "rajrappa temple taxi"
    ],
    localKeywords: [
      "ramgarh to ranchi cab", "ramgarh to bokaro cab", "ramgarh to hazaribagh taxi",
      "patratu valley cab ramgarh", "rajrappa cab ramgarh", "ramgarh cab booking",
      "ramgarh local taxi", "best cab ramgarh 2026", "ramgarh outstation cab",
      "patratu dam taxi"
    ],
    reviews: [
      { name: "Anil Kumar", text: "Their Ramgarh to Ranchi service is reliable, cheap and ready whenever I call.", rating: 5 },
      { name: "Savita Devi", text: "Hired a cab to explore Patratu Valley and the whole experience was wonderful!", rating: 5 },
      { name: "Rajesh Mahto", text: "If you need a dependable cab in Ramgarh, RS Travel is the one I recommend without hesitation.", rating: 5 }
    ]
  },
  {
    slug: "koderma",
    hindiName: "कोडरमा",
    name: "Koderma",
    aka: ["Mica City"],
    district: "Koderma",
    population: "0.1 million",
    pincode: "825409",
    latitude: 24.4672,
    longitude: 85.5937,
    airportCode: null,
    nearestAirport: { name: "Gaya Airport", code: "GAY", distance: 100 },
    railwayStation: "Koderma Junction",
    tier: 3,
    localities: [
      "Koderma Town", "Jhumri Tilaiya", "Domchanch", "Markacho",
      "Chandwara", "Satgawan"
    ],
    localFare: {
      hatchback_4hr: 799,
      sedan_4hr: 1099,
      suv_4hr: 1499,
      hatchback_8hr: 1499,
      sedan_8hr: 1999,
      suv_8hr: 2699
    },
    touristPlaces: [
      "Tilaiya Dam", "Koderma Wildlife Sanctuary",
      "Jhumri Tilaiya Market"
    ],
    nearbyAttractions: [
      { name: "Tilaiya Dam", distanceKm: 10, description: "The inaugural dam of the DVC network, built across the Barakar river, with a pretty reservoir that draws picnickers and boaters.", type: "dam" },
      { name: "Koderma Wildlife Sanctuary", distanceKm: 20, description: "A protected woodland sheltering a varied array of wildlife, with nature trails and fine bird watching spots.", type: "wildlife" }
    ],
    seoTitle: "Cab Service Koderma 2026 | Mica City Taxi +917979877450",
    seoH1: "Cab Service in Koderma — Mica City | Book Online 2026",
    seoDescription: "Book a cab service in Koderma 2026? RS Travel — taxi, car rental and outstation cab from ₹799. Ranchi, Hazaribagh, Patna all covered. Call +917979877450.",
    longDescription: "Koderma, nicknamed India's Mica City, lies in the northern corner of Jharkhand where the Grand Chord railway line crosses NH-2. The district contributes a sizeable share of the nation's mica production and doubles as a vital staging point on the road between Ranchi and Patna.\n\nJust nearby sits Jhumri Tilaiya, a town so famous it has slipped into Bollywood song lyrics and become a cultural byword across the country. Tilaiya Dam, the very first dam of the DVC project, offers a scenic escape close by.\n\nRS Travel provides cab service from Koderma to Ranchi (150 km), Hazaribagh (60 km), Patna (200 km) and every major destination in the region.\n\nBook your cab now — WhatsApp RS Travel at +91 79798 77450.",
    transportGuide: "🚂 BY TRAIN: Koderma Junction lies on the Delhi–Kolkata Grand Chord line, with Rajdhani, Duronto and other express services stopping here. RS Travel offers 24/7 pickup from the station.\n\n🚗 BY CAB: Hazaribagh is 60 km away (about 1.5 hours), Ranchi 150 km (3.5 hours) and Patna 200 km (4.5 hours) — all covered by RS Travel.",
    corporateInfo: "Koderma is a hub of mica mining, and RS Travel keeps its people on the move:\n\n⛏️ MINING: Mica mines and processing units\n🏛️ INSTITUTIONS: Koderma College, DAV schools\n🏢 TRANSIT: A major halt on the route between Ranchi and Patna\n\nContact: +917979877450",
    stationInfo: "📍 KODERMA JUNCTION: A major rail junction on the Grand Chord line, linked to Delhi, Kolkata, Ranchi and Patna by express trains. RS Travel cabs are available round the clock.",
    hindiKeywords: [
      "कोडरमा कैब सर्विस", "कोडरमा टैक्सी", "कोडरमा से रांची कैब",
      "झुमरी तिलैया टैक्सी"
    ],
    nearMeKeywords: [
      "cab near me koderma", "taxi near me koderma", "cheapest cab koderma",
      "cab near koderma junction"
    ],
    localKeywords: [
      "koderma to ranchi cab", "koderma to hazaribagh cab", "koderma to patna taxi",
      "koderma cab booking", "koderma local taxi", "koderma outstation cab",
      "jhumri tilaiya cab", "tilaiya dam taxi", "best cab koderma 2026",
      "koderma junction cab service"
    ],
    reviews: [
      { name: "Dinesh Prasad", text: "Their Koderma to Ranchi run was wonderfully comfortable; the service itself is top class.", rating: 5 },
      { name: "Rashmi Kumari", text: "Booking through RS Travel in Koderma is always smooth — it has become the service our whole family trusts.", rating: 5 },
      { name: "Sudhir Singh", text: "Went Koderma to Hazaribagh with them — the cab arrived bang on time and the price was easy on the pocket.", rating: 5 }
    ]
  },
  {
    slug: "phusro",
    hindiName: "फुसरो",
    name: "Phusro",
    aka: ["Petarbar", "Coal Town"],
    district: "Bokaro",
    population: "0.1 million",
    pincode: "829144",
    latitude: 23.7500,
    longitude: 86.0000,
    airportCode: null,
    nearestAirport: { name: "Ranchi Airport", code: "IXR", distance: 140 },
    railwayStation: "Phusro Station",
    tier: 3,
    localities: [
      "Phusro Town", "Petarbar", "Jaridih", "Bermo",
      "Gomoh", "Tundi"
    ],
    localFare: {
      hatchback_4hr: 799,
      sedan_4hr: 1099,
      suv_4hr: 1499,
      hatchback_8hr: 1499,
      sedan_8hr: 1999,
      suv_8hr: 2699
    },
    touristPlaces: [
      "Gomoh Junction (historic)", "Topchanchi Lake (nearby)",
      "Bermo Industrial Area"
    ],
    nearbyAttractions: [
      { name: "Topchanchi Lake", distanceKm: 20, description: "A serene lake ringed by thick forest — perfect for nature walks, watching birds, and unhurried family picnics.", type: "lake" },
      { name: "Gomoh Junction", distanceKm: 8, description: "Historic rail junction where Netaji Subhas Chandra Bose slipped out of British India in disguise.", type: "historical" }
    ],
    seoTitle: "Phusro (Petarbar) Cab Service 2026 | Coal Belt Taxi ☎ +917979877450",
    seoH1: "Cab Service in Phusro/Petarbar — Bokaro Coal Belt | Book Online 2026",
    seoDescription: "Phusro (Petarbar) cab service 2026 — RS Travel offers AC taxis to Dhanbad, Bokaro & Ranchi at fixed fares. Local taxi from ₹799. Call +917979877450.",
    longDescription: "Phusro, better known to locals as Petarbar, is a busy coal-mining settlement in Bokaro district that sits right on the Dhanbad-Bokaro corridor. It is an essential hub for coal workers and their families, who depend on dependable transport every time they head to neighbouring towns.\n\nRS Travel runs AC cabs from Phusro to Dhanbad (30 km), Bokaro (35 km), Ranchi (140 km), and everywhere else in Jharkhand, day or night. Whether you need a quick local run or a longer outstation trip, our cars stay available round the clock at clear, upfront fares.\n\nThe famous Gomoh Junction is not far away — this historic rail station is where Netaji Subhas Chandra Bose made his celebrated escape from British-ruled India.\n\nTo book, simply WhatsApp +91 79798 77450.",
    transportGuide: "🚂 BY TRAIN: Phusro Station and the adjacent Gomoh Junction both lie on the Grand Chord line, keeping the town well linked. Cab pickup is available at either station.\n\n🚗 BY CAB: From Dhanbad: 30 km (45 min). From Bokaro: 35 km (1 hr). From Ranchi: 140 km (3 hrs). Every route is served by RS Travel.",
    corporateInfo: "Phusro thrives on the coal economy, and RS Travel is geared to serve that demand:\n\n⛏️ MINING: BCCL and CCL collieries around the town\n🏭 INDUSTRIAL: Coal washeries and processing plants\n\nReach us at +917979877450",
    stationInfo: "📍 PHUSRO STATION: A local halt linking Dhanbad and Bokaro. Cab pickup is available here for any destination.\n\n📍 GOMOH JUNCTION: Historic junction 8 km from town, with excellent rail links to Kolkata and Delhi. Cabs stand by 24/7.",
    hindiKeywords: [
      "फुसरो कैब सर्विस", "पेटरबार टैक्सी", "फुसरो से धनबाद कैब",
      "गोमोह जंक्शन टैक्सी"
    ],
    nearMeKeywords: [
      "cab near me phusro", "taxi near me petarbar", "cheapest cab phusro",
      "cab near gomoh junction"
    ],
    localKeywords: [
      "phusro to dhanbad cab", "phusro to bokaro cab", "phusro to ranchi taxi",
      "petarbar cab booking", "gomoh junction cab", "phusro local taxi",
      "best cab phusro 2026", "phusro outstation cab"
    ],
    reviews: [
      { name: "Govind Das", text: "RS Travel is my regular pick for the Phusro–Dhanbad commute. Always on time and dependable.", rating: 5 },
      { name: "Kiran Devi", text: "Took a cab from Phusro to Bokaro with them. Neat car and honest pricing throughout.", rating: 5 },
      { name: "Manoj Kumar", text: "A trustworthy cab operator in the Phusro belt. Great choice for outstation journeys.", rating: 5 }
    ]
  },
  {
    slug: "daltonganj",
    hindiName: "डालटनगंज",
    name: "Daltonganj",
    aka: ["Medininagar", "Palamu HQ"],
    district: "Palamu",
    population: "0.15 million",
    pincode: "822101",
    latitude: 24.0293,
    longitude: 84.0694,
    airportCode: null,
    nearestAirport: { name: "Ranchi Airport", code: "IXR", distance: 160 },
    railwayStation: "Daltonganj Station",
    tier: 3,
    localities: [
      "Medininagar", "Daltonganj Town", "Pandey More",
      "Untari", "Bishrampur", "Satbarwa", "Hussainabad"
    ],
    localFare: {
      hatchback_4hr: 799,
      sedan_4hr: 1099,
      suv_4hr: 1499,
      hatchback_8hr: 1499,
      sedan_8hr: 1999,
      suv_8hr: 2699
    },
    touristPlaces: [
      "Betla National Park", "Netarhat (Hill Station)", "Lodh Falls",
      "Palamu Fort", "Mahuadanr Wolf Sanctuary"
    ],
    nearbyAttractions: [
      { name: "Betla National Park", distanceKm: 25, description: "A tiger reserve in Palamu where elephants, tigers, and bison roam free. Jeep safaris are available for visitors.", type: "wildlife" },
      { name: "Netarhat", distanceKm: 150, description: "The 'Queen of Chotanagpur' — a hill station at 3,700 ft, famous for its sunrise and sunset viewpoints.", type: "hill" },
      { name: "Lodh Falls", distanceKm: 60, description: "Jharkhand's tallest waterfall (143m), a dramatic cascade in a forested setting. Best seen during the monsoon.", type: "waterfall" },
      { name: "Palamu Fort", distanceKm: 30, description: "Ancient fort ruins crowning a hilltop, tied to the Chero dynasty and offering sweeping views of the countryside.", type: "historical" }
    ],
    seoTitle: "Daltonganj Cab Service 2026 | Betla & Netarhat Taxi ☎ +917979877450",
    seoH1: "Cab Service in Daltonganj — Gateway to Betla & Netarhat | Book Online 2026",
    seoDescription: "Daltonganj (Medininagar) cab service 2026 by RS Travel — AC taxis to Betla National Park, Netarhat & Ranchi. Fixed fares, 24/7. Call +917979877450.",
    longDescription: "Daltonganj — officially Medininagar — serves as the headquarters of Palamu district in western Jharkhand. More importantly, it is the natural starting point for two of the state's most celebrated destinations: Betla National Park, a tiger reserve where you can spot elephants, bison, and tigers, and Netarhat, the hill station fondly called the 'Queen of Chotanagpur' at 3,700 feet.\n\nRS Travel offers cab service in Daltonganj for everything from errands around town to Betla safaris, Netarhat excursions, and outstation runs to Ranchi (160 km, ₹3,499), Hazaribagh, and Patna. Our drivers know the forest trails and scenic highways of western Jharkhand better than anyone.\n\nLodh Falls (143m) — the tallest waterfall in Jharkhand — and the old Palamu Fort are two more spots you can reach easily from Daltonganj.\n\nBook now — WhatsApp +91 79798 77450.",
    transportGuide: "🚂 BY TRAIN: Daltonganj Station is served by select trains running to Ranchi, Kolkata, and Delhi. Cab pickup is available from the station.\n\n🚗 BY CAB: From Ranchi: 160 km (4 hrs, ₹3,499). From Hazaribagh: 130 km (3 hrs). From Gaya: 140 km (3.5 hrs). All routes handled by RS Travel.",
    corporateInfo: "Daltonganj is both a tourism gateway and an administrative centre, and RS Travel is set up to serve both:\n\n🏞️ TOURISM: Betla safaris, Netarhat outings, Lodh Falls trips, Palamu Fort visits\n🏛️ INSTITUTIONS: Palamu University, Medininagar College\n🏢 GOVERNMENT: Palamu District Collectorate\n\nContact: +917979877450",
    stationInfo: "📍 DALTONGANJ STATION: A town halt with rail links to Ranchi and Kolkata. Cabs are ready here for Betla, Netarhat, and every other destination.",
    hindiKeywords: [
      "डालटनगंज कैब सर्विस", "बेतला नेशनल पार्क टैक्सी", "नेतरहाट कैब",
      "मेदिनीनगर टैक्सी", "पलामू कैब सर्विस"
    ],
    nearMeKeywords: [
      "cab near me daltonganj", "taxi near me daltonganj", "cheapest cab daltonganj",
      "betla national park cab", "netarhat taxi"
    ],
    localKeywords: [
      "daltonganj to ranchi cab", "daltonganj to netarhat cab", "betla safari cab",
      "daltonganj cab booking", "daltonganj local taxi", "lodh falls cab",
      "palamu fort taxi", "best cab daltonganj 2026", "daltonganj outstation cab",
      "medininagar cab service", "daltonganj to patna cab"
    ],
    reviews: [
      { name: "Rishab Kumar", text: "Hired an RS Travel cab from Daltonganj to Netarhat. The mountain drive was breathtaking and the service superb!", rating: 5 },
      { name: "Geeta Devi", text: "Travelled Daltonganj to Ranchi with RS Travel — comfy ride and a punctual driver throughout.", rating: 5 },
      { name: "Pramod Singh", text: "A dependable cab provider around Daltonganj, especially for trips to Betla National Park.", rating: 5 }
    ]
  },
  {
    slug: "pakur",
    hindiName: "पाकुड़",
    name: "Pakur",
    aka: ["Sahibganj Division"],
    district: "Pakur",
    population: "0.08 million",
    pincode: "816107",
    latitude: 24.6363,
    longitude: 87.8424,
    airportCode: null,
    nearestAirport: { name: "Deoghar Airport", code: "DBR", distance: 120 },
    railwayStation: "Pakur Station",
    tier: 3,
    localities: [
      "Pakur Town", "Hiranpur", "Amrapara", "Littipara",
      "Maheshpur", "Pakuria"
    ],
    localFare: {
      hatchback_4hr: 799,
      sedan_4hr: 1099,
      suv_4hr: 1499,
      hatchback_8hr: 1499,
      sedan_8hr: 1999,
      suv_8hr: 2699
    },
    touristPlaces: [
      "Rajmahal Hills", "Tolapahar", "Ganga River (Sahibganj)",
      "Kanhaiya Sthan Temple"
    ],
    nearbyAttractions: [
      { name: "Rajmahal Hills", distanceKm: 45, description: "Picturesque hills beside the Ganga that carry a rich Mughal-era heritage.", type: "hill" },
      { name: "Tolapahar", distanceKm: 10, description: "A scenic hillock close to Pakur town offering sweeping views of the surrounding farmland.", type: "hill" }
    ],
    seoTitle: "Pakur Cab Service 2026 | Northeast Jharkhand Taxi ☎ +917979877450",
    seoH1: "Cab Service in Pakur — Northeast Jharkhand | Book Online 2026",
    seoDescription: "Pakur cab service 2026 by RS Travel — reliable AC taxis to Dumka, Deoghar, Sahibganj & Kolkata. Verified drivers, fixed fares. Call +917979877450.",
    longDescription: "Pakur, tucked into the northeastern corner of Jharkhand at the foot of the Rajmahal Hills, is a growing district headquarters. The town also acts as a gateway to the Ganga river belt and the historic town of Sahibganj.\n\nRS Travel provides cab service from Pakur to Dumka (100 km), Deoghar (120 km), Kolkata (300 km), and anywhere else you need to go. Our police-verified drivers make even the narrow rural roads of northeast Jharkhand a smooth and safe ride.\n\nBook now — WhatsApp +91 79798 77450.",
    transportGuide: "🚂 BY TRAIN: Pakur Station sits on the Sahebganj Loop line, linking it to Kolkata, Bhagalpur, and Dumka. Cabs are available at the station.\n\n🚗 BY CAB: From Dumka: 100 km (2.5 hrs). From Deoghar: 120 km (3 hrs). From Kolkata: 300 km (6 hrs). All covered by RS Travel.",
    corporateInfo: "Pakur is chiefly an administrative town, and RS Travel is here for its institutions:\n\n🏛️ INSTITUTIONS: Pakur College\n🏢 GOVERNMENT: Pakur District Collectorate\n\nContact: +917979877450",
    stationInfo: "📍 PAKUR STATION: Situated on the Sahebganj Loop line. Cab pickup is available right outside the station.",
    hindiKeywords: [
      "पाकुड़ कैब सर्विस", "पाकुड़ टैक्सी", "पाकुड़ से दुमका कैब"
    ],
    nearMeKeywords: [
      "cab near me pakur", "taxi near me pakur", "cheapest cab pakur"
    ],
    localKeywords: [
      "pakur to dumka cab", "pakur to deoghar cab", "pakur to kolkata taxi",
      "pakur cab booking", "pakur local taxi", "best cab pakur 2026"
    ],
    reviews: [
      { name: "Ashok Marandi", text: "Used RS Travel from Pakur for a trip to Dumka. Dependable service and a smooth ride.", rating: 5 },
      { name: "Babita Devi", text: "Took an RS Travel cab from Pakur to Deoghar for darshan. The journey was very comfortable.", rating: 5 },
      { name: "Nirmal Hembrom", text: "Among all the cab options in Pakur, RS Travel stands out — tidy cars and courteous drivers.", rating: 5 }
    ]
  },
  {
    slug: "kolkata",
    hindiName: "कोलकाता",
    name: "Kolkata",
    aka: ["Calcutta", "City of Joy", "KOL"],
    district: "Kolkata",
    population: "14.8 million",
    pincode: "700001",
    latitude: 22.5726,
    longitude: 88.3639,
    airportCode: "CCU",
    nearestAirport: { name: "Netaji Subhas Chandra Bose International Airport", code: "CCU", distance: 17 },
    railwayStation: "Howrah Junction",
    tier: 1,
    localities: [
      "Howrah", "Sealdah", "Park Street", "Salt Lake", "Rajarhat",
      "Newtown", "Gariahat", "Jadavpur", "Behala", "Esplanade",
      "Dum Dum", "Barrackpore", "Tollygunge", "Ballygunge", "Alipore",
      "Lake Town", "Kankurgachi", "Garia", "Kasba", "Ultadanga"
    ],
    localFare: {
      hatchback_4hr: 1099,
      sedan_4hr: 1399,
      suv_4hr: 1799,
      hatchback_8hr: 1899,
      sedan_8hr: 2399,
      suv_8hr: 3199
    },
    touristPlaces: [
      "Victoria Memorial", "Howrah Bridge", "Indian Museum",
      "Dakshineswar Kali Temple", "Science City", "Eco Park Newtown"
    ],
    nearbyAttractions: [
      { name: "Victoria Memorial", distanceKm: 10, description: "A grand white-marble monument and museum — the city's most unmissable landmark.", type: "museum" },
      { name: "Howrah Bridge", distanceKm: 5, description: "The celebrated cantilever bridge spanning the Hooghly — a true symbol of Kolkata.", type: "other" },
      { name: "Dakshineswar Kali Temple", distanceKm: 20, description: "A revered temple on the Hooghly's banks, deeply tied to Ramakrishna Paramahamsa's legacy.", type: "temple" }
    ],
    seoTitle: "Kolkata to Jamshedpur/Ranchi Cab 2026 ₹3,999 | RS Travel ☎ +917979877450",
    seoH1: "Cab from Kolkata to Jamshedpur, Ranchi & Jharkhand — Book Online 2026",
    seoDescription: "Book Kolkata to Jamshedpur cab ₹3,999 & Kolkata to Ranchi cab ₹5,999 in 2026. RS Travel outstation taxi from Howrah, Sealdah & CCU Airport. Call +917979877450.",
    longDescription: "Kolkata, the City of Joy and capital of West Bengal, is the main entry point for anyone driving over to Jharkhand. Home to more than 14.8 million people, it ranks as India's third-largest metropolitan area and remains a heavyweight in business, culture, and education.\n\nRS Travel runs a premium outstation cab service from Kolkata to every major city in Jharkhand. You can book a Kolkata to Jamshedpur cab (₹3,999, 260 km, 5 hrs), a Kolkata to Ranchi cab (₹5,999, 390 km, 7 hrs), or a Kolkata to Dhanbad trip (₹4,499, 270 km) — and plenty more.\n\nPickups are arranged from Howrah Station, Sealdah Station, Netaji Subhas Chandra Bose Airport (CCU), Salt Lake, Newtown, and every corner of Kolkata. Our drivers know the NH-49 and NH-19 highways inside out.\n\nBook now — WhatsApp +91 79798 77450.",
    transportGuide: "✈️ AIRPORT: Netaji Subhas Chandra Bose International Airport (CCU) — an airport pickup straight to Jamshedpur costs ₹4,499.\n\n🚂 STATIONS: Howrah Junction and Sealdah Station — cabs can collect you from either terminal.\n\n🚗 BY CAB: Kolkata to Jamshedpur: 260 km (5 hrs, ₹3,999). To Ranchi: 390 km (7 hrs, ₹5,999). To Dhanbad: 270 km (5 hrs, ₹4,499). Every leg is operated by RS Travel.",
    corporateInfo: "As a major business hub, Kolkata sends steady traffic towards Jharkhand, and RS Travel is ready for it:\n\n🏢 CORPORATE: Business trips to Jamshedpur (Tata Steel, Tata Motors)\n✈️ AIRPORT: CCU airport transfers into Jharkhand\n🏛️ INSTITUTIONS: IIM Calcutta and Jadavpur University transfers\n\nContact: +917979877450",
    stationInfo: "📍 HOWRAH JUNCTION: India's busiest railway station. Cabs leave from the main exit for every Jharkhand destination.\n\n📍 SEALDAH STATION: The city's second-biggest station. Cab pickup available here too.\n\n📍 CCU AIRPORT: Cabs from the arrivals area to all Jharkhand cities.",
    hindiKeywords: [
      "कोलकाता से जमशेदपुर कैब", "कोलकाता से रांची कैब", "कोलकाता टैक्सी",
      "हावड़ा स्टेशन कैब"
    ],
    nearMeKeywords: [
      "cab near me kolkata", "taxi near me howrah", "kolkata outstation cab",
      "kolkata to jamshedpur cab near me"
    ],
    localKeywords: [
      "kolkata to jamshedpur cab fare 2026", "kolkata to ranchi cab", "kolkata to dhanbad taxi",
      "howrah to jamshedpur cab", "kolkata airport to jamshedpur cab",
      "kolkata to tata cab", "kolkata to bokaro cab", "best kolkata to jharkhand cab 2026",
      "sealdah to jamshedpur cab", "kolkata to deoghar cab"
    ],
    reviews: [
      { name: "Subir Das", text: "Hired RS Travel for Kolkata to Jamshedpur. The cab turned up right on time at Howrah and the ride was wonderfully smooth.", rating: 5 },
      { name: "Meena Kumari", text: "Took their Kolkata to Ranchi cab. Seasoned driver, chilled AC, and a very comfortable drive. Certainly booking again.", rating: 5 },
      { name: "Rakesh Gupta", text: "For Kolkata to Jharkhand runs, RS Travel is my top pick — reasonable, punctual, and spotless cars. Fully recommended!", rating: 5 }
    ]
  }
];

export function getCityBySlug(slug: string): CityData | undefined {
  return jharkhandCities.find(city => city.slug === slug);
}

export function getCitiesByTier(tier: 1 | 2 | 3): CityData[] {
  return jharkhandCities.filter(city => city.tier === tier);
}

export function getAllCitySlugs(): string[] {
  return jharkhandCities.map(city => city.slug);
}
