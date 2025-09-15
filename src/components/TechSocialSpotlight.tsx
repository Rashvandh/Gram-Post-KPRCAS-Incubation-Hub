import { Cpu, Users, Wifi, GraduationCap, Stethoscope, Sprout } from "lucide-react";

const TechSocialSpotlight = () => {
  const techInsights = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Quiet Disruption in Everyday Tools",
      description: "Students experimenting with low-code tools, no-code apps, and AI assistants — not for show, but for function.",
      examples: [
        "Commerce student built dynamic invoice generator using Notion AI",
        "Food science team mapped shelf-life comparisons using free GIS tools", 
        "Design teams prototyped apps using Figma, Canva & Glide — no code required"
      ]
    }
  ];

  const socialImpacts = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Entrepreneurship With Empathy",
      description: "Innovation that doesn't serve people isn't complete. This semester saw ideas rooted in inclusion, access, and community care.",
      examples: [
        "Student-led concept to train rural school kids in financial basics using game cards & visual storytelling",
        "Pitch for women-only late-night cab aggregator built around trust circles and location-linked check-ins",
        "Proposal to repurpose hostel food leftovers through campus redistribution system using digital tagging"
      ]
    }
  ];

  const renderSection = (title: string, subtitle: string, items: any[], bgColor: string) => (
    <div className={`${bgColor} rounded-2xl p-8`}>
      <div className="text-center mb-8">
        <h3 className="font-heading text-primary text-2xl mb-2">
          {title}
        </h3>
        <p className="font-body text-secondary text-lg">
          {subtitle}
        </p>
      </div>
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <div 
            key={index}
            className="bg-card/60 backdrop-blur-sm rounded-xl p-6 hover:glow-effect transition-all duration-300 animate-slide-in-left"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="flex items-start space-x-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                <div className="text-primary">
                  {item.icon}
                </div>
              </div>
              
              <div className="flex-1">
                <h4 className="font-heading text-primary text-lg mb-3">
                  {item.title}
                </h4>
                
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Examples */}
            <div className="space-y-3 pl-4">
              {item.examples.map((example: string, idx: number) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="font-body text-foreground text-sm leading-relaxed">
                    {example}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-title text-primary mb-4" style={{ fontSize: 'var(--heading-size)' }}>
            Tech & Social Spotlight
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-3xl mx-auto">
            Bridging the digital divide while creating meaningful social impact through 
            technology-driven solutions and community engagement
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Tech Glimpse */}
          {renderSection("🔧 Tech Glimpse", "We often think of technology as something loud — AI, automation, apps. But true innovation is sometimes subtle, almost invisible.", techInsights, "bg-primary/5")}
          
          {/* Social Lens */}
          {renderSection("🌍 Social Lens", "The future isn't just digital, it's dignified. When students build not just for profit, but for people, they unlock social intelligence.", socialImpacts, "bg-secondary/5")}
        </div>

        {/* Key Insights */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="scroll-card text-center">
            <h3 className="font-heading text-primary text-xl mb-3">
              🖋 From the Incubation Desk
            </h3>
            <p className="font-body text-foreground mb-4">
              Some ideas begin with code. Others begin with a conversation. Both are welcome.
            </p>
            <p className="font-body-bold text-secondary">
              If you have something brewing — be it in your notes app, your Canva board, or your kitchen — the Incubation Hub is here to help.
            </p>
          </div>

          <div className="scroll-card text-center">
            <h3 className="font-heading text-primary text-xl mb-3">
              The New Reality
            </h3>
            <p className="font-body text-foreground mb-4">
              "Technology is now less about machines, more about mindset."
            </p>
            <p className="font-body text-muted-foreground text-sm">
              These tools are no longer just for engineers; they're for anyone with a challenge to solve and curiosity to explore.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSocialSpotlight;