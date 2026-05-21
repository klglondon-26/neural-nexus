import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Building2 } from 'lucide-react';

const icons = [Briefcase, TrendingUp, Building2];

const WhoWeServe = () => {
  const { t } = useLanguage();
  const section = t('whoWeServe');

  return (
    <section id="who-we-serve" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="section-label">Who We Serve</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">{section.title}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{section.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {section.cards.map((card: any, i: number) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -60 : i === 2 ? 60 : 0, y: i === 1 ? 40 : 0, rotateY: i === 0 ? 10 : i === 2 ? -10 : 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotateY: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                className="glass-card-hover p-8"
                style={{ transformPerspective: 1000 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
