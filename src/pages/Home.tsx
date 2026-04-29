import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import WhyChooseUs from '../components/home/WhyChooseUs';
import HowItWorks from '../components/home/HowItWorks';
import Leadership from '../components/home/Leadership';
import Testimonials from '../components/home/Testimonials';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <Leadership />
      <Testimonials />
    </main>
  );
};

export default Home;
