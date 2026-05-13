import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiMail, FiPhone, FiMapPin, FiCheck, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Magnetic from '../components/Magnetic';

const Contact = () => {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 4000);
    }, 1500);
  };

  const contactItems = [
    { 
      icon: FiMapPin, 
      label: t('contactPage.addressLabel'), 
      val: t('contactPage.address'),
      href: `https://maps.google.com/?q=${encodeURIComponent(t('contactPage.address'))}`,
      isExternal: true
    },
    { 
      icon: FiMail, 
      label: t('contactPage.emailLabel'), 
      val: t('contactPage.email'),
      href: `mailto:${t('contactPage.email')}`,
      isExternal: false
    },
    { 
      icon: FiPhone, 
      label: t('contactPage.phoneLabel'), 
      val: t('contactPage.phone'), 
      href: `tel:${t('contactPage.phone').replace(/-/g, '')}`,
      isExternal: false
    }
  ];

  const inputBaseClass = "w-full px-8 py-5 bg-white/50 border border-gray-100 rounded-2xl outline-none transition-all duration-300 font-medium text-japan-system-primary placeholder:text-gray-300 focus:border-japan-system-secondary focus:bg-white focus:ring-8 focus:ring-japan-system-secondary/5 backdrop-blur-sm";

  return (
    <div className="relative min-h-screen bg-white overflow-hidden pb-32">
      {/* Cinematic Header */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-japan-system-primary">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e293b,transparent)] opacity-50"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-japan-system-secondary text-sm font-bold uppercase tracking-[0.4em] mb-6 block"
          >
            {t('contactPage.subtitle')}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white mb-4"
          >
            {t('contactPage.title')}
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 -mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            {contactItems.map((item, i) => (
              <Magnetic key={i}>
                <a 
                  href={item.href}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  className="block group"
                >
                  <div className="glass-card p-10 flex items-center space-x-8 border-white hover:glass-card-hover">
                    <div className="w-16 h-16 bg-japan-system-primary/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-japan-system-primary transition-all duration-500">
                      <item.icon className="w-8 h-8 text-japan-system-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-2 block">{item.label}</span>
                      <p className="text-japan-system-primary font-bold text-lg leading-relaxed group-hover:text-japan-system-secondary transition-colors">
                        {item.val}
                      </p>
                    </div>
                  </div>
                </a>
              </Magnetic>
            ))}
          </motion.div>

          {/* Form UI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-12 md:p-16 border-white shadow-2xl relative overflow-hidden">
              <div className="mb-12">
                <h2 className="text-japan-system-primary mb-4 italic">
                  {t('contactPage.sendMessage')}
                </h2>
                <p className="text-gray-500 text-lg opacity-80">{t('contactPage.formHelp')}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-japan-system-secondary ml-4">{t('contactPage.fullName')}</label>
                    <input 
                      name="name"
                      type="text" 
                      value={formData.name}
                      onChange={handleChange}
                      className={inputBaseClass}
                      placeholder={t('contactPage.enterName')} 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-japan-system-secondary ml-4">{t('contactPage.emailAddr')}</label>
                    <input 
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className={inputBaseClass}
                      placeholder={t('contactPage.enterEmail')} 
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-japan-system-secondary ml-4">{t('contactPage.message')}</label>
                  <textarea 
                    name="message"
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputBaseClass} resize-none`}
                    placeholder={t('contactPage.tellUs')}
                  ></textarea>
                </div>

                <div className="pt-4">
                  <Magnetic>
                    <button 
                      disabled={formStatus === 'sending'}
                      type="submit" 
                      className={`luxury-button w-full py-6 group text-sm ${formStatus === 'success' ? '!bg-green-600' : ''}`}
                    >
                      {formStatus === 'idle' && (
                        <>
                          <span>{t('contactPage.sendBtn')}</span>
                          <FiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                        </>
                      )}
                      {formStatus === 'sending' && (
                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="w-6 h-6 border-2 border-white border-t-transparent rounded-full" />
                      )}
                      {formStatus === 'success' && (
                        <span className="flex items-center gap-2"><FiCheck className="w-5 h-5" /> {t('contactPage.messageSent')}</span>
                      )}
                    </button>
                  </Magnetic>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

