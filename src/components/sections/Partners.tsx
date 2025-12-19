import { bankingPartners } from '../../data/partners';

export function Partners() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-heading">Our Banking Partners</h2>
          <p className="section-subheading">
            Helping customers get easy access of home construction loans
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {bankingPartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white p-6 rounded-xl flex items-center justify-center h-24 shadow-sm hover:shadow-md transition-shadow"
            >
              {partner.logoUrl ? (
                <img
                  src={partner.logoUrl}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement?.querySelector('.fallback-text')?.classList.remove('hidden');
                  }}
                />
              ) : null}
              <span className={`fallback-text text-lg font-semibold text-gray-600 hover:text-primary-600 transition-colors ${partner.logoUrl ? 'hidden' : ''}`}>
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
