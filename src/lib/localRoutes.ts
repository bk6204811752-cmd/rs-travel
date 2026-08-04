// ============================================================
// RS Travel — LOCAL ROUTES DATA
// All local area-to-area routes within cities
// ============================================================

export interface LocalRouteData {
  city: string;
  cityName: string;
  fromArea: string;
  toArea: string;
  slug: string;
  distanceKm: number;
  durationMin: number;
  startingFare: number;
  fares: {
    hatchback: number;
    sedan: number;
    suv: number;
  };
  fromLandmarks: string[];
  toLandmarks: string[];
}

export const localRoutes: LocalRouteData[] = [
  // ========== JAMSHEDPUR LOCAL ROUTES ==========
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Mango", toArea: "Bistupur", slug: "mango-to-bistupur",
    distanceKm: 6, durationMin: 15,
    startingFare: 199,
    fares: { hatchback: 199, sedan: 299, suv: 399 },
    fromLandmarks: ["Mango Market", "Dimna Road", "Mango Bridge", "Mango More"],
    toLandmarks: ["Bistupur Market", "Keenan Stadium", "Tata Main Hospital", "Jubilee Park"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Sakchi", toArea: "Adityapur", slug: "sakchi-to-adityapur",
    distanceKm: 8, durationMin: 20,
    startingFare: 249,
    fares: { hatchback: 249, sedan: 349, suv: 449 },
    fromLandmarks: ["Sakchi Market", "Sakchi Bus Stand", "Sakchi Gurudwara", "Sakchi Court"],
    toLandmarks: ["Adityapur Industrial Area", "Gamharia", "Adityapur Phase 1", "Kandra Road"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Jugsalai", toArea: "Telco", slug: "jugsalai-to-telco",
    distanceKm: 7, durationMin: 18,
    startingFare: 229,
    fares: { hatchback: 229, sedan: 329, suv: 429 },
    fromLandmarks: ["Jugsalai Market", "Jugsalai Station", "Jugsalai More"],
    toLandmarks: ["Telco Colony", "Tata Motors Gate", "Telco Hospital", "W Town"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Dimna", toArea: "Jamshedpur Station", slug: "dimna-to-jamshedpur-station",
    distanceKm: 10, durationMin: 25,
    startingFare: 299,
    fares: { hatchback: 299, sedan: 399, suv: 549 },
    fromLandmarks: ["Dimna Lake", "Dimna Chowk", "Dimna Road"],
    toLandmarks: ["Tatanagar Station", "Platform 1", "Station Road", "Reservation Office"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Gamharia", toArea: "Jamshedpur", slug: "gamharia-to-jamshedpur",
    distanceKm: 12, durationMin: 30,
    startingFare: 349,
    fares: { hatchback: 349, sedan: 449, suv: 599 },
    fromLandmarks: ["Gamharia Market", "Adityapur Industrial Area", "Gamharia Station"],
    toLandmarks: ["Bistupur", "Sakchi", "Tatanagar Station"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Boram", toArea: "Bistupur", slug: "boram-to-bistupur",
    distanceKm: 5, durationMin: 12,
    startingFare: 179,
    fares: { hatchback: 179, sedan: 279, suv: 379 },
    fromLandmarks: ["Boram Chowk", "Boram Road"],
    toLandmarks: ["Bistupur Market", "Keenan Stadium", "Main Road Bistupur"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Kadma", toArea: "Sakchi", slug: "kadma-to-sakchi",
    distanceKm: 4, durationMin: 10,
    startingFare: 149,
    fares: { hatchback: 149, sedan: 249, suv: 349 },
    fromLandmarks: ["Kadma Chowk", "Kadma More", "Kadma Bridge"],
    toLandmarks: ["Sakchi Market", "Sakchi Bus Stand"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Golmuri", toArea: "Mango", slug: "golmuri-to-mango",
    distanceKm: 5, durationMin: 12,
    startingFare: 179,
    fares: { hatchback: 179, sedan: 279, suv: 379 },
    fromLandmarks: ["Golmuri Market", "Golmuri Club", "AG Office"],
    toLandmarks: ["Mango More", "Mango Market", "Dimna Road"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Sonari", toArea: "Bistupur", slug: "sonari-to-bistupur",
    distanceKm: 6, durationMin: 15,
    startingFare: 199,
    fares: { hatchback: 199, sedan: 299, suv: 399 },
    fromLandmarks: ["Sonari Airport Area", "Sonari More"],
    toLandmarks: ["Bistupur Market", "Main Road"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Baridih", toArea: "Sakchi", slug: "baridih-to-sakchi",
    distanceKm: 4, durationMin: 10,
    startingFare: 149,
    fares: { hatchback: 149, sedan: 249, suv: 349 },
    fromLandmarks: ["Baridih Market", "Baridih Colony"],
    toLandmarks: ["Sakchi Market", "Sakchi Bus Stand"]
  },
  // ========== JAMSHEDPUR LANDMARK ROUTES ==========
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Tatanagar Station", toArea: "Bistupur", slug: "tatanagar-station-to-bistupur",
    distanceKm: 4, durationMin: 10,
    startingFare: 149,
    fares: { hatchback: 149, sedan: 249, suv: 349 },
    fromLandmarks: ["Tatanagar Junction Railway Station", "Platform 1", "Station Road"],
    toLandmarks: ["Bistupur Market", "Keenan Stadium", "Main Road Bistupur"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Tatanagar Station", toArea: "Mango", slug: "tatanagar-station-to-mango",
    distanceKm: 7, durationMin: 18,
    startingFare: 229,
    fares: { hatchback: 229, sedan: 329, suv: 429 },
    fromLandmarks: ["Tatanagar Junction", "Station Road"],
    toLandmarks: ["Mango Market", "Mango More", "Dimna Road"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Tatanagar Station", toArea: "Adityapur", slug: "tatanagar-station-to-adityapur",
    distanceKm: 10, durationMin: 25,
    startingFare: 299,
    fares: { hatchback: 299, sedan: 399, suv: 549 },
    fromLandmarks: ["Tatanagar Junction", "Station Road", "Reservation Office"],
    toLandmarks: ["Adityapur Industrial Area", "Gamharia", "Adityapur Phase 1"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Tatanagar Station", toArea: "Dimna", slug: "tatanagar-station-to-dimna",
    distanceKm: 12, durationMin: 30,
    startingFare: 349,
    fares: { hatchback: 349, sedan: 449, suv: 599 },
    fromLandmarks: ["Tatanagar Junction Railway Station"],
    toLandmarks: ["Dimna Lake", "Dimna Chowk", "Dimna Road"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Tatanagar Station", toArea: "Telco", slug: "tatanagar-station-to-telco",
    distanceKm: 8, durationMin: 20,
    startingFare: 249,
    fares: { hatchback: 249, sedan: 349, suv: 449 },
    fromLandmarks: ["Tatanagar Junction"],
    toLandmarks: ["Telco Colony", "Tata Motors Gate", "W Town"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "XLRI", toArea: "Tatanagar Station", slug: "xlri-to-tatanagar-station",
    distanceKm: 5, durationMin: 12,
    startingFare: 179,
    fares: { hatchback: 179, sedan: 279, suv: 379 },
    fromLandmarks: ["XLRI Jamshedpur", "XLRI Campus Gate"],
    toLandmarks: ["Tatanagar Junction", "Station Road"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "XLRI", toArea: "Mango", slug: "xlri-to-mango",
    distanceKm: 8, durationMin: 20,
    startingFare: 249,
    fares: { hatchback: 249, sedan: 349, suv: 449 },
    fromLandmarks: ["XLRI Jamshedpur", "Circuit House Area"],
    toLandmarks: ["Mango Market", "Mango More", "Dimna Road"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "NIT Jamshedpur", toArea: "Bistupur", slug: "nit-jamshedpur-to-bistupur",
    distanceKm: 6, durationMin: 15,
    startingFare: 199,
    fares: { hatchback: 199, sedan: 299, suv: 399 },
    fromLandmarks: ["NIT Jamshedpur Campus", "Adityapur Gate"],
    toLandmarks: ["Bistupur Market", "Main Road Bistupur"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "NIT Jamshedpur", toArea: "Mango", slug: "nit-jamshedpur-to-mango",
    distanceKm: 10, durationMin: 25,
    startingFare: 299,
    fares: { hatchback: 299, sedan: 399, suv: 549 },
    fromLandmarks: ["NIT Jamshedpur", "Adityapur"],
    toLandmarks: ["Mango Market", "Dimna Road"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Jubilee Park", toArea: "Mango", slug: "jubilee-park-to-mango",
    distanceKm: 7, durationMin: 18,
    startingFare: 229,
    fares: { hatchback: 229, sedan: 329, suv: 429 },
    fromLandmarks: ["Jubilee Park Gate", "Tata Steel Zoo"],
    toLandmarks: ["Mango Market", "Mango More"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Jubilee Park", toArea: "Sakchi", slug: "jubilee-park-to-sakchi",
    distanceKm: 3, durationMin: 8,
    startingFare: 129,
    fares: { hatchback: 129, sedan: 229, suv: 329 },
    fromLandmarks: ["Jubilee Park", "Tata Steel Zoo"],
    toLandmarks: ["Sakchi Market", "Sakchi Bus Stand"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Marine Drive", toArea: "Bistupur", slug: "marine-drive-to-bistupur",
    distanceKm: 5, durationMin: 12,
    startingFare: 179,
    fares: { hatchback: 179, sedan: 279, suv: 379 },
    fromLandmarks: ["Marine Drive Jamshedpur", "Jayanti Sarovar"],
    toLandmarks: ["Bistupur Market", "Main Road"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Sidhgora", toArea: "Bistupur", slug: "sidhgora-to-bistupur",
    distanceKm: 5, durationMin: 12,
    startingFare: 179,
    fares: { hatchback: 179, sedan: 279, suv: 379 },
    fromLandmarks: ["Sidhgora Chowk", "Sidhgora Market"],
    toLandmarks: ["Bistupur Market", "Main Road"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Agrico", toArea: "Sakchi", slug: "agrico-to-sakchi",
    distanceKm: 3, durationMin: 8,
    startingFare: 129,
    fares: { hatchback: 129, sedan: 229, suv: 329 },
    fromLandmarks: ["Agrico Colony", "Agrico More"],
    toLandmarks: ["Sakchi Market", "Sakchi Bus Stand"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Pardih", toArea: "Bistupur", slug: "pardih-to-bistupur",
    distanceKm: 7, durationMin: 18,
    startingFare: 229,
    fares: { hatchback: 229, sedan: 329, suv: 429 },
    fromLandmarks: ["Pardih Market", "Pardih More"],
    toLandmarks: ["Bistupur Market", "Main Road"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Ulidih", toArea: "Sakchi", slug: "ulidih-to-sakchi",
    distanceKm: 5, durationMin: 14,
    startingFare: 179,
    fares: { hatchback: 179, sedan: 279, suv: 379 },
    fromLandmarks: ["Ulidih Colony", "Ulidih More"],
    toLandmarks: ["Sakchi Market", "Sakchi Bus Stand"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Sitaramdera", toArea: "Bistupur", slug: "sitaramdera-to-bistupur",
    distanceKm: 6, durationMin: 15,
    startingFare: 199,
    fares: { hatchback: 199, sedan: 299, suv: 399 },
    fromLandmarks: ["Sitaramdera Colony", "Sitaramdera Road"],
    toLandmarks: ["Bistupur Market", "Main Road"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Bhuiyadih", toArea: "Sakchi", slug: "bhuiyadih-to-sakchi",
    distanceKm: 4, durationMin: 10,
    startingFare: 149,
    fares: { hatchback: 149, sedan: 249, suv: 349 },
    fromLandmarks: ["Bhuiyadih Colony", "Bhuiyadih More"],
    toLandmarks: ["Sakchi Market", "Sakchi Bus Stand"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Mango", toArea: "Adityapur", slug: "mango-to-adityapur",
    distanceKm: 12, durationMin: 30,
    startingFare: 349,
    fares: { hatchback: 349, sedan: 449, suv: 599 },
    fromLandmarks: ["Mango More", "Mango Market", "Dimna Road"],
    toLandmarks: ["Adityapur Industrial Area", "Gamharia"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Bistupur", toArea: "Adityapur", slug: "bistupur-to-adityapur",
    distanceKm: 9, durationMin: 22,
    startingFare: 279,
    fares: { hatchback: 279, sedan: 379, suv: 499 },
    fromLandmarks: ["Bistupur Market", "Main Road", "Keenan Stadium"],
    toLandmarks: ["Adityapur Industrial Area", "Gamharia", "NIT Jamshedpur"]
  },

  // ========== RANCHI LOCAL ROUTES ==========
  {
    city: "ranchi", cityName: "Ranchi",
    fromArea: "Doranda", toArea: "Kanke", slug: "doranda-to-kanke",
    distanceKm: 10, durationMin: 25,
    startingFare: 299,
    fares: { hatchback: 299, sedan: 399, suv: 549 },
    fromLandmarks: ["Doranda Stadium", "Raj Bhawan", "Police Line"],
    toLandmarks: ["Kanke Dam", "RIMS Hospital", "Kanke Road"]
  },
  {
    city: "ranchi", cityName: "Ranchi",
    fromArea: "Lalpur", toArea: "Ranchi Airport", slug: "lalpur-to-ranchi-airport",
    distanceKm: 8, durationMin: 20,
    startingFare: 249,
    fares: { hatchback: 249, sedan: 349, suv: 449 },
    fromLandmarks: ["Lalpur Chowk", "Lalpur Market"],
    toLandmarks: ["Birsa Munda Airport", "Terminal Building"]
  },
  {
    city: "ranchi", cityName: "Ranchi",
    fromArea: "Harmu", toArea: "Dhurwa", slug: "harmu-to-dhurwa",
    distanceKm: 7, durationMin: 18,
    startingFare: 229,
    fares: { hatchback: 229, sedan: 329, suv: 429 },
    fromLandmarks: ["Harmu Housing Colony", "Harmu Road"],
    toLandmarks: ["Dhurwa Dam", "Dhurwa HEC Colony"]
  },
  {
    city: "ranchi", cityName: "Ranchi",
    fromArea: "Morabadi", toArea: "Bariatu", slug: "morabadi-to-bariatu",
    distanceKm: 5, durationMin: 12,
    startingFare: 179,
    fares: { hatchback: 179, sedan: 279, suv: 379 },
    fromLandmarks: ["Morabadi Ground", "Morabadi Chowk"],
    toLandmarks: ["Bariatu Hospital", "Bariatu Road"]
  },
  {
    city: "ranchi", cityName: "Ranchi",
    fromArea: "Hinoo", toArea: "Kokar", slug: "hinoo-to-kokar",
    distanceKm: 4, durationMin: 10,
    startingFare: 149,
    fares: { hatchback: 149, sedan: 249, suv: 349 },
    fromLandmarks: ["Hinoo Chowk", "Hinoo Market"],
    toLandmarks: ["Kokar Chowk", "Kokar Industrial Area"]
  },
  {
    city: "ranchi", cityName: "Ranchi",
    fromArea: "Ratu Road", toArea: "Ranchi Station", slug: "ratu-road-to-ranchi-station",
    distanceKm: 6, durationMin: 15,
    startingFare: 199,
    fares: { hatchback: 199, sedan: 299, suv: 399 },
    fromLandmarks: ["Ratu Road", "Ratu More"],
    toLandmarks: ["Ranchi Junction Station", "Station Road"]
  },
  {
    city: "ranchi", cityName: "Ranchi",
    fromArea: "Booty More", toArea: "Argora", slug: "booty-more-to-argora",
    distanceKm: 6, durationMin: 15,
    startingFare: 199,
    fares: { hatchback: 199, sedan: 299, suv: 399 },
    fromLandmarks: ["Booty More Chowk", "Booty More Market"],
    toLandmarks: ["Argora Chowk", "Argora Road"]
  },
  {
    city: "ranchi", cityName: "Ranchi",
    fromArea: "Namkum", toArea: "Hatia", slug: "namkum-to-hatia",
    distanceKm: 8, durationMin: 20,
    startingFare: 249,
    fares: { hatchback: 249, sedan: 349, suv: 449 },
    fromLandmarks: ["Namkum Chowk", "BIT Mesra Road"],
    toLandmarks: ["Hatia Station", "Hatia Dam", "HEC Colony"]
  },

  // ========== DHANBAD LOCAL ROUTES ==========
  {
    city: "dhanbad", cityName: "Dhanbad",
    fromArea: "Jharia", toArea: "Dhanbad Station", slug: "jharia-to-dhanbad-station",
    distanceKm: 15, durationMin: 30,
    startingFare: 349,
    fares: { hatchback: 349, sedan: 449, suv: 599 },
    fromLandmarks: ["Jharia Market", "Jharia Coal Mines", "Jharia Bus Stand"],
    toLandmarks: ["Dhanbad Junction", "Station Road", "Hirapur"]
  },
  {
    city: "dhanbad", cityName: "Dhanbad",
    fromArea: "Sindri", toArea: "Dhanbad", slug: "sindri-to-dhanbad",
    distanceKm: 22, durationMin: 40,
    startingFare: 449,
    fares: { hatchback: 449, sedan: 599, suv: 799 },
    fromLandmarks: ["Sindri Town", "Sindri Fertilizer Factory", "Sindri More"],
    toLandmarks: ["Dhanbad Station", "Bank More", "City Centre"]
  },
  {
    city: "dhanbad", cityName: "Dhanbad",
    fromArea: "Katras", toArea: "Dhanbad", slug: "katras-to-dhanbad",
    distanceKm: 12, durationMin: 25,
    startingFare: 299,
    fares: { hatchback: 299, sedan: 399, suv: 549 },
    fromLandmarks: ["Katras Market", "Katras More"],
    toLandmarks: ["Dhanbad Station", "Bank More"]
  },
  {
    city: "dhanbad", cityName: "Dhanbad",
    fromArea: "Phusro", toArea: "Dhanbad", slug: "phusro-to-dhanbad",
    distanceKm: 30, durationMin: 50,
    startingFare: 599,
    fares: { hatchback: 599, sedan: 799, suv: 999 },
    fromLandmarks: ["Phusro Town", "Phusro Station"],
    toLandmarks: ["Dhanbad Station", "Bank More"]
  },
  {
    city: "dhanbad", cityName: "Dhanbad",
    fromArea: "Topchanchi", toArea: "Dhanbad", slug: "topchanchi-to-dhanbad",
    distanceKm: 18, durationMin: 35,
    startingFare: 399,
    fares: { hatchback: 399, sedan: 549, suv: 699 },
    fromLandmarks: ["Topchanchi Lake", "Topchanchi Town"],
    toLandmarks: ["Dhanbad Station", "Bank More"]
  },
  {
    city: "dhanbad", cityName: "Dhanbad",
    fromArea: "Govindpur", toArea: "Dhanbad", slug: "govindpur-to-dhanbad",
    distanceKm: 8, durationMin: 20,
    startingFare: 249,
    fares: { hatchback: 249, sedan: 349, suv: 449 },
    fromLandmarks: ["Govindpur Market", "Govindpur Road"],
    toLandmarks: ["Dhanbad Station", "Bank More"]
  },

  // ========== RANCHI ADDITIONAL ROUTES ==========
  {
    city: "ranchi", cityName: "Ranchi",
    fromArea: "Ranchi Airport", toArea: "Doranda", slug: "ranchi-airport-to-doranda",
    distanceKm: 10, durationMin: 25,
    startingFare: 299,
    fares: { hatchback: 299, sedan: 399, suv: 549 },
    fromLandmarks: ["Birsa Munda Airport", "Terminal Building", "Airport Road"],
    toLandmarks: ["Doranda Stadium", "Raj Bhawan", "Police Line"]
  },
  {
    city: "ranchi", cityName: "Ranchi",
    fromArea: "Ranchi Airport", toArea: "Ranchi Station", slug: "ranchi-airport-to-ranchi-station",
    distanceKm: 8, durationMin: 20,
    startingFare: 249,
    fares: { hatchback: 249, sedan: 349, suv: 449 },
    fromLandmarks: ["Birsa Munda Airport", "Terminal Building"],
    toLandmarks: ["Ranchi Junction Station", "Station Road"]
  },
  {
    city: "ranchi", cityName: "Ranchi",
    fromArea: "Ranchi Airport", toArea: "Lalpur", slug: "ranchi-airport-to-lalpur",
    distanceKm: 7, durationMin: 18,
    startingFare: 229,
    fares: { hatchback: 229, sedan: 329, suv: 429 },
    fromLandmarks: ["Birsa Munda Airport"],
    toLandmarks: ["Lalpur Chowk", "Lalpur Market"]
  },
  {
    city: "ranchi", cityName: "Ranchi",
    fromArea: "Ranchi Airport", toArea: "Main Road", slug: "ranchi-airport-to-main-road",
    distanceKm: 9, durationMin: 22,
    startingFare: 279,
    fares: { hatchback: 279, sedan: 379, suv: 499 },
    fromLandmarks: ["Birsa Munda Airport"],
    toLandmarks: ["Main Road Ranchi", "Albert Ekka Chowk", "Firayalal Chowk"]
  },
  {
    city: "ranchi", cityName: "Ranchi",
    fromArea: "BIT Mesra", toArea: "Ranchi Station", slug: "bit-mesra-to-ranchi-station",
    distanceKm: 15, durationMin: 35,
    startingFare: 399,
    fares: { hatchback: 399, sedan: 549, suv: 699 },
    fromLandmarks: ["BIT Mesra Campus", "Mesra Road"],
    toLandmarks: ["Ranchi Junction Station", "Station Road"]
  },
  {
    city: "ranchi", cityName: "Ranchi",
    fromArea: "BIT Mesra", toArea: "Ranchi Airport", slug: "bit-mesra-to-ranchi-airport",
    distanceKm: 18, durationMin: 40,
    startingFare: 449,
    fares: { hatchback: 449, sedan: 599, suv: 799 },
    fromLandmarks: ["BIT Mesra Campus"],
    toLandmarks: ["Birsa Munda Airport"]
  },
  {
    city: "ranchi", cityName: "Ranchi",
    fromArea: "Piska More", toArea: "Ranchi Station", slug: "piska-more-to-ranchi-station",
    distanceKm: 8, durationMin: 20,
    startingFare: 249,
    fares: { hatchback: 249, sedan: 349, suv: 449 },
    fromLandmarks: ["Piska More Chowk", "Piska More Road"],
    toLandmarks: ["Ranchi Junction Station", "Station Road"]
  },
  {
    city: "ranchi", cityName: "Ranchi",
    fromArea: "Chutia", toArea: "Doranda", slug: "chutia-to-doranda",
    distanceKm: 5, durationMin: 12,
    startingFare: 179,
    fares: { hatchback: 179, sedan: 279, suv: 379 },
    fromLandmarks: ["Chutia Chowk", "Chutia Market"],
    toLandmarks: ["Doranda Stadium", "Raj Bhawan"]
  },
  {
    city: "ranchi", cityName: "Ranchi",
    fromArea: "Ashok Nagar", toArea: "Lalpur", slug: "ashok-nagar-to-lalpur",
    distanceKm: 4, durationMin: 10,
    startingFare: 149,
    fares: { hatchback: 149, sedan: 249, suv: 349 },
    fromLandmarks: ["Ashok Nagar Chowk", "Ashok Nagar Colony"],
    toLandmarks: ["Lalpur Chowk", "Lalpur Market"]
  },
  {
    city: "ranchi", cityName: "Ranchi",
    fromArea: "Main Road", toArea: "Kanke", slug: "main-road-to-kanke",
    distanceKm: 8, durationMin: 20,
    startingFare: 249,
    fares: { hatchback: 249, sedan: 349, suv: 449 },
    fromLandmarks: ["Main Road Ranchi", "Albert Ekka Chowk"],
    toLandmarks: ["Kanke Dam", "RIMS Hospital"]
  },
  {
    city: "ranchi", cityName: "Ranchi",
    fromArea: "Upper Bazar", toArea: "Ranchi Airport", slug: "upper-bazar-to-ranchi-airport",
    distanceKm: 10, durationMin: 25,
    startingFare: 299,
    fares: { hatchback: 299, sedan: 399, suv: 549 },
    fromLandmarks: ["Upper Bazar", "Daily Market"],
    toLandmarks: ["Birsa Munda Airport"]
  },

  // ========== BOKARO LOCAL ROUTES ==========
  {
    city: "bokaro", cityName: "Bokaro Steel City",
    fromArea: "Sector 4", toArea: "City Centre", slug: "sector-4-to-city-centre",
    distanceKm: 5, durationMin: 12,
    startingFare: 179,
    fares: { hatchback: 179, sedan: 279, suv: 379 },
    fromLandmarks: ["Sector 4 Market", "Bokaro General Hospital"],
    toLandmarks: ["City Centre Mall", "City Centre Chowk"]
  },
  {
    city: "bokaro", cityName: "Bokaro Steel City",
    fromArea: "Chas", toArea: "Sector 4", slug: "chas-to-sector-4",
    distanceKm: 8, durationMin: 20,
    startingFare: 249,
    fares: { hatchback: 249, sedan: 349, suv: 449 },
    fromLandmarks: ["Chas Market", "Chas More", "Chas Bus Stand"],
    toLandmarks: ["Sector 4", "Bokaro General Hospital"]
  },
  {
    city: "bokaro", cityName: "Bokaro Steel City",
    fromArea: "Bokaro Station", toArea: "City Centre", slug: "bokaro-station-to-city-centre",
    distanceKm: 10, durationMin: 25,
    startingFare: 299,
    fares: { hatchback: 299, sedan: 399, suv: 549 },
    fromLandmarks: ["Bokaro Steel City Station", "Station Road"],
    toLandmarks: ["City Centre Mall", "City Centre"]
  },
  {
    city: "bokaro", cityName: "Bokaro Steel City",
    fromArea: "Naya More", toArea: "Sector 1", slug: "naya-more-to-sector-1",
    distanceKm: 6, durationMin: 15,
    startingFare: 199,
    fares: { hatchback: 199, sedan: 299, suv: 399 },
    fromLandmarks: ["Naya More Chowk", "Naya More Market"],
    toLandmarks: ["Sector 1", "Steel Plant Gate"]
  },

  // ========== HAZARIBAGH LOCAL ROUTES ==========
  {
    city: "hazaribagh", cityName: "Hazaribagh",
    fromArea: "Court Area", toArea: "Canary Hill", slug: "court-area-to-canary-hill",
    distanceKm: 5, durationMin: 12,
    startingFare: 179,
    fares: { hatchback: 179, sedan: 279, suv: 379 },
    fromLandmarks: ["Hazaribagh Court", "Boddom Bazar"],
    toLandmarks: ["Canary Hill", "Canary Hill View Point"]
  },
  {
    city: "hazaribagh", cityName: "Hazaribagh",
    fromArea: "Hazaribagh Lake", toArea: "Court Area", slug: "hazaribagh-lake-to-court-area",
    distanceKm: 3, durationMin: 8,
    startingFare: 129,
    fares: { hatchback: 129, sedan: 229, suv: 329 },
    fromLandmarks: ["Hazaribagh Lake", "Lake Road"],
    toLandmarks: ["Hazaribagh Court", "Boddom Bazar"]
  },
  {
    city: "hazaribagh", cityName: "Hazaribagh",
    fromArea: "Barhi", toArea: "Hazaribagh", slug: "barhi-to-hazaribagh",
    distanceKm: 25, durationMin: 40,
    startingFare: 499,
    fares: { hatchback: 499, sedan: 649, suv: 849 },
    fromLandmarks: ["Barhi Chowk", "NH-33 Junction"],
    toLandmarks: ["Hazaribagh Court Area", "Lake Road"]
  },
];

// ========== HELPER FUNCTIONS ==========

export function getLocalRoutesByCity(city: string): LocalRouteData[] {
  return localRoutes.filter(r => r.city === city);
}

export function getLocalRoute(city: string, slug: string): LocalRouteData | undefined {
  return localRoutes.find(r => r.city === city && r.slug === slug);
}

export function getAllLocalRouteParams(): { citySlug: string; routeSlug: string }[] {
  return localRoutes.map(r => ({
    citySlug: `local-taxi-${r.city}`,
    routeSlug: r.slug
  }));
}
