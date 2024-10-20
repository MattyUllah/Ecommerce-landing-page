import React from 'react';
import m1 from '../images/kk.jpg';
import m2 from '../images/hh.jpg';

const features = [
  {
    title: 'A community doing good',
    description: 'Commence is a global online marketplace, where people.',
    img: m1, 
  },
  {
    title: 'Support independent creators',
    description: 'Just millions of people selling the things they love.',
    img: m2, 
  },
  {
    title: 'Peace of mind',
    description: 'Privacy is the highest priority of our dedicated team.',
    img: m1, 
  },
];

const FeatureSection = () => {
  return (
    <div className="bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex items-center">
          
            <div className="w-32 h-24 rounded-full bg-gray-200 overflow-hidden mr-4"> 
              <img src={feature.img} alt={feature.title} className="w-full h-full object-cover rounded-full" />
            </div>
            
            <div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
