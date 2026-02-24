import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Send, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import resumePdf from '../assets/resume.pdf';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error("Web3Forms error:", result);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after a few seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail />,
      label: 'Email',
      value: 'josh.dizon.aguiluz25@gmail.com',
      link: 'mailto:josh.dizon.aguiluz25@gmail.com'
    },
    {
      icon: <Linkedin />,
      label: 'LinkedIn',
      value: 'Josh Andrei Aguiluz',
      link: 'https://www.linkedin.com/in/josh-aguiluz-0a150a350/'
    },
    {
      icon: <Github />,
      label: 'GitHub',
      value: '@Josh-Aguiluz',
      link: 'https://github.com/Josh-Aguiluz'
    }
  ];

  return (
    <section className="min-h-screen py-20 md:py-32 graph-paper-bg relative overflow-hidden bg-[#FDF5E7] dark:bg-[#1A1715]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block px-8 md:px-10 py-3 md:py-4 bg-[#A47A2D] dark:bg-[#A47A2D] rounded-full mb-6 md:mb-8">
            <p className="font-mono text-[16px] md:text-[24px] font-bold text-white dark:text-[#1A1715] uppercase tracking-wider">
              // Contact
            </p>
          </div>
          <h1 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-4xl sm:text-6xl lg:text-7xl leading-tight font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-8">
            Get In Touch
          </h1>
          <p className="text-lg md:text-[28px] font-bold text-[#521D07] dark:text-[#B8B0A6] max-w-3xl mx-auto">
            Have a project in mind or just want to say hi? I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="sticker-card bg-white dark:bg-[#252220] p-6 md:p-8 flex items-center gap-6 border-4 border-[#A47A2D] dark:border-[#A47A2D] hover:scale-105 transition-transform"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F5EBD9] dark:bg-[#1A1715] rounded-full flex items-center justify-center border-2 border-[#A47A2D] dark:border-[#A47A2D]">
                  <div className="text-[#521D07] dark:text-[#E2E8F0]">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                  </div>
                </div>
                <div>
                  <h4 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-[18px] md:text-[24px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-1">
                    {item.label}
                  </h4>
                  <p className="font-mono text-[14px] md:text-[18px] font-bold text-[#A47A2D] dark:text-[#A47A2D] break-all">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="sticker-card bg-[#521D07] dark:bg-[#E2E8F0] p-6 md:p-8 border-4 border-[#A47A2D] dark:border-[#A47A2D]">
              <h4 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-[20px] md:text-[24px] font-black text-white dark:text-[#1A1715] uppercase mb-6 text-center">
                Connect With Me
              </h4>
              <div className="flex justify-center gap-4 md:gap-6">
                {[
                  { icon: <Github />, link: 'https://github.com/Josh-Aguiluz', label: "GitHub Profile" },
                  { icon: <Linkedin />, link: 'https://www.linkedin.com/in/josh-aguiluz-0a150a350/', label: "LinkedIn Profile" },
                  { icon: <Twitter />, link: 'https://twitter.com', label: "Twitter Profile" },
                  { icon: <Mail />, link: 'mailto:josh.dizon.aguiluz25@gmail.com', label: "Send Email" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    aria-label={social.label}
                    className="p-3 md:p-4 bg-white dark:bg-[#1A1715] rounded-full hover:bg-[#FFA51F] dark:hover:bg-[#FFA51F] transition-colors group"
                  >
                    <div className="w-5 h-5 md:w-6 md:h-6 text-[#521D07] dark:text-[#E2E8F0] group-hover:text-white transition-colors">
                      {React.cloneElement(social.icon as React.ReactElement, { className: "w-full h-full" })}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Download Resume */}
            <a
              href={resumePdf}
              download="Josh_Aguiluz_Resume.pdf"
              className="sticker-card bg-[#A47A2D] dark:bg-[#D4AF37] p-6 md:p-8 flex items-center justify-center gap-4 border-4 border-[#521D07] dark:border-[#1A1715] hover:scale-105 hover:bg-[#FFA51F] dark:hover:bg-[#F2C94C] transition-all group cursor-pointer"
            >
              <Download className="w-8 h-8 text-white dark:text-[#1A1715] group-hover:-translate-y-1 transition-transform" />
              <h4 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-[20px] md:text-[24px] font-black text-white dark:text-[#1A1715] uppercase">
                Download Resume
              </h4>
            </a>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="sticker-card bg-white dark:bg-[#252220] p-6 md:p-10 border-4 border-[#A47A2D] dark:border-[#A47A2D]">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" style={{ fontFamily: 'Michroma, sans-serif' }} className="block text-[16px] md:text-[20px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-3 tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 md:px-6 md:py-4 text-[16px] md:text-[20px] font-bold bg-white dark:bg-[#252220] text-[#521D07] dark:text-[#E2E8F0] border-2 border-[#A47A2D] dark:border-[#A47A2D] rounded-[16px] md:rounded-[20px] focus:outline-none focus:border-[#FFA51F] dark:focus:border-[#FFA51F] transition-colors placeholder:text-[#521D07]/40"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" style={{ fontFamily: 'Michroma, sans-serif' }} className="block text-[16px] md:text-[20px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-3 tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 md:px-6 md:py-4 text-[16px] md:text-[20px] font-bold bg-white dark:bg-[#252220] text-[#521D07] dark:text-[#E2E8F0] border-2 border-[#A47A2D] dark:border-[#A47A2D] rounded-[16px] md:rounded-[20px] focus:outline-none focus:border-[#FFA51F] dark:focus:border-[#FFA51F] transition-colors placeholder:text-[#521D07]/40"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" style={{ fontFamily: 'Michroma, sans-serif' }} className="block text-[16px] md:text-[20px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-3 tracking-wide">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 md:px-6 md:py-4 text-[16px] md:text-[20px] font-bold bg-white dark:bg-[#252220] text-[#521D07] dark:text-[#E2E8F0] border-2 border-[#A47A2D] dark:border-[#A47A2D] rounded-[16px] md:rounded-[20px] focus:outline-none focus:border-[#FFA51F] dark:focus:border-[#FFA51F] transition-colors placeholder:text-[#521D07]/40"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" style={{ fontFamily: 'Michroma, sans-serif' }} className="block text-[16px] md:text-[20px] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase mb-3 tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 md:px-6 md:py-4 text-[16px] md:text-[20px] font-bold bg-white dark:bg-[#252220] text-[#521D07] dark:text-[#E2E8F0] border-2 border-[#A47A2D] dark:border-[#A47A2D] rounded-[16px] md:rounded-[20px] focus:outline-none focus:border-[#FFA51F] dark:focus:border-[#FFA51F] resize-none transition-colors placeholder:text-[#521D07]/40"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 md:px-8 md:py-4 bg-[#521D07] dark:bg-[#E2E8F0] text-white dark:text-[#1A1715] text-[18px] md:text-[24px] font-black uppercase tracking-wider rounded-[16px] md:rounded-[20px] hover:bg-[#FFA51F] dark:hover:bg-[#FFA51F] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-[4px_4px_0px_#A47A2D] active:translate-y-1 active:shadow-none"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message <Send className="w-5 h-5 md:w-6 md:h-6" />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 dark:bg-green-900/30 border-2 border-green-500 rounded-xl text-center"
                >
                  <p className="font-bold text-green-700 dark:text-green-300">Message sent successfully!</p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-100 dark:bg-red-900/30 border-2 border-red-500 rounded-xl text-center flex flex-col items-center justify-center"
                >
                  <p className="font-bold text-red-700 dark:text-red-300">Failed to send message.</p>
                  <p className="text-sm font-bold text-red-700/80 dark:text-red-300/80 mt-1">If you are the owner, please check your Web3Forms Access Key.</p>
                </motion.div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;