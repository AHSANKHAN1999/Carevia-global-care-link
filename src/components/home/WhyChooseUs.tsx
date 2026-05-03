import React from 'react';
import { ShieldCheck, UserCheck, Stethoscope, Clock, Zap } from 'lucide-react';

const trustIndicators = [
  {
    // Icon size thora compact kiya hai mobile aur PC dono ke liye
    icon: <ShieldCheck size={32} className="text-secondary" />,
    title: "Hospital Protocols",
    description: "We strictly adhere to international hospital-grade medical protocols for patient safety."
  },
  {
    icon: <UserCheck size={32} className="text-secondary" />,
    title: "Verified RN Staff",
    description: "All our Registered Nurses undergo rigorous background checks and credential verification."
  },
  {
    icon: <Stethoscope size={32} className="text-secondary" />,
    title: "ICU / Emergency Trained",
    description: "Our medical team is specifically trained in critical care and emergency response."
  },
  {
    icon: <Clock size={32} className="text-secondary" />,
    title: "24/7 Monitoring System",
    description: "Continuous patient monitoring ensures immediate action whenever required."
  },
  {
    icon: <Zap size={32} className="text-secondary" />,
    title: "Fast Emergency Response",
    description: "Rapid deployment system designed to reach you within minutes during critical times."
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    // Mobile pe py-12 taake faltu gap kam ho
    <section id="why-choose-us" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-3 md:mb-4">Why Choose Us</h2>
          <p className="text-base md:text-lg text-gray-600 px-2">
            We build trust through uncompromising medical standards, verified professionals, and rapid response systems.
          </p>
        </div>

        {/* Mobile pe gap-4, PC pe gap-8 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {trustIndicators.map((indicator, index) => (
            <div 
              key={index} 
              // YAHAN MAGIC HAI: Mobile pe flex-row (left to right), PC pe flex-col (top to bottom)
              className="flex flex-row md:flex-col items-center md:items-center text-left md:text-center p-4 md:p-6 bg-gray-50 rounded-xl hover:bg-primary-dark hover:text-white group transition-all duration-300 gap-4 md:gap-0 border border-gray-100 shadow-sm md:shadow-none"
            >
              {/* shrink-0 lagaya taake text lamba ho to icon chota na ho jaye */}
              <div className="mb-0 md:mb-4 p-3 md:p-4 bg-white rounded-full group-hover:bg-primary transition-colors shrink-0 shadow-sm md:shadow-none">
                {indicator.icon}
              </div>
              
              <div>
                <h3 className="text-base md:text-xl font-bold mb-1 md:mb-3 group-hover:text-secondary transition-colors">
                  {indicator.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-300 transition-colors">
                  {indicator.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;