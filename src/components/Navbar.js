import React from 'react';
import CategoryRow from './CategoryRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


import { faSearch } from '@fortawesome/free-solid-svg-icons'; 



const categories = [
    { name: "Clothing & Shoes", img: require('../images/tshoes.jpeg'), color: "bg-green-100" },
    { name: "Home & Living", img: require('../images/tshoes.jpeg'), color: "bg-purple-100" },
    { name: "Art & Collectibles", img: require('../images/tshoes.jpeg'), color: "bg-pink-100" },
  ];

export default function Navbar() {
  return (
    <>
   
   <nav className="bg-white shadow-md">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex flex-wrap justify-between items-center py-4">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-orange-600">E-commerce</h1>
      
      {/* Navigation elements */}
      <div className="flex flex-wrap space-x-4 mt-4 sm:mt-0">
        <select className="border p-2 rounded-lg text-gray-700">
          <option>All categories</option>
          <option>Clothing & Shoes</option>
          <option>Home & Living</option>
          <option>Art & Collectibles</option>
        </select>

        <div className="relative w-full sm:w-64 md:w-96">
  
  <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
    <FontAwesomeIcon icon={faSearch} />
  </span>
  
  
  <input 
    type="text" 
    placeholder="Search anything..." 
    className="border p-2 pr-10 rounded-lg w-full"
  />
</div>


        <button className="text-white hidden sm:block bg-orange-600 w-20 rounded-full">Help</button>
        <button className="text-gray-700 hidden sm:block flex items-center">
  <FontAwesomeIcon icon={faUser} className="mr-2" /> 
  Account
</button>

        <button className="text-gray-700 hidden sm:block">Shopping</button>
      </div>
    </div>
  </div>
</nav>

<CategoryRow/>



<div className="max-w-7xl mx-auto py-8">
  {/* Responsive Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {categories.map((category, index) => (
      <div 
        key={index} 
        className={`relative rounded-lg shadow-md overflow-hidden ${category.color} p-4`}
      >
       
        <img 
          src={category.img} 
          alt={category.name} 
          className="h-40 w-full object-cover rounded-lg" 
        />
        
        
        <div className="absolute bottom-2 left-0 w-full bg-opacity-75 text-white p-2">
          <h3 className="text-center text-lg font-bold">{category.name}</h3>
        </div>
      </div>
    ))}
  </div>
</div>




      
    </>
  )
}
