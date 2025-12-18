
import React from 'react';
import { Building2, Instagram, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  setView: (view: 'home' | 'privacy') => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-white dark:bg-slate-950 pt-16 pb-8 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <button 
              onClick={() => { setView('home'); window.scrollTo(0, 0); }}
              className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity"
            >
              <Building2 className="w-8 h-8 text-blue-700 dark:text-blue-400" />
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Inversiones<span className="text-blue-700 dark:text-blue-400">Futuro</span>
              </span>
            </button>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Líderes en el mercado inmobiliario colombiano, conectando sueños con oportunidades reales de inversión.
            </p>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase text-xs tracking-widest">Empresa</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li><button onClick={() => setView('home')} className="hover:text-blue-600 transition-colors text-left">Sobre Nosotros</button></li>
              <li><button onClick={() => setView('home')} className="hover:text-blue-600 transition-colors text-left">Servicios</button></li>
              <li><button onClick={() => setView('home')} className="hover:text-blue-600 transition-colors text-left">Blog</button></li>
              <li><button onClick={() => setView('privacy')} className="hover:text-blue-600 transition-colors text-left font-semibold">Política de Privacidad</button></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase text-xs tracking-widest">Soporte</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li><button onClick={() => setView('home')} className="hover:text-blue-600 transition-colors text-left">Contacto</button></li>
              <li><button onClick={() => setView('home')} className="hover:text-blue-600 transition-colors text-left">Preguntas Frecuentes</button></li>
              <li><button onClick={() => setView('home')} className="hover:text-blue-600 transition-colors text-left">Alianzas</button></li>
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
            <button onClick={() => setView('privacy')} className="hover:underline">Privacidad</button>
            <button className="hover:underline">Términos</button>
            <button className="hover:underline">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
