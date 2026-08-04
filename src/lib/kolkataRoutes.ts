// ============================================================
// RS Travel — KOLKATA EXPANSION ROUTES
// 80+ routes FROM Kolkata to Jharkhand & nearby destinations
// ============================================================

import { RouteData } from './routes';

function r(
  from: string, fromName: string, to: string, toName: string,
  distanceKm: number, durationHrs: string, nh: string, via: string[],
  tolls: number, statesCrossed: string[],
  pickupPoints: string[], dropPoints: string[],
  roadCondition: string = "Good Road", bestTime: string = "Morning",
  pitStops: string[] = []
): RouteData {
  const hatchback = Math.round((distanceKm * 14 + 500) / 100) * 100 - 1;
  const sedan = Math.round((distanceKm * 17 + 600) / 100) * 100 - 1;
  const suv = Math.round((distanceKm * 22 + 800) / 100) * 100 - 1;
  const crysta = Math.round((distanceKm * 28 + 1000) / 100) * 100 - 1;
  const tempo = Math.round((distanceKm * 35 + 1200) / 100) * 100 - 1;

  return {
    from, fromName, to, toName, distanceKm, durationHrs, nh, via,
    fares: {
      hatchback: Math.max(hatchback, 799),
      sedan: Math.max(sedan, 999),
      suv: Math.max(suv, 1399),
      crysta: Math.max(crysta, 1799),
      tempo: Math.max(tempo, 2399)
    },
    tolls, pitStops: pitStops.length > 0 ? pitStops : (via.length > 0 ? [via[0]] : []),
    bestTime, roadCondition, statesCrossed, pickupPoints, dropPoints
  };
}

const KOL_PICKUP = ["Howrah Station", "Sealdah Station", "Esplanade", "Salt Lake", "Rajarhat", "Kolkata Airport", "Park Street", "Gariahat", "Jadavpur", "Newtown"];

// ============================================================
// KOLKATA TO JHARKHAND
// ============================================================

