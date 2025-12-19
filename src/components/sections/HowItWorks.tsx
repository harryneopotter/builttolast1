import { FileText, Users, CreditCard, Layout, Smartphone, Home } from 'lucide-react';
import { steps } from '../../data/howItWorks';

const iconMap: Record<string, React.ElementType> = {
  'file-text': FileText,
  'users': Users,
  'credit-card': CreditCard,
  'layout': Layout,
  'smartphone': Smartphone,
  'home': Home,
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading">How it works</h2>
          <p className="section-subheading">
            A simple 6-step process to build your dream home with Built To Last
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-primary-100" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <div key={step.id} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative z-10 w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                      <Icon className="w-10 h-10 text-primary-600" />
                      <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.id}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5">
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-3 h-3 bg-primary-300 rounded-full" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
