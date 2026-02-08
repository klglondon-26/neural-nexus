import { motion } from 'framer-motion';

const tools = [
  { name: 'Stripe', icon: '💳' },
  { name: 'Calendly', icon: '📅' },
  { name: 'WhatsApp Business', icon: '💬' },
  { name: 'Google Workspace', icon: '🔧' },
  { name: 'HubSpot', icon: '🟠' },
  { name: 'Zapier', icon: '⚡' },
  { name: 'Make', icon: '🔮' },
  { name: 'n8n', icon: '🔗' },
];

const doubled = [...tools, ...tools];

const TrustedByMarquee = () => {
  return (
    <div className="relative z-10 overflow-hidden py-6">
      <motion.div
        className="flex gap-12 items-center whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 25, ease: 'linear' } }}
      >
        {doubled.map((tool, i) => (
          <div key={i} className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border/30 bg-secondary/30 backdrop-blur-sm flex-shrink-0">
            <span className="text-xl">{tool.icon}</span>
            <span className="text-sm font-medium text-muted-foreground">{tool.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TrustedByMarquee;
