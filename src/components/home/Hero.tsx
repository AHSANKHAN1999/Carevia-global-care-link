import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, MessageCircle, CheckCircle } from 'lucide-react';

import doctorImage from '../../assets/images/doctor-hero.png';

const Hero: React.FC = () => {
  // Key Highlights ka array
  const keyHighlights = [
    "24/7 Care Support",
    "Licensed & Skilled Staff",
    "Home Nursing Services",
    "ICU / Post-Operative Care",
    "Elderly & Pediatric Care"
  ];

  return (
    <section className="relative bg-primary-dark text-white pt-24 lg:pt-10 pb-0 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Medical professionals" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* FLEX CONTAINER */}
        <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-8">
          
          {/* LEFT SIDE: Text aur Buttons */}
          <div className="w-full lg:w-[60%] text-center lg:text-left z-20 pb-4 lg:pb-12">
            <span className="inline-block px-4 py-1.5 bg-secondary text-primary-dark font-bold rounded-full mb-4 text-xs sm:text-sm uppercase tracking-wider shadow-sm max-w-xl">
              Delivering Hospital-Level Care with Global Standards at Home.
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 lg:mb-6 leading-tight">
              Hospital-Level ICU & Medical Care at <span className="text-secondary">Your Doorstep.</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl mb-6 text-gray-200 max-w-2xl mx-auto lg:mx-0">
              24/7 Emergency Response Professional Care in Minutes.
            </p>

            {/* KEY HIGHLIGHTS SECTION (New Addition) */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 lg:mb-12">
              {keyHighlights.map((point, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 shadow-sm hover:bg-white/20 transition-all duration-300"
                >
                  <CheckCircle size={16} className="text-[#25D366]" />
                  <span className="text-sm sm:text-base font-medium text-white">{point}</span>
                </div>
              ))}
            </div>
            
            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a 
                href="https://wa.me/923022096374?text=Assalam o Alaikum,/ Hello CAREVIA mujhe urgently nursing/medical service chahiye." 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-green-600 text-white px-6 py-3.5 lg:px-8 lg:py-4 rounded-lg font-bold text-base lg:text-lg transition-all shadow-lg w-full sm:w-auto"
              >
                <MessageCircle size={22} />
                WhatsApp Now
              </a>
              
              <Link 
                to="/booking" 
                className="flex items-center justify-center gap-2 bg-white text-primary px-6 py-3.5 lg:px-8 lg:py-4 rounded-lg font-bold text-base lg:text-lg hover:bg-gray-100 transition-colors w-full sm:w-auto"
              >
                Book a Nurse
                <ArrowRight size={20} />
              </Link>

              <a 
                href="tel:+923022096374"
                className="flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-primary text-white px-6 py-3.5 lg:px-8 lg:py-4 rounded-lg font-bold text-base lg:text-lg transition-colors w-full sm:w-auto"
              >
                <PhoneCall size={20} />
                Emergency Support
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Doctor ki PNG Image */}
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-end relative mt-2 lg:mt-0">
            <img 
              src={doctorImage} 
              alt="Carevia Professional Doctor" 
              className="w-3/4 sm:w-2/3 lg:w-full max-w-xs sm:max-w-sm lg:max-w-xl h-auto object-contain drop-shadow-2xl relative z-10 lg:-mb-16"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;