
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { ContactFormData } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: 'venta',
    city: '',
    message: '',
    consent: false,
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const validate = () => {
    const newErrors: any = {};
    if (!formData.name) newErrors.name = 'El nombre es requerido';
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.message || formData.message.length < 20) {
      newErrors.message = 'Mínimo 20 caracteres';
    }
    if (!formData.consent) newErrors.consent = 'Debes aceptar la política';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    
    // Simulating API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({
        name: '', email: '', phone: '', service: 'venta', city: '', message: '', consent: false
      });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Agenda una asesoría personalizada</h2>
        <p className="text-slate-600 dark:text-slate-400">Nuestro equipo te contactará en menos de 24 horas.</p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-800">
        {status === 'success' ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">¡Mensaje enviado con éxito!</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8">Pronto nos pondremos en contacto contigo.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="px-6 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg font-semibold hover:bg-slate-200"
            >
              Enviar otro mensaje
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot anti-spam */}
            <input type="text" className="hidden" aria-hidden="true" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Nombre Completo *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full p-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'} bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
                  placeholder="Juan Perez"
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Correo Electrónico *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full p-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'} bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
                  placeholder="juan@ejemplo.com"
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Teléfono</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+57 300 000 0000"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Tipo de Servicio *</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="venta">Venta de inmueble</option>
                  <option value="arriendo">Arriendo</option>
                  <option value="inversion">Asesoría de inversión</option>
                  <option value="avalualo">Avalúo</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Mensaje *</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={4}
                className={`w-full p-3 rounded-xl border ${errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'} bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
                placeholder="Cuéntanos más sobre tu propiedad o requerimiento..."
              />
              {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                checked={formData.consent}
                onChange={(e) => setFormData({...formData, consent: e.target.checked})}
                className="mt-1"
              />
              <label htmlFor="consent" className="text-sm text-slate-600 dark:text-slate-400 leading-tight">
                Al enviar aceptas nuestra <a href="#privacidad" className="text-blue-600 dark:text-blue-400 font-semibold underline">Política de Privacidad</a> y el tratamiento de tus datos personales.
              </label>
            </div>
            {errors.consent && <p className="text-xs text-red-500">{errors.consent}</p>}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 bg-blue-700 hover:bg-blue-800 disabled:opacity-50 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-500/20"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Procesando...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" /> Enviar Mensaje
                </>
              )}
            </button>

            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-500 justify-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <AlertCircle className="w-5 h-5" />
                <span className="text-sm">Hubo un error al enviar. Reintenta por favor.</span>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