const kolkataToJharkhand: RouteData[] = [
  r("kolkata", "Kolkata", "jamshedpur", "Jamshedpur", 260, "5-6", "NH-49", ["Uluberia", "Kharagpur", "Ghatsila"], 400, ["West Bengal", "Jharkhand"], KOL_PICKUP, ["Mango", "Bistupur", "Sakchi", "Tatanagar Station"], "Good NH roads, 4-lane", "Morning"),
  r("kolkata", "Kolkata", "ranchi", "Ranchi", 390, "7-8", "NH-33/NH-19", ["Durgapur", "Asansol", "Dhanbad"], 500, ["West Bengal", "Jharkhand"], KOL_PICKUP, ["Ranchi Station", "Doranda", "Lalpur", "Airport"], "Good NH roads", "Early Morning"),
  r("kolkata", "Kolkata", "dhanbad", "Dhanbad", 260, "5-6", "NH-19", ["Bardhaman", "Durgapur", "Asansol"], 400, ["West Bengal", "Jharkhand"], KOL_PICKUP, ["Dhanbad Station", "Bank More", "Jharia"], "Good NH-19 (GT Road)", "Morning"),
  r("kolkata", "Kolkata", "bokaro", "Bokaro Steel City", 290, "5.5-6.5", "NH-19/NH-32", ["Asansol", "Dhanbad"], 400, ["West Bengal", "Jharkhand"], KOL_PICKUP, ["Bokaro Sector 4", "Chas", "City Centre"], "Good NH", "Morning"),
  r("kolkata", "Kolkata", "deoghar", "Deoghar", 370, "7-8", "NH-19/NH-114A", ["Asansol", "Dhanbad", "Madhupur"], 450, ["West Bengal", "Jharkhand"], KOL_PICKUP, ["Baidyanath Dham", "Tower Chowk", "Jasidih Station"], "Good NH then state road", "Early Morning"),
  r("kolkata", "Kolkata", "hazaribagh", "Hazaribagh", 350, "7-8", "NH-19/NH-33", ["Asansol", "Dhanbad", "Bokaro"], 400, ["West Bengal", "Jharkhand"], KOL_PICKUP, ["Hazaribagh Lake", "Court Area", "Canary Hill"], "Good NH", "Early Morning"),
  r("kolkata", "Kolkata", "giridih", "Giridih", 320, "7-8", "NH-19/SH", ["Asansol", "Dhanbad"], 350, ["West Bengal", "Jharkhand"], KOL_PICKUP, ["Giridih Station", "Gandhi Chowk", "Parasnath"], "Mixed road", "Early Morning"),
  r("kolkata", "Kolkata", "dumka", "Dumka", 340, "7-8", "NH-14/SH", ["Asansol", "Dhanbad"], 350, ["West Bengal", "Jharkhand"], KOL_PICKUP, ["Dumka Town", "Station Road"], "State Highway — mixed", "Early Morning"),
  r("kolkata", "Kolkata", "chaibasa", "Chaibasa", 310, "6.5-7", "NH-49", ["Kharagpur", "Jamshedpur"], 400, ["West Bengal", "Jharkhand"], KOL_PICKUP, ["Chaibasa Town", "Court Area"], "Good NH", "Morning"),
  r("kolkata", "Kolkata", "adityapur", "Adityapur", 255, "5-6", "NH-49", ["Kharagpur", "Ghatsila"], 400, ["West Bengal", "Jharkhand"], KOL_PICKUP, ["Adityapur Industrial Area", "Gamharia"], "Good NH", "Morning"),
  r("kolkata", "Kolkata", "ramgarh", "Ramgarh", 330, "6.5-7", "NH-19/NH-33", ["Asansol", "Dhanbad", "Bokaro"], 400, ["West Bengal", "Jharkhand"], KOL_PICKUP, ["Ramgarh Cantt", "Patratu"], "Good NH", "Early Morning"),
  r("kolkata", "Kolkata", "koderma", "Koderma", 380, "7.5-8", "NH-19/NH-2", ["Asansol", "Dhanbad"], 450, ["West Bengal", "Jharkhand"], KOL_PICKUP, ["Koderma Town", "Jhumri Tilaiya"], "Good NH", "Early Morning"),
  r("kolkata", "Kolkata", "phusro", "Phusro", 280, "5.5-6", "NH-19/SH", ["Asansol", "Dhanbad"], 350, ["West Bengal", "Jharkhand"], KOL_PICKUP, ["Phusro Town"], "Good Road", "Morning"),
  r("kolkata", "Kolkata", "daltonganj", "Daltonganj", 500, "10-11", "NH-19/NH-75", ["Asansol", "Ranchi"], 550, ["West Bengal", "Jharkhand"], KOL_PICKUP, ["Daltonganj Town", "Medininagar"], "Mixed — long journey", "Very Early Morning"),
  r("kolkata", "Kolkata", "pakur", "Pakur", 350, "7-8", "NH-14", ["Asansol", "Dumka"], 400, ["West Bengal", "Jharkhand"], KOL_PICKUP, ["Pakur Town"], "Mixed State Highway", "Early Morning"),

  // Jharkhand tourist & pilgrimage from Kolkata
  r("kolkata", "Kolkata", "parasnath", "Parasnath", 310, "7", "NH-19/SH", ["Asansol", "Dhanbad"], 350, ["West Bengal", "Jharkhand"], KOL_PICKUP, ["Parasnath Hill", "Madhuban Jain Temple", "Shikharji"], "Mixed road", "Early Morning"),
  r("kolkata", "Kolkata", "netarhat", "Netarhat", 450, "9-10", "NH-19/NH-33", ["Ranchi", "Lohardaga"], 500, ["West Bengal", "Jharkhand"], KOL_PICKUP, ["Netarhat Hill Station", "Magnolia Point"], "Mixed hill road", "Very Early Morning"),
  r("kolkata", "Kolkata", "betla", "Betla National Park", 500, "10-11", "NH-19/NH-75", ["Ranchi", "Latehar"], 550, ["West Bengal", "Jharkhand"], KOL_PICKUP, ["Betla National Park Gate", "Betla Resort"], "Mixed — state highway", "Very Early Morning"),
  r("kolkata", "Kolkata", "patratu", "Patratu Valley", 340, "7", "NH-19/NH-33", ["Asansol", "Ramgarh"], 400, ["West Bengal", "Jharkhand"], KOL_PICKUP, ["Patratu Valley", "Patratu Dam"], "Good NH", "Early Morning"),
  r("kolkata", "Kolkata", "rajrappa", "Rajrappa Temple", 350, "7.5", "NH-19/NH-33", ["Asansol", "Bokaro"], 400, ["West Bengal", "Jharkhand"], KOL_PICKUP, ["Chhinnamasta Temple"], "Mixed", "Early Morning"),
  r("kolkata", "Kolkata", "hundru-falls", "Hundru Falls", 400, "8", "NH-33/SH", ["Jamshedpur", "Ranchi"], 450, ["West Bengal", "Jharkhand"], KOL_PICKUP, ["Hundru Falls View Point"], "Mixed", "Early Morning"),
  r("kolkata", "Kolkata", "dassam-falls", "Dassam Falls", 395, "8", "NH-33/SH", ["Jamshedpur", "Ranchi"], 450, ["West Bengal", "Jharkhand"], KOL_PICKUP, ["Dassam Falls"], "Mixed", "Early Morning"),
  r("kolkata", "Kolkata", "maithon-dam", "Maithon Dam", 280, "6", "NH-19/SH", ["Asansol", "Dhanbad"], 300, ["West Bengal", "Jharkhand"], KOL_PICKUP, ["Maithon Dam", "DVC Guest House"], "Good Road", "Morning"),
  r("kolkata", "Kolkata", "massanjore-dam", "Massanjore Dam", 350, "7.5", "SH", ["Dumka"], 350, ["West Bengal", "Jharkhand"], KOL_PICKUP, ["Massanjore Dam", "Canada Dam"], "Mixed State Highway", "Early Morning"),
  r("kolkata", "Kolkata", "chandil", "Chandil Dam", 210, "4.5", "NH-49/NH-33", ["Kharagpur"], 300, ["West Bengal", "Jharkhand"], KOL_PICKUP, ["Chandil Dam", "Chandil Town"], "Good NH", "Morning"),
  r("kolkata", "Kolkata", "ghatsila", "Ghatsila", 220, "4.5-5", "NH-49", ["Kharagpur"], 300, ["West Bengal", "Jharkhand"], KOL_PICKUP, ["Ghatsila Town", "Phuldungri"], "Good NH", "Morning"),
  r("kolkata", "Kolkata", "dalma", "Dalma Wildlife Sanctuary", 270, "5.5", "NH-49", ["Kharagpur", "Jamshedpur"], 400, ["West Bengal", "Jharkhand"], KOL_PICKUP, ["Dalma Wildlife Sanctuary Gate"], "Good NH", "Morning"),
  r("kolkata", "Kolkata", "dimna-lake", "Dimna Lake", 265, "5.5", "NH-49", ["Kharagpur", "Jamshedpur"], 400, ["West Bengal", "Jharkhand"], KOL_PICKUP, ["Dimna Lake", "Dalma Hills Base"], "Good NH", "Morning"),
  r("kolkata", "Kolkata", "mccluskieganj", "McCluskieganj", 400, "8.5", "NH-33/SH", ["Ranchi"], 450, ["West Bengal", "Jharkhand"], KOL_PICKUP, ["McCluskieganj Town"], "Mixed", "Early Morning"),
  r("kolkata", "Kolkata", "seraikela", "Seraikela", 250, "5.5", "NH-49", ["Kharagpur", "Jamshedpur"], 380, ["West Bengal", "Jharkhand"], KOL_PICKUP, ["Seraikela Palace"], "Good NH", "Morning"),
];

