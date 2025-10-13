import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import '../styles/header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleAgendarClick = (e) => {
    e.preventDefault();
    closeMenu();
    
    if (window.location.pathname === '/contacto') {
      scrollToContactMethods();
    } else {
      navigate('/contacto');
      setTimeout(() => {
        scrollToContactMethods();
      }, 100);
    }
  };

  const scrollToContactMethods = () => {
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
  };

  const handleLogoClick = (e) => {
    closeMenu();
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLanguageChange = (code, e) => {
    e.preventDefault();
    e.stopPropagation();
    setLanguage(code);
    setIsLangOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo" onClick={handleLogoClick}>
          Dr. Zakharenko
        </Link>

        <div className="hamburger-container">
          <input 
            type="checkbox" 
            className="hamburger-checkbox" 
            id="hamburger-checkbox"
            checked={isMenuOpen}
            onChange={toggleMenu}
          />
          <label className="hamburger-icon" htmlFor="hamburger-checkbox">
            <span className="hamburger-line one"></span>
            <span className="hamburger-line two"></span>
            <span className="hamburger-line three"></span>
          </label>
        </div>

        <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="header-menu-list">
            <li className="header-menu-item visible-mobile-only">
              <NavLink to="/" onClick={closeMenu}>{t.header.home}</NavLink>
            </li>
            <li className="header-menu-item">
              <NavLink to="/servicios" onClick={closeMenu}>{t.header.services}</NavLink>
            </li>
            <li className="header-menu-item">
              <NavLink to="/sobre-nosotros" onClick={closeMenu}>{t.header.about}</NavLink>
            </li>
            <li className="header-menu-item">
              <NavLink to="/contacto" onClick={closeMenu}>{t.header.contact}</NavLink>
            </li>
          </ul>
          <div className="language-switcher" onMouseDown={(e) => e.preventDefault()}>
            <button 
              className="language-button" 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsLangOpen(!isLangOpen);
              }}
              onMouseDown={(e) => e.preventDefault()}
            >
              <span className="language-icon">🌍</span>
              {languages.find(lang => lang.code === language)?.name}
              <span className="language-arrow">▼</span>
            </button>
            {isLangOpen && (
              <div className="language-dropdown" onClick={(e) => e.stopPropagation()} onMouseDown={(e) => e.preventDefault()}>
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    className={`language-option ${language === lang.code ? 'active' : ''}`}
                    onClick={(e) => handleLanguageChange(lang.code, e)}
                    onMouseDown={(e) => e.preventDefault()}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          <a href="/contacto#contact-methods" className="button header-button desktop-only" onClick={handleAgendarClick}>
            {t.header.schedule}
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
