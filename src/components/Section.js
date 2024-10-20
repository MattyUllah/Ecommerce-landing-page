import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import m1 from '../images/kk.jpg';
import m2 from '../images/hh.jpg';
import m3 from '../images/kk.jpg';

const Item = ({ image, label, name, price, imageClass }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 border rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out relative">
      <div className="absolute top-4 right-6">
        <FontAwesomeIcon
          icon={faHeart}
          className="text-white hover:text-red-500 cursor-pointer"
          style={{ stroke: 'red', strokeWidth: '20' }}
        />
      </div>
      <img src={image} alt={label} className={`w-26 mb-2 ${imageClass}`} />
      <span className="text-center text-sm font-medium">{label}</span>
      {name && <span className="text-sm font-sm">{name}</span>}
      {price && <span className="text-sm font-medium">{price}</span>}
    </div>
  );
};

const Section = () => {
  const items = [
    { image: m1, label: 'Craft Kits' },
    { image: m2, label: 'Throw Pillows' },
    { image: m3, label: 'Natural Glass' },
    { image: m1, label: 'Self-care' },
    { image: m2, label: 'Gift Ideas' },
    { image: m3, label: 'Wall Decor' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6); // Default items per page for desktop

  // Set the number of items per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(2); // 2 items per page on mobile
      } else {
        setItemsPerPage(6); // 6 items per page on larger screens
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize the value on load

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Go to the previous set of items
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  // Go to the next set of items
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= items.length ? 0 : prevIndex + itemsPerPage
    );
  };

  // Get the currently visible items
  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <>
      <section className="my-8 relative">
        <h2 className="text-xl font-semibold text-center mb-4">
          Find things you'll love. Support independent sellers.
        </h2>

        <div className="flex items-center justify-between relative">
          {/* Left slider button */}
          <button
            onClick={handlePrevClick}
            className="text-gray-600 text-2xl absolute left-0 transform -translate-y-1/2 top-1/2 focus:outline-none"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* Items grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full">
            {visibleItems.map((item, index) => (
              <Item key={index} image={item.image} label={item.label} imageClass="h-26" />
            ))}
          </div>

          {/* Right slider button */}
          <button
            onClick={handleNextClick}
            className="text-gray-600 text-2xl absolute right-0 transform -translate-y-1/2 top-1/2 focus:outline-none"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        {/* Indicators for mobile view */}
        <div className="flex justify-center mt-4 space-x-2 md:hidden">
          {items.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${index >= currentIndex && index < currentIndex + itemsPerPage ? 'bg-gray-800' : 'bg-gray-400'}`}
            ></span>
          ))}
        </div>
      </section>

      {/* Another section with name and price */}
      <section className="my-8 relative">
        <h2 className="text-xl font-semibold text-center mb-4">
          Find things you'll love. Support independent sellers.
        </h2>

        <div className="flex items-center justify-between relative">
          {/* Left slider button */}
          <button
            onClick={handlePrevClick}
            className="text-gray-600 text-2xl absolute left-0 transform -translate-y-1/2 top-1/2 focus:outline-none"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* Items grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full">
            {visibleItems.map((item, index) => (
              <Item
                key={index}
                image={item.image}
                label={item.label}
                name="A product is the item offered"
                price="$1448.00"
                imageClass="h-40"
              />
            ))}
          </div>

          {/* Right slider button */}
          <button
            onClick={handleNextClick}
            className="text-gray-600 text-2xl absolute right-0 transform -translate-y-1/2 top-1/2 focus:outline-none"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        {/* Indicators for mobile view */}
        <div className="flex justify-center mt-4 space-x-2 md:hidden">
          {items.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${index >= currentIndex && index < currentIndex + itemsPerPage ? 'bg-gray-800' : 'bg-gray-400'}`}
            ></span>
          ))}
        </div>
      </section>
    </>
  );
};

export default Section;
