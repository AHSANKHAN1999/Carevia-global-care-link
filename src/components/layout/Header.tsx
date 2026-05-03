import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Yahan Menu (lines wala icon) aur X (close icon) add kiya hai
import { Phone, MessageSquare, Menu, X } from 'lucide-react'; 

import logoImage from '../../assets/logo.png'; 

const Header: React.FC = () => {
  // Mobile menu open/close ko control karne ke liye state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menu toggle function
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  // Jab kisi link par click ho to menu band ho jaye
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md relative">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* LOGO SECTION */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
          <div className="h-12 flex items-center justify-center overflow-visible">
            <img 
              src={logoImage} 
              alt="Carevia Logo" 
              className="w-32 md:w-40 object-contain scale-150 origin-left" 
            />
          </div>
        </Link>

        {/* DESKTOP NAVIGATION (Sirf bari screen par dikhega) */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#why-choose-us" className="hover:text-primary transition-colors">Why Us</a>
          <a href="#leadership" className="hover:text-primary transition-colors">Leadership</a>
        </nav>
        
        {/* RIGHT SIDE BUTTONS */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden lg:flex items-center gap-2 text-sm text-gray-600">
            <Phone size={16} className="text-primary" />
            <a href="tel:+923022096374" className="font-semibold">+92 302 2096374</a>
          </div>
          
          <Link to="/booking" className="bg-primary text-white px-4 py-2 rounded-md font-semibold hover:bg-primary-light transition-colors text-sm sm:text-base">
            Book Now
          </Link>
          
          <a 
            href="https://wa.me/923022096374?text=Assalam o Alaikum,/ Hello CAREVIA mujhe urgently nursing/medical service chahiye." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors md:hidden"
            aria-label="WhatsApp"
          >
            <MessageSquare size={18} />
          </a>

          {/* MOBILE MENU BUTTON (Hamburger Icon) */}
          <button 
            className="md:hidden text-primary hover:text-primary-dark transition-colors focus:outline-none ml-1"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {/* Jab isMenuOpen true hoga tabhi ye hissa show hoga */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col py-4 px-6 space-y-4 font-semibold text-gray-700 animate-fade-in-down z-50">
          <Link to="/" onClick={closeMenu} className="hover:text-primary transition-colors block py-2 border-b border-gray-50">Home</Link>
          <a href="#services" onClick={closeMenu} className="hover:text-primary transition-colors block py-2 border-b border-gray-50">Services</a>
          <a href="#why-choose-us" onClick={closeMenu} className="hover:text-primary transition-colors block py-2 border-b border-gray-50">Why Us</a>
          <a href="#leadership" onClick={closeMenu} className="hover:text-primary transition-colors block py-2 border-b border-gray-50">Leadership</a>
          
          <div className="pt-2 flex items-center gap-2 text-sm text-gray-600">
            <Phone size={16} className="text-primary" />
            <a href="tel:+923022096374" className="font-semibold">+92 302 2096374</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;