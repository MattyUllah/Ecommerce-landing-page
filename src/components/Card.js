import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import bl from '../images/chair.jpeg'; // Default image path

const Card = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to the previous card
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  // Go to the next card
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % items.length
    );
  };

  return (
    <div className="flex flex-col items-center">
      {/* For mobile view: Navigation buttons and single card display */}
      <div className="flex justify-center items-center w-full md:hidden relative">
        <button onClick={handlePrevClick} className="absolute left-0">
          <FontAwesomeIcon icon={faChevronLeft} className="text-gray-600 text-2xl" />
        </button>

        <div className="relative bg-pink-300 p-4 shadow-lg rounded-lg w-64">
          <div className="absolute top-4 right-4">
            <FontAwesomeIcon icon={faHeart} className="text-red-500 hover:text-red-500 cursor-pointer" />
          </div>
          <img src={items[currentIndex]?.image || bl} alt={items[currentIndex]?.name} className="mb-4 w-full h-48 object-cover" />
          <div className="mb-3">
            <p className="text-sm text-gray-700">Colors</p>
            <div className="flex space-x-2">
              {items[currentIndex]?.colors && items[currentIndex].colors.length > 0 ? (
                items[currentIndex].colors.map((color, index) => (
                  <span key={index} className={`w-4 h-4 rounded-full`} style={{ backgroundColor: color }}></span>
                ))
              ) : (
                <p className="text-gray-500">No colors available</p>
              )}
            </div>
          </div>
          <h2 className="text-sm text-gray-700 mb-1">{items[currentIndex]?.name || "A product is the item offered for sale"}</h2>
          <p className="text-gray-700 font-bold">{items[currentIndex]?.price || "1448.00"} $</p>
        </div>

        <button onClick={handleNextClick} className="absolute right-0">
          <FontAwesomeIcon icon={faChevronRight} className="text-gray-600 text-2xl" />
        </button>
      </div>

      {/* Indicators below the card, visible only on small screens */}
      <div className="flex justify-center mt-4 space-x-2 md:hidden">
        {items.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
          ></span>
        ))}
      </div>

      {/* For desktop view: Display all cards at once */}
      <div className="hidden md:grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div key={index} className="relative bg-pink-300 p-4 shadow-lg rounded-lg w-64">
            <div className="absolute top-4 right-4">
              <FontAwesomeIcon icon={faHeart} className="text-red-500 hover:text-red-500 cursor-pointer" />
            </div>
            <img src={item.image || bl} alt={item.name} className="mb-4 w-full h-48 object-cover" />
            <div className="mb-3">
              <p className="text-sm text-gray-700">Colors</p>
              <div className="flex space-x-2">
                {item.colors && item.colors.length > 0 ? (
                  item.colors.map((color, index) => (
                    <span key={index} className={`w-4 h-4 rounded-full`} style={{ backgroundColor: color }}></span>
                  ))
                ) : (
                  <p className="text-gray-500">No colors available</p>
                )}
              </div>
            </div>
            <h2 className="text-sm text-gray-700 mb-1">{item.name || "A product is the item offered for sale"}</h2>
            <p className="text-gray-700 font-bold">{item.price || "1448.00"} $</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
