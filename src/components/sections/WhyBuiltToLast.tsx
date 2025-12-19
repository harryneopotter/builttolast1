import { ShieldCheck, Eye, BadgeCheck, Clock } from 'lucide-react';
import { benefits } from '../../data/benefits';

const iconMap: Record<string, React.ElementType> = {
    'shield-check': ShieldCheck,
    'eye': Eye,
    'badge-check': BadgeCheck,
    'clock': Clock,
};

export function WhyBuiltToLast() {
    return (
        <section className="py-20 bg-white">
            <div className="section-container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="section-heading">Why Built To Last?</h2>
                    <p className="section-subheading">
                        We ensure peace of mind, trust, and transparent house construction services.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit) => {
                        const Icon = iconMap[benefit.icon];
                        return (
                            <div
                                key={benefit.id}
                                className="group p-8 bg-gray-50 rounded-2xl hover:bg-primary-50 transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="w-16 h-16 bg-primary-100 group-hover:bg-primary-200 rounded-2xl flex items-center justify-center mb-6 transition-colors">
                                    <Icon className="w-8 h-8 text-primary-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
