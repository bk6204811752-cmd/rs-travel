// ============================================================
// RS Travel — CITY EXPANSION ROUTES
// 320+ routes FROM remaining Jharkhand cities
// Covers: Hazaribagh, Bokaro+, Ranchi+, Dumka, Chaibasa,
//   Adityapur, Ramgarh, Koderma, Daltonganj, Phusro, Pakur,
//   Giridih+, Deoghar+, Dhanbad+
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
    fares: { hatchback: Math.max(hatchback, 799), sedan: Math.max(sedan, 999), suv: Math.max(suv, 1399), crysta: Math.max(crysta, 1799), tempo: Math.max(tempo, 2399) },
    tolls, pitStops: pitStops.length > 0 ? pitStops : (via.length > 0 ? [via[0]] : []),
    bestTime, roadCondition, statesCrossed, pickupPoints, dropPoints
  };
}

// ============================================================
// FROM HAZARIBAGH (~30 routes)
// ============================================================
const HZB_PICKUP = ["Hazaribagh Lake", "Court Area", "Canary Hill", "Civil Lines", "Boddom Bazar"];

const hazaribaghRoutes: RouteData[] = [
  r("hazaribagh", "Hazaribagh", "kolkata", "Kolkata", 350, "7-8", "NH-33/NH-19", ["Bokaro", "Dhanbad", "Asansol"], 400, ["Jharkhand", "West Bengal"], HZB_PICKUP, ["Howrah Station", "Sealdah", "Airport", "Salt Lake"], "Good NH", "Early Morning"),
  r("hazaribagh", "Hazaribagh", "patna", "Patna", 190, "4-5", "NH-33/NH-2", ["Koderma", "Bihar Sharif"], 250, ["Jharkhand", "Bihar"], HZB_PICKUP, ["Patna Junction", "Gandhi Maidan", "Airport"], "Good NH", "Morning"),
  r("hazaribagh", "Hazaribagh", "gaya", "Gaya", 140, "3.5", "NH-2", ["Koderma"], 200, ["Jharkhand", "Bihar"], HZB_PICKUP, ["Gaya Station", "Vishnupad Temple"], "Good NH", "Morning"),
  r("hazaribagh", "Hazaribagh", "bodh-gaya", "Bodh Gaya", 150, "3.5-4", "NH-2", ["Koderma", "Gaya"], 200, ["Jharkhand", "Bihar"], HZB_PICKUP, ["Mahabodhi Temple"], "Good NH", "Morning"),
  r("hazaribagh", "Hazaribagh", "varanasi", "Varanasi", 490, "9-10", "NH-2", ["Koderma", "Gaya", "Sasaram"], 600, ["Jharkhand", "Bihar", "UP"], HZB_PICKUP, ["Varanasi Station", "Dashashwamedh Ghat"], "Good NH", "Very Early Morning"),
  r("hazaribagh", "Hazaribagh", "deoghar", "Deoghar", 180, "4-5", "NH-33/NH-114A", ["Bokaro", "Giridih"], 200, ["Jharkhand"], HZB_PICKUP, ["Baidyanath Dham", "Tower Chowk"], "Mixed", "Morning"),
  r("hazaribagh", "Hazaribagh", "giridih", "Giridih", 130, "3-3.5", "SH", ["Bokaro"], 150, ["Jharkhand"], HZB_PICKUP, ["Giridih Station", "Parasnath"], "State Highway", "Morning"),
  r("hazaribagh", "Hazaribagh", "daltonganj", "Daltonganj", 160, "4", "NH-39", ["Chatra"], 150, ["Jharkhand"], HZB_PICKUP, ["Daltonganj Town", "Medininagar"], "State Highway", "Morning"),
  r("hazaribagh", "Hazaribagh", "netarhat", "Netarhat", 200, "5-6", "SH", ["Chatra", "Latehar"], 200, ["Jharkhand"], HZB_PICKUP, ["Netarhat Hill Station"], "Hill Roads", "Morning"),
  r("hazaribagh", "Hazaribagh", "betla", "Betla National Park", 180, "4.5", "SH", ["Chatra", "Daltonganj"], 200, ["Jharkhand"], HZB_PICKUP, ["Betla National Park Gate"], "State Highway", "Morning"),
  r("hazaribagh", "Hazaribagh", "dumka", "Dumka", 230, "5.5", "SH", ["Giridih", "Deoghar"], 250, ["Jharkhand"], HZB_PICKUP, ["Dumka Town"], "Mixed", "Morning"),
  r("hazaribagh", "Hazaribagh", "chaibasa", "Chaibasa", 240, "5.5", "NH-33/NH-75", ["Ranchi"], 250, ["Jharkhand"], HZB_PICKUP, ["Chaibasa Town"], "Good NH", "Morning"),
  r("hazaribagh", "Hazaribagh", "asansol", "Asansol", 200, "4.5", "NH-33/NH-19", ["Bokaro", "Dhanbad"], 250, ["Jharkhand", "West Bengal"], HZB_PICKUP, ["Asansol Station"], "Good NH", "Morning"),
  r("hazaribagh", "Hazaribagh", "durgapur", "Durgapur", 230, "5", "NH-19", ["Dhanbad", "Asansol"], 300, ["Jharkhand", "West Bengal"], HZB_PICKUP, ["Durgapur Station"], "Good NH", "Morning"),
  r("hazaribagh", "Hazaribagh", "siliguri", "Siliguri", 550, "11", "NH-33/NH-27", ["Dhanbad", "Asansol"], 650, ["Jharkhand", "West Bengal"], HZB_PICKUP, ["Siliguri Junction"], "Good NH — Long", "Very Early Morning"),
  r("hazaribagh", "Hazaribagh", "darjeeling", "Darjeeling", 600, "12-14", "NH-27", ["Siliguri"], 700, ["Jharkhand", "West Bengal"], HZB_PICKUP, ["Darjeeling Mall"], "Mixed — hill", "Very Early Morning"),
  r("hazaribagh", "Hazaribagh", "puri", "Puri", 500, "10", "NH-33/NH-49", ["Ranchi", "Jamshedpur"], 600, ["Jharkhand", "Odisha"], HZB_PICKUP, ["Puri Jagannath Temple"], "Good NH", "Very Early Morning"),
  r("hazaribagh", "Hazaribagh", "bhubaneswar", "Bhubaneswar", 400, "8-9", "NH-33/NH-49", ["Ranchi", "Jamshedpur"], 500, ["Jharkhand", "Odisha"], HZB_PICKUP, ["Bhubaneswar Station"], "Good NH", "Early Morning"),
  r("hazaribagh", "Hazaribagh", "rourkela", "Rourkela", 250, "5.5", "NH-33/NH-75", ["Ranchi"], 250, ["Jharkhand", "Odisha"], HZB_PICKUP, ["Rourkela Station"], "Good NH", "Morning"),
  r("hazaribagh", "Hazaribagh", "patratu", "Patratu", 50, "1.5", "SH", [], 0, ["Jharkhand"], HZB_PICKUP, ["Patratu Valley", "Patratu Dam"], "Good Road", "Any time"),
  r("hazaribagh", "Hazaribagh", "rajrappa", "Rajrappa", 60, "1.5-2", "SH", ["Ramgarh"], 50, ["Jharkhand"], HZB_PICKUP, ["Chhinnamasta Temple"], "Mixed", "Morning"),
  r("hazaribagh", "Hazaribagh", "koderma", "Koderma", 70, "2", "NH-2", [], 50, ["Jharkhand"], HZB_PICKUP, ["Koderma Town", "Jhumri Tilaiya"], "Good NH", "Any time"),
  r("hazaribagh", "Hazaribagh", "ramgarh", "Ramgarh", 40, "1", "NH-33", [], 0, ["Jharkhand"], HZB_PICKUP, ["Ramgarh Cantt"], "Good NH", "Any time"),
  r("hazaribagh", "Hazaribagh", "digha", "Digha", 450, "9", "NH-33/NH-116B", ["Dhanbad", "Kharagpur"], 500, ["Jharkhand", "West Bengal"], HZB_PICKUP, ["New Digha Beach"], "Good NH", "Very Early Morning"),
  r("hazaribagh", "Hazaribagh", "mandarmani", "Mandarmani", 430, "8.5", "NH-33/NH-116B", ["Dhanbad", "Kharagpur"], 500, ["Jharkhand", "West Bengal"], HZB_PICKUP, ["Mandarmani Beach"], "Good NH", "Very Early Morning"),
  r("hazaribagh", "Hazaribagh", "bhagalpur", "Bhagalpur", 300, "7", "SH", ["Deoghar"], 350, ["Jharkhand", "Bihar"], HZB_PICKUP, ["Bhagalpur Station"], "Mixed", "Early Morning"),
  r("hazaribagh", "Hazaribagh", "muzaffarpur", "Muzaffarpur", 280, "6.5", "NH-2/NH-22", ["Patna"], 350, ["Jharkhand", "Bihar"], HZB_PICKUP, ["Muzaffarpur Station"], "Good NH", "Early Morning"),
  r("hazaribagh", "Hazaribagh", "pakur", "Pakur", 300, "7", "SH", ["Deoghar", "Dumka"], 300, ["Jharkhand"], HZB_PICKUP, ["Pakur Town"], "Mixed", "Early Morning"),
  r("hazaribagh", "Hazaribagh", "adityapur", "Adityapur", 190, "4.5", "NH-33", ["Ranchi"], 200, ["Jharkhand"], HZB_PICKUP, ["Adityapur Industrial Area"], "Good NH", "Morning"),
  r("hazaribagh", "Hazaribagh", "phusro", "Phusro", 80, "2", "NH-33/SH", ["Bokaro"], 100, ["Jharkhand"], HZB_PICKUP, ["Phusro Town"], "Good Road", "Any time"),
];

