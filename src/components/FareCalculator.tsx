'use client';

import { useState } from 'react';
import { fleet } from '@/lib/fleet';

export default function FareCalculator() {
  const [km, setKm] = useState<number | ''>('');
  const [vehicleSlug, setVehicleSlug] = useState<string>(fleet[0].slug);
  const [tripType, setTripType] = useState<string>('oneway');
  const [days, setDays] = useState<number>(1);

  const selectedVehicle = fleet.find(v => v.slug === vehicleSlug) || fleet[0];

  // Calculation Logic
  const distance = Number(km) || 0;
  
  let effectiveKm = distance;
  let minimumNote = '';

  // Standard Indian taxi rule: Round trip has a minimum billing of 250km per day
  if (tripType === 'round') {
    const minKm = 250 * days;
    if (distance > 0 && distance < minKm) {
      effectiveKm = minKm;
      minimumNote = `* Minimum ${minKm} km billing applied for ${days} day(s) round trip.`;
    }
    // If round trip, and they enter total km, we calculate on total km. If they enter one-way distance to location, we might need * 2, but we'll assume they enter 'Total Expected Km'.
  }

  const estimatedFare = effectiveKm * selectedVehicle.perKmRate;

  // Driver allowance (usually extra per day for outstation)
  const driverAllowance = tripType === 'round' ? 300 * days : 0;
  
  const totalEstimate = estimatedFare + driverAllowance;

  return (
    <div className="glass-card zoom-animation" style={{ marginTop: '2.5rem', marginBottom: '2.5rem', border: '1px solid var(--primary)' }}>
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', color: '#0f172a', marginBottom: '0.25rem' }}>
          <span className="gold-text">Instant Fare</span> Calculator
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
          Estimate your trip cost based on km, vehicle, and service type
        </p>
      </div>

      <div className="booking-form-modern">
        <div className="form-group-modern">
          <label htmlFor="calc-distance">Total Distance (in Km)</label>
          <input
            id="calc-distance"
            type="number"
            min="1"
            placeholder="e.g. 150"
            value={km}
            onChange={(e) => setKm(e.target.value === '' ? '' : parseInt(e.target.value))}
          />
        </div>

        <div className="form-group-modern">
          <label htmlFor="calc-vehicle">Select Vehicle</label>
          <select id="calc-vehicle" value={vehicleSlug} onChange={(e) => setVehicleSlug(e.target.value)}>
            {fleet.map(v => (
              <option key={v.slug} value={v.slug}>
                {v.shortName} (₹{v.perKmRate}/km)
              </option>
            ))}
          </select>
        </div>

        <div className="form-group-modern">
          <label htmlFor="calc-service">Service Type</label>
          <select id="calc-service" value={tripType} onChange={(e) => setTripType(e.target.value)}>
            <option value="oneway">One Way Drop</option>
            <option value="round">Round Trip / Outstation</option>
          </select>
        </div>

        {tripType === 'round' && (
          <div className="form-group-modern">
            <label htmlFor="calc-days">Trip Duration (Days)</label>
            <input
              id="calc-days"
              type="number"
              min="1"
              value={days}
              onChange={(e) => setDays(parseInt(e.target.value) || 1)}
            />
          </div>
        )}
      </div>

      {distance > 0 && (
        <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(249, 115, 22, 0.06)', borderRadius: '16px', border: '1px dashed rgba(249, 115, 22, 0.3)', textAlign: 'center' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Estimated Fare</p>
          <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.5rem' }}>
            ₹{totalEstimate.toLocaleString()}
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', fontSize: '0.8rem', color: '#475569' }}>
            <span>🚗 {selectedVehicle.shortName} (₹{selectedVehicle.perKmRate}/km)</span>
            <span>🛣️ {effectiveKm} km billed</span>
            {driverAllowance > 0 && <span>👨‍✈️ Driver Allowance: ₹{driverAllowance}</span>}
          </div>
          
          {minimumNote && (
            <p style={{ fontSize: '0.75rem', color: '#f97316', marginTop: '0.75rem' }}>{minimumNote}</p>
          )}
          <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>* Excludes Tolls, State Tax & Parking which are extra as actuals.</p>

          <div style={{ marginTop: '1.25rem' }}>
            <a href={`https://wa.me/917979877450?text=Hi%20RS%20Travel,%20I%20used%20the%20fare%20calculator.%20My%20expected%20fare%20for%20${distance}km%20in%20a%20${selectedVehicle.shortName}%20is%20%E2%82%B9${totalEstimate}.%20I%20want%20to%20book%20this.`} target="_blank" rel="noreferrer" className="btn-modern-primary" style={{ padding: '0.75rem 2rem' }}>
              Confirm & Book This Fare
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
