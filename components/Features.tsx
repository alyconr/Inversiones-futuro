
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Asesoría jurídica integral en cada contrato.',
  'Uso de Big Data para proyecciones de valorización.',
  'Publicidad premium en los principales portales.',
  'Firma electrónica para cierres ágiles y seguros.',
  'Reportes mensuales detallados de rentabilidad.',
  'Gestión de crédito hipotecario con bancos aliados.'
];

const Features: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-blue-700 dark:bg-blue-900 rounded-3xl p-8 md:p-16 text-white flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Por qué elegir <br />Inversiones Futuro?
          </h2>
          <p className="text-blue-100 mb-8 max-w-md">
            Optimizamos tu patrimonio a través de procesos rigurosos y una visión estratégica de los bienes raíces.
          </p>
          <a
            href="#contacto"
            className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
          >
            Hablar con un experto
          </a>
        </div>
        
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-center gap-3 bg-white/10 p-4 rounded-xl border border-white/5">
              <CheckCircle2 className="w-5 h-5 text-blue-200 shrink-0" />
              <span className="text-sm font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