// ============================================================
// FROM DUMKA (~25 routes)
// ============================================================
const DMK_PICKUP = ["Dumka Town", "Station Road", "Motijheel", "Court Area"];

const dumkaRoutes: RouteData[] = [
  r("dumka", "Dumka", "kolkata", "Kolkata", 340, "7-8", "SH/NH-14", ["Asansol"], 350, ["Jharkhand", "West Bengal"], DMK_PICKUP, ["Howrah Station", "Sealdah", "Airport"], "Mixed", "Early Morning"),
  r("dumka", "Dumka", "jamshedpur", "Jamshedpur", 130, "3.5-4", "SH", ["Ghatsila"], 100, ["Jharkhand"], DMK_PICKUP, ["Mango", "Bistupur", "Sakchi"], "Mixed", "Morning"),
  r("dumka", "Dumka", "ranchi", "Ranchi", 280, "6-7", "SH", ["Deoghar", "Bokaro"], 250, ["Jharkhand"], DMK_PICKUP, ["Ranchi Station", "Airport"], "Mixed", "Early Morning"),
  r("dumka", "Dumka", "dhanbad", "Dhanbad", 130, "3.5", "NH-114A", ["Jamtara"], 150, ["Jharkhand"], DMK_PICKUP, ["Dhanbad Station", "Bank More"], "State Highway", "Morning"),
  r("dumka", "Dumka", "deoghar", "Deoghar", 60, "1.5-2", "SH", [], 50, ["Jharkhand"], DMK_PICKUP, ["Baidyanath Dham", "Tower Chowk"], "State Highway", "Any time"),
  r("dumka", "Dumka", "bokaro", "Bokaro", 180, "4.5", "SH/NH-33", ["Dhanbad"], 200, ["Jharkhand"], DMK_PICKUP, ["Bokaro Sector 4", "Chas"], "Mixed", "Morning"),
  r("dumka", "Dumka", "hazaribagh", "Hazaribagh", 230, "5.5", "SH", ["Giridih", "Bokaro"], 250, ["Jharkhand"], DMK_PICKUP, ["Hazaribagh Lake", "Canary Hill"], "Mixed", "Morning"),
  r("dumka", "Dumka", "giridih", "Giridih", 100, "2.5-3", "SH", ["Deoghar"], 100, ["Jharkhand"], DMK_PICKUP, ["Giridih Station"], "State Highway", "Morning"),
  r("dumka", "Dumka", "patna", "Patna", 370, "8", "SH/NH-2", ["Deoghar", "Koderma"], 400, ["Jharkhand", "Bihar"], DMK_PICKUP, ["Patna Junction", "Airport"], "Mixed", "Early Morning"),
  r("dumka", "Dumka", "gaya", "Gaya", 300, "7", "SH/NH-2", ["Deoghar", "Koderma"], 350, ["Jharkhand", "Bihar"], DMK_PICKUP, ["Gaya Station"], "Mixed", "Early Morning"),
  r("dumka", "Dumka", "bodh-gaya", "Bodh Gaya", 310, "7", "SH/NH-2", ["Koderma", "Gaya"], 350, ["Jharkhand", "Bihar"], DMK_PICKUP, ["Mahabodhi Temple"], "Mixed", "Early Morning"),
  r("dumka", "Dumka", "bhagalpur", "Bhagalpur", 150, "4", "SH", [], 100, ["Jharkhand", "Bihar"], DMK_PICKUP, ["Bhagalpur Station"], "State Highway", "Morning"),
  r("dumka", "Dumka", "asansol", "Asansol", 210, "5", "SH/NH-19", ["Dhanbad"], 250, ["Jharkhand", "West Bengal"], DMK_PICKUP, ["Asansol Station"], "Mixed", "Morning"),
  r("dumka", "Dumka", "durgapur", "Durgapur", 240, "5.5", "NH-19", ["Dhanbad", "Asansol"], 300, ["Jharkhand", "West Bengal"], DMK_PICKUP, ["Durgapur Station"], "Mixed", "Morning"),
  r("dumka", "Dumka", "siliguri", "Siliguri", 450, "10", "NH-12/NH-27", ["Malda"], 500, ["Jharkhand", "West Bengal"], DMK_PICKUP, ["Siliguri Junction"], "Good NH — Long", "Very Early Morning"),
  r("dumka", "Dumka", "pakur", "Pakur", 80, "2", "SH", [], 50, ["Jharkhand"], DMK_PICKUP, ["Pakur Town"], "State Highway", "Any time"),
  r("dumka", "Dumka", "sahibganj", "Sahibganj", 100, "2.5", "SH", [], 50, ["Jharkhand"], DMK_PICKUP, ["Sahibganj Ghat"], "State Highway", "Morning"),
  r("dumka", "Dumka", "rajmahal", "Rajmahal", 120, "3", "SH", [], 50, ["Jharkhand"], DMK_PICKUP, ["Rajmahal Hills", "Ganga Ghat"], "State Highway", "Morning"),
  r("dumka", "Dumka", "godda", "Godda", 60, "1.5", "SH", [], 0, ["Jharkhand"], DMK_PICKUP, ["Godda Town"], "State Highway", "Any time"),
  r("dumka", "Dumka", "malda", "Malda", 200, "4.5", "SH/NH-12", [], 200, ["Jharkhand", "West Bengal"], DMK_PICKUP, ["Malda Town"], "Mixed", "Morning"),
  r("dumka", "Dumka", "massanjore-dam", "Massanjore Dam", 40, "1", "SH", [], 0, ["Jharkhand"], DMK_PICKUP, ["Massanjore Dam", "Canada Dam"], "State Highway", "Any time"),
  r("dumka", "Dumka", "varanasi", "Varanasi", 550, "11", "NH-2", ["Koderma", "Gaya"], 650, ["Jharkhand", "Bihar", "UP"], DMK_PICKUP, ["Varanasi Station"], "Good NH — Long", "Very Early Morning"),
  r("dumka", "Dumka", "puri", "Puri", 550, "11", "NH-49/NH-16", ["Jamshedpur"], 650, ["Jharkhand", "Odisha"], DMK_PICKUP, ["Puri Jagannath Temple"], "Good NH — Long", "Very Early Morning"),
  r("dumka", "Dumka", "digha", "Digha", 440, "9", "NH-116B", ["Dhanbad", "Kharagpur"], 500, ["Jharkhand", "West Bengal"], DMK_PICKUP, ["New Digha Beach"], "Good NH", "Very Early Morning"),
  r("dumka", "Dumka", "chaibasa", "Chaibasa", 190, "4.5", "SH", ["Jamshedpur"], 150, ["Jharkhand"], DMK_PICKUP, ["Chaibasa Town"], "Mixed", "Morning"),
];

// ============================================================
// FROM CHAIBASA (~20 routes)
// ============================================================
const CHB_PICKUP = ["Chaibasa Town", "Court Area", "Station Road", "Thakurbadi"];

