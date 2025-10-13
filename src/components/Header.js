import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

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
      // Already on contact page, just scroll
      scrollToContactMethods();
    } else {
      // Navigate to contact page then scroll
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
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo" onClick={handleLogoClick}>
          Dr. Zakharenko
        </Link>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
          <NavLink to="/" onClick={closeMenu}>Inicio</NavLink>
          <NavLink to="/servicios" onClick={closeMenu}>Servicios</NavLink>
          <NavLink to="/sobre-nosotros" onClick={closeMenu}>Sobre Nosotros</NavLink>
          <NavLink to="/contacto" onClick={closeMenu}>Contacto</NavLink>
          <a href="/contacto#contact-methods" className="button header-button" onClick={handleAgendarClick}>
            Agendar Consulta
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
