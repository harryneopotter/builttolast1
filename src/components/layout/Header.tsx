import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { navigationLinks, ctaLink } from '../../data/navigation';
import logo from '../../assets/logo.png';

const PHONE_NUMBER = '9211462039';
const WHATSAPP_LINK = `https://wa.me/91${PHONE_NUMBER}`;

export function Header({ onOpenForm }: { onOpenForm?: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLetsBuild = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenForm) {
      onOpenForm();
    } else {
      // Scroll to form section as fallback
      document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="Built To Last Logo" className="h-10 md:h-12 w-auto object-contain" />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="font-medium text-sm">WhatsApp</span>
            </a>
            <a
              href={`tel:+91${PHONE_NUMBER}`}
              className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+91-{PHONE_NUMBER}</span>
            </a>
            <button
              onClick={handleLetsBuild}
              className="btn-primary"
            >
              {ctaLink.label}
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors py-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="font-medium">WhatsApp Us</span>
              </a>
              <a
                href={`tel:+91${PHONE_NUMBER}`}
                className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors py-2"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">+91-{PHONE_NUMBER}</span>
              </a>
              <button
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  handleLetsBuild(e);
                }}
                className="btn-primary w-full text-center mt-2"
              >
                {ctaLink.label}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
