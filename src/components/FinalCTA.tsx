import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const CALENDLY_URL = 'https://calendly.com/stephenoffice21/30min';

const FinalCTA = () => {
  const { t, language } = useLanguage();
  const section = t('finalCta');

  const whatsappUrl = language === 'it'
    ? 'https://wa.me/447588897549?text=Ciao%2C%20sono%20interessato%20a%20saperne%20di%20pi%C3%B9%20sui%20servizi%20DXS'
    : 'https://wa.me/447588897549?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20DXS%20services';

  return (
    <section className="section-padding relative z-10">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-16 text-center glow-blue"
        >
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">{section.title}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg">{section.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open(CALENDLY_URL, '_blank')}
              className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              {section.cta}
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl border border-border/60 text-foreground font-semibold hover:bg-secondary transition-all"
            >
              {section.ctaSecondary}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
