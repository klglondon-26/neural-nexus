import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import dxsLogo from '@/assets/dxs-logo.png';

const CALENDLY_URL = 'https://calendly.com/stephenoffice21/30min';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const nav = t('nav');
  const links = [
    { label: nav.services, href: '#services' },
    { label: nav.howItWorks, href: '#how-it-works' },
    { label: nav.pricing, href: '#pricing' },
    { label: nav.workflows, href: '#workflows' },
    { label: nav.partners, href: '#partners' },
    { label: nav.faq, href: '#faq' },
  ];

  const openCalendly = () => window.open(CALENDLY_URL, '_blank');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/30">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src={dxsLogo} alt="DXS" className="h-9 w-9 object-contain" />
          <span className="font-display font-semibold text-lg text-foreground">DXS</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <div className="flex items-center border border-border/50 rounded-lg overflow-hidden text-xs">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1.5 transition-colors ${language === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('it')}
              className={`px-2.5 py-1.5 transition-colors ${language === 'it' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              IT
            </button>
          </div>

          {/* CTA */}
          <button
            onClick={openCalendly}
            className="hidden sm:inline-flex px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {nav.bookConsultation}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border/30 px-6 pb-6">
          <nav className="flex flex-col gap-3 pt-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { openCalendly(); setMobileOpen(false); }}
              className="mt-2 px-4 py-2.5 text-sm font-medium rounded-lg bg-primary text-primary-foreground"
            >
              {nav.bookConsultation}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
