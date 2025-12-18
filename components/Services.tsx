
import React from 'react';
import { motion } from 'framer-motion';
import { Key, Home, BarChart3, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';

const services: (ServiceItem & { iconComp: any })[] = [
  {
    id: '1',
    title: 'Venta de Inmuebles',
    description: 'Gestión profesional de ventas con estrategias de marketing digital y posicionamiento premium.',
    icon: 'key',
    iconComp: Key
  },
  {
    id: '2',
    title: 'Arriendo Estratégico',
    description: 'Búsqueda de arrendatarios calificados y administración de contratos con total respaldo legal.',
    icon: 'home',
    iconComp: Home
  },
  {
    id: '3',
    title: 'Asesoría de Inversión',
    description: 'Análisis de mercado para identificar oportunidades de alta valorización en las principales ciudades.',
    icon: 'chart',
    iconComp: BarChart3
  },
  {
    id: '4',
    title: 'Avalúos Comerciales',
    description: 'Valoración técnica y comercial precisa para garantizar el precio justo en tus negociaciones.',
    icon: 'shield',
    iconComp: ShieldCheck
  },
];

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Nuestros Servicios
        </h2>
        <div className="w-20 h-1.5 bg-blue-700 dark:bg-blue-400 mx-auto rounded-full mb-6" />
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Ofrecemos soluciones integrales adaptadas a las necesidades del mercado inmobiliario moderno en Colombia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => {
          const Icon = service.iconComp;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/5 transition-all group"
            >
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 text-blue-700 dark:text-blue-400 group-hover:scale-110 transition-transform">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
