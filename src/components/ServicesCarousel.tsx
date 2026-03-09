import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react';

const ServicesCarousel = () => {
  const { t } = useLanguage();
  const section = t('services');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => { checkScroll(); }, []);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 340, behavior: 'smooth' });
    setTimeout(checkScroll, 350);
  };

  return (
    <section className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <p className="section-label">Our Services</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">{section.title}</h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button onClick={() => scroll(-1)} disabled={!canScrollLeft} className="p-2 rounded-[3px] border border-[rgba(255,255,255,0.07)] text-muted-foreground hover:text-foreground disabled:opacity-30 transition-all">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => scroll(1)} disabled={!canScrollRight} className="p-2 rounded-[3px] border border-[rgba(255,255,255,0.07)] text-muted-foreground hover:text-foreground disabled:opacity-30 transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {section.items.map((item: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-6 min-w-[300px] max-w-[320px] snap-start flex-shrink-0"
            >
              <Zap className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
