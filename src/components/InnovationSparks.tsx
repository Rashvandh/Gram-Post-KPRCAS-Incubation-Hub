import { Zap, Gift, Shirt, Hotel, Heart } from "lucide-react";

const InnovationSparks = () => {
  const projects = [
    {
      icon: <Gift className="w-6 h-6" />,
      title: "INHB.1 – Personalised Gifting Startups",
      description: "Handmade personalised gifts based on experiences and memories. From customised stationery to eco-packaged keepsakes, designing products that feel like a story.",
      team: "Tarshan, Prajeeth, Arun, Harini & Sifa",
      department: "BBA, 2nd Year",
      quote: "We've all struggled to find the 'right' gift. That's how this idea came up.",
      speaker: "Harini",
      category: "E-Commerce",
      status: "In Development"
    },
    {
      icon: <Shirt className="w-6 h-6" />,
      title: "INHB.2 – Techwear for India",
      description: "Smart clothing combining subtle tech (sweat control, QR tags, sensors) with aesthetic designs for Indian climate and college lifestyles.",
      team: "Tarshan, Ashish & Rakshan",
      department: "BBA, 2nd Year", 
      quote: "You should feel like you're wearing comfort, not hardware. And it should fit both your budget and your vibe.",
      speaker: "Ashish",
      category: "Fashion Tech",
      status: "Prototype"
    },
    {
      icon: <Hotel className="w-6 h-6" />,
      title: "INHB.3 – Hospitality for the Overlooked",
      description: "Low-cost, high-empathy hospitality for under-served guests: day travellers, rural vendors, elderly patients, and students during events.",
      team: "Surya, Bharath, Mrithula & Akrithukia",
      department: "BBA, 2nd Year",
      quote: "We think hospitality should start where other businesses stop, with those no one plans for.",
      speaker: "Surya",
      category: "Hospitality",
      status: "Concept"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "INHB.4 – Social Impact, Student Heart",
      description: "App connecting students who want to help campus animals with real-time needs. Includes request posting, route mapping, and vet care visibility.",
      team: "Mithesh, Nandhitha & Pavithra",
      department: "IT Dept., 2nd Year",
      quote: "We can't fix everything, but even 15 minutes a week from each student could change lives.",
      speaker: "Nandhitha",
      category: "Social Impact",
      status: "Testing"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Development": return "bg-secondary/20 text-secondary";
      case "Prototype": return "bg-primary/20 text-primary";
      case "Testing": return "bg-green-500/20 text-green-700";
      case "Beta": return "bg-blue-500/20 text-blue-700";
      case "Concept": return "bg-purple-500/20 text-purple-700";
      case "Research": return "bg-orange-500/20 text-orange-700";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-card/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="bg-secondary/10 p-4 rounded-full animate-glow-pulse">
              <Zap className="w-8 h-8 text-secondary" />
            </div>
          </div>
          
          <h2 className="font-title text-primary mb-4" style={{ fontSize: 'var(--heading-size)' }}>
            Innovation Sparks
          </h2>
          
          <p className="font-body text-muted-foreground text-lg max-w-3xl mx-auto">
            Student projects and creative ideas that are shaping the future, 
            each spark a potential flame of transformation
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group scroll-card hover:glow-effect transition-all duration-500 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <div className="text-primary group-hover:text-secondary transition-colors">
                    {project.icon}
                  </div>
                </div>
                
                <span className={`px-2 py-1 rounded-full text-xs font-body-bold ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="font-heading text-primary text-lg group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Team Info */}
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <div className="font-body-bold text-secondary text-sm mb-1">
                    Team: {project.team}
                  </div>
                  <div className="font-body text-muted-foreground text-xs">
                    {project.department}
                  </div>
                </div>

                {/* Quote */}
                <div className="border-l-4 border-primary pl-4 bg-primary/5 p-3 rounded-r-lg">
                  <p className="font-body text-foreground text-sm italic leading-relaxed mb-2">
                    "{project.quote}"
                  </p>
                  <div className="font-body-bold text-primary text-xs">
                    — {project.speaker}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <span className="font-body-bold text-secondary text-sm">
                    {project.category}
                  </span>
                  
                  {/* Hover spark effect */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Zap className="w-4 h-4 text-secondary" />
                  </div>
                </div>
              </div>

              {/* Animated bottom border */}
              <div className="mt-4 h-0.5 bg-border rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="scroll-card max-w-4xl mx-auto">
            <h3 className="font-heading text-primary text-xl mb-4">
              Ideas in Motion from Within the Hub
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              These are real student projects currently being developed in our incubation hub. 
              From personalised gifting to social impact solutions, our students are building the future.
            </p>
            <div className="bg-secondary/10 p-4 rounded-lg border-l-4 border-secondary">
              <div className="font-body-bold text-secondary text-lg mb-2">
                Want to Be Featured Here?
              </div>
              <p className="font-body text-foreground text-sm mb-3">
                Got an idea — social, technical, artistic, or unexpected? Even half-baked?
              </p>
              <div className="font-body-bold text-primary">
                📩 Drop your spark at ihub@kprcas.ac.in
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSparks;