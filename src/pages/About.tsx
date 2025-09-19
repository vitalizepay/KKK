import React from 'react';
import TopContactBar from "@/components/TopContactBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopContactBar />
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-primary text-center mb-8">About KKK Tours & Travels</h1>
        <p className="text-center text-muted-foreground">Detailed about information coming soon...</p>
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default About;