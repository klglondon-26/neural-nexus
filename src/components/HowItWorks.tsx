import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Search, Hammer, Rocket } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/stephenoffice21/30min';
const icons = [Search, Hammer, Rocket];


const HowItWorks = () => {
  const { t } = useLanguage();
  const section = t('howItWorks');

  return (
    <section id="how-it-works" className="section-padding relative z-10">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">{section.title}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{section.subtitle}</p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border/50" />

          {section.steps.map((step: any, i: number) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative flex items-start gap-6 mb-12 md:mb-16 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`glass-card p-6 inline-block ${i % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{step.description}</p>
                    <p className="text-primary text-sm font-semibold italic">{step.outcome}</p>
                  </div>
                </div>
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary/20 border border-primary/30 items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <button
            onClick={() => window.open(CALENDLY_URL, '_blank')}
            className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all"
          >
            {section.cta}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
