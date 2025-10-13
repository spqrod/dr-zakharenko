import React from 'react';
import '../styles/legal.css';

function Privacy() {
  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="container">
          <h1>Política de Privacidad</h1>
          <p>Última actualización: Enero 2025</p>
        </div>
      </section>

      <section className="section legal-content-section">
        <div className="container">
          <div className="legal-content">
            <h2>1. Información que Recopilamos</h2>
            <p>En Dres. Zakharenko, respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Recopilamos la siguiente información cuando utilizás nuestros servicios:</p>
            <ul>
              <li>Nombre completo</li>
              <li>Dirección de domicilio</li>
              <li>Número de teléfono</li>
              <li>Dirección de correo electrónico</li>
              <li>Información sobre tu mascota (nombre, especie, raza, edad, historial médico)</li>
            </ul>

            <h2>2. Uso de la Información</h2>
            <p>Utilizamos la información recopilada para los siguientes propósitos:</p>
            <ul>
              <li>Brindar servicios veterinarios profesionales</li>
              <li>Mantener registros médicos precisos de tu mascota</li>
              <li>Comunicarnos contigo sobre consultas, tratamientos y seguimientos</li>
              <li>Enviar recordatorios de vacunación y controles periódicos</li>
              <li>Mejorar la calidad de nuestros servicios</li>
            </ul>

            <h2>3. Protección de Datos</h2>
            <p>Implementamos medidas de seguridad apropiadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción. Los registros médicos se mantienen de forma segura y confidencial.</p>

            <h2>4. Compartir Información</h2>
            <p>No vendemos, intercambiamos ni transferimos tu información personal a terceros. La información puede ser compartida únicamente en los siguientes casos:</p>
            <ul>
              <li>Con laboratorios veterinarios para análisis clínicos</li>
              <li>Con otros profesionales veterinarios en caso de derivación</li>
              <li>Cuando sea requerido por ley</li>
            </ul>

            <h2>5. Retención de Datos</h2>
            <p>Conservamos los registros médicos de tu mascota durante el tiempo necesario para cumplir con nuestras obligaciones legales y profesionales, generalmente por un período de 10 años desde la última consulta.</p>

            <h2>6. Tus Derechos</h2>
            <p>Tenés derecho a:</p>
            <ul>
              <li>Acceder a tu información personal y la de tu mascota</li>
              <li>Solicitar correcciones de información inexacta</li>
              <li>Solicitar la eliminación de tus datos (sujeto a requisitos legales)</li>
              <li>Retirar tu consentimiento para el procesamiento de datos</li>
            </ul>

            <h2>7. Cookies y Tecnologías Similares</h2>
            <p>Nuestro sitio web puede utilizar cookies para mejorar tu experiencia de navegación. Podés configurar tu navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.</p>

            <h2>8. Cambios en la Política</h2>
            <p>Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Te notificaremos sobre cambios significativos publicando la nueva política en esta página.</p>

            <h2>9. Contacto</h2>
            <p>Si tenés preguntas sobre esta Política de Privacidad, podés contactarnos a través de:</p>
            <ul>
              <li>Teléfono: +54 11 3773 8928</li>
              <li>WhatsApp: +54 11 3773 8928</li>
              <li>Telegram: @Vet_Help</li>
            </ul>

            <div className="legal-note">
              <p><strong>Nota:</strong> Esta política de privacidad cumple con las normativas de protección de datos personales vigentes en Argentina, incluyendo la Ley 25.326 de Protección de Datos Personales.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Privacy;
