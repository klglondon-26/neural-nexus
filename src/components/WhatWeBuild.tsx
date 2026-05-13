import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Compass, Layers, Building2, Check, Lock } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/stephenoffice21/30min';
const WHATSAPP_URL = 'https://wa.me/447588897549';
const icons = [Layers, Compass, Building2];

const WhatWeBuild = () => {
  const { t } = useLanguage();
  const section = t('whatWeBuild');
  const tiers: any[] = section.tiers || [];

  return (
    <section id="services" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14"
        >
          <p className="section-label">{section.label || 'What We Build'}</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">{section.title}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{section.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, i) => {
            const Icon = icons[i] || Layers;
            const featured = !!tier.featured;
            const invitation = !!tier.invitationOnly;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative flex flex-col p-7 glass-card-hover ${featured ? 'lg:scale-[1.04] lg:-my-2' : ''} ${invitation ? 'opacity-95' : ''}`}
                style={featured ? { borderColor: 'rgba(59,130,246,0.45)', boxShadow: '0 0 40px rgba(59,130,246,0.18)' } : undefined}
              >
                {featured && (
                  <span className="absolute -top-3 left-7 px-2 py-1 text-[10px] tracking-widest uppercase font-mono-label bg-primary text-primary-foreground rounded-[3px]">
                    {section.featuredBadge || 'Primary'}
                  </span>
                )}
                {invitation && (
                  <span className="absolute -top-3 left-7 px-2 py-1 text-[10px] tracking-widest uppercase font-mono-label bg-secondary text-muted-foreground border border-[rgba(255,255,255,0.1)] rounded-[3px] inline-flex items-center gap-1">
                    <Lock size={10} /> Invitation Only
                  </span>
                )}

                <Icon className={`w-8 h-8 mb-4 ${featured ? 'text-primary' : 'text-muted-foreground'}`} />
                <p className="font-mono-label text-[11px] tracking-[0.15em] uppercase text-primary mb-1">{tier.tag}</p>
                <h3 className="font-display font-bold text-xl text-foreground mb-1">{tier.name}</h3>
                <p className="text-xs text-muted-foreground font-mono-label mb-5">{tier.audience}</p>

                <dl className="space-y-3 text-sm flex-1">
                  <div>
                    <dt className="font-mono-label text-[10px] tracking-widest uppercase text-muted-foreground mb-1">Pain</dt>
                    <dd className="text-foreground/90">{tier.pain}</dd>
                  </div>
                  <div>
                    <dt className="font-mono-label text-[10px] tracking-widest uppercase text-muted-foreground mb-1">Solution</dt>
                    <dd className="text-foreground/90">{tier.solution}</dd>
                  </div>
                  <div className="flex gap-2">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    <p className="text-foreground/90">{tier.result}</p>
                  </div>
                </dl>

                <div className="mt-6 pt-5 border-t border-[rgba(255,255,255,0.07)]">
                  {invitation ? (
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center px-[26px] py-[13px] rounded-[3px] border border-[rgba(255,255,255,0.07)] text-foreground font-semibold text-sm hover:bg-secondary transition-all"
                    >
                      {tier.cta}
                    </a>
                  ) : (
                    <button
                      onClick={() => window.open(CALENDLY_URL, '_blank')}
                      className={featured ? 'btn-primary w-full' : 'w-full px-[26px] py-[13px] rounded-[3px] border border-[rgba(255,255,255,0.07)] text-foreground font-semibold text-sm hover:bg-secondary transition-all'}
                    >
                      {tier.cta}
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
