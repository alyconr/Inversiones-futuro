
import React, { useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { Sun, Moon, Menu, X, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Theme } from '../types';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

const links = [
  { label: 'Inicio', path: '/inicio' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Contacto', path: '/contacto' },
];

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <RouterLink 
            to="/inicio"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Building2 className="w-8 h-8 text-blue-700 dark:text-blue-400" />
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Inversiones<span className="text-blue-700 dark:text-blue-400">Futuro</span>
            </span>
          </RouterLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <RouterLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-blue-700 dark:text-blue-400' 
                      : 'text-slate-600 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400'
                  }`
                }
              >
                {link.label}
              </RouterLink>
            ))}
            
            <div className="flex items-center gap-4 ml-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
              <RouterLink
                to="/contacto"
                className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all shadow-lg hover:shadow-blue-500/20"
              >
                Agendar asesoría
              </RouterLink>
            </div>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2">
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {links.map((link) => (
                <RouterLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-left px-3 py-4 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-blue-700"
                >
                  {link.label}
                </RouterLink>
              ))}
              <div className="pt-4">
                <RouterLink
                  to="/contacto"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-blue-700 text-white px-5 py-3 rounded-lg text-base font-semibold"
                >
                  Agendar asesoría
                </RouterLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
