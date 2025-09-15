import { Droplets, Cog, Globe } from "lucide-react";

const AncientVsModern = () => {
  const comparisons = [
    {
      icon: <Droplets className="w-8 h-8 text-primary" />,
      title: "Water Systems",
      ancient: "Sophisticated stepwell systems, tanks, and canal networks that captured monsoon water efficiently",
      modern: "Smart irrigation systems, IoT-based water management, and sustainable water recycling technologies",
      tamilQuote: "நீர் இன்றி அமையாது உலகு",
      tamilTranslation: "The world cannot exist without water"
    },
    {
      icon: <Cog className="w-8 h-8 text-primary" />,
      title: "Iron Technology",
      ancient: "Superior metallurgy producing Damascus steel, advanced smelting techniques using monsoonal winds",
      modern: "Nano-enhanced materials, 3D printing with metal alloys, and precision manufacturing systems",
      tamilQuote: "கல்விச் செல்வம் கசடு அற விரும்பு",
      tamilTranslation: "Seek knowledge wealth without impurities"
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Trade Networks",
      ancient: "Maritime trade routes connecting Southeast Asia, Roman spice trade, advanced navigation",
      modern: "Global digital marketplaces, blockchain supply chains, and sustainable trade practices",
      tamilQuote: "உடையார் உலகத்து உயர்ந்து நின்றார்",
      tamilTranslation: "Those with knowledge stand tall in the world"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-title text-primary mb-4" style={{ fontSize: 'var(--heading-size)' }}>
            Ancient Tamil Tech vs Modern Innovation
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-3xl mx-auto">
            Discovering how timeless Tamil innovations continue to inspire today's breakthrough technologies
          </p>
          <p className="text-sm text-foreground/60 mb-2">Tamil Content Courtesy:</p>
          <p className="font-title text-primary mb-4">Prof. Loganathan</p>
          <p className="font-title text-primary mb-4">Department of Tamil, KPRCAS</p>
          <p className="text-sm text-foreground/60 mt-2">
            With research inputs from archaeological sources and regional field study.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="space-y-12">
          {comparisons.map((comp, index) => (
            <div key={index} className="scroll-card animate-fade-in" style={{ animationDelay: `${index * 0.3}s` }}>
              {/* Title & Icon */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="bg-primary/10 p-3 rounded-full">
                  {comp.icon}
                </div>
                <h3 className="font-heading text-primary text-2xl">
                  {comp.title}
                </h3>
              </div>

              {/* Comparison Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Ancient */}
                <div className="space-y-4">
                  <div className="text-center">
                    <h4 className="font-heading text-secondary text-xl mb-3">
                      Ancient Tamil Wisdom
                    </h4>
                    <div className="w-16 h-0.5 bg-secondary mx-auto"></div>
                  </div>
                  <p className="font-body text-foreground leading-relaxed">
                    {comp.ancient}
                  </p>

                  {/* Tamil Quote */}
                  <div className="bg-secondary/10 p-4 rounded-lg border-l-4 border-secondary">
                    <p className="font-heading text-primary text-lg mb-2">
                      {comp.tamilQuote}
                    </p>
                    <p className="font-body text-muted-foreground italic text-sm">
                      "{comp.tamilTranslation}"
                    </p>
                  </div>
                </div>

                {/* Modern */}
                <div className="space-y-4">
                  <div className="text-center">
                    <h4 className="font-heading text-secondary text-xl mb-3">
                      Modern Innovation
                    </h4>
                    <div className="w-16 h-0.5 bg-secondary mx-auto"></div>
                  </div>
                  <p className="font-body text-foreground leading-relaxed">
                    {comp.modern}
                  </p>

                  {/* Connection Insight */}
                  <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
                    <p className="font-body-bold text-primary text-sm">
                      Bridging ancient wisdom with cutting-edge technology
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AncientVsModern;