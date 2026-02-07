import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Calendar, MessageCircle, Phone } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/stephenoffice21/30min';

interface Message {
  role: 'assistant' | 'user';
  content: string;
}

const AIAssistant = () => {
  const { t, language } = useLanguage();
  const ai = t('ai');
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  const whatsappUrl = language === 'it'
    ? 'https://wa.me/447588897549?text=Ciao%2C%20sono%20interessato%20a%20saperne%20di%20pi%C3%B9%20sui%20servizi%20DXS'
    : 'https://wa.me/447588897549?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20DXS%20services';

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: 'assistant', content: ai.greeting }]);
    }
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const getResponse = (msg: string): string => {
    const lower = msg.toLowerCase();
    if (language === 'it') {
      if (lower.includes('prezzo') || lower.includes('costo') || lower.includes('pacchett'))
        return 'I nostri pacchetti partono da £997 per un sito AI Foundation fino a soluzioni enterprise custom da £5,000+. Vuoi confrontare i pacchetti nel dettaglio?';
      if (lower.includes('tempo') || lower.includes('quanto'))
        return 'Un progetto tipico richiede 2-4 settimane. I pacchetti Foundation possono essere pronti in 10 giorni lavorativi.';
      if (lower.includes('parlare') || lower.includes('umano') || lower.includes('specialist'))
        return 'Certo! Puoi prenotare una chiamata su Calendly o scriverci su WhatsApp per parlare direttamente con il nostro team.';
      return 'Grazie per la tua domanda! Per una risposta più dettagliata, ti consiglio di prenotare una consulenza gratuita o scriverci su WhatsApp.';
    }
    if (lower.includes('price') || lower.includes('cost') || lower.includes('package'))
      return 'Our packages start at £997 for a Foundation AI Website up to custom enterprise solutions from £5,000+. Would you like to compare packages in detail?';
    if (lower.includes('time') || lower.includes('long') || lower.includes('how long'))
      return 'Typical projects take 2-4 weeks. Foundation packages can be delivered in as little as 10 business days.';
    if (lower.includes('talk') || lower.includes('human') || lower.includes('specialist') || lower.includes('speak'))
      return 'Of course! You can book a call on Calendly or message us on WhatsApp to speak directly with our team.';
    if (lower.includes('ai') || lower.includes('chatbot') || lower.includes('assistant'))
      return 'We integrate smart AI assistants that qualify leads, answer FAQs, and route enquiries 24/7. This is included in all our packages.';
    return 'Great question! For a detailed answer, I\'d recommend booking a free consultation or messaging us on WhatsApp.';
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', content: getResponse(userMsg) }]);
    }, 600);
  };

  const handleQuickAction = (action: string) => {
    const idx = ai.quickActions.indexOf(action);
    if (idx === 1) { window.open(CALENDLY_URL, '_blank'); return; }
    if (idx === 2) { window.open(whatsappUrl, '_blank'); return; }
    if (idx === 3) { window.open(CALENDLY_URL, '_blank'); return; }
    setMessages(prev => [...prev, { role: 'user', content: action }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', content: getResponse(action) }]);
    }, 600);
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-24 z-50 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        aria-label="AI Assistant"
      >
        {open ? <X className="w-5 h-5 text-primary-foreground" /> : <Bot className="w-6 h-6 text-primary-foreground" />}
      </button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] h-[480px] rounded-2xl bg-card border border-border/50 backdrop-blur-xl flex flex-col shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-border/30 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Bot className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-display font-semibold text-foreground">DXS Assistant</p>
                <p className="text-xs text-muted-foreground">Online</p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-3.5 py-2.5 rounded-xl text-sm ${msg.role === 'user' ? 'bg-primary text-primary-foreground rounded-br-sm' : 'bg-muted text-foreground rounded-bl-sm'}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick actions */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {ai.quickActions.map((action: string, i: number) => (
                  <button
                    key={i}
                    onClick={() => handleQuickAction(action)}
                    className="px-3 py-1.5 rounded-lg bg-muted text-xs text-foreground hover:bg-primary/10 transition-colors"
                  >
                    {action}
                  </button>
                ))}
              </div>
            )}

            {/* Escalation CTAs (show after a few messages) */}
            {messages.length >= 4 && (
              <div className="px-4 pb-2 flex gap-2">
                <button
                  onClick={() => window.open(CALENDLY_URL, '_blank')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors"
                >
                  <Calendar size={12} /> Calendly
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366]/10 text-[#25D366] text-xs font-medium hover:bg-[#25D366]/20 transition-colors"
                >
                  <MessageCircle size={12} /> WhatsApp
                </a>
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-border/30 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={ai.placeholder}
                className="flex-1 px-3.5 py-2 rounded-lg bg-muted border-none outline-none text-sm text-foreground placeholder:text-muted-foreground"
              />
              <button onClick={handleSend} className="p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
