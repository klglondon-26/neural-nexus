import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const BeforeAfter = () => {
  const { t } = useLanguage();
  const section = t('beforeAfter');

  return (
    <section className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="section-label">Before & After</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">{section.title}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{section.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {section.cards.map((card: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, rotateY: i % 2 === 0 ? 8 : -8 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              className="glass-card-hover p-6"
              style={{ transformPerspective: 1000 }}
            >
              <div className="mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-destructive/70 font-mono-label">Before</span>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{card.before}</p>
              </div>
              <div className="flex justify-center mb-4">
                <ArrowRight className="w-5 h-5 text-primary rotate-90" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary font-mono-label">After</span>
                <p className="text-sm text-foreground mt-1 leading-relaxed font-medium">{card.after}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
