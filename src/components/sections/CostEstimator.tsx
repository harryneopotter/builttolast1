import { useState } from 'react';
import { Calculator, MapPin, Layers, Home, ArrowRight } from 'lucide-react';
import { locations } from '../../data/pricing';

export function CostEstimator() {
  const [location, setLocation] = useState('Bengaluru');
  const [plotArea, setPlotArea] = useState(1500);
  const [floors, setFloors] = useState(2);
  const [constructionType, setConstructionType] = useState<'standard' | 'luxury'>('standard');

  const baseRate = constructionType === 'standard' ? 1900 : 3910;
  const estimatedCost = plotArea * floors * baseRate;

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `${(amount / 10000000).toFixed(2)} Cr`;
    } else if (amount >= 100000) {
      return `${(amount / 100000).toFixed(2)} Lakhs`;
    }
    return amount.toLocaleString('en-IN');
  };

  return (
    <section id="estimator" className="py-20 bg-primary-600">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Estimate Your Construction Cost Instantly
            </h2>
            <p className="text-primary-100 text-lg mb-8 leading-relaxed">
              Quickly calculate how much it will cost to build your home with Built To Last's detailed, reliable estimation tool.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Accurate Estimates</h4>
                  <p className="text-primary-100 text-sm">Based on current market rates and material costs</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Detailed Breakdown</h4>
                  <p className="text-primary-100 text-sm">Get itemized cost for each construction phase</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Location
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Home className="w-4 h-4 inline mr-2" />
                  Plot Area (sq ft)
                </label>
                <input
                  type="number"
                  value={plotArea}
                  onChange={(e) => setPlotArea(Number(e.target.value))}
                  min={500}
                  max={10000}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Layers className="w-4 h-4 inline mr-2" />
                  Number of Floors
                </label>
                <select
                  value={floors}
                  onChange={(e) => setFloors(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                >
                  {[1, 2, 3, 4, 5].map((f) => (
                    <option key={f} value={f}>{f} Floor{f > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Construction Type</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setConstructionType('standard')}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${constructionType === 'standard'
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                      }`}
                  >
                    <p className="font-semibold text-gray-900">Homes</p>
                    <p className="text-sm text-gray-500">starts at ₹1900 per sqft</p>
                  </button>
                  <button
                    onClick={() => setConstructionType('luxury')}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${constructionType === 'luxury'
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                      }`}
                  >
                    <p className="font-semibold text-gray-900">Luxury Homes</p>
                    <p className="text-sm text-gray-500">starts at ₹3910 per sqft</p>
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-600">Estimated Cost</span>
                  <span className="text-3xl font-bold text-primary-600">
                    ₹{formatCurrency(estimatedCost)}
                  </span>
                </div>
                <button className="w-full btn-primary py-4 text-lg gap-2">
                  Get Detailed Estimate
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
