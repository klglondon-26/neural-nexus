import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const PainPoints = () => {
  const { t } = useLanguage();
  const section = t('painPoints');

  return (
    <section className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="section-label">Pain Points</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">{section.title}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{section.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {section.cards.map((card: string, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-6 border-destructive/20"
            >
              <AlertTriangle className="w-8 h-8 text-destructive/70 mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed">{card}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-display font-semibold text-lg text-foreground"
        >
          {section.bottomLine}
        </motion.p>
      </div>
    </section>
  );
};

export default PainPoints;
