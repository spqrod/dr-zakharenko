import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/services.css';
import consultaImage from '../images/consulta.jpg';
import vacunacionImage from '../images/vacunacion.jpg';
import analysisImage from '../images/analysis.jpg';
import onlineConsultationImage from '../images/online-consultation.jpg';
import ultrasoundImage from '../images/ultrasound.png';
import operationImage from '../images/operation.png';

function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.replace('#', ''));
        if (element) {
          const headerOffset = 96; // Header height + some padding
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
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1>Servicios Veterinarios a Domicilio</h1>
            <p>Atención profesional en la comodidad de tu hogar</p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section services-list-section">
        <div className="container">
          <div className="services-list">
            <div className="service-item" id="consultas">
              <div className="service-item-image">
                <img src={consultaImage} alt="Consultas" />
              </div>
              <div className="service-item-content">
                <div className="service-item-icon">🩺</div>
                <h3>Consultas Generales a Domicilio</h3>
                <p>Atención médica completa en tu hogar para diagnóstico y tratamiento de diversas patologías, sin el estrés del traslado para tu mascota.</p>
                <ul className="service-item-list">
                  <li>Examen físico completo</li>
                  <li>Diagnóstico de enfermedades</li>
                  <li>Prescripción de tratamientos</li>
                  <li>Control de peso y nutrición</li>
                  <li>Seguimiento post-consulta</li>
                </ul>
              </div>
            </div>

            <div className="service-item" id="vacunacion">
              <div className="service-item-image">
                <img src={vacunacionImage} alt="Vacunación" />
              </div>
              <div className="service-item-content">
                <div className="service-item-icon">💉</div>
                <h3>Vacunación y Prevención</h3>
                <p>Plan de vacunación personalizado aplicado en tu domicilio según la edad y necesidades específicas de tu mascota.</p>
                <ul className="service-item-list">
                  <li>Vacunas obligatorias y opcionales</li>
                  <li>Desparasitación interna y externa</li>
                  <li>Prevención de pulgas y garrapatas</li>
                  <li>Control de parásitos intestinales</li>
                  <li>Calendario de vacunación personalizado</li>
                </ul>
              </div>
            </div>

            <div className="service-item" id="laboratorio">
              <div className="service-item-image">
                <img src={analysisImage} alt="Laboratorio" />
              </div>
              <div className="service-item-content">
                <div className="service-item-icon">🔬</div>
                <h3>Toma de Muestras y Laboratorio</h3>
                <p>Extracción de muestras en tu hogar para estudios complementarios y análisis clínicos precisos.</p>
                <ul className="service-item-list">
                  <li>Análisis de sangre</li>
                  <li>Análisis de orina</li>
                  <li>Test de enfermedades específicas</li>
                  <li>Resultados rápidos</li>
                  <li>Interpretación y seguimiento</li>
                </ul>
              </div>
            </div>

            <div className="service-item" id="online">
              <div className="service-item-image">
                <img src={onlineConsultationImage} alt="Consulta online" />
              </div>
              <div className="service-item-content">
                <div className="service-item-icon">💻</div>
                <h3>Consulta Online</h3>
                <p>Asesoramiento veterinario profesional a distancia para consultas, seguimientos y orientación sobre el cuidado de tu mascota.</p>
                <ul className="service-item-list">
                  <li>Consultas por videollamada</li>
                  <li>Revisión de análisis y estudios</li>
                  <li>Seguimiento de tratamientos</li>
                  <li>Asesoramiento nutricional</li>
                  <li>Consultas de urgencia</li>
                </ul>
              </div>
            </div>

            <div className="service-item" id="ecografia">
              <div className="service-item-image">
                <img src={ultrasoundImage} alt="Ecografía" />
              </div>
              <div className="service-item-content">
                <div className="service-item-icon">📡</div>
                <h3>Ecografía a Domicilio</h3>
                <p>Estudios de diagnóstico por imágenes realizados en tu hogar con equipamiento portátil de última generación.</p>
                <ul className="service-item-list">
                  <li>Ecografía abdominal</li>
                  <li>Diagnóstico gestacional</li>
                  <li>Evaluación de órganos internos</li>
                  <li>Detección de masas y tumores</li>
                  <li>Informe detallado con imágenes</li>
                </ul>
              </div>
            </div>

            <div className="service-item" id="cirugia">
              <div className="service-item-image">
                <img src={operationImage} alt="Cirugía" />
              </div>
              <div className="service-item-content">
                <div className="service-item-icon">✂️</div>
                <h3>Procedimientos Quirúrgicos</h3>
                <p>Cirugías programadas y procedimientos quirúrgicos realizados en ambiente controlado con anestesia segura.</p>
                <ul className="service-item-list">
                  <li>Castraciones y esterilizaciones</li>
                  <li>Cirugías de tejidos blandos</li>
                  <li>Extracciones dentales</li>
                  <li>Remoción de masas y tumores</li>
                  <li>Cuidados post-operatorios</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section services-cta">
        <div className="container">
          <div className="cta-box">
            <h2>¿Listo Para Agendar una Consulta?</h2>
            <p>Contactanos y agendá tu visita a domicilio</p>
            <Link to="/contacto" className="button button-primary">Contactar Ahora</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