// ============================================================
// KOLKATA TO BIHAR
// ============================================================

const kolkataToBihar: RouteData[] = [
  r("kolkata", "Kolkata", "patna", "Patna", 590, "10-11", "NH-19", ["Bardhaman", "Asansol", "Gaya"], 700, ["West Bengal", "Jharkhand", "Bihar"], KOL_PICKUP, ["Patna Junction", "Gandhi Maidan", "Airport"], "Good NH-19", "Very Early Morning"),
  r("kolkata", "Kolkata", "gaya", "Gaya", 490, "9-10", "NH-19", ["Asansol", "Dhanbad"], 550, ["West Bengal", "Jharkhand", "Bihar"], KOL_PICKUP, ["Gaya Station", "Vishnupad Temple"], "Good NH", "Very Early Morning"),
  r("kolkata", "Kolkata", "bodh-gaya", "Bodh Gaya", 500, "9-10", "NH-19", ["Asansol", "Gaya"], 550, ["West Bengal", "Jharkhand", "Bihar"], KOL_PICKUP, ["Mahabodhi Temple", "Thai Temple"], "Good NH", "Very Early Morning"),
  r("kolkata", "Kolkata", "rajgir", "Rajgir", 510, "10", "NH-19/SH", ["Asansol", "Gaya"], 550, ["West Bengal", "Jharkhand", "Bihar"], KOL_PICKUP, ["Rajgir Hot Springs", "Vishwa Shanti Stupa"], "Good NH", "Very Early Morning"),
  r("kolkata", "Kolkata", "nalanda", "Nalanda", 520, "10", "NH-19", ["Asansol", "Gaya", "Rajgir"], 550, ["West Bengal", "Jharkhand", "Bihar"], KOL_PICKUP, ["Nalanda University Ruins", "Museum"], "Good NH", "Very Early Morning"),
  r("kolkata", "Kolkata", "muzaffarpur", "Muzaffarpur", 650, "12", "NH-19/NH-22", ["Patna"], 800, ["West Bengal", "Bihar"], KOL_PICKUP, ["Muzaffarpur Station", "Town"], "Good NH — Long", "Very Early Morning"),
  r("kolkata", "Kolkata", "bhagalpur", "Bhagalpur", 420, "8-9", "NH-80", ["Asansol"], 500, ["West Bengal", "Bihar"], KOL_PICKUP, ["Bhagalpur Station", "Vikramshila"], "Mixed", "Early Morning"),
  r("kolkata", "Kolkata", "sasaram", "Sasaram", 560, "10-11", "NH-19", ["Asansol", "Gaya"], 650, ["West Bengal", "Jharkhand", "Bihar"], KOL_PICKUP, ["Sasaram Town", "Sher Shah Tomb"], "Good NH", "Very Early Morning"),
  r("kolkata", "Kolkata", "vaishali", "Vaishali", 620, "11-12", "NH-19/NH-28", ["Patna", "Hajipur"], 750, ["West Bengal", "Bihar"], KOL_PICKUP, ["Vaishali Ashoka Pillar", "Kolhua"], "Good NH", "Very Early Morning"),
  r("kolkata", "Kolkata", "darbhanga", "Darbhanga", 700, "13-14", "NH-19/NH-27", ["Patna", "Muzaffarpur"], 850, ["West Bengal", "Bihar"], KOL_PICKUP, ["Darbhanga Station", "Town"], "Good NH — Very Long", "Overnight recommended"),
];

