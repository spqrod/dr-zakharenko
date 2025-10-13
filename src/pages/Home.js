import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import '../styles/home.css';
import drDmitriiImage from '../images/dr-dmitrii.jpg';
import valentinaImage from '../images/valentina.jpg';
import consultaImage from '../images/consulta.jpg';
import vacunacionImage from '../images/vacunacion.jpg';
import analysisImage from '../images/analysis.jpg';

function Home() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [counts, setCounts] = useState({  
    experience: 9,
    pets: 25200,
    satisfaction: 68
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const currentRef = statsRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2500;
    const steps = 100;
    const stepDuration = duration / steps;

    const targets = {
      experience: 13,
      pets: 36000,
      satisfaction: 98
    };

    const starts = {
      experience: Math.floor(targets.experience * 0.7),
      pets: Math.floor(targets.pets * 0.7),
      satisfaction: Math.floor(targets.satisfaction * 0.7)
    };

    let currentStep = 0;

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const interval = setInterval(() => {
      currentStep++;
      const progress = easeOutCubic(currentStep / steps);

      setCounts({
        experience: Math.floor(starts.experience + (targets.experience - starts.experience) * progress),
        pets: Math.floor(starts.pets + (targets.pets - starts.pets) * progress),
        satisfaction: Math.floor(starts.satisfaction + (targets.satisfaction - starts.satisfaction) * progress)
      });

      if (currentStep >= steps) {
        setCounts(targets);
        clearInterval(interval);
      }
    }, stepDuration);
  };

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleAgendarClick = (e) => {
    e.preventDefault();
    navigate('/contacto');
    setTimeout(() => {
      const element = document.querySelector('.contact-methods-grid');
      if (element) {
        const headerOffset = 96;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            {t.home.hero.badge}
          </div>
          <h1 className="hero-title">{t.home.hero.title}</h1>
          <p className="hero-subtitle">{t.home.hero.subtitle}</p>
          <div className="hero-buttons">
            <a href="/contacto#contact-methods" className="button button-primary" onClick={handleAgendarClick}>{t.home.hero.scheduleBtn}</a>
            <Link to="/servicios" className="button button-secondary">{t.home.hero.servicesBtn}</Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="trust-bar" ref={statsRef}>
        <div className="container">
          <div className="trust-stats">
            <div className="trust-stat">
              <h3>{counts.experience}+</h3>
              <p>{t.home.stats.experience}</p>
            </div>
            <div className="trust-stat">
              <h3>{formatNumber(counts.pets)}+</h3>
              <p>{t.home.stats.pets}</p>
            </div>
            <div className="trust-stat">
              <h3>{counts.satisfaction}%</h3>
              <p>{t.home.stats.satisfaction}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <h2 className="section-title">{t.home.services.title}</h2>
          <p className="section-subtitle">{t.home.services.subtitle}</p>
          
          <div className="services-grid">
            <div className="service-card">
              <img src={consultaImage} alt={t.home.services.consultation.title} className="service-card-image" />
              <div className="service-card-content">
                <div className="service-icon">🩺</div>
                <h3>{t.home.services.consultation.title}</h3>
                <p>{t.home.services.consultation.description}</p>
                <Link to="/servicios" className="service-link">{t.home.services.viewAll.split(' ')[0]} {t.home.services.viewAll.split(' ')[1]} →</Link>
              </div>
            </div>

            <div className="service-card">
              <img src={vacunacionImage} alt={t.home.services.vaccination.title} className="service-card-image" />
              <div className="service-card-content">
                <div className="service-icon">💉</div>
                <h3>{t.home.services.vaccination.title}</h3>
                <p>{t.home.services.vaccination.description}</p>
                <Link to="/servicios" className="service-link">{t.home.services.viewAll.split(' ')[0]} {t.home.services.viewAll.split(' ')[1]} →</Link>
              </div>
            </div>

            <div className="service-card">
              <img src={analysisImage} alt={t.home.services.analysis.title} className="service-card-image" />
              <div className="service-card-content">
                <div className="service-icon">🔬</div>
                <h3>{t.home.services.analysis.title}</h3>
                <p>{t.home.services.analysis.description}</p>
                <Link to="/servicios" className="service-link">{t.home.services.viewAll.split(' ')[0]} {t.home.services.viewAll.split(' ')[1]} →</Link>
              </div>
            </div>
          </div>

          <div className="services-cta-button">
            <Link to="/servicios" className="button button-primary">{t.home.services.viewAll}</Link>
          </div>
        </div>
      </section>

      {/* About Section - Dr. Dmitrii */}
      <section className="section about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-image-wrapper">
              <img src={drDmitriiImage} alt={t.home.team.dmitrii.name} className="about-image-main about-image-dmitrii" />
              <div className="about-badge">
                <h4>13+</h4>
                <p>{t.home.team.yearsExp}</p>
              </div>
            </div>

            <div className="about-text">
              <p className="subtitle">{t.home.team.subtitle}</p>
              <h2>{t.home.team.dmitrii.name}</h2>
              <p>{t.home.team.dmitrii.bio1}</p>
              <p>{t.home.team.dmitrii.bio2}</p>
              
              <div className="about-features">
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span className="feature-text">{t.home.team.dmitrii.feature1}</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span className="feature-text">{t.home.team.dmitrii.feature2}</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span className="feature-text">{t.home.team.dmitrii.feature3}</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span className="feature-text">{t.home.team.dmitrii.feature4}</span>
                </div>
              </div>

              <Link to="/sobre-nosotros" className="button button-primary">{t.home.team.knowMore}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Dr. Valentina */}
      <section className="section about-section about-section-valentina">
        <div className="container">
          <div className="about-content about-content-reverse">
            <div className="about-text">
              <p className="subtitle">{t.home.team.subtitle}</p>
              <h2>{t.home.team.valentina.name}</h2>
              <p>{t.home.team.valentina.bio1}</p>
              <p>{t.home.team.valentina.bio2}</p>
              
              <div className="about-features">
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span className="feature-text">{t.home.team.valentina.feature1}</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span className="feature-text">{t.home.team.valentina.feature2}</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span className="feature-text">{t.home.team.valentina.feature3}</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span className="feature-text">{t.home.team.valentina.feature4}</span>
                </div>
              </div>

              <Link to="/sobre-nosotros" className="button button-primary">{t.home.team.knowMore}</Link>
            </div>

            <div className="about-image-wrapper">
              <img src={valentinaImage} alt={t.home.team.valentina.name} className="about-image-main" />
              <div className="about-badge">
                <h4>13+</h4>
                <p>{t.home.team.yearsExp}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">{t.home.testimonials.title}</h2>
          <p className="section-subtitle">{t.home.testimonials.subtitle}</p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">{t.home.testimonials.testimonial1}</p>
              <div className="testimonial-author">
                <img src="https://i.pravatar.cc/150?img=5" alt={t.home.testimonials.client1} className="testimonial-avatar" />
                <div className="testimonial-info">
                  <h4>{t.home.testimonials.client1}</h4>
                  <p>{t.home.testimonials.pet1}</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">{t.home.testimonials.testimonial2}</p>
              <div className="testimonial-author">
                <img src="https://i.pravatar.cc/150?img=33" alt={t.home.testimonials.client2} className="testimonial-avatar" />
                <div className="testimonial-info">
                  <h4>{t.home.testimonials.client2}</h4>
                  <p>{t.home.testimonials.pet2}</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">{t.home.testimonials.testimonial3}</p>
              <div className="testimonial-author">
                <img src="https://i.pravatar.cc/150?img=10" alt={t.home.testimonials.client3} className="testimonial-avatar" />
                <div className="testimonial-info">
                  <h4>{t.home.testimonials.client3}</h4>
                  <p>{t.home.testimonials.pet3}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>{t.home.contact.title}</h2>
            <p>{t.home.contact.subtitle}</p>
            
            <div className="contact-info-grid">
              <a href="tel:+541137738928" className="contact-info-item contact-info-link">
                <div className="icon">📞</div>
                <h4>{t.home.contact.call}</h4>
                <p>+54 11 3773 8928</p>
              </a>
              <a href="https://wa.me/541137738928" target="_blank" rel="noopener noreferrer" className="contact-info-item contact-info-link">
                <div className="icon whatsapp-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <h4>{t.home.contact.whatsapp}</h4>
                <p>+54 11 3773 8928</p>
              </a>
              <a href="https://t.me/Vet_Help" target="_blank" rel="noopener noreferrer" className="contact-info-item contact-info-link">
                <div className="icon telegram-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                <h4>{t.home.contact.telegram}</h4>
                <p>@Vet_Help</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
