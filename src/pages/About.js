import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import '../styles/about.css';
import drDmitriiImage from '../images/dr-dmitrii.jpg';
import valentinaImage from '../images/valentina.jpg';
import dresImage from '../images/dres.jpg';

function About() {
  const { t } = useLanguage();

  return (
    <div className="about-page">
      <section className="about-hero" style={{backgroundImage: `linear-gradient(135deg, rgba(44, 95, 126, 0.95) 0%, rgba(26, 58, 77, 0.9) 100%), url(${dresImage})`}}>
        <div className="container">
          <div className="about-hero-content">
            <h1>{t.about.hero.title}</h1>
            <p>{t.about.hero.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="section team-intro-section">
        <div className="container">
          <div className="team-intro-content">
            <h2>{t.about.intro.title}</h2>
            <p>{t.about.intro.text1}</p>
            <p>{t.about.intro.text2}</p>
          </div>
        </div>
      </section>

      <section className="section doctor-section">
        <div className="container">
          <div className="doctor-content">
            <div className="doctor-image-section">
              <img src={drDmitriiImage} alt={t.about.dmitrii.name} className="doctor-image" />
              <div className="doctor-badge">
                <h3>{t.about.dmitrii.name}</h3>
                <p>{t.about.dmitrii.specialty}</p>
              </div>
            </div>

            <div className="doctor-text-section">
              <h2>{t.about.dmitrii.name}</h2>
              <h3>{t.about.dmitrii.specialty}</h3>
              <p>{t.about.dmitrii.bio}</p>
              
              <h4>{t.about.dmitrii.formation}</h4>
              <p>{t.about.dmitrii.formationText}</p>

              <h4>{t.about.dmitrii.experience}</h4>
              <p>{t.about.dmitrii.experienceText}</p>

              <h4>{t.about.dmitrii.ba}</h4>
              <p>{t.about.dmitrii.baText}</p>

              <div className="doctor-specialties">
                <h4>{t.about.dmitrii.specialties}</h4>
                <ul>
                  <li>{t.about.dmitrii.specialty1}</li>
                  <li>{t.about.dmitrii.specialty2}</li>
                  <li>{t.about.dmitrii.specialty3}</li>
                  <li>{t.about.dmitrii.specialty4}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section doctor-section doctor-section-valentina">
        <div className="container">
          <div className="doctor-content doctor-content-reverse">
            <div className="doctor-text-section">
              <h2>{t.about.valentina.name}</h2>
              <h3>{t.about.valentina.specialty}</h3>
              <p>{t.about.valentina.bio}</p>
              
              <h4>{t.about.valentina.formation}</h4>
              <p>{t.about.valentina.formationText}</p>

              <h4>{t.about.valentina.experience}</h4>
              <p>{t.about.valentina.experienceText}</p>

              <h4>{t.about.valentina.ba}</h4>
              <p>{t.about.valentina.baText}</p>

              <div className="doctor-specialties">
                <h4>{t.about.valentina.specialties}</h4>
                <ul>
                  <li>{t.about.valentina.specialty1}</li>
                  <li>{t.about.valentina.specialty2}</li>
                  <li>{t.about.valentina.specialty3}</li>
                  <li>{t.about.valentina.specialty4}</li>
                </ul>
              </div>
            </div>

            <div className="doctor-image-section">
              <img src={valentinaImage} alt={t.about.valentina.name} className="doctor-image" />
              <div className="doctor-badge">
                <h3>{t.about.valentina.name}</h3>
                <p>{t.about.valentina.specialty}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section philosophy-section">
        <div className="container">
          <div className="philosophy-content">
            <h2>{t.about.philosophy.title}</h2>
            <div className="philosophy-text">
              <p>{t.about.philosophy.text1}</p>
              <p>{t.about.philosophy.text2}</p>
              <p>{t.about.philosophy.text3}</p>
              <p>{t.about.philosophy.text4}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section education-section">
        <div className="container">
          <h2 className="section-title">{t.about.education.title}</h2>
          <div className="education-grid">
            <div className="education-card">
              <div className="education-icon">🎓</div>
              <h3>{t.about.education.card1.title}</h3>
              <p className="education-degree">{t.about.education.card1.degree}</p>
              <p className="education-year">{t.about.education.card1.year}</p>
              <p>{t.about.education.card1.description}</p>
            </div>

            <div className="education-card">
              <div className="education-icon">🏥</div>
              <h3>{t.about.education.card2.title}</h3>
              <p className="education-degree">{t.about.education.card2.degree}</p>
              <p className="education-year">{t.about.education.card2.year}</p>
              <p>{t.about.education.card2.description}</p>
            </div>

            <div className="education-card">
              <div className="education-icon">🏠</div>
              <h3>{t.about.education.card3.title}</h3>
              <p className="education-degree">{t.about.education.card3.degree}</p>
              <p className="education-year">{t.about.education.card3.year}</p>
              <p>{t.about.education.card3.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-cta-section">
        <div className="container">
          <div className="about-cta-box">
            <h2>{t.about.cta.title}</h2>
            <p>{t.about.cta.subtitle}</p>
            <Link to="/contacto" className="button button-primary">{t.about.cta.button}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
