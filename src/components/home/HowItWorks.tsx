import React from 'react';
import { MessageCircle, FileText, ClipboardCheck, UserPlus, HeartPulse } from 'lucide-react';

const steps = [
  {
    icon: <MessageCircle size={32} className="text-white" />,
    title: "1. Contact",
    description: "Reach out via WhatsApp or our website."
  },
  {
    icon: <FileText size={32} className="text-white" />,
    title: "2. Share Details",
    description: "Provide patient information and requirements."
  },
  {
    icon: <ClipboardCheck size={32} className="text-white" />,
    title: "3. Assessment",
    description: "Our experts evaluate the medical needs."
  },
  {
    icon: <UserPlus size={32} className="text-white" />,
    title: "4. Staff Assigned",
    description: "Verified RN/Medical staff is deployed."
  },
  {
    icon: <HeartPulse size={32} className="text-white" />,
    title: "5. Care Starts",
    description: "Professional care begins immediately."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-primary-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-300">
            A simple, fast, and reliable process to get hospital-grade care at home.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start gap-8 relative">
          {/* Connecting Line (Hidden on mobile) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-secondary/30 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="flex-1 flex flex-col items-center text-center relative z-10 w-full">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center border-4 border-secondary shadow-lg mb-6 shadow-secondary/20">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-secondary">{step.title}</h3>
              <p className="text-gray-300 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
