import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/footer.css';

function Footer() {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (e, hash) => {
    e.preventDefault();
    
    if (window.location.pathname === '/servicios') {
      // Already on services page, just scroll
      scrollToService(hash);
    } else {
      // Navigate to services page then scroll
      navigate(`/servicios${hash}`);
    }
  };

  const scrollToService = (hash) => {
    setTimeout(() => {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        const headerOffset = 96; // Header height + padding
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
            <p>Equipo de veterinarios especializados en atención a domicilio. Cuidado integral de tus mascotas en la comodidad de tu hogar. Más de 25 años de experiencia combinada.</p>
          </div>
          <div className="footer-column">
            <h3>Enlaces</h3>
            <ul>
              <li><Link to="/" onClick={scrollToTop}>Inicio</Link></li>
              <li><Link to="/servicios" onClick={scrollToTop}>Servicios</Link></li>
              <li><Link to="/sobre-nosotros" onClick={scrollToTop}>Sobre Nosotros</Link></li>
              <li><Link to="/contacto" onClick={scrollToTop}>Contacto</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Servicios</h3>
            <ul>
              <li><a href="/servicios#consultas" onClick={(e) => handleServiceClick(e, '#consultas')}>Consultas</a></li>
              <li><a href="/servicios#vacunacion" onClick={(e) => handleServiceClick(e, '#vacunacion')}>Vacunación</a></li>
              <li><a href="/servicios#cirugia" onClick={(e) => handleServiceClick(e, '#cirugia')}>Cirugías</a></li>
              <li><a href="/servicios#laboratorio" onClick={(e) => handleServiceClick(e, '#laboratorio')}>Laboratorio</a></li>
              <li><a href="/servicios#online" onClick={(e) => handleServiceClick(e, '#online')}>Consulta Online</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li><Link to="/privacidad" onClick={scrollToTop}>Política de Privacidad</Link></li>
              <li><Link to="/terminos" onClick={scrollToTop}>Términos de Servicio</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Dres. Dmitrii y Valentina Zakharenko. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
