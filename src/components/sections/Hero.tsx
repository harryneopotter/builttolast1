import { ArrowRight, Star, Users } from 'lucide-react';

export function Hero() {
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
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="px-4 py-1.5 bg-primary-600/20 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium">
              India's No.1 Tech-Enabled Construction Company
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Why Built To Last is best Construction Company in India?
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Providing high-quality home building services with transparent processes, real-time updates, and AI-driven technology across multiple cities in India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#estimator" className="btn-primary text-lg px-8 py-4 gap-2">
              Calculate Cost Instantly
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#contact" className="btn-white text-lg px-8 py-4">
              Talk to Expert
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-600/20 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">9000+</p>
                <p className="text-gray-400 text-sm">Happy Owners</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-600/20 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">4.7/5</p>
                <p className="text-gray-400 text-sm">10,000 Reviews</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-600/20 rounded-full flex items-center justify-center">
                <span className="text-primary-400 font-bold">10</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Years</p>
                <p className="text-gray-400 text-sm">Warranty</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
