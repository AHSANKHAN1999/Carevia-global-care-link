import React from 'react';
import { Link } from 'react-router-dom';
// Icons import kiye hain taake contact details zyada prominent hon
import { Phone, MessageCircle } from 'lucide-react'; 

const Footer: React.FC = () => {
  return (
    // Mobile par py-8 aur Desktop par py-12
    <footer className="bg-primary-dark text-white py-8 md:py-12">
      {/* Mobile par saara content center align hoga */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">
        
        {/* BRAND & CONTACT */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold mb-3 md:mb-4">Carevia Global Care-Link</h3>
          <p className="text-gray-300 text-sm mb-5 max-w-xs md:max-w-none">
            Delivering Hospital-Level Care with Global Standards at Home.
          </p>
          
          <div className="flex flex-col space-y-3 w-full items-center md:items-start">
            {/* Clickable Phone Number (Direct Dialer khulega) */}
            <a 
              href="tel:+923022096374" 
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2.5 rounded-lg transition-colors border border-white/10 w-fit"
            >
              <Phone size={16} className="text-secondary" />
              <span className="font-semibold text-sm tracking-wide">+92 302 2096374</span>
            </a>
            
            {/* Clickable WhatsApp Support */}
            <a 
              href="https://wa.me/923022096374?text=Assalam o Alaikum,/ Hello CAREVIA mujhe urgently nursing/medical service chahiye." 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 px-4 py-2.5 rounded-lg transition-colors border border-[#25D366]/30 w-fit"
            >
              <MessageCircle size={16} className="text-[#25D366]" />
              <span className="font-semibold text-sm text-[#25D366]">24/7 Emergency Response</span>
            </a>
          </div>
        </div>
        
        {/* SERVICES */}
        <div>
          <h4 className="font-semibold text-secondary mb-3 md:mb-4">Services</h4>
          <ul className="text-sm space-y-2 text-gray-300">
            <li className="py-1">ICU Level / HDU At Home</li>
            <li className="py-1">Emergency Response</li>
            <li className="py-1">Pediatric Care</li>
            <li className="py-1">Geriatric Care</li>
            <li className="py-1">Post-Operative Care</li>
            <li className="py-1">Medical Equipment</li>
          </ul>
        </div>
        
        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold text-secondary mb-3 md:mb-4">Quick Links</h4>
          {/* Flex column lagaya taake links mobile par theek se center hon */}
          <ul className="text-sm space-y-2 text-gray-300 flex flex-col items-center md:items-start">
            <li><Link to="/" className="hover:text-white transition-colors py-1 block">Home</Link></li>
            <li><a href="#services" className="hover:text-white transition-colors py-1 block">Services</a></li>
            <li><a href="#why-choose-us" className="hover:text-white transition-colors py-1 block">Why Choose Us</a></li>
            <li><Link to="/booking" className="hover:text-white transition-colors py-1 block">Book Now</Link></li>
          </ul>
        </div>

        {/* GLOBAL SUPPORT */}
        <div>
          <h4 className="font-semibold text-secondary mb-3 md:mb-4">Global Patient Support</h4>
          <p className="text-sm text-gray-300 mb-4 max-w-xs mx-auto md:mx-0">
            Overseas clients can book services with remote coordination and fast activation.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Carevia Global Care-Link. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;