import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials, filterOptions } from '../../data/testimonials';

export function Testimonials() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredTestimonials = testimonials.filter((t) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'primary') return t.package === 'Primary';
    if (activeFilter === 'premium') return t.package === 'Premium' || t.package === 'Platinum';
    if (activeFilter === 'sqft-1000') return t.sqft > 1000;
    return true;
  });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-heading">Our Happy Customers</h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <span className="text-lg text-gray-600">Trusted by</span>
            <span className="text-3xl font-bold text-primary-600">9000+</span>
            <span className="text-lg text-gray-600">Happy Owners</span>
          </div>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-6 h-6 ${star <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-400 fill-yellow-400'}`}
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">4.7</span>
            <span className="text-gray-500">/ 5</span>
            <span className="text-gray-400 ml-2">(10,000 reviews)</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterOptions.map((filter) => (
            <button
              key={filter.id}
              onClick={() => {
                setActiveFilter(filter.id);
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter.id
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {filteredTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
                    <Quote className="w-12 h-12 text-primary-200 mb-6" />
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                      "{testimonial.review}"
                    </p>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.imageUrl}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs px-2 py-0.5 bg-primary-100 text-primary-700 rounded">
                            {testimonial.package}
                          </span>
                          <span className="text-xs text-gray-400">
                            {testimonial.sqft} sqft | {testimonial.projectType}
                          </span>
                        </div>
                      </div>
                      <div className="ml-auto flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {filteredTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'w-8 bg-primary-600' : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
