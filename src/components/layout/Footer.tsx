import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import { ThemeSwitcher } from '../ui/ThemeSwitcher';

const siteMapLinks = [
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Luxury Projects', href: '#projects' },
  { label: 'Material Estimator', href: '#estimator' },
  { label: 'About Us', href: '#about' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'Reviews', href: '#testimonials' },
];

const otherLinks = [
  { label: 'Join as Professional', href: '#professional' },
  { label: 'Refer Friend', href: '#referral' },
  { label: 'Channel Partner Program', href: '#partner' },
];

const infoLinks = [
  { label: 'Terms & Conditions', href: '#terms' },
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Cancellation Policy', href: '#cancellation' },
  { label: 'Referral Policy', href: '#referral-policy' },
  { label: 'News & Media', href: '#news' },
];

const cities = [
  'Bengaluru', 'Chennai', 'Hyderabad', 'Mysuru', 'Delhi NCR', 'Noida', 'Gurgaon', 'Pune'
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="font-bold text-xl text-white">
                Built To Last
              </span>
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              India's No.1 Tech-Enabled Construction Company, providing high-quality home building services with transparent processes, real-time updates, and AI-driven technology.
            </p>
            <div className="space-y-3 mb-6">
              <a href="tel:+917505205205" className="flex items-center gap-3 hover:text-primary-400 transition-colors">
                <Phone className="w-5 h-5 text-primary-500" />
                <span>+91 7505 205 205</span>
              </a>
              <a href="mailto:support@builttolast.com" className="flex items-center gap-3 hover:text-primary-400 transition-colors">
                <Mail className="w-5 h-5 text-primary-500" />
                <span>support@builttolast.com</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span>58, 60 Feet Rd, Koramangala, Bengaluru, Karnataka 560095</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Site Map</h3>
            <ul className="space-y-3">
              {siteMapLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-primary-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Others</h3>
            <ul className="space-y-3">
              {otherLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-primary-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="font-semibold text-white mt-8 mb-4">Information</h3>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-primary-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">We Build In</h3>
            <ul className="space-y-3">
              {cities.map((city) => (
                <li key={city}>
                  <a href="#" className="hover:text-primary-400 transition-colors">
                    {city}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3">
              <a href="#" className="inline-block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-10"
                />
              </a>
              <a href="#" className="inline-block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on App Store"
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2025 Pluckwalk Technologies Pvt. Ltd. All rights reserved.
          </p>
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
}
