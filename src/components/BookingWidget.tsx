'use client';

import { useState } from 'react';

interface BookingWidgetProps {
  defaultFrom?: string;
  defaultTo?: string;
  cityName?: string;
}

export default function BookingWidget({ defaultFrom = '', defaultTo = '', cityName = '' }: BookingWidgetProps) {
  const [activeTab, setActiveTab] = useState('one-way');
  const [from, setFrom] = useState(defaultFrom);
  const [to, setTo] = useState(defaultTo);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [cabType, setCabType] = useState('sedan');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const tabs = [
    { id: 'one-way', label: '🚗 One Way' },
    { id: 'round-trip', label: '🔄 Round Trip' },
    { id: 'local', label: '🏙️ Local' },
    { id: 'airport', label: '✈️ Airport' },
  ];

  const handleBookWhatsApp = () => {
    const tripType = tabs.find(t => t.id === activeTab)?.label || 'One Way';
    const message = `Hi RS Travel, I want to book a cab.\n\n` +
      `🚖 Trip Type: ${tripType}\n` +
      `📍 From: ${from || 'Not specified'}\n` +
      `📍 To: ${to || 'Not specified'}\n` +
      `📅 Date: ${date || 'Not specified'}\n` +
      `⏰ Time: ${time || 'Not specified'}\n` +
      `🚗 Cab Type: ${cabType}\n` +
      `👤 Name: ${name || 'Not specified'}\n` +
      `📞 Phone: ${phone || 'Not specified'}`;
    
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/917979877450?text=${encoded}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const tripTypeMap: Record<string, string> = {
      'one-way': 'One Way',
      'round-trip': 'Round Trip',
      'local': 'Local',
      'airport': 'Airport'
    };
    
    const cabTypeMap: Record<string, string> = {
      'hatchback': 'Hatchback',
      'sedan': 'Sedan',
      'suv': 'SUV',
      'innova': 'Innova',
      'crysta': 'Innova Crysta',
      'tempo': 'Tempo Traveller'
    };
    
    // Send dual background POST to deployed Google Apps Script Web App URL
    const scriptUrl = 'https://script.google.com/macros/s/AKfycby1dsCy26pkzWN5UyXCot1QN1-WDZLmIVpDN1M3ASAhvdDe5MRoY2LePRIipj7AJGj2Dg/exec';
    try {
      fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tripType: tripTypeMap[activeTab] || 'One Way',
          cabType: cabTypeMap[cabType] || 'Sedan',
          from,
          to,
          date,
          time,
          name,
          phone
        })
      }).catch(() => {});
    } catch {
      // ignore network errors
    }

    // Create a dynamic hidden iframe and form to bypass opaque fetch restrictions
    const iframeName = 'hidden_iframe_' + Date.now();
    const iframe = document.createElement('iframe');
    iframe.name = iframeName;
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    const formElement = document.createElement('form');
    formElement.action = 'https://docs.google.com/forms/d/e/1FAIpQLSedFpbkM1HpFy9tGVtkdM0tP84e6p8_nmYuuU4OT_kV798CzA/formResponse';
    formElement.method = 'POST';
    formElement.target = iframeName;

    const appendInput = (name: string, value: string) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value;
      formElement.appendChild(input);
    };

    appendInput('entry.2079591145', tripTypeMap[activeTab] || 'One Way');
    appendInput('entry.801087277', cabTypeMap[cabType] || 'Sedan');
    appendInput('entry.1817864103', from);
    appendInput('entry.1945641677', to);
    appendInput('entry.1136777', date);
    appendInput('entry.1121605275', time);
    appendInput('entry.239581321', name);
    appendInput('entry.1565811072', phone);

    document.body.appendChild(formElement);
    
    iframe.onload = () => {
      setSubmitSuccess(true);
      setIsSubmitting(false);
      
      setName('');
      setPhone('');
      setFrom('');
      setTo('');
      setTimeout(() => setSubmitSuccess(false), 3000);

      setTimeout(() => {
        if (document.body.contains(formElement)) document.body.removeChild(formElement);
        if (document.body.contains(iframe)) document.body.removeChild(iframe);
      }, 500);
    };

    formElement.submit();

    // Fallback if cross-origin iframe onload gets blocked by browser policies
    setTimeout(() => {
      if (document.body.contains(iframe)) {
        setSubmitSuccess(true);
        setIsSubmitting(false);
        
        setName('');
        setPhone('');
        setFrom('');
        setTo('');
        setTimeout(() => setSubmitSuccess(false), 3000);

        if (document.body.contains(formElement)) document.body.removeChild(formElement);
        if (document.body.contains(iframe)) document.body.removeChild(iframe);
      }
    }, 4000);
  };

  return (
    <div className="booking-widget">
      <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
        <h2 style={{ fontSize: 'clamp(1.2rem, 4vw, 1.6rem)', fontWeight: 800, color: '#f8fafc', marginBottom: '0.15rem' }}>
          Book Your Cab <span className="gold-text">Now</span>
        </h2>
        <p style={{ fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', color: 'var(--text-secondary)' }}>
          Instant confirmation • 24/7 Service • Verified Cabs
        </p>
      </div>

      {submitSuccess ? (
        <div style={{ textAlign: 'center', padding: '2rem 1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '1rem', border: '1px solid rgba(16, 185, 129, 0.2)', marginTop: '2rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem', animation: 'pulse 2s infinite' }}>🎉</div>
          <h3 style={{ fontSize: '1.25rem', color: '#10b981', marginBottom: '0.5rem', fontWeight: 'bold' }}>Booking Request Received!</h3>
          <p style={{ color: '#f8fafc', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            Thank you for choosing RS Travel! We have received your booking request and our team will contact you shortly to confirm all details.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="booking-form-modern">
            <div className="form-group-modern">
              <label htmlFor="booking-trip-type">Trip Type</label>
              <select id="booking-trip-type" value={activeTab} onChange={e => setActiveTab(e.target.value)}>
                {tabs.map(tab => (
                  <option key={tab.id} value={tab.id}>{tab.label}</option>
                ))}
              </select>
            </div>
            <div className="form-group-modern">
              <label htmlFor="booking-cab-type">Cab Type</label>
              <select id="booking-cab-type" value={cabType} onChange={e => setCabType(e.target.value)}>
                <option value="hatchback">Hatchback (4 seater)</option>
                <option value="sedan">Sedan (4 seater)</option>
                <option value="suv">SUV / Ertiga (6 seater)</option>
                <option value="innova">Innova (6-7 seater)</option>
                <option value="crysta">Innova Crysta (7 seater)</option>
                <option value="tempo">Tempo Traveller (12 seater)</option>
              </select>
            </div>
            <div className="form-group-modern">
              <label htmlFor="booking-pickup">Pickup Location</label>
              <input
                id="booking-pickup"
                type="text"
                required
                placeholder={`e.g. Sonari, or ${cityName || 'City'}`}
                value={from}
                onChange={e => setFrom(e.target.value)}
              />
            </div>
            <div className="form-group-modern">
              <label htmlFor="booking-drop">Drop Location</label>
              <input
                id="booking-drop"
                type="text"
                required
                placeholder="e.g. Hotel, or Destination"
                value={to}
                onChange={e => setTo(e.target.value)}
              />
            </div>
            <div className="form-group-modern">
              <label htmlFor="booking-date">Pickup Date</label>
              <input
                id="booking-date"
                type="date"
                required
                value={date}
                onChange={e => setDate(e.target.value)}
              />
            </div>
            <div className="form-group-modern">
              <label htmlFor="booking-time">Pickup Time</label>
              <input
                id="booking-time"
                type="time"
                required
                value={time}
                onChange={e => setTime(e.target.value)}
              />
            </div>
            <div className="form-group-modern">
              <label htmlFor="booking-name">Your Name</label>
              <input
                id="booking-name"
                type="text"
                required
                placeholder="Enter your full name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="form-group-modern">
              <label htmlFor="booking-phone">Phone Number</label>
              <input
                id="booking-phone"
                type="tel"
                required
                placeholder="10-digit mobile number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                inputMode="numeric"
              />
            </div>
          </div>

          <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.75rem', flexDirection: 'column' }}>
            <button type="submit" disabled={isSubmitting} className="btn-modern-primary" style={{ justifyContent: 'center', width: '100%', cursor: 'pointer', border: 'none' }}>
              <span>{isSubmitting ? 'Submitting...' : '📝 Submit Booking Request'}</span>
            </button>
            <button type="button" className="btn-modern-whatsapp pulse-animation" onClick={handleBookWhatsApp} style={{ justifyContent: 'center', width: '100%', cursor: 'pointer', border: 'none' }}>
              <span>💬 Book on WhatsApp</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
