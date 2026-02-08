import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Send, Users, Handshake } from 'lucide-react';

const ContactForm = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'client' | 'partner'>('client');
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const content = {
    en: {
      title: 'Work With Us',
      subtitle: 'Ready to get started? Fill in the form below and we\'ll be in touch.',
      clientTab: 'I\'m a Client',
      partnerTab: 'I\'m a Partner',
      clientDesc: 'Tell us about your project and we\'ll create a smart system tailored to your business.',
      partnerDesc: 'Interested in collaborating? Let us know how we can work together.',
      name: 'Full Name',
      email: 'Email Address',
      company: 'Company Name',
      messageLabel: 'Your Message',
      clientPlaceholder: 'Tell us about your business goals, current challenges, and what you\'d like to achieve...',
      partnerPlaceholder: 'Tell us about your agency/service, how you\'d like to collaborate, and any relevant experience...',
      send: 'Send Message',
      success: 'Thank you! We\'ll be in touch within 24 hours.',
    },
    it: {
      title: 'Lavora con Noi',
      subtitle: 'Pronto per iniziare? Compila il modulo e ti contatteremo.',
      clientTab: 'Sono un Cliente',
      partnerTab: 'Sono un Partner',
      clientDesc: 'Raccontaci del tuo progetto e creeremo un sistema su misura per il tuo business.',
      partnerDesc: 'Interessato a collaborare? Facci sapere come possiamo lavorare insieme.',
      name: 'Nome Completo',
      email: 'Indirizzo Email',
      company: 'Nome Azienda',
      messageLabel: 'Il Tuo Messaggio',
      clientPlaceholder: 'Raccontaci i tuoi obiettivi di business, le sfide attuali e cosa vorresti raggiungere...',
      partnerPlaceholder: 'Raccontaci della tua agenzia/servizio, come vorresti collaborare e la tua esperienza...',
      send: 'Invia Messaggio',
      success: 'Grazie! Ti contatteremo entro 24 ore.',
    },
  };

  const t = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      activeTab === 'client' ? 'New Client Enquiry — DXS' : 'New Partner Enquiry — DXS'
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nType: ${activeTab}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:info@digitalxstudio.com?subject=${subject}&body=${body}`, '_self');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">{t.title}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card max-w-2xl mx-auto p-8"
        >
          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setActiveTab('client')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'client'
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border/50 text-muted-foreground hover:text-foreground'
              }`}
            >
              <Users size={16} /> {t.clientTab}
            </button>
            <button
              onClick={() => setActiveTab('partner')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'partner'
                  ? 'bg-accent text-accent-foreground'
                  : 'border border-border/50 text-muted-foreground hover:text-foreground'
              }`}
            >
              <Handshake size={16} /> {t.partnerTab}
            </button>
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            {activeTab === 'client' ? t.clientDesc : t.partnerDesc}
          </p>

          {submitted ? (
            <div className="text-center py-8">
              <p className="text-primary font-semibold text-lg">{t.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  maxLength={100}
                  placeholder={t.name}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/40 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
                <input
                  type="email"
                  required
                  maxLength={255}
                  placeholder={t.email}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/40 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <input
                type="text"
                maxLength={100}
                placeholder={t.company}
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/40 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
              />
              <textarea
                required
                maxLength={1000}
                rows={5}
                placeholder={activeTab === 'client' ? t.clientPlaceholder : t.partnerPlaceholder}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/40 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
              >
                <Send size={16} /> {t.send}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
