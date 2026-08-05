// ============================================================
// RS Travel — OUTSTATION ROUTES DATA
// 900+ routes with fares, distances, and details
// Includes 350+ Jamshedpur, 80+ Kolkata, 320+ city expansion routes
// ============================================================

import { jamshedpurExpansionRoutes } from './jamshedpurRoutes';
import { kolkataExpansionRoutes } from './kolkataRoutes';
import { cityExpansionRoutes } from './expansionRoutes';

export interface RouteData {
  from: string;
  fromName: string;
  to: string;
  toName: string;
  distanceKm: number;
  durationHrs: string;
  nh: string;
  via: string[];
  fares: {
    hatchback: number;
    sedan: number;
    suv: number;
    crysta: number;
    tempo: number;
  };
  tolls: number;
  pitStops: string[];
  bestTime: string;
  roadCondition: string;
  statesCrossed: string[];
  pickupPoints: string[];
  dropPoints: string[];
  /** Unique hand-crafted route guide (500+ words). Only for top-value routes. */
  longContent?: string;
}

const baseRoutes: RouteData[] = [
  // ========== FROM JAMSHEDPUR ==========
  {
    from: "jamshedpur", fromName: "Jamshedpur",
    to: "kolkata", toName: "Kolkata",
    distanceKm: 260, durationHrs: "5-6", nh: "NH-49",
    via: ["Ghatsila", "Kharagpur", "Uluberia"],
    fares: { hatchback: 3999, sedan: 4799, suv: 6499, crysta: 8499, tempo: 9999 },
    tolls: 400, pitStops: ["Kolaghat Service Station"],
    bestTime: "Early morning 5-7 AM",
    roadCondition: "Good NH roads, 4-lane from Kharagpur onwards",
    statesCrossed: ["Jharkhand", "West Bengal"],
    pickupPoints: ["Mango", "Bistupur", "Sakchi", "Jugsalai", "Adityapur", "Telco", "Dimna Road", "Tatanagar Station", "XLRI", "NIT Jamshedpur"],
    dropPoints: ["Howrah Station", "Sealdah", "Esplanade", "Salt Lake", "Rajarhat", "Airport", "Park Street", "Gariahat", "Jadavpur", "Newtown"],
    longContent: `The stretch of blacktop linking Jamshedpur with Kolkata is arguably the most travelled intercity artery in all of Eastern India, threading the steel city of Tata to the riverside metropolis of Bengal. Clocking in at 260 km on NH-49, the drive begins amid the rolling Chota Nagpur Plateau and gradually sheds height as it funnels into the flat, rice-green lowlands of West Bengal.

As you roll out of the city, the industrial sprawl of Gamharia slips past, and before long the highway brushes the outskirts of Ghatsila — a quiet township best known for its copper-working heritage and the sandy banks of the Subarnarekha, which the road shadows for stretches. This early leg is pure Jharkhand: thick stands of sal, wayside tribal hamlets, and a slower, more rustic rhythm of life. Around Baharagora you cross from Jharkhand into West Bengal, and from that point the carriageway visibly firms up as the 4-lane expressway segment begins.

Kharagpur, anchored by the sprawling IIT Kharagpur campus, marks the natural midpoint — and the best place to stretch your legs. The Kolaghat service station along the highway keeps tidy washrooms, a clutch of restaurants, and fuel pumps that spare you the hassle of hunting for petrol later. Ask our drivers for the little dhaba sitting near the Kolaghat bridge; it is a favourite stop for a proper plate of Bengali fish curry and steamed rice.

Beyond Kharagpur the tarmac is in superb shape, rolling through Uluberia before the Vidyasagar Setu — the Second Hooghly Bridge — carries you into the heart of Kolkata. Because our chauffeurs run this line several times a week, they know exactly which of the city's approaches moves fastest at any hour, whether your drop point is Howrah Station, the Salt Lake IT district, Rajarhat or the airport terminal.

On timing: leaving between 5 and 6 in the morning puts you inside the city by mid-morning, ideal for business meetings. An evening start, say 4-5 PM, suits weekend getaways well, while a late-night departure from 10 PM onwards lines up neatly with dawn flights out of Kolkata Airport. Our standing advice to passengers is to carry a few snacks for the Jharkhand leg, since eateries are thin on the ground between Jamshedpur and Kharagpur; once you cross into Bengal, food options multiply. And if you travel during the monsoon months of July through September, budget a little extra time — the low-lying stretches around Kolaghat are prone to waterlogging and can slow traffic noticeably.`
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur",
    to: "ranchi", toName: "Ranchi",
    distanceKm: 130, durationHrs: "3-4", nh: "NH-33",
    via: ["Gamharia", "Chandil", "Tamar"],
    fares: { hatchback: 1499, sedan: 1499, suv: 2299, crysta: 5499, tempo: 6999 },
    tolls: 200, pitStops: ["Chandil Dam Rest Stop"],
    bestTime: "Any time — good road",
    roadCondition: "Good 4-lane NH throughout",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Mango", "Bistupur", "Sakchi", "Tatanagar Station", "Adityapur", "Dimna Road"],
    dropPoints: ["Ranchi Station", "Doranda", "Lalpur", "Birsa Munda Airport", "Kanke", "Morabadi"],
    longContent: `For anyone moving between Jharkhand's two biggest cities, the Jamshedpur to Ranchi run is the state's most-travelled intercity connection — a quick 130 km hop on NH-33 that links the home of Tata Steel to the seat of the state government. Our drivers log this particular route ten to fifteen times every single week, so they could practically drive it in their sleep.

The car leaves Jamshedpur and swings onto the highway through Gamharia, and the first sight worth craning your neck for is Chandil Dam, one of Jharkhand's biggest water reservoirs. If you happen to travel in the monsoon, the sight of the dam spilling over its brim is genuinely spectacular, and plenty of passengers ask us to slow down so they can capture it on their phones. Chandil town itself keeps a few decent tea stalls and eateries if a quick chai break appeals to you.

After Chandil, the road burrows into the wooded ridges around Tamar. This is the prettiest leg of the whole trip — tall sal forests, tiny tribal settlements strung along the roadside, and the occasional elephant ambling right across in front of you (yes, really). Despite all the greenery, this is no poky back lane: NH-33 here is a proper 4-lane highway with clean lane markings and crash barriers all the way through.

Near the tail end, the terrain levels out onto the Ranchi Plateau, and from there it is plain sailing into the city. Our drivers have every entry point memorised and will deliver you straight to Birsa Munda Airport for a connecting flight, Ranchi Railway Station, RIMS Hospital, Rajendra Chowk, or whichever hotel you name.

One thing worth knowing: this route carries two toll plazas — one just after Gamharia and another near Tamar — but they will not cost you a single rupee extra. The ₹1,499 hatchback fare already folds in the tolls (roughly ₹200 in total), fuel, driver allowance, and pickup and drop from anywhere in either city. If you are bound for Birsa Munda Airport, book your cab four hours ahead of the flight; three and a half hours is comfortably enough if the railway station is your target.`
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur",
    to: "dhanbad", toName: "Dhanbad",
    distanceKm: 80, durationHrs: "2-2.5", nh: "NH-32",
    via: ["Gamharia", "Chandrapura"],
    fares: { hatchback: 2399, sedan: 3099, suv: 4199, crysta: 5399, tempo: 6799 },
    tolls: 100, pitStops: [],
    bestTime: "Any time",
    roadCondition: "Good road via NH-32",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Mango", "Bistupur", "Sakchi", "Tatanagar Station"],
    dropPoints: ["Dhanbad Station", "Bank More", "Jharia", "Sindri", "Hirapur"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur",
    to: "bokaro", toName: "Bokaro",
    distanceKm: 120, durationHrs: "3-3.5", nh: "NH-32",
    via: ["Gamharia", "Chandrapura", "Phusro"],
    fares: { hatchback: 1999, sedan: 2499, suv: 3499, crysta: 4499, tempo: 5499 },
    tolls: 150, pitStops: [],
    bestTime: "Any time",
    roadCondition: "Good road condition",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Mango", "Bistupur", "Sakchi", "Tatanagar Station"],
    dropPoints: ["Bokaro Sector 4", "Chas", "City Centre", "Naya More"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur",
    to: "bhubaneswar", toName: "Bhubaneswar",
    distanceKm: 420, durationHrs: "8-9", nh: "NH-49",
    via: ["Chaibasa", "Rourkela", "Sambalpur"],
    fares: { hatchback: 6499, sedan: 7799, suv: 9999, crysta: 12999, tempo: 16999 },
    tolls: 600, pitStops: ["Rourkela", "Sambalpur"],
    bestTime: "Early morning departure",
    roadCondition: "Mixed — good NH with some state highway patches",
    statesCrossed: ["Jharkhand", "Odisha"],
    pickupPoints: ["Mango", "Bistupur", "Sakchi", "Tatanagar Station"],
    dropPoints: ["Bhubaneswar Station", "Patia", "Saheed Nagar", "Airport", "Khandagiri"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur",
    to: "puri", toName: "Puri",
    distanceKm: 520, durationHrs: "10-11", nh: "NH-49/NH-16",
    via: ["Chaibasa", "Rourkela", "Bhubaneswar"],
    fares: { hatchback: 7999, sedan: 9599, suv: 12999, crysta: 16999, tempo: 21999 },
    tolls: 700, pitStops: ["Rourkela", "Bhubaneswar"],
    bestTime: "Early morning 4-5 AM departure",
    roadCondition: "Good NH roads via Odisha",
    statesCrossed: ["Jharkhand", "Odisha"],
    pickupPoints: ["Mango", "Bistupur", "Sakchi", "Tatanagar Station"],
    dropPoints: ["Puri Station", "Jagannath Temple", "Puri Beach", "Swargadwar"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur",
    to: "asansol", toName: "Asansol",
    distanceKm: 170, durationHrs: "3.5-4", nh: "NH-19",
    via: ["Dhanbad", "Burnpur"],
    fares: { hatchback: 2999, sedan: 3599, suv: 4899, crysta: 6299, tempo: 7999 },
    tolls: 200, pitStops: ["Dhanbad"],
    bestTime: "Any time",
    roadCondition: "Good road",
    statesCrossed: ["Jharkhand", "West Bengal"],
    pickupPoints: ["Mango", "Bistupur", "Sakchi", "Tatanagar Station"],
    dropPoints: ["Asansol Station", "Burnpur", "Durgapur Road"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur",
    to: "durgapur", toName: "Durgapur",
    distanceKm: 200, durationHrs: "4-5", nh: "NH-19",
    via: ["Dhanbad", "Asansol"],
    fares: { hatchback: 3399, sedan: 4099, suv: 5499, crysta: 7099, tempo: 8999 },
    tolls: 250, pitStops: ["Asansol"],
    bestTime: "Morning",
    roadCondition: "Good NH road",
    statesCrossed: ["Jharkhand", "West Bengal"],
    pickupPoints: ["Mango", "Bistupur", "Sakchi", "Tatanagar Station"],
    dropPoints: ["Durgapur Station", "City Centre", "Benachity"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur",
    to: "deoghar", toName: "Deoghar",
    distanceKm: 160, durationHrs: "4-5", nh: "NH-114A",
    via: ["Dhanbad", "Madhupur"],
    fares: { hatchback: 2899, sedan: 3499, suv: 4699, crysta: 5999, tempo: 7699 },
    tolls: 150, pitStops: ["Dhanbad"],
    bestTime: "Early morning for darshan",
    roadCondition: "Moderate to good",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Mango", "Bistupur", "Sakchi", "Tatanagar Station"],
    dropPoints: ["Baidyanath Dham", "Tower Chowk", "Jasidih Station"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur",
    to: "giridih", toName: "Giridih",
    distanceKm: 170, durationHrs: "4-5", nh: "NH-114A",
    via: ["Dhanbad"],
    fares: { hatchback: 2999, sedan: 3599, suv: 4899, crysta: 6299, tempo: 7999 },
    tolls: 150, pitStops: ["Dhanbad"],
    bestTime: "Morning",
    roadCondition: "Mixed roads — NH + state highway",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Mango", "Bistupur", "Sakchi"],
    dropPoints: ["Giridih Station", "Gandhi Chowk", "Parasnath"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur",
    to: "hazaribagh", toName: "Hazaribagh",
    distanceKm: 180, durationHrs: "4-5", nh: "NH-33",
    via: ["Chandil", "Ramgarh"],
    fares: { hatchback: 3099, sedan: 3699, suv: 4999, crysta: 6499, tempo: 8299 },
    tolls: 200, pitStops: ["Ramgarh"],
    bestTime: "Morning",
    roadCondition: "Good NH-33",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Mango", "Bistupur", "Sakchi"],
    dropPoints: ["Hazaribagh Lake", "Court Area", "Canary Hill"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur",
    to: "siliguri", toName: "Siliguri",
    distanceKm: 450, durationHrs: "9-10", nh: "NH-27",
    via: ["Asansol", "Bardhaman", "Malda"],
    fares: { hatchback: 6999, sedan: 8399, suv: 11499, crysta: 14999, tempo: 18999 },
    tolls: 600, pitStops: ["Asansol", "Malda"],
    bestTime: "Early morning departure",
    roadCondition: "Good NH road, long journey",
    statesCrossed: ["Jharkhand", "West Bengal"],
    pickupPoints: ["Mango", "Bistupur", "Sakchi"],
    dropPoints: ["Siliguri Junction", "Tenzing Norgay Bus Stand", "Bagdogra Airport"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur",
    to: "darjeeling", toName: "Darjeeling",
    distanceKm: 500, durationHrs: "10-12", nh: "NH-27/NH-110",
    via: ["Asansol", "Siliguri"],
    fares: { hatchback: 7799, sedan: 9359, suv: 12799, crysta: 16499, tempo: 20999 },
    tolls: 650, pitStops: ["Asansol", "Siliguri"],
    bestTime: "Early morning — reach by evening",
    roadCondition: "Good NH then hill roads from Siliguri",
    statesCrossed: ["Jharkhand", "West Bengal"],
    pickupPoints: ["Mango", "Bistupur", "Sakchi"],
    dropPoints: ["Darjeeling Mall", "Chowrasta", "Darjeeling Station"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur",
    to: "patna", toName: "Patna",
    distanceKm: 340, durationHrs: "7-8", nh: "NH-33/NH-19",
    via: ["Ranchi", "Hazaribagh", "Koderma"],
    fares: { hatchback: 5499, sedan: 6599, suv: 8999, crysta: 11499, tempo: 14999 },
    tolls: 400, pitStops: ["Hazaribagh", "Koderma"],
    bestTime: "Early morning",
    roadCondition: "Good NH, long journey",
    statesCrossed: ["Jharkhand", "Bihar"],
    pickupPoints: ["Mango", "Bistupur", "Sakchi"],
    dropPoints: ["Patna Junction", "Gandhi Maidan", "Patna Airport", "Kankarbagh"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur",
    to: "digha", toName: "Digha",
    distanceKm: 320, durationHrs: "6-7", nh: "NH-49/NH-116B",
    via: ["Kharagpur", "Contai"],
    fares: { hatchback: 4999, sedan: 5999, suv: 8199, crysta: 10499, tempo: 13499 },
    tolls: 350, pitStops: ["Kharagpur"],
    bestTime: "Morning",
    roadCondition: "Good road via Kharagpur",
    statesCrossed: ["Jharkhand", "West Bengal"],
    pickupPoints: ["Mango", "Bistupur", "Sakchi"],
    dropPoints: ["Old Digha", "New Digha", "Digha Sea Beach"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur",
    to: "mandarmani", toName: "Mandarmani",
    distanceKm: 280, durationHrs: "5.5-6.5", nh: "NH-49",
    via: ["Kharagpur", "Contai"],
    fares: { hatchback: 4499, sedan: 5399, suv: 7399, crysta: 9499, tempo: 11999 },
    tolls: 300, pitStops: ["Kharagpur"],
    bestTime: "Morning departure",
    roadCondition: "Good road",
    statesCrossed: ["Jharkhand", "West Bengal"],
    pickupPoints: ["Mango", "Bistupur", "Sakchi"],
    dropPoints: ["Mandarmani Beach", "Mandarmani Resort Area"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur",
    to: "chaibasa", toName: "Chaibasa",
    distanceKm: 60, durationHrs: "1.5-2", nh: "NH-75",
    via: ["Direct route"],
    fares: { hatchback: 1799, sedan: 2199, suv: 2999, crysta: 3899, tempo: 4999 },
    tolls: 50, pitStops: [],
    bestTime: "Any time",
    roadCondition: "Good road",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Mango", "Bistupur", "Sakchi"],
    dropPoints: ["Chaibasa Town", "Court Area"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur",
    to: "dumka", toName: "Dumka",
    distanceKm: 130, durationHrs: "3.5-4", nh: "SH",
    via: ["Ghatsila", "Baharagora"],
    fares: { hatchback: 2499, sedan: 2999, suv: 4099, crysta: 5299, tempo: 6799 },
    tolls: 100, pitStops: [],
    bestTime: "Morning",
    roadCondition: "Mixed — state highways",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Mango", "Bistupur", "Sakchi"],
    dropPoints: ["Dumka Town", "Station Road"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur",
    to: "daltonganj", toName: "Daltonganj",
    distanceKm: 200, durationHrs: "5-6", nh: "NH-75",
    via: ["Ranchi", "Latehar"],
    fares: { hatchback: 3399, sedan: 4099, suv: 5499, crysta: 7099, tempo: 8999 },
    tolls: 200, pitStops: ["Ranchi"],
    bestTime: "Morning",
    roadCondition: "NH till Ranchi, then state highway",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Mango", "Bistupur", "Sakchi"],
    dropPoints: ["Daltonganj Town", "Medininagar"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur",
    to: "ramgarh", toName: "Ramgarh",
    distanceKm: 170, durationHrs: "4-4.5", nh: "NH-33",
    via: ["Chandil", "Ormanjhi"],
    fares: { hatchback: 2999, sedan: 3599, suv: 4899, crysta: 6299, tempo: 7999 },
    tolls: 150, pitStops: [],
    bestTime: "Any time",
    roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Mango", "Bistupur", "Sakchi"],
    dropPoints: ["Ramgarh Cantt", "Patratu"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur",
    to: "rourkela", toName: "Rourkela",
    distanceKm: 120, durationHrs: "3-3.5", nh: "NH-75",
    via: ["Chaibasa"],
    fares: { hatchback: 2399, sedan: 2899, suv: 3899, crysta: 4999, tempo: 6499 },
    tolls: 150, pitStops: [],
    bestTime: "Any time",
    roadCondition: "Good road via Chaibasa",
    statesCrossed: ["Jharkhand", "Odisha"],
    pickupPoints: ["Mango", "Bistupur", "Sakchi"],
    dropPoints: ["Rourkela Station", "Sector 1", "Steel Plant"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur",
    to: "koderma", toName: "Koderma",
    distanceKm: 190, durationHrs: "4.5-5", nh: "NH-33/NH-2",
    via: ["Ranchi", "Hazaribagh"],
    fares: { hatchback: 3199, sedan: 3839, suv: 5199, crysta: 6699, tempo: 8499 },
    tolls: 200, pitStops: ["Hazaribagh"],
    bestTime: "Morning",
    roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Mango", "Bistupur", "Sakchi"],
    dropPoints: ["Koderma Town", "Jhumri Tilaiya"]
  },

  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "netarhat", toName: "Netarhat",
    distanceKm: 280, durationHrs: "7-8", nh: "NH-33", via: ["Ranchi", "Lohardaga"],
    fares: { hatchback: 4299, sedan: 5159, suv: 6999, crysta: 8999, tempo: 11499 },
    tolls: 300, pitStops: ["Ranchi"], bestTime: "Early Morning", roadCondition: "Mixed with Hill Roads",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["Netarhat Point"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "betla", toName: "Betla",
    distanceKm: 300, durationHrs: "7-8", nh: "NH-75", via: ["Ranchi", "Latehar"],
    fares: { hatchback: 4499, sedan: 5399, suv: 7399, crysta: 9499, tempo: 11999 },
    tolls: 350, pitStops: ["Ranchi"], bestTime: "Morning", roadCondition: "Good NH then State Highway",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["Betla National Park"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "patratu", toName: "Patratu",
    distanceKm: 160, durationHrs: "4-5", nh: "NH-33", via: ["Chandil", "Ranchi"],
    fares: { hatchback: 2899, sedan: 3499, suv: 4699, crysta: 5999, tempo: 7699 },
    tolls: 150, pitStops: [], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["Patratu Valley"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "rajrappa", toName: "Rajrappa",
    distanceKm: 140, durationHrs: "3.5", nh: "NH-33", via: ["Chandil", "Gola"],
    fares: { hatchback: 2499, sedan: 2999, suv: 4099, crysta: 5299, tempo: 6799 },
    tolls: 100, pitStops: [], bestTime: "Early Morning for Darshan", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["Chhinnamasta Temple"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "pakur", toName: "Pakur",
    distanceKm: 250, durationHrs: "6", nh: "NH-114A", via: ["Dhanbad"],
    fares: { hatchback: 3999, sedan: 4799, suv: 6499, crysta: 8499, tempo: 10999 },
    tolls: 200, pitStops: ["Dhanbad"], bestTime: "Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["Pakur Town"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "phusro", toName: "Phusro",
    distanceKm: 130, durationHrs: "3.5", nh: "NH-32", via: ["Chandrapura"],
    fares: { hatchback: 2399, sedan: 2899, suv: 3899, crysta: 4999, tempo: 6499 },
    tolls: 150, pitStops: [], bestTime: "Any time", roadCondition: "Good Road",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["Phusro Town"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "ghatsila", toName: "Ghatsila",
    distanceKm: 45, durationHrs: "1-1.5", nh: "NH-49", via: ["Direct"],
    fares: { hatchback: 999, sedan: 1199, suv: 1599, crysta: 2099, tempo: 2699 },
    tolls: 50, pitStops: [], bestTime: "Any time", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["Ghatsila Town", "Phuldungri"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "jadugoda", toName: "Jadugoda",
    distanceKm: 30, durationHrs: "0.5-1", nh: "SH", via: ["Direct"],
    fares: { hatchback: 799, sedan: 999, suv: 1399, crysta: 1799, tempo: 2399 },
    tolls: 0, pitStops: [], bestTime: "Any time", roadCondition: "State Highway",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["Jadugoda Mines", "Rankini Temple"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "seraikela", toName: "Seraikela",
    distanceKm: 40, durationHrs: "1", nh: "SH", via: ["Adityapur"],
    fares: { hatchback: 899, sedan: 1099, suv: 1499, crysta: 1899, tempo: 2499 },
    tolls: 0, pitStops: [], bestTime: "Any time", roadCondition: "State Highway",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["Seraikela Palace"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "khunti", toName: "Khunti",
    distanceKm: 150, durationHrs: "4", nh: "NH-20", via: ["Chaibasa"],
    fares: { hatchback: 2699, sedan: 3239, suv: 4399, crysta: 5699, tempo: 7199 },
    tolls: 100, pitStops: [], bestTime: "Morning", roadCondition: "Good Road",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["Khunti Town"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "simdega", toName: "Simdega",
    distanceKm: 250, durationHrs: "6", nh: "NH-143", via: ["Chaibasa", "Khunti"],
    fares: { hatchback: 3999, sedan: 4799, suv: 6499, crysta: 8499, tempo: 10999 },
    tolls: 200, pitStops: [], bestTime: "Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["Simdega Town"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "lohardaga", toName: "Lohardaga",
    distanceKm: 200, durationHrs: "5", nh: "NH-43", via: ["Ranchi"],
    fares: { hatchback: 3399, sedan: 4099, suv: 5499, crysta: 7099, tempo: 8999 },
    tolls: 200, pitStops: ["Ranchi"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["Lohardaga Town"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "gumla", toName: "Gumla",
    distanceKm: 230, durationHrs: "5.5", nh: "NH-43", via: ["Ranchi"],
    fares: { hatchback: 3799, sedan: 4599, suv: 6199, crysta: 7999, tempo: 9999 },
    tolls: 200, pitStops: ["Ranchi"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["Gumla Town"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "kharagpur", toName: "Kharagpur",
    distanceKm: 140, durationHrs: "3", nh: "NH-49", via: ["Baharagora"],
    fares: { hatchback: 2499, sedan: 2999, suv: 4099, crysta: 5299, tempo: 6799 },
    tolls: 200, pitStops: [], bestTime: "Any time", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["IIT Kharagpur", "Kharagpur Station"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "haldia", toName: "Haldia",
    distanceKm: 250, durationHrs: "5.5", nh: "NH-116", via: ["Kharagpur"],
    fares: { hatchback: 3999, sedan: 4799, suv: 6499, crysta: 8499, tempo: 10999 },
    tolls: 300, pitStops: ["Kharagpur"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["Haldia Port"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "purulia", toName: "Purulia",
    distanceKm: 90, durationHrs: "2.5", nh: "SH", via: ["Chandil"],
    fares: { hatchback: 1699, sedan: 2099, suv: 2899, crysta: 3699, tempo: 4699 },
    tolls: 50, pitStops: [], bestTime: "Any time", roadCondition: "State Highway",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["Purulia Town"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "bankura", toName: "Bankura",
    distanceKm: 160, durationHrs: "4", nh: "SH", via: ["Purulia"],
    fares: { hatchback: 2899, sedan: 3499, suv: 4699, crysta: 5999, tempo: 7699 },
    tolls: 150, pitStops: ["Purulia"], bestTime: "Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["Bankura Town"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "bardhaman", toName: "Bardhaman",
    distanceKm: 250, durationHrs: "6", nh: "SH/NH-19", via: ["Purulia", "Bankura"],
    fares: { hatchback: 3999, sedan: 4799, suv: 6499, crysta: 8499, tempo: 10999 },
    tolls: 250, pitStops: ["Bankura"], bestTime: "Morning", roadCondition: "Mixed then NH",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["Bardhaman Station"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "malda", toName: "Malda",
    distanceKm: 450, durationHrs: "10", nh: "NH-12", via: ["Asansol", "Bahrampore"],
    fares: { hatchback: 6999, sedan: 8399, suv: 11499, crysta: 14999, tempo: 18999 },
    tolls: 550, pitStops: ["Asansol"], bestTime: "Very Early Morning", roadCondition: "Long Journey",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["Malda Town"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "murshidabad", toName: "Murshidabad",
    distanceKm: 370, durationHrs: "8", nh: "NH-12", via: ["Asansol", "Bardhaman"],
    fares: { hatchback: 5899, sedan: 7079, suv: 9699, crysta: 12499, tempo: 15999 },
    tolls: 450, pitStops: ["Asansol"], bestTime: "Early Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["Hazarduari Palace"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "baripada", toName: "Baripada",
    distanceKm: 110, durationHrs: "2.5", nh: "NH-18", via: ["Baharagora"],
    fares: { hatchback: 1999, sedan: 2399, suv: 3299, crysta: 4299, tempo: 5499 },
    tolls: 100, pitStops: [], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["Baripada Town", "Simlipal"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "balasore", toName: "Balasore",
    distanceKm: 160, durationHrs: "4", nh: "NH-18", via: ["Baripada"],
    fares: { hatchback: 2899, sedan: 3499, suv: 4699, crysta: 5999, tempo: 7699 },
    tolls: 150, pitStops: ["Baripada"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["Balasore Station", "Chandipur"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "cuttack", toName: "Cuttack",
    distanceKm: 390, durationHrs: "8", nh: "NH-16", via: ["Bhubaneswar", "Balasore"],
    fares: { hatchback: 5999, sedan: 7199, suv: 9799, crysta: 12499, tempo: 15999 },
    tolls: 500, pitStops: ["Balasore"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["Cuttack Chandi", "Station"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "keonjhar", toName: "Keonjhar",
    distanceKm: 150, durationHrs: "3.5", nh: "NH-20", via: ["Chaibasa"],
    fares: { hatchback: 2699, sedan: 3239, suv: 4399, crysta: 5699, tempo: 7199 },
    tolls: 150, pitStops: [], bestTime: "Any time", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["Keonjhar Town"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "sambalpur", toName: "Sambalpur",
    distanceKm: 300, durationHrs: "7", nh: "NH-49", via: ["Rourkela", "Jharsuguda"],
    fares: { hatchback: 4899, sedan: 5879, suv: 7999, crysta: 10299, tempo: 13299 },
    tolls: 350, pitStops: ["Rourkela"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["Sambalpur Town"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "jharsuguda", toName: "Jharsuguda",
    distanceKm: 260, durationHrs: "6", nh: "NH-49", via: ["Rourkela"],
    fares: { hatchback: 4299, sedan: 5159, suv: 6999, crysta: 8999, tempo: 11499 },
    tolls: 300, pitStops: ["Rourkela"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["Jharsuguda Airport", "Town"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "gaya", toName: "Gaya",
    distanceKm: 350, durationHrs: "8", nh: "NH-2", via: ["Ranchi", "Koderma"],
    fares: { hatchback: 5699, sedan: 6839, suv: 9399, crysta: 12099, tempo: 15699 },
    tolls: 450, pitStops: ["Ranchi", "Koderma"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["Gaya Station", "Vishnupad"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "bodh-gaya", toName: "Bodh Gaya",
    distanceKm: 340, durationHrs: "8", nh: "NH-2", via: ["Ranchi", "Koderma"],
    fares: { hatchback: 5499, sedan: 6599, suv: 8999, crysta: 11499, tempo: 14999 },
    tolls: 450, pitStops: ["Ranchi", "Koderma"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["Mahabodhi Temple"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "bhagalpur", toName: "Bhagalpur",
    distanceKm: 380, durationHrs: "9", nh: "SH", via: ["Dumka"],
    fares: { hatchback: 6199, sedan: 7439, suv: 10199, crysta: 13099, tempo: 16999 },
    tolls: 400, pitStops: ["Dumka"], bestTime: "Early Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["Bhagalpur Station"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "muzaffarpur", toName: "Muzaffarpur",
    distanceKm: 420, durationHrs: "10", nh: "NH-22", via: ["Patna"],
    fares: { hatchback: 6899, sedan: 8279, suv: 11299, crysta: 14599, tempo: 18899 },
    tolls: 550, pitStops: ["Patna"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["Muzaffarpur Station"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "darbhanga", toName: "Darbhanga",
    distanceKm: 460, durationHrs: "11", nh: "NH-27", via: ["Patna", "Muzaffarpur"],
    fares: { hatchback: 7499, sedan: 8999, suv: 12299, crysta: 15899, tempo: 20599 },
    tolls: 650, pitStops: ["Patna"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["Darbhanga City"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "sasaram", toName: "Sasaram",
    distanceKm: 380, durationHrs: "8", nh: "NH-19", via: ["Ranchi", "Gaya"],
    fares: { hatchback: 6199, sedan: 7439, suv: 10199, crysta: 13099, tempo: 16999 },
    tolls: 500, pitStops: ["Gaya"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["Sasaram Town"]
  },
  {
    from: "jamshedpur", fromName: "Jamshedpur", to: "aurangabad", toName: "Aurangabad",
    distanceKm: 320, durationHrs: "7", nh: "NH-19", via: ["Ranchi", "Gaya"],
    fares: { hatchback: 5199, sedan: 6239, suv: 8499, crysta: 10999, tempo: 14199 },
    tolls: 450, pitStops: ["Gaya"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Mango", "Bistupur", "Sakchi"], dropPoints: ["Aurangabad Town"]
  },

  // ========== FROM RANCHI ==========
  {
    from: "ranchi", fromName: "Ranchi",
    to: "kolkata", toName: "Kolkata",
    distanceKm: 390, durationHrs: "7-8", nh: "NH-33/NH-19",
    via: ["Jamshedpur", "Kharagpur"],
    fares: { hatchback: 5999, sedan: 7199, suv: 9799, crysta: 12499, tempo: 15999 },
    tolls: 500, pitStops: ["Jamshedpur", "Kharagpur"],
    bestTime: "Early morning 5 AM departure",
    roadCondition: "Good NH roads",
    statesCrossed: ["Jharkhand", "West Bengal"],
    pickupPoints: ["Ranchi Station", "Doranda", "Lalpur", "Birsa Munda Airport", "Kanke"],
    dropPoints: ["Howrah Station", "Sealdah", "Salt Lake", "Airport", "Newtown"],
    longContent: `At 390 km with roughly seven to eight hours of driving, the Ranchi to Kolkata cab ride is a full-day undertaking that links Jharkhand's capital with the City of Joy — and along the way it quietly delivers a bonus tour through the state's two biggest cities, since the road dips through Jamshedpur, the town built by Tata Steel.

Right out of Ranchi the car begins its descent off the Chota Nagpur Plateau, winding past Tamar and Chandil. The Chandil Dam is the scenic high point of this opening phase; during the rains its reservoir is at its most striking, swelling almost up to the road. After Chandil you drop into Jamshedpur, all chimneys and industry, then carry on along NH-49 past Ghatsila — a town bound up with copper mining and the Subarnarekha river — before slipping into West Bengal near Baharagora. Everything after that, via Kharagpur and Kolaghat, is a fast, smooth 4-lane glide towards the city's fringes.

Our drivers' tried-and-tested eating plan goes like this: if you set off early enough, stop in Chandil or Jamshedpur for breakfast, then line up a late lunch at the roadside dhabas near Kolaghat, which are celebrated for their Bengali fish curry. Kharagpur, meanwhile, has several clean restaurant chains in case you would rather keep things quick and familiar.

The smart play on timing is to leave Ranchi no later than 5 AM, which puts you in Kolkata between noon and 1 PM, comfortably ahead of the city's infamous jams. Prefer an evening arrival? Start out by 10 in the morning. Overnight travellers also lean on this run heavily — departing between 9 and 10 PM lands you in Kolkata in the early hours, just in time to catch a morning train or flight.

A final reassurance: every one of the five toll plazas on this corridor is folded into your fare, so there are no surprise levies at the booths. Between that, chauffeurs who know the road by heart, and their familiarity with the fastest lanes through Kolkata's traffic, this is one long journey that tends to run remarkably smoothly.`
  },
  {
    from: "ranchi", fromName: "Ranchi",
    to: "jamshedpur", toName: "Jamshedpur",
    distanceKm: 130, durationHrs: "3-4", nh: "NH-33",
    via: ["Tamar", "Chandil"],
    fares: { hatchback: 2499, sedan: 3199, suv: 4299, crysta: 5499, tempo: 6999 },
    tolls: 200, pitStops: ["Chandil Dam"],
    bestTime: "Any time",
    roadCondition: "Good 4-lane NH",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Ranchi Station", "Doranda", "Lalpur", "Airport"],
    dropPoints: ["Mango", "Bistupur", "Sakchi", "Tatanagar Station"],
    longContent: `Travelling from the state capital down to Jamshedpur means a 130 km spin along NH-33, a highway many locals rate as Jharkhand's best-kept stretch of asphalt. The route pairs Ranchi with its industrial heart and is one of the services our customers ask us for most often.

The drive shakes off Ranchi's city traffic within a few minutes, rolling past Namkum before the landscape turns dense and green in the Tamar forest belt. This corner of Jharkhand is tribal country, thick with sal trees, and in the cooler months — roughly November through February — the early-morning mist hangs low over the road in a way that feels almost cinematic.

The journey's finest moment arrives as the highway begins its gradual drop off the Ranchi Plateau towards Chandil. The road threads through the hills, opening out to wide views of the valley below, and from several points you can make out Chandil Dam, one of the state's favourite weekend picnic spots, sitting right beside the carriageway. Once you are past Chandil the road levels out and sweeps into the Jamshedpur-Gamharia industrial corridor, where the trip winds down.

Our cars pick you up from absolutely anywhere in Ranchi — the airport, the railway station, a hotel lobby, a hospital like RIMS or Medica, or a quiet residential lane — and, on the other side, set you down wherever you need in Jamshedpur: Tatanagar Station, the Bistupur market area, XLRI, NIT, Tata Main Hospital, or your own doorstep.

As for the clock, budget around three to three and a half hours on a clear day. Add half an hour during festival seasons, or if you start amid Ranchi's 9-10 AM rush. The sweet spot we usually suggest is an early 6-7 AM departure, which gives you the quietest roads and the most relaxed ride.`
  },
  {
    from: "ranchi", fromName: "Ranchi",
    to: "dhanbad", toName: "Dhanbad",
    distanceKm: 160, durationHrs: "3.5-4", nh: "NH-33",
    via: ["Ramgarh", "Bokaro"],
    fares: { hatchback: 2899, sedan: 3499, suv: 4699, crysta: 5999, tempo: 7699 },
    tolls: 200, pitStops: ["Bokaro"],
    bestTime: "Any time",
    roadCondition: "Good NH-33",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Ranchi Station", "Doranda", "Lalpur"],
    dropPoints: ["Dhanbad Station", "Bank More", "Jharia"]
  },
  {
    from: "ranchi", fromName: "Ranchi",
    to: "bokaro", toName: "Bokaro",
    distanceKm: 100, durationHrs: "2.5-3", nh: "NH-33",
    via: ["Ramgarh"],
    fares: { hatchback: 2199, sedan: 2799, suv: 3799, crysta: 4899, tempo: 6199 },
    tolls: 150, pitStops: [],
    bestTime: "Any time",
    roadCondition: "Good NH-33",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Ranchi Station", "Doranda", "Lalpur"],
    dropPoints: ["Bokaro Sector 4", "Chas", "City Centre"]
  },
  {
    from: "ranchi", fromName: "Ranchi",
    to: "patna", toName: "Patna",
    distanceKm: 330, durationHrs: "6-7", nh: "NH-33/NH-2",
    via: ["Hazaribagh", "Koderma", "Gaya"],
    fares: { hatchback: 5299, sedan: 6359, suv: 8699, crysta: 10999, tempo: 13999 },
    tolls: 400, pitStops: ["Hazaribagh", "Koderma"],
    bestTime: "Early morning",
    roadCondition: "Good NH road",
    statesCrossed: ["Jharkhand", "Bihar"],
    pickupPoints: ["Ranchi Station", "Doranda", "Airport"],
    dropPoints: ["Patna Junction", "Gandhi Maidan", "Airport"]
  },
  {
    from: "ranchi", fromName: "Ranchi",
    to: "deoghar", toName: "Deoghar",
    distanceKm: 250, durationHrs: "5-6", nh: "NH-33/NH-114A",
    via: ["Ramgarh", "Bokaro", "Giridih"],
    fares: { hatchback: 3999, sedan: 4799, suv: 6499, crysta: 8499, tempo: 10999 },
    tolls: 250, pitStops: ["Bokaro"],
    bestTime: "Early morning for darshan",
    roadCondition: "NH then state highway",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Ranchi Station", "Doranda", "Lalpur"],
    dropPoints: ["Baidyanath Dham", "Tower Chowk", "Jasidih Station"]
  },
  {
    from: "ranchi", fromName: "Ranchi",
    to: "hazaribagh", toName: "Hazaribagh",
    distanceKm: 100, durationHrs: "2.5-3", nh: "NH-33",
    via: ["Ramgarh"],
    fares: { hatchback: 2199, sedan: 2799, suv: 3799, crysta: 4899, tempo: 6199 },
    tolls: 100, pitStops: [],
    bestTime: "Any time",
    roadCondition: "Good NH-33",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Ranchi Station", "Doranda", "Lalpur"],
    dropPoints: ["Hazaribagh Lake", "Court Area", "Canary Hill"]
  },
  {
    from: "ranchi", fromName: "Ranchi",
    to: "giridih", toName: "Giridih",
    distanceKm: 170, durationHrs: "4-5", nh: "NH-33/SH",
    via: ["Ramgarh", "Bokaro"],
    fares: { hatchback: 2999, sedan: 3599, suv: 4899, crysta: 6299, tempo: 7999 },
    tolls: 150, pitStops: ["Bokaro"],
    bestTime: "Morning",
    roadCondition: "Good NH then state highway",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Ranchi Station", "Doranda", "Lalpur"],
    dropPoints: ["Giridih Station", "Gandhi Chowk"]
  },
  {
    from: "ranchi", fromName: "Ranchi",
    to: "puri", toName: "Puri",
    distanceKm: 490, durationHrs: "9-10", nh: "NH-75/NH-16",
    via: ["Jamshedpur", "Rourkela", "Bhubaneswar"],
    fares: { hatchback: 7499, sedan: 8999, suv: 12299, crysta: 15799, tempo: 19999 },
    tolls: 650, pitStops: ["Jamshedpur", "Bhubaneswar"],
    bestTime: "Early morning departure",
    roadCondition: "Long journey — good NH",
    statesCrossed: ["Jharkhand", "Odisha"],
    pickupPoints: ["Ranchi Station", "Doranda", "Airport"],
    dropPoints: ["Puri Station", "Jagannath Temple", "Beach"]
  },
  {
    from: "ranchi", fromName: "Ranchi",
    to: "bhubaneswar", toName: "Bhubaneswar",
    distanceKm: 390, durationHrs: "7-8", nh: "NH-75",
    via: ["Jamshedpur", "Rourkela"],
    fares: { hatchback: 5999, sedan: 7199, suv: 9799, crysta: 12499, tempo: 15999 },
    tolls: 500, pitStops: ["Jamshedpur"],
    bestTime: "Early morning",
    roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"],
    pickupPoints: ["Ranchi Station", "Doranda", "Airport"],
    dropPoints: ["Bhubaneswar Station", "Airport", "Patia"]
  },
  {
    from: "ranchi", fromName: "Ranchi",
    to: "daltonganj", toName: "Daltonganj",
    distanceKm: 160, durationHrs: "4-5", nh: "NH-75",
    via: ["Latehar"],
    fares: { hatchback: 2899, sedan: 3499, suv: 4699, crysta: 5999, tempo: 7699 },
    tolls: 150, pitStops: ["Latehar"],
    bestTime: "Morning",
    roadCondition: "State highway — average condition",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Ranchi Station", "Doranda"],
    dropPoints: ["Daltonganj Town", "Medininagar"]
  },
  {
    from: "ranchi", fromName: "Ranchi",
    to: "asansol", toName: "Asansol",
    distanceKm: 300, durationHrs: "6-7", nh: "NH-33/NH-19",
    via: ["Bokaro", "Dhanbad"],
    fares: { hatchback: 4799, sedan: 5759, suv: 7799, crysta: 9999, tempo: 12999 },
    tolls: 350, pitStops: ["Dhanbad"],
    bestTime: "Morning",
    roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"],
    pickupPoints: ["Ranchi Station", "Doranda"],
    dropPoints: ["Asansol Station", "Burnpur"]
  },
  {
    from: "ranchi", fromName: "Ranchi",
    to: "durgapur", toName: "Durgapur",
    distanceKm: 330, durationHrs: "6.5-7.5", nh: "NH-33/NH-19",
    via: ["Bokaro", "Dhanbad", "Asansol"],
    fares: { hatchback: 5299, sedan: 6359, suv: 8699, crysta: 10999, tempo: 13999 },
    tolls: 400, pitStops: ["Dhanbad", "Asansol"],
    bestTime: "Morning",
    roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"],
    pickupPoints: ["Ranchi Station", "Doranda"],
    dropPoints: ["Durgapur Station", "City Centre"]
  },
  {
    from: "ranchi", fromName: "Ranchi",
    to: "siliguri", toName: "Siliguri",
    distanceKm: 580, durationHrs: "11-12", nh: "NH-33/NH-27",
    via: ["Bokaro", "Dhanbad", "Asansol"],
    fares: { hatchback: 8999, sedan: 10799, suv: 14699, crysta: 18999, tempo: 23999 },
    tolls: 700, pitStops: ["Dhanbad", "Asansol"],
    bestTime: "Early morning departure",
    roadCondition: "Long journey — good NH",
    statesCrossed: ["Jharkhand", "West Bengal"],
    pickupPoints: ["Ranchi Station", "Doranda", "Airport"],
    dropPoints: ["Siliguri Junction", "Bagdogra Airport"]
  },
  {
    from: "ranchi", fromName: "Ranchi",
    to: "darjeeling", toName: "Darjeeling",
    distanceKm: 630, durationHrs: "12-14", nh: "NH-33/NH-27",
    via: ["Dhanbad", "Asansol", "Siliguri"],
    fares: { hatchback: 9499, sedan: 11399, suv: 15499, crysta: 19999, tempo: 24999 },
    tolls: 750, pitStops: ["Dhanbad", "Siliguri"],
    bestTime: "Very early morning",
    roadCondition: "Long journey — hill roads last 80 km",
    statesCrossed: ["Jharkhand", "West Bengal"],
    pickupPoints: ["Ranchi Station", "Doranda", "Airport"],
    dropPoints: ["Darjeeling Mall", "Chowrasta"]
  },
  {
    from: "ranchi", fromName: "Ranchi",
    to: "netarhat", toName: "Netarhat",
    distanceKm: 160, durationHrs: "4-5", nh: "SH",
    via: ["Latehar"],
    fares: { hatchback: 2899, sedan: 3499, suv: 4699, crysta: 5999, tempo: 7699 },
    tolls: 100, pitStops: ["Latehar"],
    bestTime: "Morning for sunset point",
    roadCondition: "Hill roads — scenic but winding",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Ranchi Station", "Doranda"],
    dropPoints: ["Netarhat Hill Station", "Magnolia Point"]
  },
  {
    from: "ranchi", fromName: "Ranchi",
    to: "betla", toName: "Betla",
    distanceKm: 170, durationHrs: "4.5-5", nh: "SH",
    via: ["Latehar", "Daltonganj"],
    fares: { hatchback: 2999, sedan: 3599, suv: 4899, crysta: 6299, tempo: 7999 },
    tolls: 100, pitStops: ["Daltonganj"],
    bestTime: "Morning for wildlife",
    roadCondition: "State highway — moderate",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Ranchi Station", "Doranda"],
    dropPoints: ["Betla National Park Gate", "Betla Resort"]
  },
  {
    from: "ranchi", fromName: "Ranchi",
    to: "varanasi", toName: "Varanasi",
    distanceKm: 630, durationHrs: "12-13", nh: "NH-2",
    via: ["Hazaribagh", "Koderma", "Gaya"],
    fares: { hatchback: 9499, sedan: 11399, suv: 15499, crysta: 19999, tempo: 24999 },
    tolls: 700, pitStops: ["Hazaribagh", "Gaya"],
    bestTime: "Very early morning",
    roadCondition: "Good NH-2",
    statesCrossed: ["Jharkhand", "Bihar", "Uttar Pradesh"],
    pickupPoints: ["Ranchi Station", "Doranda", "Airport"],
    dropPoints: ["Varanasi Station", "Dashashwamedh Ghat", "Airport"]
  },

  {
    from: "ranchi", fromName: "Ranchi", to: "patratu", toName: "Patratu",
    distanceKm: 40, durationHrs: "1", nh: "SH", via: ["Kanke Road"],
    fares: { hatchback: 999, sedan: 1199, suv: 1599, crysta: 2099, tempo: 2699 },
    tolls: 0, pitStops: [], bestTime: "Morning", roadCondition: "Good Hill Road",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Ranchi Station", "Doranda", "Kanke"], dropPoints: ["Patratu Valley", "Patratu Dam"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "rajrappa", toName: "Rajrappa",
    distanceKm: 70, durationHrs: "2", nh: "NH-20", via: ["Ormanjhi"],
    fares: { hatchback: 1599, sedan: 1919, suv: 2599, crysta: 3399, tempo: 4299 },
    tolls: 50, pitStops: [], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Chhinnamasta Temple"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "pakur", toName: "Pakur",
    distanceKm: 340, durationHrs: "8", nh: "SH/NH-114A", via: ["Bokaro", "Dumka"],
    fares: { hatchback: 5499, sedan: 6599, suv: 8999, crysta: 11499, tempo: 14999 },
    tolls: 300, pitStops: ["Bokaro"], bestTime: "Early Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Pakur Town"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "phusro", toName: "Phusro",
    distanceKm: 110, durationHrs: "2.5-3", nh: "NH-33", via: ["Bokaro"],
    fares: { hatchback: 2299, sedan: 2759, suv: 3699, crysta: 4799, tempo: 5999 },
    tolls: 150, pitStops: [], bestTime: "Any time", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Phusro Town"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "ghatsila", toName: "Ghatsila",
    distanceKm: 180, durationHrs: "4", nh: "NH-33/NH-49", via: ["Jamshedpur"],
    fares: { hatchback: 3099, sedan: 3699, suv: 4999, crysta: 6499, tempo: 8299 },
    tolls: 200, pitStops: ["Jamshedpur"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Ghatsila Town", "Phuldungri"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "jadugoda", toName: "Jadugoda",
    distanceKm: 160, durationHrs: "4", nh: "NH-33", via: ["Jamshedpur"],
    fares: { hatchback: 2899, sedan: 3499, suv: 4699, crysta: 5999, tempo: 7699 },
    tolls: 200, pitStops: ["Jamshedpur"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Jadugoda Mines", "Rankini Temple"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "seraikela", toName: "Seraikela",
    distanceKm: 150, durationHrs: "3.5", nh: "NH-33", via: ["Chandil"],
    fares: { hatchback: 2699, sedan: 3239, suv: 4399, crysta: 5699, tempo: 7199 },
    tolls: 150, pitStops: [], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Seraikela Palace"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "khunti", toName: "Khunti",
    distanceKm: 40, durationHrs: "1", nh: "NH-20", via: ["Direct"],
    fares: { hatchback: 999, sedan: 1199, suv: 1599, crysta: 2099, tempo: 2699 },
    tolls: 50, pitStops: [], bestTime: "Any time", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Khunti Town"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "simdega", toName: "Simdega",
    distanceKm: 150, durationHrs: "3.5-4", nh: "NH-143", via: ["Khunti"],
    fares: { hatchback: 2699, sedan: 3239, suv: 4399, crysta: 5699, tempo: 7199 },
    tolls: 100, pitStops: ["Khunti"], bestTime: "Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Simdega Town"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "lohardaga", toName: "Lohardaga",
    distanceKm: 70, durationHrs: "1.5-2", nh: "NH-43", via: ["Direct"],
    fares: { hatchback: 1599, sedan: 1919, suv: 2599, crysta: 3399, tempo: 4299 },
    tolls: 50, pitStops: [], bestTime: "Any time", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Lohardaga Town"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "gumla", toName: "Gumla",
    distanceKm: 100, durationHrs: "2.5", nh: "NH-43", via: ["Lohardaga"],
    fares: { hatchback: 2199, sedan: 2799, suv: 3799, crysta: 4899, tempo: 6199 },
    tolls: 100, pitStops: [], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Gumla Town"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "dumka", toName: "Dumka",
    distanceKm: 280, durationHrs: "6-7", nh: "SH", via: ["Bokaro", "Deoghar"],
    fares: { hatchback: 4499, sedan: 5399, suv: 7399, crysta: 9499, tempo: 11999 },
    tolls: 250, pitStops: ["Bokaro"], bestTime: "Early Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Dumka Town"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "chaibasa", toName: "Chaibasa",
    distanceKm: 150, durationHrs: "3.5", nh: "NH-20", via: ["Khunti"],
    fares: { hatchback: 2699, sedan: 3239, suv: 4399, crysta: 5699, tempo: 7199 },
    tolls: 100, pitStops: [], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Chaibasa Town"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "koderma", toName: "Koderma",
    distanceKm: 160, durationHrs: "3.5-4", nh: "NH-20", via: ["Hazaribagh"],
    fares: { hatchback: 2899, sedan: 3499, suv: 4699, crysta: 5999, tempo: 7699 },
    tolls: 150, pitStops: ["Hazaribagh"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Koderma Town", "Jhumri Tilaiya"]
  },

  // RANCHI TO WEST BENGAL
  {
    from: "ranchi", fromName: "Ranchi", to: "kharagpur", toName: "Kharagpur",
    distanceKm: 270, durationHrs: "6", nh: "NH-33/NH-49", via: ["Jamshedpur"],
    fares: { hatchback: 4299, sedan: 5159, suv: 6999, crysta: 8999, tempo: 11499 },
    tolls: 300, pitStops: ["Jamshedpur"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["IIT Kharagpur Station"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "haldia", toName: "Haldia",
    distanceKm: 380, durationHrs: "8", nh: "NH-33/NH-116", via: ["Jamshedpur", "Kharagpur"],
    fares: { hatchback: 5899, sedan: 7079, suv: 9699, crysta: 12499, tempo: 15999 },
    tolls: 400, pitStops: ["Kharagpur"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Haldia Port"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "purulia", toName: "Purulia",
    distanceKm: 120, durationHrs: "3", nh: "SH", via: ["Muri"],
    fares: { hatchback: 2399, sedan: 2899, suv: 3899, crysta: 4999, tempo: 6499 },
    tolls: 100, pitStops: [], bestTime: "Morning", roadCondition: "State Highway",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Purulia Town"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "bankura", toName: "Bankura",
    distanceKm: 190, durationHrs: "4.5", nh: "SH", via: ["Purulia"],
    fares: { hatchback: 3199, sedan: 3839, suv: 5199, crysta: 6699, tempo: 8499 },
    tolls: 150, pitStops: ["Purulia"], bestTime: "Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Bankura Town"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "bardhaman", toName: "Bardhaman",
    distanceKm: 300, durationHrs: "6-7", nh: "NH-19", via: ["Asansol"],
    fares: { hatchback: 4899, sedan: 5879, suv: 7999, crysta: 10299, tempo: 13299 },
    tolls: 350, pitStops: ["Asansol"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Bardhaman Station"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "malda", toName: "Malda",
    distanceKm: 480, durationHrs: "10-11", nh: "NH-12", via: ["Asansol", "Bahrampore"],
    fares: { hatchback: 7499, sedan: 8999, suv: 12299, crysta: 15899, tempo: 20599 },
    tolls: 600, pitStops: ["Asansol"], bestTime: "Early Morning", roadCondition: "Long Journey",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Malda Town"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "murshidabad", toName: "Murshidabad",
    distanceKm: 400, durationHrs: "9", nh: "NH-12", via: ["Asansol"],
    fares: { hatchback: 6199, sedan: 7439, suv: 10199, crysta: 13099, tempo: 16999 },
    tolls: 500, pitStops: ["Asansol"], bestTime: "Early Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Hazarduari Palace"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "digha", toName: "Digha",
    distanceKm: 450, durationHrs: "9", nh: "NH-116B", via: ["Jamshedpur", "Kharagpur"],
    fares: { hatchback: 6999, sedan: 8399, suv: 11499, crysta: 14999, tempo: 18999 },
    tolls: 550, pitStops: ["Kharagpur"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["New Digha Sea Beach"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "mandarmani", toName: "Mandarmani",
    distanceKm: 430, durationHrs: "8.5", nh: "NH-116B", via: ["Jamshedpur", "Kharagpur"],
    fares: { hatchback: 6499, sedan: 7799, suv: 10799, crysta: 13999, tempo: 17999 },
    tolls: 500, pitStops: ["Kharagpur"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Mandarmani Beach Resort Area"]
  },

  // RANCHI TO ODISHA
  {
    from: "ranchi", fromName: "Ranchi", to: "baripada", toName: "Baripada",
    distanceKm: 240, durationHrs: "5.5", nh: "NH-18", via: ["Jamshedpur"],
    fares: { hatchback: 3999, sedan: 4799, suv: 6499, crysta: 8499, tempo: 10999 },
    tolls: 250, pitStops: ["Jamshedpur"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Baripada Town", "Simlipal"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "balasore", toName: "Balasore",
    distanceKm: 290, durationHrs: "6.5", nh: "NH-18", via: ["Jamshedpur", "Baripada"],
    fares: { hatchback: 4499, sedan: 5399, suv: 7399, crysta: 9499, tempo: 11999 },
    tolls: 300, pitStops: ["Jamshedpur"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Balasore Station", "Chandipur"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "cuttack", toName: "Cuttack",
    distanceKm: 520, durationHrs: "10", nh: "NH-16", via: ["Jamshedpur", "Balasore"],
    fares: { hatchback: 7999, sedan: 9599, suv: 12999, crysta: 16999, tempo: 21999 },
    tolls: 700, pitStops: ["Balasore", "Jamshedpur"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Cuttack Chandi", "Station"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "keonjhar", toName: "Keonjhar",
    distanceKm: 220, durationHrs: "5", nh: "NH-20", via: ["Chaibasa"],
    fares: { hatchback: 3799, sedan: 4599, suv: 6199, crysta: 7999, tempo: 9999 },
    tolls: 200, pitStops: ["Chaibasa"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Keonjhar Town"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "rourkela", toName: "Rourkela",
    distanceKm: 180, durationHrs: "4.5", nh: "NH-143", via: ["Simdega"],
    fares: { hatchback: 3099, sedan: 3699, suv: 4999, crysta: 6499, tempo: 8299 },
    tolls: 150, pitStops: [], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Rourkela Station", "Steel Plant"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "sambalpur", toName: "Sambalpur",
    distanceKm: 340, durationHrs: "8", nh: "NH-143/NH-49", via: ["Rourkela"],
    fares: { hatchback: 5499, sedan: 6599, suv: 8999, crysta: 11499, tempo: 14999 },
    tolls: 400, pitStops: ["Rourkela"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Sambalpur Town"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "jharsuguda", toName: "Jharsuguda",
    distanceKm: 300, durationHrs: "7", nh: "NH-143/NH-49", via: ["Rourkela"],
    fares: { hatchback: 4899, sedan: 5879, suv: 7999, crysta: 10299, tempo: 13299 },
    tolls: 350, pitStops: ["Rourkela"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Jharsuguda Airport", "Town"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "bhadrak", toName: "Bhadrak",
    distanceKm: 360, durationHrs: "8", nh: "NH-16", via: ["Jamshedpur", "Balasore"],
    fares: { hatchback: 5699, sedan: 6839, suv: 9399, crysta: 12099, tempo: 15699 },
    tolls: 450, pitStops: ["Balasore"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Bhadrak Station"]
  },

  // RANCHI TO BIHAR
  {
    from: "ranchi", fromName: "Ranchi", to: "gaya", toName: "Gaya",
    distanceKm: 230, durationHrs: "5", nh: "NH-20/NH-2", via: ["Hazaribagh", "Koderma"],
    fares: { hatchback: 3799, sedan: 4599, suv: 6199, crysta: 7999, tempo: 9999 },
    tolls: 250, pitStops: ["Koderma"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Gaya Station", "Vishnupad"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "bodh-gaya", toName: "Bodh Gaya",
    distanceKm: 220, durationHrs: "4.5", nh: "NH-20/NH-2", via: ["Hazaribagh", "Koderma"],
    fares: { hatchback: 3599, sedan: 4319, suv: 5899, crysta: 7599, tempo: 9499 },
    tolls: 250, pitStops: ["Koderma"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Mahabodhi Temple"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "bhagalpur", toName: "Bhagalpur",
    distanceKm: 380, durationHrs: "9", nh: "SH", via: ["Deoghar"],
    fares: { hatchback: 6199, sedan: 7439, suv: 10199, crysta: 13099, tempo: 16999 },
    tolls: 400, pitStops: ["Deoghar"], bestTime: "Early Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Bhagalpur Station"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "muzaffarpur", toName: "Muzaffarpur",
    distanceKm: 410, durationHrs: "9-10", nh: "NH-22", via: ["Patna"],
    fares: { hatchback: 6699, sedan: 8039, suv: 10999, crysta: 14199, tempo: 18499 },
    tolls: 500, pitStops: ["Patna"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Muzaffarpur Station"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "darbhanga", toName: "Darbhanga",
    distanceKm: 460, durationHrs: "11", nh: "NH-27", via: ["Patna", "Muzaffarpur"],
    fares: { hatchback: 7499, sedan: 8999, suv: 12299, crysta: 15899, tempo: 20599 },
    tolls: 600, pitStops: ["Patna"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Darbhanga City"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "sasaram", toName: "Sasaram",
    distanceKm: 260, durationHrs: "6", nh: "NH-19", via: ["Gaya"],
    fares: { hatchback: 4299, sedan: 5159, suv: 6999, crysta: 8999, tempo: 11499 },
    tolls: 300, pitStops: ["Gaya"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Sasaram Town"]
  },
  {
    from: "ranchi", fromName: "Ranchi", to: "aurangabad", toName: "Aurangabad",
    distanceKm: 190, durationHrs: "4", nh: "NH-19", via: ["Gaya"],
    fares: { hatchback: 3199, sedan: 3839, suv: 5199, crysta: 6699, tempo: 8499 },
    tolls: 200, pitStops: [], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Ranchi Station", "Doranda"], dropPoints: ["Aurangabad Town"]
  },

  // ========== FROM DHANBAD ==========
  {
    from: "dhanbad", fromName: "Dhanbad",
    to: "kolkata", toName: "Kolkata",
    distanceKm: 260, durationHrs: "5-6", nh: "NH-19",
    via: ["Asansol", "Durgapur", "Bardhaman"],
    fares: { hatchback: 3999, sedan: 4799, suv: 6499, crysta: 8499, tempo: 9999 },
    tolls: 400, pitStops: ["Asansol"],
    bestTime: "Morning",
    roadCondition: "Good NH-19 (GT Road)",
    statesCrossed: ["Jharkhand", "West Bengal"],
    pickupPoints: ["Dhanbad Station", "Bank More", "Jharia"],
    dropPoints: ["Howrah Station", "Sealdah", "Airport", "Salt Lake"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad",
    to: "jamshedpur", toName: "Jamshedpur",
    distanceKm: 80, durationHrs: "2-2.5", nh: "NH-32",
    via: ["Chandrapura"],
    fares: { hatchback: 1999, sedan: 2499, suv: 3499, crysta: 4499, tempo: 5499 },
    tolls: 100, pitStops: [],
    bestTime: "Any time",
    roadCondition: "Good road",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Dhanbad Station", "Bank More"],
    dropPoints: ["Mango", "Bistupur", "Sakchi", "Tatanagar Station"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad",
    to: "ranchi", toName: "Ranchi",
    distanceKm: 160, durationHrs: "3.5-4", nh: "NH-33",
    via: ["Bokaro", "Ramgarh"],
    fares: { hatchback: 2899, sedan: 3499, suv: 4699, crysta: 5999, tempo: 7699 },
    tolls: 200, pitStops: ["Bokaro"],
    bestTime: "Any time",
    roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Dhanbad Station", "Bank More"],
    dropPoints: ["Ranchi Station", "Doranda", "Airport"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad",
    to: "bokaro", toName: "Bokaro",
    distanceKm: 50, durationHrs: "1-1.5", nh: "NH-32",
    via: ["Direct route"],
    fares: { hatchback: 1699, sedan: 2099, suv: 2899, crysta: 3699, tempo: 4699 },
    tolls: 50, pitStops: [],
    bestTime: "Any time",
    roadCondition: "Good road",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Dhanbad Station", "Bank More"],
    dropPoints: ["Bokaro Sector 4", "Chas", "City Centre"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad",
    to: "deoghar", toName: "Deoghar",
    distanceKm: 120, durationHrs: "3-3.5", nh: "NH-114A",
    via: ["Madhupur"],
    fares: { hatchback: 2399, sedan: 2899, suv: 3899, crysta: 4999, tempo: 6499 },
    tolls: 100, pitStops: [],
    bestTime: "Early morning for darshan",
    roadCondition: "Moderate road",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Dhanbad Station", "Bank More"],
    dropPoints: ["Baidyanath Dham", "Tower Chowk", "Jasidih"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad",
    to: "patna", toName: "Patna",
    distanceKm: 320, durationHrs: "6-7", nh: "NH-19/NH-2",
    via: ["Koderma", "Gaya"],
    fares: { hatchback: 4999, sedan: 5999, suv: 8199, crysta: 10499, tempo: 13499 },
    tolls: 350, pitStops: ["Koderma"],
    bestTime: "Early morning",
    roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar"],
    pickupPoints: ["Dhanbad Station", "Bank More"],
    dropPoints: ["Patna Junction", "Airport"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad",
    to: "asansol", toName: "Asansol",
    distanceKm: 95, durationHrs: "2-2.5", nh: "NH-19",
    via: ["Burnpur"],
    fares: { hatchback: 2099, sedan: 2499, suv: 3399, crysta: 4399, tempo: 5599 },
    tolls: 100, pitStops: [],
    bestTime: "Any time",
    roadCondition: "Good NH-19",
    statesCrossed: ["Jharkhand", "West Bengal"],
    pickupPoints: ["Dhanbad Station", "Bank More"],
    dropPoints: ["Asansol Station", "Burnpur"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad",
    to: "durgapur", toName: "Durgapur",
    distanceKm: 130, durationHrs: "2.5-3", nh: "NH-19",
    via: ["Asansol"],
    fares: { hatchback: 2499, sedan: 2999, suv: 4099, crysta: 5299, tempo: 6799 },
    tolls: 150, pitStops: ["Asansol"],
    bestTime: "Any time",
    roadCondition: "Good NH-19",
    statesCrossed: ["Jharkhand", "West Bengal"],
    pickupPoints: ["Dhanbad Station", "Bank More"],
    dropPoints: ["Durgapur Station", "City Centre"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad",
    to: "giridih", toName: "Giridih",
    distanceKm: 100, durationHrs: "2.5-3", nh: "SH",
    via: ["Parasnath"],
    fares: { hatchback: 2199, sedan: 2799, suv: 3799, crysta: 4899, tempo: 6199 },
    tolls: 100, pitStops: [],
    bestTime: "Morning",
    roadCondition: "State highway — decent",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Dhanbad Station", "Bank More"],
    dropPoints: ["Giridih Station", "Gandhi Chowk"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad",
    to: "hazaribagh", toName: "Hazaribagh",
    distanceKm: 120, durationHrs: "3-3.5", nh: "NH-33",
    via: ["Bokaro", "Ramgarh"],
    fares: { hatchback: 2399, sedan: 2899, suv: 3899, crysta: 4999, tempo: 6499 },
    tolls: 100, pitStops: [],
    bestTime: "Any time",
    roadCondition: "Good road via NH-33",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Dhanbad Station", "Bank More"],
    dropPoints: ["Hazaribagh Lake", "Court Area"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad",
    to: "varanasi", toName: "Varanasi",
    distanceKm: 540, durationHrs: "10-11", nh: "NH-2",
    via: ["Koderma", "Gaya", "Sasaram"],
    fares: { hatchback: 8299, sedan: 9959, suv: 13499, crysta: 17499, tempo: 21999 },
    tolls: 600, pitStops: ["Koderma", "Gaya"],
    bestTime: "Very early morning",
    roadCondition: "Good NH-2",
    statesCrossed: ["Jharkhand", "Bihar", "Uttar Pradesh"],
    pickupPoints: ["Dhanbad Station", "Bank More"],
    dropPoints: ["Varanasi Station", "Dashashwamedh Ghat"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad",
    to: "puri", toName: "Puri",
    distanceKm: 490, durationHrs: "9-10", nh: "NH-49/NH-16",
    via: ["Jamshedpur", "Bhubaneswar"],
    fares: { hatchback: 7499, sedan: 8999, suv: 12299, crysta: 15799, tempo: 19999 },
    tolls: 650, pitStops: ["Jamshedpur"],
    bestTime: "Early morning",
    roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"],
    pickupPoints: ["Dhanbad Station", "Bank More"],
    dropPoints: ["Puri Station", "Jagannath Temple"]
  },

  {
    from: "dhanbad", fromName: "Dhanbad", to: "ramgarh", toName: "Ramgarh",
    distanceKm: 110, durationHrs: "2.5-3", nh: "NH-33", via: ["Bokaro"],
    fares: { hatchback: 2199, sedan: 2799, suv: 3799, crysta: 4899, tempo: 6199 },
    tolls: 150, pitStops: ["Bokaro"], bestTime: "Any time", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Ramgarh Cantt"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "koderma", toName: "Koderma",
    distanceKm: 150, durationHrs: "3.5", nh: "NH-19", via: ["Topchanchi", "Barhi"],
    fares: { hatchback: 2899, sedan: 3499, suv: 4699, crysta: 5999, tempo: 7699 },
    tolls: 200, pitStops: ["Barhi"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Koderma Town", "Jhumri Tilaiya"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "daltonganj", toName: "Daltonganj",
    distanceKm: 280, durationHrs: "7", nh: "NH-39", via: ["Hazaribagh", "Chatra"],
    fares: { hatchback: 4499, sedan: 5399, suv: 7399, crysta: 9499, tempo: 11999 },
    tolls: 300, pitStops: ["Hazaribagh"], bestTime: "Early Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Daltonganj Town"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "dumka", toName: "Dumka",
    distanceKm: 130, durationHrs: "3.5", nh: "NH-114A", via: ["Jamtara"],
    fares: { hatchback: 2499, sedan: 2999, suv: 4099, crysta: 5299, tempo: 6799 },
    tolls: 150, pitStops: ["Jamtara"], bestTime: "Morning", roadCondition: "State Highway",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Dumka Town"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "chaibasa", toName: "Chaibasa",
    distanceKm: 180, durationHrs: "4.5", nh: "NH-32", via: ["Jamshedpur"],
    fares: { hatchback: 3099, sedan: 3699, suv: 4999, crysta: 6499, tempo: 8299 },
    tolls: 250, pitStops: ["Jamshedpur"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Chaibasa Town"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "pakur", toName: "Pakur",
    distanceKm: 220, durationHrs: "5.5", nh: "NH-114A", via: ["Dumka"],
    fares: { hatchback: 3599, sedan: 4319, suv: 5899, crysta: 7599, tempo: 9499 },
    tolls: 200, pitStops: ["Dumka"], bestTime: "Morning", roadCondition: "State Highway",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Pakur Town"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "phusro", toName: "Phusro",
    distanceKm: 45, durationHrs: "1-1.5", nh: "SH", via: ["Phusro Road"],
    fares: { hatchback: 1099, sedan: 1299, suv: 1799, crysta: 2299, tempo: 2999 },
    tolls: 50, pitStops: [], bestTime: "Any time", roadCondition: "State Highway",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Phusro Town"],
    longContent: "For a comparatively short hop, hiring a cab for the Dhanbad to Phusro trip is easily the least fussy option you will find. Phusro occupies an important place on Bokaro district's urban map, its identity built on the coal-mining economy administered by Central Coalfields Limited (CCL) and the industrial activity that follows in its wake. You are looking at roughly 45 km on the state highway, a run most cars complete in anywhere from one to one and a half hours.\n\nRS Travel keeps both one-way and round-trip taxis running between Dhanbad and Phusro around the clock. Whether you are a professional heading into the CCL colliery belt on work, or you are travelling for family reasons, our all-inclusive fixed pricing keeps the ride straightforward — what you see quoted is what you pay. The fleet spans hatchbacks, sedans and SUVs, so there is a match for every budget and luggage load. And since every one of our chauffeurs is police-verified and thoroughly familiar with the mining roads of this area, the drive stays both safe and efficient."
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "ghatsila", toName: "Ghatsila",
    distanceKm: 130, durationHrs: "3.5", nh: "NH-18", via: ["Jamshedpur"],
    fares: { hatchback: 2499, sedan: 2999, suv: 4099, crysta: 5299, tempo: 6799 },
    tolls: 150, pitStops: ["Jamshedpur"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Ghatsila Town", "Phuldungri"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "jadugoda", toName: "Jadugoda",
    distanceKm: 110, durationHrs: "3", nh: "NH-32", via: ["Jamshedpur"],
    fares: { hatchback: 2199, sedan: 2799, suv: 3799, crysta: 4899, tempo: 6199 },
    tolls: 150, pitStops: ["Jamshedpur"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Jadugoda Mines", "Rankini Temple"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "seraikela", toName: "Seraikela",
    distanceKm: 110, durationHrs: "3", nh: "NH-32", via: ["Chandil"],
    fares: { hatchback: 2199, sedan: 2799, suv: 3799, crysta: 4899, tempo: 6199 },
    tolls: 150, pitStops: [], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Seraikela Palace"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "khunti", toName: "Khunti",
    distanceKm: 200, durationHrs: "5", nh: "NH-33", via: ["Ranchi"],
    fares: { hatchback: 3399, sedan: 4099, suv: 5499, crysta: 7099, tempo: 8999 },
    tolls: 250, pitStops: ["Ranchi"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Khunti Town"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "simdega", toName: "Simdega",
    distanceKm: 310, durationHrs: "7-8", nh: "NH-143", via: ["Ranchi", "Khunti"],
    fares: { hatchback: 4899, sedan: 5879, suv: 7999, crysta: 10299, tempo: 13299 },
    tolls: 350, pitStops: ["Ranchi"], bestTime: "Early Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Simdega Town"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "lohardaga", toName: "Lohardaga",
    distanceKm: 230, durationHrs: "5.5", nh: "NH-43", via: ["Ranchi"],
    fares: { hatchback: 3799, sedan: 4599, suv: 6199, crysta: 7999, tempo: 9999 },
    tolls: 300, pitStops: ["Ranchi"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Lohardaga Town"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "gumla", toName: "Gumla",
    distanceKm: 260, durationHrs: "6.5", nh: "NH-43", via: ["Ranchi"],
    fares: { hatchback: 4299, sedan: 5159, suv: 6999, crysta: 8999, tempo: 11499 },
    tolls: 300, pitStops: ["Ranchi"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Gumla Town"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "patratu", toName: "Patratu",
    distanceKm: 140, durationHrs: "3.5", nh: "NH-33", via: ["Ramgarh"],
    fares: { hatchback: 2499, sedan: 2999, suv: 4099, crysta: 5299, tempo: 6799 },
    tolls: 150, pitStops: ["Ramgarh"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Patratu Valley"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "rajrappa", toName: "Rajrappa",
    distanceKm: 90, durationHrs: "2.5", nh: "NH-33", via: ["Bokaro", "Peterbar"],
    fares: { hatchback: 1699, sedan: 2099, suv: 2899, crysta: 3699, tempo: 4699 },
    tolls: 100, pitStops: ["Bokaro"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Chhinnamasta Temple"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "netarhat", toName: "Netarhat",
    distanceKm: 310, durationHrs: "8", nh: "NH-39", via: ["Ranchi", "Lohardaga"],
    fares: { hatchback: 4899, sedan: 5879, suv: 7999, crysta: 10299, tempo: 13299 },
    tolls: 350, pitStops: ["Ranchi"], bestTime: "Early Morning", roadCondition: "Mixed with Hill Roads",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Netarhat Hill Station"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "betla", toName: "Betla",
    distanceKm: 300, durationHrs: "7-8", nh: "NH-39", via: ["Ranchi", "Latehar"],
    fares: { hatchback: 4799, sedan: 5759, suv: 7799, crysta: 9999, tempo: 12999 },
    tolls: 350, pitStops: ["Ranchi"], bestTime: "Morning", roadCondition: "State Highway",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Betla National Park Gate"]
  },

  // DHANBAD TO WEST BENGAL
  {
    from: "dhanbad", fromName: "Dhanbad", to: "siliguri", toName: "Siliguri",
    distanceKm: 480, durationHrs: "10", nh: "NH-27", via: ["Asansol", "Malda"],
    fares: { hatchback: 7499, sedan: 8999, suv: 12299, crysta: 15899, tempo: 20599 },
    tolls: 650, pitStops: ["Asansol", "Malda"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Siliguri Junction"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "darjeeling", toName: "Darjeeling",
    distanceKm: 550, durationHrs: "12-13", nh: "NH-27", via: ["Siliguri"],
    fares: { hatchback: 8499, sedan: 10199, suv: 13899, crysta: 17999, tempo: 22999 },
    tolls: 700, pitStops: ["Siliguri"], bestTime: "Very Early Morning", roadCondition: "Mixed with Hills",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Darjeeling Mall"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "kharagpur", toName: "Kharagpur",
    distanceKm: 230, durationHrs: "5", nh: "NH-19/NH-14", via: ["Asansol", "Bankura"],
    fares: { hatchback: 3799, sedan: 4599, suv: 6199, crysta: 7999, tempo: 9999 },
    tolls: 300, pitStops: ["Bankura"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["IIT Kharagpur Station"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "haldia", toName: "Haldia",
    distanceKm: 340, durationHrs: "7-8", nh: "NH-116", via: ["Kharagpur"],
    fares: { hatchback: 5499, sedan: 6599, suv: 8999, crysta: 11499, tempo: 14999 },
    tolls: 450, pitStops: ["Kharagpur"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Haldia Port"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "purulia", toName: "Purulia",
    distanceKm: 70, durationHrs: "1.5-2", nh: "SH", via: ["Chas"],
    fares: { hatchback: 1499, sedan: 1799, suv: 2399, crysta: 3099, tempo: 3999 },
    tolls: 50, pitStops: [], bestTime: "Any time", roadCondition: "State Highway",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Purulia Town"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "bankura", toName: "Bankura",
    distanceKm: 130, durationHrs: "3", nh: "SH", via: ["Purulia"],
    fares: { hatchback: 2499, sedan: 2999, suv: 4099, crysta: 5299, tempo: 6799 },
    tolls: 150, pitStops: ["Purulia"], bestTime: "Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Bankura Town"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "bardhaman", toName: "Bardhaman",
    distanceKm: 160, durationHrs: "3-4", nh: "NH-19", via: ["Asansol"],
    fares: { hatchback: 2899, sedan: 3499, suv: 4699, crysta: 5999, tempo: 7699 },
    tolls: 200, pitStops: ["Asansol"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Bardhaman Station"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "malda", toName: "Malda",
    distanceKm: 340, durationHrs: "7-8", nh: "NH-12", via: ["Asansol", "Bahrampore"],
    fares: { hatchback: 5499, sedan: 6599, suv: 8999, crysta: 11499, tempo: 14999 },
    tolls: 450, pitStops: ["Asansol"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Malda Town"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "murshidabad", toName: "Murshidabad",
    distanceKm: 260, durationHrs: "6", nh: "NH-12", via: ["Asansol"],
    fares: { hatchback: 4299, sedan: 5159, suv: 6999, crysta: 8999, tempo: 11499 },
    tolls: 350, pitStops: ["Asansol"], bestTime: "Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Hazarduari Palace"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "digha", toName: "Digha",
    distanceKm: 390, durationHrs: "8", nh: "NH-116B", via: ["Kharagpur"],
    fares: { hatchback: 6199, sedan: 7439, suv: 10199, crysta: 13099, tempo: 16999 },
    tolls: 500, pitStops: ["Kharagpur"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["New Digha Sea Beach"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "mandarmani", toName: "Mandarmani",
    distanceKm: 370, durationHrs: "7.5", nh: "NH-116B", via: ["Kharagpur"],
    fares: { hatchback: 5899, sedan: 7079, suv: 9699, crysta: 12499, tempo: 15999 },
    tolls: 450, pitStops: ["Kharagpur"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Mandarmani Beach Resort Area"]
  },

  // DHANBAD TO ODISHA
  {
    from: "dhanbad", fromName: "Dhanbad", to: "rourkela", toName: "Rourkela",
    distanceKm: 340, durationHrs: "8", nh: "NH-143", via: ["Ranchi"],
    fares: { hatchback: 5499, sedan: 6599, suv: 8999, crysta: 11499, tempo: 14999 },
    tolls: 400, pitStops: ["Ranchi"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Rourkela Station", "Steel Plant"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "baripada", toName: "Baripada",
    distanceKm: 270, durationHrs: "6", nh: "NH-18", via: ["Jamshedpur"],
    fares: { hatchback: 4299, sedan: 5159, suv: 6999, crysta: 8999, tempo: 11499 },
    tolls: 300, pitStops: ["Jamshedpur"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Baripada Town", "Simlipal"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "balasore", toName: "Balasore",
    distanceKm: 320, durationHrs: "7", nh: "NH-18", via: ["Jamshedpur", "Baripada"],
    fares: { hatchback: 4999, sedan: 5999, suv: 8199, crysta: 10499, tempo: 13499 },
    tolls: 350, pitStops: ["Jamshedpur"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Balasore Station", "Chandipur"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "cuttack", toName: "Cuttack",
    distanceKm: 550, durationHrs: "11", nh: "NH-16", via: ["Jamshedpur", "Balasore"],
    fares: { hatchback: 8499, sedan: 10199, suv: 13899, crysta: 17999, tempo: 22999 },
    tolls: 750, pitStops: ["Balasore", "Jamshedpur"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Cuttack Chandi", "Station"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "keonjhar", toName: "Keonjhar",
    distanceKm: 250, durationHrs: "6", nh: "NH-20", via: ["Chaibasa"],
    fares: { hatchback: 3999, sedan: 4799, suv: 6499, crysta: 8499, tempo: 10999 },
    tolls: 300, pitStops: ["Chaibasa"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Keonjhar Town"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "sambalpur", toName: "Sambalpur",
    distanceKm: 500, durationHrs: "10-11", nh: "NH-49", via: ["Rourkela"],
    fares: { hatchback: 7699, sedan: 9239, suv: 12599, crysta: 16199, tempo: 20999 },
    tolls: 650, pitStops: ["Rourkela"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Sambalpur Town"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "jharsuguda", toName: "Jharsuguda",
    distanceKm: 460, durationHrs: "10", nh: "NH-49", via: ["Rourkela"],
    fares: { hatchback: 7199, sedan: 8639, suv: 11799, crysta: 15199, tempo: 19699 },
    tolls: 600, pitStops: ["Rourkela"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Jharsuguda Airport", "Town"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "bhadrak", toName: "Bhadrak",
    distanceKm: 390, durationHrs: "8", nh: "NH-16", via: ["Balasore"],
    fares: { hatchback: 6199, sedan: 7439, suv: 10199, crysta: 13099, tempo: 16999 },
    tolls: 500, pitStops: ["Balasore"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Bhadrak Station"]
  },

  // DHANBAD TO BIHAR
  {
    from: "dhanbad", fromName: "Dhanbad", to: "gaya", toName: "Gaya",
    distanceKm: 210, durationHrs: "4.5", nh: "NH-19", via: ["Barhi"],
    fares: { hatchback: 3299, sedan: 3959, suv: 5399, crysta: 6899, tempo: 8899 },
    tolls: 250, pitStops: ["Barhi"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Gaya Station", "Vishnupad"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "bodh-gaya", toName: "Bodh Gaya",
    distanceKm: 200, durationHrs: "4", nh: "NH-19", via: ["Barhi"],
    fares: { hatchback: 3199, sedan: 3839, suv: 5199, crysta: 6699, tempo: 8499 },
    tolls: 250, pitStops: ["Barhi"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Mahabodhi Temple"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "bhagalpur", toName: "Bhagalpur",
    distanceKm: 260, durationHrs: "6", nh: "SH", via: ["Deoghar"],
    fares: { hatchback: 4199, sedan: 5039, suv: 6799, crysta: 8799, tempo: 11299 },
    tolls: 300, pitStops: ["Deoghar"], bestTime: "Early Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Bhagalpur Station"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "muzaffarpur", toName: "Muzaffarpur",
    distanceKm: 390, durationHrs: "9", nh: "NH-22", via: ["Patna"],
    fares: { hatchback: 5999, sedan: 7199, suv: 9799, crysta: 12499, tempo: 15999 },
    tolls: 500, pitStops: ["Patna"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Muzaffarpur Station"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "darbhanga", toName: "Darbhanga",
    distanceKm: 440, durationHrs: "10", nh: "NH-27", via: ["Patna", "Muzaffarpur"],
    fares: { hatchback: 6799, sedan: 8159, suv: 11099, crysta: 14299, tempo: 18499 },
    tolls: 550, pitStops: ["Patna"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Darbhanga City"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "sasaram", toName: "Sasaram",
    distanceKm: 320, durationHrs: "7", nh: "NH-19", via: ["Gaya"],
    fares: { hatchback: 4999, sedan: 5999, suv: 8199, crysta: 10499, tempo: 13499 },
    tolls: 400, pitStops: ["Gaya"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Sasaram Town"]
  },
  {
    from: "dhanbad", fromName: "Dhanbad", to: "aurangabad", toName: "Aurangabad",
    distanceKm: 260, durationHrs: "6", nh: "NH-19", via: ["Gaya"],
    fares: { hatchback: 4199, sedan: 5039, suv: 6799, crysta: 8799, tempo: 11299 },
    tolls: 300, pitStops: ["Gaya"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Dhanbad Station", "Bank More"], dropPoints: ["Aurangabad Town"]
  },

  // ========== FROM BOKARO ==========
  {
    from: "bokaro", fromName: "Bokaro",
    to: "kolkata", toName: "Kolkata",
    distanceKm: 290, durationHrs: "5.5-6.5", nh: "NH-19",
    via: ["Dhanbad", "Asansol", "Durgapur"],
    fares: { hatchback: 4499, sedan: 5399, suv: 7399, crysta: 9499, tempo: 11999 },
    tolls: 400, pitStops: ["Dhanbad", "Asansol"],
    bestTime: "Morning",
    roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"],
    pickupPoints: ["Sector 4", "Chas", "City Centre"],
    dropPoints: ["Howrah", "Sealdah", "Airport", "Salt Lake"]
  },
  {
    from: "bokaro", fromName: "Bokaro",
    to: "jamshedpur", toName: "Jamshedpur",
    distanceKm: 120, durationHrs: "3-3.5", nh: "NH-32",
    via: ["Phusro", "Chandrapura"],
    fares: { hatchback: 2399, sedan: 3099, suv: 4199, crysta: 5399, tempo: 6799 },
    tolls: 150, pitStops: [],
    bestTime: "Any time",
    roadCondition: "Good road",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Sector 4", "Chas", "City Centre"],
    dropPoints: ["Mango", "Bistupur", "Tatanagar Station"]
  },
  {
    from: "bokaro", fromName: "Bokaro",
    to: "ranchi", toName: "Ranchi",
    distanceKm: 100, durationHrs: "2.5-3", nh: "NH-33",
    via: ["Ramgarh"],
    fares: { hatchback: 2199, sedan: 2799, suv: 3799, crysta: 4899, tempo: 6199 },
    tolls: 150, pitStops: [],
    bestTime: "Any time",
    roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Sector 4", "Chas", "City Centre"],
    dropPoints: ["Ranchi Station", "Doranda", "Airport"]
  },
  {
    from: "bokaro", fromName: "Bokaro",
    to: "dhanbad", toName: "Dhanbad",
    distanceKm: 50, durationHrs: "1-1.5", nh: "NH-32",
    via: ["Direct"],
    fares: { hatchback: 1699, sedan: 2099, suv: 2899, crysta: 3699, tempo: 4699 },
    tolls: 50, pitStops: [],
    bestTime: "Any time",
    roadCondition: "Good road",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Sector 4", "Chas"],
    dropPoints: ["Dhanbad Station", "Bank More"]
  },
  {
    from: "bokaro", fromName: "Bokaro",
    to: "deoghar", toName: "Deoghar",
    distanceKm: 140, durationHrs: "3.5-4", nh: "NH-114A",
    via: ["Giridih"],
    fares: { hatchback: 2699, sedan: 3239, suv: 4399, crysta: 5699, tempo: 7199 },
    tolls: 150, pitStops: [],
    bestTime: "Morning",
    roadCondition: "Moderate road",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Sector 4", "Chas"],
    dropPoints: ["Baidyanath Dham", "Tower Chowk"]
  },
  {
    from: "bokaro", fromName: "Bokaro",
    to: "giridih", toName: "Giridih",
    distanceKm: 110, durationHrs: "2.5-3", nh: "SH",
    via: ["Petarbar"],
    fares: { hatchback: 2299, sedan: 2759, suv: 3699, crysta: 4799, tempo: 5999 },
    tolls: 100, pitStops: [],
    bestTime: "Morning",
    roadCondition: "State highway — decent",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Sector 4", "Chas"],
    dropPoints: ["Giridih Station", "Gandhi Chowk"]
  },
  {
    from: "bokaro", fromName: "Bokaro",
    to: "hazaribagh", toName: "Hazaribagh",
    distanceKm: 75, durationHrs: "2-2.5", nh: "NH-33",
    via: ["Ramgarh"],
    fares: { hatchback: 1899, sedan: 2279, suv: 3099, crysta: 3999, tempo: 4999 },
    tolls: 100, pitStops: [],
    bestTime: "Any time",
    roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Sector 4", "Chas"],
    dropPoints: ["Hazaribagh Lake", "Court Area"]
  },
  {
    from: "bokaro", fromName: "Bokaro",
    to: "patna", toName: "Patna",
    distanceKm: 330, durationHrs: "6.5-7.5", nh: "NH-33/NH-2",
    via: ["Hazaribagh", "Koderma"],
    fares: { hatchback: 5299, sedan: 6359, suv: 8699, crysta: 10999, tempo: 13999 },
    tolls: 400, pitStops: ["Hazaribagh"],
    bestTime: "Early morning",
    roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar"],
    pickupPoints: ["Sector 4", "Chas"],
    dropPoints: ["Patna Junction", "Airport"]
  },
  {
    from: "bokaro", fromName: "Bokaro",
    to: "asansol", toName: "Asansol",
    distanceKm: 130, durationHrs: "3-3.5", nh: "NH-19",
    via: ["Dhanbad"],
    fares: { hatchback: 2499, sedan: 2999, suv: 4099, crysta: 5299, tempo: 6799 },
    tolls: 150, pitStops: ["Dhanbad"],
    bestTime: "Any time",
    roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"],
    pickupPoints: ["Sector 4", "Chas"],
    dropPoints: ["Asansol Station", "Burnpur"]
  },
  {
    from: "bokaro", fromName: "Bokaro",
    to: "durgapur", toName: "Durgapur",
    distanceKm: 160, durationHrs: "3.5-4", nh: "NH-19",
    via: ["Dhanbad", "Asansol"],
    fares: { hatchback: 2899, sedan: 3499, suv: 4699, crysta: 5999, tempo: 7699 },
    tolls: 200, pitStops: ["Dhanbad"],
    bestTime: "Any time",
    roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"],
    pickupPoints: ["Sector 4", "Chas"],
    dropPoints: ["Durgapur Station", "City Centre"]
  },
  {
    from: "bokaro", fromName: "Bokaro",
    to: "puri", toName: "Puri",
    distanceKm: 490, durationHrs: "9-10", nh: "NH-49",
    via: ["Jamshedpur", "Bhubaneswar"],
    fares: { hatchback: 7499, sedan: 8999, suv: 12299, crysta: 15799, tempo: 19999 },
    tolls: 650, pitStops: ["Jamshedpur"],
    bestTime: "Early morning",
    roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"],
    pickupPoints: ["Sector 4", "Chas"],
    dropPoints: ["Puri Station", "Jagannath Temple"]
  },
  {
    from: "bokaro", fromName: "Bokaro",
    to: "varanasi", toName: "Varanasi",
    distanceKm: 580, durationHrs: "11-12", nh: "NH-2",
    via: ["Hazaribagh", "Koderma", "Gaya"],
    fares: { hatchback: 8999, sedan: 10799, suv: 14699, crysta: 18999, tempo: 23999 },
    tolls: 700, pitStops: ["Koderma", "Gaya"],
    bestTime: "Very early morning",
    roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar", "Uttar Pradesh"],
    pickupPoints: ["Sector 4", "Chas"],
    dropPoints: ["Varanasi Station", "Ghat Area"]
  },

  {
    from: "bokaro", fromName: "Bokaro", to: "ramgarh", toName: "Ramgarh",
    distanceKm: 75, durationHrs: "2", nh: "NH-33", via: ["Peterbar"],
    fares: { hatchback: 1499, sedan: 1799, suv: 2399, crysta: 3099, tempo: 3999 },
    tolls: 100, pitStops: [], bestTime: "Any time", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Ramgarh Cantt"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "koderma", toName: "Koderma",
    distanceKm: 180, durationHrs: "4", nh: "NH-20", via: ["Hazaribagh"],
    fares: { hatchback: 3099, sedan: 3699, suv: 5099, crysta: 6499, tempo: 8299 },
    tolls: 250, pitStops: ["Hazaribagh"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Koderma Town"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "daltonganj", toName: "Daltonganj",
    distanceKm: 260, durationHrs: "6.5", nh: "NH-39", via: ["Hazaribagh", "Chatra"],
    fares: { hatchback: 4299, sedan: 5159, suv: 6999, crysta: 8999, tempo: 11499 },
    tolls: 300, pitStops: ["Hazaribagh"], bestTime: "Early Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Daltonganj Town"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "dumka", toName: "Dumka",
    distanceKm: 180, durationHrs: "4.5", nh: "SH", via: ["Dhanbad", "Jamtara"],
    fares: { hatchback: 3099, sedan: 3699, suv: 4999, crysta: 6499, tempo: 8299 },
    tolls: 250, pitStops: ["Dhanbad"], bestTime: "Morning", roadCondition: "State Highway",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Dumka Town"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "chaibasa", toName: "Chaibasa",
    distanceKm: 180, durationHrs: "4.5", nh: "NH-32", via: ["Jamshedpur"],
    fares: { hatchback: 3099, sedan: 3699, suv: 4999, crysta: 6499, tempo: 8299 },
    tolls: 250, pitStops: ["Jamshedpur"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Chaibasa Town"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "pakur", toName: "Pakur",
    distanceKm: 270, durationHrs: "6.5", nh: "SH", via: ["Dumka"],
    fares: { hatchback: 4299, sedan: 5159, suv: 6999, crysta: 8999, tempo: 11499 },
    tolls: 300, pitStops: ["Dumka"], bestTime: "Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Pakur Town"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "phusro", toName: "Phusro",
    distanceKm: 40, durationHrs: "1", nh: "SH", via: ["Direct"],
    fares: { hatchback: 1099, sedan: 1299, suv: 1799, crysta: 2299, tempo: 2999 },
    tolls: 50, pitStops: [], bestTime: "Any time", roadCondition: "State Highway",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Phusro Town"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "ghatsila", toName: "Ghatsila",
    distanceKm: 170, durationHrs: "4.5", nh: "NH-18", via: ["Jamshedpur"],
    fares: { hatchback: 2999, sedan: 3599, suv: 4899, crysta: 6299, tempo: 7999 },
    tolls: 200, pitStops: ["Jamshedpur"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Ghatsila Town"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "jadugoda", toName: "Jadugoda",
    distanceKm: 150, durationHrs: "4", nh: "NH-32", via: ["Jamshedpur"],
    fares: { hatchback: 2699, sedan: 3239, suv: 4399, crysta: 5699, tempo: 7199 },
    tolls: 200, pitStops: ["Jamshedpur"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Jadugoda Mines"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "seraikela", toName: "Seraikela",
    distanceKm: 150, durationHrs: "4", nh: "NH-32", via: ["Chandil"],
    fares: { hatchback: 2699, sedan: 3239, suv: 4399, crysta: 5699, tempo: 7199 },
    tolls: 200, pitStops: [], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Seraikela Palace"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "khunti", toName: "Khunti",
    distanceKm: 150, durationHrs: "4", nh: "NH-33", via: ["Ranchi"],
    fares: { hatchback: 2699, sedan: 3239, suv: 4399, crysta: 5699, tempo: 7199 },
    tolls: 200, pitStops: ["Ranchi"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Khunti Town"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "simdega", toName: "Simdega",
    distanceKm: 260, durationHrs: "6.5", nh: "NH-143", via: ["Ranchi", "Khunti"],
    fares: { hatchback: 4299, sedan: 5159, suv: 6999, crysta: 8999, tempo: 11499 },
    tolls: 300, pitStops: ["Ranchi"], bestTime: "Early Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Simdega Town"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "lohardaga", toName: "Lohardaga",
    distanceKm: 180, durationHrs: "4.5", nh: "NH-43", via: ["Ranchi"],
    fares: { hatchback: 3099, sedan: 3699, suv: 5099, crysta: 6499, tempo: 8299 },
    tolls: 250, pitStops: ["Ranchi"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Lohardaga Town"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "gumla", toName: "Gumla",
    distanceKm: 210, durationHrs: "5.5", nh: "NH-43", via: ["Ranchi"],
    fares: { hatchback: 3499, sedan: 4199, suv: 5699, crysta: 7299, tempo: 9399 },
    tolls: 250, pitStops: ["Ranchi"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Gumla Town"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "patratu", toName: "Patratu",
    distanceKm: 110, durationHrs: "3", nh: "NH-33", via: ["Ramgarh"],
    fares: { hatchback: 2199, sedan: 2639, suv: 3599, crysta: 4699, tempo: 5999 },
    tolls: 150, pitStops: ["Ramgarh"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Patratu Valley"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "rajrappa", toName: "Rajrappa",
    distanceKm: 70, durationHrs: "2", nh: "NH-33", via: ["Peterbar"],
    fares: { hatchback: 1499, sedan: 1799, suv: 2399, crysta: 3099, tempo: 3999 },
    tolls: 100, pitStops: [], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Chhinnamasta Temple"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "netarhat", toName: "Netarhat",
    distanceKm: 260, durationHrs: "7", nh: "NH-39", via: ["Ranchi", "Lohardaga"],
    fares: { hatchback: 4299, sedan: 5159, suv: 6999, crysta: 8999, tempo: 11499 },
    tolls: 300, pitStops: ["Ranchi"], bestTime: "Early Morning", roadCondition: "Hill Roads",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Netarhat Hill Station"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "betla", toName: "Betla",
    distanceKm: 250, durationHrs: "6.5", nh: "NH-39", via: ["Ranchi", "Latehar"],
    fares: { hatchback: 4199, sedan: 5039, suv: 6799, crysta: 8799, tempo: 11299 },
    tolls: 300, pitStops: ["Ranchi"], bestTime: "Morning", roadCondition: "State Highway",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Betla National Park Gate"]
  },

  // BOKARO TO WEST BENGAL
  {
    from: "bokaro", fromName: "Bokaro", to: "siliguri", toName: "Siliguri",
    distanceKm: 530, durationHrs: "11", nh: "NH-27", via: ["Dhanbad", "Malda"],
    fares: { hatchback: 8399, sedan: 10079, suv: 13699, crysta: 17699, tempo: 22699 },
    tolls: 650, pitStops: ["Dhanbad", "Malda"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Siliguri Junction"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "darjeeling", toName: "Darjeeling",
    distanceKm: 600, durationHrs: "13.5", nh: "NH-27", via: ["Siliguri"],
    fares: { hatchback: 9499, sedan: 11399, suv: 15499, crysta: 19999, tempo: 25999 },
    tolls: 700, pitStops: ["Siliguri"], bestTime: "Very Early Morning", roadCondition: "Mixed with Hills",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Darjeeling Mall"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "kharagpur", toName: "Kharagpur",
    distanceKm: 260, durationHrs: "5.5", nh: "NH-19/NH-14", via: ["Purulia"],
    fares: { hatchback: 4199, sedan: 5039, suv: 6799, crysta: 8799, tempo: 11299 },
    tolls: 300, pitStops: ["Purulia"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["IIT Kharagpur Station"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "haldia", toName: "Haldia",
    distanceKm: 370, durationHrs: "8", nh: "NH-116", via: ["Kharagpur"],
    fares: { hatchback: 5899, sedan: 7079, suv: 9699, crysta: 12499, tempo: 15999 },
    tolls: 450, pitStops: ["Kharagpur"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Haldia Port"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "purulia", toName: "Purulia",
    distanceKm: 45, durationHrs: "1", nh: "SH", via: ["Chas"],
    fares: { hatchback: 1099, sedan: 1299, suv: 1799, crysta: 2299, tempo: 2999 },
    tolls: 50, pitStops: [], bestTime: "Any time", roadCondition: "State Highway",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Purulia Town"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "bankura", toName: "Bankura",
    distanceKm: 100, durationHrs: "2.5", nh: "SH", via: ["Purulia"],
    fares: { hatchback: 1999, sedan: 2399, suv: 3299, crysta: 4299, tempo: 5499 },
    tolls: 150, pitStops: ["Purulia"], bestTime: "Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Bankura Town"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "bardhaman", toName: "Bardhaman",
    distanceKm: 190, durationHrs: "4", nh: "NH-19", via: ["Asansol"],
    fares: { hatchback: 3199, sedan: 3839, suv: 5199, crysta: 6699, tempo: 8499 },
    tolls: 250, pitStops: ["Asansol"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Bardhaman Station"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "malda", toName: "Malda",
    distanceKm: 390, durationHrs: "9", nh: "NH-12", via: ["Asansol"],
    fares: { hatchback: 6199, sedan: 7439, suv: 10199, crysta: 13099, tempo: 16999 },
    tolls: 450, pitStops: ["Asansol"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Malda Town"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "murshidabad", toName: "Murshidabad",
    distanceKm: 300, durationHrs: "7", nh: "NH-12", via: ["Asansol"],
    fares: { hatchback: 4799, sedan: 5759, suv: 7799, crysta: 9999, tempo: 12999 },
    tolls: 350, pitStops: ["Asansol"], bestTime: "Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Hazarduari Palace"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "digha", toName: "Digha",
    distanceKm: 420, durationHrs: "9", nh: "NH-116B", via: ["Kharagpur"],
    fares: { hatchback: 6699, sedan: 8039, suv: 10999, crysta: 14299, tempo: 18499 },
    tolls: 500, pitStops: ["Kharagpur"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["New Digha Sea Beach"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "mandarmani", toName: "Mandarmani",
    distanceKm: 400, durationHrs: "8.5", nh: "NH-116B", via: ["Kharagpur"],
    fares: { hatchback: 6399, sedan: 7679, suv: 10499, crysta: 13599, tempo: 17699 },
    tolls: 450, pitStops: ["Kharagpur"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Mandarmani Beach Resort"]
  },

  // BOKARO TO ODISHA
  {
    from: "bokaro", fromName: "Bokaro", to: "rourkela", toName: "Rourkela",
    distanceKm: 280, durationHrs: "6.5", nh: "NH-143", via: ["Ranchi"],
    fares: { hatchback: 4499, sedan: 5399, suv: 7399, crysta: 9499, tempo: 11999 },
    tolls: 350, pitStops: ["Ranchi"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Rourkela Station", "Steel Plant"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "baripada", toName: "Baripada",
    distanceKm: 300, durationHrs: "7", nh: "NH-18", via: ["Jamshedpur"],
    fares: { hatchback: 4799, sedan: 5759, suv: 7799, crysta: 9999, tempo: 12999 },
    tolls: 350, pitStops: ["Jamshedpur"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Baripada Town"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "balasore", toName: "Balasore",
    distanceKm: 350, durationHrs: "8", nh: "NH-18", via: ["Jamshedpur"],
    fares: { hatchback: 5599, sedan: 6719, suv: 9199, crysta: 11899, tempo: 15499 },
    tolls: 400, pitStops: ["Jamshedpur"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Balasore Station"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "cuttack", toName: "Cuttack",
    distanceKm: 580, durationHrs: "12", nh: "NH-16", via: ["Jamshedpur", "Balasore"],
    fares: { hatchback: 8999, sedan: 10799, suv: 14699, crysta: 18999, tempo: 23999 },
    tolls: 750, pitStops: ["Balasore"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Cuttack Chandi"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "keonjhar", toName: "Keonjhar",
    distanceKm: 290, durationHrs: "7", nh: "NH-20", via: ["Chaibasa"],
    fares: { hatchback: 4599, sedan: 5519, suv: 7599, crysta: 9799, tempo: 12799 },
    tolls: 350, pitStops: ["Chaibasa"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Keonjhar Town"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "sambalpur", toName: "Sambalpur",
    distanceKm: 440, durationHrs: "10", nh: "NH-49", via: ["Rourkela"],
    fares: { hatchback: 6999, sedan: 8399, suv: 11499, crysta: 14999, tempo: 18999 },
    tolls: 550, pitStops: ["Rourkela"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Sambalpur Town"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "jharsuguda", toName: "Jharsuguda",
    distanceKm: 400, durationHrs: "9", nh: "NH-49", via: ["Rourkela"],
    fares: { hatchback: 6399, sedan: 7679, suv: 10499, crysta: 13599, tempo: 17699 },
    tolls: 500, pitStops: ["Rourkela"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Jharsuguda Airport"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "bhadrak", toName: "Bhadrak",
    distanceKm: 420, durationHrs: "9", nh: "NH-16", via: ["Balasore"],
    fares: { hatchback: 6699, sedan: 8039, suv: 10999, crysta: 14299, tempo: 18499 },
    tolls: 500, pitStops: ["Balasore"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Bhadrak Station"]
  },

  // BOKARO TO BIHAR
  {
    from: "bokaro", fromName: "Bokaro", to: "gaya", toName: "Gaya",
    distanceKm: 230, durationHrs: "5", nh: "NH-19", via: ["Barhi"],
    fares: { hatchback: 3699, sedan: 4439, suv: 6099, crysta: 7899, tempo: 9999 },
    tolls: 250, pitStops: ["Barhi"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Gaya Station"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "bodh-gaya", toName: "Bodh Gaya",
    distanceKm: 220, durationHrs: "4.5", nh: "NH-19", via: ["Barhi"],
    fares: { hatchback: 3599, sedan: 4319, suv: 5899, crysta: 7599, tempo: 9699 },
    tolls: 250, pitStops: ["Barhi"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Mahabodhi Temple"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "bhagalpur", toName: "Bhagalpur",
    distanceKm: 300, durationHrs: "7", nh: "SH", via: ["Deoghar"],
    fares: { hatchback: 4799, sedan: 5759, suv: 7799, crysta: 9999, tempo: 12999 },
    tolls: 300, pitStops: ["Deoghar"], bestTime: "Early Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Bhagalpur Station"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "muzaffarpur", toName: "Muzaffarpur",
    distanceKm: 400, durationHrs: "9", nh: "NH-22", via: ["Patna"],
    fares: { hatchback: 6399, sedan: 7679, suv: 10499, crysta: 13599, tempo: 17699 },
    tolls: 500, pitStops: ["Patna"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Muzaffarpur Station"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "darbhanga", toName: "Darbhanga",
    distanceKm: 450, durationHrs: "10.5", nh: "NH-27", via: ["Patna"],
    fares: { hatchback: 7199, sedan: 8639, suv: 11799, crysta: 15199, tempo: 19699 },
    tolls: 550, pitStops: ["Patna"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Darbhanga City"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "sasaram", toName: "Sasaram",
    distanceKm: 340, durationHrs: "7.5", nh: "NH-19", via: ["Gaya"],
    fares: { hatchback: 5499, sedan: 6599, suv: 8999, crysta: 11499, tempo: 14999 },
    tolls: 400, pitStops: ["Gaya"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Sasaram Town"]
  },
  {
    from: "bokaro", fromName: "Bokaro", to: "aurangabad", toName: "Aurangabad",
    distanceKm: 280, durationHrs: "6.5", nh: "NH-19", via: ["Gaya"],
    fares: { hatchback: 4499, sedan: 5399, suv: 7399, crysta: 9499, tempo: 11999 },
    tolls: 350, pitStops: ["Gaya"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Sector 4", "Chas"], dropPoints: ["Aurangabad Town"]
  },

  // ========== FROM DEOGHAR ==========
  {
    from: "deoghar", fromName: "Deoghar",
    to: "jamshedpur", toName: "Jamshedpur",
    distanceKm: 160, durationHrs: "4-5", nh: "NH-114A",
    via: ["Madhupur", "Dhanbad"],
    fares: { hatchback: 2899, sedan: 3499, suv: 4699, crysta: 5999, tempo: 7699 },
    tolls: 150, pitStops: ["Dhanbad"],
    bestTime: "Morning",
    roadCondition: "Moderate",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Tower Chowk", "Jasidih Station", "Baidyanath Dham"],
    dropPoints: ["Mango", "Bistupur", "Tatanagar Station"]
  },
  {
    from: "deoghar", fromName: "Deoghar",
    to: "ranchi", toName: "Ranchi",
    distanceKm: 250, durationHrs: "5-6", nh: "NH-114A/NH-33",
    via: ["Giridih", "Bokaro"],
    fares: { hatchback: 3999, sedan: 4799, suv: 6499, crysta: 8499, tempo: 10999 },
    tolls: 250, pitStops: ["Bokaro"],
    bestTime: "Morning",
    roadCondition: "Moderate to good",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Tower Chowk", "Jasidih Station"],
    dropPoints: ["Ranchi Station", "Doranda", "Airport"]
  },
  {
    from: "deoghar", fromName: "Deoghar",
    to: "kolkata", toName: "Kolkata",
    distanceKm: 330, durationHrs: "6-7", nh: "NH-114A/NH-19",
    via: ["Dhanbad", "Asansol"],
    fares: { hatchback: 5299, sedan: 6359, suv: 8699, crysta: 10999, tempo: 13999 },
    tolls: 400, pitStops: ["Dhanbad"],
    bestTime: "Morning",
    roadCondition: "Good via NH-19 after Dhanbad",
    statesCrossed: ["Jharkhand", "West Bengal"],
    pickupPoints: ["Tower Chowk", "Jasidih Station"],
    dropPoints: ["Howrah", "Sealdah", "Airport"]
  },
  {
    from: "deoghar", fromName: "Deoghar",
    to: "dhanbad", toName: "Dhanbad",
    distanceKm: 120, durationHrs: "3-3.5", nh: "NH-114A",
    via: ["Madhupur"],
    fares: { hatchback: 2399, sedan: 2899, suv: 3899, crysta: 4999, tempo: 6499 },
    tolls: 100, pitStops: [],
    bestTime: "Any time",
    roadCondition: "Moderate",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Tower Chowk", "Jasidih"],
    dropPoints: ["Dhanbad Station", "Bank More"]
  },
  {
    from: "deoghar", fromName: "Deoghar",
    to: "bokaro", toName: "Bokaro",
    distanceKm: 140, durationHrs: "3.5-4", nh: "SH",
    via: ["Giridih"],
    fares: { hatchback: 2699, sedan: 3239, suv: 4399, crysta: 5699, tempo: 7199 },
    tolls: 150, pitStops: [],
    bestTime: "Morning",
    roadCondition: "State highway",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Tower Chowk", "Jasidih"],
    dropPoints: ["Sector 4", "Chas"]
  },
  {
    from: "deoghar", fromName: "Deoghar",
    to: "patna", toName: "Patna",
    distanceKm: 250, durationHrs: "5-6", nh: "NH-114A/NH-2",
    via: ["Dumka"],
    fares: { hatchback: 3999, sedan: 4799, suv: 6499, crysta: 8499, tempo: 10999 },
    tolls: 250, pitStops: [],
    bestTime: "Morning",
    roadCondition: "Mixed roads",
    statesCrossed: ["Jharkhand", "Bihar"],
    pickupPoints: ["Tower Chowk", "Jasidih"],
    dropPoints: ["Patna Junction", "Airport"]
  },
  {
    from: "deoghar", fromName: "Deoghar",
    to: "dumka", toName: "Dumka",
    distanceKm: 60, durationHrs: "1.5-2", nh: "SH",
    via: ["Direct"],
    fares: { hatchback: 1799, sedan: 2199, suv: 2999, crysta: 3899, tempo: 4999 },
    tolls: 50, pitStops: [],
    bestTime: "Any time",
    roadCondition: "State highway",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Tower Chowk", "Jasidih"],
    dropPoints: ["Dumka Town"]
  },
  {
    from: "deoghar", fromName: "Deoghar",
    to: "giridih", toName: "Giridih",
    distanceKm: 80, durationHrs: "2-2.5", nh: "SH",
    via: ["Direct"],
    fares: { hatchback: 1999, sedan: 2399, suv: 3299, crysta: 4299, tempo: 5399 },
    tolls: 50, pitStops: [],
    bestTime: "Any time",
    roadCondition: "State highway",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Tower Chowk"],
    dropPoints: ["Giridih Station", "Gandhi Chowk"]
  },
  {
    from: "deoghar", fromName: "Deoghar",
    to: "asansol", toName: "Asansol",
    distanceKm: 200, durationHrs: "4-5", nh: "NH-114A/NH-19",
    via: ["Dhanbad"],
    fares: { hatchback: 3399, sedan: 4099, suv: 5499, crysta: 7099, tempo: 8999 },
    tolls: 200, pitStops: ["Dhanbad"],
    bestTime: "Morning",
    roadCondition: "Good via Dhanbad",
    statesCrossed: ["Jharkhand", "West Bengal"],
    pickupPoints: ["Tower Chowk"],
    dropPoints: ["Asansol Station"]
  },
  {
    from: "deoghar", fromName: "Deoghar",
    to: "hazaribagh", toName: "Hazaribagh",
    distanceKm: 200, durationHrs: "4.5-5.5", nh: "SH",
    via: ["Giridih", "Bokaro"],
    fares: { hatchback: 3399, sedan: 4099, suv: 5499, crysta: 7099, tempo: 8999 },
    tolls: 200, pitStops: [],
    bestTime: "Morning",
    roadCondition: "Mixed",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Tower Chowk"],
    dropPoints: ["Hazaribagh Lake", "Court Area"]
  },

  {
    from: "deoghar", fromName: "Deoghar", to: "ramgarh", toName: "Ramgarh",
    distanceKm: 210, durationHrs: "5", nh: "SH", via: ["Giridih", "Bokaro"],
    fares: { hatchback: 3499, sedan: 4199, suv: 5699, crysta: 7299, tempo: 9399 },
    tolls: 200, pitStops: ["Giridih"], bestTime: "Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Tower Chowk"], dropPoints: ["Ramgarh Cantt"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "koderma", toName: "Koderma",
    distanceKm: 150, durationHrs: "3.5", nh: "SH", via: ["Giridih"],
    fares: { hatchback: 2699, sedan: 3239, suv: 4399, crysta: 5699, tempo: 7199 },
    tolls: 150, pitStops: [], bestTime: "Morning", roadCondition: "State Highway",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Tower Chowk"], dropPoints: ["Koderma Town"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "daltonganj", toName: "Daltonganj",
    distanceKm: 340, durationHrs: "8", nh: "NH-39", via: ["Hazaribagh", "Chatra"],
    fares: { hatchback: 5499, sedan: 6599, suv: 8999, crysta: 11499, tempo: 14999 },
    tolls: 400, pitStops: ["Hazaribagh"], bestTime: "Early Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Tower Chowk"], dropPoints: ["Daltonganj Town"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "chaibasa", toName: "Chaibasa",
    distanceKm: 220, durationHrs: "5.5", nh: "NH-32", via: ["Dhanbad", "Jamshedpur"],
    fares: { hatchback: 3799, sedan: 4599, suv: 6199, crysta: 7999, tempo: 9999 },
    tolls: 300, pitStops: ["Dhanbad"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Tower Chowk"], dropPoints: ["Chaibasa Town"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "pakur", toName: "Pakur",
    distanceKm: 120, durationHrs: "3", nh: "SH", via: ["Dumka"],
    fares: { hatchback: 2099, sedan: 2519, suv: 3399, crysta: 4399, tempo: 5499 },
    tolls: 100, pitStops: ["Dumka"], bestTime: "Morning", roadCondition: "State Highway",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Tower Chowk"], dropPoints: ["Pakur Town"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "phusro", toName: "Phusro",
    distanceKm: 130, durationHrs: "3.5", nh: "SH", via: ["Dhanbad"],
    fares: { hatchback: 2399, sedan: 2879, suv: 3899, crysta: 4999, tempo: 6499 },
    tolls: 150, pitStops: ["Dhanbad"], bestTime: "Any time", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Tower Chowk"], dropPoints: ["Phusro Town"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "ghatsila", toName: "Ghatsila",
    distanceKm: 210, durationHrs: "5", nh: "NH-18", via: ["Jamshedpur"],
    fares: { hatchback: 3499, sedan: 4199, suv: 5699, crysta: 7299, tempo: 9399 },
    tolls: 250, pitStops: ["Jamshedpur"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Tower Chowk"], dropPoints: ["Ghatsila Town"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "jadugoda", toName: "Jadugoda",
    distanceKm: 190, durationHrs: "4.5", nh: "NH-32", via: ["Jamshedpur"],
    fares: { hatchback: 3199, sedan: 3839, suv: 5199, crysta: 6699, tempo: 8499 },
    tolls: 250, pitStops: ["Jamshedpur"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Tower Chowk"], dropPoints: ["Jadugoda Mines"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "seraikela", toName: "Seraikela",
    distanceKm: 190, durationHrs: "4.5", nh: "NH-32", via: ["Chandil"],
    fares: { hatchback: 3199, sedan: 3839, suv: 5199, crysta: 6699, tempo: 8499 },
    tolls: 250, pitStops: ["Chandil"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Tower Chowk"], dropPoints: ["Seraikela Palace"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "khunti", toName: "Khunti",
    distanceKm: 280, durationHrs: "6.5", nh: "NH-33", via: ["Ranchi"],
    fares: { hatchback: 4699, sedan: 5639, suv: 7599, crysta: 9899, tempo: 12699 },
    tolls: 350, pitStops: ["Ranchi"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Tower Chowk"], dropPoints: ["Khunti Town"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "simdega", toName: "Simdega",
    distanceKm: 390, durationHrs: "9", nh: "NH-143", via: ["Ranchi", "Khunti"],
    fares: { hatchback: 6499, sedan: 7799, suv: 10599, crysta: 13699, tempo: 17599 },
    tolls: 500, pitStops: ["Ranchi"], bestTime: "Early Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Tower Chowk"], dropPoints: ["Simdega Town"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "lohardaga", toName: "Lohardaga",
    distanceKm: 310, durationHrs: "7", nh: "NH-43", via: ["Ranchi"],
    fares: { hatchback: 5199, sedan: 6239, suv: 8499, crysta: 10899, tempo: 13999 },
    tolls: 400, pitStops: ["Ranchi"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Tower Chowk"], dropPoints: ["Lohardaga Town"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "gumla", toName: "Gumla",
    distanceKm: 340, durationHrs: "8", nh: "NH-43", via: ["Ranchi"],
    fares: { hatchback: 5699, sedan: 6839, suv: 9299, crysta: 11999, tempo: 15399 },
    tolls: 450, pitStops: ["Ranchi"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Tower Chowk"], dropPoints: ["Gumla Town"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "patratu", toName: "Patratu",
    distanceKm: 240, durationHrs: "5.5", nh: "NH-33", via: ["Ramgarh"],
    fares: { hatchback: 3999, sedan: 4799, suv: 6499, crysta: 8499, tempo: 10999 },
    tolls: 300, pitStops: ["Ramgarh"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Tower Chowk"], dropPoints: ["Patratu Valley"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "rajrappa", toName: "Rajrappa",
    distanceKm: 200, durationHrs: "4.5", nh: "NH-33", via: ["Bokaro"],
    fares: { hatchback: 3399, sedan: 4099, suv: 5499, crysta: 7099, tempo: 8999 },
    tolls: 250, pitStops: ["Bokaro"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Tower Chowk"], dropPoints: ["Chhinnamasta Temple"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "netarhat", toName: "Netarhat",
    distanceKm: 390, durationHrs: "9", nh: "NH-39", via: ["Ranchi", "Lohardaga"],
    fares: { hatchback: 6499, sedan: 7799, suv: 10599, crysta: 13699, tempo: 17599 },
    tolls: 500, pitStops: ["Ranchi"], bestTime: "Early Morning", roadCondition: "Hill Roads",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Tower Chowk"], dropPoints: ["Netarhat Hill Station"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "betla", toName: "Betla",
    distanceKm: 380, durationHrs: "8.5", nh: "NH-39", via: ["Ranchi", "Latehar"],
    fares: { hatchback: 6399, sedan: 7679, suv: 10499, crysta: 13599, tempo: 17699 },
    tolls: 500, pitStops: ["Ranchi"], bestTime: "Morning", roadCondition: "State Highway",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Tower Chowk"], dropPoints: ["Betla National Park Gate"]
  },

  // DEOGHAR TO WEST BENGAL
  {
    from: "deoghar", fromName: "Deoghar", to: "siliguri", toName: "Siliguri",
    distanceKm: 420, durationHrs: "9", nh: "NH-27", via: ["Dumka", "Malda"],
    fares: { hatchback: 6999, sedan: 8399, suv: 11499, crysta: 14999, tempo: 18999 },
    tolls: 500, pitStops: ["Dumka", "Malda"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Tower Chowk"], dropPoints: ["Siliguri Junction"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "darjeeling", toName: "Darjeeling",
    distanceKm: 490, durationHrs: "11.5", nh: "NH-27", via: ["Siliguri"],
    fares: { hatchback: 8199, sedan: 9839, suv: 13399, crysta: 17299, tempo: 22499 },
    tolls: 600, pitStops: ["Siliguri"], bestTime: "Very Early Morning", roadCondition: "Mixed with Hills",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Tower Chowk"], dropPoints: ["Darjeeling Mall"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "durgapur", toName: "Durgapur",
    distanceKm: 180, durationHrs: "4", nh: "NH-19", via: ["Asansol"],
    fares: { hatchback: 2999, sedan: 3599, suv: 4899, crysta: 6299, tempo: 7999 },
    tolls: 200, pitStops: ["Asansol"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Tower Chowk"], dropPoints: ["Durgapur City Centre"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "kharagpur", toName: "Kharagpur",
    distanceKm: 320, durationHrs: "7", nh: "NH-19/NH-14", via: ["Asansol", "Bankura"],
    fares: { hatchback: 4999, sedan: 5999, suv: 8199, crysta: 10499, tempo: 13499 },
    tolls: 400, pitStops: ["Bankura"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Tower Chowk"], dropPoints: ["IIT Kharagpur Station"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "haldia", toName: "Haldia",
    distanceKm: 430, durationHrs: "9.5", nh: "NH-116", via: ["Kharagpur"],
    fares: { hatchback: 7199, sedan: 8639, suv: 11799, crysta: 15199, tempo: 19699 },
    tolls: 550, pitStops: ["Kharagpur"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Tower Chowk"], dropPoints: ["Haldia Port"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "purulia", toName: "Purulia",
    distanceKm: 190, durationHrs: "4.5", nh: "SH", via: ["Dhanbad"],
    fares: { hatchback: 3199, sedan: 3839, suv: 5199, crysta: 6699, tempo: 8499 },
    tolls: 250, pitStops: ["Dhanbad"], bestTime: "Any time", roadCondition: "State Highway",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Tower Chowk"], dropPoints: ["Purulia Town"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "bankura", toName: "Bankura",
    distanceKm: 250, durationHrs: "6", nh: "SH", via: ["Asansol"],
    fares: { hatchback: 4199, sedan: 5039, suv: 6799, crysta: 8799, tempo: 11299 },
    tolls: 300, pitStops: ["Asansol"], bestTime: "Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Tower Chowk"], dropPoints: ["Bankura Town"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "bardhaman", toName: "Bardhaman",
    distanceKm: 240, durationHrs: "5", nh: "NH-19", via: ["Asansol"],
    fares: { hatchback: 3999, sedan: 4799, suv: 6499, crysta: 8499, tempo: 10999 },
    tolls: 350, pitStops: ["Asansol"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Tower Chowk"], dropPoints: ["Bardhaman Station"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "malda", toName: "Malda",
    distanceKm: 280, durationHrs: "6", nh: "NH-12", via: ["Dumka"],
    fares: { hatchback: 4499, sedan: 5399, suv: 7399, crysta: 9499, tempo: 11999 },
    tolls: 350, pitStops: ["Dumka"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Tower Chowk"], dropPoints: ["Malda Town"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "murshidabad", toName: "Murshidabad",
    distanceKm: 230, durationHrs: "5.5", nh: "NH-12", via: ["Dumka"],
    fares: { hatchback: 3799, sedan: 4599, suv: 6199, crysta: 7999, tempo: 9999 },
    tolls: 300, pitStops: ["Dumka"], bestTime: "Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Tower Chowk"], dropPoints: ["Hazarduari Palace"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "digha", toName: "Digha",
    distanceKm: 480, durationHrs: "10.5", nh: "NH-116B", via: ["Kharagpur"],
    fares: { hatchback: 7699, sedan: 9239, suv: 12599, crysta: 16199, tempo: 20999 },
    tolls: 600, pitStops: ["Kharagpur"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Tower Chowk"], dropPoints: ["New Digha Sea Beach"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "mandarmani", toName: "Mandarmani",
    distanceKm: 460, durationHrs: "10", nh: "NH-116B", via: ["Kharagpur"],
    fares: { hatchback: 7399, sedan: 8879, suv: 12099, crysta: 15699, tempo: 20199 },
    tolls: 550, pitStops: ["Kharagpur"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Tower Chowk"], dropPoints: ["Mandarmani Beach Resort"]
  },

  // DEOGHAR TO ODISHA
  {
    from: "deoghar", fromName: "Deoghar", to: "bhubaneswar", toName: "Bhubaneswar",
    distanceKm: 580, durationHrs: "12.5", nh: "NH-16", via: ["Kharagpur", "Balasore"],
    fares: { hatchback: 8999, sedan: 10799, suv: 14699, crysta: 18999, tempo: 24999 },
    tolls: 700, pitStops: ["Kharagpur"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal", "Odisha"], pickupPoints: ["Tower Chowk"], dropPoints: ["Bhubaneswar"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "puri", toName: "Puri",
    distanceKm: 640, durationHrs: "14", nh: "NH-16", via: ["Bhubaneswar"],
    fares: { hatchback: 9999, sedan: 11999, suv: 16299, crysta: 20999, tempo: 27999 },
    tolls: 800, pitStops: ["Kharagpur", "Bhubaneswar"], bestTime: "Very Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal", "Odisha"], pickupPoints: ["Tower Chowk"], dropPoints: ["Puri"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "rourkela", toName: "Rourkela",
    distanceKm: 430, durationHrs: "9.5", nh: "NH-143", via: ["Ranchi"],
    fares: { hatchback: 7199, sedan: 8639, suv: 11799, crysta: 15199, tempo: 19699 },
    tolls: 550, pitStops: ["Ranchi"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Tower Chowk"], dropPoints: ["Rourkela Station", "Steel Plant"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "baripada", toName: "Baripada",
    distanceKm: 340, durationHrs: "7.5", nh: "NH-18", via: ["Kharagpur"],
    fares: { hatchback: 5499, sedan: 6599, suv: 8999, crysta: 11499, tempo: 14999 },
    tolls: 400, pitStops: ["Kharagpur"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal", "Odisha"], pickupPoints: ["Tower Chowk"], dropPoints: ["Baripada Town"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "balasore", toName: "Balasore",
    distanceKm: 420, durationHrs: "9", nh: "NH-16", via: ["Kharagpur"],
    fares: { hatchback: 6699, sedan: 8039, suv: 10999, crysta: 14299, tempo: 18499 },
    tolls: 550, pitStops: ["Kharagpur"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal", "Odisha"], pickupPoints: ["Tower Chowk"], dropPoints: ["Balasore Station"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "cuttack", toName: "Cuttack",
    distanceKm: 550, durationHrs: "12", nh: "NH-16", via: ["Kharagpur", "Balasore"],
    fares: { hatchback: 8499, sedan: 10199, suv: 13899, crysta: 17999, tempo: 22999 },
    tolls: 650, pitStops: ["Balasore"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal", "Odisha"], pickupPoints: ["Tower Chowk"], dropPoints: ["Cuttack Chandi"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "keonjhar", toName: "Keonjhar",
    distanceKm: 370, durationHrs: "8", nh: "NH-20", via: ["Chaibasa"],
    fares: { hatchback: 5899, sedan: 7079, suv: 9699, crysta: 12499, tempo: 15999 },
    tolls: 450, pitStops: ["Chaibasa"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Tower Chowk"], dropPoints: ["Keonjhar Town"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "sambalpur", toName: "Sambalpur",
    distanceKm: 590, durationHrs: "13", nh: "NH-49", via: ["Rourkela"],
    fares: { hatchback: 9299, sedan: 11159, suv: 15199, crysta: 19599, tempo: 25499 },
    tolls: 750, pitStops: ["Rourkela"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Tower Chowk"], dropPoints: ["Sambalpur Town"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "jharsuguda", toName: "Jharsuguda",
    distanceKm: 550, durationHrs: "12", nh: "NH-49", via: ["Rourkela"],
    fares: { hatchback: 8499, sedan: 10199, suv: 13899, crysta: 17999, tempo: 22999 },
    tolls: 700, pitStops: ["Rourkela"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Tower Chowk"], dropPoints: ["Jharsuguda Airport"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "bhadrak", toName: "Bhadrak",
    distanceKm: 480, durationHrs: "10.5", nh: "NH-16", via: ["Balasore"],
    fares: { hatchback: 7699, sedan: 9239, suv: 12599, crysta: 16199, tempo: 20999 },
    tolls: 600, pitStops: ["Balasore"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal", "Odisha"], pickupPoints: ["Tower Chowk"], dropPoints: ["Bhadrak Station"]
  },

  // DEOGHAR TO BIHAR
  {
    from: "deoghar", fromName: "Deoghar", to: "gaya", toName: "Gaya",
    distanceKm: 190, durationHrs: "4", nh: "NH-19", via: ["Nawada"],
    fares: { hatchback: 3199, sedan: 3839, suv: 5199, crysta: 6699, tempo: 8499 },
    tolls: 250, pitStops: ["Nawada"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Tower Chowk"], dropPoints: ["Gaya Station"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "bodh-gaya", toName: "Bodh Gaya",
    distanceKm: 205, durationHrs: "4.5", nh: "NH-19", via: ["Nawada"],
    fares: { hatchback: 3399, sedan: 4099, suv: 5499, crysta: 7099, tempo: 8999 },
    tolls: 250, pitStops: ["Nawada"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Tower Chowk"], dropPoints: ["Mahabodhi Temple"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "bhagalpur", toName: "Bhagalpur",
    distanceKm: 120, durationHrs: "3", nh: "SH", via: ["Banka"],
    fares: { hatchback: 2099, sedan: 2519, suv: 3399, crysta: 4399, tempo: 5499 },
    tolls: 150, pitStops: ["Banka"], bestTime: "Early Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Tower Chowk"], dropPoints: ["Bhagalpur Station"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "muzaffarpur", toName: "Muzaffarpur",
    distanceKm: 320, durationHrs: "7.5", nh: "NH-22", via: ["Patna"],
    fares: { hatchback: 4999, sedan: 5999, suv: 8199, crysta: 10499, tempo: 13499 },
    tolls: 400, pitStops: ["Patna"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Tower Chowk"], dropPoints: ["Muzaffarpur Station"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "darbhanga", toName: "Darbhanga",
    distanceKm: 370, durationHrs: "8.5", nh: "NH-27", via: ["Patna"],
    fares: { hatchback: 5899, sedan: 7079, suv: 9699, crysta: 12499, tempo: 15999 },
    tolls: 450, pitStops: ["Patna"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Tower Chowk"], dropPoints: ["Darbhanga City"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "sasaram", toName: "Sasaram",
    distanceKm: 310, durationHrs: "7", nh: "NH-19", via: ["Gaya"],
    fares: { hatchback: 4899, sedan: 5879, suv: 7999, crysta: 10299, tempo: 13299 },
    tolls: 400, pitStops: ["Gaya"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Tower Chowk"], dropPoints: ["Sasaram Town"]
  },
  {
    from: "deoghar", fromName: "Deoghar", to: "aurangabad", toName: "Aurangabad",
    distanceKm: 260, durationHrs: "6", nh: "NH-19", via: ["Gaya"],
    fares: { hatchback: 4299, sedan: 5159, suv: 6999, crysta: 8999, tempo: 11499 },
    tolls: 350, pitStops: ["Gaya"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Tower Chowk"], dropPoints: ["Aurangabad Town"]
  },

  // ========== FROM HAZARIBAGH ==========
  {
    from: "hazaribagh", fromName: "Hazaribagh",
    to: "ranchi", toName: "Ranchi",
    distanceKm: 100, durationHrs: "2.5-3", nh: "NH-33",
    via: ["Ramgarh"],
    fares: { hatchback: 2199, sedan: 2799, suv: 3799, crysta: 4899, tempo: 6199 },
    tolls: 100, pitStops: [],
    bestTime: "Any time", roadCondition: "Good NH-33",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Court Area", "Hazaribagh Lake"],
    dropPoints: ["Ranchi Station", "Doranda", "Airport"]
  },
  {
    from: "hazaribagh", fromName: "Hazaribagh",
    to: "jamshedpur", toName: "Jamshedpur",
    distanceKm: 180, durationHrs: "4-5", nh: "NH-33",
    via: ["Ramgarh", "Chandil"],
    fares: { hatchback: 3099, sedan: 3699, suv: 4999, crysta: 6499, tempo: 8299 },
    tolls: 200, pitStops: [],
    bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Court Area"],
    dropPoints: ["Mango", "Bistupur", "Tatanagar Station"]
  },
  {
    from: "hazaribagh", fromName: "Hazaribagh",
    to: "dhanbad", toName: "Dhanbad",
    distanceKm: 120, durationHrs: "3-3.5", nh: "NH-33",
    via: ["Ramgarh", "Bokaro"],
    fares: { hatchback: 2399, sedan: 2899, suv: 3899, crysta: 4999, tempo: 6499 },
    tolls: 100, pitStops: [],
    bestTime: "Any time", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Court Area"],
    dropPoints: ["Dhanbad Station", "Bank More"]
  },
  {
    from: "hazaribagh", fromName: "Hazaribagh",
    to: "bokaro", toName: "Bokaro",
    distanceKm: 75, durationHrs: "2-2.5", nh: "NH-33",
    via: ["Ramgarh"],
    fares: { hatchback: 1899, sedan: 2279, suv: 3099, crysta: 3999, tempo: 4999 },
    tolls: 100, pitStops: [],
    bestTime: "Any time", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Court Area"],
    dropPoints: ["Sector 4", "Chas"]
  },
  {
    from: "hazaribagh", fromName: "Hazaribagh",
    to: "kolkata", toName: "Kolkata",
    distanceKm: 360, durationHrs: "7-8", nh: "NH-33/NH-19",
    via: ["Bokaro", "Dhanbad", "Asansol"],
    fares: { hatchback: 5599, sedan: 6719, suv: 9099, crysta: 11699, tempo: 14999 },
    tolls: 450, pitStops: ["Dhanbad"],
    bestTime: "Early morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"],
    pickupPoints: ["Court Area"],
    dropPoints: ["Howrah", "Sealdah", "Airport"]
  },
  {
    from: "hazaribagh", fromName: "Hazaribagh",
    to: "deoghar", toName: "Deoghar",
    distanceKm: 200, durationHrs: "4.5-5.5", nh: "SH",
    via: ["Bokaro", "Giridih"],
    fares: { hatchback: 3399, sedan: 4099, suv: 5499, crysta: 7099, tempo: 8999 },
    tolls: 200, pitStops: [],
    bestTime: "Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Court Area"],
    dropPoints: ["Baidyanath Dham", "Jasidih"]
  },
  {
    from: "hazaribagh", fromName: "Hazaribagh",
    to: "giridih", toName: "Giridih",
    distanceKm: 90, durationHrs: "2.5-3", nh: "SH",
    via: ["Koderma direction"],
    fares: { hatchback: 2099, sedan: 2519, suv: 3399, crysta: 4399, tempo: 5599 },
    tolls: 50, pitStops: [],
    bestTime: "Any time", roadCondition: "State highway",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Court Area"],
    dropPoints: ["Giridih Station"]
  },
  {
    from: "hazaribagh", fromName: "Hazaribagh",
    to: "patna", toName: "Patna",
    distanceKm: 270, durationHrs: "5.5-6.5", nh: "NH-2",
    via: ["Koderma", "Gaya"],
    fares: { hatchback: 4299, sedan: 5159, suv: 6999, crysta: 8999, tempo: 11499 },
    tolls: 300, pitStops: ["Koderma"],
    bestTime: "Morning", roadCondition: "Good NH-2",
    statesCrossed: ["Jharkhand", "Bihar"],
    pickupPoints: ["Court Area"],
    dropPoints: ["Patna Junction", "Airport"]
  },
  {
    from: "hazaribagh", fromName: "Hazaribagh",
    to: "ramgarh", toName: "Ramgarh",
    distanceKm: 45, durationHrs: "1-1.5", nh: "NH-33",
    via: ["Direct"],
    fares: { hatchback: 1599, sedan: 1919, suv: 2599, crysta: 3399, tempo: 4299 },
    tolls: 50, pitStops: [],
    bestTime: "Any time", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Court Area"],
    dropPoints: ["Ramgarh Cantt"]
  },
  {
    from: "hazaribagh", fromName: "Hazaribagh",
    to: "netarhat", toName: "Netarhat",
    distanceKm: 170, durationHrs: "4.5-5", nh: "SH",
    via: ["Latehar"],
    fares: { hatchback: 2999, sedan: 3599, suv: 4899, crysta: 6299, tempo: 7999 },
    tolls: 100, pitStops: [],
    bestTime: "Morning", roadCondition: "Hill roads",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Court Area"],
    dropPoints: ["Netarhat Hill Station"]
  },

  // ========== FROM GIRIDIH ==========
  {
    from: "giridih", fromName: "Giridih",
    to: "jamshedpur", toName: "Jamshedpur",
    distanceKm: 170, durationHrs: "4-5", nh: "SH",
    via: ["Dhanbad"],
    fares: { hatchback: 2999, sedan: 3599, suv: 4899, crysta: 6299, tempo: 7999 },
    tolls: 150, pitStops: ["Dhanbad"],
    bestTime: "Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Gandhi Chowk", "Station Road"],
    dropPoints: ["Mango", "Bistupur", "Tatanagar Station"]
  },
  {
    from: "giridih", fromName: "Giridih",
    to: "ranchi", toName: "Ranchi",
    distanceKm: 170, durationHrs: "4-5", nh: "SH/NH-33",
    via: ["Bokaro", "Ramgarh"],
    fares: { hatchback: 2999, sedan: 3599, suv: 4899, crysta: 6299, tempo: 7999 },
    tolls: 150, pitStops: ["Bokaro"],
    bestTime: "Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Gandhi Chowk"],
    dropPoints: ["Ranchi Station", "Doranda"]
  },
  {
    from: "giridih", fromName: "Giridih",
    to: "dhanbad", toName: "Dhanbad",
    distanceKm: 100, durationHrs: "2.5-3", nh: "SH",
    via: ["Parasnath"],
    fares: { hatchback: 2199, sedan: 2799, suv: 3799, crysta: 4899, tempo: 6199 },
    tolls: 100, pitStops: [],
    bestTime: "Any time", roadCondition: "Decent",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Gandhi Chowk"],
    dropPoints: ["Dhanbad Station", "Bank More"]
  },
  {
    from: "giridih", fromName: "Giridih",
    to: "deoghar", toName: "Deoghar",
    distanceKm: 80, durationHrs: "2-2.5", nh: "SH",
    via: ["Direct"],
    fares: { hatchback: 1999, sedan: 2399, suv: 3299, crysta: 4299, tempo: 5399 },
    tolls: 50, pitStops: [],
    bestTime: "Any time", roadCondition: "State highway",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Gandhi Chowk"],
    dropPoints: ["Baidyanath Dham", "Tower Chowk"]
  },
  {
    from: "giridih", fromName: "Giridih",
    to: "bokaro", toName: "Bokaro",
    distanceKm: 110, durationHrs: "2.5-3", nh: "SH",
    via: ["Petarbar"],
    fares: { hatchback: 2299, sedan: 2759, suv: 3699, crysta: 4799, tempo: 5999 },
    tolls: 100, pitStops: [],
    bestTime: "Any time", roadCondition: "State highway",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Gandhi Chowk"],
    dropPoints: ["Sector 4", "Chas"]
  },
  {
    from: "giridih", fromName: "Giridih",
    to: "kolkata", toName: "Kolkata",
    distanceKm: 330, durationHrs: "6-7", nh: "SH/NH-19",
    via: ["Dhanbad", "Asansol"],
    fares: { hatchback: 5299, sedan: 6359, suv: 8699, crysta: 10999, tempo: 13999 },
    tolls: 400, pitStops: ["Dhanbad"],
    bestTime: "Morning", roadCondition: "Good via Dhanbad",
    statesCrossed: ["Jharkhand", "West Bengal"],
    pickupPoints: ["Gandhi Chowk"],
    dropPoints: ["Howrah", "Sealdah", "Airport"]
  },
  {
    from: "giridih", fromName: "Giridih",
    to: "hazaribagh", toName: "Hazaribagh",
    distanceKm: 90, durationHrs: "2.5-3", nh: "SH",
    via: ["Direct"],
    fares: { hatchback: 2099, sedan: 2519, suv: 3399, crysta: 4399, tempo: 5599 },
    tolls: 50, pitStops: [],
    bestTime: "Any time", roadCondition: "State highway",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Gandhi Chowk"],
    dropPoints: ["Hazaribagh Lake", "Court Area"]
  },
  {
    from: "giridih", fromName: "Giridih",
    to: "patna", toName: "Patna",
    distanceKm: 290, durationHrs: "6-7", nh: "SH/NH-2",
    via: ["Koderma", "Gaya"],
    fares: { hatchback: 4499, sedan: 5399, suv: 7399, crysta: 9499, tempo: 11999 },
    tolls: 300, pitStops: ["Koderma"],
    bestTime: "Morning", roadCondition: "Mixed then good NH",
    statesCrossed: ["Jharkhand", "Bihar"],
    pickupPoints: ["Gandhi Chowk"],
    dropPoints: ["Patna Junction", "Airport"]
  },
  {
    from: "giridih", fromName: "Giridih",
    to: "parasnath", toName: "Parasnath",
    distanceKm: 70, durationHrs: "1.5-2", nh: "SH",
    via: ["Direct"],
    fares: { hatchback: 1849, sedan: 2219, suv: 2999, crysta: 3899, tempo: 4899 },
    tolls: 50, pitStops: [],
    bestTime: "Early morning for trek", roadCondition: "State highway",
    statesCrossed: ["Jharkhand"],
    pickupPoints: ["Gandhi Chowk"],
    dropPoints: ["Parasnath Hill Base", "Madhuban"]
  },
  {
    from: "giridih", fromName: "Giridih",
    to: "asansol", toName: "Asansol",
    distanceKm: 200, durationHrs: "4-5", nh: "SH/NH-19",
    via: ["Dhanbad"],
    fares: { hatchback: 3399, sedan: 4099, suv: 5499, crysta: 7099, tempo: 8999 },
    tolls: 200, pitStops: ["Dhanbad"],
    bestTime: "Morning", roadCondition: "Good via Dhanbad",
    statesCrossed: ["Jharkhand", "West Bengal"],
    pickupPoints: ["Gandhi Chowk"],
    dropPoints: ["Asansol Station"]
  },

  // ========== FROM DUMKA ==========
  {
    from: "dumka", fromName: "Dumka", to: "jamshedpur", toName: "Jamshedpur",
    distanceKm: 130, durationHrs: "3.5-4", nh: "SH", via: ["Ghatsila"],
    fares: { hatchback: 2499, sedan: 2999, suv: 4099, crysta: 5299, tempo: 6799 },
    tolls: 100, pitStops: [], bestTime: "Morning", roadCondition: "State highway",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Dumka Town"], dropPoints: ["Mango", "Bistupur"]
  },
  {
    from: "dumka", fromName: "Dumka", to: "deoghar", toName: "Deoghar",
    distanceKm: 60, durationHrs: "1.5-2", nh: "SH", via: ["Direct"],
    fares: { hatchback: 1799, sedan: 2199, suv: 2999, crysta: 3899, tempo: 4999 },
    tolls: 50, pitStops: [], bestTime: "Any time", roadCondition: "State highway",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Dumka Town"], dropPoints: ["Baidyanath Dham"]
  },
  {
    from: "dumka", fromName: "Dumka", to: "ranchi", toName: "Ranchi",
    distanceKm: 280, durationHrs: "6-7", nh: "SH/NH-33", via: ["Bokaro"],
    fares: { hatchback: 4499, sedan: 5399, suv: 7399, crysta: 9499, tempo: 11999 },
    tolls: 250, pitStops: ["Bokaro"], bestTime: "Early Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Dumka Town"], dropPoints: ["Ranchi Station"]
  },
  {
    from: "dumka", fromName: "Dumka", to: "kolkata", toName: "Kolkata",
    distanceKm: 290, durationHrs: "6-7", nh: "NH-19", via: ["Asansol"],
    fares: { hatchback: 4499, sedan: 5399, suv: 7399, crysta: 9499, tempo: 11999 },
    tolls: 300, pitStops: ["Asansol"], bestTime: "Morning", roadCondition: "Good NH via WB",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Dumka Town"], dropPoints: ["Howrah"]
  },
  {
    from: "dumka", fromName: "Dumka", to: "patna", toName: "Patna",
    distanceKm: 270, durationHrs: "6-7", nh: "SH", via: ["Bhagalpur"],
    fares: { hatchback: 4299, sedan: 5159, suv: 6999, crysta: 8999, tempo: 11499 },
    tolls: 200, pitStops: [], bestTime: "Morning", roadCondition: "Mixed",
    statesCrossed: ["Jharkhand", "Bihar"], pickupPoints: ["Dumka Town"], dropPoints: ["Patna Junction"]
  },

  // ========== FROM CHAIBASA ==========
  {
    from: "chaibasa", fromName: "Chaibasa", to: "jamshedpur", toName: "Jamshedpur",
    distanceKm: 60, durationHrs: "1.5-2", nh: "NH-75", via: ["Direct"],
    fares: { hatchback: 1799, sedan: 2199, suv: 2999, crysta: 3899, tempo: 4999 },
    tolls: 50, pitStops: [], bestTime: "Any time", roadCondition: "Good Road",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Chaibasa Town"], dropPoints: ["Mango", "Bistupur"]
  },
  {
    from: "chaibasa", fromName: "Chaibasa", to: "ranchi", toName: "Ranchi",
    distanceKm: 170, durationHrs: "4-5", nh: "NH-20", via: ["Khunti"],
    fares: { hatchback: 2999, sedan: 3599, suv: 4899, crysta: 6299, tempo: 7999 },
    tolls: 150, pitStops: [], bestTime: "Morning", roadCondition: "Good road",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Chaibasa Town"], dropPoints: ["Ranchi Station"]
  },
  {
    from: "chaibasa", fromName: "Chaibasa", to: "kolkata", toName: "Kolkata",
    distanceKm: 310, durationHrs: "6-7", nh: "NH-49", via: ["Jamshedpur", "Kharagpur"],
    fares: { hatchback: 4849, sedan: 5819, suv: 7899, crysta: 9999, tempo: 12999 },
    tolls: 400, pitStops: ["Jamshedpur"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Chaibasa Town"], dropPoints: ["Howrah"]
  },
  {
    from: "chaibasa", fromName: "Chaibasa", to: "bhubaneswar", toName: "Bhubaneswar",
    distanceKm: 380, durationHrs: "7-8", nh: "NH-49/NH-20", via: ["Keonjhar"],
    fares: { hatchback: 5899, sedan: 7079, suv: 9699, crysta: 12499, tempo: 15999 },
    tolls: 500, pitStops: ["Keonjhar"], bestTime: "Early Morning", roadCondition: "Mixed NH",
    statesCrossed: ["Jharkhand", "Odisha"], pickupPoints: ["Chaibasa Town"], dropPoints: ["Bhubaneswar"]
  },

  // ========== FROM ADITYAPUR ==========
  {
    from: "adityapur", fromName: "Adityapur", to: "kolkata", toName: "Kolkata",
    distanceKm: 265, durationHrs: "5-6", nh: "NH-49", via: ["Jamshedpur", "Kharagpur"],
    fares: { hatchback: 3999, sedan: 4799, suv: 6499, crysta: 8499, tempo: 9999 },
    tolls: 400, pitStops: ["Kolaghat"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand", "West Bengal"], pickupPoints: ["Gamharia", "Phase 1"], dropPoints: ["Howrah"]
  },
  {
    from: "adityapur", fromName: "Adityapur", to: "ranchi", toName: "Ranchi",
    distanceKm: 120, durationHrs: "3-4", nh: "NH-33", via: ["Chandil"],
    fares: { hatchback: 2299, sedan: 2759, suv: 3699, crysta: 4799, tempo: 5999 },
    tolls: 150, pitStops: [], bestTime: "Any time", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Gamharia", "Phase 1"], dropPoints: ["Ranchi Station"]
  },
  {
    from: "adityapur", fromName: "Adityapur", to: "dhanbad", toName: "Dhanbad",
    distanceKm: 90, durationHrs: "2.5-3", nh: "NH-32", via: ["Chandrapura"],
    fares: { hatchback: 2099, sedan: 2519, suv: 3399, crysta: 4399, tempo: 5499 },
    tolls: 100, pitStops: [], bestTime: "Any time", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Gamharia", "Phase 1"], dropPoints: ["Dhanbad Station"]
  },

  // ========== FROM RAMGARH ==========
  {
    from: "ramgarh", fromName: "Ramgarh", to: "bokaro", toName: "Bokaro",
    distanceKm: 75, durationHrs: "2-2.5", nh: "NH-33", via: ["Petarbar"],
    fares: { hatchback: 1499, sedan: 1799, suv: 2399, crysta: 3099, tempo: 3999 },
    tolls: 100, pitStops: [], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Ramgarh Cantt"], dropPoints: ["Sector 4", "Chas"]
  },

  // ========== FROM KODERMA ==========
  {
    from: "koderma", fromName: "Koderma", to: "hazaribagh", toName: "Hazaribagh",
    distanceKm: 85, durationHrs: "2-2.5", nh: "NH-20", via: ["Barhi"],
    fares: { hatchback: 1699, sedan: 2039, suv: 2699, crysta: 3499, tempo: 4499 },
    tolls: 100, pitStops: [], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Koderma Town", "Jhumri Tilaiya"], dropPoints: ["Hazaribagh Lake"]
  },

  // ========== FROM PHUSRO ==========
  {
    from: "phusro", fromName: "Phusro", to: "dhanbad", toName: "Dhanbad",
    distanceKm: 35, durationHrs: "1-1.5", nh: "SH", via: ["Katras"],
    fares: { hatchback: 999, sedan: 1199, suv: 1599, crysta: 2099, tempo: 2699 },
    tolls: 50, pitStops: [], bestTime: "Any time", roadCondition: "State highway",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Phusro Town"], dropPoints: ["Dhanbad Station"]
  },

  // ========== FROM DALTONGANJ ==========
  {
    from: "daltonganj", fromName: "Daltonganj", to: "ranchi", toName: "Ranchi",
    distanceKm: 160, durationHrs: "4-5", nh: "NH-75", via: ["Latehar"],
    fares: { hatchback: 2899, sedan: 3499, suv: 4699, crysta: 5999, tempo: 7699 },
    tolls: 150, pitStops: [], bestTime: "Morning", roadCondition: "State highway",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Daltonganj Town"], dropPoints: ["Ranchi Station"]
  },

  // ========== FROM PAKUR ==========
  {
    from: "pakur", fromName: "Pakur", to: "deoghar", toName: "Deoghar",
    distanceKm: 120, durationHrs: "3.5-4.5", nh: "SH", via: ["Dumka"],
    fares: { hatchback: 2399, sedan: 2879, suv: 3899, crysta: 4999, tempo: 6499 },
    tolls: 100, pitStops: [], bestTime: "Morning", roadCondition: "State highway",
    statesCrossed: ["Jharkhand"], pickupPoints: ["Pakur Town"], dropPoints: ["Baidyanath Dham"]
  },

  // ========== FROM ASANSOL ==========
  // ASANSOL TO JHARKHAND
  {
    from: "asansol", fromName: "Asansol", to: "ranchi", toName: "Ranchi",
    distanceKm: 220, durationHrs: "5.5", nh: "NH-19/NH-33", via: ["Dhanbad", "Bokaro"],
    fares: { hatchback: 3799, sedan: 4599, suv: 6199, crysta: 7999, tempo: 9999 },
    tolls: 300, pitStops: ["Dhanbad"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Jharkhand"], pickupPoints: ["Asansol Station"], dropPoints: ["Ranchi Station", "Airport"]
  },
  {
    from: "asansol", fromName: "Asansol", to: "dhanbad", toName: "Dhanbad",
    distanceKm: 60, durationHrs: "1.5", nh: "NH-19", via: ["Direct"],
    fares: { hatchback: 1499, sedan: 1799, suv: 2399, crysta: 3099, tempo: 3999 },
    tolls: 100, pitStops: [], bestTime: "Any time", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Jharkhand"], pickupPoints: ["Asansol Station"], dropPoints: ["Dhanbad Station"]
  },
  {
    from: "asansol", fromName: "Asansol", to: "bokaro", toName: "Bokaro",
    distanceKm: 130, durationHrs: "3.5", nh: "NH-19", via: ["Dhanbad"],
    fares: { hatchback: 2499, sedan: 2999, suv: 4099, crysta: 5299, tempo: 6799 },
    tolls: 150, pitStops: ["Dhanbad"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Jharkhand"], pickupPoints: ["Asansol Station"], dropPoints: ["Sector 4", "Chas"]
  },
  {
    from: "asansol", fromName: "Asansol", to: "jamshedpur", toName: "Jamshedpur",
    distanceKm: 180, durationHrs: "4.5", nh: "SH", via: ["Purulia"],
    fares: { hatchback: 2999, sedan: 3599, suv: 4899, crysta: 6299, tempo: 7999 },
    tolls: 200, pitStops: ["Purulia"], bestTime: "Morning", roadCondition: "Mixed",
    statesCrossed: ["West Bengal", "Jharkhand"], pickupPoints: ["Asansol Station"], dropPoints: ["Tatanagar Station"]
  },
  {
    from: "asansol", fromName: "Asansol", to: "deoghar", toName: "Deoghar",
    distanceKm: 200, durationHrs: "4-5", nh: "NH-19/NH-114A", via: ["Dhanbad"],
    fares: { hatchback: 3399, sedan: 4099, suv: 5499, crysta: 7099, tempo: 8999 },
    tolls: 200, pitStops: ["Dhanbad"], bestTime: "Morning", roadCondition: "Mixed",
    statesCrossed: ["West Bengal", "Jharkhand"], pickupPoints: ["Asansol Station"], dropPoints: ["Tower Chowk"]
  },
  {
    from: "asansol", fromName: "Asansol", to: "dumka", toName: "Dumka",
    distanceKm: 150, durationHrs: "3.5", nh: "SH", via: ["Jamtara"],
    fares: { hatchback: 2699, sedan: 3239, suv: 4399, crysta: 5699, tempo: 7199 },
    tolls: 150, pitStops: [], bestTime: "Morning", roadCondition: "State Highway",
    statesCrossed: ["West Bengal", "Jharkhand"], pickupPoints: ["Asansol Station"], dropPoints: ["Dumka Town"]
  },
  {
    from: "asansol", fromName: "Asansol", to: "giridih", toName: "Giridih",
    distanceKm: 140, durationHrs: "3.5", nh: "SH", via: ["Dhanbad", "Tundi"],
    fares: { hatchback: 2599, sedan: 3119, suv: 4199, crysta: 5399, tempo: 6999 },
    tolls: 150, pitStops: ["Dhanbad"], bestTime: "Morning", roadCondition: "Mixed",
    statesCrossed: ["West Bengal", "Jharkhand"], pickupPoints: ["Asansol Station"], dropPoints: ["Giridih Station"]
  },
  {
    from: "asansol", fromName: "Asansol", to: "hazaribagh", toName: "Hazaribagh",
    distanceKm: 190, durationHrs: "4.5", nh: "NH-19", via: ["Dhanbad"],
    fares: { hatchback: 3199, sedan: 3839, suv: 5199, crysta: 6699, tempo: 8499 },
    tolls: 200, pitStops: ["Dhanbad"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Jharkhand"], pickupPoints: ["Asansol Station"], dropPoints: ["Hazaribagh Lake"]
  },
  {
    from: "asansol", fromName: "Asansol", to: "koderma", toName: "Koderma",
    distanceKm: 210, durationHrs: "5", nh: "NH-19", via: ["Dhanbad", "Barhi"],
    fares: { hatchback: 3499, sedan: 4199, suv: 5699, crysta: 7299, tempo: 9399 },
    tolls: 250, pitStops: ["Barhi"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Jharkhand"], pickupPoints: ["Asansol Station"], dropPoints: ["Koderma Town"]
  },
  {
    from: "asansol", fromName: "Asansol", to: "daltonganj", toName: "Daltonganj",
    distanceKm: 350, durationHrs: "8", nh: "NH-39", via: ["Hazaribagh"],
    fares: { hatchback: 5699, sedan: 6839, suv: 9299, crysta: 11999, tempo: 15399 },
    tolls: 400, pitStops: ["Hazaribagh"], bestTime: "Early Morning", roadCondition: "Mixed",
    statesCrossed: ["West Bengal", "Jharkhand"], pickupPoints: ["Asansol Station"], dropPoints: ["Daltonganj Town"]
  },
  {
    from: "asansol", fromName: "Asansol", to: "chaibasa", toName: "Chaibasa",
    distanceKm: 240, durationHrs: "6", nh: "NH-32", via: ["Jamshedpur"],
    fares: { hatchback: 4199, sedan: 5039, suv: 6799, crysta: 8799, tempo: 11299 },
    tolls: 300, pitStops: ["Jamshedpur"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Jharkhand"], pickupPoints: ["Asansol Station"], dropPoints: ["Chaibasa Town"]
  },

  // ASANSOL TO REST OF WEST BENGAL
  {
    from: "asansol", fromName: "Asansol", to: "kolkata", toName: "Kolkata",
    distanceKm: 210, durationHrs: "4.5", nh: "NH-19", via: ["Bardhaman"],
    fares: { hatchback: 3499, sedan: 4199, suv: 5699, crysta: 7299, tempo: 9399 },
    tolls: 250, pitStops: ["Bardhaman"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal"], pickupPoints: ["Asansol Station"], dropPoints: ["Howrah", "Airport"]
  },
  {
    from: "asansol", fromName: "Asansol", to: "durgapur", toName: "Durgapur",
    distanceKm: 45, durationHrs: "1", nh: "NH-19", via: ["Direct"],
    fares: { hatchback: 1099, sedan: 1299, suv: 1799, crysta: 2299, tempo: 2999 },
    tolls: 50, pitStops: [], bestTime: "Any time", roadCondition: "Good NH",
    statesCrossed: ["West Bengal"], pickupPoints: ["Asansol Station"], dropPoints: ["Durgapur City Centre"]
  },
  {
    from: "asansol", fromName: "Asansol", to: "siliguri", toName: "Siliguri",
    distanceKm: 450, durationHrs: "10", nh: "NH-12", via: ["Malda"],
    fares: { hatchback: 7199, sedan: 8639, suv: 11799, crysta: 15199, tempo: 19699 },
    tolls: 500, pitStops: ["Malda"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal"], pickupPoints: ["Asansol Station"], dropPoints: ["Siliguri Junction"]
  },
  {
    from: "asansol", fromName: "Asansol", to: "darjeeling", toName: "Darjeeling",
    distanceKm: 520, durationHrs: "12", nh: "NH-27", via: ["Siliguri"],
    fares: { hatchback: 8399, sedan: 10079, suv: 13699, crysta: 17699, tempo: 22699 },
    tolls: 600, pitStops: ["Siliguri"], bestTime: "Very Early Morning", roadCondition: "Mixed with Hills",
    statesCrossed: ["West Bengal"], pickupPoints: ["Asansol Station"], dropPoints: ["Darjeeling Mall"]
  },
  {
    from: "asansol", fromName: "Asansol", to: "kharagpur", toName: "Kharagpur",
    distanceKm: 210, durationHrs: "4.5", nh: "NH-14", via: ["Bankura"],
    fares: { hatchback: 3399, sedan: 4079, suv: 5599, crysta: 7199, tempo: 9299 },
    tolls: 250, pitStops: ["Bankura"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal"], pickupPoints: ["Asansol Station"], dropPoints: ["IIT Kharagpur Station"]
  },
  {
    from: "asansol", fromName: "Asansol", to: "haldia", toName: "Haldia",
    distanceKm: 310, durationHrs: "7", nh: "NH-116", via: ["Kharagpur"],
    fares: { hatchback: 5199, sedan: 6239, suv: 8499, crysta: 10899, tempo: 13999 },
    tolls: 400, pitStops: ["Kharagpur"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal"], pickupPoints: ["Asansol Station"], dropPoints: ["Haldia Port"]
  },
  {
    from: "asansol", fromName: "Asansol", to: "purulia", toName: "Purulia",
    distanceKm: 75, durationHrs: "2", nh: "SH", via: ["Direct"],
    fares: { hatchback: 1499, sedan: 1799, suv: 2399, crysta: 3099, tempo: 3999 },
    tolls: 100, pitStops: [], bestTime: "Any time", roadCondition: "State Highway",
    statesCrossed: ["West Bengal"], pickupPoints: ["Asansol Station"], dropPoints: ["Purulia Town"]
  },
  {
    from: "asansol", fromName: "Asansol", to: "bankura", toName: "Bankura",
    distanceKm: 110, durationHrs: "2.5", nh: "NH-14", via: ["Raniganj"],
    fares: { hatchback: 2199, sedan: 2639, suv: 3599, crysta: 4699, tempo: 5999 },
    tolls: 150, pitStops: [], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal"], pickupPoints: ["Asansol Station"], dropPoints: ["Bankura Town"]
  },
  {
    from: "asansol", fromName: "Asansol", to: "bardhaman", toName: "Bardhaman",
    distanceKm: 100, durationHrs: "2", nh: "NH-19", via: ["Durgapur"],
    fares: { hatchback: 1999, sedan: 2399, suv: 3299, crysta: 4299, tempo: 5499 },
    tolls: 150, pitStops: ["Durgapur"], bestTime: "Any time", roadCondition: "Good NH",
    statesCrossed: ["West Bengal"], pickupPoints: ["Asansol Station"], dropPoints: ["Bardhaman Station"]
  },
  {
    from: "asansol", fromName: "Asansol", to: "malda", toName: "Malda",
    distanceKm: 270, durationHrs: "6.5", nh: "NH-12", via: ["Suri", "Farakka"],
    fares: { hatchback: 4499, sedan: 5399, suv: 7399, crysta: 9499, tempo: 11999 },
    tolls: 350, pitStops: ["Farakka"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal"], pickupPoints: ["Asansol Station"], dropPoints: ["Malda Town"]
  },
  {
    from: "asansol", fromName: "Asansol", to: "murshidabad", toName: "Murshidabad",
    distanceKm: 200, durationHrs: "5", nh: "NH-12", via: ["Suri"],
    fares: { hatchback: 3399, sedan: 4099, suv: 5499, crysta: 7099, tempo: 8999 },
    tolls: 250, pitStops: ["Suri"], bestTime: "Morning", roadCondition: "Mixed",
    statesCrossed: ["West Bengal"], pickupPoints: ["Asansol Station"], dropPoints: ["Hazarduari Palace"]
  },
  {
    from: "asansol", fromName: "Asansol", to: "digha", toName: "Digha",
    distanceKm: 360, durationHrs: "8", nh: "NH-116B", via: ["Kharagpur"],
    fares: { hatchback: 5899, sedan: 7079, suv: 9699, crysta: 12499, tempo: 15999 },
    tolls: 450, pitStops: ["Kharagpur"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal"], pickupPoints: ["Asansol Station"], dropPoints: ["New Digha Sea Beach"]
  },
  {
    from: "asansol", fromName: "Asansol", to: "mandarmani", toName: "Mandarmani",
    distanceKm: 340, durationHrs: "7.5", nh: "NH-116B", via: ["Kharagpur"],
    fares: { hatchback: 5499, sedan: 6599, suv: 8999, crysta: 11499, tempo: 14999 },
    tolls: 400, pitStops: ["Kharagpur"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal"], pickupPoints: ["Asansol Station"], dropPoints: ["Mandarmani Beach Resort"]
  },

  // ASANSOL TO ODISHA
  {
    from: "asansol", fromName: "Asansol", to: "bhubaneswar", toName: "Bhubaneswar",
    distanceKm: 520, durationHrs: "11", nh: "NH-16", via: ["Kharagpur", "Balasore"],
    fares: { hatchback: 8399, sedan: 10079, suv: 13699, crysta: 17699, tempo: 22699 },
    tolls: 650, pitStops: ["Kharagpur"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Odisha"], pickupPoints: ["Asansol Station"], dropPoints: ["Bhubaneswar"]
  },
  {
    from: "asansol", fromName: "Asansol", to: "puri", toName: "Puri",
    distanceKm: 580, durationHrs: "12.5", nh: "NH-16", via: ["Bhubaneswar"],
    fares: { hatchback: 9299, sedan: 11159, suv: 15199, crysta: 19599, tempo: 25499 },
    tolls: 750, pitStops: ["Kharagpur", "Bhubaneswar"], bestTime: "Very Early Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Odisha"], pickupPoints: ["Asansol Station"], dropPoints: ["Puri"]
  },
  {
    from: "asansol", fromName: "Asansol", to: "rourkela", toName: "Rourkela",
    distanceKm: 350, durationHrs: "8", nh: "NH-143", via: ["Purulia", "Ranchi"],
    fares: { hatchback: 5699, sedan: 6839, suv: 9299, crysta: 11999, tempo: 15399 },
    tolls: 450, pitStops: ["Ranchi"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Jharkhand", "Odisha"], pickupPoints: ["Asansol Station"], dropPoints: ["Rourkela Station", "Steel Plant"]
  },
  {
    from: "asansol", fromName: "Asansol", to: "baripada", toName: "Baripada",
    distanceKm: 320, durationHrs: "7", nh: "NH-18", via: ["Kharagpur"],
    fares: { hatchback: 5199, sedan: 6239, suv: 8499, crysta: 10899, tempo: 13999 },
    tolls: 400, pitStops: ["Kharagpur"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Odisha"], pickupPoints: ["Asansol Station"], dropPoints: ["Baripada Town"]
  },
  {
    from: "asansol", fromName: "Asansol", to: "balasore", toName: "Balasore",
    distanceKm: 360, durationHrs: "8", nh: "NH-16", via: ["Kharagpur"],
    fares: { hatchback: 5899, sedan: 7079, suv: 9699, crysta: 12499, tempo: 15999 },
    tolls: 450, pitStops: ["Kharagpur"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Odisha"], pickupPoints: ["Asansol Station"], dropPoints: ["Balasore Station"]
  },
  {
    from: "asansol", fromName: "Asansol", to: "cuttack", toName: "Cuttack",
    distanceKm: 490, durationHrs: "10.5", nh: "NH-16", via: ["Kharagpur", "Balasore"],
    fares: { hatchback: 7899, sedan: 9479, suv: 12899, crysta: 16599, tempo: 21399 },
    tolls: 600, pitStops: ["Balasore"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Odisha"], pickupPoints: ["Asansol Station"], dropPoints: ["Cuttack Chandi"]
  },

  // ASANSOL TO BIHAR
  {
    from: "asansol", fromName: "Asansol", to: "patna", toName: "Patna",
    distanceKm: 380, durationHrs: "8.5", nh: "NH-19/NH-22", via: ["Dhanbad", "Gaya"],
    fares: { hatchback: 5999, sedan: 7199, suv: 9799, crysta: 12599, tempo: 16299 },
    tolls: 500, pitStops: ["Dhanbad", "Gaya"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Jharkhand", "Bihar"], pickupPoints: ["Asansol Station"], dropPoints: ["Patna Junction", "Airport"]
  },
  {
    from: "asansol", fromName: "Asansol", to: "gaya", toName: "Gaya",
    distanceKm: 280, durationHrs: "6", nh: "NH-19", via: ["Dhanbad"],
    fares: { hatchback: 4499, sedan: 5399, suv: 7399, crysta: 9499, tempo: 11999 },
    tolls: 350, pitStops: ["Dhanbad"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Jharkhand", "Bihar"], pickupPoints: ["Asansol Station"], dropPoints: ["Gaya Station"]
  },
  {
    from: "asansol", fromName: "Asansol", to: "bodh-gaya", toName: "Bodh Gaya",
    distanceKm: 295, durationHrs: "6.5", nh: "NH-19", via: ["Dhanbad"],
    fares: { hatchback: 4799, sedan: 5759, suv: 7799, crysta: 9999, tempo: 12999 },
    tolls: 350, pitStops: ["Dhanbad"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Jharkhand", "Bihar"], pickupPoints: ["Asansol Station"], dropPoints: ["Mahabodhi Temple"]
  },
  {
    from: "asansol", fromName: "Asansol", to: "bhagalpur", toName: "Bhagalpur",
    distanceKm: 240, durationHrs: "5.5", nh: "SH", via: ["Dumka"],
    fares: { hatchback: 3999, sedan: 4799, suv: 6499, crysta: 8499, tempo: 10999 },
    tolls: 300, pitStops: ["Dumka"], bestTime: "Morning", roadCondition: "Mixed",
    statesCrossed: ["West Bengal", "Jharkhand", "Bihar"], pickupPoints: ["Asansol Station"], dropPoints: ["Bhagalpur Station"]
  },
  {
    from: "asansol", fromName: "Asansol", to: "muzaffarpur", toName: "Muzaffarpur",
    distanceKm: 450, durationHrs: "10.5", nh: "NH-22", via: ["Patna"],
    fares: { hatchback: 7199, sedan: 8639, suv: 11799, crysta: 15199, tempo: 19699 },
    tolls: 600, pitStops: ["Patna"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Jharkhand", "Bihar"], pickupPoints: ["Asansol Station"], dropPoints: ["Muzaffarpur Station"]
  },
  {
    from: "asansol", fromName: "Asansol", to: "darbhanga", toName: "Darbhanga",
    distanceKm: 500, durationHrs: "11.5", nh: "NH-27", via: ["Patna"],
    fares: { hatchback: 7999, sedan: 9599, suv: 13099, crysta: 16899, tempo: 21899 },
    tolls: 650, pitStops: ["Patna"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Jharkhand", "Bihar"], pickupPoints: ["Asansol Station"], dropPoints: ["Darbhanga City"]
  },

  // ========== FROM KOLKATA ==========
  // TO JHARKHAND
  {
    from: "kolkata", fromName: "Kolkata", to: "ranchi", toName: "Ranchi",
    distanceKm: 400, durationHrs: "8", nh: "NH-16/NH-33", via: ["Kharagpur", "Jamshedpur"],
    fares: { hatchback: 6199, sedan: 7439, suv: 10199, crysta: 13099, tempo: 16999 },
    tolls: 550, pitStops: ["Kolaghat", "Jamshedpur"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Jharkhand"], pickupPoints: ["Howrah", "Sealdah", "Airport", "Salt Lake"], dropPoints: ["Ranchi Station", "Doranda"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "dhanbad", toName: "Dhanbad",
    distanceKm: 270, durationHrs: "5.5", nh: "NH-19", via: ["Bardhaman", "Asansol"],
    fares: { hatchback: 4299, sedan: 5159, suv: 6999, crysta: 8999, tempo: 11499 },
    tolls: 350, pitStops: ["Bardhaman"], bestTime: "Early Morning", roadCondition: "Good NH-19",
    statesCrossed: ["West Bengal", "Jharkhand"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Dhanbad Station", "Bank More"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "bokaro", toName: "Bokaro",
    distanceKm: 310, durationHrs: "6", nh: "NH-19", via: ["Asansol", "Dhanbad"],
    fares: { hatchback: 4899, sedan: 5879, suv: 7999, crysta: 10299, tempo: 13299 },
    tolls: 400, pitStops: ["Asansol"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Jharkhand"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Bokaro Sector 4"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "deoghar", toName: "Deoghar",
    distanceKm: 320, durationHrs: "7", nh: "NH-19/SH", via: ["Asansol", "Jamtara"],
    fares: { hatchback: 4999, sedan: 5999, suv: 8199, crysta: 10499, tempo: 13499 },
    tolls: 400, pitStops: ["Asansol"], bestTime: "Morning", roadCondition: "Mixed",
    statesCrossed: ["West Bengal", "Jharkhand"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Baidyanath Dham"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "dumka", toName: "Dumka",
    distanceKm: 290, durationHrs: "6", nh: "NH-19/SH", via: ["Asansol", "Jamtara"],
    fares: { hatchback: 4499, sedan: 5399, suv: 7399, crysta: 9499, tempo: 11999 },
    tolls: 350, pitStops: ["Asansol"], bestTime: "Morning", roadCondition: "Mixed",
    statesCrossed: ["West Bengal", "Jharkhand"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Dumka Town"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "giridih", toName: "Giridih",
    distanceKm: 310, durationHrs: "6.5", nh: "NH-19", via: ["Asansol", "Govindpur"],
    fares: { hatchback: 4899, sedan: 5879, suv: 7999, crysta: 10299, tempo: 13299 },
    tolls: 400, pitStops: ["Asansol"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Jharkhand"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Giridih Station"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "hazaribagh", toName: "Hazaribagh",
    distanceKm: 390, durationHrs: "8", nh: "NH-19", via: ["Asansol", "Dhanbad", "Barhi"],
    fares: { hatchback: 6199, sedan: 7439, suv: 10199, crysta: 13099, tempo: 16999 },
    tolls: 500, pitStops: ["Asansol", "Dhanbad"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Jharkhand"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Hazaribagh Lake"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "koderma", toName: "Koderma",
    distanceKm: 380, durationHrs: "7.5", nh: "NH-19", via: ["Asansol", "Dhanbad", "Barhi"],
    fares: { hatchback: 5999, sedan: 7199, suv: 9799, crysta: 12499, tempo: 15999 },
    tolls: 500, pitStops: ["Asansol"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Jharkhand"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Koderma Town"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "daltonganj", toName: "Daltonganj",
    distanceKm: 560, durationHrs: "11", nh: "NH-19/NH-39", via: ["Dhanbad", "Hazaribagh"],
    fares: { hatchback: 8899, sedan: 10679, suv: 14499, crysta: 18699, tempo: 23999 },
    tolls: 650, pitStops: ["Dhanbad", "Hazaribagh"], bestTime: "Very Early Morning", roadCondition: "Mixed",
    statesCrossed: ["West Bengal", "Jharkhand"], pickupPoints: ["Howrah", "Sealdah"], dropPoints: ["Daltonganj Town"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "chaibasa", toName: "Chaibasa",
    distanceKm: 320, durationHrs: "6.5", nh: "NH-16", via: ["Kharagpur", "Jamshedpur"],
    fares: { hatchback: 4999, sedan: 5999, suv: 8199, crysta: 10499, tempo: 13499 },
    tolls: 400, pitStops: ["Kharagpur"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Jharkhand"], pickupPoints: ["Howrah", "Sealdah"], dropPoints: ["Chaibasa Town"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "ghatsila", toName: "Ghatsila",
    distanceKm: 210, durationHrs: "4.5", nh: "NH-16", via: ["Kharagpur"],
    fares: { hatchback: 3399, sedan: 4099, suv: 5499, crysta: 7099, tempo: 8999 },
    tolls: 250, pitStops: ["Kharagpur"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Jharkhand"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Ghatsila Town"]
  },

  // TO REST OF WEST BENGAL
  {
    from: "kolkata", fromName: "Kolkata", to: "asansol", toName: "Asansol",
    distanceKm: 210, durationHrs: "4.5", nh: "NH-19", via: ["Bardhaman"],
    fares: { hatchback: 3399, sedan: 4099, suv: 5499, crysta: 7099, tempo: 8999 },
    tolls: 250, pitStops: ["Bardhaman"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Asansol Station"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "durgapur", toName: "Durgapur",
    distanceKm: 170, durationHrs: "3.5", nh: "NH-19", via: ["Bardhaman"],
    fares: { hatchback: 2699, sedan: 3239, suv: 4399, crysta: 5699, tempo: 7199 },
    tolls: 200, pitStops: ["Bardhaman"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Durgapur City Centre"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "siliguri", toName: "Siliguri",
    distanceKm: 580, durationHrs: "12", nh: "NH-12/NH-27", via: ["Krishnanagar", "Malda"],
    fares: { hatchback: 8999, sedan: 10799, suv: 14699, crysta: 18999, tempo: 23999 },
    tolls: 700, pitStops: ["Malda"], bestTime: "Night Journey / Very Early Morning", roadCondition: "Mixed",
    statesCrossed: ["West Bengal"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Siliguri Junction"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "darjeeling", toName: "Darjeeling",
    distanceKm: 650, durationHrs: "14", nh: "NH-12", via: ["Siliguri"],
    fares: { hatchback: 10499, sedan: 12599, suv: 17199, crysta: 22199, tempo: 28499 },
    tolls: 750, pitStops: ["Malda", "Siliguri"], bestTime: "Very Early Morning", roadCondition: "Mixed with Hill Roads",
    statesCrossed: ["West Bengal"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Darjeeling Town"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "kharagpur", toName: "Kharagpur",
    distanceKm: 120, durationHrs: "2.5", nh: "NH-16", via: ["Kolaghat"],
    fares: { hatchback: 1999, sedan: 2399, suv: 3299, crysta: 4299, tempo: 5499 },
    tolls: 150, pitStops: ["Kolaghat"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["IIT Kharagpur"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "haldia", toName: "Haldia",
    distanceKm: 120, durationHrs: "2.5", nh: "NH-116", via: ["Kolaghat"],
    fares: { hatchback: 1999, sedan: 2399, suv: 3299, crysta: 4299, tempo: 5499 },
    tolls: 150, pitStops: ["Kolaghat"], bestTime: "Any time", roadCondition: "Good NH",
    statesCrossed: ["West Bengal"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Haldia Port"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "purulia", toName: "Purulia",
    distanceKm: 290, durationHrs: "6", nh: "NH-19", via: ["Durgapur", "Bankura"],
    fares: { hatchback: 4499, sedan: 5399, suv: 7399, crysta: 9499, tempo: 11999 },
    tolls: 350, pitStops: ["Durgapur"], bestTime: "Morning", roadCondition: "Mixed",
    statesCrossed: ["West Bengal"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Purulia Town"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "bankura", toName: "Bankura",
    distanceKm: 210, durationHrs: "4.5", nh: "NH-19", via: ["Durgapur"],
    fares: { hatchback: 3399, sedan: 4099, suv: 5499, crysta: 7099, tempo: 8999 },
    tolls: 250, pitStops: ["Durgapur"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Bankura Town"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "bardhaman", toName: "Bardhaman",
    distanceKm: 100, durationHrs: "2", nh: "NH-19", via: ["Dankuni"],
    fares: { hatchback: 1699, sedan: 2039, suv: 2699, crysta: 3499, tempo: 4499 },
    tolls: 100, pitStops: [], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Bardhaman Station"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "malda", toName: "Malda",
    distanceKm: 340, durationHrs: "7-8", nh: "NH-12", via: ["Krishnanagar", "Berhampore"],
    fares: { hatchback: 5499, sedan: 6599, suv: 8999, crysta: 11499, tempo: 14999 },
    tolls: 400, pitStops: ["Krishnanagar"], bestTime: "Morning", roadCondition: "Good NH but High Traffic",
    statesCrossed: ["West Bengal"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Malda Town"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "murshidabad", toName: "Murshidabad",
    distanceKm: 230, durationHrs: "5.5", nh: "NH-12", via: ["Krishnanagar"],
    fares: { hatchback: 3799, sedan: 4599, suv: 6199, crysta: 7999, tempo: 9999 },
    tolls: 250, pitStops: ["Krishnanagar"], bestTime: "Morning", roadCondition: "Mixed Traffic",
    statesCrossed: ["West Bengal"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Hazarduari Palace"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "digha", toName: "Digha",
    distanceKm: 180, durationHrs: "4", nh: "NH-116B", via: ["Kolaghat", "Nandakumar"],
    fares: { hatchback: 2899, sedan: 3499, suv: 4699, crysta: 5999, tempo: 7699 },
    tolls: 200, pitStops: ["Kolaghat"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal"], pickupPoints: ["Howrah", "Sealdah", "Airport", "Santragachi"], dropPoints: ["New Digha Sea Beach"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "mandarmani", toName: "Mandarmani",
    distanceKm: 170, durationHrs: "3.5", nh: "NH-116B", via: ["Kolaghat", "Chanthi"],
    fares: { hatchback: 2799, sedan: 3359, suv: 4599, crysta: 5899, tempo: 7499 },
    tolls: 200, pitStops: ["Kolaghat"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal"], pickupPoints: ["Howrah", "Sealdah", "Airport", "Santragachi"], dropPoints: ["Mandarmani Beach Resort"]
  },

  // TO ODISHA
  {
    from: "kolkata", fromName: "Kolkata", to: "bhubaneswar", toName: "Bhubaneswar",
    distanceKm: 440, durationHrs: "9", nh: "NH-16", via: ["Kharagpur", "Balasore"],
    fares: { hatchback: 6999, sedan: 8399, suv: 11499, crysta: 14999, tempo: 18999 },
    tolls: 550, pitStops: ["Balasore"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Odisha"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Bhubaneswar Station"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "puri", toName: "Puri",
    distanceKm: 500, durationHrs: "10-11", nh: "NH-16", via: ["Bhubaneswar"],
    fares: { hatchback: 7899, sedan: 9479, suv: 12899, crysta: 16599, tempo: 21499 },
    tolls: 650, pitStops: ["Balasore", "Bhubaneswar"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Odisha"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Puri Jagannath Temple"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "rourkela", toName: "Rourkela",
    distanceKm: 450, durationHrs: "9-10", nh: "NH-49", via: ["Kharagpur", "Jamshedpur"],
    fares: { hatchback: 6999, sedan: 8399, suv: 11499, crysta: 14999, tempo: 18999 },
    tolls: 550, pitStops: ["Jamshedpur"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Jharkhand", "Odisha"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Rourkela Steel Plant"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "baripada", toName: "Baripada",
    distanceKm: 260, durationHrs: "5.5", nh: "NH-16/NH-18", via: ["Kharagpur"],
    fares: { hatchback: 4199, sedan: 5039, suv: 6799, crysta: 8799, tempo: 11299 },
    tolls: 300, pitStops: ["Kharagpur"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Odisha"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Baripada Town", "Simlipal"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "balasore", toName: "Balasore",
    distanceKm: 240, durationHrs: "5", nh: "NH-16", via: ["Kharagpur"],
    fares: { hatchback: 3799, sedan: 4599, suv: 6199, crysta: 7999, tempo: 9999 },
    tolls: 250, pitStops: ["Kharagpur"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Odisha"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Balasore Station"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "cuttack", toName: "Cuttack",
    distanceKm: 410, durationHrs: "8", nh: "NH-16", via: ["Balasore"],
    fares: { hatchback: 6499, sedan: 7799, suv: 10599, crysta: 13699, tempo: 17599 },
    tolls: 500, pitStops: ["Balasore"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Odisha"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Cuttack Chandi"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "keonjhar", toName: "Keonjhar",
    distanceKm: 340, durationHrs: "7", nh: "NH-49/NH-20", via: ["Kharagpur"],
    fares: { hatchback: 5399, sedan: 6479, suv: 8899, crysta: 11499, tempo: 14799 },
    tolls: 400, pitStops: ["Kharagpur"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Odisha"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Keonjhar Town"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "sambalpur", toName: "Sambalpur",
    distanceKm: 560, durationHrs: "11-12", nh: "NH-49", via: ["Kharagpur", "Keonjhar"],
    fares: { hatchback: 8899, sedan: 10679, suv: 14499, crysta: 18699, tempo: 23999 },
    tolls: 600, pitStops: ["Keonjhar"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Odisha"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Sambalpur Town"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "jharsuguda", toName: "Jharsuguda",
    distanceKm: 530, durationHrs: "11", nh: "NH-49", via: ["Kharagpur", "Keonjhar"],
    fares: { hatchback: 8399, sedan: 10079, suv: 13699, crysta: 17699, tempo: 22699 },
    tolls: 550, pitStops: ["Keonjhar"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Odisha"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Jharsuguda Airport"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "bhadrak", toName: "Bhadrak",
    distanceKm: 310, durationHrs: "6.5", nh: "NH-16", via: ["Balasore"],
    fares: { hatchback: 4899, sedan: 5879, suv: 7999, crysta: 10299, tempo: 13299 },
    tolls: 350, pitStops: ["Balasore"], bestTime: "Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Odisha"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Bhadrak Station"]
  },

  // TO BIHAR
  {
    from: "kolkata", fromName: "Kolkata", to: "patna", toName: "Patna",
    distanceKm: 580, durationHrs: "11.5", nh: "NH-19", via: ["Asansol", "Gaya"],
    fares: { hatchback: 8999, sedan: 10799, suv: 14699, crysta: 18999, tempo: 24999 },
    tolls: 650, pitStops: ["Asansol", "Gaya"], bestTime: "Night Journey or Early Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Jharkhand", "Bihar"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Patna Junction"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "gaya", toName: "Gaya",
    distanceKm: 480, durationHrs: "9.5", nh: "NH-19", via: ["Asansol", "Barhi"],
    fares: { hatchback: 7499, sedan: 8999, suv: 12299, crysta: 15899, tempo: 20599 },
    tolls: 550, pitStops: ["Asansol"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Jharkhand", "Bihar"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Gaya Station", "Vishnupad"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "bodh-gaya", toName: "Bodh Gaya",
    distanceKm: 470, durationHrs: "9", nh: "NH-19", via: ["Asansol", "Barhi"],
    fares: { hatchback: 7399, sedan: 8879, suv: 12099, crysta: 15699, tempo: 20199 },
    tolls: 550, pitStops: ["Asansol"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Jharkhand", "Bihar"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Mahabodhi Temple"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "bhagalpur", toName: "Bhagalpur",
    distanceKm: 420, durationHrs: "9", nh: "NH-12/SH", via: ["Dumka"],
    fares: { hatchback: 6599, sedan: 7919, suv: 10799, crysta: 13999, tempo: 17999 },
    tolls: 450, pitStops: ["Dumka"], bestTime: "Early Morning", roadCondition: "Mixed",
    statesCrossed: ["West Bengal", "Jharkhand", "Bihar"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Bhagalpur Station"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "muzaffarpur", toName: "Muzaffarpur",
    distanceKm: 650, durationHrs: "13", nh: "NH-22", via: ["Patna"],
    fares: { hatchback: 10499, sedan: 12599, suv: 17199, crysta: 22199, tempo: 28499 },
    tolls: 750, pitStops: ["Asansol", "Patna"], bestTime: "Night Journey", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Jharkhand", "Bihar"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Muzaffarpur Station"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "darbhanga", toName: "Darbhanga",
    distanceKm: 700, durationHrs: "14", nh: "NH-27", via: ["Patna", "Muzaffarpur"],
    fares: { hatchback: 11299, sedan: 13559, suv: 18499, crysta: 23899, tempo: 30599 },
    tolls: 850, pitStops: ["Asansol", "Patna"], bestTime: "Night Journey", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Jharkhand", "Bihar"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Darbhanga City"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "sasaram", toName: "Sasaram",
    distanceKm: 580, durationHrs: "11", nh: "NH-19", via: ["Gaya"],
    fares: { hatchback: 8999, sedan: 10799, suv: 14699, crysta: 18999, tempo: 24999 },
    tolls: 650, pitStops: ["Asansol", "Gaya"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Jharkhand", "Bihar"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Sasaram Town"]
  },
  {
    from: "kolkata", fromName: "Kolkata", to: "aurangabad", toName: "Aurangabad",
    distanceKm: 530, durationHrs: "10", nh: "NH-19", via: ["Gaya"],
    fares: { hatchback: 8399, sedan: 10079, suv: 13699, crysta: 17699, tempo: 22699 },
    tolls: 600, pitStops: ["Asansol"], bestTime: "Early Morning", roadCondition: "Good NH",
    statesCrossed: ["West Bengal", "Jharkhand", "Bihar"], pickupPoints: ["Howrah", "Sealdah", "Airport"], dropPoints: ["Aurangabad Town"]
  },

  // ========== REVERSE ROUTES (key pairs TO Jamshedpur) ==========
  {
    from: "kolkata", fromName: "Kolkata",
    to: "jamshedpur", toName: "Jamshedpur",
    distanceKm: 260, durationHrs: "5-6", nh: "NH-49",
    via: ["Uluberia", "Kharagpur", "Ghatsila"],
    fares: { hatchback: 3999, sedan: 4799, suv: 6499, crysta: 8499, tempo: 9999 },
    tolls: 400, pitStops: ["Kolaghat"],
    bestTime: "Early morning 5-7 AM",
    roadCondition: "Good NH roads",
    statesCrossed: ["West Bengal", "Jharkhand"],
    pickupPoints: ["Howrah Station", "Sealdah", "Salt Lake", "Airport", "Park Street", "Newtown"],
    dropPoints: ["Mango", "Bistupur", "Sakchi", "Tatanagar Station"]
  },
  {
    from: "patna", fromName: "Patna",
    to: "jamshedpur", toName: "Jamshedpur",
    distanceKm: 340, durationHrs: "7-8", nh: "NH-2/NH-33",
    via: ["Gaya", "Koderma", "Hazaribagh"],
    fares: { hatchback: 5499, sedan: 6599, suv: 8999, crysta: 11499, tempo: 14999 },
    tolls: 400, pitStops: ["Koderma"],
    bestTime: "Early morning",
    roadCondition: "Good NH",
    statesCrossed: ["Bihar", "Jharkhand"],
    pickupPoints: ["Patna Junction", "Airport", "Gandhi Maidan"],
    dropPoints: ["Mango", "Bistupur", "Tatanagar Station"]
  },
  {
    from: "bhubaneswar", fromName: "Bhubaneswar",
    to: "jamshedpur", toName: "Jamshedpur",
    distanceKm: 420, durationHrs: "8-9", nh: "NH-49",
    via: ["Sambalpur", "Rourkela", "Chaibasa"],
    fares: { hatchback: 6499, sedan: 7799, suv: 9999, crysta: 12999, tempo: 16999 },
    tolls: 600, pitStops: ["Rourkela"],
    bestTime: "Early morning",
    roadCondition: "Mixed NH",
    statesCrossed: ["Odisha", "Jharkhand"],
    pickupPoints: ["Bhubaneswar Station", "Airport", "Patia"],
    dropPoints: ["Mango", "Bistupur", "Tatanagar Station"]
  },
  {
    from: "puri", fromName: "Puri",
    to: "jamshedpur", toName: "Jamshedpur",
    distanceKm: 520, durationHrs: "10-11", nh: "NH-16/NH-49",
    via: ["Bhubaneswar", "Rourkela"],
    fares: { hatchback: 7999, sedan: 9599, suv: 12999, crysta: 16999, tempo: 21999 },
    tolls: 700, pitStops: ["Bhubaneswar"],
    bestTime: "Early morning",
    roadCondition: "Good NH",
    statesCrossed: ["Odisha", "Jharkhand"],
    pickupPoints: ["Puri Station", "Jagannath Temple"],
    dropPoints: ["Mango", "Bistupur", "Tatanagar Station"]
  },
];

// Merge base routes with ALL expansion routes
// Deduplicate by from-to pair (earlier routes take priority)
const existingSlugs = new Set(baseRoutes.map(r => `${r.from}-${r.to}`));
const uniqueJsrRoutes = jamshedpurExpansionRoutes.filter(
  r => !existingSlugs.has(`${r.from}-${r.to}`)
);
for (const r of uniqueJsrRoutes) existingSlugs.add(`${r.from}-${r.to}`);

const uniqueKolRoutes = kolkataExpansionRoutes.filter(
  r => !existingSlugs.has(`${r.from}-${r.to}`)
);
for (const r of uniqueKolRoutes) existingSlugs.add(`${r.from}-${r.to}`);

const uniqueCityRoutes = cityExpansionRoutes.filter(
  r => !existingSlugs.has(`${r.from}-${r.to}`)
);

export const routes: RouteData[] = [
  ...baseRoutes,
  ...uniqueJsrRoutes,
  ...uniqueKolRoutes,
  ...uniqueCityRoutes,
];

// ========== HELPER FUNCTIONS ==========

export function getRoutesByFrom(from: string): RouteData[] {
  return routes.filter(r => r.from === from);
}

export function getRoutesByTo(to: string): RouteData[] {
  return routes.filter(r => r.to === to);
}

export function getRoute(from: string, to: string): RouteData | undefined {
  return routes.find(r => r.from === from && r.to === to);
}

export function getAllRouteParams(): { slug: string }[] {
  return routes.map(r => ({
    slug: `${r.from}-to-${r.to}-cab`
  }));
}

export function parseRouteSlug(slug: string): { from: string; to: string } | null {
  const match = slug.match(/^(.+)-to-(.+)-cab$/);
  if (!match) return null;
  return { from: match[1], to: match[2] };
}
