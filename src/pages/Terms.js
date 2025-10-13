import React from 'react';
import '../styles/legal.css';

function Terms() {
  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="container">
          <h1>Términos y Condiciones</h1>
          <p>Última actualización: Enero 2025</p>
        </div>
      </section>

      <section className="section legal-content-section">
        <div className="container">
          <div className="legal-content">
            <h2>1. Aceptación de los Términos</h2>
            <p>Al utilizar los servicios veterinarios de Dres. Dmitrii y Valentina Zakharenko, aceptás estos términos y condiciones en su totalidad. Si no estás de acuerdo con alguna parte de estos términos, por favor no utilices nuestros servicios.</p>

            <h2>2. Servicios Ofrecidos</h2>
            <p>Ofrecemos servicios veterinarios profesionales a domicilio, incluyendo pero no limitado a:</p>
            <ul>
              <li>Consultas veterinarias generales</li>
              <li>Vacunación y medicina preventiva</li>
              <li>Toma de muestras y análisis clínicos</li>
              <li>Ecografía diagnóstica</li>
              <li>Procedimientos quirúrgicos</li>
              <li>Consultas online</li>
            </ul>

            <h2>3. Responsabilidades del Cliente</h2>
            <p>Como cliente, te comprometés a:</p>
            <ul>
              <li>Proporcionar información precisa y completa sobre tu mascota</li>
              <li>Informar sobre cualquier condición médica preexistente</li>
              <li>Seguir las indicaciones y tratamientos prescritos</li>
              <li>Proporcionar un ambiente seguro para la atención veterinaria</li>
              <li>Pagar los honorarios acordados por los servicios prestados</li>
              <li>Cancelar o reprogramar consultas con al menos 24 horas de anticipación</li>
            </ul>

            <h2>4. Responsabilidades Profesionales</h2>
            <p>Como profesionales veterinarios, nos comprometemos a:</p>
            <ul>
              <li>Brindar atención médica de calidad según las mejores prácticas veterinarias</li>
              <li>Mantener la confidencialidad de la información médica</li>
              <li>Actuar con ética profesional en todo momento</li>
              <li>Informar claramente sobre diagnósticos y tratamientos</li>
              <li>Derivar casos a especialistas cuando sea necesario</li>
            </ul>

            <h2>5. Programación y Cancelaciones</h2>
            <p>Las consultas deben ser programadas con anticipación a través de teléfono, WhatsApp o Telegram. Las cancelaciones deben realizarse con al menos 24 horas de anticipación. Las cancelaciones tardías pueden estar sujetas a un cargo.</p>

            <h2>6. Honorarios y Pagos</h2>
            <p>Los honorarios por nuestros servicios se determinarán según:</p>
            <ul>
              <li>Tipo de servicio requerido</li>
              <li>Complejidad del caso</li>
              <li>Zona de atención</li>
              <li>Horario de la consulta (horario normal o urgencia)</li>
            </ul>
            <p>El pago debe realizarse al momento de la prestación del servicio, a menos que se haya acordado lo contrario. Aceptamos efectivo y transferencias bancarias.</p>

            <h2>7. Limitación de Responsabilidad</h2>
            <p>Si bien nos esforzamos por brindar la mejor atención posible, la medicina veterinaria no es una ciencia exacta. No podemos garantizar resultados específicos de los tratamientos. Nuestra responsabilidad se limita al ejercicio profesional diligente de la medicina veterinaria.</p>

            <h2>8. Emergencias</h2>
            <p>Ofrecemos atención de urgencias según disponibilidad. En casos de emergencias graves que requieran hospitalización o equipamiento especializado, derivaremos a centros veterinarios apropiados.</p>

            <h2>9. Consentimiento Informado</h2>
            <p>Para procedimientos quirúrgicos o tratamientos invasivos, solicitaremos tu consentimiento informado por escrito. Te explicaremos los riesgos, beneficios y alternativas antes de proceder.</p>

            <h2>10. Registros Médicos</h2>
            <p>Mantenemos registros médicos detallados de todas las consultas y tratamientos. Estos registros son propiedad del profesional veterinario, pero tenés derecho a solicitar copias en cualquier momento.</p>

            <h2>11. Propiedad Intelectual</h2>
            <p>Todo el contenido de nuestro sitio web, incluyendo textos, imágenes y logotipos, está protegido por derechos de autor y no puede ser reproducido sin autorización.</p>

            <h2>12. Modificaciones de los Términos</h2>
            <p>Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios entrarán en vigor al ser publicados en nuestro sitio web.</p>

            <h2>13. Jurisdicción</h2>
            <p>Estos términos se rigen por las leyes de la República Argentina. Cualquier disputa será resuelta en los tribunales competentes de la Ciudad Autónoma de Buenos Aires.</p>

            <h2>14. Contacto</h2>
            <p>Para consultas sobre estos términos y condiciones, podés contactarnos:</p>
            <ul>
              <li>Teléfono: +54 11 3773 8928</li>
              <li>WhatsApp: +54 11 3773 8928</li>
              <li>Telegram: @Vet_Help</li>
            </ul>

            <div className="legal-note">
              <p><strong>Importante:</strong> Al contratar nuestros servicios, confirmás que has leído, comprendido y aceptado estos términos y condiciones. Si tenés alguna duda, no dudes en consultarnos antes de proceder.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Terms;
