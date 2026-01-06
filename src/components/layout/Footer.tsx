import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { ThemeSwitcher } from '../ui/ThemeSwitcher';
import logo from '../../assets/logo.png';

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Packages', href: '#packages' },
  { label: 'Projects', href: '#projects' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQs', href: '#faq' },
];

const cities = [
  'Gurgaon', 'Jhajjar', 'Rohtak', 'Delhi', 'Faridabad'
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="section-container py-12 lg:py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[30%_20%_20%_25%] gap-8 lg:gap-4 justify-between">

          {/* Column 1: Logo & Company Info (30%) */}
          <div className="flex flex-col pr-4">
            <a href="#" className="inline-block mb-4">
              <img src={logo} alt="Built To Last Logo" className="h-32 w-auto" />
            </a>
            <p className="text-gray-400 mb-5 leading-relaxed text-sm">
              India's No.1 Tech-Enabled Construction Company, providing high-quality home building services with transparent processes.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/profile.php?id=61585858574224" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/builttolastworks" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://x.com/BuilttolastHQ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (20%) */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-primary-400 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: We Build In (20%) */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">We Build In</h3>
            <ul className="space-y-2.5">
              {cities.map((city) => (
                <li key={city}>
                  <span className="text-sm">{city}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info (25%) */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:+919211462039" className="flex items-center gap-3 hover:text-primary-400 transition-colors">
                <Phone className="w-5 h-5 text-primary-500" />
                <span className="text-sm">+91 9211462039</span>
              </a>
              <a href="mailto:support@builttolast.co.in" className="flex items-center gap-3 hover:text-primary-400 transition-colors">
                <Mail className="w-5 h-5 text-primary-500" />
                <span className="text-sm">support@builttolast.co.in</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  6th Floor, Universal Trade Tower,<br />Sohna Road, Sector 49, Gurugram
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="tel:+919211462039"
              className="mt-6 inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-sm w-full text-center"
            >
              Call Us Now
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            Developed and Managed by{' '}
            <a
              href="https://bluepanda.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 transition-colors"
            >
              Bluepanda.in
            </a>
          </p>
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
}
