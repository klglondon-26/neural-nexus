import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Workflows = () => {
  const { t } = useLanguage();
  const section = t('workflows');
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <section id="workflows" className="section-padding relative z-10">
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
          {section.items.map((item: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-6"
            >
              <h3 className="font-display font-semibold text-lg text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.description}</p>

              <button
                onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
                className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors mb-3"
              >
                {section.seeFlow}
                <ChevronDown size={14} className={`transition-transform ${expandedIdx === i ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {expandedIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      {item.steps.map((step: string, si: number) => (
                        <div key={si} className="flex items-center gap-2">
                          <span className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-medium">
                            {step}
                          </span>
                          {si < item.steps.length - 1 && <ArrowRight size={12} className="text-muted-foreground" />}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflows;