const chaibasaRoutes: RouteData[] = [
  r("chaibasa", "Chaibasa", "kolkata", "Kolkata", 310, "6.5-7", "NH-49", ["Jamshedpur", "Kharagpur"], 400, ["Jharkhand", "West Bengal"], CHB_PICKUP, ["Howrah Station", "Airport"], "Good NH", "Morning"),
  r("chaibasa", "Chaibasa", "ranchi", "Ranchi", 150, "3.5", "NH-20", ["Khunti"], 100, ["Jharkhand"], CHB_PICKUP, ["Ranchi Station", "Airport"], "Good NH", "Morning"),
  r("chaibasa", "Chaibasa", "dhanbad", "Dhanbad", 180, "4.5", "NH-32", ["Jamshedpur"], 250, ["Jharkhand"], CHB_PICKUP, ["Dhanbad Station", "Bank More"], "Good NH", "Morning"),
  r("chaibasa", "Chaibasa", "bokaro", "Bokaro", 200, "5", "NH-32", ["Jamshedpur"], 250, ["Jharkhand"], CHB_PICKUP, ["Bokaro Sector 4", "Chas"], "Good NH", "Morning"),
  r("chaibasa", "Chaibasa", "deoghar", "Deoghar", 240, "6", "SH", ["Jamshedpur", "Dhanbad"], 250, ["Jharkhand"], CHB_PICKUP, ["Baidyanath Dham"], "Mixed", "Early Morning"),
  r("chaibasa", "Chaibasa", "hazaribagh", "Hazaribagh", 240, "5.5", "NH-33", ["Ranchi"], 250, ["Jharkhand"], CHB_PICKUP, ["Hazaribagh Lake"], "Good NH", "Morning"),
  r("chaibasa", "Chaibasa", "patna", "Patna", 400, "8.5", "NH-33/NH-2", ["Ranchi", "Hazaribagh"], 450, ["Jharkhand", "Bihar"], CHB_PICKUP, ["Patna Junction"], "Good NH", "Early Morning"),
  r("chaibasa", "Chaibasa", "rourkela", "Rourkela", 80, "2", "NH-75", [], 50, ["Jharkhand", "Odisha"], CHB_PICKUP, ["Rourkela Station", "Steel Plant"], "Good Road", "Any time"),
  r("chaibasa", "Chaibasa", "bhubaneswar", "Bhubaneswar", 380, "8", "NH-75/NH-49", ["Rourkela"], 450, ["Jharkhand", "Odisha"], CHB_PICKUP, ["Bhubaneswar Station"], "Good NH", "Early Morning"),
  r("chaibasa", "Chaibasa", "puri", "Puri", 480, "10", "NH-49/NH-16", ["Rourkela", "Bhubaneswar"], 550, ["Jharkhand", "Odisha"], CHB_PICKUP, ["Puri Jagannath Temple"], "Good NH", "Very Early Morning"),
  r("chaibasa", "Chaibasa", "keonjhar", "Keonjhar", 100, "2.5", "NH-20", [], 50, ["Jharkhand", "Odisha"], CHB_PICKUP, ["Keonjhar Town"], "Mixed", "Morning"),
  r("chaibasa", "Chaibasa", "baripada", "Baripada", 130, "3", "SH", [], 100, ["Jharkhand", "Odisha"], CHB_PICKUP, ["Baripada Town"], "State Highway", "Morning"),
  r("chaibasa", "Chaibasa", "kharagpur", "Kharagpur", 200, "4.5", "NH-49", ["Jamshedpur"], 250, ["Jharkhand", "West Bengal"], CHB_PICKUP, ["IIT Kharagpur"], "Good NH", "Morning"),
  r("chaibasa", "Chaibasa", "asansol", "Asansol", 250, "5.5", "NH-32/NH-19", ["Jamshedpur", "Dhanbad"], 300, ["Jharkhand", "West Bengal"], CHB_PICKUP, ["Asansol Station"], "Good NH", "Morning"),
  r("chaibasa", "Chaibasa", "noamundi", "Noamundi", 50, "1.5", "SH", [], 0, ["Jharkhand"], CHB_PICKUP, ["Noamundi Iron Ore Mines"], "Hill Road", "Morning"),
  r("chaibasa", "Chaibasa", "kiriburu", "Kiriburu", 70, "2", "SH", [], 0, ["Jharkhand"], CHB_PICKUP, ["Kiriburu Hill", "Meghahatuburu"], "Hill Road", "Morning"),
  r("chaibasa", "Chaibasa", "giridih", "Giridih", 230, "5.5", "SH", ["Dhanbad"], 200, ["Jharkhand"], CHB_PICKUP, ["Giridih Station"], "Mixed", "Morning"),
  r("chaibasa", "Chaibasa", "sundargarh", "Sundargarh", 100, "2.5", "NH-75/SH", ["Rourkela"], 50, ["Jharkhand", "Odisha"], CHB_PICKUP, ["Sundargarh Town"], "State Highway", "Morning"),
  r("chaibasa", "Chaibasa", "digha", "Digha", 380, "8", "NH-49/NH-116B", ["Kharagpur"], 400, ["Jharkhand", "West Bengal"], CHB_PICKUP, ["New Digha Beach"], "Good NH", "Early Morning"),
  r("chaibasa", "Chaibasa", "varanasi", "Varanasi", 600, "12", "NH-2", ["Ranchi", "Gaya"], 700, ["Jharkhand", "Bihar", "UP"], CHB_PICKUP, ["Varanasi Station"], "Good NH — Long", "Very Early Morning"),
];

// ============================================================
// FROM ADITYAPUR (~20 routes)
// ============================================================
const ADT_PICKUP = ["Adityapur Industrial Area", "Gamharia", "Kandra", "Adityapur Phase 1", "Phase 2"];

const adityapurRoutes: RouteData[] = [
  r("adityapur", "Adityapur", "kolkata", "Kolkata", 255, "5-6", "NH-49", ["Kharagpur"], 400, ["Jharkhand", "West Bengal"], ADT_PICKUP, ["Howrah Station", "Sealdah", "Airport", "Salt Lake"], "Good NH", "Morning"),
  r("adityapur", "Adityapur", "ranchi", "Ranchi", 135, "3-4", "NH-33", ["Chandil"], 200, ["Jharkhand"], ADT_PICKUP, ["Ranchi Station", "Airport"], "Good 4-lane NH", "Any time"),
  r("adityapur", "Adityapur", "dhanbad", "Dhanbad", 85, "2-2.5", "NH-32", ["Chandrapura"], 100, ["Jharkhand"], ADT_PICKUP, ["Dhanbad Station", "Bank More"], "Good Road", "Any time"),
  r("adityapur", "Adityapur", "bokaro", "Bokaro", 125, "3-3.5", "NH-32", ["Phusro"], 150, ["Jharkhand"], ADT_PICKUP, ["Bokaro Sector 4", "Chas"], "Good Road", "Any time"),
  r("adityapur", "Adityapur", "deoghar", "Deoghar", 165, "4-5", "NH-114A", ["Dhanbad"], 150, ["Jharkhand"], ADT_PICKUP, ["Baidyanath Dham"], "Mixed", "Morning"),
  r("adityapur", "Adityapur", "hazaribagh", "Hazaribagh", 185, "4-5", "NH-33", ["Chandil", "Ramgarh"], 200, ["Jharkhand"], ADT_PICKUP, ["Hazaribagh Lake", "Canary Hill"], "Good NH", "Morning"),
  r("adityapur", "Adityapur", "patna", "Patna", 345, "7-8", "NH-33/NH-2", ["Ranchi", "Hazaribagh"], 400, ["Jharkhand", "Bihar"], ADT_PICKUP, ["Patna Junction", "Airport"], "Good NH", "Early Morning"),
  r("adityapur", "Adityapur", "puri", "Puri", 525, "10-11", "NH-49/NH-16", ["Rourkela", "Bhubaneswar"], 700, ["Jharkhand", "Odisha"], ADT_PICKUP, ["Puri Jagannath Temple"], "Good NH", "Very Early Morning"),
  r("adityapur", "Adityapur", "bhubaneswar", "Bhubaneswar", 425, "8-9", "NH-49", ["Rourkela"], 550, ["Jharkhand", "Odisha"], ADT_PICKUP, ["Bhubaneswar Station", "Airport"], "Good NH", "Early Morning"),
  r("adityapur", "Adityapur", "rourkela", "Rourkela", 125, "3", "NH-75", ["Chaibasa"], 150, ["Jharkhand", "Odisha"], ADT_PICKUP, ["Rourkela Station"], "Good Road", "Any time"),
  r("adityapur", "Adityapur", "asansol", "Asansol", 175, "3.5-4", "NH-19", ["Dhanbad"], 200, ["Jharkhand", "West Bengal"], ADT_PICKUP, ["Asansol Station"], "Good NH", "Any time"),
  r("adityapur", "Adityapur", "durgapur", "Durgapur", 205, "4-5", "NH-19", ["Dhanbad", "Asansol"], 250, ["Jharkhand", "West Bengal"], ADT_PICKUP, ["Durgapur Station"], "Good NH", "Morning"),
  r("adityapur", "Adityapur", "siliguri", "Siliguri", 455, "9-10", "NH-27", ["Asansol", "Malda"], 600, ["Jharkhand", "West Bengal"], ADT_PICKUP, ["Siliguri Junction", "Bagdogra Airport"], "Good NH — Long", "Very Early Morning"),
  r("adityapur", "Adityapur", "darjeeling", "Darjeeling", 505, "10-12", "NH-27", ["Siliguri"], 650, ["Jharkhand", "West Bengal"], ADT_PICKUP, ["Darjeeling Mall"], "Good NH then Hill", "Very Early Morning"),
  r("adityapur", "Adityapur", "digha", "Digha", 325, "6-7", "NH-49/NH-116B", ["Kharagpur"], 350, ["Jharkhand", "West Bengal"], ADT_PICKUP, ["Old Digha", "New Digha"], "Good NH", "Morning"),
  r("adityapur", "Adityapur", "baripada", "Baripada", 115, "2.5", "NH-18", ["Baharagora"], 100, ["Jharkhand", "Odisha"], ADT_PICKUP, ["Baripada Town", "Simlipal"], "Good NH", "Morning"),
  r("adityapur", "Adityapur", "chaibasa", "Chaibasa", 55, "1.5", "SH", [], 0, ["Jharkhand"], ADT_PICKUP, ["Chaibasa Town"], "State Highway", "Any time"),
  r("adityapur", "Adityapur", "giridih", "Giridih", 175, "4-5", "SH", ["Dhanbad"], 150, ["Jharkhand"], ADT_PICKUP, ["Giridih Station", "Parasnath"], "Mixed", "Morning"),
  r("adityapur", "Adityapur", "varanasi", "Varanasi", 555, "11", "NH-2", ["Ranchi", "Gaya"], 700, ["Jharkhand", "Bihar", "UP"], ADT_PICKUP, ["Varanasi Station"], "Good NH — Long", "Very Early Morning"),
  r("adityapur", "Adityapur", "gaya", "Gaya", 355, "8", "NH-2", ["Ranchi", "Koderma"], 450, ["Jharkhand", "Bihar"], ADT_PICKUP, ["Gaya Station", "Vishnupad"], "Good NH", "Early Morning"),
];

