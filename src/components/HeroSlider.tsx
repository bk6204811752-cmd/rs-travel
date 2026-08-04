"use client";

import { useState, useEffect, useCallback } from 'react';

import Image from 'next/image';

const images = [
  '/background/rsbg1.webp?v=2',
  '/background/rsbg2.webp?v=2',
  '/background/rsbg3.webp?v=2',
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      overflow: 'hidden',
      background: 'var(--dark)',
      contain: 'strict',
    }}>
      {images.map((src, index) => (
        <div 
          key={src}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: currentIndex === index ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out',
            willChange: index === currentIndex || index === (currentIndex + 1) % images.length ? 'opacity' : 'auto',
            contain: 'strict',
          }}
        >
          <Image
            src={src}
            alt={`RS Travel - Best Cab Service in Jamshedpur Tata Ranchi - Fleet ${index + 1}`}
            fill
            quality={30}
            priority={index === 0}
            loading={index === 0 ? 'eager' : 'lazy'}
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
          />
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'linear-gradient(to bottom, rgba(2, 6, 23, 0.55) 0%, rgba(2, 6, 23, 0.85) 70%, rgba(2, 6, 23, 0.98) 100%)',
              zIndex: 1
            }} 
          />
        </div>
      ))}
    </div>
  );
}

