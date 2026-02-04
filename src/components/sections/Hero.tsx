import { ArrowRight, Home, Users, Palette } from 'lucide-react';
import { AppointmentForm } from '../ui/AppointmentForm';
import heroBg from '../../assets/pexels-photo-1216589.jpeg';

const serviceButtons = [
  { label: 'Building Homes', href: '#services', icon: Home },
  { label: 'Collaboration Projects', href: '#projects', icon: Users },
  { label: 'Interior Designing', href: '#interior', icon: Palette },
];

export function Hero() {
  const handleTalkToExpert = () => {
    const popup = document.querySelector('[data-popup="consultation"]');
    if (popup) {
      (popup as HTMLElement).click();
    } else {
      document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/40" />
      </div>

      <div className="section-container relative z-10 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            {/* Service Buttons */}
            <div className="flex flex-wrap gap-3 mb-8 -mt-4">
              {serviceButtons.map((service) => (
                <a
                  key={service.label}
                  href={service.href}
                  className="flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-700 rounded-full text-white text-sm font-semibold transition-all shadow-lg hover:shadow-primary-500/30"
                >
                  <service.icon className="w-4 h-4" />
                  {service.label}
                </a>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Build your home with Experts
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Best in class processes, customer centric staff, flexible plans and complete ownership of risks associated
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#estimator" className="btn-primary text-lg px-8 py-4 gap-2">
                Calculate Cost Instantly
                <ArrowRight className="w-5 h-5" />
              </a>
              <button
                onClick={handleTalkToExpert}
                className="btn-white text-lg px-8 py-4"
              >
                Talk to Expert
              </button>
            </div>
          </div>

          <div id="hero-form" className="lg:col-span-12 xl:col-span-5 flex justify-center lg:justify-end">
            <AppointmentForm />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

