import { useLanguage } from '@/contexts/LanguageContext';
import dxsLogo from '@/assets/dxs-logo.png';

const CALENDLY_URL = 'https://calendly.com/stephenoffice21/30min';

const Footer = () => {
  const { t, language } = useLanguage();
  const footer = t('footer');
  const nav = t('nav');

  const whatsappUrl = language === 'it'
    ? 'https://wa.me/447588897549?text=Ciao%2C%20sono%20interessato%20a%20saperne%20di%20pi%C3%B9%20sui%20servizi%20DXS'
    : 'https://wa.me/447588897549?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20DXS%20services';

  return (
    <footer className="relative z-10 border-t border-border/30 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={dxsLogo} alt="DXS" className="w-16 h-auto object-contain" />
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">{nav.services}</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">{nav.pricing}</a>
            <a href="#faq" className="hover:text-foreground transition-colors">{nav.faq}</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">WhatsApp</a>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Calendly</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-border/20">
          <p className="text-xs text-muted-foreground">{footer.rights}</p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">{footer.privacy}</a>
            <a href="#" className="hover:text-foreground transition-colors">{footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
