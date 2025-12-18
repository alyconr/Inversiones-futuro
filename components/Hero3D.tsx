
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float, Stage } from '@react-three/drei';
import { motion } from 'framer-motion';
import Scene from './Scene';
import { Theme } from '../types';

interface Hero3DProps {
  theme: Theme;
}

const Hero3D: React.FC<Hero3DProps> = ({ theme }) => {
  return (
    <div className="relative w-full h-[600px] lg:h-[800px] flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Text Side */}
      <div className="flex-1 z-10 text-center lg:text-left pt-12 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-full">
            Inmobiliaria Boutique en Colombia
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight text-slate-900 dark:text-white mb-6">
            Construyendo tu <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-400 dark:to-blue-200">
              Futuro Patrimonial
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 mb-8">
            Expertos en inversiones inmobiliarias estratégicas. Brindamos asesoría de alto nivel para que tus activos crezcan con seguridad y visión.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#servicios"
              className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-bold shadow-xl shadow-blue-500/20 transition-all transform hover:-translate-y-1"
            >
              Explorar Servicios
            </a>
            <a
              href="#nosotros"
              className="px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
            >
              Nuestra Historia
            </a>
          </div>
        </motion.div>
      </div>

      {/* 3D Side */}
      <div className="flex-1 w-full h-[400px] lg:h-[600px] relative mt-10 lg:mt-0">
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="animate-pulse bg-slate-200 dark:bg-slate-800 rounded-2xl w-full h-full" />
          </div>
        }>
          <Canvas dpr={[1, 2]} gl={{ antialias: true }}>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
            <ambientLight intensity={theme === 'dark' ? 0.3 : 0.7} />
            <directionalLight position={[5, 10, 5]} intensity={theme === 'dark' ? 0.8 : 1.5} color={theme === 'dark' ? '#3b82f6' : '#ffffff'} />
            <pointLight position={[-5, -5, -5]} color={theme === 'dark' ? '#d4af37' : '#ffffff'} />
            
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
              <Scene theme={theme} />
            </Float>
            
            <OrbitControls 
              enableZoom={false} 
              autoRotate 
              autoRotateSpeed={0.5}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 2}
            />
          </Canvas>
        </Suspense>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
    </div>
  );
};

export default Hero3D;
