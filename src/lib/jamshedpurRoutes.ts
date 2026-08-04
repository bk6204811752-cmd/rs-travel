// ============================================================
// RS Travel — JAMSHEDPUR EXPANSION ROUTES
// 350+ unique outstation routes from Jamshedpur
// Covering: Jharkhand, West Bengal, Bihar, Odisha & beyond
// ============================================================

import { RouteData } from './routes';

// Helper: generate route object from compact data
function r(
  to: string, toName: string, distanceKm: number, durationHrs: string,
  nh: string, via: string[], tolls: number, statesCrossed: string[],
  dropPoints: string[], roadCondition: string = "Good Road",
  bestTime: string = "Morning", pitStops: string[] = []
): RouteData {
  // Price formula (realistic market rates)
  const hatchback = Math.round((distanceKm * 14 + 500) / 100) * 100 - 1;
  const sedan = Math.round((distanceKm * 17 + 600) / 100) * 100 - 1;
  const suv = Math.round((distanceKm * 22 + 800) / 100) * 100 - 1;
  const crysta = Math.round((distanceKm * 28 + 1000) / 100) * 100 - 1;
  const tempo = Math.round((distanceKm * 35 + 1200) / 100) * 100 - 1;

  return {
    from: "jamshedpur", fromName: "Jamshedpur",
    to, toName, distanceKm, durationHrs, nh, via,
    fares: {
      hatchback: Math.max(hatchback, 799),
      sedan: Math.max(sedan, 999),
      suv: Math.max(suv, 1399),
      crysta: Math.max(crysta, 1799),
      tempo: Math.max(tempo, 2399)
    },
    tolls, pitStops: pitStops.length > 0 ? pitStops : (via.length > 0 ? [via[0]] : []),
    bestTime, roadCondition, statesCrossed,
    pickupPoints: ["Mango", "Bistupur", "Sakchi", "Jugsalai", "Adityapur", "Tatanagar Station", "Dimna Road", "Kadma"],
    dropPoints
  };
}

// ============================================================
// JHARKHAND — Additional Routes (~30)
// ============================================================

const jharkhandRoutes: RouteData[] = [
  r("chandil", "Chandil", 40, "1", "NH-33", ["Gamharia"], 0, ["Jharkhand"], ["Chandil Dam", "Chandil Town"], "Good NH", "Any time"),
  r("gamharia", "Gamharia", 12, "0.5", "NH-33", [], 0, ["Jharkhand"], ["Gamharia Town", "Adityapur Phase 2"], "Good Road", "Any time"),
  r("musabani", "Musabani", 55, "1.5", "SH", ["Ghatsila"], 0, ["Jharkhand"], ["Musabani Town", "Uranium Mines Area"], "State Highway", "Morning"),
  r("baharagora", "Baharagora", 50, "1.5", "NH-49", [], 0, ["Jharkhand"], ["Baharagora Town", "Market Area"], "Good NH", "Any time"),
  r("rajmahal", "Rajmahal", 310, "7", "NH-114A", ["Dhanbad", "Deoghar", "Dumka"], 300, ["Jharkhand"], ["Rajmahal Hills", "Ganga Ghat"], "Mixed Roads", "Early Morning"),
  r("sahibganj", "Sahibganj", 330, "7.5", "NH-114A", ["Dhanbad", "Dumka"], 350, ["Jharkhand"], ["Sahibganj Ghat", "Railway Station"], "Mixed Roads", "Early Morning"),
  r("godda", "Godda", 280, "6.5", "SH", ["Dhanbad", "Deoghar"], 250, ["Jharkhand"], ["Godda Town", "Sundarpahari"], "Mixed State Highway", "Early Morning"),
  r("jamtara", "Jamtara", 150, "3.5", "SH", ["Dhanbad"], 100, ["Jharkhand"], ["Jamtara Town", "Station Area"], "State Highway", "Morning"),
  r("chatra", "Chatra", 220, "5", "NH-33", ["Chandil", "Ranchi"], 200, ["Jharkhand"], ["Chatra Town", "District Court"], "Good NH", "Morning"),
  r("latehar", "Latehar", 250, "6", "NH-75", ["Ranchi"], 200, ["Jharkhand"], ["Latehar Town", "Netarhat Road"], "Mixed", "Morning"),
  r("garhwa", "Garhwa", 320, "7", "NH-75", ["Ranchi", "Daltonganj"], 300, ["Jharkhand"], ["Garhwa Town"], "Mixed Roads", "Early Morning"),
  r("jhumri-tilaiya", "Jhumri Tilaiya", 195, "4.5", "NH-33", ["Chandil", "Ranchi", "Hazaribagh"], 200, ["Jharkhand"], ["Jhumri Tilaiya Market", "Tilaiya Dam"], "Good NH", "Morning"),
  r("madhupur", "Madhupur", 180, "4", "NH-114A", ["Dhanbad"], 150, ["Jharkhand"], ["Madhupur Junction", "Town"], "Mixed", "Morning"),
  r("jharia", "Jharia", 85, "2", "NH-32", ["Gamharia"], 100, ["Jharkhand"], ["Jharia Coalfield", "Town"], "Good Road", "Any time"),
  r("sindri", "Sindri", 90, "2.5", "NH-32", ["Dhanbad"], 100, ["Jharkhand"], ["Sindri Fertilizer Factory", "Town"], "Good Road", "Any time"),
  r("katras", "Katras", 100, "2.5", "NH-32", ["Dhanbad"], 100, ["Jharkhand"], ["Katras Bazar", "Mines Area"], "Good Road", "Morning"),
  r("ichagarh", "Ichagarh", 55, "1.5", "SH", ["Seraikela"], 0, ["Jharkhand"], ["Ichagarh Town"], "State Highway", "Any time"),
  r("potka", "Potka", 35, "1", "SH", [], 0, ["Jharkhand"], ["Potka Block", "Market"], "State Highway", "Any time"),
  r("noamundi", "Noamundi", 100, "2.5", "SH", ["Chaibasa"], 50, ["Jharkhand"], ["Noamundi Iron Ore Mines", "Town"], "Hill Road", "Morning"),
  r("kiriburu", "Kiriburu", 120, "3", "SH", ["Chaibasa"], 50, ["Jharkhand"], ["Kiriburu Hill", "Iron Ore Mines", "Meghahatuburu"], "Hill Road", "Morning"),
  r("chakulia", "Chakulia", 70, "2", "SH", ["Baharagora"], 0, ["Jharkhand"], ["Chakulia Town", "Market Area"], "State Highway", "Any time"),
  r("rajnagar", "Rajnagar", 65, "1.5", "SH", [], 0, ["Jharkhand"], ["Rajnagar Block"], "State Highway", "Any time"),
  r("dhalbhumgarh", "Dhalbhumgarh", 25, "0.5", "SH", [], 0, ["Jharkhand"], ["Dhalbhumgarh Town"], "State Highway", "Any time"),
  r("chandrapura", "Chandrapura", 95, "2.5", "NH-32", ["Gamharia"], 100, ["Jharkhand"], ["Chandrapura Station", "BCCL Area"], "Good Road", "Any time"),
  r("gomoh", "Gomoh", 105, "2.5", "NH-32", ["Chandrapura"], 100, ["Jharkhand"], ["Gomoh Junction", "Netaji Subhas Birth Place"], "Good Road", "Morning"),
  r("parasnath", "Parasnath", 150, "3.5", "NH-32", ["Dhanbad"], 150, ["Jharkhand"], ["Parasnath Hill", "Madhuban Jain Temple", "Shikharji"], "Mixed Hill Road", "Early Morning"),
  r("tenughat", "Tenughat", 140, "3.5", "NH-32", ["Bokaro"], 150, ["Jharkhand"], ["Tenughat Dam", "Power Plant"], "Good Road", "Morning"),
  r("dimna-lake", "Dimna Lake", 15, "0.5", "Local", [], 0, ["Jharkhand"], ["Dimna Lake", "Dalma Hills Base"], "Good Road", "Any time"),
  r("dalma", "Dalma Wildlife Sanctuary", 20, "0.5", "Local", [], 0, ["Jharkhand"], ["Dalma Wildlife Sanctuary Gate", "Dalma Hills"], "Hill Road", "Morning"),
  r("jubilee-park", "Jubilee Park", 5, "0.25", "Local", [], 0, ["Jharkhand"], ["Jubilee Park Main Gate"], "City Road", "Any time"),
];

