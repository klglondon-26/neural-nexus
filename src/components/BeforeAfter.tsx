import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const BeforeAfter = () => {
  const { t } = useLanguage();
  const section = t('beforeAfter');

  return (
    <section className="section-padding relative z-10">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">{section.title}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{section.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {section.cards.map((card: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-6"
            >
              <div className="mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-destructive/70">Before</span>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{card.before}</p>
              </div>
              <div className="flex justify-center mb-4">
                <ArrowRight className="w-5 h-5 text-primary rotate-90" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">After</span>
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
