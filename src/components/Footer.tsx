import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="bg-dark-gray text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-4">
              KKK Tours & Travels
            </h3>
            <p className="text-gray-300 mb-4">
              Trusted since 2016, licensed by Tamil Nadu Tourism. We provide comfortable journeys and cherished memories across Tamil Nadu.
            </p>
            <p className="text-sm font-tamil text-gray-400">
              சுகமான பயணம். இனிய நினைவுகள்.
            </p>
            <div className="mt-4">
              <p className="text-sm text-gray-400">Licensed by Tamil Nadu Tourism</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#packages" className="text-gray-300 hover:text-secondary transition-colors">Packages</a></li>
              <li><a href="#fleet" className="text-gray-300 hover:text-secondary transition-colors">Fleet</a></li>
              <li><a href="#destinations" className="text-gray-300 hover:text-secondary transition-colors">Destinations</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Popular Packages */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Packages</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Ooty Hill Station</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Kodaikanal Tour</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Madurai Temple Circuit</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Kanyakumari Trip</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Chennai-Pondicherry</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Navagraha Circuit</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt text-secondary mt-1"></i>
                <div>
                  <p className="text-gray-300 text-sm">
                    47A, Sathy Main Road,<br />
                    Saravanampatti,<br />
                    Coimbatore – 641035
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone text-secondary"></i>
                <div>
                  <p className="text-gray-300 text-sm">+91 86107 13453</p>
                  <p className="text-gray-300 text-sm">+91 99944 56789</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-secondary"></i>
                <p className="text-gray-300 text-sm">info@kkktours.com</p>
              </div>
            </div>

            {/* Newsletter Signup */}
            <h5 className="font-semibold mb-3">Newsletter</h5>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                required
              />
              <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Social Icons & Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="https://www.facebook.com/share/1FP2fqfus8/" className="text-white hover:text-secondary transition-colors">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="https://www.instagram.com/kkk_tours_and_travels?igsh=ZTY5b213MHJ3OGRr" className="text-white hover:text-secondary transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="https://wa.me/918610713453" className="text-white hover:text-secondary transition-colors">
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
              <a href="https://www.youtube.com/@KKKToursandTravels" className="text-white hover:text-secondary transition-colors">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 KKK Tours & Travels. All Rights Reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Website designed for exceptional travel experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;