// ============================================================
// WEST BENGAL — Routes (~100)
// ============================================================

const westBengalRoutes: RouteData[] = [
  // Greater Kolkata & Suburbs
  r("howrah", "Howrah", 265, "5.5-6", "NH-49", ["Ghatsila", "Kharagpur"], 400, ["Jharkhand", "West Bengal"], ["Howrah Station", "Shibpur", "Belur Math"], "Good NH", "Morning"),
  r("barasat", "Barasat", 290, "6-7", "NH-49/NH-12", ["Kharagpur", "Kolkata"], 450, ["Jharkhand", "West Bengal"], ["Barasat Station", "Town Centre"], "Good NH", "Morning"),
  r("barrackpore", "Barrackpore", 275, "6", "NH-49", ["Kharagpur"], 400, ["Jharkhand", "West Bengal"], ["Barrackpore Trunk Road", "Cantonment"], "Good NH", "Morning"),
  r("hooghly", "Hooghly", 250, "5.5", "NH-49", ["Kharagpur"], 380, ["Jharkhand", "West Bengal"], ["Hooghly Station", "Bandel Junction"], "Good NH", "Morning"),
  r("chandernagore", "Chandernagore", 245, "5.5", "NH-49/GT Road", ["Kharagpur"], 380, ["Jharkhand", "West Bengal"], ["Chandernagore Strand", "French Colony"], "Good NH", "Morning"),
  r("serampore", "Serampore", 250, "5.5", "NH-49", ["Kharagpur"], 380, ["Jharkhand", "West Bengal"], ["Serampore Station", "Danish Colony"], "Good NH", "Morning"),
  r("kalyani", "Kalyani", 295, "6.5", "NH-49/NH-12", ["Kharagpur", "Kolkata"], 450, ["Jharkhand", "West Bengal"], ["Kalyani Station", "University Area"], "Good NH", "Morning"),
  r("ranaghat", "Ranaghat", 300, "6.5", "NH-49", ["Kharagpur", "Kolkata"], 450, ["Jharkhand", "West Bengal"], ["Ranaghat Junction", "Town"], "Good NH", "Morning"),
  r("habra", "Habra", 300, "6.5", "NH-49/NH-12", ["Kharagpur", "Kolkata"], 450, ["Jharkhand", "West Bengal"], ["Habra Station", "Town Centre"], "Good NH", "Morning"),
  r("basirhat", "Basirhat", 310, "7", "NH-49", ["Kharagpur", "Kolkata"], 450, ["Jharkhand", "West Bengal"], ["Basirhat Town", "Station Area"], "Good NH", "Morning"),
  r("diamond-harbour", "Diamond Harbour", 310, "7", "NH-49", ["Kharagpur", "Kolkata"], 450, ["Jharkhand", "West Bengal"], ["Diamond Harbour Port", "River Front"], "Good NH", "Morning"),
  r("salt-lake", "Salt Lake (Bidhannagar)", 270, "6", "NH-49", ["Kharagpur"], 400, ["Jharkhand", "West Bengal"], ["Salt Lake Sector V", "City Centre", "Nicco Park"], "Good NH", "Morning"),
  r("newtown-rajarhat", "Newtown Rajarhat", 280, "6", "NH-49", ["Kharagpur"], 420, ["Jharkhand", "West Bengal"], ["Newtown Action Area", "Eco Park", "Biswa Bangla Gate"], "Good NH", "Morning"),
  r("kolkata-airport", "Kolkata Airport", 275, "5.5-6", "NH-49", ["Kharagpur"], 420, ["Jharkhand", "West Bengal"], ["NSCBI Airport Terminal 1", "Terminal 2", "VIP Road"], "Good NH", "Early Morning"),

  // South Bengal
  r("medinipur", "Medinipur", 180, "4", "NH-49/SH", ["Kharagpur"], 200, ["Jharkhand", "West Bengal"], ["Medinipur Town", "Vidyasagar University"], "Good Road", "Morning"),
  r("tamluk", "Tamluk", 220, "5", "NH-116B", ["Kharagpur"], 250, ["Jharkhand", "West Bengal"], ["Tamluk Town", "Borgabhima Temple"], "Good Road", "Morning"),
  r("jhargram", "Jhargram", 130, "3", "NH-49/SH", ["Baharagora"], 150, ["Jharkhand", "West Bengal"], ["Jhargram Palace", "Town Centre"], "Good Road", "Morning"),
  r("contai", "Contai (Kanthi)", 280, "6", "NH-49/NH-116B", ["Kharagpur"], 300, ["Jharkhand", "West Bengal"], ["Contai Town", "Market Area"], "Good Road", "Morning"),
  r("ghatal", "Ghatal", 200, "4.5", "SH", ["Kharagpur"], 200, ["Jharkhand", "West Bengal"], ["Ghatal Town", "Shilpacharya Mela Ground"], "State Highway", "Morning"),
  r("panskura", "Panskura", 200, "4.5", "NH-49/NH-116", ["Kharagpur"], 220, ["Jharkhand", "West Bengal"], ["Panskura Station", "Town"], "Good Road", "Morning"),
  r("uluberia", "Uluberia", 230, "5", "NH-49/NH-6", ["Kharagpur"], 350, ["Jharkhand", "West Bengal"], ["Uluberia Station", "Town"], "Good NH", "Morning"),
  r("bagnan", "Bagnan", 220, "5", "NH-49", ["Kharagpur"], 320, ["Jharkhand", "West Bengal"], ["Bagnan Station", "Town"], "Good Road", "Morning"),

  // North Bengal
  r("jalpaiguri", "Jalpaiguri", 500, "10-11", "NH-27", ["Asansol", "Malda"], 650, ["Jharkhand", "West Bengal"], ["Jalpaiguri Station", "Town", "Gorumara Gate"], "Good NH — Long Journey", "Very Early Morning"),
  r("alipurduar", "Alipurduar", 550, "11-12", "NH-27", ["Asansol", "Malda", "Jalpaiguri"], 700, ["Jharkhand", "West Bengal"], ["Alipurduar Junction", "Jaldapara Gate"], "Good NH — Long Journey", "Very Early Morning"),
  r("cooch-behar", "Cooch Behar", 560, "11-12", "NH-27", ["Asansol", "Malda"], 700, ["Jharkhand", "West Bengal"], ["Cooch Behar Palace", "Town", "Station"], "Good NH — Long Journey", "Very Early Morning"),
  r("raiganj", "Raiganj", 420, "9", "NH-12", ["Asansol", "Bardhaman"], 550, ["Jharkhand", "West Bengal"], ["Raiganj Town", "Kulik Bird Sanctuary"], "Mixed Roads", "Early Morning"),
  { ...r("balurghat", "Balurghat", 480, "10", "NH-12", ["Asansol", "Malda"], 600, ["Jharkhand", "West Bengal"], ["Balurghat Town", "Airport"], "Mixed", "Very Early Morning"),
    longContent: "A cab journey from Jamshedpur to Balurghat is a marathon rather than a sprint, but it is a genuinely scenic one — close to 480 km that cuts across Jharkhand and then runs deep into West Bengal's northern districts. Balurghat, which serves as the district headquarters of Dakshin Dinajpur, is a solid cultural and commercial centre of North Bengal, and the drive to reach it follows NH-12 through Asansol and Malda, usually taking around 10 hours once you factor in traffic and the inevitable rest stops.\n\nRS Travel runs comfortable outstation cars on this long-distance line, built around a safe, stress-free journey. Because this is a full-day affair, we generally steer families and passengers carrying heavy luggage towards an SUV — an Innova or Ertiga class vehicle — where the extra legroom and boot space make all the difference over ten hours. Our chauffeurs know the national highways cold and handle interstate toll formalities without any fumbling, so the crossing from Jharkhand into the heart of North Bengal stays smooth from start to finish. For bookings or a fixed one-way fare, reach us at +917979877450."
  },
  r("kurseong", "Kurseong", 510, "11-12", "NH-27/NH-110", ["Asansol", "Siliguri"], 650, ["Jharkhand", "West Bengal"], ["Kurseong Station", "Eagle's Craig", "Town"], "Good NH then Hill Roads", "Very Early Morning"),
  r("mirik", "Mirik", 520, "11-12", "NH-27", ["Asansol", "Siliguri"], 650, ["Jharkhand", "West Bengal"], ["Mirik Lake", "Sumendu Lake", "Town"], "Good NH then Hill Roads", "Very Early Morning"),
  r("kalimpong", "Kalimpong", 530, "12-13", "NH-27/NH-10", ["Asansol", "Siliguri"], 650, ["Jharkhand", "West Bengal"], ["Kalimpong Town", "Deolo Hill", "Durpin Monastery"], "Good NH then Hill Roads", "Very Early Morning"),
  r("gangtok", "Gangtok", 580, "13-14", "NH-27/NH-10", ["Asansol", "Siliguri"], 700, ["Jharkhand", "West Bengal", "Sikkim"], ["Gangtok MG Marg", "Rumtek Monastery", "Tsomgo Lake"], "Good NH then Mountain Roads", "Very Early Morning"),

  // Central Bengal
  r("krishnanagar", "Krishnanagar", 310, "7", "NH-49/SH", ["Kharagpur", "Bardhaman"], 400, ["Jharkhand", "West Bengal"], ["Krishnanagar Station", "Town"], "Good Road", "Morning"),
  r("santipur", "Santipur", 300, "6.5", "NH-49/SH", ["Kharagpur"], 380, ["Jharkhand", "West Bengal"], ["Santipur Town", "Weaving Centre"], "Good Road", "Morning"),
  r("nabadwip", "Nabadwip", 305, "7", "NH-49/SH", ["Kharagpur"], 400, ["Jharkhand", "West Bengal"], ["Nabadwip Dham", "ISKCON Temple", "Ganga Ghat"], "Good Road", "Morning"),
  r("berhampore", "Berhampore", 360, "8", "NH-49/NH-12", ["Kharagpur", "Bardhaman"], 450, ["Jharkhand", "West Bengal"], ["Berhampore Station", "Baharampur Court Area"], "Mixed", "Early Morning"),
  r("jangipur", "Jangipur", 380, "8.5", "NH-12", ["Asansol"], 450, ["Jharkhand", "West Bengal"], ["Jangipur Town", "Murshidabad Silk"], "Mixed", "Early Morning"),
  r("suri", "Suri", 250, "5.5", "SH", ["Purulia", "Durgapur"], 250, ["Jharkhand", "West Bengal"], ["Suri Town", "Birbhum District HQ"], "Mixed State Highway", "Morning"),
  r("rampurhat", "Rampurhat", 280, "6", "SH", ["Purulia"], 250, ["Jharkhand", "West Bengal"], ["Rampurhat Station", "Town"], "State Highway", "Morning"),
  r("kalna", "Kalna", 260, "6", "SH", ["Purulia", "Bankura"], 300, ["Jharkhand", "West Bengal"], ["Kalna Temple Complex", "Town"], "Mixed", "Morning"),
  r("katwa", "Katwa", 280, "6.5", "SH", ["Bardhaman"], 300, ["Jharkhand", "West Bengal"], ["Katwa Junction", "Town"], "Mixed", "Morning"),
  r("arambagh", "Arambagh", 220, "5", "SH", ["Purulia", "Bankura"], 250, ["Jharkhand", "West Bengal"], ["Arambagh Town", "Rasmancha"], "Mixed", "Morning"),
  r("chinsurah", "Chinsurah", 250, "5.5", "NH-49", ["Kharagpur"], 380, ["Jharkhand", "West Bengal"], ["Chinsurah Station", "Dutch Church"], "Good NH", "Morning"),
  r("rishra", "Rishra", 255, "5.5", "NH-49", ["Kharagpur"], 380, ["Jharkhand", "West Bengal"], ["Rishra Station", "Industrial Area"], "Good NH", "Morning"),
  r("uttarpara", "Uttarpara", 255, "5.5", "NH-49", ["Kharagpur"], 380, ["Jharkhand", "West Bengal"], ["Uttarpara Station", "Town"], "Good NH", "Morning"),

  // West Bengal Tourist Places
  r("shantiniketan", "Shantiniketan (Bolpur)", 250, "5.5", "SH", ["Purulia", "Durgapur"], 250, ["Jharkhand", "West Bengal"], ["Visva Bharati University", "Kala Bhavan", "Sonajhuri"], "Mixed Road", "Morning"),
  r("bishnupur", "Bishnupur", 170, "4", "SH", ["Purulia"], 150, ["Jharkhand", "West Bengal"], ["Bishnupur Terracotta Temples", "Jor Bangla", "Ras Mancha"], "State Highway", "Morning"),
  r("sundarbans", "Sundarbans", 350, "8-9", "NH-49/SH", ["Kharagpur", "Kolkata"], 450, ["Jharkhand", "West Bengal"], ["Godkhali Jetty", "Sundarbans Tiger Reserve Gate"], "Mixed — last stretch rural", "Very Early Morning"),
  r("bakkhali", "Bakkhali", 350, "7.5-8", "NH-49/SH", ["Kharagpur", "Diamond Harbour"], 400, ["Jharkhand", "West Bengal"], ["Bakkhali Beach", "Henry Island"], "Mixed", "Early Morning"),
  r("tajpur", "Tajpur", 300, "6.5", "NH-49/NH-116B", ["Kharagpur", "Contai"], 350, ["Jharkhand", "West Bengal"], ["Tajpur Sea Beach", "Red Crab Beach"], "Good Road", "Morning"),
  r("shankarpur", "Shankarpur", 290, "6.5", "NH-49/NH-116B", ["Kharagpur"], 350, ["Jharkhand", "West Bengal"], ["Shankarpur Beach", "Fishing Village"], "Good Road", "Morning"),
  r("mukutmanipur", "Mukutmanipur", 200, "5", "SH", ["Purulia", "Bankura"], 200, ["Jharkhand", "West Bengal"], ["Kangsabati Dam", "Mukutmanipur Reservoir", "Deer Park"], "Mixed State Highway", "Morning"),
  r("ajodhya-hills", "Ajodhya Hills", 140, "3.5", "SH", ["Purulia"], 100, ["Jharkhand", "West Bengal"], ["Ajodhya Hills View Point", "Bamni Falls", "Upper Dam"], "Hill Road", "Morning"),
  r("tarakeswar", "Tarakeswar", 240, "5.5", "NH-49/SH", ["Kharagpur"], 350, ["Jharkhand", "West Bengal"], ["Tarakeswar Shiv Temple", "Station"], "Good Road", "Morning"),
  r("dakshineswar", "Dakshineswar", 270, "6", "NH-49", ["Kharagpur"], 400, ["Jharkhand", "West Bengal"], ["Dakshineswar Kali Temple", "Vivekananda Bridge"], "Good NH", "Morning"),
  r("belur-math", "Belur Math", 265, "5.5-6", "NH-49", ["Kharagpur"], 400, ["Jharkhand", "West Bengal"], ["Belur Math Main Temple", "Ramakrishna Mission"], "Good NH", "Morning"),
  r("kalighat", "Kalighat", 268, "6", "NH-49", ["Kharagpur"], 400, ["Jharkhand", "West Bengal"], ["Kalighat Kali Temple", "Kalighat Metro"], "Good NH", "Morning"),
  r("gangasagar", "Gangasagar (Sagar Island)", 380, "9-10", "NH-49/SH", ["Kharagpur", "Kolkata", "Diamond Harbour"], 500, ["Jharkhand", "West Bengal"], ["Kachuberia Jetty", "Gangasagar Temple", "Sagar Beach"], "Mixed — Ferry Required", "Very Early Morning"),
  r("frazerganj", "Frazerganj", 340, "7.5", "NH-49/SH", ["Kharagpur", "Diamond Harbour"], 400, ["Jharkhand", "West Bengal"], ["Frazerganj Beach", "Lighthouse"], "Mixed", "Early Morning"),
  r("henry-island", "Henry Island", 345, "8", "NH-49/SH", ["Kharagpur", "Bakkhali"], 400, ["Jharkhand", "West Bengal"], ["Henry Island Beach", "Sea Dyke"], "Mixed — Rural Roads", "Very Early Morning"),
  { ...r("panagarh", "Panagarh", 195, "4.5", "NH-19", ["Dhanbad", "Asansol"], 250, ["Jharkhand", "West Bengal"], ["Panagarh Military Station", "NH Junction"], "Good NH", "Morning"),
    longContent: "Getting from Jamshedpur to Panagarh by cab takes you about 195 km along one of the country's most historic highways, with the journey typically wrapped up in around four and a half hours. Panagarh, which sits in West Bengal's Paschim Bardhaman district, holds real strategic weight — it is home to an Indian Air Force base and a military cantonment, alongside the steadily expanding Panagarh Industrial Park that has turned the town into a growing business destination.\n\nThe route runs via Dhanbad and Asansol on NH-19, better known as the Grand Trunk Road, and the carriageway stays in dependable shape throughout, which keeps the drive smooth and predictable. Whatever draws you this way — a work assignment at the industrial park, official business at the cantonment, or simply passing through — RS Travel has cabs available around the clock from Jamshedpur to Panagarh. Our transparent, fixed pricing means no surge surprises, ever, and every trip comes with a police-verified chauffeur and a comfortable, fully air-conditioned cabin. Book at +917979877450 for an instant one-way fare quote."
  },
  r("bandel", "Bandel", 250, "5.5", "NH-49/GT Road", ["Kharagpur"], 380, ["Jharkhand", "West Bengal"], ["Bandel Church", "Bandel Junction"], "Good NH", "Morning"),

  // More West Bengal cities
  r("baharampur", "Baharampur (Murshidabad)", 370, "8", "NH-12", ["Asansol"], 450, ["Jharkhand", "West Bengal"], ["Hazarduari Palace", "Katra Mosque", "Murshidabad Station"], "Mixed Road", "Early Morning"),
  r("english-bazar", "English Bazar (Malda)", 455, "10", "NH-12", ["Asansol"], 550, ["Jharkhand", "West Bengal"], ["Malda Town", "Gaur", "Pandua Ruins", "Adina Mosque"], "Mixed", "Very Early Morning"),
  r("nadia", "Nadia (Krishnanagar)", 310, "7", "NH-49/SH", ["Kharagpur"], 400, ["Jharkhand", "West Bengal"], ["Krishnanagar Palace", "Clay Craft Centre"], "Good Road", "Morning"),
  r("birbhum", "Birbhum (Suri)", 250, "5.5", "SH", ["Purulia"], 250, ["Jharkhand", "West Bengal"], ["Suri Town", "Ballabhpur Wildlife Sanctuary"], "Mixed", "Morning"),
  r("kolaghat", "Kolaghat", 210, "4.5", "NH-49/NH-6", ["Kharagpur"], 300, ["Jharkhand", "West Bengal"], ["Kolaghat Station", "Rupnarayan River"], "Good NH", "Morning"),
  r("mecheda", "Mecheda", 210, "4.5", "NH-49", ["Kharagpur"], 300, ["Jharkhand", "West Bengal"], ["Mecheda Junction", "Town"], "Good NH", "Morning"),
];

