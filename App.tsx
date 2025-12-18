
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

type View = 'home' | 'privacy';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('theme') as Theme;
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [view, setView] = useState<View>('home');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const navigateTo = (newView: View) => {
    setView(newView);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} setView={navigateTo} />
      
      <main className="flex-grow">
        {view === 'home' ? (
          <>
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
        ) : (
          <section className="py-20 px-4">
            <PrivacyPolicy onBack={() => setView('home')} />
          </section>
        )}
      </main>

      <Footer setView={navigateTo} />
    </div>
  );
};

export default App;