// ============================================================
// FROM RAMGARH (~20 routes)
// ============================================================
const RMG_PICKUP = ["Ramgarh Cantt", "Patratu", "Chitarpur", "Gola", "Bhurkunda"];

const ramgarhRoutes: RouteData[] = [
  r("ramgarh", "Ramgarh", "kolkata", "Kolkata", 330, "7", "NH-33/NH-19", ["Bokaro", "Dhanbad", "Asansol"], 400, ["Jharkhand", "West Bengal"], RMG_PICKUP, ["Howrah Station", "Airport"], "Good NH", "Early Morning"),
  r("ramgarh", "Ramgarh", "jamshedpur", "Jamshedpur", 170, "4-4.5", "NH-33", ["Chandil"], 150, ["Jharkhand"], RMG_PICKUP, ["Mango", "Bistupur", "Tatanagar Station"], "Good NH", "Any time"),
  r("ramgarh", "Ramgarh", "dhanbad", "Dhanbad", 110, "2.5-3", "NH-33", ["Bokaro"], 150, ["Jharkhand"], RMG_PICKUP, ["Dhanbad Station", "Bank More"], "Good NH", "Any time"),
  r("ramgarh", "Ramgarh", "deoghar", "Deoghar", 210, "5", "SH", ["Bokaro", "Giridih"], 200, ["Jharkhand"], RMG_PICKUP, ["Baidyanath Dham"], "Mixed", "Morning"),
  r("ramgarh", "Ramgarh", "patna", "Patna", 230, "5", "NH-33/NH-2", ["Hazaribagh", "Koderma"], 300, ["Jharkhand", "Bihar"], RMG_PICKUP, ["Patna Junction", "Airport"], "Good NH", "Morning"),
  r("ramgarh", "Ramgarh", "gaya", "Gaya", 170, "4", "NH-2", ["Hazaribagh", "Koderma"], 200, ["Jharkhand", "Bihar"], RMG_PICKUP, ["Gaya Station", "Vishnupad"], "Good NH", "Morning"),
  r("ramgarh", "Ramgarh", "varanasi", "Varanasi", 530, "10", "NH-2", ["Gaya", "Sasaram"], 650, ["Jharkhand", "Bihar", "UP"], RMG_PICKUP, ["Varanasi Station"], "Good NH — Long", "Very Early Morning"),
  r("ramgarh", "Ramgarh", "giridih", "Giridih", 110, "3", "SH", ["Bokaro"], 100, ["Jharkhand"], RMG_PICKUP, ["Giridih Station"], "State Highway", "Morning"),
  r("ramgarh", "Ramgarh", "daltonganj", "Daltonganj", 190, "4.5", "SH", ["Hazaribagh", "Chatra"], 200, ["Jharkhand"], RMG_PICKUP, ["Daltonganj Town"], "State Highway", "Morning"),
  r("ramgarh", "Ramgarh", "asansol", "Asansol", 220, "5", "NH-19", ["Dhanbad"], 250, ["Jharkhand", "West Bengal"], RMG_PICKUP, ["Asansol Station"], "Good NH", "Morning"),
  r("ramgarh", "Ramgarh", "dumka", "Dumka", 250, "6", "SH", ["Deoghar"], 250, ["Jharkhand"], RMG_PICKUP, ["Dumka Town"], "Mixed", "Morning"),
  r("ramgarh", "Ramgarh", "chaibasa", "Chaibasa", 210, "5", "NH-33/NH-75", ["Ranchi"], 200, ["Jharkhand"], RMG_PICKUP, ["Chaibasa Town"], "Good NH", "Morning"),
  r("ramgarh", "Ramgarh", "koderma", "Koderma", 90, "2.5", "NH-2", ["Hazaribagh"], 100, ["Jharkhand"], RMG_PICKUP, ["Koderma Town"], "Good NH", "Any time"),
  r("ramgarh", "Ramgarh", "netarhat", "Netarhat", 210, "5.5", "SH", ["Hazaribagh", "Latehar"], 200, ["Jharkhand"], RMG_PICKUP, ["Netarhat Hill Station"], "Hill Roads", "Morning"),
  r("ramgarh", "Ramgarh", "puri", "Puri", 520, "10", "NH-49/NH-16", ["Ranchi", "Jamshedpur"], 600, ["Jharkhand", "Odisha"], RMG_PICKUP, ["Puri Jagannath Temple"], "Good NH", "Very Early Morning"),
  r("ramgarh", "Ramgarh", "digha", "Digha", 420, "9", "NH-116B", ["Dhanbad", "Kharagpur"], 450, ["Jharkhand", "West Bengal"], RMG_PICKUP, ["New Digha Beach"], "Good NH", "Very Early Morning"),
  r("ramgarh", "Ramgarh", "siliguri", "Siliguri", 520, "10", "NH-27", ["Dhanbad", "Asansol"], 600, ["Jharkhand", "West Bengal"], RMG_PICKUP, ["Siliguri Junction"], "Good NH — Long", "Very Early Morning"),
  r("ramgarh", "Ramgarh", "rourkela", "Rourkela", 230, "5.5", "NH-33/NH-75", ["Ranchi"], 250, ["Jharkhand", "Odisha"], RMG_PICKUP, ["Rourkela Station"], "Good NH", "Morning"),
  r("ramgarh", "Ramgarh", "pakur", "Pakur", 300, "7", "SH", ["Deoghar", "Dumka"], 300, ["Jharkhand"], RMG_PICKUP, ["Pakur Town"], "Mixed", "Early Morning"),
  r("ramgarh", "Ramgarh", "rajrappa", "Rajrappa", 30, "0.75", "SH", [], 0, ["Jharkhand"], RMG_PICKUP, ["Chhinnamasta Temple"], "Good Road", "Any time"),
];

