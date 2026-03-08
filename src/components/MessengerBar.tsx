import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { MessageCircle, Send } from 'lucide-react';

const MessengerBar = () => {
  const { t, language } = useLanguage();
  const messenger = t('messenger' as any) as any;

  const whatsappUrl = language === 'it'
    ? 'https://wa.me/447588897549?text=Ciao%2C%20sono%20interessato%20a%20saperne%20di%20pi%C3%B9%20sui%20servizi%20DXS'
    : 'https://wa.me/447588897549?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20DXS%20services';

  const telegramUrl = 'https://t.me/digitalxstudio';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.1 }}
      className="relative z-10 flex justify-center pb-16"
    >
      <div className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm">
        <span className="text-sm text-muted-foreground hidden sm:inline">{messenger?.label ?? 'Reach us instantly'}</span>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366]/15 text-[#25D366] hover:bg-[#25D366]/25 transition-colors text-sm font-medium"
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>
        <a
          href={telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2AABEE]/15 text-[#2AABEE] hover:bg-[#2AABEE]/25 transition-colors text-sm font-medium"
        >
          <Send size={16} />
          Telegram
        </a>
      </div>
    </motion.div>
  );
};

export default MessengerBar;
