import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomImage from '../components/Image';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="p-6 text-center bg-lightpurple">
        <h2 className="text-4xl font-bold text-darkblue mb-4">
          About Our Eco-Friendly Sandals
        </h2>
        <p className="text-lg text-gray-700 mb-4 max-w-2xl mx-auto">
          Our mission is to create eco-friendly, comfortable, and stylish sandals that contribute
          to a more sustainable planet. Each pair is crafted with care and responsibility, ensuring
          both style and comfort while reducing our carbon footprint.
        </p>

        <div className="flex justify-center gap-6 mb-6">
         
          <CustomImage src="/e2.jpg" alt="Eco-Friendly Sandal 1" width={400} height={300} />
          <CustomImage src="/e1.jpg" alt="Eco-Friendly Sandal 2" width={400} height={300} />
        </div>

        <div className="bg-skyblue p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-white mb-4">Why Choose Our Sandals?</h3>
          <ul className="list-disc list-inside text-lg text-gray-800">
            <li>Eco-friendly materials for sustainability</li>
            <li>Comfortable design for all-day wear</li>
            <li>Stylish designs that match any occasion</li>
            <li>Ethically produced to support fair trade practices</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
