import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Ahmed",
    location: "Karachi, Pakistan",
    service: "Post-Operative Care",
    text: "The nurse assigned for my mother's post-op care was exceptionally professional. The level of hygiene and care matched what we experienced in the hospital. Highly recommended.",
    rating: 5
  },
  {
    name: "Tariq Mahmood",
    location: "Dubai, UAE",
    service: "Travel & Medical Companion",
    text: "Booking a medical companion for my father's Umrah trip gave our family peace of mind. The coordination from Dubai was seamless, and the assigned nurse was very attentive.",
    rating: 5
  },
  {
    name: "Dr. Farhan",
    location: "Lahore, Pakistan",
    service: "ICU Level Home Care",
    text: "As a doctor myself, I am very critical of medical services. Carevia's ICU setup at home for my relative, complete with ventilator management, was top-notch.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    // Mobile pe padding py-12 kardi hai taake unnecessary gap kam ho
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Patient Experiences</h2>
          <p className="text-base md:text-lg text-gray-600">
            Real stories from families who trusted us with their loved ones' care.
          </p>
        </div>

        {/* MOBILE SWIPE & DESKTOP GRID CONTAINER */}
        <div 
          className="flex md:grid overflow-x-auto snap-x snap-mandatory md:overflow-visible grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch pb-6 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Custom CSS to hide webkit scrollbar */}
          <style>{`
            .flex::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {testimonials.map((testimonial, index) => (
            // Mobile ke liye min-w set ki hai aur flex-col/h-full se height barabar ki hai
            <div 
              key={index} 
              className="min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-center flex-shrink-0 bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 relative flex flex-col h-full"
            >
              <Quote size={40} className="text-secondary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-sm md:text-base text-gray-700 italic mb-6 relative z-10 flex-grow">"{testimonial.text}"</p>
              <div className="mt-auto">
                <h4 className="font-bold text-primary-dark">{testimonial.name}</h4>
                <p className="text-xs md:text-sm text-gray-500">{testimonial.location} • {testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;