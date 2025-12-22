import { useState } from 'react';
import { Calculator, Layers, ArrowRight } from 'lucide-react';
import { locations } from '../../data/pricing';

export function CostEstimator() {
  const [location, setLocation] = useState('Bengaluru');
  const [plotArea, setPlotArea] = useState(1500);
  const [floors, setFloors] = useState(2);
  const [constructionType] = useState<'standard' | 'luxury'>('standard');

  const baseRate = constructionType === 'standard' ? 1900 : 3910;
  const estimatedCost = plotArea * floors * baseRate;

  const [showResults, setShowResults] = useState(false);
  const [userData, setUserData] = useState({ name: '', email: '', phone: '' });

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
                  <p className="text-primary-100 text-sm">Based on current market rates for materials and labor in your city.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Transparent Logic</h4>
                  <p className="text-primary-100 text-sm">Our 360-point check system calculates costs based on structural design, finishes, and localized procurement data.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            {showResults ? (
              <div className="space-y-6 text-center py-8">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calculator className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Your Estimated Cost</h3>
                <div className="text-5xl font-bold text-primary-600 mb-2">
                  ₹{formatCurrency(estimatedCost)}
                </div>
                <p className="text-gray-600 mb-8 px-4">
                  For {plotArea} sq ft, {floors} Floor{floors > 1 ? 's' : ''} in {location}.
                </p>
                <div className="flex flex-col gap-4 max-w-sm mx-auto">
                  <button onClick={() => setShowResults(false)} className="btn-primary py-4 text-lg">
                    Calculate New Estimate
                  </button>
                  <a href="https://wa.me/917505205205" className="btn-white border-2 border-primary-600 text-primary-600 py-4 text-lg">
                    Speak with our Expert
                  </a>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 transition-colors"
                    >
                      {locations.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Plot Area (sq ft)</label>
                    <input
                      type="number"
                      value={plotArea}
                      onChange={(e) => setPlotArea(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Floors</label>
                  <select
                    value={floors}
                    onChange={(e) => setFloors(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 transition-colors"
                  >
                    {[1, 2, 3, 4, 5].map((f) => (
                      <option key={f} value={f}>{f} Floor{f > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4 text-center text-lg">Enter details to see result</h4>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 transition-colors"
                      value={userData.name}
                      onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 transition-colors"
                      value={userData.phone}
                      onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 transition-colors"
                      value={userData.email}
                      onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    />
                  </div>
                </div>

                <button
                  onClick={() => {
                    if (userData.name && userData.phone && userData.email) {
                      setShowResults(true);
                    } else {
                      alert('Please provide your contact details first.');
                    }
                  }}
                  className="w-full btn-primary py-4 text-lg gap-2 mt-4"
                >
                  Get Your Estimate
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
