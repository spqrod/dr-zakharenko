import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import '../styles/services.css';
import consultaImage from '../images/consulta.jpg';
import vacunacionImage from '../images/vacunacion.jpg';
import analysisImage from '../images/analysis.jpg';
import onlineConsultationImage from '../images/online-consultation.jpg';
import ultrasoundImage from '../images/ultrasound.png';
import operationImage from '../images/operation.png';

function Services() {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.replace('#', ''));
        if (element) {
          const headerOffset = 96;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 150);
    }
  }, [location]);

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1>{t.services.hero.title}</h1>
            <p>{t.services.hero.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="section services-list-section">
        <div className="container">
          <div className="services-list">
            <div className="service-item" id="consultas">
              <div className="service-item-image">
                <img src={consultaImage} alt={t.services.consultation.title} />
                <div className="service-item-icon">🩺</div>
              </div>
              <div className="service-item-content">
                <h3>{t.services.consultation.title}</h3>
                <p>{t.services.consultation.description}</p>
                <p><strong>{t.services.consultation.includes}</strong></p>
                <ul className="service-item-list">
                  <li>{t.services.consultation.item1}</li>
                  <li>{t.services.consultation.item2}</li>
                  <li>{t.services.consultation.item3}</li>
                  <li>{t.services.consultation.item4}</li>
                </ul>
              </div>
            </div>

            <div className="service-item" id="vacunacion">
              <div className="service-item-image">
                <img src={vacunacionImage} alt={t.services.vaccination.title} />
                <div className="service-item-icon">💉</div>
              </div>
              <div className="service-item-content">
                <h3>{t.services.vaccination.title}</h3>
                <p>{t.services.vaccination.description}</p>
                <p><strong>{t.services.vaccination.includes}</strong></p>
                <ul className="service-item-list">
                  <li>{t.services.vaccination.item1}</li>
                  <li>{t.services.vaccination.item2}</li>
                  <li>{t.services.vaccination.item3}</li>
                  <li>{t.services.vaccination.item4}</li>
                </ul>
              </div>
            </div>

            <div className="service-item" id="laboratorio">
              <div className="service-item-image">
                <img src={analysisImage} alt={t.services.laboratory.title} />
                <div className="service-item-icon">🔬</div>
              </div>
              <div className="service-item-content">
                <h3>{t.services.laboratory.title}</h3>
                <p>{t.services.laboratory.description}</p>
                <p><strong>{t.services.laboratory.includes}</strong></p>
                <ul className="service-item-list">
                  <li>{t.services.laboratory.item1}</li>
                  <li>{t.services.laboratory.item2}</li>
                  <li>{t.services.laboratory.item3}</li>
                  <li>{t.services.laboratory.item4}</li>
                </ul>
              </div>
            </div>

            <div className="service-item" id="online">
              <div className="service-item-image">
                <img src={onlineConsultationImage} alt={t.services.online.title} />
                <div className="service-item-icon">💻</div>
              </div>
              <div className="service-item-content">
                <h3>{t.services.online.title}</h3>
                <p>{t.services.online.description}</p>
                <p><strong>{t.services.online.includes}</strong></p>
                <ul className="service-item-list">
                  <li>{t.services.online.item1}</li>
                  <li>{t.services.online.item2}</li>
                  <li>{t.services.online.item3}</li>
                  <li>{t.services.online.item4}</li>
                </ul>
              </div>
            </div>

            <div className="service-item" id="ecografia">
              <div className="service-item-image">
                <img src={ultrasoundImage} alt={t.services.ultrasound.title} />
                <div className="service-item-icon">📡</div>
              </div>
              <div className="service-item-content">
                <h3>{t.services.ultrasound.title}</h3>
                <p>{t.services.ultrasound.description}</p>
                <p><strong>{t.services.ultrasound.includes}</strong></p>
                <ul className="service-item-list">
                  <li>{t.services.ultrasound.item1}</li>
                  <li>{t.services.ultrasound.item2}</li>
                  <li>{t.services.ultrasound.item3}</li>
                  <li>{t.services.ultrasound.item4}</li>
                </ul>
              </div>
            </div>

            <div className="service-item" id="cirugia">
              <div className="service-item-image">
                <img src={operationImage} alt={t.services.surgery.title} />
                <div className="service-item-icon">✂️</div>
              </div>
              <div className="service-item-content">
                <h3>{t.services.surgery.title}</h3>
                <p>{t.services.surgery.description}</p>
                <p><strong>{t.services.surgery.includes}</strong></p>
                <ul className="service-item-list">
                  <li>{t.services.surgery.item1}</li>
                  <li>{t.services.surgery.item2}</li>
                  <li>{t.services.surgery.item3}</li>
                  <li>{t.services.surgery.item4}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-cta">
        <div className="container">
          <div className="cta-box">
            <h2>{t.services.cta.title}</h2>
            <p>{t.services.cta.subtitle}</p>
            <Link to="/contacto" className="button button-primary">{t.services.cta.button}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
