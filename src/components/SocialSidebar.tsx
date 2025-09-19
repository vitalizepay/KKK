import React from 'react';

const SocialSidebar = () => {
  return (
    <div className="fixed right-4 top-1/3 z-50 flex flex-col items-center space-y-3">
      <a href="https://www.facebook.com/share/1FP2fqfus8/" className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-blue-600 hover:scale-110 transition-transform">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.instagram.com/kkk_tours_and_travels" className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-pink-500 hover:scale-110 transition-transform">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://wa.me/918610713453" className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-green-600 hover:scale-110 transition-transform">
        <i className="fab fa-whatsapp"></i>
      </a>
      <a href="https://www.youtube.com/@KKKToursandTravels" className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-red-600 hover:scale-110 transition-transform">
        <i className="fab fa-youtube"></i>
      </a>
    </div>
  );
};

export default SocialSidebar;
