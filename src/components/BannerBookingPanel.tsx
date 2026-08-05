'use client';

import React, { useState, useRef, useEffect } from 'react';

// Comprehensive 70+ Popular locations list for autocomplete dropdowns
const POPULAR_LOCATIONS = [
  // Jamshedpur & Localities
  'Jamshedpur (Sonari / Bistupur / Sakchi)',
  'Sonari, Jamshedpur',
  'Bistupur, Jamshedpur',
  'Sakchi, Jamshedpur',
  'Mango, Jamshedpur',
  'Kadma, Jamshedpur',
  'Telco Colony, Jamshedpur',
  'Adityapur Industrial Area, Jamshedpur',
  'Gamharia, Jamshedpur',
  'Pardih / Marine Drive, Jamshedpur',
  'Tatanagar Railway Station (TATA)',
  'XLRI Jamshedpur Campus',
  'Tata Main Hospital (TMH), Jamshedpur',
  'Jubilee Park / Zoo, Jamshedpur',
  'Dimna Lake, Jamshedpur',
  'Sonari Airport (IXW), Jamshedpur',
  'Ghatsila, East Singhbhum',
  'Chaibasa, West Singhbhum',
  'Seraikela',

  // Ranchi & Localities
  'Ranchi (Main City / Lalpur / Harmu)',
  'Lalpur / Circular Road, Ranchi',
  'Harmu Housing Colony, Ranchi',
  'Doranda / Hinoo, Ranchi',
  'Kanke Road, Ranchi',
  'Morabadi, Ranchi',
  'Bariatu, Ranchi',
  'Ratu Road / Piska More, Ranchi',
  'Birsa Munda Airport, Ranchi (IXR)',
  'Ranchi Railway Station (RNC)',
  'Hatia Railway Station (HTE)',
  'BIT Mesra Campus, Ranchi',
  'RIMS Hospital, Ranchi',
  'Patratu Valley, Ramgarh',
  'Ramgarh Cantt',

  // Dhanbad & Localities
  'Dhanbad (Bank More / Dhanbad Jn)',
  'Bank More, Dhanbad',
  'Hirapur, Dhanbad',
  'Saraidhela, Dhanbad',
  'Jharia, Dhanbad',
  'Sindri, Dhanbad',
  'IIT (ISM) Dhanbad Campus',
  'Dhanbad Junction Railway Station',
  'Topchanchi Lake, Dhanbad',

  // Bokaro & Localities
  'Bokaro Steel City (Sector 4 / Chas)',
  'Sector 4, Bokaro Steel City',
  'Sector 1, Bokaro Steel City',
  'City Centre, Bokaro',
  'Chas, Bokaro',
  'Bokaro Steel Plant (SAIL-BSL Gate)',
  'Bokaro Steel City Railway Station',

  // Deoghar & Santhal Pargana
  'Deoghar (Baidyanath Dham Temple)',
  'Deoghar Airport (DBR)',
  'Jasidih Junction Railway Station',
  'Tower Chowk, Deoghar',
  'Satsang Ashram, Deoghar',
  'Dumka',
  'Jamtara',

  // Other Major Jharkhand Towns
  'Hazaribagh City',
  'Giridih City',
  'Parasnath (Sammeta Shikharji)',
  'Koderma / Jhumri Telaiya',
  'Daltonganj (Medininagar / Palamu)',
  'Garhwa',
  'Simdega',
  'Lohardaga',

  // West Bengal (Kolkata & Intercity)
  'Netaji Subhash Chandra Bose Airport, Kolkata (CCU)',
  'Kolkata (Salt Lake / New Town / Park Street)',
  'Howrah Railway Station, Kolkata',
  'Sealdah Railway Station, Kolkata',
  'Esplanade Bus Station, Kolkata',
  'Durgapur City',
  'Asansol Junction',
  'Kharagpur Railway Station',
  'Purulia City',
  'Bankura',

  // Bihar (Patna & Intercity)
  'Jay Prakash Narayan Airport, Patna (PAT)',
  'Patna Junction Railway Station',
  'Patna City (Boring Road / Kankarbagh)',
  'Gaya International Airport (GAY)',
  'Bodhgaya Temple',
  'Muzaffarpur City',
  'Bhagalpur City',
  'Darbhanga Airport (DBR)',
  'Arrah / Buxar',

  // Odisha (Puri, Bhubaneswar & Intercity)
  'Biju Patnaik Airport, Bhubaneswar (BBI)',
  'Puri Jagannath Temple / Beach',
  'Cuttack City',
  'Rourkela Steel City',
  'Baripada'
];

