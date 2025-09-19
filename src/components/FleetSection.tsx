import React, { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import swiftDzire from '@/assets/vehicles/swift-dzire.jpg';
import toyotaInnova from '@/assets/vehicles/toyota-innova.jpg';
import suzukiWagon from '@/assets/vehicles/suzuki-wagon.jpg';
import buses from '@/assets/vehicles/buses.jpg';
import forceTraveller from '@/assets/vehicles/force-traveller.jpg';
import suzukiErtiga from '@/assets/vehicles/suzuki-ertiga.jpg';
import toyotaQualis from '@/assets/vehicles/toyota-qualis.jpg';

const FleetSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const vehicles = [
    {
      id: 1,
      name: "Swift Dzire / Etios",
      nameTamil: "ஸ்விஃப்ட் டிசைர் / ஈடியோஸ்",
      image: swiftDzire,
      capacity: "4 Passengers",
      type: "Sedan",
      features: ["AC", "Music System", "GPS"],
      priceRange: "₹2,500-3,500/day"
    },
    {
      id: 2,
      name: "Toyota Innova / Crysta",
      nameTamil: "டொயோட்டா இன்னோவா / கிரிஸ்டா",
      image: toyotaInnova,
      capacity: "7 Passengers",
      type: "SUV",
      features: ["Premium AC", "Leather Seats", "Entertainment System"],
      priceRange: "₹4,500-6,500/day"
    },
    {
      id: 3,
      name: "Suzuki Ertiga",
      nameTamil: "சுஸுகி எர்டிகா",
      image: suzukiErtiga,
      capacity: "7 Passengers",
      type: "MPV",
      features: ["Spacious", "Fuel Efficient", "Family Friendly"],
      priceRange: "₹3,500-4,500/day"
    },
    {
      id: 4,
      name: "Force Traveller",
      nameTamil: "ஃபோர்ஸ் டிராவலர்",
      image: forceTraveller,
      capacity: "12-17 Passengers",
      type: "Tempo Traveller",
      features: ["Group Travel", "Luggage Space", "Comfortable Seating"],
      priceRange: "₹6,500-8,500/day"
    },
    {
      id: 5,
      name: "Mini Bus",
      nameTamil: "மினி பஸ்",
      image: buses,
      capacity: "20-25 Passengers",
      type: "Bus",
      features: ["Large Groups", "Tour Groups", "Corporate Travel"],
      priceRange: "₹8,500-12,000/day"
    },
    {
      id: 6,
      name: "Coach Bus",
      nameTamil: "கோச் பஸ்",
      image: buses,
      capacity: "35-45 Passengers",
      type: "Luxury Coach",
      features: ["Premium Comfort", "Long Distance", "Washroom Facility"],
      priceRange: "₹12,000-18,000/day"
    },
    {
      id: 7,
      name: "Toyota Qualis",
      nameTamil: "டொயோட்டா குவாலிஸ்",
      image: toyotaQualis,
      capacity: "8 Passengers",
      type: "SUV",
      features: ["Reliable", "Spacious", "Hill Station Specialist"],
      priceRange: "₹3,500-4,500/day"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % vehicles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + vehicles.length) % vehicles.length);
  };

  const getVisibleVehicles = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % vehicles.length;
      visible.push(vehicles[index]);
    }
    return visible;
  };

  return (
    <section id="fleet" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Vehicle Fleet
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our well-maintained fleet of vehicles for a comfortable journey
          </p>
          <p className="text-lg font-tamil text-primary mt-2">
            சுகமான பயணத்திற்காக எங்கள் நன்கு பராமரிக்கப்பட்ட வாகன கடற்படையில் இருந்து தேர்வு செய்யுங்கள்
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors shadow-lg"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors shadow-lg"
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* Vehicle Cards */}
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
              {getVisibleVehicles().map((vehicle) => (
                <div key={vehicle.id} className="travel-card">
                  <div className="relative overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-secondary text-white">
                        {vehicle.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-1">
                      {vehicle.name}
                    </h3>
                    <p className="text-sm font-tamil text-muted-foreground mb-3">
                      {vehicle.nameTamil}
                    </p>
                    
                    <div className="flex items-center mb-4">
                      <i className="fas fa-users text-secondary mr-2"></i>
                      <span className="text-muted-foreground font-medium">
                        {vehicle.capacity}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-primary mb-2">Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {vehicle.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-lg font-bold text-secondary mb-4">
                      {vehicle.priceRange}
                    </div>
                    
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                      <i className="fas fa-car mr-2"></i>
                      Request this Vehicle
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {vehicles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;