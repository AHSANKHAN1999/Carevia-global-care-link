import React from 'react';
import { Award, Globe, Shield, Activity } from 'lucide-react';

// Apni images ko yahan import karen. 
import image1 from '../../assets/gulzar.jpg'; 
import image2 from '../../assets/sumair.jpg';

const Leadership: React.FC = () => {
  return (
    // Mobile par padding py-12 taake gap kam ho
    <section id="leadership" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-3 md:mb-4">Leadership & Trust</h2>
          <p className="text-base md:text-lg text-gray-600 px-2">
            Guided by experienced medical professionals dedicated to global healthcare excellence.
          </p>
        </div>

        {/* Mobile par gap-6, PC par gap-12 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          
          {/* Founder Profile */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            {/* Mobile par height fix ki hai (h-64) taake image puri screen na ghere */}
            <div className="w-full md:w-2/5 h-64 md:h-auto bg-primary-dark relative shrink-0">
              <img 
                src={image1} 
                alt="Gulzar Ali - Founder" 
                className="w-full h-full object-cover opacity-80 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/50 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-5 md:p-6 w-full">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Gulzar Ali</h3>
                <p className="text-secondary text-sm md:text-base font-medium">Founder & Chief Inspiring Officer (CIO)</p>
              </div>
            </div>
            
            {/* Mobile par padding p-5 ki hai */}
            <div className="w-full md:w-3/5 p-5 md:p-8 flex flex-col justify-center">
              <div className="mb-5 md:mb-6">
                <h4 className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Background</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <Globe size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Managing Global Healthcare Services from Karachi, Sindh, Pakistan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Affiliated with Dow University of Health Sciences & Ojha Campus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Activity size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Experience: Infectious Diseases Hospital & Research Center</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Qualification: Generic BSN (G-BSN Level)</span>
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <h4 className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 md:mb-3">Core Responsibilities</h4>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full text-[11px] md:text-xs font-semibold">Vision & Strategy</span>
                  <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full text-[11px] md:text-xs font-semibold">Clinical Standards</span>
                  <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full text-[11px] md:text-xs font-semibold">Patient Safety</span>
                </div>
              </div>
            </div>
          </div>

          {/* Operations Manager Profile */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            {/* Mobile par height fix ki hai (h-64) */}
            <div className="w-full md:w-2/5 h-64 md:h-auto bg-primary relative shrink-0">
              <img 
                src={image2} 
                alt="Muhammad Sumair - Operations" 
                className="w-full h-full object-cover opacity-80 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-5 md:p-6 w-full">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Muhammad Sumair</h3>
                <p className="text-secondary text-sm md:text-base font-medium">Operations Manager Global Services</p>
              </div>
            </div>
            
            {/* Mobile par padding p-5 ki hai */}
            <div className="w-full md:w-3/5 p-5 md:p-8 flex flex-col justify-center">
              <div className="mb-5 md:mb-6">
                <h4 className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Background</h4>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <Globe size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Managing Global Operations from Dubai, UAE</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Activity size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Specialized in International Healthcare Coordination</span>
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <h4 className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 md:mb-3">Core Responsibilities</h4>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full text-[11px] md:text-xs font-semibold">Global Execution</span>
                  <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full text-[11px] md:text-xs font-semibold">Int. Coordination</span>
                  <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full text-[11px] md:text-xs font-semibold">Workforce Handling</span>
                  <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full text-[11px] md:text-xs font-semibold">Quality Control</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Leadership;