const AIRPORTS = [
  'Birsa Munda Airport, Ranchi (IXR)',
  'Netaji Subhash Chandra Bose Airport, Kolkata (CCU)',
  'Deoghar Airport (DBR)',
  'Jay Prakash Narayan Airport, Patna (PAT)',
  'Gaya International Airport (GAY)',
  'Biju Patnaik Airport, Bhubaneswar (BBI)',
  'Darbhanga Airport (DBR)'
];

const CAB_OPTIONS = [
  { id: 'sedan', label: 'Sedan (Dzire / Etios - 4 Seater)', shortLabel: 'Sedan (4 Seater)', icon: '🚘' },
  { id: 'hatchback', label: 'Hatchback (WagonR - 4 Seater)', shortLabel: 'Hatchback (4 Seater)', icon: '🚗' },
  { id: 'suv', label: 'SUV (Ertiga / Carens - 6/7 Seater)', shortLabel: 'SUV (6/7 Seater)', icon: '🚐' },
  { id: 'crysta', label: 'Innova Crysta (Luxury 7 Seater)', shortLabel: 'Innova Crysta', icon: '🚙' },
  { id: 'tempo', label: 'Tempo Traveller (12/17 Seater)', shortLabel: 'Tempo Traveller', icon: '🚌' },
];

const getTodayIso = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

