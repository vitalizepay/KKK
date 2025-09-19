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
    <nav className="bg-white shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              KKK <span className="text-secondary">Tours & Travels</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {currentMenuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right side - Language toggle and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
            >
              <i className="fas fa-globe text-primary"></i>
              <span className="font-medium">{language}</span>
            </button>
            
            <Button className="btn-hero">
              {language === 'EN' ? 'Get a Quote' : 'மேற்கோள் பெறுங்கள்'}
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