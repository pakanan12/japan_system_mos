import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiMail, FiUser, FiMessageSquare, FiCheckCircle, FiAlertCircle, FiLoader, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';

const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const sendEmail = (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setStatus(null);

    const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const web3formsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (web3formsAccessKey && web3formsAccessKey !== 'your_web3forms_access_key') {
      // Use Web3Forms
      const formData = new FormData(formRef.current);
      formData.append("access_key", web3formsAccessKey);
      formData.append("subject", "New Contact Form Submission - MOS Japan");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      })
        .then(async (res) => {
          const data = await res.json();
          if (data.success) {
            setStatus('success');
            formRef.current.reset();
          } else {
            setStatus('error');
          }
          setIsSending(false);
          setTimeout(() => setStatus(null), 5000);
        })
        .catch(() => {
          setStatus('error');
          setIsSending(false);
          setTimeout(() => setStatus(null), 5000);
        });
    } else if (
      emailjsServiceId && emailjsServiceId !== 'your_emailjs_service_id' &&
      emailjsTemplateId && emailjsTemplateId !== 'your_emailjs_template_id' &&
      emailjsPublicKey && emailjsPublicKey !== 'your_emailjs_public_key'
    ) {
      // Use EmailJS
      emailjs.sendForm(
        emailjsServiceId,
        emailjsTemplateId,
        formRef.current,
        emailjsPublicKey
      )
        .then(() => {
            setStatus('success');
            formRef.current.reset();
            setIsSending(false);
            setTimeout(() => setStatus(null), 5000);
        }, () => {
            setStatus('error');
            setIsSending(false);
            setTimeout(() => setStatus(null), 5000);
        });
    } else {
      // Fallback simulation in dev mode
      console.log("No email service configured. Simulating success in dev mode...");
      setTimeout(() => {
        setStatus('success');
        setIsSending(false);
        formRef.current.reset();
        setTimeout(() => setStatus(null), 5000);
      }, 1500);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative min-h-screen bg-japan-system-bg pt-36 pb-32 overflow-hidden font-sans">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-japan-system-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-japan-system-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12"
      >
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.span 
            variants={itemVariants}
            className="text-japan-system-secondary text-sm font-bold uppercase tracking-[0.4em] mb-4 block"
          >
            {t('contactPage.subtitle') || 'Get In Touch'}
          </motion.span>
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-japan-system-primary mb-6 tracking-tight leading-none"
          >
            {t('contactPage.title') || 'Contact Us'}
          </motion.h1>
          <motion.div variants={itemVariants} className="w-24 h-1.5 bg-japan-system-secondary mx-auto rounded-full mb-6"></motion.div>
          <motion.p 
            variants={itemVariants}
            className="text-gray-500 max-w-xl mx-auto font-light"
          >
            {t('contactPage.formHelp') || 'Have a question or want to work together? Send us a message and we will get back to you shortly.'}
          </motion.p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Office Details */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm space-y-8">
              <h2 className="text-2xl font-bold text-japan-system-primary tracking-tight">
                {t('contactPage.info') || 'Contact Info'}
              </h2>
              
              {/* Address */}
              <div className="flex items-start space-x-5">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <FiMapPin className="w-6 h-6 text-japan-system-primary" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-japan-system-secondary uppercase tracking-widest mb-1.5">
                    {t('contactPage.addressLabel') || 'Address'}
                  </h4>
                  <p className="text-japan-system-primary font-medium text-sm leading-relaxed">
                    {t('contactPage.address') || '129 Moo 9, Hua Pho, Song Phi Nong, Suphan Buri 72110'}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-5">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <FiMail className="w-6 h-6 text-japan-system-primary" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-japan-system-secondary uppercase tracking-widest mb-1.5">
                    {t('contactPage.emailLabel') || 'Email'}
                  </h4>
                  <a href={`mailto:${t('contactPage.email') || 'pakanan2004@gmail.com'}`} className="text-japan-system-primary font-semibold text-sm hover:text-japan-system-secondary transition-colors">
                    {t('contactPage.email') || 'pakanan2004@gmail.com'}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-5">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <FiPhone className="w-6 h-6 text-japan-system-primary" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-japan-system-secondary uppercase tracking-widest mb-1.5">
                    {t('contactPage.phoneLabel') || 'Phone'}
                  </h4>
                  <a href={`tel:${t('contactPage.phone') || '092-724-3149'}`} className="text-japan-system-primary font-semibold text-sm hover:text-japan-system-secondary transition-colors">
                    {t('contactPage.phone') || '092-724-3149'}
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-5 border-t border-gray-50 pt-8">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <FiClock className="w-6 h-6 text-japan-system-primary" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-japan-system-secondary uppercase tracking-widest mb-2">
                    {t('contactPage.hoursLabel') || 'Working Hours'}
                  </h4>
                  <div className="space-y-1 text-sm text-japan-system-primary font-medium">
                    <div className="flex justify-between w-64">
                      <span>{t('contactPage.hoursWeekday') || 'Monday — Friday'}:</span>
                      <span>09:00 — 18:00</span>
                    </div>
                    <div className="flex justify-between w-64 text-gray-400">
                      <span>{t('contactPage.hoursWeekend') || 'Saturday — Sunday'}:</span>
                      <span>{t('contactPage.hoursClosed') || 'Closed'}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7"
          >
            <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
              
              {/* Status Overlay */}
              <AnimatePresence>
                {status && (
                  <motion.div 
                    initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
                    exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    className="absolute inset-0 z-50 flex items-center justify-center bg-white/95"
                  >
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="text-center p-8 max-w-sm"
                    >
                      {status === 'success' ? (
                        <>
                          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FiCheckCircle className="text-5xl text-green-500" />
                          </div>
                          <h3 className="text-2xl font-bold text-japan-system-primary mb-2">Message Sent!</h3>
                          <p className="text-gray-500 font-light">Thank you for reaching out. We will contact you soon.</p>
                        </>
                      ) : (
                        <>
                          <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FiAlertCircle className="text-5xl text-red-500" />
                          </div>
                          <h3 className="text-2xl font-bold text-japan-system-primary mb-2">Failed to Send</h3>
                          <p className="text-gray-500 font-light">Something went wrong. Please try again later.</p>
                          <button 
                            onClick={() => setStatus(null)}
                            className="mt-6 px-6 py-2.5 bg-japan-system-primary text-white font-bold rounded-xl hover:bg-japan-system-secondary transition-colors shadow-md"
                          >
                            Try Again
                          </button>
                        </>
                      )}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-japan-system-secondary">
                      {t('contactPage.fullName') || 'Name'}
                    </label>
                    <div className="relative group">
                      <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-japan-system-secondary transition-colors" />
                      <input 
                        type="text" 
                        name="user_name"
                        required
                        placeholder={t('contactPage.enterName') || "Your full name"}
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 outline-none transition-all focus:ring-4 focus:ring-japan-system-secondary/10 focus:border-japan-system-secondary/50 focus:bg-white text-japan-system-primary font-medium"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-japan-system-secondary">
                      {t('contactPage.emailAddr') || 'Email'}
                    </label>
                    <div className="relative group">
                      <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-japan-system-secondary transition-colors" />
                      <input 
                        type="email" 
                        name="user_email"
                        required
                        placeholder={t('contactPage.enterEmail') || "example@mail.com"}
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 outline-none transition-all focus:ring-4 focus:ring-japan-system-secondary/10 focus:border-japan-system-secondary/50 focus:bg-white text-japan-system-primary font-medium"
                      />
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-japan-system-secondary">
                    {t('contactPage.message') || 'Message'}
                  </label>
                  <div className="relative group">
                    <FiMessageSquare className="absolute left-4 top-6 text-gray-400 group-focus-within:text-japan-system-secondary transition-colors" />
                    <textarea 
                      name="message"
                      required
                      rows="5"
                      placeholder={t('contactPage.tellUs') || "How can we help you?"}
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 pl-12 pr-4 outline-none transition-all focus:ring-4 focus:ring-japan-system-secondary/10 focus:border-japan-system-secondary/50 focus:bg-white text-japan-system-primary font-medium resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <motion.button 
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    disabled={isSending}
                    type="submit"
                    className={`w-full py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 transition-all duration-300 relative overflow-hidden group shadow-lg
                      ${isSending 
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                        : 'bg-japan-system-primary text-white hover:bg-blue-900'
                      }`}
                  >
                    {isSending ? (
                      <>
                        <FiLoader className="animate-spin text-xl" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>{t('contactPage.sendBtn') || 'Send Message'}</span>
                        <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>

        </div>

        {/* Footer info */}
        <motion.div 
          variants={itemVariants}
          className="mt-20 text-center text-gray-400 text-sm font-light"
        >
          <p>© {new Date().getFullYear()} MOS Japan. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
