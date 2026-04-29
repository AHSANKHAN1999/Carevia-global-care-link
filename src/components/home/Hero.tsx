import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, MessageCircle } from 'lucide-react';

// 1. Yahan apni doctor ki PNG image ka path set karein. 
// Make sure path aapke folder structure ke hisaab se sahi ho.
import doctorImage from '../../assets/images/doctor-hero.png';

const Hero: React.FC = () => {
  return (
    // section padding kam kar di (pt-20 pb-32 to pt-12 pb-20)
    <section className="relative bg-primary-dark text-white pt-12 pb-20 lg:pb-0 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Medical professionals" 
          className="w-full h-full object-cover opacity-20"
        />
        {/* Gradient maintain kiya gaya */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* FLEX CONTAINER: Text (Left) aur Image (Right) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* LEFT SIDE: Bara Text aur Buttons */}
          {/* text column wider kar di (55% to 65%) */}
          <div className="w-full lg:w-[65%] pt-10 lg:pt-0">
            {/* span text size barha di (sm to base) */}
            <span className="inline-block px-4 py-1 bg-secondary text-primary-dark font-bold rounded-full mb-6 text-base uppercase tracking-wider shadow-sm max-w-xl">
              Delivering Hospital-Level Care with Global Standards at Home.
            </span>
            {/* H1 headline size kafi bara kar di (6xl-7xl) */}
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Hospital-Level ICU & Medical Care at <span className="text-secondary">Your Doorstep.</span>
            </h1>
            {/* paragraph text size barha di (2xl-3xl) aur margin barha di (mb-10 to mb-16) */}
            <p className="text-2xl md:text-3xl mb-16 text-gray-200 max-w-2xl">
              24/7 Emergency Response Professional Care in Minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              {/* buttons padding barha di (8-4 to 10-5) */}
              <a 
                href="https://wa.me/923022096374?text=Assalam o Alaikum,/ Hello CAREVIA mujhe urgently nursing/medical service chahiye." 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-green-600 text-white px-10 py-5 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-green-500/30"
              >
                <MessageCircle size={28} />
                WhatsApp Now
              </a>
              
              <Link 
                to="/booking" 
                className="flex items-center justify-center gap-3 bg-white text-primary px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Book a Professional Nurse
                <ArrowRight size={24} />
              </Link>

              <a 
                href="tel:+923022096374"
                className="flex items-center justify-center gap-3 border-2 border-white hover:bg-white hover:text-primary text-white px-10 py-5 rounded-lg font-bold text-lg transition-colors sm:w-full md:w-auto mt-2 sm:mt-0"
              >
                <PhoneCall size={24} />
                Emergency Support
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Doctor ki PNG Image */}
          {/* image column width kam kar di (45% to 35%) taake text space fill kare */}
          <div className="w-full lg:w-[35%] flex justify-center lg:justify-end relative mt-10 lg:mt-0">
            <img 
              src={doctorImage} 
              alt="Carevia Professional Doctor" 
              // Image scaling maintain ki gayi
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain drop-shadow-2xl relative z-10 lg:-mb-32"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;