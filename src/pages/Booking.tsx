import React from 'react';
import BookingForm from '../components/BookingForm';

const Booking: React.FC = () => {
  return (
    <div className="bg-gray-50 py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default Booking;
