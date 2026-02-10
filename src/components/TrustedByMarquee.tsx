import { motion } from 'framer-motion';
import stripeLogo from '@/assets/partners/stripe.png';
import googleLogo from '@/assets/partners/google-workspace.png';
import metaLogo from '@/assets/partners/meta.png';
import makeLogo from '@/assets/partners/make.png';
import n8nLogo from '@/assets/partners/n8n.png';
import calendlyLogo from '@/assets/partners/calendly.png';
import whatsappLogo from '@/assets/partners/whatsapp.png';

const tools = [
  { name: 'Stripe', logo: stripeLogo },
  { name: 'Calendly', logo: calendlyLogo },
  { name: 'WhatsApp Business', logo: whatsappLogo },
  { name: 'Google Workspace', logo: googleLogo },
  { name: 'HubSpot', icon: '🟠' },
  { name: 'Meta', logo: metaLogo },
  { name: 'Zapier', icon: '⚡' },
  { name: 'Make', logo: makeLogo },
  { name: 'n8n', logo: n8nLogo },
];

const doubled = [...tools, ...tools];

const TrustedByMarquee = () => {
  return (
    <div className="relative z-10 overflow-hidden py-6">
      <motion.div
        className="flex gap-12 items-center whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 30, ease: 'linear' } }}
      >
        {doubled.map((tool, i) => (
          <div key={i} className="flex items-center gap-3 px-5 py-2.5 rounded-xl border border-border/30 bg-secondary/30 backdrop-blur-sm flex-shrink-0">
            {'logo' in tool && tool.logo ? (
              <img src={tool.logo} alt={tool.name} className="h-6 w-auto object-contain" />
            ) : (
              <>
                <span className="text-xl">{tool.icon}</span>
                <span className="text-sm font-medium text-muted-foreground">{tool.name}</span>
              </>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TrustedByMarquee;
