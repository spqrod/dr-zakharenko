import React from 'react';
import { useLanguage } from '../LanguageContext';
import '../styles/contact.css';
import contactBackgroundImage from '../images/contact-background.jpg';

function Contact() {
  const { t } = useLanguage();

  return (
    <div className="contact-page">
      <section className="contact-hero" style={{backgroundImage: `linear-gradient(135deg, rgba(44, 95, 126, 0.95) 0%, rgba(26, 58, 77, 0.9) 100%), url(${contactBackgroundImage})`}}>
        <div className="container">
          <div className="contact-hero-content">
            <h1>{t.contact.hero.title}</h1>
            <p>{t.contact.hero.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="section contact-methods-section">
        <div className="container">
          <h2 className="section-title">{t.contact.methods.title}</h2>
          
          <div className="contact-methods-grid">
            <a href="tel:+541137738928" className="contact-method-card">
              <div className="contact-method-icon phone-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <h3>{t.contact.methods.call}</h3>
              <p className="contact-method-number">+54 11 3773 8928</p>
            </a>

            <a href="https://wa.me/541137738928" target="_blank" rel="noopener noreferrer" className="contact-method-card">
              <div className="contact-method-icon whatsapp-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <h3>{t.contact.methods.whatsapp}</h3>
              <p className="contact-method-number">+54 11 3773 8928</p>
            </a>

            <a href="https://t.me/Vet_Help" target="_blank" rel="noopener noreferrer" className="contact-method-card">
              <div className="contact-method-icon telegram-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
              <h3>{t.contact.methods.telegram}</h3>
              <p className="contact-method-number">@Vet_Help</p>
            </a>
          </div>
        </div>
      </section>

      <section className="section contact-info-section">
        <div className="container">
          <div className="contact-info-content">
            <h2>{t.contact.hours.title}</h2>
            <div className="schedule-grid">
              <div className="schedule-item">
                <h4>{t.contact.hours.weekdays}</h4>
                <p>{t.contact.hours.weekdaysTime}</p>
              </div>
              <div className="schedule-item">
                <h4>{t.contact.hours.weekends}</h4>
                <p>{t.contact.hours.weekendsTime}</p>
              </div>
              <div className="schedule-item">
                <h4>{t.contact.hours.sundays}</h4>
                <p>{t.contact.hours.sundaysTime}</p>
              </div>
            </div>
            <div className="info-note">
              <p><strong>{t.contact.hours.emergency}</strong></p>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-location-section">
        <div className="container">
          <div className="location-content">
            <h2>{t.contact.location.title}</h2>
            <p>{t.contact.location.text}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
