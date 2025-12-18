
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
      <div className="flex-1 order-2 lg:order-1">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://picsum.photos/seed/inmo1/800/600"
            alt="Oficinas corporativas"
            className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute -bottom-6 -right-6 bg-blue-700 text-white p-6 rounded-2xl shadow-xl hidden md:block">
            <span className="text-4xl font-bold block">15+</span>
            <span className="text-sm font-medium uppercase tracking-wider">Años de Experiencia</span>
          </div>
        </motion.div>
      </div>

      <div className="flex-1 order-1 lg:order-2">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Más que una inmobiliaria, tu aliado de confianza
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
          En <strong>Inversiones Futuro</strong>, entendemos que cada inmueble es un proyecto de vida o una oportunidad de crecimiento financiero. Nacimos en el corazón de Colombia con la misión de profesionalizar el sector y brindar transparencia.
        </p>
        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          Nuestro equipo combina tecnología de vanguardia con un trato humano excepcional, asegurando que cada transacción sea ágil, segura y rentable. Nos especializamos en los sectores más dinámicos de Bogotá, Medellín y la Costa Caribe.
        </p>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="border-l-4 border-blue-700 pl-4">
            <h4 className="font-bold text-slate-900 dark:text-white">Transparencia</h4>
            <p className="text-sm text-slate-500">Cero costos ocultos en nuestras gestiones.</p>
          </div>
          <div className="border-l-4 border-corporate-gold pl-4">
            <h4 className="font-bold text-slate-900 dark:text-white">Excelencia</h4>
            <p className="text-sm text-slate-500">Servicio boutique personalizado.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
