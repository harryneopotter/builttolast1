import { ArrowRight } from 'lucide-react';
import { AppointmentForm } from '../ui/AppointmentForm';

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
          backgroundImage: 'url(https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/40" />
      </div>

      <div className="section-container relative z-10 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
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

