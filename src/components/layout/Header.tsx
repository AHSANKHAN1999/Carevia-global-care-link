import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare } from 'lucide-react';

// 1. Apna logo yahan import karein 
// Make sure path aur file ka naam (e.g., logo.png) theek ho
import logoImage from '../../assets/logo.png'; 

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
{/* UPDATED LOGO SECTION */}
        <Link to="/" className="flex items-center gap-2">
          {/* Container ko ek fixed choti height de kar logo ko uske andar expand karenge */}
          <div className="h-12 flex items-center justify-center overflow-visible">
            <img 
              src={logoImage} 
              alt="Carevia Logo" 
              // w-32 ya w-40 (width) set ki hai aur height hata di hai. 
              // scale-150 usko bada karega lakin header nahi phailayega kyunki container chota hai
              className="w-32 md:w-40 object-contain scale-150 origin-left" 
            />
          </div>
        </Link>
        {/* LOGO SECTION END */}

        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#why-choose-us" className="hover:text-primary transition-colors">Why Us</a>
          <a href="#leadership" className="hover:text-primary transition-colors">Leadership</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-sm text-gray-600">
            <Phone size={16} className="text-primary" />
            <a href="tel:+923022096374" className="font-semibold">+92 302 2096374</a>
          </div>
          <Link to="/booking" className="bg-primary text-white px-4 py-2 rounded-md font-semibold hover:bg-primary-light transition-colors text-sm sm:text-base">
            Book Now
          </Link>
          <a href="https://wa.me/923022096374?text=Assalam o Alaikum,/ Hello CAREVIA mujhe urgently nursing/medical service chahiye." target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors md:hidden">
            <MessageSquare size={20} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;