// ============================================================
// FROM KODERMA (~20 routes)
// ============================================================
const KDR_PICKUP = ["Koderma Town", "Jhumri Tilaiya", "Domchanch", "Koderma Junction"];

const kodermaRoutes: RouteData[] = [
  r("koderma", "Koderma", "kolkata", "Kolkata", 380, "7.5-8", "NH-2/NH-19", ["Asansol"], 450, ["Jharkhand", "West Bengal"], KDR_PICKUP, ["Howrah Station", "Airport"], "Good NH", "Early Morning"),
  r("koderma", "Koderma", "jamshedpur", "Jamshedpur", 190, "4.5-5", "NH-2/NH-33", ["Hazaribagh", "Ranchi"], 200, ["Jharkhand"], KDR_PICKUP, ["Mango", "Bistupur", "Tatanagar Station"], "Good NH", "Morning"),
  r("koderma", "Koderma", "ranchi", "Ranchi", 160, "3.5-4", "NH-2/NH-33", ["Hazaribagh"], 150, ["Jharkhand"], KDR_PICKUP, ["Ranchi Station", "Airport"], "Good NH", "Morning"),
  r("koderma", "Koderma", "dhanbad", "Dhanbad", 150, "3.5", "NH-19", ["Barhi"], 200, ["Jharkhand"], KDR_PICKUP, ["Dhanbad Station", "Bank More"], "Good NH", "Morning"),
  r("koderma", "Koderma", "bokaro", "Bokaro", 140, "3.5", "NH-33", ["Ramgarh"], 150, ["Jharkhand"], KDR_PICKUP, ["Bokaro Sector 4", "Chas"], "Good NH", "Morning"),
  r("koderma", "Koderma", "patna", "Patna", 140, "3-3.5", "NH-2", ["Gaya"], 200, ["Jharkhand", "Bihar"], KDR_PICKUP, ["Patna Junction", "Airport"], "Good NH", "Morning"),
  r("koderma", "Koderma", "gaya", "Gaya", 70, "1.5-2", "NH-2", [], 50, ["Jharkhand", "Bihar"], KDR_PICKUP, ["Gaya Station", "Vishnupad"], "Good NH", "Any time"),
  r("koderma", "Koderma", "bodh-gaya", "Bodh Gaya", 80, "2", "NH-2", ["Gaya"], 50, ["Jharkhand", "Bihar"], KDR_PICKUP, ["Mahabodhi Temple"], "Good NH", "Any time"),
  r("koderma", "Koderma", "varanasi", "Varanasi", 410, "8-9", "NH-2", ["Gaya", "Sasaram"], 500, ["Jharkhand", "Bihar", "UP"], KDR_PICKUP, ["Varanasi Station", "Dashashwamedh Ghat"], "Good NH", "Very Early Morning"),
  r("koderma", "Koderma", "deoghar", "Deoghar", 200, "5", "SH", ["Giridih"], 200, ["Jharkhand"], KDR_PICKUP, ["Baidyanath Dham"], "Mixed", "Morning"),
  r("koderma", "Koderma", "giridih", "Giridih", 100, "2.5", "SH", [], 50, ["Jharkhand"], KDR_PICKUP, ["Giridih Station", "Parasnath"], "State Highway", "Morning"),
  r("koderma", "Koderma", "dumka", "Dumka", 250, "6", "SH", ["Deoghar"], 250, ["Jharkhand"], KDR_PICKUP, ["Dumka Town"], "Mixed", "Morning"),
  r("koderma", "Koderma", "daltonganj", "Daltonganj", 180, "4.5", "SH", ["Hazaribagh", "Chatra"], 200, ["Jharkhand"], KDR_PICKUP, ["Daltonganj Town"], "State Highway", "Morning"),
  r("koderma", "Koderma", "rajgir", "Rajgir", 110, "2.5-3", "NH-2/SH", ["Gaya"], 100, ["Jharkhand", "Bihar"], KDR_PICKUP, ["Rajgir Hot Springs"], "Good NH", "Morning"),
  r("koderma", "Koderma", "nalanda", "Nalanda", 120, "3", "NH-2", ["Gaya"], 100, ["Jharkhand", "Bihar"], KDR_PICKUP, ["Nalanda University Ruins"], "Good NH", "Morning"),
  r("koderma", "Koderma", "asansol", "Asansol", 240, "5", "NH-19", ["Dhanbad"], 300, ["Jharkhand", "West Bengal"], KDR_PICKUP, ["Asansol Station"], "Good NH", "Morning"),
  r("koderma", "Koderma", "chaibasa", "Chaibasa", 280, "6.5", "NH-33/NH-75", ["Ranchi"], 300, ["Jharkhand"], KDR_PICKUP, ["Chaibasa Town"], "Good NH", "Early Morning"),
  r("koderma", "Koderma", "netarhat", "Netarhat", 250, "6", "SH", ["Hazaribagh", "Latehar"], 250, ["Jharkhand"], KDR_PICKUP, ["Netarhat Hill Station"], "Hill Roads", "Morning"),
  r("koderma", "Koderma", "muzaffarpur", "Muzaffarpur", 230, "5", "NH-2/NH-22", ["Patna"], 300, ["Jharkhand", "Bihar"], KDR_PICKUP, ["Muzaffarpur Station"], "Good NH", "Morning"),
  r("koderma", "Koderma", "puri", "Puri", 540, "11", "NH-49/NH-16", ["Ranchi", "Jamshedpur"], 650, ["Jharkhand", "Odisha"], KDR_PICKUP, ["Puri Jagannath Temple"], "Good NH — Long", "Very Early Morning"),
];

// ============================================================
// FROM DALTONGANJ (~25 routes)
// ============================================================
const DLT_PICKUP = ["Daltonganj Town", "Medininagar", "Pandey More", "Bishrampur"];

