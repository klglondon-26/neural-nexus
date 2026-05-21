import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Users, Gift } from 'lucide-react';

const Partners = () => {
  const { t, language } = useLanguage();
  const section = t('partners');

  const whatsappUrl = language === 'it'
    ? 'https://wa.me/447588897549?text=Ciao%2C%20sono%20interessato%20a%20saperne%20di%20pi%C3%B9%20sui%20servizi%20DXS'
    : 'https://wa.me/447588897549?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20DXS%20services';

  return (
    <section id="partners" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="section-label">Work With Us</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">{section.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{section.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* For Clients */}
          <motion.div
            initial={{ opacity: 0, x: -60, rotateY: 8 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="glass-card-hover p-8"
            style={{ transformPerspective: 1000 }}
          >
            <Users className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-display font-semibold text-xl text-foreground mb-3">{section.forClients.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{section.forClients.description}</p>
            <div className="flex gap-3">
              <a href="#contact" className="btn-primary text-sm inline-block">
                {section.forClients.cta}
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="px-[26px] py-[13px] rounded-[3px] border border-[rgba(255,255,255,0.07)] text-foreground text-sm font-medium hover:bg-secondary transition-colors">
                {section.forClients.ctaSecondary}
              </a>
            </div>
          </motion.div>

          {/* For Referral Partners */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -8 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="glass-card-hover p-8"
            style={{ transformPerspective: 1000 }}
          >
            <Gift className="w-10 h-10 text-accent mb-4" />
            <h3 className="font-display font-semibold text-xl text-foreground mb-3">{section.forReferrals.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">{section.forReferrals.description}</p>
            {section.forReferrals.note ? (
              <p className="text-xs text-accent font-medium mb-6 font-mono-label">{section.forReferrals.note}</p>
            ) : <div className="mb-6" />}
            <a href="#contact" className="inline-block px-[26px] py-[13px] rounded-[3px] bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-colors">
              {section.forReferrals.cta}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
