import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const CITIES = [
    'Gurgaon',
    'Jhajjar',
    'Rohtak',
    'Delhi',
    'Faridabad',
    'Delhi NCR',
    'Noida',
];

export function AppointmentForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        city: 'Gurgaon',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL;

            if (SHEET_URL) {
                try {
                    await fetch(SHEET_URL, {
                        method: 'POST',
                        mode: 'no-cors',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            name: formData.name,
                            phone: formData.phone,
                            email: '',
                            city: formData.city,
                            source: 'Hero Form',
                            timestamp: new Date().toISOString(),
                        }),
                    });
                } catch (sheetError) {
                    console.warn('Could not submit to sheet:', sheetError);
                }
            }

            console.log('Form submitted:', formData);
            setIsSuccess(true);

            // Reset after 3 seconds
            setTimeout(() => {
                setIsSuccess(false);
                setFormData({ name: '', phone: '', city: 'Gurgaon' });
            }, 3000);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-xl w-full max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Talk to Our Expert</h3>

            {isSuccess ? (
                <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
                    <p className="text-gray-600">
                        Our expert will contact you shortly.
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>

                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                            <div className="flex items-center gap-1.5 border-r border-gray-200 pr-2 mr-2">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                                    alt="IN"
                                    className="w-5 h-3.5 object-cover rounded-sm"
                                />
                                <span className="text-gray-600 text-sm font-medium">+91</span>
                            </div>
                        </div>
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full pl-24 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                            required
                        />
                    </div>

                    <div className="relative">
                        <label className="absolute -top-2 left-3 px-1 bg-white text-xs text-gray-400">
                            Location of your Plot - City*
                        </label>
                        <select
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all appearance-none cursor-pointer bg-transparent"
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            required
                        >
                            {CITIES.map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-primary-500/30 text-lg mt-2"
                    >
                        {isSubmitting ? 'Submitting...' : 'Book Free Consultation'}
                    </button>

                    <p className="text-[10px] text-gray-500 text-center leading-tight">
                        By submitting this form, I confirm that I have read and agreed to accept Built To Last's <a href="#privacy" className="text-primary-600 hover:underline">privacy policy</a>
                    </p>
                </form>
            )}
        </div>
    );
}