const daltonganjRoutes: RouteData[] = [
  r("daltonganj", "Daltonganj", "kolkata", "Kolkata", 500, "10-11", "NH-75/NH-19", ["Ranchi", "Asansol"], 550, ["Jharkhand", "West Bengal"], DLT_PICKUP, ["Howrah Station", "Airport"], "Mixed — Long", "Very Early Morning"),
  r("daltonganj", "Daltonganj", "jamshedpur", "Jamshedpur", 200, "5-6", "NH-75", ["Ranchi"], 200, ["Jharkhand"], DLT_PICKUP, ["Mango", "Bistupur", "Tatanagar Station"], "Mixed", "Morning"),
  r("daltonganj", "Daltonganj", "ranchi", "Ranchi", 160, "4-5", "NH-75", ["Latehar"], 150, ["Jharkhand"], DLT_PICKUP, ["Ranchi Station", "Airport"], "State Highway", "Morning"),
  r("daltonganj", "Daltonganj", "dhanbad", "Dhanbad", 280, "7", "NH-39", ["Hazaribagh", "Chatra"], 300, ["Jharkhand"], DLT_PICKUP, ["Dhanbad Station"], "Mixed", "Early Morning"),
  r("daltonganj", "Daltonganj", "bokaro", "Bokaro", 230, "5.5", "NH-39/NH-33", ["Hazaribagh"], 250, ["Jharkhand"], DLT_PICKUP, ["Bokaro Sector 4", "Chas"], "Mixed", "Morning"),
  r("daltonganj", "Daltonganj", "patna", "Patna", 200, "4.5-5", "NH-39/NH-2", ["Sasaram"], 250, ["Jharkhand", "Bihar"], DLT_PICKUP, ["Patna Junction", "Airport"], "Mixed", "Morning"),
  r("daltonganj", "Daltonganj", "varanasi", "Varanasi", 250, "5.5-6", "NH-39/NH-2", ["Sasaram"], 300, ["Jharkhand", "Bihar", "UP"], DLT_PICKUP, ["Varanasi Station", "Dashashwamedh Ghat"], "Good NH", "Morning"),
  r("daltonganj", "Daltonganj", "gaya", "Gaya", 180, "4", "NH-39/NH-2", ["Sasaram"], 200, ["Jharkhand", "Bihar"], DLT_PICKUP, ["Gaya Station", "Vishnupad"], "Mixed", "Morning"),
  r("daltonganj", "Daltonganj", "bodh-gaya", "Bodh Gaya", 190, "4.5", "NH-2", ["Gaya"], 200, ["Jharkhand", "Bihar"], DLT_PICKUP, ["Mahabodhi Temple"], "Mixed", "Morning"),
  r("daltonganj", "Daltonganj", "hazaribagh", "Hazaribagh", 160, "4", "NH-39", ["Chatra"], 150, ["Jharkhand"], DLT_PICKUP, ["Hazaribagh Lake", "Canary Hill"], "State Highway", "Morning"),
  r("daltonganj", "Daltonganj", "deoghar", "Deoghar", 350, "8", "SH", ["Hazaribagh", "Giridih"], 350, ["Jharkhand"], DLT_PICKUP, ["Baidyanath Dham"], "Mixed", "Early Morning"),
  r("daltonganj", "Daltonganj", "netarhat", "Netarhat", 80, "2-3", "SH", [], 0, ["Jharkhand"], DLT_PICKUP, ["Netarhat Hill Station", "Magnolia Point"], "Hill Roads", "Morning"),
  r("daltonganj", "Daltonganj", "betla", "Betla National Park", 25, "0.5-1", "SH", [], 0, ["Jharkhand"], DLT_PICKUP, ["Betla National Park Gate"], "Good Road", "Any time"),
  r("daltonganj", "Daltonganj", "giridih", "Giridih", 250, "6", "SH", ["Hazaribagh", "Bokaro"], 250, ["Jharkhand"], DLT_PICKUP, ["Giridih Station"], "Mixed", "Morning"),
  r("daltonganj", "Daltonganj", "dumka", "Dumka", 350, "8", "SH", ["Hazaribagh", "Deoghar"], 350, ["Jharkhand"], DLT_PICKUP, ["Dumka Town"], "Mixed", "Early Morning"),
  r("daltonganj", "Daltonganj", "chaibasa", "Chaibasa", 300, "7", "NH-75", ["Ranchi"], 300, ["Jharkhand"], DLT_PICKUP, ["Chaibasa Town"], "Mixed", "Early Morning"),
  r("daltonganj", "Daltonganj", "rourkela", "Rourkela", 350, "8", "NH-75/NH-143", ["Ranchi"], 350, ["Jharkhand", "Odisha"], DLT_PICKUP, ["Rourkela Station"], "Mixed", "Early Morning"),
  r("daltonganj", "Daltonganj", "asansol", "Asansol", 370, "8", "NH-19", ["Dhanbad"], 400, ["Jharkhand", "West Bengal"], DLT_PICKUP, ["Asansol Station"], "Mixed", "Early Morning"),
  r("daltonganj", "Daltonganj", "koderma", "Koderma", 180, "4.5", "SH/NH-2", ["Hazaribagh"], 200, ["Jharkhand"], DLT_PICKUP, ["Koderma Town"], "State Highway", "Morning"),
  r("daltonganj", "Daltonganj", "ramgarh", "Ramgarh", 190, "4.5", "SH", ["Hazaribagh"], 200, ["Jharkhand"], DLT_PICKUP, ["Ramgarh Cantt"], "State Highway", "Morning"),
  r("daltonganj", "Daltonganj", "sasaram", "Sasaram", 130, "3", "NH-39", [], 100, ["Jharkhand", "Bihar"], DLT_PICKUP, ["Sasaram Town", "Sher Shah Tomb"], "Good Road", "Morning"),
  r("daltonganj", "Daltonganj", "bhubaneswar", "Bhubaneswar", 550, "11", "NH-75/NH-49", ["Ranchi"], 650, ["Jharkhand", "Odisha"], DLT_PICKUP, ["Bhubaneswar Station"], "Good NH — Long", "Very Early Morning"),
  r("daltonganj", "Daltonganj", "puri", "Puri", 600, "12", "NH-49/NH-16", ["Ranchi"], 700, ["Jharkhand", "Odisha"], DLT_PICKUP, ["Puri Jagannath Temple"], "Good NH — Long", "Very Early Morning"),
  r("daltonganj", "Daltonganj", "lodh-falls", "Lodh Falls", 70, "2", "SH", ["Latehar"], 0, ["Jharkhand"], DLT_PICKUP, ["Lodh Falls", "Budha Ghagh Falls"], "Mixed — Hill", "Morning"),
  r("daltonganj", "Daltonganj", "muzaffarpur", "Muzaffarpur", 300, "6.5", "NH-22", ["Patna"], 350, ["Jharkhand", "Bihar"], DLT_PICKUP, ["Muzaffarpur Station"], "Good NH", "Early Morning"),
];

// ============================================================
// FROM PHUSRO (~15 routes)
// ============================================================
const PHS_PICKUP = ["Phusro Town", "Petarbar", "Gomoh", "Bermo"];

const phusroRoutes: RouteData[] = [
  r("phusro", "Phusro", "kolkata", "Kolkata", 280, "6", "NH-19", ["Dhanbad", "Asansol"], 350, ["Jharkhand", "West Bengal"], PHS_PICKUP, ["Howrah Station", "Airport"], "Good NH", "Morning"),
  r("phusro", "Phusro", "jamshedpur", "Jamshedpur", 130, "3.5", "NH-32", ["Chandrapura"], 150, ["Jharkhand"], PHS_PICKUP, ["Mango", "Bistupur", "Tatanagar Station"], "Good Road", "Any time"),
  r("phusro", "Phusro", "ranchi", "Ranchi", 110, "2.5-3", "NH-33", ["Bokaro"], 150, ["Jharkhand"], PHS_PICKUP, ["Ranchi Station", "Airport"], "Good NH", "Any time"),
  r("phusro", "Phusro", "dhanbad", "Dhanbad", 45, "1-1.5", "SH", [], 50, ["Jharkhand"], PHS_PICKUP, ["Dhanbad Station", "Bank More"], "State Highway", "Any time"),
  r("phusro", "Phusro", "bokaro", "Bokaro", 30, "0.75-1", "SH", [], 0, ["Jharkhand"], PHS_PICKUP, ["Bokaro Sector 4", "Chas"], "Good Road", "Any time"),
  r("phusro", "Phusro", "hazaribagh", "Hazaribagh", 80, "2", "NH-33", ["Ramgarh"], 100, ["Jharkhand"], PHS_PICKUP, ["Hazaribagh Lake", "Canary Hill"], "Good NH", "Any time"),
  r("phusro", "Phusro", "deoghar", "Deoghar", 150, "3.5-4", "NH-114A", ["Dhanbad"], 150, ["Jharkhand"], PHS_PICKUP, ["Baidyanath Dham"], "Mixed", "Morning"),
  r("phusro", "Phusro", "patna", "Patna", 280, "6", "NH-33/NH-2", ["Hazaribagh", "Koderma"], 300, ["Jharkhand", "Bihar"], PHS_PICKUP, ["Patna Junction"], "Good NH", "Early Morning"),
  r("phusro", "Phusro", "asansol", "Asansol", 100, "2.5", "NH-19", ["Dhanbad"], 100, ["Jharkhand", "West Bengal"], PHS_PICKUP, ["Asansol Station"], "Good NH", "Any time"),
  r("phusro", "Phusro", "durgapur", "Durgapur", 130, "3", "NH-19", ["Dhanbad", "Asansol"], 150, ["Jharkhand", "West Bengal"], PHS_PICKUP, ["Durgapur Station"], "Good NH", "Any time"),
  r("phusro", "Phusro", "giridih", "Giridih", 70, "2", "SH", [], 50, ["Jharkhand"], PHS_PICKUP, ["Giridih Station", "Parasnath"], "State Highway", "Morning"),
  r("phusro", "Phusro", "ramgarh", "Ramgarh", 60, "1.5", "NH-33", [], 50, ["Jharkhand"], PHS_PICKUP, ["Ramgarh Cantt", "Patratu"], "Good NH", "Any time"),
  r("phusro", "Phusro", "koderma", "Koderma", 120, "3", "NH-33/NH-2", ["Hazaribagh"], 150, ["Jharkhand"], PHS_PICKUP, ["Koderma Town"], "Good NH", "Morning"),
  r("phusro", "Phusro", "chaibasa", "Chaibasa", 200, "5", "NH-32/SH", ["Jamshedpur"], 200, ["Jharkhand"], PHS_PICKUP, ["Chaibasa Town"], "Mixed", "Morning"),
  r("phusro", "Phusro", "dumka", "Dumka", 170, "4", "NH-114A", ["Dhanbad"], 150, ["Jharkhand"], PHS_PICKUP, ["Dumka Town"], "State Highway", "Morning"),
];

