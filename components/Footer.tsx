
import React from 'react';
import { Building2, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 pt-16 pb-8 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Building2 className="w-8 h-8 text-blue-700 dark:text-blue-400" />
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Inversiones<span className="text-blue-700 dark:text-blue-400">Futuro</span>
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Líderes en el mercado inmobiliario colombiano, conectando sueños con oportunidades reales de inversión.
            </p>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase text-xs tracking-widest">Empresa</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li><a href="#nosotros" className="hover:text-blue-600 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#servicios" className="hover:text-blue-600 transition-colors">Servicios</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
              <li><a href="#privacidad" className="hover:text-blue-600 transition-colors">Legal</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase text-xs tracking-widest">Soporte</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li><a href="#contacto" className="hover:text-blue-600 transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Alianzas</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase text-xs tracking-widest">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:text-blue-600 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:text-blue-600 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:text-blue-600 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-8">
              <p className="text-xs text-slate-500 dark:text-slate-500">Colombia (Bogotá - Medellín)</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-600">
            &copy; {new Date().getFullYear()} Inversiones Futuro. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-slate-500 dark:text-slate-600">
            <a href="#privacidad" className="hover:underline">Privacidad</a>
            <a href="#" className="hover:underline">Términos</a>
            <a href="#" className="hover:underline">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
