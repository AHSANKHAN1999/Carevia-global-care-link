import React, { useState } from 'react';
import {
  Activity,
  Ambulance,
  Baby,
  UserPlus,
  Stethoscope,
  Thermometer,
  Plane,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface ServiceDetails {
  title: string;
  icon: React.ReactNode;
  description: string;
  items: string[];
}

const servicesData: ServiceDetails[] = [
  {
    title: "ICU Level / HDU AT HOME",
    icon: <Activity size={32} className="text-secondary" />,
    description: "Comprehensive intensive care unit setup and monitoring in the comfort of your home.",
    items: [
      "Ventilator Management",
      "BiPAP / CPAP Support",
      "Tracheostomy Care",
      "COPD, Asthma Management",
      "Pneumonia and Infection Control"
    ]
  },
  {
    title: "EMERGENCY RESPONSE",
    icon: <Ambulance size={32} className="text-secondary" />,
    description: "Rapid response medical team available 24/7 for critical situations.",
    items: [
      "Immediate Nursing Dispatch",
      "Critical Care Support",
      "Vital Monitoring"
    ]
  },
  {
    title: "PEDIATRIC CARE",
    icon: <Baby size={32} className="text-secondary" />,
    description: "Specialized care for infants and children by pediatric-trained professionals.",
    items: [
      "Pediatric ICU Support",
      "Child Critical Care (CP Cases)"
    ]
  },
  {
    title: "GERIATRIC CARE",
    icon: <UserPlus size={32} className="text-secondary" />,
    description: "Dedicated elderly care focusing on comfort, mobility, and overall well-being.",
    items: [
      "Bedridden Patient Care",
      "Pressure Sore Management"
    ]
  },
  {
    title: "POST-OPERATIVE CARE",
    icon: <Stethoscope size={32} className="text-secondary" />,
    description: "Professional recovery assistance following surgical procedures.",
    items: [
      "Surgical Recovery",
      "Dressing & Wound Care"
    ]
  },
  {
    title: "MEDICAL EQUIPMENT RENTAL / BUY",
    icon: <Thermometer size={32} className="text-secondary" />,
    description: "High-quality medical equipment available for rent or purchase.",
    items: [
      "Oxygen Machine & Concentrators",
      "Bipap Machine & Cardiac Monitors",
      "Hospital Beds (Electric/Manual)",
      "Air Mattress & Suction Machine",
      "Nebulizer & Physiotherapy Machines"
    ]
  },
  {
    title: "TRAVEL & MEDICAL COMPANION",
    icon: <Plane size={32} className="text-secondary" />,
    description: "Professional medical escort for local or international travel (Umrah).",
    items: [
      "Nurse travels with patients",
      "Full medical assistance during journey",
      "Customized packages based on destination"
    ]
  }
];

const ServiceCard: React.FC<{ service: ServiceDetails }> = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    // 'h-full' add kiya gaya hai taake swipe cards ki height barabar rahay
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="p-6 flex-grow flex flex-col">
        <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
          {service.icon}
        </div>
        <h3 className="text-xl font-bold text-primary-dark mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors mt-auto"
        >
          {isExpanded ? 'Show Less' : 'View Details'}
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <ul className="space-y-2">
              {service.items.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <span className="text-secondary mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    // Mobile par py-12 aur Desktop par py-20 taake mobile pe khali jagah kam ho
    <section id="services" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Our Core Services</h2>
          <p className="text-base md:text-lg text-gray-600">
            Providing comprehensive, hospital-grade medical care tailored to your needs, right in the comfort of your home.
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
          
          {servicesData.map((service, index) => (
            // Mobile pe card ki width set ki hai aur 'snap-center' lagaya hai
            <div key={index} className="min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-center flex-shrink-0 h-auto">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;