interface CtaBannerProps {
  title: string;
  subtitle?: string;
  whatsappMessage?: string;
}

export default function CtaBanner({ title, subtitle, whatsappMessage = 'Hi RS Travel, I want to book a cab' }: CtaBannerProps) {
  const waLink = `https://wa.me/917979877450?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="cta-banner">
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
      <div className="cta-buttons">
        <a href="tel:+917979877450" className="btn-dark">
          📞 Call +91 79798 77450
        </a>
        <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-white" aria-label="Book a cab with RS Travel on WhatsApp now">
          💬 WhatsApp Now
        </a>
        <a href="mailto:info@rstravels.com" className="btn-dark">
          ✉️ info@rstravels.com
        </a>
      </div>
    </div>
  );
}
