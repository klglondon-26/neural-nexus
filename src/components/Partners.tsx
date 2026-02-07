import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Handshake, ChevronDown, Check } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/stephenoffice21/30min';
const WHATSAPP_URL_EN = 'https://wa.me/447588897549?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20DXS%20services';

const Partners = () => {
  const { t, language } = useLanguage();
  const section = t('partners');
  const [showBenefits, setShowBenefits] = useState(false);

  const whatsappUrl = language === 'it'
    ? 'https://wa.me/447588897549?text=Ciao%2C%20sono%20interessato%20a%20saperne%20di%20pi%C3%B9%20sui%20servizi%20DXS'
    : WHATSAPP_URL_EN;

  return (
    <section id="partners" className="section-padding relative z-10">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">{section.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{section.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* For Clients */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card-hover p-8"
          >
            <Users className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-display font-semibold text-xl text-foreground mb-3">{section.forClients.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{section.forClients.description}</p>
            <div className="flex gap-3">
              <button onClick={() => window.open(CALENDLY_URL, '_blank')} className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                {section.forClients.cta}
              </button>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg border border-border/50 text-foreground text-sm font-medium hover:bg-secondary transition-colors">
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* For Partners */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card-hover p-8"
          >
            <Handshake className="w-10 h-10 text-accent mb-4" />
            <h3 className="font-display font-semibold text-xl text-foreground mb-3">{section.forPartners.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{section.forPartners.description}</p>
            <div className="flex gap-3">
              <button onClick={() => window.open(CALENDLY_URL, '_blank')} className="px-5 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 transition-colors">
                {section.forPartners.cta}
              </button>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg border border-border/50 text-foreground text-sm font-medium hover:bg-secondary transition-colors">
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        {/* Partner Benefits Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 max-w-2xl mx-auto"
        >
          <button
            onClick={() => setShowBenefits(!showBenefits)}
            className="flex items-center justify-between w-full"
          >
            <span className="font-display font-semibold text-foreground">{section.benefitsTitle}</span>
            <ChevronDown size={18} className={`text-muted-foreground transition-transform ${showBenefits ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {showBenefits && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-4 space-y-2"
              >
                {section.benefits.map((b: string, i: number) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={14} className="text-accent flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
