import React from 'react';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import CustomImage from './components/Image'; 

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <div className="flex flex-col justify-center items-center flex-grow text-center py-20">
        <h2 className="text-4xl font-bold text-darkblue mb-4">
          Welcome to Our Eco-Friendly Sandals!
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Join us in making the world a better place with sustainable sandals.
        </p>

        
        <CustomImage src="/3.jpeg" alt="Eco-Friendly Sandal 1" width={400} height={300} />
        <CustomImage src="/1.webp" alt="Eco-Friendly Sandal 2" width={400} height={300} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
