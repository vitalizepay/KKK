import React from 'react';
import { Button } from './ui/button';
import SocialSidebar from './SocialSidebar';
import ootyHero from '@/assets/destinations/ooty-hero.jpg';
import topSlips from '@/assets/destinations/topslips-entrance.svg';
import valparai from '@/assets/destinations/valparai-bison.svg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-pink-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        {/* Large decorative circles */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-orange-300/20 to-pink-300/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-16 w-80 h-80 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-yellow-300/30 to-orange-300/30 rounded-full blur-lg"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute bottom-40 right-32 text-4xl opacity-20 animate-bounce">🧳</div>
        <div className="absolute top-1/2 right-20 text-5xl opacity-15 animate-pulse">🗻</div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <SocialSidebar />
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="relative z-10 space-y-8">


            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight fade-in-up">
                <span className="text-blue-600">Travel,</span> enjoy<br />
                and live a <span className="text-orange-500">new</span><br />
                and <span className="text-pink-600">full life</span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-md font-tamil fade-in-up" style={{ animationDelay: '120ms' }}>
                தமிழகத்தின் அழகை கண்டுகளியுங்கள் நம்பகமான பயண நிபுணர்களுடன்
              </p>
              
              <p className="text-lg text-gray-600 max-w-md leading-relaxed fade-in-up" style={{ animationDelay: '200ms' }}>
                Built with love by Tamil Nadu tourism experts. We provide premium experiences 
                with comfortable vehicles and expert drivers who know every corner of our beautiful state.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 fade-in-up" style={{ animationDelay: '300ms' }}>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl zoom-in">
                Find out more
              </Button>
              <Button variant="ghost" className="text-gray-700 px-8 py-4 rounded-2xl text-lg font-medium hover:bg-gray-100 transition-all duration-300 zoom-in" style={{ animationDelay: '360ms' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-play text-white text-sm"></i>
                  </div>
                  <span>Play Demo</span>
                </div>
              </Button>
            </div>
          </div>

          {/* Right Content - Illustration Area */}
          <div className="relative">
            {/* Main Character Illustration Placeholder */}
                <div className="relative z-10 flex justify-center zoom-in" style={{ animationDelay: '220ms' }}>
              <div className="relative">
                {/* Character silhouette - Tamil girl sitting */}
                <div className="w-96 h-96 bg-gradient-to-br from-pink-300 to-orange-300 rounded-full opacity-80 flex items-end justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-200/50 to-transparent"></div>
                  
                  {/* Luggage */}
                  <div className="absolute bottom-8 right-16 w-16 h-20 bg-orange-400 rounded-lg shadow-lg transform rotate-12">
                    <div className="w-full h-2 bg-orange-600 rounded-full mt-2"></div>
                    <div className="w-8 h-8 bg-orange-600 rounded-full mx-auto mt-2"></div>
                  </div>
                  
                  {/* Character representation */}
                  <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
                    <div className="text-8xl">👩🏾</div>
                  </div>
                  
                  {/* Traditional elements */}
                  <div className="absolute top-16 left-12 text-3xl animate-pulse">🌺</div>
                  <div className="absolute top-24 right-20 text-2xl animate-bounce">🕌</div>
                </div>
                
                {/* Floating destination cards */}
                <div className="absolute -top-4 -right-8 bg-white rounded-2xl shadow-xl p-4 w-48 transform rotate-12 hover:rotate-0 transition-transform duration-300 float-animation">
                  <img src={ootyHero} alt="Ooty" className="w-full h-20 object-cover rounded-xl mb-3 animate-pulse" />
                  <div className="text-sm font-semibold text-gray-800">Ooty Hills</div>
                  <div className="text-xs text-gray-500 font-tamil">ஊட்டி மலைகள்</div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="text-xs text-gray-400">3 Days</div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-32 -left-12 bg-white rounded-2xl shadow-xl p-4 w-44 transform -rotate-6 hover:rotate-0 transition-transform duration-300" style={{ animationDelay: '140ms' }}>
                  <img src={topSlips} alt="Top Slips" className="w-full h-16 object-cover rounded-xl mb-2 jump-animation" />
                  <div className="text-sm font-semibold text-gray-800">Top Slips</div>
                  <div className="text-xs text-gray-500 font-tamil">டாப் ஸ்லிப்ஸ்</div>
                  <div className="flex items-center justify-between mt-1">
                    <div className="text-xs text-gray-400">2 Days</div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-8 left-16 bg-white rounded-2xl shadow-xl p-3 w-40 transform rotate-6 hover:rotate-0 transition-transform duration-300" style={{ animationDelay: '80ms' }}>
                  <img src={valparai} alt="Valparai" className="w-full h-14 object-cover rounded-lg mb-2 jump-animation" />
                  <div className="text-sm font-semibold text-gray-800">Valparai</div>
                  <div className="text-xs text-gray-500 font-tamil">வால்பரை</div>
                  <div className="flex items-center justify-between mt-1">
                    <div className="text-xs text-gray-400">2 Days</div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top floating card */}
            <div className="absolute top-8 right-8 bg-white rounded-xl shadow-lg p-4 w-56">
              <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">TOP RATING</div>
              <div className="text-lg font-bold text-gray-800 mb-1">Top Destinations</div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg"></div>
                  <div>
                    <div className="text-sm font-medium text-gray-800">Ooty Hills</div>
                    <div className="text-xs text-gray-500">85% Rating</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-teal-400 rounded-lg"></div>
                  <div>
                    <div className="text-sm font-medium text-gray-800">Kodaikanal</div>
                    <div className="text-xs text-gray-500">90% Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom right testimonial card */}
            <div className="absolute bottom-16 right-4 bg-white rounded-xl shadow-lg p-4 w-64">
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                  P
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-800">Priya Sharma</div>
                  <div className="text-xs text-gray-500 mb-2">Travel Enthusiast</div>
                  <div className="text-xs text-gray-600 leading-relaxed">
                    "Amazing experience with KKK Tours! Professional drivers and comfortable journey."
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 ml-2">5.0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section - What Clients Say */}
      <div className="absolute bottom-8 left-8 text-gray-600">
        <div className="text-sm font-medium mb-2">What Clients Say</div>
        <div className="text-xs text-gray-500">See how our expert guides make every journey memorable</div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;