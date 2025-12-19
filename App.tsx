
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Services from './components/Services';
import About from './components/About';
import Features from './components/Features';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { Theme } from './types';

// Componente para manejar el scroll automático basado en la ruta
const ScrollToSection: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const sectionId = pathname.substring(1); // remover el '/'
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname]);

  return null;
};

const HomePage: React.FC<{ theme: Theme }> = ({ theme }) => (
  <>
    <ScrollToSection />
    <section id="inicio">
      <Hero3D theme={theme} />
    </section>

    <section id="servicios" className="py-20 px-4">
      <Services />
    </section>

    <section id="nosotros" className="py-20 px-4 bg-slate-100 dark:bg-slate-900/50">
      <About />
    </section>

    <section id="beneficios" className="py-20 px-4">
      <Features />
    </section>

    <section id="contacto" className="py-20 px-4 bg-slate-100 dark:bg-slate-900/50">
      <ContactForm />
    </section>
  </>
);

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('theme') as Theme;
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/inicio" replace />} />
            <Route path="/inicio" element={<HomePage theme={theme} />} />
            <Route path="/servicios" element={<HomePage theme={theme} />} />
            <Route path="/nosotros" element={<HomePage theme={theme} />} />
            <Route path="/contacto" element={<HomePage theme={theme} />} />
            <Route path="/politica-de-privacidad" element={<div className="py-20 px-4"><PrivacyPolicy /></div>} />
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/inicio" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
