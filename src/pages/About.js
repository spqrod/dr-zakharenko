import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/about.css';
import drDmitriiImage from '../images/dr-dmitrii.jpg';
import valentinaImage from '../images/valentina.jpg';
import dresImage from '../images/dres.jpg';

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero" style={{backgroundImage: `linear-gradient(135deg, rgba(44, 95, 126, 0.95) 0%, rgba(26, 58, 77, 0.9) 100%), url(${dresImage})`}}>
        <div className="container">
          <div className="about-hero-content">
            <h1>Sobre Nosotros</h1>
            <p>Conocé nuestro equipo y experiencia profesional</p>
          </div>
        </div>
      </section>

      {/* Team Intro */}
      <section className="section team-intro-section">
        <div className="container">
          <div className="team-intro-content">
            <h2>Nuestro Equipo</h2>
            <p>Somos Dmitrii y Valentina Zakharenko, veterinarios especializados dedicados al cuidado integral de tus mascotas. Somos matrimonio y padres de 3 hijos. Juntos combinamos más de 25 años de experiencia en medicina veterinaria, habiendo atendido más de 36.000 animales, ofreciendo atención profesional a domicilio en Buenos Aires.</p>
            <p>Nuestra filosofía es brindar atención médica de excelencia en el ambiente más cómodo para tu mascota: su hogar. Esto elimina el estrés del traslado y nos permite observar a los animales en su entorno natural, facilitando diagnósticos más precisos y tratamientos más efectivos.</p>
          </div>
        </div>
      </section>

      {/* Dr. Dmitrii Section */}
      <section className="section doctor-section">
        <div className="container">
          <div className="doctor-content">
            <div className="doctor-image-section">
              <img src={drDmitriiImage} alt="Dr. Dmitrii Zakharenko" className="doctor-image" />
              <div className="doctor-badge">
                <h3>Dr. Dmitrii Zakharenko</h3>
                <p>Médico Veterinario</p>
              </div>
            </div>

            <div className="doctor-text-section">
              <h2>Dr. Dmitrii Zakharenko</h2>
              <h3>Especialista en Medicina Interna</h3>
              <p>Médico veterinario con más de 13 años de experiencia dedicados al diagnóstico y tratamiento de enfermedades complejas en animales domésticos. Padre de 3 hijos.</p>
              
              <h4>Formación</h4>
              <p>Me gradué con honores de la MGAVMiB (Academia Estatal de Moscú de Medicina Veterinaria y Biotecnología), una de las instituciones veterinarias más prestigiosas de Rusia. Durante mis años de formación, desarrollé un especial interés en la medicina preventiva y el diagnóstico clínico diferencial.</p>

              <h4>Experiencia Profesional</h4>
              <p>Trabajé durante más de 10 años en diversas clínicas veterinarias de Moscú, donde tuve la oportunidad de atender miles de casos y especializarme en medicina interna. Esta experiencia me permitió desarrollar habilidades avanzadas en diagnóstico y tratamiento de enfermedades sistémicas.</p>

              <h4>En Buenos Aires</h4>
              <p>En 2023, junto con mi esposa Valentina, nos mudamos a Buenos Aires para comenzar una nueva etapa profesional. Aquí identificamos la necesidad de un servicio veterinario a domicilio de calidad, lo que nos inspiró a crear este proyecto.</p>

              <div className="doctor-specialties">
                <h4>Áreas de Especialización</h4>
                <ul>
                  <li>Medicina Interna</li>
                  <li>Diagnóstico Clínico</li>
                  <li>Medicina Preventiva</li>
                  <li>Geriatría Veterinaria</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dra. Valentina Section */}
      <section className="section doctor-section doctor-section-valentina">
        <div className="container">
          <div className="doctor-content doctor-content-reverse">
            <div className="doctor-text-section">
              <h2>Dra. Valentina Zakharenko</h2>
              <h3>Especialista en Cirugía y Diagnóstico por Imágenes</h3>
              <p>Médica veterinaria con más de 13 años de experiencia en cirugía veterinaria y diagnóstico mediante ecografía. Madre de 3 hijos.</p>
              
              <h4>Formación</h4>
              <p>Me gradué de la MGAVMiB (Academia Estatal de Moscú de Medicina Veterinaria y Biotecnología) con especialización en cirugía veterinaria. Posteriormente realicé una formación intensiva en ultrasonografía diagnóstica, lo que me permite ofrecer estudios por imágenes de alta calidad.</p>

              <h4>Experiencia Profesional</h4>
              <p>Durante mis años en Moscú, trabajé en clínicas especializadas realizando procedimientos quirúrgicos de diversa complejidad. Desarrollé especial expertise en cirugía de tejidos blandos y procedimientos mínimamente invasivos.</p>

              <h4>En Buenos Aires</h4>
              <p>Desde nuestra llegada a Buenos Aires en 2023, me dedico a brindar servicios de ecografía y cirugía a domicilio. Cuento con equipamiento portátil de última generación que me permite realizar estudios diagnósticos precisos en el hogar de los pacientes.</p>

              <div className="doctor-specialties">
                <h4>Áreas de Especialización</h4>
                <ul>
                  <li>Cirugía de Tejidos Blandos</li>
                  <li>Ecografía Diagnóstica</li>
                  <li>Diagnóstico por Imágenes</li>
                  <li>Procedimientos Mínimamente Invasivos</li>
                </ul>
              </div>
            </div>

            <div className="doctor-image-section">
              <img src={valentinaImage} alt="Dra. Valentina Zakharenko" className="doctor-image" />
              <div className="doctor-badge">
                <h3>Dra. Valentina Zakharenko</h3>
                <p>Médica Veterinaria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section philosophy-section">
        <div className="container">
          <div className="philosophy-content">
            <h2>Nuestra Filosofía de Trabajo</h2>
            <div className="philosophy-text">
              <p>Creemos firmemente en la medicina veterinaria centrada en el paciente y su familia. Cada animal es único y merece un enfoque personalizado que considere no solo su condición física, sino también su bienestar emocional y su entorno.</p>
              
              <p>El servicio a domicilio nos permite conocer verdaderamente a nuestros pacientes. Ver cómo se comportan en su ambiente natural, observar su interacción con su familia y entender su rutina diaria nos da información invaluable que no podríamos obtener en una clínica tradicional.</p>

              <p>Nos comprometemos a mantenernos actualizados con los últimos avances en medicina veterinaria, asistiendo regularmente a conferencias y cursos de actualización. La medicina es un campo en constante evolución, y es nuestra responsabilidad ofrecer a nuestros pacientes los mejores tratamientos disponibles.</p>

              <p>Como equipo, combinamos nuestras especialidades para ofrecer un servicio integral. Mientras Dmitrii se enfoca en diagnóstico y medicina interna, Valentina aporta su expertise en cirugía y diagnóstico por imágenes, permitiéndonos resolver la mayoría de las necesidades veterinarias sin que tu mascota tenga que salir de casa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section education-section">
        <div className="container">
          <h2 className="section-title">Formación y Trayectoria</h2>
          <div className="education-grid">
            <div className="education-card">
              <div className="education-icon">🎓</div>
              <h3>MGAVMiB</h3>
              <p className="education-degree">Medicina Veterinaria</p>
              <p className="education-year">Ambos graduados con honores</p>
              <p>Academia Estatal de Moscú de Medicina Veterinaria y Biotecnología, una de las universidades más prestigiosas de Rusia.</p>
            </div>

            <div className="education-card">
              <div className="education-icon">🏥</div>
              <h3>Experiencia en Moscú</h3>
              <p className="education-degree">Práctica Clínica</p>
              <p className="education-year">2014 - 2023</p>
              <p>Más de 9 años de práctica en clínicas veterinarias especializadas de Moscú.</p>
            </div>

            <div className="education-card">
              <div className="education-icon">🏠</div>
              <h3>Buenos Aires</h3>
              <p className="education-degree">Servicio a Domicilio</p>
              <p className="education-year">2023 - Presente</p>
              <p>Atención veterinaria integral en el hogar de nuestros pacientes porteños.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section about-cta-section">
        <div className="container">
          <div className="about-cta-box">
            <h2>¿Querés Conocernos Mejor?</h2>
            <p>Agendá una consulta y experimentá la diferencia de la atención veterinaria a domicilio con nuestro equipo</p>
            <Link to="/contacto" className="button button-primary">Contactar</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
