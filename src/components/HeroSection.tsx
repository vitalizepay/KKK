import React from 'react';
import { Button } from './ui/button';
import ootyHero from '@/assets/destinations/ooty-hero.jpg';
import maduraiTemple from '@/assets/destinations/madurai-temple.jpg';
import kanyakumariRock from '@/assets/destinations/kanyakumari-rock.jpg';
import mahabalipuramShore from '@/assets/destinations/mahabalipuram-shore-temple.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Montage */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
        <div 
          className="bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${ootyHero})` }}
        ></div>
        <div 
          className="bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${maduraiTemple})` }}
        ></div>
        <div 
          className="bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${kanyakumariRock})` }}
        ></div>
        <div 
          className="bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${mahabalipuramShore})` }}
        ></div>
      </div>
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80"
        style={{ background: 'var(--gradient-hero)' }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Explore Tamil Nadu</span>
            <span className="block text-secondary">with Trusted Travel Experts</span>
          </h1>
          
          <div className="text-lg md:text-xl mb-4 font-tamil opacity-90">
            தமிழகத்தை நம்பத்தகுந்த பயண நிபுணர்களுடன் கண்டுகளிக்குங்கள்
          </div>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            "Comfortable Journeys. Cherished Memories."
          </p>
          <p className="text-lg mb-12 opacity-80 font-tamil">
            "சுகமான பயணம். இனிய நினைவுகள்."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button className="btn-hero text-lg px-8 py-4">
              <i className="fas fa-map-marked-alt mr-2"></i>
              Browse Packages
            </Button>
            <Button className="btn-outline-hero text-lg px-8 py-4">
              <i className="fas fa-quote-right mr-2"></i>
              Get a Quote
            </Button>
            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
              <i className="fab fa-whatsapp mr-2"></i>
              WhatsApp Us
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="trust-badge">
              <i className="fas fa-user-tie text-3xl text-secondary mb-2"></i>
              <h3 className="font-semibold mb-1">Expert Drivers</h3>
              <p className="text-sm opacity-80">Licensed & Experienced</p>
            </div>
            <div className="trust-badge">
              <i className="fas fa-car text-3xl text-secondary mb-2"></i>
              <h3 className="font-semibold mb-1">Clean Vehicles</h3>
              <p className="text-sm opacity-80">Well Maintained Fleet</p>
            </div>
            <div className="trust-badge">
              <i className="fas fa-route text-3xl text-secondary mb-2"></i>
              <h3 className="font-semibold mb-1">Custom Itineraries</h3>
              <p className="text-sm opacity-80">Tailored to Your Needs</p>
            </div>
            <div className="trust-badge">
              <i className="fas fa-headset text-3xl text-secondary mb-2"></i>
              <h3 className="font-semibold mb-1">24×7 Support</h3>
              <p className="text-sm opacity-80">Always Here for You</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-white text-2xl opacity-70"></i>
      </div>
    </section>
  );
};

export default HeroSection;