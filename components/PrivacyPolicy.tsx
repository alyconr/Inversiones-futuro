
import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <button 
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-blue-700 dark:text-blue-400 font-semibold hover:gap-3 transition-all"
      >
        <ArrowLeft className="w-5 h-5" />
        Regresar al Inicio
      </button>

      <div className="bg-white dark:bg-slate-900/40 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Política de Tratamiento de Datos Personales</h2>
        
        <div className="space-y-8 text-slate-600 dark:text-slate-400 leading-relaxed">
          <section>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">1. Responsable del Tratamiento</h3>
            <p>
              Inversiones Futuro, con domicilio en Colombia, es el responsable del tratamiento de los datos personales que se recolecten a través de este sitio web.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">2. Datos Recolectados</h3>
            <p>
              Recolectamos datos básicos para la gestión comercial: nombre completo, correo electrónico, número de teléfono y ciudad de interés. Estos datos son proporcionados voluntariamente por el usuario.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">3. Finalidades del Tratamiento</h3>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Establecer contacto comercial y agendar asesorías.</li>
              <li>Envío de propuestas y portafolios de inversión.</li>
              <li>Actualizaciones sobre el estado de sus trámites inmobiliarios.</li>
              <li>Cumplimiento de obligaciones legales y contables.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">4. Derechos del Titular</h3>
            <p>
              Como titular de sus datos personales, usted tiene derecho a conocer, actualizar, rectificar o solicitar la eliminación de su información de nuestras bases de datos en cualquier momento.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">5. Seguridad y Retención</h3>
            <p>
              Implementamos medidas técnicas de seguridad razonables para proteger su información contra el acceso no autorizado. Los datos se conservarán mientras persista la relación comercial o legal.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">6. Canales de Contacto</h3>
            <p>
              Para cualquier solicitud relacionada con sus datos, puede escribirnos a: <strong>privacidad@inversionesfuturo.co</strong>
            </p>
          </section>

          <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-sm border border-blue-100 dark:border-blue-800 italic">
            Nota: Esta política cumple con las disposiciones generales de protección de datos personales en el territorio colombiano, garantizando el respeto al derecho constitucional de Habeas Data.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
