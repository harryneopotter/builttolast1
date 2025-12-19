import { Smartphone, Layout, Box, Clock } from 'lucide-react';

const features = [
  {
    icon: Layout,
    title: 'View packages, floor plans, design recommendations',
  },
  {
    icon: Box,
    title: 'Capture house construction progress in 3D',
  },
  {
    icon: Clock,
    title: 'Realtime tracking until project completion',
  },
];

export function AppTracking() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary-100 rounded-3xl transform -rotate-3" />
              <div className="relative bg-gray-900 rounded-3xl p-4 shadow-2xl">
                <div className="bg-gray-800 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="App Interface"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="section-heading text-left mb-4">
              We construct your dream home. You track progress on app.
            </h2>
            <p className="section-subheading text-left mb-8">
              Stay connected with your project at every step. Our mobile app gives you complete visibility into the construction process.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">{feature.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#" className="inline-block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-12"
                />
              </a>
              <a href="#" className="inline-block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on App Store"
                  className="h-12"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