// ============================================================
// FROM PAKUR (~15 routes)
// ============================================================
const PKR_PICKUP = ["Pakur Town", "Hiranpur", "Pakur Station"];

const pakurRoutes: RouteData[] = [
  r("pakur", "Pakur", "kolkata", "Kolkata", 350, "7-8", "NH-14", ["Malda"], 400, ["Jharkhand", "West Bengal"], PKR_PICKUP, ["Howrah Station", "Airport"], "Mixed", "Early Morning"),
  r("pakur", "Pakur", "jamshedpur", "Jamshedpur", 250, "6", "NH-114A", ["Dhanbad"], 200, ["Jharkhand"], PKR_PICKUP, ["Mango", "Bistupur", "Tatanagar Station"], "Mixed", "Morning"),
  r("pakur", "Pakur", "ranchi", "Ranchi", 340, "8", "SH/NH-33", ["Dhanbad", "Bokaro"], 300, ["Jharkhand"], PKR_PICKUP, ["Ranchi Station", "Airport"], "Mixed", "Early Morning"),
  r("pakur", "Pakur", "dhanbad", "Dhanbad", 220, "5.5", "NH-114A", ["Dumka"], 200, ["Jharkhand"], PKR_PICKUP, ["Dhanbad Station", "Bank More"], "State Highway", "Morning"),
  r("pakur", "Pakur", "deoghar", "Deoghar", 100, "2.5", "SH", ["Dumka"], 50, ["Jharkhand"], PKR_PICKUP, ["Baidyanath Dham", "Tower Chowk"], "State Highway", "Morning"),
  r("pakur", "Pakur", "dumka", "Dumka", 80, "2", "SH", [], 50, ["Jharkhand"], PKR_PICKUP, ["Dumka Town"], "State Highway", "Any time"),
  r("pakur", "Pakur", "patna", "Patna", 400, "9", "SH/NH-2", ["Deoghar", "Koderma"], 450, ["Jharkhand", "Bihar"], PKR_PICKUP, ["Patna Junction", "Airport"], "Mixed", "Early Morning"),
  r("pakur", "Pakur", "malda", "Malda", 100, "2.5", "NH-12", [], 100, ["Jharkhand", "West Bengal"], PKR_PICKUP, ["Malda Town", "Gaur"], "Mixed", "Morning"),
  r("pakur", "Pakur", "siliguri", "Siliguri", 350, "7.5", "NH-12/NH-27", ["Malda"], 400, ["Jharkhand", "West Bengal"], PKR_PICKUP, ["Siliguri Junction", "Bagdogra Airport"], "Good NH", "Early Morning"),
  r("pakur", "Pakur", "bhagalpur", "Bhagalpur", 150, "3.5", "SH", [], 100, ["Jharkhand", "Bihar"], PKR_PICKUP, ["Bhagalpur Station"], "State Highway", "Morning"),
  r("pakur", "Pakur", "sahibganj", "Sahibganj", 40, "1", "SH", [], 0, ["Jharkhand"], PKR_PICKUP, ["Sahibganj Ghat", "Railway Station"], "State Highway", "Any time"),
  r("pakur", "Pakur", "rajmahal", "Rajmahal", 50, "1.5", "SH", [], 0, ["Jharkhand"], PKR_PICKUP, ["Rajmahal Hills", "Ganga Ghat"], "State Highway", "Any time"),
  r("pakur", "Pakur", "godda", "Godda", 70, "2", "SH", [], 0, ["Jharkhand"], PKR_PICKUP, ["Godda Town"], "State Highway", "Any time"),
  r("pakur", "Pakur", "bokaro", "Bokaro", 270, "6.5", "SH/NH-33", ["Dhanbad"], 250, ["Jharkhand"], PKR_PICKUP, ["Bokaro Sector 4"], "Mixed", "Morning"),
  r("pakur", "Pakur", "hazaribagh", "Hazaribagh", 300, "7", "SH", ["Deoghar", "Giridih"], 300, ["Jharkhand"], PKR_PICKUP, ["Hazaribagh Lake"], "Mixed", "Early Morning"),
];

// ============================================================
// ADDITIONAL EXPANSION — Bokaro, Ranchi, Giridih, Dhanbad
// ============================================================

