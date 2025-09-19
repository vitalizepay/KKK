import React from 'react';
import { Button } from './ui/button';
import ootyHero from '@/assets/destinations/ooty-hero.jpg';
import maduraiTemple from '@/assets/destinations/madurai-temple.jpg';
import kanyakumariRock from '@/assets/destinations/kanyakumari-rock.jpg';
import mahabalipuramShore from '@/assets/destinations/mahabalipuram-shore-temple.jpg';

const DestinationsSection = () => {
  const destinations = [
    {
      id: 1,
      name: "Ooty",
      nameTamil: "ஊட்டி",
      image: ootyHero,
      description: "Queen of Hill Stations with tea gardens and pleasant weather",
      descriptionTamil: "தேயிலை தோட்டங்கள் மற்றும் இனிமையான காலநிலையுடன் மலை நகரங்களின் ராணி",
      packages: "5 Packages Available"
    },
    {
      id: 2,
      name: "Madurai", 
      nameTamil: "மதுரை",
      image: maduraiTemple,
      description: "Temple City with magnificent Meenakshi Amman Temple",
      descriptionTamil: "அற்புதமான மீனாக்ஷி அம்மன் கோயிலுடன் கோயில் நகரம்",
      packages: "3 Packages Available"
    },
    {
      id: 3,
      name: "Kanyakumari",
      nameTamil: "கன்னியாகுமரி",
      image: kanyakumariRock,
      description: "Southernmost tip where three seas meet",
      descriptionTamil: "மூன்று கடல்கள் சந்திக்கும் தென்னிந்தியாவின் கடைசி முனை",
      packages: "4 Packages Available"
    },
    {
      id: 4,
      name: "Mahabalipuram",
      nameTamil: "மகாபலிபுரம்",
      image: mahabalipuramShore,
      description: "UNESCO World Heritage Site with ancient rock temples",
      descriptionTamil: "பண்டைய பாறை கோயில்களுடன் யுனெஸ்கோ உலக பாரம்பர்ய தளம்",
      packages: "2 Packages Available"
    },
    {
      id: 5,
      name: "Kodaikanal",
      nameTamil: "கொடைக்கானல்",
      image: ootyHero,
      description: "Princess of Hill Stations with serene lakes",
      descriptionTamil: "அமைதியான ஏரிகளுடன் மலை நகரங்களின் இளவரசி",
      packages: "4 Packages Available"
    },
    {
      id: 6,
      name: "Rameswaram",
      nameTamil: "ராமேஸ்வரம்",
      image: maduraiTemple,
      description: "Sacred island with Ramanathaswamy Temple",
      descriptionTamil: "ராமநாதசுவாமி கோயிலுடன் புனித தீவு",
      packages: "3 Packages Available"
    },
    {
      id: 7,
      name: "Chennai",
      nameTamil: "சென்னை",
      image: mahabalipuramShore,
      description: "Capital city with Marina Beach and cultural heritage",
      descriptionTamil: "மெரினா கடற்கரை மற்றும் கலாச்சார பாரம்பர்யத்துடன் தலைநகரம்",
      packages: "6 Packages Available"
    },
    {
      id: 8,
      name: "Pondicherry",
      nameTamil: "பாண்டிச்சேரி",
      image: kanyakumariRock,
      description: "French colonial town with unique charm",
      descriptionTamil: "தனித்துவமான வசீகரத்துடன் பிரெஞ்சு காலனித்துவ நகரம்",
      packages: "3 Packages Available"
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the most beautiful destinations across Tamil Nadu
          </p>
          <p className="text-lg font-tamil text-primary mt-2">
            தமிழகம் முழுவதும் உள்ள மிகவும் அழகான இடங்களை கண்டுகளியுங்கள்
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <div key={destination.id} className="travel-card group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                    <p className="text-sm font-tamil opacity-90">{destination.nameTamil}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {destination.packages}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-muted-foreground mb-2 line-clamp-2">
                  {destination.description}
                </p>
                <p className="text-sm font-tamil text-primary mb-4 line-clamp-2">
                  {destination.descriptionTamil}
                </p>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  <i className="fas fa-map-marked-alt mr-2"></i>
                  View Packages
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;