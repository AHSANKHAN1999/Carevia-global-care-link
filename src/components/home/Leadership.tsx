import React from 'react';
import { Award, Globe, Shield, Activity } from 'lucide-react';

// Apni images ko yahan import karen. 
// Note: Path ('../assets/...') aur extension ('.jpg', '.png') ko apne project ke hisaab se adjust kar lijiyega.
import image1 from '../../assets/gulzar.jpg'; 
import image2 from "../../assets/Sumair.jpg";
const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Leadership & Trust</h2>
          <p className="text-lg text-gray-600">
            Guided by experienced medical professionals dedicated to global healthcare excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Founder Profile */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-primary-dark relative">
              <img 
                src={image1} 
                alt="Gulzar Ali - Founder" 
                className="w-full h-full object-cover opacity-80 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-1">Gulzar Ali</h3>
                <p className="text-secondary font-medium">Founder & Chief Inspiring Officer (CIO)</p>
              </div>
            </div>
            <div className="md:w-3/5 p-8 flex flex-col justify-center">
              <div className="mb-6">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Background</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <Globe size={16} className="text-primary mt-1 flex-shrink-0" />
                    Managing Global Healthcare Services from Karachi, Sindh, Pakistan
                  </li>
                  <li className="flex items-start gap-2">
                    <Award size={16} className="text-primary mt-1 flex-shrink-0" />
                    Affiliated with Dow University of Health Sciences & Ojha Campus
                  </li>
                  <li className="flex items-start gap-2">
                    <Activity size={16} className="text-primary mt-1 flex-shrink-0" />
                    Experience: Infectious Diseases Hospital & Research Center
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield size={16} className="text-primary mt-1 flex-shrink-0" />
                    Qualification: Generic BSN (G-BSN Level)
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Core Responsibilities</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">Vision & Strategy</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">Clinical Standards</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">Patient Safety</span>
                </div>
              </div>
            </div>
          </div>

          {/* Operations Manager Profile */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-primary relative">
              <img 
src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"                alt="Muhammad Sumair - Operations" 
                className="w-full h-full object-cover opacity-80 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-1">Muhammad Sumair</h3>
                <p className="text-secondary font-medium">Operations Manager Global Services</p>
              </div>
            </div>
            <div className="md:w-3/5 p-8 flex flex-col justify-center">
              <div className="mb-6">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Background</h4>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <Globe size={16} className="text-primary mt-1 flex-shrink-0" />
                    Managing Global Operations from Dubai, UAE
                  </li>
                  <li className="flex items-start gap-2">
                    <Activity size={16} className="text-primary mt-1 flex-shrink-0" />
                    Specialized in International Healthcare Coordination
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Core Responsibilities</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">Global Execution</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">Int. Coordination</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">Workforce Handling</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">Quality Control</span>
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