import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { FaFacebookF, FaLine, FaInstagram, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState('idle');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t('nameReq');
    if (!formData.email.trim()) newErrors.email = t('emailReq');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = t('emailInvalid');
    if (!formData.subject.trim()) newErrors.subject = t('subjectReq');
    if (!formData.message.trim()) newErrors.message = t('messageReq');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 4000);
    }, 1500);
  };

  const contactItems = [
    { 
      icon: FiMapPin, 
      label: t('address'), 
      val: t('officeAddress'),
      href: 'https://maps.google.com/?q=253+Asoke+Building+Sukhumvit+21+Bangkok',
      isExternal: true
    },
    { 
      icon: FiMail, 
      label: t('email'), 
      val: 'info@jpsys-th.com',
      href: 'mailto:info@jpsys-th.com',
      isExternal: false
    },
    { 
      icon: FiPhone, 
      label: t('phone'), 
      val: '(02) 664-1674', 
      sub: 'Mon–Fri 9:00am – 6:00pm',
      href: 'tel:+6626641674',
      isExternal: false
    }
  ];

  const socialLinks = [
    { icon: FaFacebookF, url: 'https://www.facebook.com/mosjapan', label: 'Facebook' },
    { icon: FaLine, url: 'https://line.me/ti/p/@mosjapan', label: 'Line' },
    { icon: FaInstagram, url: 'https://www.instagram.com/mosjapan', label: 'Instagram' },
    { icon: FaYoutube, url: 'https://youtube.com/', label: 'YouTube' },
  ];

  const inputBaseClass = "w-full px-6 py-4 bg-gray-50 border rounded-2xl outline-none transition-all duration-300 font-medium text-japan-system-primary placeholder:text-gray-300";

  return (
    <div className="relative min-h-screen bg-japan-system-bg overflow-hidden pt-24 md:pt-32 pb-20 md:pb-32">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-[0.08] md:opacity-[0.1] scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-japan-system-bg/95 via-japan-system-bg/80 to-japan-system-bg/95"></div>
        <div className="absolute inset-0 bg-radial-vignette opacity-50"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.1] md:opacity-[0.2]"></div>
        
        <div className="absolute top-[10%] left-[5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-100/20 rounded-full blur-[80px] md:blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[5%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-indigo-50/30 rounded-full blur-[60px] md:blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-24"
        >
          <span className="text-japan-system-secondary text-[10px] md:text-sm font-black uppercase tracking-[0.3em] md:tracking-[0.4em] mb-4 block">
            {t('getInTouch')}
          </span>
          <h1 className="text-2xl md:text-6xl font-black text-japan-system-primary mb-6 tracking-tight px-4 md:px-0 leading-[1.2]">
            Contact <span className="text-gradient">Our Experts</span>
          </h1>
          <div className="w-12 md:w-24 h-1 md:h-1.5 bg-japan-system-secondary mx-auto rounded-full mb-6 md:mb-10"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-sm md:text-xl leading-relaxed px-4 md:px-2">
            {t('contactExpertsDesc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-32 px-2 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-6 md:p-12 h-full flex flex-col bg-white">
              <h3 className="text-lg md:text-2xl font-black text-japan-system-primary mb-8 md:mb-12 uppercase tracking-tight italic px-2 md:px-0">{t('contactInfo')}</h3>
              
              <div className="space-y-6 md:space-y-10 flex-grow">
                {contactItems.map((item, i) => (
                  <a 
                    key={i} 
                    href={item.href}
                    target={item.isExternal ? '_blank' : undefined}
                    rel={item.isExternal ? 'noopener noreferrer' : undefined}
                    className="flex items-start space-x-4 md:space-x-6 group cursor-pointer"
                  >
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-blue-50 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-japan-system-primary transition-all duration-300">
                      <item.icon className="w-4 h-4 md:w-6 md:h-6 text-japan-system-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1 block">{item.label}</span>
                      <p className="text-japan-system-primary font-bold text-[13px] md:text-lg leading-tight group-hover:text-japan-system-secondary transition-colors">{item.val}</p>
                      {item.sub && <p className="text-gray-400 text-[11px] md:text-sm mt-1.5">{item.sub}</p>}
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-10 md:mt-16 px-2 md:px-0">
                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 mb-5 block">{t('followUs')}</span>
                <div className="flex space-x-3 md:space-x-4">
                  {socialLinks.map((social, i) => (
                    <a 
                      key={i} 
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 md:w-12 md:h-12 bg-gray-50 rounded-xl flex items-center justify-center text-japan-system-primary hover:bg-japan-system-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-110"
                    >
                      <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="glass-card p-6 md:p-12 h-full bg-white shadow-2xl relative overflow-hidden">
              <h3 className="text-lg md:text-2xl font-black text-japan-system-primary mb-8 md:mb-12 uppercase tracking-tight italic px-2 md:px-0">{t('sendMessage')}</h3>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 px-2 md:px-0" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-1.5 md:space-y-2">
                    <label htmlFor="contact-name" className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">{t('fullName')}</label>
                    <input 
                      id="contact-name"
                      name="name"
                      type="text" 
                      value={formData.name}
                      onChange={handleChange}
                      className={`${inputBaseClass} !px-4 !py-3 md:!px-6 md:!py-4 text-xs md:text-base ${errors.name ? 'border-red-400 bg-red-50/30' : 'border-gray-100 focus:border-japan-system-secondary focus:ring-2 focus:ring-japan-system-secondary/10'}`}
                      placeholder={t('enterNamePlaceholder')} 
                    />
                    {errors.name && <p className="text-red-500 text-[9px] md:text-xs ml-4 flex items-center gap-1"><FiAlertCircle className="w-3 h-3" />{errors.name}</p>}
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    <label htmlFor="contact-email" className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">{t('emailAddr')}</label>
                    <input 
                      id="contact-email"
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className={`${inputBaseClass} !px-4 !py-3 md:!px-6 md:!py-4 text-xs md:text-base ${errors.email ? 'border-red-400 bg-red-50/30' : 'border-gray-100 focus:border-japan-system-secondary focus:ring-2 focus:ring-japan-system-secondary/10'}`}
                      placeholder={t('enterEmailPlaceholder')} 
                    />
                    {errors.email && <p className="text-red-500 text-[9px] md:text-xs ml-4 flex items-center gap-1"><FiAlertCircle className="w-3 h-3" />{errors.email}</p>}
                  </div>
                </div>
                <div className="space-y-1.5 md:space-y-2">
                  <label htmlFor="contact-subject" className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">{t('subject')}</label>
                  <input 
                    id="contact-subject"
                    name="subject"
                    type="text" 
                    value={formData.subject}
                    onChange={handleChange}
                    className={`${inputBaseClass} !px-4 !py-3 md:!px-6 md:!py-4 text-xs md:text-base ${errors.subject ? 'border-red-400 bg-red-50/30' : 'border-gray-100 focus:border-japan-system-secondary focus:ring-2 focus:ring-japan-system-secondary/10'}`}
                    placeholder={t('helpPlaceholder')} 
                  />
                  {errors.subject && <p className="text-red-500 text-[9px] md:text-xs ml-4 flex items-center gap-1"><FiAlertCircle className="w-3 h-3" />{errors.subject}</p>}
                </div>
                <div className="space-y-1.5 md:space-y-2">
                  <label htmlFor="contact-message" className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">{t('messageBody')}</label>
                  <textarea 
                    id="contact-message"
                    name="message"
                    rows="4" 
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputBaseClass} !px-4 !py-3 md:!px-6 md:!py-4 text-xs md:text-base resize-none ${errors.message ? 'border-red-400 bg-red-50/30' : 'border-gray-100 focus:border-japan-system-secondary focus:ring-2 focus:ring-japan-system-secondary/10'}`}
                    placeholder={t('tellUsPlaceholder')}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-[9px] md:text-xs ml-4 flex items-center gap-1"><FiAlertCircle className="w-3 h-3" />{errors.message}</p>}
                </div>
                <button 
                  disabled={formStatus === 'sending'}
                  type="submit" 
                  className={`luxury-button w-full flex items-center justify-center gap-3 py-4 md:py-5 group transition-all duration-500 text-xs uppercase tracking-widest ${formStatus === 'success' ? '!bg-green-500 hover:!bg-green-600' : ''}`}
                >
                  {formStatus === 'idle' && (
                    <>
                      <span>{t('sendBtn')}</span>
                      <FiSend className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                  {formStatus === 'sending' && (
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                  )}
                  {formStatus === 'success' && (
                    <span className="flex items-center gap-2"><FiCheck className="w-4 h-4" /> {t('messageSent')}</span>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card h-[250px] md:h-[450px] overflow-hidden relative border-white shadow-2xl mx-2 md:mx-0"
        >
          <iframe 
            title="Japan System Thailand Office — Asoke Building, Bangkok"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.569!2d100.5605!3d13.7370!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed800000001%3A0x6b80145c26725350!2sAsoke%20Building%2C%20Bangkok!5e0!3m2!1sen!2sth!4v1715070000000!5m2!1sen!2sth" 
            className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
