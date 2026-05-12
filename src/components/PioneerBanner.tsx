import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/stephenoffice21/30min';

const PioneerBanner = () => {
  const { t } = useLanguage();
  const p = t('pioneer');
  if (!p) return null;

  return (
    <section className="relative z-10 px-6 -mt-4">
      <div className="section-container">
        <div
          className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 p-5 md:p-6 rounded-[3px] border"
          style={{
            borderColor: 'rgba(245, 200, 66, 0.35)',
            background: 'linear-gradient(90deg, rgba(245,200,66,0.08), rgba(59,130,246,0.06))',
          }}
        >
          <div className="flex items-center gap-3 shrink-0">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="font-mono-label text-[11px] tracking-[0.15em] uppercase text-accent">
              {p.label}
            </span>
          </div>
          <div className="flex-1">
            <p className="font-display font-bold text-foreground text-base md:text-lg leading-snug">
              {p.title}
            </p>
            <p className="text-sm text-muted-foreground mt-1">{p.description}</p>
          </div>
          <button
            onClick={() => window.open(CALENDLY_URL, '_blank')}
            className="btn-primary shrink-0"
          >
            {p.cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PioneerBanner;