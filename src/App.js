import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import FeatureSection from './components/FeatureSection';
import Section from './components/Section';
import Footer from './components/Footer';
import bl from './images/chair.jpeg'; // Adjust the path based on your file structure

const App = () => {
  // Example items to be displayed in the Card component
  const items = [
    { image: bl, name: 'Chair', price: '1448.00', colors: ['red', 'green', 'blue'] },
    { image: bl, name: 'Table', price: '2448.00', colors: ['yellow', 'blue'] },
    { image: bl, name: 'Sofa', price: '3448.00', colors: ['white', 'black'] },
    { image: bl, name: 'Lamp', price: '548.00', colors: ['purple', 'orange'] }, // Added a fourth card
  ];

  return (
    <>
      <Navbar />

      {/* For the first section of cards */}
      <div className="my-8">
        <Card items={items} />
      </div>

      <FeatureSection />

      <Section />

      {/* For the second section of cards */}
      <div className="my-8">
        <Card items={items} />
      </div>

      <Section />

      <Footer />
    </>
  );
};

export default App;
