import React, { useState } from 'react';

const CategoryRow = () => {
  const categories = [
    'Craft Kits',
    'Throw Pillows',
    'Natural Glass',
    'Self-care',
    'Gift Ideas',
    'Wall Decor',
    'Wedding'
  ];

  const [isOpen, setIsOpen] = useState(false); // State to control the visibility of categories

  // Toggle the visibility of categories
  const toggleCategories = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Toggle button for mobile view */}
      <button 
        onClick={toggleCategories} 
        className="sm:hidden py-2 px-4 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors mb-4"
      >
        {isOpen ? 'Hide Categories' : 'Show Categories'}
      </button>

      {/* Grid layout for larger screens */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="text-center py-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <p className="font-semibold text-gray-700">{category}</p>
          </div>
        ))}
      </div>

      {/* Display categories in mobile view when isOpen is true */}
      {isOpen && (
        <div className="grid grid-cols-2 sm:hidden gap-4">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="text-center py-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <p className="font-semibold text-gray-700">{category}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryRow;
