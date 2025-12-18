
import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Theme, NavLink } from '../types';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
  setView: (view: 'home' | 'privacy') => void;
}

const links: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, setView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setView('home');
    setIsOpen(false);
    // Give state time to update before hash navigation
    setTimeout(() => {
      window.location.hash = href;
    }, 10);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => { setView('home'); window.scrollTo(0, 0); }}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Building2 className="w-8 h-8 text-blue-700 dark:text-blue-400" />
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Inversiones<span className="text-blue-700 dark:text-blue-400">Futuro</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
            
            <div className="flex items-center gap-4 ml-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
              <button
                onClick={() => handleNavClick('#contacto')}
                className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all shadow-lg hover:shadow-blue-500/20"
              >
                Agendar asesoría
              </button>
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
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-3 py-4 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-blue-700"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4">
                <button
                  onClick={() => handleNavClick('#contacto')}
                  className="block w-full text-center bg-blue-700 text-white px-5 py-3 rounded-lg text-base font-semibold"
                >
                  Agendar asesoría
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
