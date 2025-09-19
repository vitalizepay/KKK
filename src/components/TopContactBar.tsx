import React from 'react';

const TopContactBar = () => {
  return (
    <div className="bg-primary text-white py-2 px-4 hidden md:block">
      <div className="container mx-auto">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <i className="fas fa-phone text-secondary"></i>
              <span>+91 86107 13453</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-phone text-secondary"></i>
              <span>+91 99944 56789</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-envelope text-secondary"></i>
              <span>info@kkktours.com</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="https://www.facebook.com/share/1FP2fqfus8/" className="text-white hover:text-secondary transition-colors">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/kkk_tours_and_travels?igsh=ZTY5b213MHJ3OGRr" className="text-white hover:text-secondary transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/918610713453" className="text-white hover:text-secondary transition-colors">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://www.youtube.com/@KKKToursandTravels" className="text-white hover:text-secondary transition-colors">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContactBar;