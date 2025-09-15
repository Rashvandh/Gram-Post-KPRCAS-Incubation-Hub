import { ChefHat, MapPin, Mic, Utensils, Users, Star, Gift } from "lucide-react";
import AnjaraipettiImage from "../assets/Anjaraipetti.jpg";

const StartupSpotlight = () => {
  const services = [
    {
      icon: <ChefHat className="w-5 h-5" />,
      title: "Private Chef Services",
      description: "Personalized culinary experiences"
    },
    {
      icon: <Utensils className="w-5 h-5" />,
      title: "Festival & Seasonal Dining",
      description: "Special events and themed experiences"
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "Exclusive Curated Menus",
      description: "Handcrafted plates, memorable experiences"
    },
    {
      icon: <Mic className="w-5 h-5" />,
      title: "Open Mic & Themed Gatherings",
      description: "Where food meets entertainment"
    }
  ];

  const benefits = [
    {
      icon: <Mic className="w-6 h-6 text-secondary" />,
      title: "Open Mic Access",
      original: "Regular ₹149–₹199",
      offer: "Free Entry",
      description: "Enjoy live performances with your meal"
    },
    {
      icon: <Utensils className="w-6 h-6 text-secondary" />,
      title: "Food Events",
      original: "₹400–₹600 per guest",
      offer: "20% Off",
      description: "Special curated dining experiences"
    },
    {
      icon: <ChefHat className="w-6 h-6 text-secondary" />,
      title: "Private Dining",
      original: "₹550–₹850 per head",
      offer: "10% Off",
      description: "Custom menus for special occasions"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <Star className="w-8 h-8 text-secondary animate-glow-pulse" />
            <h2 className="font-title text-primary" style={{ fontSize: 'var(--heading-size)' }}>
              Startup in Spotlight
            </h2>
            <Star className="w-8 h-8 text-secondary animate-glow-pulse" />
          </div>
        </div>

        {/* Main Spotlight Card */}
        <div className="scroll-card heritage-border mb-12 animate-fade-in">
          <div className="text-center mb-8">
            <div className="bg-primary/10 p-2 rounded-full w-fit mx-auto mb-6 overflow-hidden">
              <img 
                src={AnjaraipettiImage} 
                alt="Anjaraipetti" 
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
            
            <h3 className="font-title text-primary text-3xl mb-2">
              Anjaraipetti
            </h3>
            
            <p className="font-heading text-secondary text-lg mb-4">
              A Culinary Venture by Chef Rishi
            </p>
            
            <div className="flex justify-center items-center space-x-2 text-muted-foreground mb-6">
              <MapPin className="w-4 h-4" />
              <span className="font-body">Thudiyalur, Coimbatore</span>
            </div>
            
            <p className="font-body text-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Where Culinary Art Meets Curated Experience. Born out of a passion for regional cuisine 
              and personalised hospitality, Anjaraipetti is not just a dining space — it's a food startup 
              redefining how people connect through food.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-4 bg-background/50 rounded-lg">
                <div className="bg-secondary/10 p-3 rounded-full w-fit mx-auto mb-3">
                  <div className="text-secondary">
                    {service.icon}
                  </div>
                </div>
                <h4 className="font-heading text-primary text-sm mb-2">
                  {service.title}
                </h4>
                <p className="font-body text-muted-foreground text-xs">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="font-body-bold text-primary text-lg">
              Every plate is handcrafted. Every experience is designed to be remembered.
            </p>
          </div>
        </div>

        {/* KPRCAS Benefits */}
        <div className="scroll-card animate-slide-in-left">
          <div className="text-center mb-8">
            <h3 className="font-heading text-primary text-2xl mb-4">
              🎓 In Collaboration with Gram Post & KPRCAS Incubation Hub
            </h3>
            <p className="font-body text-secondary text-lg">
              Exclusive launch benefits for students & creators
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-background/50 rounded-xl p-6 text-center">
                <div className="bg-secondary/10 p-3 rounded-full w-fit mx-auto mb-4">
                  {benefit.icon}
                </div>
                
                <h4 className="font-heading text-primary text-lg mb-2">
                  {benefit.title}
                </h4>
                
                <div className="space-y-2 mb-3">
                  <div className="font-body-bold text-secondary text-lg">
                    {benefit.offer}
                  </div>
                  <div className="font-body text-muted-foreground text-sm line-through">
                    {benefit.original}
                  </div>
                </div>
                
                <p className="font-body text-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-primary/10 p-6 rounded-lg text-center">
            <div className="flex justify-center items-center space-x-2 mb-3">
              <Gift className="w-5 h-5 text-primary" />
              <span className="font-heading text-primary text-lg">How to Claim</span>
            </div>
            <p className="font-body text-foreground">
              🪪 Just show your Gram Post puzzle confirmation + KPRCAS ID during booking
            </p>
          </div>
        </div>

        {/* Puzzle Corner */}
        <div className="mt-12 text-center">
          <div className="scroll-card max-w-2xl mx-auto heritage-border animate-glow-pulse">
            <h3 className="font-heading text-primary text-2xl mb-4">
              🧩 Puzzle Corner
            </h3>
            <p className="font-body text-foreground text-lg mb-6">
              Think. Solve. Dine.
            </p>
            <div className="bg-secondary/10 p-6 rounded-lg">
              <p className="font-body-bold text-secondary mb-4">
                Enter the Gram Post Puzzle Challenge
              </p>
              <div className="w-40 h-40 mx-auto mb-4 overflow-hidden rounded-lg border-2 border-primary/20">
                <img 
                  src="https://res.cloudinary.com/dmwvo0u6p/image/upload/v1757954548/WhatsApp_Image_2025-09-15_at_22.12.07_57706a8a_hvshd5.jpg" 
                  alt="Scan to enter the Gram Post Puzzle Challenge"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-body text-foreground text-sm">
                Top 3 scorers win exclusive Anjaraipetti vouchers!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupSpotlight;