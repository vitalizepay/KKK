import React, { useState } from 'react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('EN');

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'TA' : 'EN');
  };

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Packages', href: '#packages' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const menuItemsTamil = [
    { name: 'முகப்பு', href: '#home' },
    { name: 'பேக்கேஜ்கள்', href: '#packages' },
    { name: 'வாகனங்கள்', href: '#fleet' },
    { name: 'இடங்கள்', href: '#destinations' },
    { name: 'எங்களைப் பற்றி', href: '#about' },
    { name: 'கேலரி', href: '#gallery' },
    { name: 'வலைப்பதிவு', href: '#blog' },
    { name: 'தொடர்பு', href: '#contact' },
  ];

  const currentMenuItems = language === 'EN' ? menuItems : menuItemsTamil;

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-40 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-blue-600">KKK Tours and Travels</span>
              <span className="text-gray-800 ml-1 text-lg font-medium">Tamil Nadu</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {currentMenuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right side - Language toggle and CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              <span>{language}</span>
              <i className="fas fa-chevron-down text-sm"></i>
            </button>
            
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105">
              {language === 'EN' ? 'Sign up' : 'பதிவு செய்க'}
            </Button>
            
            <Button variant="ghost" className="text-gray-700 font-medium">
              {language === 'EN' ? 'Login' : 'உள்நுழைய'}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-2 py-1 rounded border border-border"
            >
              <i className="fas fa-globe text-primary text-sm"></i>
              <span className="text-sm font-medium">{language}</span>
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary focus:outline-none"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {currentMenuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="btn-hero mt-4 w-full">
                {language === 'EN' ? 'Get a Quote' : 'மேற்கோள் பெறுங்கள்'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;