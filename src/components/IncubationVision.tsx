import { Lightbulb, Rocket, Target, ArrowRight } from "lucide-react";

const IncubationVision = () => {
  const stages = [
    {
      icon: <Lightbulb className="w-8 h-8 text-secondary" />,
      title: "Pre-Incubation",
      description: "Idea validation, market research, and initial prototype development",
      features: ["Ideation workshops", "Feasibility studies", "Initial mentoring"]
    },
    {
      icon: <Rocket className="w-8 h-8 text-secondary" />,
      title: "Incubation", 
      description: "Full product development, business model refinement, and team building",
      features: ["Technical support", "Business mentoring", "Funding assistance"]
    },
    {
      icon: <Target className="w-8 h-8 text-secondary" />,
      title: "Accelerator",
      description: "Market entry, scaling strategies, and investor connections",
      features: ["Go-to-market", "Investor networking", "Scale-up support"]
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* What is Incubation */}
        <div className="text-center mb-16">
          <h2 className="font-title text-primary mb-6" style={{ fontSize: 'var(--heading-size)' }}>
            What is Incubation?
          </h2>
          <p className="font-body text-foreground text-lg max-w-4xl mx-auto leading-relaxed">
            Incubation is the nurturing process that transforms innovative ideas into thriving businesses. 
            Like ancient Tamil scholars who cultivated knowledge in temple universities, we cultivate 
            entrepreneurial minds in our modern innovation sanctuary.
          </p>
        </div>

        {/* Incubation Process */}
        <div className="mb-16">
          <h3 className="font-heading text-secondary text-center text-xl mb-12">
            The Journey from Idea to Impact
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {stages.map((stage, index) => (
              <div key={index} className="relative">
                {/* Arrow between stages */}
                {index < stages.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 z-10">
                    <ArrowRight className="w-6 h-6 text-secondary" />
                  </div>
                )}
                
                {/* Stage Card */}
                <div className="scroll-card text-center h-full animate-slide-in-left" 
                     style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="bg-secondary/10 p-4 rounded-full w-fit mx-auto mb-4">
                    {stage.icon}
                  </div>
                  
                  <h4 className="font-heading text-primary text-xl mb-3">
                    {stage.title}
                  </h4>
                  
                  <p className="font-body text-muted-foreground mb-4 text-sm">
                    {stage.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {stage.features.map((feature, idx) => (
                      <li key={idx} className="font-body text-foreground text-sm flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gram Post Vision */}
        <div className="scroll-card heritage-border animate-glow-pulse">
          <div className="text-center">
            <h3 className="font-title text-primary text-2xl mb-6">
              Gram Post Vision
            </h3>
            
            <div className="max-w-4xl mx-auto">
              <p className="font-body text-foreground text-lg leading-relaxed mb-6">
                "To create a vibrant ecosystem where traditional Tamil wisdom converges with 
                cutting-edge innovation, fostering entrepreneurs who build solutions rooted in 
                heritage yet ready for the global stage."
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="font-heading text-secondary text-xl mb-2">Heritage</div>
                  <div className="font-body text-muted-foreground text-sm">Rooted in Tamil wisdom</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-secondary text-xl mb-2">Innovation</div>
                  <div className="font-body text-muted-foreground text-sm">Powered by modern tech</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-secondary text-xl mb-2">Impact</div>
                  <div className="font-body text-muted-foreground text-sm">Global reach & relevance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncubationVision;