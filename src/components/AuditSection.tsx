import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const CALENDLY_URL = 'https://calendly.com/stephenoffice21/30min';

const AuditSection = () => {
  const { t } = useLanguage();
  const a = t('audit');
  if (!a) return null;

  return (
    <section id="free-audit" className="section-padding" style={{ background: '#03060F' }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center p-8 md:p-12 rounded-[3px] glass-card-hover"
        >
          <p className="section-label">{a.label}</p>
          <h2
            className="font-display font-bold text-foreground mb-5"
            style={{ fontSize: 'clamp(28px, 4vw, 36px)', lineHeight: 1.1 }}
          >
            {a.title}
          </h2>
          <p className="text-muted-foreground mb-8" style={{ color: '#9CA3AF' }}>
            {a.subtitle}
          </p>
          <button onClick={() => window.open(CALENDLY_URL, '_blank')} className="btn-primary">
            {a.cta}
          </button>
          <p className="font-mono-label text-[11px] mt-4" style={{ color: '#7B8FAB' }}>
            {a.micro}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AuditSection;