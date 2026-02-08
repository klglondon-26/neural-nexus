import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import dxsLogo from '@/assets/dxs-logo.png';

const CALENDLY_URL = 'https://calendly.com/stephenoffice21/30min';

const Hero = () => {
  const { t } = useLanguage();
  const hero = t('hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="section-container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <img src={dxsLogo} alt="DXS" className="w-48 h-auto md:w-72 lg:w-96 mx-auto object-contain animate-float drop-shadow-[0_0_40px_hsl(210_100%_55%/0.3)]" />
          <p className="mt-3 text-sm md:text-base tracking-[0.35em] uppercase text-muted-foreground font-display font-medium">Digital X Studio</p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-foreground max-w-4xl mx-auto mb-6"
        >
          {hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => window.open(CALENDLY_URL, '_blank')}
            className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            {hero.cta}
          </button>
          <a
            href="#pricing"
            className="px-8 py-4 rounded-xl border border-border/60 text-foreground font-semibold text-base hover:bg-secondary transition-all"
          >
            {hero.ctaSecondary}
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-xs text-muted-foreground tracking-widest uppercase"
        >
          {hero.trustedBy}
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
