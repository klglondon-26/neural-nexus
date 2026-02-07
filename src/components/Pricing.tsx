import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, Star, Crown } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/stephenoffice21/30min';

const Pricing = () => {
  const { t } = useLanguage();
  const section = t('pricing');
  const [expanded, setExpanded] = useState<number | null>(null);
  const [expandedMaint, setExpandedMaint] = useState<number | null>(null);

  return (
    <section id="pricing" className="section-padding relative z-10">
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

        {/* One-Time Packages */}
        <h3 className="font-display font-semibold text-xl text-foreground mb-6">{section.oneTime}</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {section.packages.map((pkg: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`glass-card-hover p-6 relative ${pkg.popular ? 'border-primary/40 glow-blue' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium flex items-center gap-1">
                  <Star size={12} /> Most Popular
                </div>
              )}
              {pkg.bestValue && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium flex items-center gap-1">
                  <Crown size={12} /> Best Value
                </div>
              )}
              <h4 className="font-display font-semibold text-lg text-foreground mb-1">{pkg.name}</h4>
              <p className="text-2xl font-bold gradient-text mb-2">{pkg.price}</p>
              <p className="text-xs text-muted-foreground mb-4">{pkg.perfectFor}</p>

              {/* Expandable features */}
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors mb-3"
              >
                {section.whatsIncluded}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${expanded === i ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {expanded === i && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden space-y-2 mb-4"
                  >
                    {pkg.features.map((f: string, fi: number) => (
                      <li key={fi} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>

              <button
                onClick={() => window.open(CALENDLY_URL, '_blank')}
                className="w-full mt-auto px-4 py-2.5 rounded-lg bg-primary/10 text-primary font-medium text-sm hover:bg-primary/20 transition-colors"
              >
                {section.bookCta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Recurring Maintenance */}
        <h3 className="font-display font-semibold text-xl text-foreground mb-2">{section.recurring}</h3>
        <p className="text-sm text-muted-foreground mb-6">{section.recurringNote}</p>
        <div className="grid md:grid-cols-3 gap-5">
          {section.maintenance.map((plan: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-6"
            >
              <h4 className="font-display font-semibold text-lg text-foreground mb-1">{plan.name}</h4>
              <p className="text-xl font-bold text-primary mb-4">{plan.price}</p>

              <button
                onClick={() => setExpandedMaint(expandedMaint === i ? null : i)}
                className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors mb-3"
              >
                {section.whatsIncluded}
                <ChevronDown size={14} className={`transition-transform ${expandedMaint === i ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {expandedMaint === i && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden space-y-2"
                  >
                    {plan.features.map((f: string, fi: number) => (
                      <li key={fi} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