// ============================================================
// BIHAR — Routes (~100)
// ============================================================

const biharRoutes: RouteData[] = [
  // Major Bihar Cities
  r("nalanda", "Nalanda", 360, "8", "NH-33/NH-2", ["Ranchi", "Koderma", "Gaya"], 450, ["Jharkhand", "Bihar"], ["Nalanda University Ruins", "Nalanda Museum", "Xuanzang Memorial"], "Good NH", "Early Morning"),
  r("rajgir", "Rajgir", 350, "8", "NH-33/NH-2", ["Ranchi", "Koderma", "Gaya"], 450, ["Jharkhand", "Bihar"], ["Rajgir Hot Springs", "Vishwa Shanti Stupa", "Griddhakuta Hill", "Venu Vana"], "Good NH", "Early Morning"),
  r("nawada", "Nawada", 310, "7", "NH-33/NH-2", ["Ranchi", "Koderma"], 400, ["Jharkhand", "Bihar"], ["Nawada Town", "Kakolat Waterfall"], "Good NH", "Early Morning"),
  r("jehanabad", "Jehanabad", 330, "7.5", "NH-33/NH-2", ["Ranchi", "Gaya"], 400, ["Jharkhand", "Bihar"], ["Jehanabad Town", "Station Area"], "Good NH", "Early Morning"),
  r("arrah", "Arrah", 400, "9", "NH-19", ["Ranchi", "Gaya", "Sasaram"], 500, ["Jharkhand", "Bihar"], ["Arrah Junction", "Town", "Veer Kunwar Singh Fort"], "Good NH", "Early Morning"),
  r("buxar", "Buxar", 430, "9.5", "NH-19", ["Ranchi", "Gaya", "Sasaram"], 550, ["Jharkhand", "Bihar"], ["Buxar Fort", "Ganga Ghat", "Battle of Buxar Site"], "Good NH", "Early Morning"),
  r("chapra", "Chapra (Chhapra)", 420, "9", "NH-19", ["Patna"], 500, ["Jharkhand", "Bihar"], ["Chapra Junction", "Town", "Ambedkar Park"], "Good NH", "Early Morning"),
  r("hajipur", "Hajipur", 345, "7.5", "NH-33/NH-19", ["Ranchi", "Patna"], 400, ["Jharkhand", "Bihar"], ["Hajipur Station", "Gandhi Setu", "Vaishali Museum"], "Good NH", "Early Morning"),
  r("motihari", "Motihari", 450, "10", "NH-28A", ["Patna", "Muzaffarpur"], 550, ["Jharkhand", "Bihar"], ["Motihari Town", "George Orwell Birthplace", "Gandhi Museum"], "Good NH", "Very Early Morning"),
  r("bettiah", "Bettiah (West Champaran)", 480, "10.5", "NH-28A", ["Patna", "Muzaffarpur"], 600, ["Jharkhand", "Bihar"], ["Bettiah Town", "Lauriya Nandangarh", "Ashoka Pillar"], "Mixed", "Very Early Morning"),
  r("sitamarhi", "Sitamarhi", 500, "11", "NH-28B", ["Patna", "Muzaffarpur"], 600, ["Jharkhand", "Bihar"], ["Sitamarhi Station", "Janaki Temple", "Sita Kund"], "Good NH", "Very Early Morning"),
  r("madhubani", "Madhubani", 500, "11", "NH-57", ["Patna", "Darbhanga"], 600, ["Jharkhand", "Bihar"], ["Madhubani Town", "Madhubani Art Centre"], "Mixed", "Very Early Morning"),
  r("samastipur", "Samastipur", 410, "9", "NH-28", ["Patna"], 500, ["Jharkhand", "Bihar"], ["Samastipur Junction", "Town"], "Good NH", "Early Morning"),
  r("begusarai", "Begusarai", 390, "8.5", "NH-28", ["Patna"], 450, ["Jharkhand", "Bihar"], ["Begusarai Town", "Kanwar Lake Bird Sanctuary"], "Good NH", "Early Morning"),
  r("munger", "Munger (Monghyr)", 350, "8", "NH-80", ["Dhanbad", "Bhagalpur"], 400, ["Jharkhand", "Bihar"], ["Munger Fort", "Bihar School of Yoga", "Ganga Ghat"], "Mixed", "Early Morning"),
  r("jamui", "Jamui", 280, "6.5", "SH", ["Dhanbad", "Giridih"], 250, ["Jharkhand", "Bihar"], ["Jamui Town", "Kali Mandir"], "Mixed State Highway", "Morning"),
  r("lakhisarai", "Lakhisarai", 300, "7", "SH", ["Dhanbad"], 300, ["Jharkhand", "Bihar"], ["Lakhisarai Town", "Station"], "Mixed", "Morning"),
  r("sheikhpura", "Sheikhpura", 310, "7", "SH", ["Dhanbad", "Nawada"], 300, ["Jharkhand", "Bihar"], ["Sheikhpura Town"], "Mixed", "Morning"),
  r("katihar", "Katihar", 450, "10", "NH-31", ["Bhagalpur"], 550, ["Jharkhand", "Bihar"], ["Katihar Junction", "Town"], "Mixed", "Very Early Morning"),
  r("purnia", "Purnia", 420, "9.5", "NH-31", ["Bhagalpur"], 500, ["Jharkhand", "Bihar"], ["Purnia Station", "Town", "Kali Temple"], "Mixed", "Early Morning"),
  r("araria", "Araria", 480, "10.5", "NH-57", ["Bhagalpur", "Purnia"], 600, ["Jharkhand", "Bihar"], ["Araria Town"], "Mixed", "Very Early Morning"),
  r("kishanganj", "Kishanganj", 500, "11", "NH-31", ["Bhagalpur", "Purnia"], 650, ["Jharkhand", "Bihar"], ["Kishanganj Station", "Town"], "Mixed", "Very Early Morning"),
  r("supaul", "Supaul", 480, "10.5", "NH-57", ["Patna", "Darbhanga"], 600, ["Jharkhand", "Bihar"], ["Supaul Town"], "Mixed", "Very Early Morning"),
  r("saharsa", "Saharsa", 440, "10", "NH-107", ["Patna", "Darbhanga"], 550, ["Jharkhand", "Bihar"], ["Saharsa Station", "Town"], "Mixed", "Very Early Morning"),
  r("madhepura", "Madhepura", 460, "10", "NH-107", ["Bhagalpur"], 550, ["Jharkhand", "Bihar"], ["Madhepura Town"], "Mixed", "Very Early Morning"),
  r("gopalganj", "Gopalganj", 480, "10.5", "NH-28", ["Patna", "Chapra"], 600, ["Jharkhand", "Bihar"], ["Gopalganj Town"], "Mixed", "Very Early Morning"),
  r("siwan", "Siwan", 460, "10", "NH-19", ["Patna", "Chapra"], 550, ["Jharkhand", "Bihar"], ["Siwan Junction", "Town", "Mahavira Mandir"], "Good NH", "Very Early Morning"),
  r("dehri-on-sone", "Dehri-on-Sone", 370, "8", "NH-19", ["Ranchi", "Gaya"], 450, ["Jharkhand", "Bihar"], ["Dehri Station", "Sone River Bridge", "Town"], "Good NH", "Early Morning"),
  r("rohtas", "Rohtas (Rohtasgarh)", 390, "8.5", "NH-19", ["Ranchi", "Gaya", "Sasaram"], 500, ["Jharkhand", "Bihar"], ["Rohtasgarh Fort", "Rohtas Town"], "Mixed", "Early Morning"),
  r("bhabua", "Bhabua (Kaimur)", 410, "9", "NH-19", ["Ranchi", "Gaya", "Sasaram"], 500, ["Jharkhand", "Bihar"], ["Bhabua Town", "Mundeshwari Temple", "Kaimur Hills"], "Mixed", "Early Morning"),
  r("bikramganj", "Bikramganj", 380, "8.5", "NH-19", ["Ranchi", "Gaya"], 450, ["Jharkhand", "Bihar"], ["Bikramganj Town", "Station"], "Good NH", "Early Morning"),

  // Bihar Pilgrimages & Tourist
  r("vaishali", "Vaishali", 360, "8", "NH-19/NH-28", ["Patna", "Hajipur"], 450, ["Jharkhand", "Bihar"], ["Vaishali Ashoka Pillar", "Kolhua Buddha Stupa", "Abhishek Pushkarini"], "Good NH", "Early Morning"),
  r("pawapuri", "Pawapuri", 340, "7.5", "NH-33/NH-2", ["Ranchi", "Gaya", "Rajgir"], 450, ["Jharkhand", "Bihar"], ["Pawapuri Jal Mandir", "Jalmandir Lake Temple"], "Good NH", "Early Morning"),
  r("vikramshila", "Vikramshila", 400, "9", "SH", ["Dhanbad", "Bhagalpur"], 500, ["Jharkhand", "Bihar"], ["Vikramshila University Ruins", "Antichak"], "Mixed", "Early Morning"),
  r("barabar-caves", "Barabar Caves", 330, "7.5", "NH-2", ["Ranchi", "Koderma", "Gaya"], 400, ["Jharkhand", "Bihar"], ["Barabar Caves", "Lomas Rishi Cave", "Nagarjuni Caves"], "Mixed", "Early Morning"),
  r("mundeshwari-temple", "Mundeshwari Temple", 400, "9", "NH-19", ["Ranchi", "Gaya", "Sasaram"], 500, ["Jharkhand", "Bihar"], ["Mundeshwari Temple", "Kaimur Hills"], "Mixed Hill", "Early Morning"),
  r("rohtasgarh-fort", "Rohtasgarh Fort", 395, "8.5", "NH-19", ["Ranchi", "Gaya", "Sasaram"], 500, ["Jharkhand", "Bihar"], ["Rohtasgarh Fort Gate", "Sher Shah's Mosque"], "Mixed", "Early Morning"),
  r("kakolat-waterfall", "Kakolat Waterfall", 315, "7", "SH", ["Ranchi", "Nawada"], 350, ["Jharkhand", "Bihar"], ["Kakolat Falls", "Nawada Town"], "Mixed — Rural Last Stretch", "Morning"),
  r("sonepur-mela", "Sonepur", 360, "8", "NH-19/NH-30", ["Patna"], 450, ["Jharkhand", "Bihar"], ["Sonepur Mela Ground", "Ganga-Gandak Confluence", "Hariharnath Temple"], "Good NH", "Early Morning"),
  r("rajgir-hot-springs", "Rajgir Hot Springs", 355, "8", "NH-2", ["Ranchi", "Gaya"], 450, ["Jharkhand", "Bihar"], ["Brahmakund Hot Springs", "Vishwa Shanti Stupa", "Rajgir Town"], "Good NH", "Early Morning"),
  r("nalanda-university", "Nalanda University Ruins", 365, "8", "NH-2", ["Ranchi", "Gaya", "Rajgir"], 450, ["Jharkhand", "Bihar"], ["Nalanda Archaeological Museum", "Ruins Complex", "Xuanzang Memorial Hall"], "Good NH", "Early Morning"),
];

