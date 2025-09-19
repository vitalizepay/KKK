import React from 'react';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918610713453', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-float animate-pulse"
      aria-label="Contact us on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </button>
  );
};

export default WhatsAppFloat;