import { useState, useEffect } from 'react';
import { X, ChevronDown } from 'lucide-react';

const CITIES = [
    'Gurgaon',
    'Jhajjar',
    'Rohtak',
    'Delhi',
    'Faridabad',
    'Delhi NCR',
    'Noida',
];

interface ConsultationPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ConsultationPopup({ isOpen, onClose }: ConsultationPopupProps) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        city: 'Gurgaon',
    });
    const [step, setStep] = useState<'form' | 'success'>('form');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Check if form was submitted in current session or last 24 hours
    useEffect(() => {
        const lastSubmission = localStorage.getItem('btl_form_submitted');
        if (lastSubmission) {
            const submissionTime = parseInt(lastSubmission, 10);
            const now = Date.now();
            const twentyFourHours = 24 * 60 * 60 * 1000;
            if (now - submissionTime < twentyFourHours) {
                // Don't show popup if submitted recently
                return;
            }
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Get Sheet URL from environment variable
            const SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL;

            // Submit to Google Sheet if URL is configured
            if (SHEET_URL) {
                try {
                    await fetch(SHEET_URL, {
                        method: 'POST',
                        mode: 'no-cors',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            name: formData.name,
                            phone: formData.phone,
                            email: formData.email,
                            city: formData.city,
                            source: 'Website Popup Form',
                            timestamp: new Date().toISOString(),
                        }),
                    });
                    console.log('✅ Form data submitted to Google Sheet');
                } catch (sheetError) {
                    console.warn('Could not submit to sheet:', sheetError);
                }
            } else {
                console.log('📝 Form data (Sheet URL not configured):', formData);
            }

            // Mark as submitted
            localStorage.setItem('btl_form_submitted', Date.now().toString());
            sessionStorage.setItem('btl_form_submitted_session', 'true');

            setStep('success');
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setFormData({ name: '', phone: '', email: '', city: 'Gurgaon' });
        setStep('form');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div
            id="form-popup"
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-scale-in">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors z-10"
                    aria-label="Close popup"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-8 text-white">
                    <h3 className="text-2xl font-bold">
                        {step === 'success' ? '🎉 Thank You!' : 'Book Free Consultation'}
                    </h3>
                    <p className="text-primary-100 mt-2">
                        {step === 'success'
                            ? 'Our expert will contact you shortly.'
                            : 'Get expert advice for your dream home'}
                    </p>
                </div>

                <div className="p-6">
                    {step === 'form' && (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Name *"
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
                                    placeholder="Phone Number *"
                                    pattern="[0-9]{10}"
                                    className="w-full pl-24 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    placeholder="Email ID *"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="relative">
                                <select
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all appearance-none cursor-pointer"
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
                                className="w-full py-4 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-primary-500/30 text-lg"
                            >
                                {isSubmitting ? 'Submitting...' : 'Book Free Consultation'}
                            </button>
                        </form>
                    )}

                    {step === 'success' && (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Consultation Booked!</h4>
                            <p className="text-gray-600 mb-6">
                                Our construction expert will reach out to you within 24 hours.
                            </p>
                            <button
                                onClick={resetForm}
                                className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all"
                            >
                                Close
                            </button>
                        </div>
                    )}

                    {step !== 'success' && (
                        <p className="text-[10px] text-gray-500 text-center leading-tight mt-4">
                            By submitting this form, I confirm that I have read and agreed to accept Built To Last's{' '}
                            <a href="#privacy" className="text-primary-600 hover:underline">privacy policy</a>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

