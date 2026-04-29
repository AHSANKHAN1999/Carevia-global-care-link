import React from 'react';
import { ShieldCheck, UserCheck, Stethoscope, Clock, Zap } from 'lucide-react';

const trustIndicators = [
  {
    icon: <ShieldCheck size={40} className="text-secondary" />,
    title: "Hospital Protocols",
    description: "We strictly adhere to international hospital-grade medical protocols for patient safety."
  },
  {
    icon: <UserCheck size={40} className="text-secondary" />,
    title: "Verified RN Staff",
    description: "All our Registered Nurses undergo rigorous background checks and credential verification."
  },
  {
    icon: <Stethoscope size={40} className="text-secondary" />,
    title: "ICU / Emergency Trained",
    description: "Our medical team is specifically trained in critical care and emergency response."
  },
  {
    icon: <Clock size={40} className="text-secondary" />,
    title: "24/7 Monitoring System",
    description: "Continuous patient monitoring ensures immediate action whenever required."
  },
  {
    icon: <Zap size={40} className="text-secondary" />,
    title: "Fast Emergency Response",
    description: "Rapid deployment system designed to reach you within minutes during critical times."
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600">
            We build trust through uncompromising medical standards, verified professionals, and rapid response systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustIndicators.map((indicator, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl hover:bg-primary-dark hover:text-white group transition-all duration-300">
              <div className="mb-4 p-4 bg-white rounded-full group-hover:bg-primary transition-colors">
                {indicator.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors">
                {indicator.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-300 transition-colors">
                {indicator.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