// ============================================================
// KOLKATA TO ODISHA
// ============================================================

const kolkataToOdisha: RouteData[] = [
  r("kolkata", "Kolkata", "puri", "Puri", 500, "9-10", "NH-16", ["Balasore", "Bhubaneswar"], 600, ["West Bengal", "Odisha"], KOL_PICKUP, ["Puri Station", "Jagannath Temple", "Beach"], "Good NH", "Early Morning"),
  r("kolkata", "Kolkata", "bhubaneswar", "Bhubaneswar", 440, "8-9", "NH-16", ["Balasore", "Bhadrak"], 550, ["West Bengal", "Odisha"], KOL_PICKUP, ["Bhubaneswar Station", "Airport", "Lingaraj Temple"], "Good NH", "Early Morning"),
  r("kolkata", "Kolkata", "konark", "Konark Sun Temple", 510, "9.5-10", "NH-16", ["Bhubaneswar"], 600, ["West Bengal", "Odisha"], KOL_PICKUP, ["Konark Sun Temple", "Chandrabhaga Beach"], "Good NH", "Very Early Morning"),
  r("kolkata", "Kolkata", "cuttack", "Cuttack", 430, "8-9", "NH-16", ["Balasore"], 550, ["West Bengal", "Odisha"], KOL_PICKUP, ["Cuttack Chandi", "Station"], "Good NH", "Early Morning"),
  r("kolkata", "Kolkata", "rourkela", "Rourkela", 380, "7.5-8", "NH-49/NH-75", ["Jamshedpur", "Chaibasa"], 400, ["West Bengal", "Jharkhand", "Odisha"], KOL_PICKUP, ["Rourkela Station", "Steel Plant"], "Good NH", "Early Morning"),
  r("kolkata", "Kolkata", "balasore", "Balasore", 230, "4.5-5", "NH-16", ["Mecheda"], 300, ["West Bengal", "Odisha"], KOL_PICKUP, ["Balasore Station", "Chandipur Beach"], "Good NH", "Morning"),
  r("kolkata", "Kolkata", "baripada", "Baripada", 280, "6", "NH-49/NH-18", ["Jamshedpur"], 350, ["West Bengal", "Jharkhand", "Odisha"], KOL_PICKUP, ["Baripada Town", "Simlipal Gate"], "Good NH", "Morning"),
  r("kolkata", "Kolkata", "sambalpur", "Sambalpur", 530, "10-11", "NH-49", ["Jamshedpur", "Rourkela"], 600, ["West Bengal", "Jharkhand", "Odisha"], KOL_PICKUP, ["Sambalpur Town", "Hirakud Dam"], "Good NH", "Very Early Morning"),
  r("kolkata", "Kolkata", "chilika-lake", "Chilika Lake", 530, "10-11", "NH-16", ["Bhubaneswar"], 650, ["West Bengal", "Odisha"], KOL_PICKUP, ["Satapada Dolphin Point", "Rambha Bay"], "Good NH", "Very Early Morning"),
];

