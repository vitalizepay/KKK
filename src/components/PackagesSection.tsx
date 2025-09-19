import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import ootyHero from '@/assets/destinations/ooty-hero.jpg';
import maduraiTemple from '@/assets/destinations/madurai-temple.jpg';
import kanyakumariRock from '@/assets/destinations/kanyakumari-rock.jpg';
import mahabalipuramShore from '@/assets/destinations/mahabalipuram-shore-temple.jpg';

const PackagesSection = () => {
  const packages = [
    {
      id: 1,
      title: "Ooty Hill Station Getaway",
      titleTamil: "ஊட்டி மலை சுற்றுலா",
      image: ootyHero,
      duration: "3D/2N",
      highlights: "Tea Gardens, Botanical Garden, Toy Train, Doddabetta Peak",
      highlightsTamil: "தேயிலை தோட்டங்கள், தாவரவியல் பூங்கா, பொம்மை ரயில்",
      price: "8,999",
      category: "Hill Station"
    },
    {
      id: 2,
      title: "Madurai-Rameswaram-Kanyakumari",
      titleTamil: "மதுரை-ராமேஸ்வரம்-கன்னியாகுமரி",
      image: maduraiTemple,
      duration: "4D/3N",
      highlights: "Meenakshi Temple, Ramanathaswamy Temple, Vivekananda Rock",
      highlightsTamil: "மீனாக்ஷி கோயில், ராமநாதசுவாமி கோயில்",
      price: "12,999",
      category: "Temple Circuit"
    },
    {
      id: 3,
      title: "Kodaikanal Honeymoon Special",
      titleTamil: "கொடைக்கானல் தேனிலவு சிறப்பு",
      image: kanyakumariRock,
      duration: "3D/2N",
      highlights: "Lake View, Coaker's Walk, Silver Cascade Falls, Romantic Spots",
      highlightsTamil: "ஏரி காட்சி, கோக்கர் நடைப்பாதை, வெள்ளி அருவி",
      price: "9,999",
      category: "Honeymoon"
    },
    {
      id: 4,
      title: "Chennai-Mahabalipuram-Pondicherry",
      titleTamil: "சென்னை-மகாபலிபுரம்-பாண்டிச்சேரி",
      image: mahabalipuramShore,
      duration: "3D/2N",
      highlights: "Shore Temple, French Colony, Marina Beach, Heritage Sites",
      highlightsTamil: "கடற்கரை கோயில், பிரெஞ்சு காலனி, மெரினா கடற்கரை",
      price: "10,999",
      category: "Heritage"
    },
    {
      id: 5,
      title: "Yercaud Green Escape",
      titleTamil: "ஏர்காடு பசுமை விடுமுறை",
      image: ootyHero,
      duration: "2D/1N",
      highlights: "Emerald Lake, Rose Garden, Coffee Plantations, Viewpoints",
      highlightsTamil: "மரகத ஏரி, ரோசா பூங்கா, காபி தோட்டங்கள்",
      price: "6,999",
      category: "Weekend"
    },
    {
      id: 6,
      title: "Navagraha Temple Circuit",
      titleTamil: "நவக்ரஹ கோயில் சுற்றுலா",
      image: maduraiTemple,
      duration: "4D/3N",
      highlights: "9 Sacred Temples, Thanjavur, Trichy, Spiritual Journey",
      highlightsTamil: "9 புனித கோயில்கள், தஞ்சாவூர், திருச்சி",
      price: "11,999",
      category: "Spiritual"
    },
    {
      id: 7,
      title: "Palani-Courtallam Tour",
      titleTamil: "பழனி-கூற்றாலம் சுற்றுலா",
      image: kanyakumariRock,
      duration: "3D/2N",
      highlights: "Palani Murugan Temple, Courtallam Falls, Nature Therapy",
      highlightsTamil: "பழனி முருகன் கோயில், கூற்றாலம் அருவி",
      price: "8,499",
      category: "Nature"
    },
    {
      id: 8,
      title: "Valparai Tea Estate Tour",
      titleTamil: "வால்பாறை தேயிலை தோட்ட சுற்றுலா",
      image: ootyHero,
      duration: "2D/1N",
      highlights: "Tea Plantations, Wildlife Spotting, Scenic Mountains",
      highlightsTamil: "தேயிலை தோட்டங்கள், வனவிலங்கு காணல்",
      price: "7,499",
      category: "Adventure"
    }
  ];

  return (
    <section id="packages" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Tour Packages
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the beauty of Tamil Nadu with our carefully crafted tour packages
          </p>
          <p className="text-lg font-tamil text-primary mt-2">
            எங்கள் கவனமாக வடிவமைக்கப்பட்ட சுற்றுலா பேக்கேஜ்களுடன் தமிழகத்தின் அழகை கண்டுகளியுங்கள்
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {packages.map((pkg) => (
            <div key={pkg.id} className="package-card group">
              <div className="relative overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-secondary text-white font-semibold">
                    {pkg.duration}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-white/90 text-primary border-primary">
                    {pkg.category}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-primary mb-1 line-clamp-2">
                  {pkg.title}
                </h3>
                <p className="text-sm font-tamil text-muted-foreground mb-3">
                  {pkg.titleTamil}
                </p>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {pkg.highlights}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-primary">₹{pkg.price}</span>
                    <span className="text-sm text-muted-foreground ml-1">per person</span>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <i className="fas fa-star text-sm"></i>
                    <i className="fas fa-star text-sm"></i>
                    <i className="fas fa-star text-sm"></i>
                    <i className="fas fa-star text-sm"></i>
                    <i className="fas fa-star text-sm"></i>
                  </div>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  <i className="fas fa-calendar-check mr-2"></i>
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="btn-hero text-lg px-8 py-4">
            <i className="fas fa-eye mr-2"></i>
            View All Packages
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;