import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Send, Users, Gift, ChevronDown } from 'lucide-react';

const ContactForm = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'client' | 'partner'>('client');
  const [formData, setFormData] = useState({
    name: '', email: '', company: '',
    businessType: '', challenge: '', optional: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const c = t('contact');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      activeTab === 'client' ? 'New Client Enquiry — DXS' : 'New Referral Partner Enquiry — DXS'
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nType: ${activeTab}\nBusiness Type: ${formData.businessType}\nBiggest Challenge: ${formData.challenge}\n\nAdditional Info:\n${formData.optional}`
    );
    window.open(`mailto:info@digitalxstudio.com?cc=stephenoffice21@gmail.com&subject=${subject}&body=${body}`, '_self');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="section-label">Contact</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">{c.title}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{c.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card max-w-2xl mx-auto p-8"
        >
          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setActiveTab('client')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-[3px] text-sm font-medium transition-all ${
                activeTab === 'client'
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-[rgba(255,255,255,0.07)] text-muted-foreground hover:text-foreground'
              }`}
            >
              <Users size={16} /> {c.clientTab}
            </button>
            <button
              onClick={() => setActiveTab('partner')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-[3px] text-sm font-medium transition-all ${
                activeTab === 'partner'
                  ? 'bg-accent text-accent-foreground'
                  : 'border border-[rgba(255,255,255,0.07)] text-muted-foreground hover:text-foreground'
              }`}
            >
              <Gift size={16} /> {c.partnerTab}
            </button>
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            {activeTab === 'client' ? c.clientDesc : c.partnerDesc}
          </p>

          {submitted ? (
            <div className="text-center py-8">
              <p className="text-primary font-semibold text-lg">{c.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text" required maxLength={100} placeholder={c.name}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-[3px] bg-secondary/50 border border-[rgba(255,255,255,0.07)] text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
                <input
                  type="email" required maxLength={255} placeholder={c.email}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-[3px] bg-secondary/50 border border-[rgba(255,255,255,0.07)] text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <input
                type="text" maxLength={100} placeholder={c.company}
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-[3px] bg-secondary/50 border border-[rgba(255,255,255,0.07)] text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
              />

              {/* Business type dropdown */}
              <div className="relative">
                <select
                  required
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full px-4 py-3 rounded-[3px] bg-secondary/50 border border-[rgba(255,255,255,0.07)] text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                >
                  <option value="" disabled className="text-muted-foreground">{c.businessType}</option>
                  {c.businessOptions.map((opt: string, i: number) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              </div>

              {/* Challenge dropdown */}
              <div className="relative">
                <select
                  required
                  value={formData.challenge}
                  onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                  className="w-full px-4 py-3 rounded-[3px] bg-secondary/50 border border-[rgba(255,255,255,0.07)] text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                >
                  <option value="" disabled className="text-muted-foreground">{c.challenge}</option>
                  {c.challengeOptions.map((opt: string, i: number) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              </div>

              {/* Optional text */}
              <input
                type="text" maxLength={500} placeholder={c.optional}
                value={formData.optional}
                onChange={(e) => setFormData({ ...formData, optional: e.target.value })}
                className="w-full px-4 py-3 rounded-[3px] bg-secondary/50 border border-[rgba(255,255,255,0.07)] text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
              />

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Send size={16} /> {c.send}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
