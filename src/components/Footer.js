import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; 

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600">
    
      <div className="bg-blue-500 text-white py-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-4">Yes!</h2>
          <p className="mb-6">Send me exclusive offers, unique gift ideas, and personalized tips for shopping and selling on Commerce.</p>
          <div className="flex justify-center items-center">
            <input 
              type="email" 
              placeholder="Drop your email" 
              className="p-3 rounded-l-lg focus:outline-none"
            />
            <button className="bg-orange-500 text-white p-3 rounded-r-lg">
              Subscribe
            </button>
          </div>
          <p className="mt-4">Find other crafts, home needs?</p>
        </div>
      </div>

      
      <div className="max-w-6xl mx-auto px-4 py-8 border-t border-gray-300">
        <div className="flex flex-wrap justify-between">
         
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="font-bold text-orange-600">E-commerce</h3>
            <p className="text-sm">Cricklewood, London<br />NW2 6QG, UK</p>
            <div className="mt-4 flex space-x-3">
              <FontAwesomeIcon icon={faFacebook} className="text-xl" />
              <FontAwesomeIcon icon={faTwitter} className="text-xl" />
              <FontAwesomeIcon icon={faInstagram} className="text-xl" />
            </div>
          </div>

          
          <div className="w-full md:w-2/3 flex flex-wrap justify-between">
            <div className="w-full sm:w-1/3 mb-4">
              <h4 className="font-bold">Shop</h4>
              <ul className="space-y-2">
                <li>Gift cards</li>
                <li>Site map</li>
                <li>Polka blog</li>
                <li>Login</li>
                <li>Sign in</li>
              </ul>
            </div>
            <div className="w-full sm:w-1/3 mb-4">
              <h4 className="font-bold">Sell</h4>
              <ul className="space-y-2">
                <li>Sell on Polka</li>
                <li>Teams</li>
                <li>Forums</li>
                <li>Affiliates</li>
              </ul>
            </div>
            <div className="w-full sm:w-1/3 mb-4">
              <h4 className="font-bold">About</h4>
              <ul className="space-y-2">
                <li>Polka, Inc.</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Commerce, is powered by 100% renewable electricity.</p>
          <p className="mt-4">© 2023 Commerce, Inc. | Privacy policy | Terms of use | Cookies</p>
          <p className="mt-4">Scroll to top ↑</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
