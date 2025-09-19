import TopContactBar from "@/components/TopContactBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PackagesSection from "@/components/PackagesSection";
import DestinationsSection from "@/components/DestinationsSection";
import FleetSection from "@/components/FleetSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopContactBar />
      <Navbar />
      <HeroSection />
      <PackagesSection />
      <DestinationsSection />
      <FleetSection />
      <AboutSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
