import { pressPartners } from '../../data/partners';

export function Press() {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-heading">Built To Last in the news!</h2>
          <p className="section-subheading">
            Featured in leading publications across India
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {pressPartners.map((press) => (
            <div
              key={press.id}
              className="p-6 rounded-xl flex items-center justify-center h-20 border border-gray-100 hover:border-primary-200 hover:bg-primary-50 transition-all cursor-pointer"
            >
              {press.logoUrl ? (
                <img
                  src={press.logoUrl}
                  alt={press.name}
                  className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement?.querySelector('.fallback-text')?.classList.remove('hidden');
                  }}
                />
              ) : null}
              <span className={`fallback-text text-base font-medium text-gray-500 hover:text-primary-600 transition-colors ${press.logoUrl ? 'hidden' : ''}`}>
                {press.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