// ============================================================
// KOLKATA TO WEST BENGAL DESTINATIONS
// ============================================================

const kolkataToWestBengal: RouteData[] = [
  r("kolkata", "Kolkata", "digha", "Digha", 185, "4-5", "NH-116B", ["Mecheda", "Contai"], 250, ["West Bengal"], KOL_PICKUP, ["Old Digha", "New Digha", "Sea Beach"], "Good NH", "Morning"),
  r("kolkata", "Kolkata", "mandarmani", "Mandarmani", 170, "4", "NH-116B", ["Mecheda", "Contai"], 250, ["West Bengal"], KOL_PICKUP, ["Mandarmani Beach", "Resort Area"], "Good NH", "Morning"),
  r("kolkata", "Kolkata", "siliguri", "Siliguri", 570, "10-11", "NH-12/NH-27", ["Malda", "Raiganj"], 650, ["West Bengal"], KOL_PICKUP, ["Siliguri Junction", "Tenzing Norgay Bus Stand", "Bagdogra Airport"], "Good NH — Long", "Very Early Morning"),
  r("kolkata", "Kolkata", "darjeeling", "Darjeeling", 610, "12-14", "NH-27/NH-110", ["Siliguri"], 700, ["West Bengal"], KOL_PICKUP, ["Darjeeling Mall", "Chowrasta", "Tiger Hill"], "Good NH then hill roads", "Very Early Morning"),
  r("kolkata", "Kolkata", "shantiniketan", "Shantiniketan", 170, "3.5-4", "SH", ["Bardhaman", "Bolpur"], 200, ["West Bengal"], KOL_PICKUP, ["Visva Bharati University", "Kala Bhavan"], "Good Road", "Morning"),
  r("kolkata", "Kolkata", "bishnupur", "Bishnupur", 145, "3.5", "SH", ["Bankura"], 150, ["West Bengal"], KOL_PICKUP, ["Bishnupur Terracotta Temples", "Ras Mancha"], "State Highway", "Morning"),
  r("kolkata", "Kolkata", "tajpur", "Tajpur Beach", 175, "4", "NH-116B", ["Mecheda", "Contai"], 250, ["West Bengal"], KOL_PICKUP, ["Tajpur Sea Beach", "Red Crab Beach"], "Good Road", "Morning"),
  r("kolkata", "Kolkata", "bakkhali", "Bakkhali", 130, "3.5-4", "SH", ["Diamond Harbour"], 150, ["West Bengal"], KOL_PICKUP, ["Bakkhali Beach", "Henry Island"], "Mixed — rural roads", "Morning"),
  r("kolkata", "Kolkata", "gangasagar", "Gangasagar", 150, "5-6", "SH", ["Diamond Harbour", "Kachuberia"], 200, ["West Bengal"], KOL_PICKUP, ["Kachuberia Jetty", "Gangasagar Temple"], "Mixed — Ferry Required", "Very Early Morning"),
  r("kolkata", "Kolkata", "sundarbans", "Sundarbans", 110, "3-4", "SH", ["Canning"], 150, ["West Bengal"], KOL_PICKUP, ["Godkhali Jetty", "Sundarbans Tiger Reserve"], "Mixed — rural", "Early Morning"),
  r("kolkata", "Kolkata", "mukutmanipur", "Mukutmanipur", 220, "5-6", "SH", ["Bankura"], 250, ["West Bengal"], KOL_PICKUP, ["Kangsabati Dam", "Mukutmanipur Reservoir"], "Mixed State Highway", "Morning"),
];

