import { useState } from 'react';
import { Check, Star, MapPin } from 'lucide-react';
import { pricingPackages } from '../../data/benefits';
import { locations } from '../../data/pricing';

export function PricingPackages() {
  const [selectedLocation, setSelectedLocation] = useState('Gurgaon');

  return (
    <section id="plans" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-heading text-3xl md:text-4xl">
            Choose your path...
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Focusing exclusively on high-quality home construction with our four specialized packages.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-12">
          <MapPin className="w-5 h-5 text-primary-600" />
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 font-medium"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl p-6 transition-all duration-300 ${pkg.isPopular
                ? 'bg-primary-600 text-white shadow-xl scale-105 lg:scale-110 z-10'
                : 'bg-white border border-gray-200 hover:border-primary-300 hover:shadow-lg'
                }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-yellow-900 text-sm font-semibold rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  POPULAR
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className={`text-xl font-bold mb-2 ${pkg.isPopular ? 'text-white' : 'text-gray-900'}`}>
                  {pkg.name}
                </h3>
                <div className={`text-3xl font-bold ${pkg.isPopular ? 'text-white' : 'text-primary-600'}`}>
                  ₹{pkg.pricePerSqFt.toLocaleString('en-IN')}
                  <span className={`text-base font-normal ${pkg.isPopular ? 'text-primary-100' : 'text-gray-500'}`}>
                    /sqft
                  </span>
                </div>
              </div>

              <p className={`text-sm mb-6 ${pkg.isPopular ? 'text-primary-100' : 'text-gray-600'}`}>
                {pkg.description}
              </p>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className={`w-5 h-5 flex-shrink-0 ${pkg.isPopular ? 'text-primary-200' : 'text-primary-600'}`} />
                    <span className={`text-sm ${pkg.isPopular ? 'text-primary-100' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all ${pkg.isPopular
                  ? 'bg-white text-primary-600 hover:bg-gray-100'
                  : 'bg-primary-600 text-white hover:bg-primary-700'
                  }`}
              >
                Select Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