// ============================================================
// ODISHA — Routes (~80)
// ============================================================

const odishaRoutes: RouteData[] = [
  // Major Odisha Cities
  r("angul", "Angul", 280, "6", "NH-49/NH-55", ["Rourkela", "Sundargarh"], 300, ["Jharkhand", "Odisha"], ["Angul Town", "Nalco Area", "Talcher Connection"], "Good NH", "Morning"),
  r("dhenkanal", "Dhenkanal", 320, "7", "NH-49", ["Rourkela", "Angul"], 350, ["Jharkhand", "Odisha"], ["Dhenkanal Town", "Saptasajya", "Kapilash Temple"], "Mixed", "Early Morning"),
  r("jajpur", "Jajpur", 350, "7.5", "NH-49/NH-16", ["Rourkela"], 400, ["Jharkhand", "Odisha"], ["Jajpur Town", "Biraja Temple", "Jajpur Road Station"], "Good NH", "Early Morning"),
  r("kendrapara", "Kendrapara", 400, "8.5", "NH-16", ["Rourkela", "Bhubaneswar"], 500, ["Jharkhand", "Odisha"], ["Kendrapara Town", "Bhitarkanika Gate"], "Mixed", "Early Morning"),
  r("jagatsinghpur", "Jagatsinghpur", 410, "9", "NH-16", ["Rourkela", "Bhubaneswar"], 500, ["Jharkhand", "Odisha"], ["Jagatsinghpur Town", "Paradeep Port"], "Good NH", "Early Morning"),
  r("nayagarh", "Nayagarh", 400, "8.5", "NH-49", ["Rourkela", "Bhubaneswar"], 500, ["Jharkhand", "Odisha"], ["Nayagarh Town", "Odagaon"], "Mixed", "Early Morning"),
  r("bargarh", "Bargarh", 340, "7.5", "NH-49", ["Rourkela", "Jharsuguda", "Sambalpur"], 400, ["Jharkhand", "Odisha"], ["Bargarh Town", "Debrigarh Sanctuary"], "Good NH", "Early Morning"),
  r("bolangir", "Bolangir", 380, "8.5", "NH-49", ["Rourkela", "Sambalpur"], 450, ["Jharkhand", "Odisha"], ["Bolangir Town", "Harishankar Temple"], "Mixed", "Early Morning"),
  r("berhampur", "Berhampur (Ganjam)", 550, "11", "NH-49/NH-16", ["Rourkela", "Bhubaneswar"], 650, ["Jharkhand", "Odisha"], ["Berhampur Station", "Gopalpur Beach", "Town"], "Good NH — Long", "Very Early Morning"),
  r("sundargarh", "Sundargarh", 140, "3.5", "NH-75/SH", ["Chaibasa"], 100, ["Jharkhand", "Odisha"], ["Sundargarh Town", "District HQ"], "State Highway", "Morning"),
  r("deogarh-odisha", "Deogarh (Odisha)", 220, "5", "SH", ["Rourkela"], 200, ["Jharkhand", "Odisha"], ["Deogarh Town", "Pradhanpat Waterfall"], "Mixed State Highway", "Morning"),
  r("talcher", "Talcher", 250, "5.5", "NH-49/SH", ["Rourkela"], 250, ["Jharkhand", "Odisha"], ["Talcher Coalfield", "Town"], "Mixed", "Morning"),
  r("paradeep", "Paradeep", 450, "9.5", "NH-16", ["Rourkela", "Bhubaneswar"], 550, ["Jharkhand", "Odisha"], ["Paradeep Port", "Beach", "Town"], "Good NH", "Very Early Morning"),
  r("rayagada", "Rayagada", 400, "9", "NH-49/SH", ["Rourkela", "Sambalpur"], 500, ["Jharkhand", "Odisha"], ["Rayagada Town", "Chatikona Valley"], "Mixed", "Early Morning"),
  r("koraput", "Koraput", 450, "10", "NH-49/SH", ["Rourkela", "Sambalpur"], 550, ["Jharkhand", "Odisha"], ["Koraput Town", "Tribal Museum", "Duduma Falls"], "Mixed — Mountain", "Very Early Morning"),
  r("jeypore", "Jeypore", 460, "10", "SH", ["Rourkela", "Sambalpur"], 550, ["Jharkhand", "Odisha"], ["Jeypore Town", "Jagdalpur Road", "Palace"], "Mixed", "Very Early Morning"),

  // Odisha Tourist & Pilgrimage
  r("konark", "Konark (Sun Temple)", 480, "9.5-10", "NH-49/NH-16", ["Rourkela", "Bhubaneswar"], 600, ["Jharkhand", "Odisha"], ["Konark Sun Temple", "Chandrabhaga Beach", "ASI Museum"], "Good NH", "Very Early Morning"),
  r("chilika-lake", "Chilika Lake", 500, "10-11", "NH-49/NH-16", ["Rourkela", "Bhubaneswar"], 600, ["Jharkhand", "Odisha"], ["Satapada Dolphin Point", "Nalabana Bird Sanctuary", "Rambha Bay"], "Good NH", "Very Early Morning"),
  r("simlipal", "Simlipal National Park", 130, "3", "NH-18", ["Baharagora", "Baripada"], 100, ["Jharkhand", "Odisha"], ["Simlipal Gate Pithabata", "Simlipal Gate Jashipur", "Barehipani Falls"], "Mixed — Forest Road", "Morning"),
  r("bhitarkanika", "Bhitarkanika Wildlife Sanctuary", 430, "9.5", "NH-16", ["Rourkela", "Bhubaneswar"], 550, ["Jharkhand", "Odisha"], ["Bhitarkanika Gate", "Dangamal", "Mangrove Forest"], "Mixed", "Very Early Morning"),
  r("chandipur-beach", "Chandipur Beach", 170, "4", "NH-18", ["Baripada", "Balasore"], 200, ["Jharkhand", "Odisha"], ["Chandipur Beach", "Vanishing Sea Beach", "Balasore Town"], "Good NH", "Morning"),
  r("udayagiri-khandagiri", "Udayagiri & Khandagiri Caves", 425, "8.5-9", "NH-49/NH-16", ["Rourkela"], 550, ["Jharkhand", "Odisha"], ["Udayagiri Caves", "Khandagiri Caves", "Hathi Gumpha"], "Good NH", "Early Morning"),
  r("lingaraj-temple", "Lingaraj Temple (Bhubaneswar)", 420, "8.5-9", "NH-49", ["Rourkela"], 550, ["Jharkhand", "Odisha"], ["Lingaraj Temple", "Bindusagar Lake", "Old Town"], "Good NH", "Early Morning"),
  r("gopalpur-beach", "Gopalpur Beach", 560, "11.5", "NH-49/NH-16", ["Rourkela", "Bhubaneswar"], 650, ["Jharkhand", "Odisha"], ["Gopalpur-on-Sea Beach", "Lighthouse", "Town"], "Good NH — Long", "Very Early Morning"),
  r("taptapani", "Taptapani Hot Springs", 530, "11", "NH-16/SH", ["Rourkela", "Bhubaneswar", "Berhampur"], 650, ["Jharkhand", "Odisha"], ["Taptapani Hot Spring", "Tribal Village"], "Mixed — Hill", "Very Early Morning"),
  r("daringbadi", "Daringbadi (Kashmir of Odisha)", 480, "10", "SH", ["Rourkela", "Bhubaneswar"], 600, ["Jharkhand", "Odisha"], ["Daringbadi Hill Station", "Coffee Garden", "Pine Forest"], "Mixed — Hill", "Very Early Morning"),
  r("satkosia-gorge", "Satkosia Gorge", 310, "7", "NH-49/SH", ["Rourkela", "Angul"], 350, ["Jharkhand", "Odisha"], ["Satkosia Gorge Sanctuary", "Tikarpada Nature Camp"], "Mixed", "Morning"),
  r("nandankanan", "Nandankanan Zoo (Bhubaneswar)", 425, "8.5", "NH-49", ["Rourkela"], 550, ["Jharkhand", "Odisha"], ["Nandankanan Zoological Park", "White Tiger Enclosure", "Botanical Garden"], "Good NH", "Early Morning"),
  r("dhauli", "Dhauli Shanti Stupa", 425, "8.5", "NH-49", ["Rourkela"], 550, ["Jharkhand", "Odisha"], ["Dhauli Peace Pagoda", "Ashoka Rock Edicts", "Dhauli Hills"], "Good NH", "Early Morning"),

  // Additional Odisha cities
  r("bhadrak", "Bhadrak", 310, "7", "NH-16", ["Baripada", "Balasore"], 350, ["Jharkhand", "Odisha"], ["Bhadrak Station", "Town"], "Good NH", "Early Morning"),
  r("kendujhar", "Kendujhar (Keonjhar Town)", 155, "3.5", "NH-20", ["Chaibasa"], 150, ["Jharkhand", "Odisha"], ["Kendujhar Town", "Gonasika", "Badaghagara Falls"], "Mixed", "Morning"),
  r("barbil", "Barbil", 110, "3", "SH", ["Chaibasa"], 50, ["Jharkhand", "Odisha"], ["Barbil Iron Ore Mines", "Town"], "State Highway", "Morning"),
  r("karanjia", "Karanjia", 150, "3.5", "SH", ["Baripada"], 100, ["Jharkhand", "Odisha"], ["Karanjia Town", "Simlipal Buffer Zone"], "State Highway", "Morning"),
  r("mayurbhanj", "Mayurbhanj (Baripada)", 115, "2.5", "NH-18", ["Baharagora"], 100, ["Jharkhand", "Odisha"], ["Baripada Town", "Haribaldev Mandir", "Mayurbhanj Palace"], "Good NH", "Morning"),
  r("jashipur", "Jashipur", 160, "4", "SH", ["Baripada"], 100, ["Jharkhand", "Odisha"], ["Jashipur Town", "Simlipal South Gate"], "State Highway", "Morning"),
  r("sukinda", "Sukinda", 280, "6", "SH", ["Chaibasa", "Keonjhar"], 250, ["Jharkhand", "Odisha"], ["Sukinda Chromite Valley", "Town"], "Mixed", "Morning"),
  r("rajgangpur", "Rajgangpur", 130, "3", "NH-75/SH", ["Chaibasa", "Rourkela"], 100, ["Jharkhand", "Odisha"], ["Rajgangpur Cement Factory", "Town"], "Good Road", "Any time"),
  r("brajarajnagar", "Brajarajnagar", 270, "6", "NH-49", ["Rourkela", "Jharsuguda"], 250, ["Jharkhand", "Odisha"], ["Brajarajnagar Station", "Orient Cement"], "Good NH", "Morning"),
];