// ============================================================
// KOLKATA TO UTTAR PRADESH / LONG DISTANCE
// ============================================================

const kolkataToLongDistance: RouteData[] = [
  r("kolkata", "Kolkata", "varanasi", "Varanasi", 680, "12-13", "NH-19", ["Asansol", "Gaya", "Sasaram"], 800, ["West Bengal", "Jharkhand", "Bihar", "UP"], KOL_PICKUP, ["Varanasi Station", "Dashashwamedh Ghat", "Kashi Vishwanath"], "Good NH — Very Long", "Very Early Morning"),
  r("kolkata", "Kolkata", "asansol", "Asansol", 200, "4", "NH-19", ["Bardhaman", "Durgapur"], 250, ["West Bengal"], KOL_PICKUP, ["Asansol Station", "Burnpur"], "Good NH-19", "Any time"),
  r("kolkata", "Kolkata", "durgapur", "Durgapur", 170, "3.5", "NH-19", ["Bardhaman"], 200, ["West Bengal"], KOL_PICKUP, ["Durgapur Station", "City Centre", "Benachity"], "Good NH-19", "Any time"),
  r("kolkata", "Kolkata", "kharagpur", "Kharagpur", 130, "2.5-3", "NH-49/NH-16", ["Mecheda"], 200, ["West Bengal"], KOL_PICKUP, ["IIT Kharagpur", "Kharagpur Station"], "Good NH", "Any time"),
  r("kolkata", "Kolkata", "haldia", "Haldia", 130, "3-3.5", "NH-116", ["Mecheda", "Kolaghat"], 200, ["West Bengal"], KOL_PICKUP, ["Haldia Port", "Haldia Refinery"], "Good NH", "Morning"),
  r("kolkata", "Kolkata", "purulia", "Purulia", 290, "6-7", "SH", ["Bankura"], 300, ["West Bengal"], KOL_PICKUP, ["Purulia Town", "Ajodhya Hills"], "State Highway", "Morning"),
  r("kolkata", "Kolkata", "bankura", "Bankura", 210, "4.5-5", "SH", ["Bardhaman"], 250, ["West Bengal"], KOL_PICKUP, ["Bankura Town", "Susunia Hill"], "State Highway", "Morning"),
  r("kolkata", "Kolkata", "bardhaman", "Bardhaman", 105, "2-2.5", "NH-19", [], 150, ["West Bengal"], KOL_PICKUP, ["Bardhaman Station", "Curzon Gate"], "Good NH-19", "Any time"),
  r("kolkata", "Kolkata", "malda", "Malda", 330, "6.5-7", "NH-12", ["Berhampore"], 400, ["West Bengal"], KOL_PICKUP, ["Malda Town", "Gaur", "Pandua"], "Good NH", "Early Morning"),
  r("kolkata", "Kolkata", "murshidabad", "Murshidabad", 220, "4.5-5", "NH-12", ["Berhampore"], 250, ["West Bengal"], KOL_PICKUP, ["Hazarduari Palace", "Murshidabad Station"], "Good NH", "Morning"),
];

// ============================================================
// EXPORT
// ============================================================

export const kolkataExpansionRoutes: RouteData[] = [
  ...kolkataToJharkhand,
  ...kolkataToBihar,
  ...kolkataToOdisha,
  ...kolkataToWestBengal,
  ...kolkataToLongDistance,
];

export const KOLKATA_EXPANSION_COUNT = kolkataExpansionRoutes.length;
