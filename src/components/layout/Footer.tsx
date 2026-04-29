import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Carevia Global Care-Link</h3>
          <p className="text-gray-300 text-sm mb-4">
            Delivering Hospital-Level Care with Global Standards at Home.
          </p>
          <div className="text-sm">
            <p><strong>Phone:</strong> +92 302 2096374</p>
            <p><strong>Available:</strong> 24/7 Emergency Response</p>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-secondary mb-4">Services</h4>
          <ul className="text-sm space-y-2 text-gray-300">
            <li>ICU Level / HDU At Home</li>
            <li>Emergency Response</li>
            <li>Pediatric Care</li>
            <li>Geriatric Care</li>
            <li>Post-Operative Care</li>
            <li>Medical Equipment</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-secondary mb-4">Quick Links</h4>
          <ul className="text-sm space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#why-choose-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
            <li><Link to="/booking" className="hover:text-white transition-colors">Book Now</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-secondary mb-4">Global Patient Support</h4>
          <p className="text-sm text-gray-300 mb-4">
            Overseas clients can book services with remote coordination and fast activation.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Carevia Global Care-Link. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
