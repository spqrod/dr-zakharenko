import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import '../styles/footer.css';

function Footer() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (e, hash) => {
    e.preventDefault();
    
    if (window.location.pathname === '/servicios') {
      scrollToService(hash);
    } else {
      navigate(`/servicios${hash}`);
    }
  };

  const scrollToService = (hash) => {
    setTimeout(() => {
      const element = document.getElementById(hash.replace('#', ''));
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
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Dr. Zakharenko</h3>
            <p>{t.footer.slogan}</p>
          </div>
          <div className="footer-column">
            <h3>{t.footer.navigation}</h3>
            <ul>
              <li><Link to="/" onClick={scrollToTop}>{t.header.home}</Link></li>
              <li><Link to="/servicios" onClick={scrollToTop}>{t.header.services}</Link></li>
              <li><Link to="/sobre-nosotros" onClick={scrollToTop}>{t.header.about}</Link></li>
              <li><Link to="/contacto" onClick={scrollToTop}>{t.header.contact}</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>{t.header.services}</h3>
            <ul>
              <li><a href="/servicios#consultas" onClick={(e) => handleServiceClick(e, '#consultas')}>Consultas</a></li>
              <li><a href="/servicios#vacunacion" onClick={(e) => handleServiceClick(e, '#vacunacion')}>Vacunación</a></li>
              <li><a href="/servicios#cirugia" onClick={(e) => handleServiceClick(e, '#cirugia')}>Cirugías</a></li>
              <li><a href="/servicios#laboratorio" onClick={(e) => handleServiceClick(e, '#laboratorio')}>Laboratorio</a></li>
              <li><a href="/servicios#online" onClick={(e) => handleServiceClick(e, '#online')}>Consulta Online</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>{t.footer.legal}</h3>
            <ul>
              <li><Link to="/privacidad" onClick={scrollToTop}>{t.footer.privacy}</Link></li>
              <li><Link to="/terminos" onClick={scrollToTop}>{t.footer.terms}</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Dres. Dmitrii y Valentina Zakharenko. {t.footer.rights}.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
