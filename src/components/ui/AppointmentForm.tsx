import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const CITIES = [
    'Bengaluru',
    'Chennai',
    'Hyderabad',
    'Mysuru',
    'Delhi NCR',
    'Noida',
    'Gurgaon',
    'Pune',
];

export function AppointmentForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        city: 'Bengaluru',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission logic here
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-xl w-full max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Talk to Our Expert</h3>

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
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                    className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-primary-500/30 text-lg mt-2"
                >
                    Book Free Consultation
                </button>

                <p className="text-[10px] text-gray-500 text-center leading-tight">
                    By submitting this form, I confirm that I have read and agreed to accept Built To Last's <a href="#privacy" className="text-primary-600 hover:underline">privacy policy</a>
                </p>
            </form>
        </div>
    );
}
