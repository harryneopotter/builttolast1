import { Gift, ArrowRight, Users } from 'lucide-react';

export function ReferralProgram() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
              <Gift className="w-10 h-10 text-white" />
            </div>
            <div className="text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Refer & Earn up to ₹1,00,000
              </h3>
              <p className="text-primary-100">
                Refer your friends and family looking to build their dream home
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-white/80">
              <Users className="w-5 h-5" />
              <span>500+ successful referrals</span>
            </div>
            <a
              href="#"
              className="btn-white px-8 py-4 gap-2"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
