import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import FlipCard from './FlipCard';
import { Globe, Bot, Workflow, Plug, Palette } from 'lucide-react';

const icons = [Globe, Bot, Workflow, Plug, Palette];

const WhatWeBuild = () => {
  const { t } = useLanguage();
  const section = t('whatWeBuild');

  return (
    <section id="services" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14"
        >
          <p className="section-label">What We Build</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">{section.title}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{section.subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {section.cards.map((card: any, i: number) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="h-56"
              >
                <FlipCard
                  className="w-full h-full"
                  front={
                    <>
                      <Icon className="w-10 h-10 text-primary mb-4" />
                      <h3 className="font-display font-semibold text-lg text-foreground">{card.front}</h3>
                      <p className="text-xs text-muted-foreground mt-3 font-mono-label">{section.flipHint}</p>
                    </>
                  }
                  back={
                    <p className="text-sm text-muted-foreground leading-relaxed">{card.back}</p>
                  }
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
