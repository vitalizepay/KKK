import React from 'react';

const AboutSection = () => {
  const features = [
    {
      icon: "fas fa-handshake",
      title: "Transparent Pricing",
      titleTamil: "வெளிப்படையான விலை",
      description: "No hidden charges. What you see is what you pay.",
      descriptionTamil: "மறைந்த கட்டணங்கள் இல்லை. நீங்கள் பார்ப்பதுதான் நீங்கள் செலுத்துவது."
    },
    {
      icon: "fas fa-user-tie",
      title: "Expert Drivers",
      titleTamil: "நிபுணத்துவ ஓட்டுநர்கள்",
      description: "Licensed, experienced drivers who know Tamil Nadu well.",
      descriptionTamil: "தமிழகத்தை நன்கு அறிந்த உரிமம் பெற்ற, அனுபவமிக்க ஓட்டுநர்கள்."
    },
    {
      icon: "fas fa-car",
      title: "Clean Fleet",
      titleTamil: "சுத்தமான வாகனங்கள்",
      description: "Well-maintained, clean vehicles for comfortable travel.",
      descriptionTamil: "சுகமான பயணத்திற்காக நன்கு பராமரிக்கப்பட்ட, சுத்தமான வாகனங்கள்."
    },
    {
      icon: "fas fa-headset",
      title: "24×7 Support",
      titleTamil: "24×7 ஆதரவு",
      description: "Round-the-clock customer support for peace of mind.",
      descriptionTamil: "மன அமைதிக்காக 24 மணி நேரமும் வாடிக்கையாளர் ஆதரவு."
    }
  ];

  return (
    <section id="about" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About KKK Tours & Travels
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted since 2016, we are licensed by Tamil Nadu Tourism and committed to providing 
            exceptional travel experiences across the beautiful state of Tamil Nadu.
          </p>
          <p className="text-lg font-tamil text-primary mt-4">
            2016 முதல் நம்பகமான, தமிழ்நாடு சுற்றுலாத்துறையால் உரிமம் பெற்ற, 
            தமிழகத்தின் அழகான மாநிலம் முழுவதும் விதிவிலக்கான பயண அனுபவங்களை வழங்க உறுதியளிக்கிறோம்.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <i className={`${feature.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
              <p className="text-sm font-tamil text-secondary mb-3">{feature.titleTamil}</p>
              <p className="text-muted-foreground mb-2">{feature.description}</p>
              <p className="text-sm font-tamil text-muted-foreground">{feature.descriptionTamil}</p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-primary mb-2">9+</div>
            <div className="text-muted-foreground">Years of Experience</div>
            <div className="text-sm font-tamil text-primary">வருட அனுபவம்</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-primary mb-2">50k+</div>
            <div className="text-muted-foreground">Happy Customers</div>
            <div className="text-sm font-tamil text-primary">மகிழ்ச்சியான வாடிக்கையாளர்கள்</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <div className="text-muted-foreground">Tour Packages</div>
            <div className="text-sm font-tamil text-primary">சுற்றுலா பேக்கேஜ்கள்</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Customer Support</div>
            <div className="text-sm font-tamil text-primary">வாடிக்கையாளர் ஆதரவு</div>
          </div>
        </div>

        {/* License Information */}
        <div className="text-center mt-16 p-8 bg-white rounded-2xl shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <i className="fas fa-certificate text-secondary text-3xl mr-3"></i>
            <h3 className="text-2xl font-bold text-primary">Licensed & Certified</h3>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            KKK Tours & Travels is officially licensed by the Tamil Nadu Tourism Department. 
            We adhere to all government regulations and safety standards to ensure your journey is both safe and memorable.
          </p>
          <p className="text-sm font-tamil text-primary mt-2">
            KKK டூர்ஸ் & ட்ராவல்ஸ் தமிழ்நாடு சுற்றுலாத்துறையால் அதிகாரப்பூர்வமாக உரிமம் பெற்றது.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;