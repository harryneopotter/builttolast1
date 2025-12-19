import { Accordion } from '../ui/Accordion';
import { faqs } from '../../data/faq';
import { HelpCircle, Phone } from 'lucide-react';

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="section-heading text-left mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 mb-8">
                Find answers to common questions about our construction services, process, and policies.
              </p>
              <div className="bg-primary-50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <HelpCircle className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Still have questions?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Can't find the answer you're looking for? Our team is here to help.
                </p>
                <a
                  href="tel:+917505205205"
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  +91 7505 205 205
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Accordion items={faqs} />
          </div>
        </div>
      </div>
    </section>
  );
}
