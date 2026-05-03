import React from 'react';
import { MessageCircle, FileText, ClipboardCheck, UserPlus, HeartPulse } from 'lucide-react';

const steps = [
  {
    // size=32 hata kar responsive tailwind classes lagai hain
    icon: <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />,
    title: "1. Contact",
    description: "Reach out via WhatsApp or our website."
  },
  {
    icon: <FileText className="w-6 h-6 md:w-8 md:h-8 text-white" />,
    title: "2. Share Details",
    description: "Provide patient information and requirements."
  },
  {
    icon: <ClipboardCheck className="w-6 h-6 md:w-8 md:h-8 text-white" />,
    title: "3. Assessment",
    description: "Our experts evaluate the medical needs."
  },
  {
    icon: <UserPlus className="w-6 h-6 md:w-8 md:h-8 text-white" />,
    title: "4. Staff Assigned",
    description: "Verified RN/Medical staff is deployed."
  },
  {
    icon: <HeartPulse className="w-6 h-6 md:w-8 md:h-8 text-white" />,
    title: "5. Care Starts",
    description: "Professional care begins immediately."
  }
];

const HowItWorks: React.FC = () => {
  return (
    // Mobile par py-12 taake gap kam ho
    <section className="py-12 md:py-20 bg-primary-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">How It Works</h2>
          <p className="text-base md:text-lg text-gray-300">
            A simple, fast, and reliable process to get hospital-grade care at home.
          </p>
        </div>

        {/* Mobile par gap-3 rakha hai taake steps qareeb qareeb hon */}
        <div className="flex flex-col md:flex-row justify-center items-stretch md:items-start gap-3 md:gap-8 relative">
          
          {/* Connecting Line (Sirf Desktop par dikhegi) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-secondary/30 z-0"></div>

          {steps.map((step, index) => (
            <div 
              key={index} 
              // YAHAN MAGIC HAI: Mobile pe Flex-row (side by side), PC pe Flex-col (top to bottom)
              // Mobile pe pyara sa background aur border bhi diya hai
              className="flex-1 flex flex-row md:flex-col items-center md:items-center relative z-10 w-full bg-white/5 md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none border border-white/10 md:border-transparent transition-all hover:bg-white/10 md:hover:bg-transparent"
            >
              <div className="w-14 h-14 md:w-24 md:h-24 shrink-0 bg-primary rounded-full flex items-center justify-center border-2 md:border-4 border-secondary shadow-lg mb-0 md:mb-6 mr-4 md:mr-0 shadow-secondary/20">
                {step.icon}
              </div>
              <div className="text-left md:text-center">
                <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-secondary">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;