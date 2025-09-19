import React from 'react';
import TopContactBar from "@/components/TopContactBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopContactBar />
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-primary text-center mb-8">Contact Us</h1>
        <div className="max-w-2xl mx-auto text-center">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-primary">Address</h3>
              <p className="text-muted-foreground">47A, Sathy Main Road, Saravanampatti, Coimbatore – 641035</p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">Phone</h3>
              <p className="text-muted-foreground">+91 86107 13453, +91 99944 56789</p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">Email</h3>
              <p className="text-muted-foreground">info@kkktours.com</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Contact;