const getNextDayIso = () => {
  const nextDay = new Date();
  nextDay.setDate(nextDay.getDate() + 1);
  const yyyy = nextDay.getFullYear();
  const mm = String(nextDay.getMonth() + 1).padStart(2, '0');
  const dd = String(nextDay.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

const formatDateForDisplay = (isoStr: string) => {
  if (!isoStr) return '';
  const parts = isoStr.split('-');
  if (parts.length === 3 && parts[0].length === 4) {
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    const dateObj = new Date(year, month, day);
    if (!isNaN(dateObj.getTime())) {
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${String(day).padStart(2, '0')} ${months[month]} (${days[dateObj.getDay()]})`;
    }
  }
  return isoStr;
};

const formatTimeForDisplay = (timeStr: string) => {
  if (!timeStr) return '07:00 AM';
  if (timeStr.includes('AM') || timeStr.includes('PM')) return timeStr;
  
  const parts = timeStr.split(':');
  if (parts.length >= 2) {
    let hours = parseInt(parts[0], 10);
    const minutes = parts[1];
    if (!isNaN(hours)) {
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      return `${hours}:${minutes} ${ampm}`;
    }
  }
  return timeStr;
};

export default function BannerBookingPanel() {
  const [activeTab, setActiveTab] = useState<'ONE WAY' | 'ROUND TRIP' | 'LOCAL' | 'AIRPORT'>('ONE WAY');

  // Form inputs state
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  
  // Date & Time states
  const [pickupDate, setPickupDate] = useState(getTodayIso());
  const [returnDate, setReturnDate] = useState(getNextDayIso());
  const [pickupTime, setPickupTime] = useState('07:00');

  // Cab Type state
  const [cabType, setCabType] = useState('Sedan (Dzire / Etios - 4 Seater)');
  
  // Local tab specific state
  const [localCity, setLocalCity] = useState('');

  // Airport tab specific state
  const [airportTripType, setAirportTripType] = useState<'DROP TO AIRPORT' | 'PICKUP FROM AIRPORT'>('DROP TO AIRPORT');
  const [pickupAddress, setPickupAddress] = useState('');
  const [dropAirport, setDropAirport] = useState('');

  // Dropdown visibility states
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [showLocalDropdown, setShowLocalDropdown] = useState(false);
  const [showPickupAddressDropdown, setShowPickupAddressDropdown] = useState(false);
  const [showDropAirportDropdown, setShowDropAirportDropdown] = useState(false);

  // Errors / validation notice
  const [showValidationError, setShowValidationError] = useState(false);

  // Swap icon animation
  const [isSwapping, setIsSwapping] = useState(false);

  // DOM Refs for native Calendar & Clock pickers
  const pickupDateRef = useRef<HTMLInputElement>(null);
  const returnDateRef = useRef<HTMLInputElement>(null);
  const pickupTimeRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowFromDropdown(false);
        setShowToDropdown(false);
        setShowLocalDropdown(false);
        setShowPickupAddressDropdown(false);
        setShowDropAirportDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const openCalendar = (ref: React.RefObject<HTMLInputElement>) => {
    if (ref.current) {
      const el = ref.current as HTMLInputElement & { showPicker?: () => void };
      if (typeof el.showPicker === 'function') {
        try {
          el.showPicker();
        } catch {
          el.focus();
        }
      } else {
        el.focus();
      }
    }
  };

  const handleSwap = () => {
    setIsSwapping(true);
    const temp = from;
    setFrom(to);
    setTo(temp);
    setTimeout(() => setIsSwapping(false), 400);
  };

  const handleBookWhatsApp = () => {
    // Validate required fields
    if (activeTab === 'ONE WAY' || activeTab === 'ROUND TRIP') {
      if (!from.trim() || !to.trim()) {
        setShowValidationError(true);
        return;
      }
    } else if (activeTab === 'LOCAL') {
      if (!localCity.trim()) {
        setShowValidationError(true);
        return;
      }
    } else if (activeTab === 'AIRPORT') {
      if (!pickupAddress.trim() || !dropAirport.trim()) {
        setShowValidationError(true);
        return;
      }
    }

    setShowValidationError(false);

    const formattedPickupDate = formatDateForDisplay(pickupDate);
    const formattedReturnDate = formatDateForDisplay(returnDate);
    const formattedPickupTime = formatTimeForDisplay(pickupTime);

    let message = `🚖 *RS TRAVEL - NEW CAB BOOKING* 🚖\n\n`;
    message += `📋 *Trip Category:* ${activeTab}\n`;
    message += `🚗 *Cab Type:* ${cabType}\n`;

    if (activeTab === 'ONE WAY') {
      message += `📍 *From:* ${from}\n`;
      message += `🎯 *To:* ${to}\n`;
      message += `📅 *Pick Up Date:* ${formattedPickupDate}\n`;
      message += `⏰ *Pick Up Time:* ${formattedPickupTime}\n`;
    } else if (activeTab === 'ROUND TRIP') {
      message += `📍 *From:* ${from}\n`;
      message += `🎯 *To:* ${to}\n`;
      message += `📅 *Trip Start Date:* ${formattedPickupDate}\n`;
      message += `🔄 *Trip Return Date:* ${formattedReturnDate}\n`;
      message += `⏰ *Pick Up Time:* ${formattedPickupTime}\n`;
    } else if (activeTab === 'LOCAL') {
      message += `🏙️ *City:* ${localCity}\n`;
      message += `📅 *Trip Date:* ${formattedPickupDate}\n`;
      message += `⏰ *Pick Up Time:* ${formattedPickupTime}\n`;
    } else if (activeTab === 'AIRPORT') {
      message += `✈️ *Airport Option:* ${airportTripType}\n`;
      message += `📍 *Pickup Address:* ${pickupAddress}\n`;
      message += `🛬 *Drop / Airport:* ${dropAirport}\n`;
      message += `📅 *Trip Date:* ${formattedPickupDate}\n`;
      message += `⏰ *Pick Up Time:* ${formattedPickupTime}\n`;
    }

    message += `\n*Please confirm cab availability & best fare quote!*`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/917979877450?text=${encoded}`, '_blank');
  };

  return (
    <div ref={containerRef} className="w-full max-w-5xl mx-auto my-2 sm:my-5 px-1.5 sm:px-4">
      {/* ULTRA COMPACT WHITE CARD PANEL */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-2.5 sm:p-5 md:p-6 border border-gray-200/90 backdrop-blur-md">
        
        {/* TOP MAIN TABS */}
        <div className="flex justify-center mb-2 sm:mb-3">
          <div className="inline-flex w-full sm:w-auto rounded-lg border border-gray-300 bg-white overflow-hidden shadow-sm">
            {(['ONE WAY', 'ROUND TRIP', 'LOCAL', 'AIRPORT'] as const).map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab);
                    setShowValidationError(false);
                  }}
                  className={`flex-1 sm:flex-none px-2 sm:px-6 py-2 sm:py-2.5 text-[10px] sm:text-xs md:text-sm font-extrabold uppercase transition-all duration-200 tracking-wider text-center ${
                    isActive
                      ? 'bg-[#4098ca] text-white shadow-sm'
                      : 'bg-white text-gray-800 hover:bg-gray-100 border-r border-gray-200 last:border-r-0'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* COMPACT TAGLINE DIVIDER */}
        <div className="relative flex py-1 items-center justify-center mb-2.5 sm:mb-3">
          <div className="flex-grow border-t border-sky-200"></div>
          <span className="flex-shrink mx-2 text-[9px] sm:text-xs font-extrabold text-gray-700 uppercase tracking-widest text-center px-1">
            {activeTab === 'ONE WAY' && "INDIA'S PREMIER INTERCITY CABS"}
            {activeTab === 'ROUND TRIP' && "INDIA'S PREMIER INTERCITY CABS"}
            {activeTab === 'LOCAL' && "HOURLY RENTALS WITHIN THE CITY"}
            {activeTab === 'AIRPORT' && "RELIABLE AIRPORT PICKUPS & DROPS"}
          </span>
          <div className="flex-grow border-t border-sky-200"></div>
        </div>

        {/* COMPACT SUB-SEGMENTED PILL TOGGLES */}
        {(activeTab === 'ONE WAY' || activeTab === 'ROUND TRIP') && (
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="inline-flex rounded-lg border border-gray-300 bg-white overflow-hidden shadow-sm">
              <button
                type="button"
                onClick={() => setActiveTab('ONE WAY')}
                className={`px-3 sm:px-5 py-1.5 text-center transition-all ${
                  activeTab === 'ONE WAY'
                    ? 'bg-[#4098ca] text-white font-extrabold'
                    : 'bg-white text-gray-800 hover:bg-gray-50'
                }`}
              >
                <div className="text-[10px] sm:text-xs font-extrabold uppercase">ONE WAY</div>
                <div className={`text-[8px] sm:text-[9px] ${activeTab === 'ONE WAY' ? 'text-sky-100' : 'text-gray-500'}`}>Drop-off Only</div>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('ROUND TRIP')}
                className={`px-3 sm:px-5 py-1.5 text-center border-l border-gray-200 transition-all ${
                  activeTab === 'ROUND TRIP'
                    ? 'bg-[#4098ca] text-white font-extrabold'
                    : 'bg-white text-gray-800 hover:bg-gray-50'
                }`}
              >
                <div className="text-[10px] sm:text-xs font-extrabold uppercase">ROUND TRIP</div>
                <div className={`text-[8px] sm:text-[9px] ${activeTab === 'ROUND TRIP' ? 'text-sky-100' : 'text-gray-500'}`}>Return With Same Cab</div>
              </button>
            </div>
          </div>
        )}

        {activeTab === 'AIRPORT' && (
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="inline-flex rounded-lg border border-gray-300 bg-white overflow-hidden shadow-sm">
              <button
                type="button"
                onClick={() => setAirportTripType('DROP TO AIRPORT')}
                className={`px-3 sm:px-5 py-1.5 text-[10px] sm:text-xs font-extrabold uppercase transition-all ${
                  airportTripType === 'DROP TO AIRPORT'
                    ? 'bg-[#4098ca] text-white'
                    : 'bg-white text-gray-800 hover:bg-gray-50 border-r border-gray-200'
                }`}
              >
                DROP TO AIRPORT
              </button>
              <button
                type="button"
                onClick={() => setAirportTripType('PICKUP FROM AIRPORT')}
                className={`px-3 sm:px-5 py-1.5 text-[10px] sm:text-xs font-extrabold uppercase transition-all ${
                  airportTripType === 'PICKUP FROM AIRPORT'
                    ? 'bg-[#4098ca] text-white'
                    : 'bg-white text-gray-800 hover:bg-gray-50'
                }`}
              >
                PICKUP FROM AIRPORT
              </button>
            </div>
          </div>
        )}

        {/* INPUT FIELDS SECTION */}
        <div className="space-y-2 sm:space-y-3">
          
          {/* ================= ONE WAY & ROUND TRIP FIELDS ================= */}
          {(activeTab === 'ONE WAY' || activeTab === 'ROUND TRIP') && (
            <div className="space-y-2 sm:space-y-3">
              {/* FROM & TO CONTAINERS WITH OVERLAPPING VERTICAL SWAP BUTTON */}
              <div className="relative space-y-1.5 sm:space-y-2">
                {/* FROM BOX */}
                <div className="bg-[#f4f9fd] border border-[#d0e4f5] rounded-lg sm:rounded-xl p-2 sm:p-3 relative">
                  <label className="block text-[9px] sm:text-xs font-bold text-[#4098ca] uppercase tracking-wider mb-0.2">
                    FROM
                  </label>
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-2 text-xs sm:text-base">📍</span>
                    <input
                      type="text"
                      value={from}
                      onChange={(e) => {
                        setFrom(e.target.value);
                        setShowFromDropdown(true);
                      }}
                      onFocus={() => setShowFromDropdown(true)}
                      placeholder="Enter Pickup Location"
                      className="w-full text-xs sm:text-sm font-bold text-gray-900 bg-transparent outline-none placeholder-gray-400"
                    />
                  </div>
                  {showFromDropdown && (
                    <ul className="absolute z-50 left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-2xl max-h-52 overflow-y-auto py-1 text-xs text-gray-800">
                      {POPULAR_LOCATIONS.filter(item => item.toLowerCase().includes(from.toLowerCase())).map((loc, idx) => (
                        <li
                          key={idx}
                          onClick={() => {
                            setFrom(loc);
                            setShowFromDropdown(false);
                          }}
                          className="px-3 py-2 hover:bg-sky-50 hover:text-[#4098ca] cursor-pointer font-medium border-b border-gray-100 last:border-none flex items-center gap-2"
                        >
                          <span>📍</span>
                          <span>{loc}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* FLOATING VERTICAL SWAP BUTTON */}
                <div className="absolute right-3 top-[50%] -translate-y-[50%] z-20">
                  <button
                    type="button"
                    onClick={handleSwap}
                    title="Swap Locations"
                    className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white border-2 border-[#4098ca] text-[#4098ca] flex items-center justify-center shadow-md hover:bg-sky-50 transition-transform duration-300 ${
                      isSwapping ? 'rotate-180 scale-110' : ''
                    }`}
                  >
                    <span className="text-xs sm:text-base font-black">⇅</span>
                  </button>
                </div>

                {/* TO BOX */}
                <div className="bg-[#f4f9fd] border border-[#d0e4f5] rounded-lg sm:rounded-xl p-2 sm:p-3 relative">
                  <label className="block text-[9px] sm:text-xs font-bold text-[#4098ca] uppercase tracking-wider mb-0.2">
                    TO
                  </label>
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-2 text-xs sm:text-base">📍</span>
                    <input
                      type="text"
                      value={to}
                      onChange={(e) => {
                        setTo(e.target.value);
                        setShowToDropdown(true);
                      }}
                      onFocus={() => setShowToDropdown(true)}
                      placeholder="Enter Drop Location"
                      className="w-full text-xs sm:text-sm font-bold text-gray-900 bg-transparent outline-none placeholder-gray-400"
                    />
                  </div>
                  {showToDropdown && (
                    <ul className="absolute z-50 left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-2xl max-h-52 overflow-y-auto py-1 text-xs text-gray-800">
                      {POPULAR_LOCATIONS.filter(item => item.toLowerCase().includes(to.toLowerCase())).map((loc, idx) => (
                        <li
                          key={idx}
                          onClick={() => {
                            setTo(loc);
                            setShowToDropdown(false);
                          }}
                          className="px-3 py-2 hover:bg-sky-50 hover:text-[#4098ca] cursor-pointer font-medium border-b border-gray-100 last:border-none flex items-center gap-2"
                        >
                          <span>🎯</span>
                          <span>{loc}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* SINGLE COMBINED ROW FOR DATE, TIME & CAB TYPE */}
              <div className="bg-[#f4f9fd] border border-[#d0e4f5] rounded-lg sm:rounded-xl p-2 sm:p-2.5 flex items-center divide-x divide-[#c2dcf0] shadow-sm">
                
                {/* START DATE */}
                <div 
                  onClick={() => openCalendar(pickupDateRef)}
                  className="flex-1 pr-1.5 sm:pr-3 cursor-pointer relative hover:opacity-80 transition-opacity min-w-0"
                >
                  <label className="block text-[8px] sm:text-[10px] font-extrabold text-[#4098ca] uppercase tracking-wider mb-0.5 pointer-events-none">
                    START DATE
                  </label>
                  <div className="flex items-center gap-1 pointer-events-none truncate">
                    <span className="text-gray-500 text-xs sm:text-base">📅</span>
                    <span className="text-[10px] sm:text-xs md:text-sm font-black text-gray-900 truncate">
                      {formatDateForDisplay(pickupDate)}
                    </span>
                  </div>
                  <input
                    ref={pickupDateRef}
                    type="date"
                    min={getTodayIso()}
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                  />
                </div>

                {/* END DATE (ROUND TRIP ONLY) */}
                {activeTab === 'ROUND TRIP' && (
                  <div 
                    onClick={() => openCalendar(returnDateRef)}
                    className="flex-1 px-1.5 sm:px-3 cursor-pointer relative hover:opacity-80 transition-opacity min-w-0"
                  >
                    <label className="block text-[8px] sm:text-[10px] font-extrabold text-[#4098ca] uppercase tracking-wider mb-0.5 pointer-events-none">
                      END DATE
                    </label>
                    <div className="flex items-center gap-1 pointer-events-none truncate">
                      <span className="text-gray-500 text-xs sm:text-base">📅</span>
                      <span className="text-[10px] sm:text-xs md:text-sm font-black text-gray-900 truncate">
                        {formatDateForDisplay(returnDate)}
                      </span>
                    </div>
                    <input
                      ref={returnDateRef}
                      type="date"
                      min={pickupDate || getTodayIso()}
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                    />
                  </div>
                )}

                {/* PICK UP TIME */}
                <div 
                  onClick={() => openCalendar(pickupTimeRef)}
                  className="flex-1 px-1.5 sm:px-3 cursor-pointer relative hover:opacity-80 transition-opacity min-w-0"
                >
                  <label className="block text-[8px] sm:text-[10px] font-extrabold text-[#4098ca] uppercase tracking-wider mb-0.5 pointer-events-none">
                    TIME
                  </label>
                  <div className="flex items-center gap-1 pointer-events-none truncate">
                    <span className="text-gray-500 text-xs sm:text-base">⏰</span>
                    <span className="text-[10px] sm:text-xs md:text-sm font-black text-gray-900 truncate">
                      {formatTimeForDisplay(pickupTime)}
                    </span>
                  </div>
                  <input
                    ref={pickupTimeRef}
                    type="time"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                  />
                </div>

                {/* CAB TYPE */}
                <div className="flex-1 pl-1.5 sm:pl-3 relative min-w-0">
                  <label className="block text-[8px] sm:text-[10px] font-extrabold text-[#4098ca] uppercase tracking-wider mb-0.5">
                    CAB TYPE
                  </label>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 flex-1 min-w-0">
                      <span className="text-gray-500 text-xs sm:text-base">🚗</span>
                      <select
                        value={cabType}
                        onChange={(e) => setCabType(e.target.value)}
                        className="w-full text-[10px] sm:text-xs md:text-sm font-black text-gray-900 bg-transparent outline-none cursor-pointer py-0 appearance-none truncate"
                      >
                        {CAB_OPTIONS.map((c) => (
                          <option key={c.id} value={c.label}>
                            {c.icon} {c.shortLabel || c.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <span className="text-[#4098ca] text-xs font-extrabold pointer-events-none ml-0.5">∨</span>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ================= LOCAL TAB FIELDS ================= */}
          {activeTab === 'LOCAL' && (
            <div className="space-y-2 sm:space-y-3">
              {/* FROM / CITY BOX */}
              <div className="bg-[#f4f9fd] border border-[#d0e4f5] rounded-lg sm:rounded-xl p-2 sm:p-3 relative">
                <label className="block text-[9px] sm:text-xs font-bold text-[#4098ca] uppercase tracking-wider mb-0.2">
                  FROM / CITY
                </label>
                <div className="flex items-center">
                  <span className="text-gray-400 mr-2 text-xs sm:text-base">📍</span>
                  <input
                    type="text"
                    value={localCity}
                    onChange={(e) => {
                      setLocalCity(e.target.value);
                      setShowLocalDropdown(true);
                    }}
                    onFocus={() => setShowLocalDropdown(true)}
                    placeholder="Enter Pickup Location"
                    className="w-full text-xs sm:text-sm font-bold text-gray-900 bg-transparent outline-none placeholder-gray-400"
                  />
                </div>
                {showLocalDropdown && (
                  <ul className="absolute z-50 left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-2xl max-h-52 overflow-y-auto py-1 text-xs text-gray-800">
                    {POPULAR_LOCATIONS.filter(item => item.toLowerCase().includes(localCity.toLowerCase())).map((loc, idx) => (
                      <li
                        key={idx}
                        onClick={() => {
                          setLocalCity(loc);
                          setShowLocalDropdown(false);
                        }}
                        className="px-3 py-2 hover:bg-sky-50 hover:text-[#4098ca] cursor-pointer font-medium border-b border-gray-100 last:border-none flex items-center gap-2"
                      >
                        <span>🏙️</span>
                        <span>{loc}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* SINGLE COMBINED ROW FOR DATE, TIME & CAB TYPE */}
              <div className="bg-[#f4f9fd] border border-[#d0e4f5] rounded-lg sm:rounded-xl p-2 sm:p-2.5 flex items-center divide-x divide-[#c2dcf0] shadow-sm">
                {/* TRIP DATE */}
                <div 
                  onClick={() => openCalendar(pickupDateRef)}
                  className="flex-1 pr-1.5 sm:pr-3 cursor-pointer relative hover:opacity-80 transition-opacity min-w-0"
                >
                  <label className="block text-[8px] sm:text-[10px] font-extrabold text-[#4098ca] uppercase tracking-wider mb-0.5 pointer-events-none">
                    TRIP DATE
                  </label>
                  <div className="flex items-center gap-1 pointer-events-none truncate">
                    <span className="text-gray-500 text-xs sm:text-base">📅</span>
                    <span className="text-[10px] sm:text-xs md:text-sm font-black text-gray-900 truncate">
                      {formatDateForDisplay(pickupDate)}
                    </span>
                  </div>
                  <input
                    ref={pickupDateRef}
                    type="date"
                    min={getTodayIso()}
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                  />
                </div>

                {/* PICK UP TIME */}
                <div 
                  onClick={() => openCalendar(pickupTimeRef)}
                  className="flex-1 px-1.5 sm:px-3 cursor-pointer relative hover:opacity-80 transition-opacity min-w-0"
                >
                  <label className="block text-[8px] sm:text-[10px] font-extrabold text-[#4098ca] uppercase tracking-wider mb-0.5 pointer-events-none">
                    TIME
                  </label>
                  <div className="flex items-center gap-1 pointer-events-none truncate">
                    <span className="text-gray-500 text-xs sm:text-base">⏰</span>
                    <span className="text-[10px] sm:text-xs md:text-sm font-black text-gray-900 truncate">
                      {formatTimeForDisplay(pickupTime)}
                    </span>
                  </div>
                  <input
                    ref={pickupTimeRef}
                    type="time"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                  />
                </div>

                {/* CAB TYPE */}
                <div className="flex-1 pl-1.5 sm:pl-3 relative min-w-0">
                  <label className="block text-[8px] sm:text-[10px] font-extrabold text-[#4098ca] uppercase tracking-wider mb-0.5">
                    CAB TYPE
                  </label>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 flex-1 min-w-0">
                      <span className="text-gray-500 text-xs sm:text-base">🚗</span>
                      <select
                        value={cabType}
                        onChange={(e) => setCabType(e.target.value)}
                        className="w-full text-[10px] sm:text-xs md:text-sm font-black text-gray-900 bg-transparent outline-none cursor-pointer py-0 appearance-none truncate"
                      >
                        {CAB_OPTIONS.map((c) => (
                          <option key={c.id} value={c.label}>
                            {c.icon} {c.shortLabel || c.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <span className="text-[#4098ca] text-xs font-extrabold pointer-events-none ml-0.5">∨</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= AIRPORT TAB FIELDS ================= */}
          {activeTab === 'AIRPORT' && (
            <div className="space-y-2 sm:space-y-3">
              {/* PICKUP ADDRESS / AIRPORT */}
              <div className="bg-[#f4f9fd] border border-[#d0e4f5] rounded-lg sm:rounded-xl p-2 sm:p-3 relative">
                <label className="block text-[9px] sm:text-xs font-bold text-[#4098ca] uppercase tracking-wider mb-0.2">
                  {airportTripType === 'DROP TO AIRPORT' ? 'PICKUP ADDRESS' : 'PICKUP AIRPORT'}
                </label>
                <div className="flex items-center">
                  <span className="text-gray-400 mr-2 text-xs sm:text-base">📍</span>
                  <input
                    type="text"
                    value={pickupAddress}
                    onChange={(e) => {
                      setPickupAddress(e.target.value);
                      setShowPickupAddressDropdown(true);
                    }}
                    onFocus={() => setShowPickupAddressDropdown(true)}
                    placeholder="Enter Pickup Location"
                    className="w-full text-xs sm:text-sm font-bold text-gray-900 bg-transparent outline-none placeholder-gray-400"
                  />
                </div>
                {showPickupAddressDropdown && (
                  <ul className="absolute z-50 left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-2xl max-h-52 overflow-y-auto py-1 text-xs text-gray-800">
                    {(airportTripType === 'PICKUP FROM AIRPORT' ? AIRPORTS : POPULAR_LOCATIONS)
                      .filter(item => item.toLowerCase().includes(pickupAddress.toLowerCase()))
                      .map((loc, idx) => (
                        <li
                          key={idx}
                          onClick={() => {
                            setPickupAddress(loc);
                            setShowPickupAddressDropdown(false);
                          }}
                          className="px-3 py-2 hover:bg-sky-50 hover:text-[#4098ca] cursor-pointer font-medium border-b border-gray-100 last:border-none flex items-center gap-2"
                        >
                          <span>📍</span>
                          <span>{loc}</span>
                        </li>
                      ))}
                  </ul>
                )}
              </div>

              {/* DROP AIRPORT / ADDRESS */}
              <div className="bg-[#f4f9fd] border border-[#d0e4f5] rounded-lg sm:rounded-xl p-2 sm:p-3 relative">
                <label className="block text-[9px] sm:text-xs font-bold text-[#4098ca] uppercase tracking-wider mb-0.2">
                  {airportTripType === 'DROP TO AIRPORT' ? 'DROP AIRPORT' : 'DROP ADDRESS'}
                </label>
                <div className="flex items-center">
                  <span className="text-gray-400 mr-2 text-xs sm:text-base">📍</span>
                  <input
                    type="text"
                    value={dropAirport}
                    onChange={(e) => {
                      setDropAirport(e.target.value);
                      setShowDropAirportDropdown(true);
                    }}
                    onFocus={() => setShowDropAirportDropdown(true)}
                    placeholder={airportTripType === 'DROP TO AIRPORT' ? "Start typing airport name or city" : "Enter Drop Location"}
                    className="w-full text-xs sm:text-sm font-bold text-gray-900 bg-transparent outline-none placeholder-gray-400"
                  />
                </div>
                {showDropAirportDropdown && (
                  <ul className="absolute z-50 left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-2xl max-h-52 overflow-y-auto py-1 text-xs text-gray-800">
                    {(airportTripType === 'DROP TO AIRPORT' ? AIRPORTS : POPULAR_LOCATIONS)
                      .filter(item => item.toLowerCase().includes(dropAirport.toLowerCase()))
                      .map((loc, idx) => (
                        <li
                          key={idx}
                          onClick={() => {
                            setDropAirport(loc);
                            setShowDropAirportDropdown(false);
                          }}
                          className="px-3 py-2 hover:bg-sky-50 hover:text-[#4098ca] cursor-pointer font-medium border-b border-gray-100 last:border-none flex items-center gap-2"
                        >
                          <span>✈️</span>
                          <span>{loc}</span>
                        </li>
                      ))}
                  </ul>
                )}
              </div>

              {/* SINGLE COMBINED ROW FOR DATE, TIME & CAB TYPE */}
              <div className="bg-[#f4f9fd] border border-[#d0e4f5] rounded-lg sm:rounded-xl p-2 sm:p-2.5 flex items-center divide-x divide-[#c2dcf0] shadow-sm">
                {/* TRIP DATE */}
                <div 
                  onClick={() => openCalendar(pickupDateRef)}
                  className="flex-1 pr-1.5 sm:pr-3 cursor-pointer relative hover:opacity-80 transition-opacity min-w-0"
                >
                  <label className="block text-[8px] sm:text-[10px] font-extrabold text-[#4098ca] uppercase tracking-wider mb-0.5 pointer-events-none">
                    TRIP DATE
                  </label>
                  <div className="flex items-center gap-1 pointer-events-none truncate">
                    <span className="text-gray-500 text-xs sm:text-base">📅</span>
                    <span className="text-[10px] sm:text-xs md:text-sm font-black text-gray-900 truncate">
                      {formatDateForDisplay(pickupDate)}
                    </span>
                  </div>
                  <input
                    ref={pickupDateRef}
                    type="date"
                    min={getTodayIso()}
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                  />
                </div>

                {/* PICK UP TIME */}
                <div 
                  onClick={() => openCalendar(pickupTimeRef)}
                  className="flex-1 px-1.5 sm:px-3 cursor-pointer relative hover:opacity-80 transition-opacity min-w-0"
                >
                  <label className="block text-[8px] sm:text-[10px] font-extrabold text-[#4098ca] uppercase tracking-wider mb-0.5 pointer-events-none">
                    TIME
                  </label>
                  <div className="flex items-center gap-1 pointer-events-none truncate">
                    <span className="text-gray-500 text-xs sm:text-base">⏰</span>
                    <span className="text-[10px] sm:text-xs md:text-sm font-black text-gray-900 truncate">
                      {formatTimeForDisplay(pickupTime)}
                    </span>
                  </div>
                  <input
                    ref={pickupTimeRef}
                    type="time"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                  />
                </div>

                {/* CAB TYPE */}
                <div className="flex-1 pl-1.5 sm:pl-3 relative min-w-0">
                  <label className="block text-[8px] sm:text-[10px] font-extrabold text-[#4098ca] uppercase tracking-wider mb-0.5">
                    CAB TYPE
                  </label>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 flex-1 min-w-0">
                      <span className="text-gray-500 text-xs sm:text-base">🚗</span>
                      <select
                        value={cabType}
                        onChange={(e) => setCabType(e.target.value)}
                        className="w-full text-[10px] sm:text-xs md:text-sm font-black text-gray-900 bg-transparent outline-none cursor-pointer py-0 appearance-none truncate"
                      >
                        {CAB_OPTIONS.map((c) => (
                          <option key={c.id} value={c.label}>
                            {c.icon} {c.shortLabel || c.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <span className="text-[#4098ca] text-xs font-extrabold pointer-events-none ml-0.5">∨</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VALIDATION ERROR NOTICE IF REQUIRED FIELDS MISSING */}
          {showValidationError && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-[11px] sm:text-xs font-bold p-2 rounded-lg text-center">
              ⚠️ Please enter or select pickup & drop locations before booking cab.
            </div>
          )}

          {/* ACTION BUTTON SECTION - ULTRA COMPACT CENTERED BUTTON */}
          <div className="pt-2 sm:pt-3 flex flex-col items-center justify-center text-center">
            <button
              type="button"
              onClick={handleBookWhatsApp}
              className="w-full max-w-md py-2.5 sm:py-3.5 px-6 sm:px-8 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-white font-black text-xs sm:text-base rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95 mx-auto text-center cursor-pointer uppercase tracking-wider"
            >
              <span className="text-base sm:text-lg">💬</span>
              <span>BOOK CAB NOW</span>
            </button>
            <p className="text-[9px] sm:text-xs text-gray-500 font-semibold mt-1.5 flex items-center justify-center gap-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Fastest 24/7 Cab Booking via WhatsApp Direct
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