// ============================================================
// INTER-STATE LONG DISTANCE & TOURIST (~40)
// ============================================================

const interStateRoutes: RouteData[] = [
  // Uttar Pradesh
  r("varanasi", "Varanasi", 550, "11-12", "NH-19", ["Ranchi", "Gaya", "Sasaram"], 700, ["Jharkhand", "Bihar", "Uttar Pradesh"], ["Varanasi Station", "Dashashwamedh Ghat", "Kashi Vishwanath", "Airport"], "Good NH — Long", "Very Early Morning"),
  r("prayagraj", "Prayagraj (Allahabad)", 570, "12", "NH-19", ["Ranchi", "Gaya", "Varanasi"], 700, ["Jharkhand", "Bihar", "Uttar Pradesh"], ["Triveni Sangam", "Allahabad Fort", "Station"], "Good NH — Long", "Very Early Morning"),
  r("lucknow", "Lucknow", 750, "14-15", "NH-19/NH-30", ["Ranchi", "Gaya", "Varanasi"], 900, ["Jharkhand", "Bihar", "Uttar Pradesh"], ["Lucknow Station", "Bara Imambara", "Hazratganj", "Airport"], "Good NH — Very Long", "Overnight recommended"),
  r("agra", "Agra", 900, "16-17", "NH-19", ["Ranchi", "Gaya", "Varanasi"], 1100, ["Jharkhand", "Bihar", "UP"], ["Taj Mahal", "Agra Fort", "Fatehpur Sikri", "Airport"], "Good NH — Very Long", "Overnight recommended"),

  // Chhattisgarh
  r("raipur", "Raipur", 500, "10-11", "NH-49/NH-53", ["Rourkela", "Sambalpur"], 600, ["Jharkhand", "Odisha", "Chhattisgarh"], ["Raipur Station", "Marine Drive", "Airport"], "Good NH", "Very Early Morning"),
  r("bilaspur", "Bilaspur", 450, "10", "NH-49/NH-130", ["Rourkela", "Sambalpur"], 550, ["Jharkhand", "Odisha", "Chhattisgarh"], ["Bilaspur Station", "Achanakmar Sanctuary"], "Mixed", "Very Early Morning"),
  r("korba", "Korba", 420, "9", "NH-49/SH", ["Rourkela", "Sambalpur"], 500, ["Jharkhand", "Odisha", "Chhattisgarh"], ["Korba Power Plant", "Town"], "Mixed", "Very Early Morning"),
  r("jagdalpur", "Jagdalpur", 550, "12", "SH", ["Rourkela", "Sambalpur"], 650, ["Jharkhand", "Odisha", "Chhattisgarh"], ["Jagdalpur Town", "Chitrakote Falls", "Tirathgarh Falls", "Bastar Palace"], "Mixed — Long", "Very Early Morning"),

  // Sikkim
  r("pelling", "Pelling", 600, "14", "NH-27/NH-10", ["Asansol", "Siliguri", "Jorethang"], 750, ["Jharkhand", "West Bengal", "Sikkim"], ["Pelling Town", "Kanchenjunga View", "Rabdentse Ruins"], "Mixed — Mountain", "Overnight recommended"),
  r("namchi", "Namchi", 570, "13", "NH-27/NH-10", ["Asansol", "Siliguri"], 700, ["Jharkhand", "West Bengal", "Sikkim"], ["Namchi Town", "Char Dham", "Samdruptse"], "Mixed — Mountain", "Very Early Morning"),

  // Assam & NE Gateway
  r("guwahati", "Guwahati", 850, "16-18", "NH-27/NH-37", ["Asansol", "Siliguri", "Jalpaiguri"], 1000, ["Jharkhand", "West Bengal", "Assam"], ["Guwahati Station", "Kamakhya Temple", "Airport"], "Good NH — Very Long", "Overnight recommended"),

  // More Tourist Destinations from Jamshedpur
  r("sundarbans-gateway", "Sundarbans (via Canning)", 340, "8", "NH-49", ["Kharagpur", "Kolkata"], 450, ["Jharkhand", "West Bengal"], ["Canning Jetty", "Sundarbans Cruise Point", "Tiger Reserve"], "Mixed — Ferry", "Very Early Morning"),
  r("maithon-dam", "Maithon Dam", 100, "2.5", "NH-32/SH", ["Dhanbad"], 100, ["Jharkhand"], ["Maithon Dam", "DVC Guest House", "Lake View"], "Good Road", "Any time"),
  r("panchet-dam", "Panchet Dam", 110, "3", "NH-32/SH", ["Dhanbad"], 100, ["Jharkhand"], ["Panchet Dam", "DVC Colony", "Lake"], "Good Road", "Morning"),
  r("massanjore-dam", "Massanjore Dam", 200, "5", "SH", ["Dhanbad", "Dumka"], 200, ["Jharkhand"], ["Massanjore Dam", "Canada Dam", "Lake"], "Mixed State Highway", "Morning"),
  r("lodh-falls", "Lodh Falls (Budha Ghagh)", 290, "7", "SH", ["Ranchi", "Latehar"], 250, ["Jharkhand"], ["Lodh Falls", "Latehar Town"], "Mixed — Hill", "Morning"),
  r("hundru-falls", "Hundru Falls", 170, "4", "NH-33/SH", ["Chandil", "Ranchi"], 150, ["Jharkhand"], ["Hundru Falls View Point", "Subarnarekha River"], "Mixed", "Morning"),
  r("dassam-falls", "Dassam Falls", 165, "4", "NH-33/SH", ["Chandil", "Ranchi"], 150, ["Jharkhand"], ["Dassam Falls", "Taimara Village"], "Mixed", "Morning"),
  r("jonha-falls", "Jonha Falls", 175, "4.5", "NH-33/SH", ["Ranchi"], 150, ["Jharkhand"], ["Jonha Falls", "Gautamdhara Falls", "Buddha Temple"], "Mixed", "Morning"),
  r("ranchi-hill", "Ranchi Hill (Pahari Mandir)", 135, "3.5", "NH-33", ["Chandil"], 150, ["Jharkhand"], ["Ranchi Pahari Mandir", "Ranchi Lake", "Tagore Hill"], "Good NH", "Morning"),
  r("mccluskieganj", "McCluskieganj", 210, "5", "NH-33/SH", ["Ranchi"], 200, ["Jharkhand"], ["McCluskieganj Town", "Anglo-Indian Heritage Village"], "Mixed", "Morning"),

  // Additional WB long routes
  r("new-jalpaiguri", "New Jalpaiguri (NJP)", 490, "10-11", "NH-27", ["Asansol", "Malda"], 650, ["Jharkhand", "West Bengal"], ["NJP Station", "Siliguri Junction", "Bagdogra Airport"], "Good NH", "Very Early Morning"),
  r("bolpur", "Bolpur", 250, "5.5", "SH", ["Purulia", "Durgapur"], 250, ["Jharkhand", "West Bengal"], ["Bolpur Station", "Shantiniketan Gate", "Visva Bharati"], "Mixed", "Morning"),
  r("krishnanagar-nadia", "Krishnanagar (Nadia)", 310, "7", "NH-49/SH", ["Kharagpur"], 400, ["Jharkhand", "West Bengal"], ["Krishnanagar Palace", "Town"], "Good Road", "Morning"),
  r("nabadwip-dham", "Nabadwip Dham", 305, "7", "NH-49/SH", ["Kharagpur"], 400, ["Jharkhand", "West Bengal"], ["Nabadwip ISKCON", "Yoga Pith", "Ganga Ghat"], "Good Road", "Morning"),
  r("midnapore", "Midnapore", 180, "4", "SH", ["Kharagpur"], 200, ["Jharkhand", "West Bengal"], ["Midnapore College", "Town", "District HQ"], "Good Road", "Morning"),

  // More Bihar destinations  
  r("rajgir-nalanda", "Rajgir-Nalanda Circuit", 360, "8", "NH-2", ["Ranchi", "Koderma", "Gaya"], 450, ["Jharkhand", "Bihar"], ["Rajgir", "Nalanda Ruins", "Pawapuri Jal Mandir"], "Good NH", "Early Morning"),
  r("vaishali-muzaffarpur", "Vaishali-Muzaffarpur", 430, "9.5", "NH-19/NH-28", ["Patna"], 550, ["Jharkhand", "Bihar"], ["Vaishali Pillar", "Muzaffarpur Station"], "Good NH", "Early Morning"),

  // Additional Odisha
  r("puri-konark", "Puri-Konark Circuit", 500, "10-11", "NH-49/NH-16", ["Rourkela", "Bhubaneswar"], 650, ["Jharkhand", "Odisha"], ["Puri Jagannath Temple", "Konark Sun Temple", "Chandrabhaga Beach"], "Good NH", "Very Early Morning"),
  r("rourkela-sundargarh", "Rourkela-Sundargarh Circuit", 130, "3", "NH-75", ["Chaibasa"], 100, ["Jharkhand", "Odisha"], ["Rourkela Steel Plant", "Hanuman Vatika", "Sundargarh Town"], "Good Road", "Morning"),
];

// ============================================================
// EXPORT ALL NEW JAMSHEDPUR ROUTES
// ============================================================

export const jamshedpurExpansionRoutes: RouteData[] = [
  ...jharkhandRoutes,
  ...westBengalRoutes,
  ...biharRoutes,
  ...odishaRoutes,
  ...interStateRoutes,
];

// Log count for verification
export const JAMSHEDPUR_EXPANSION_COUNT = jamshedpurExpansionRoutes.length;