const additionalExpansion: RouteData[] = [
  // MORE BOKARO ROUTES
  r("bokaro", "Bokaro", "siliguri", "Siliguri", 500, "10", "NH-19/NH-27", ["Asansol", "Malda"], 600, ["Jharkhand", "West Bengal"], ["Sector 4", "Chas", "City Centre"], ["Siliguri Junction", "Bagdogra Airport"], "Good NH — Long", "Very Early Morning"),
  r("bokaro", "Bokaro", "darjeeling", "Darjeeling", 550, "12", "NH-27", ["Siliguri"], 650, ["Jharkhand", "West Bengal"], ["Sector 4", "Chas"], ["Darjeeling Mall", "Chowrasta"], "Mixed — hill", "Very Early Morning"),
  r("bokaro", "Bokaro", "bhubaneswar", "Bhubaneswar", 450, "9", "NH-49", ["Jamshedpur", "Rourkela"], 550, ["Jharkhand", "Odisha"], ["Sector 4", "Chas"], ["Bhubaneswar Station", "Airport"], "Good NH", "Very Early Morning"),
  r("bokaro", "Bokaro", "digha", "Digha", 380, "8", "NH-19/NH-116B", ["Asansol", "Kharagpur"], 400, ["Jharkhand", "West Bengal"], ["Sector 4", "Chas"], ["New Digha Beach"], "Good NH", "Early Morning"),
  r("bokaro", "Bokaro", "mandarmani", "Mandarmani", 360, "7.5", "NH-19/NH-116B", ["Asansol", "Kharagpur"], 400, ["Jharkhand", "West Bengal"], ["Sector 4", "Chas"], ["Mandarmani Beach"], "Good NH", "Early Morning"),
  r("bokaro", "Bokaro", "baripada", "Baripada", 250, "5.5", "NH-32/NH-18", ["Jamshedpur"], 250, ["Jharkhand", "Odisha"], ["Sector 4", "Chas"], ["Baripada Town", "Simlipal"], "Good NH", "Morning"),
  r("bokaro", "Bokaro", "dumka", "Dumka", 200, "5", "SH", ["Deoghar"], 200, ["Jharkhand"], ["Sector 4", "Chas"], ["Dumka Town"], "Mixed", "Morning"),
  r("bokaro", "Bokaro", "chaibasa", "Chaibasa", 200, "5", "NH-32/SH", ["Jamshedpur"], 200, ["Jharkhand"], ["Sector 4", "Chas"], ["Chaibasa Town"], "Good NH", "Morning"),
  r("bokaro", "Bokaro", "pakur", "Pakur", 270, "6.5", "SH", ["Deoghar", "Dumka"], 250, ["Jharkhand"], ["Sector 4", "Chas"], ["Pakur Town"], "Mixed", "Morning"),
  r("bokaro", "Bokaro", "gaya", "Gaya", 210, "5", "NH-33/NH-2", ["Hazaribagh", "Koderma"], 250, ["Jharkhand", "Bihar"], ["Sector 4", "Chas"], ["Gaya Station", "Vishnupad"], "Good NH", "Morning"),
  r("bokaro", "Bokaro", "bodh-gaya", "Bodh Gaya", 220, "5", "NH-2", ["Koderma", "Gaya"], 250, ["Jharkhand", "Bihar"], ["Sector 4", "Chas"], ["Mahabodhi Temple"], "Good NH", "Morning"),
  r("bokaro", "Bokaro", "bhagalpur", "Bhagalpur", 300, "7", "SH", ["Deoghar"], 300, ["Jharkhand", "Bihar"], ["Sector 4", "Chas"], ["Bhagalpur Station"], "Mixed", "Early Morning"),
  r("bokaro", "Bokaro", "muzaffarpur", "Muzaffarpur", 400, "9", "NH-22", ["Patna"], 450, ["Jharkhand", "Bihar"], ["Sector 4", "Chas"], ["Muzaffarpur Station"], "Good NH", "Early Morning"),
  r("bokaro", "Bokaro", "darbhanga", "Darbhanga", 450, "10", "NH-27", ["Patna", "Muzaffarpur"], 550, ["Jharkhand", "Bihar"], ["Sector 4", "Chas"], ["Darbhanga City"], "Good NH — Long", "Very Early Morning"),
  r("bokaro", "Bokaro", "rourkela", "Rourkela", 250, "5.5", "NH-32/NH-75", ["Jamshedpur"], 250, ["Jharkhand", "Odisha"], ["Sector 4", "Chas"], ["Rourkela Station"], "Good NH", "Morning"),
  r("bokaro", "Bokaro", "daltonganj", "Daltonganj", 230, "5.5", "NH-33/NH-39", ["Hazaribagh"], 250, ["Jharkhand"], ["Sector 4", "Chas"], ["Daltonganj Town", "Betla"], "Mixed", "Morning"),
  r("bokaro", "Bokaro", "netarhat", "Netarhat", 270, "6.5", "NH-33/SH", ["Ramgarh", "Latehar"], 300, ["Jharkhand"], ["Sector 4", "Chas"], ["Netarhat Hill Station"], "Hill Roads", "Morning"),
  r("bokaro", "Bokaro", "kharagpur", "Kharagpur", 230, "5", "NH-19/NH-14", ["Asansol"], 300, ["Jharkhand", "West Bengal"], ["Sector 4", "Chas"], ["IIT Kharagpur", "Station"], "Good NH", "Morning"),
  r("bokaro", "Bokaro", "purulia", "Purulia", 70, "2", "SH", [], 50, ["Jharkhand", "West Bengal"], ["Sector 4", "Chas"], ["Purulia Town"], "State Highway", "Any time"),
  r("bokaro", "Bokaro", "bankura", "Bankura", 130, "3", "SH", ["Purulia"], 100, ["Jharkhand", "West Bengal"], ["Sector 4", "Chas"], ["Bankura Town"], "Mixed", "Morning"),
  r("bokaro", "Bokaro", "bardhaman", "Bardhaman", 200, "4.5", "NH-19", ["Asansol"], 250, ["Jharkhand", "West Bengal"], ["Sector 4", "Chas"], ["Bardhaman Station"], "Good NH", "Morning"),

  // MORE RANCHI ROUTES
  r("ranchi", "Ranchi", "rajgir", "Rajgir", 250, "5.5", "NH-2/SH", ["Hazaribagh", "Gaya"], 300, ["Jharkhand", "Bihar"], ["Ranchi Station", "Doranda", "Airport"], ["Rajgir Hot Springs", "Vishwa Shanti Stupa"], "Good NH", "Morning"),
  r("ranchi", "Ranchi", "nalanda", "Nalanda", 260, "6", "NH-2", ["Hazaribagh", "Gaya"], 300, ["Jharkhand", "Bihar"], ["Ranchi Station", "Doranda"], ["Nalanda University Ruins"], "Good NH", "Morning"),
  r("ranchi", "Ranchi", "pawapuri", "Pawapuri", 240, "5.5", "NH-2", ["Hazaribagh", "Gaya"], 300, ["Jharkhand", "Bihar"], ["Ranchi Station", "Doranda"], ["Pawapuri Jal Mandir"], "Good NH", "Morning"),
  r("ranchi", "Ranchi", "muzaffarpur", "Muzaffarpur", 410, "9-10", "NH-22", ["Patna"], 500, ["Jharkhand", "Bihar"], ["Ranchi Station", "Doranda", "Airport"], ["Muzaffarpur Station"], "Good NH", "Early Morning"),
  r("ranchi", "Ranchi", "bhagalpur", "Bhagalpur", 380, "9", "SH", ["Deoghar"], 400, ["Jharkhand", "Bihar"], ["Ranchi Station", "Doranda"], ["Bhagalpur Station"], "Mixed", "Early Morning"),
  r("ranchi", "Ranchi", "darbhanga", "Darbhanga", 460, "11", "NH-27", ["Patna", "Muzaffarpur"], 600, ["Jharkhand", "Bihar"], ["Ranchi Station", "Doranda", "Airport"], ["Darbhanga City"], "Good NH — Long", "Very Early Morning"),
  r("ranchi", "Ranchi", "sasaram", "Sasaram", 260, "6", "NH-19", ["Gaya"], 300, ["Jharkhand", "Bihar"], ["Ranchi Station", "Doranda"], ["Sasaram Town"], "Good NH", "Morning"),

  // MORE GIRIDIH ROUTES
  r("giridih", "Giridih", "kolkata", "Kolkata", 320, "7-8", "NH-19", ["Dhanbad", "Asansol"], 350, ["Jharkhand", "West Bengal"], ["Giridih Station", "Gandhi Chowk", "Parasnath"], ["Howrah Station", "Airport"], "Mixed", "Early Morning"),
  r("giridih", "Giridih", "patna", "Patna", 280, "6.5", "NH-2", ["Koderma"], 300, ["Jharkhand", "Bihar"], ["Giridih Station", "Gandhi Chowk"], ["Patna Junction", "Airport"], "Mixed", "Early Morning"),
  r("giridih", "Giridih", "gaya", "Gaya", 200, "5", "NH-2", ["Koderma"], 200, ["Jharkhand", "Bihar"], ["Giridih Station", "Gandhi Chowk"], ["Gaya Station", "Vishnupad"], "Mixed", "Morning"),
  r("giridih", "Giridih", "varanasi", "Varanasi", 510, "10", "NH-2", ["Koderma", "Gaya"], 600, ["Jharkhand", "Bihar", "UP"], ["Giridih Station", "Gandhi Chowk"], ["Varanasi Station"], "Good NH — Long", "Very Early Morning"),
  r("giridih", "Giridih", "dumka", "Dumka", 100, "2.5-3", "SH", ["Deoghar"], 100, ["Jharkhand"], ["Giridih Station"], ["Dumka Town"], "State Highway", "Morning"),
  r("giridih", "Giridih", "chaibasa", "Chaibasa", 230, "5.5", "SH/NH-32", ["Jamshedpur"], 200, ["Jharkhand"], ["Giridih Station"], ["Chaibasa Town"], "Mixed", "Morning"),
  r("giridih", "Giridih", "daltonganj", "Daltonganj", 250, "6", "SH", ["Hazaribagh", "Chatra"], 250, ["Jharkhand"], ["Giridih Station"], ["Daltonganj Town"], "State Highway", "Morning"),
  r("giridih", "Giridih", "asansol", "Asansol", 150, "3.5", "NH-19", ["Dhanbad"], 150, ["Jharkhand", "West Bengal"], ["Giridih Station", "Gandhi Chowk"], ["Asansol Station"], "Good NH", "Morning"),
  r("giridih", "Giridih", "siliguri", "Siliguri", 480, "10", "NH-27", ["Asansol", "Malda"], 550, ["Jharkhand", "West Bengal"], ["Giridih Station"], ["Siliguri Junction"], "Good NH — Long", "Very Early Morning"),
  r("giridih", "Giridih", "puri", "Puri", 530, "11", "NH-49/NH-16", ["Jamshedpur", "Bhubaneswar"], 650, ["Jharkhand", "Odisha"], ["Giridih Station"], ["Puri Jagannath Temple"], "Good NH — Long", "Very Early Morning"),
  r("giridih", "Giridih", "digha", "Digha", 420, "9", "NH-116B", ["Dhanbad", "Kharagpur"], 450, ["Jharkhand", "West Bengal"], ["Giridih Station"], ["New Digha Beach"], "Good NH", "Very Early Morning"),
  r("giridih", "Giridih", "pakur", "Pakur", 170, "4", "SH", ["Deoghar"], 150, ["Jharkhand"], ["Giridih Station"], ["Pakur Town"], "State Highway", "Morning"),
  r("giridih", "Giridih", "ramgarh", "Ramgarh", 110, "3", "SH", ["Bokaro"], 100, ["Jharkhand"], ["Giridih Station"], ["Ramgarh Cantt"], "State Highway", "Morning"),
  r("giridih", "Giridih", "rourkela", "Rourkela", 300, "7", "NH-75", ["Jamshedpur", "Chaibasa"], 300, ["Jharkhand", "Odisha"], ["Giridih Station"], ["Rourkela Station"], "Good NH", "Early Morning"),
];

// ============================================================
// EXPORT ALL
// ============================================================

export const cityExpansionRoutes: RouteData[] = [
  ...hazaribaghRoutes,
  ...dumkaRoutes,
  ...chaibasaRoutes,
  ...adityapurRoutes,
  ...ramgarhRoutes,
  ...kodermaRoutes,
  ...daltonganjRoutes,
  ...phusroRoutes,
  ...pakurRoutes,
  ...additionalExpansion,
];

export const CITY_EXPANSION_COUNT = cityExpansionRoutes.length;
