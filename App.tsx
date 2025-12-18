
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Services from './components/Services';
import About from './components/About';
import Features from './components/Features';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { Theme } from './types';

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
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="flex-grow">
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

        <section id="privacidad" className="py-20 px-4">
          <PrivacyPolicy />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
