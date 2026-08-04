'use client';

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
  cityName?: string;
}

export default function FaqSection({ faqs, cityName }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const processText = (text: string) => {
    if (!cityName) return text;
    return text.replace(/\{city\}/g, cityName).replace(/\{price\}/g, '999');
  };

  return (
    <div className="faq-section">
      {faqs.map((faq, index) => (
        <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
          <button
            className="faq-question"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span>{processText(faq.question)}</span>
            <span className="faq-icon">+</span>
          </button>
          <div className="faq-answer">
            <p>{processText(faq.answer)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
