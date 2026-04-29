import React, { useState } from 'react';
import { Calendar, User, MapPin, Stethoscope, AlertTriangle, Send } from 'lucide-react';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    location: '',
    serviceRequired: '',
    urgencyLevel: 'Normal',
    schedule: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to an API
    // For now, redirect to WhatsApp with pre-filled details
    const message = encodeURIComponent(`New Booking Request:\nName: ${formData.patientName}\nLocation: ${formData.location}\nService: ${formData.serviceRequired}\nUrgency: ${formData.urgencyLevel}\nSchedule: ${formData.schedule}`);
    window.open(`https://wa.me/923022096374?text=${message}`, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-primary-dark mb-2">Book Professional Care</h2>
        <p className="text-gray-600">Fill out the form below and our team will respond within minutes.</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <User size={16} className="text-primary" /> Patient Name
          </label>
          <input 
            type="text" 
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none"
            placeholder="Enter patient's full name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <MapPin size={16} className="text-primary" /> Location / City
          </label>
          <input 
            type="text" 
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none"
            placeholder="E.g., Karachi, Dubai, etc."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <Stethoscope size={16} className="text-primary" /> Service Required
          </label>
          <select 
            name="serviceRequired"
            value={formData.serviceRequired}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none bg-white"
          >
            <option value="" disabled>Select a service</option>
            <option value="ICU Level Care">ICU Level / HDU At Home</option>
            <option value="Emergency Response">Emergency Response</option>
            <option value="Pediatric Care">Pediatric Care</option>
            <option value="Geriatric Care">Geriatric Care</option>
            <option value="Post-Operative Care">Post-Operative Care</option>
            <option value="Medical Equipment">Medical Equipment Rental/Buy</option>
            <option value="Travel Companion">Travel & Medical Companion</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <AlertTriangle size={16} className="text-primary" /> Urgency Level
            </label>
            <select 
              name="urgencyLevel"
              value={formData.urgencyLevel}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none bg-white"
            >
              <option value="Normal">Normal (Within 24 Hours)</option>
              <option value="High">High (Within 2-4 Hours)</option>
              <option value="Emergency">Emergency (Immediate)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <Calendar size={16} className="text-primary" /> Schedule
            </label>
            <input 
              type="datetime-local" 
              name="schedule"
              value={formData.schedule}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none"
            />
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors mt-8"
        >
          <Send size={20} />
          Submit Booking Request
        </button>
        <p className="text-xs text-center text-gray-500 mt-4">
          By submitting, you agree to our patient confidentiality terms.
        </p>
      </div>
    </form>
  );
};

export default BookingForm;
