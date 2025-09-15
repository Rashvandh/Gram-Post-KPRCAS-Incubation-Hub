import { Quote, User } from "lucide-react";

const MessageScrolls = () => {
  const messages = [
    {
      role: "Chairman",
      name: "Dr. K. P. Ramasamy",
      message: "Innovation is not just about technology—it's about nurturing minds that dare to dream beyond boundaries. Our incubation hub stands as a testament to this belief.",
      highlight: "Nurturing dreams into reality",
      Image: "https://res.cloudinary.com/dmwvo0u6p/image/upload/v1757957511/KPR-Sir_n9bx3b.png"
    },
    {
      role: "Secretary",
      name: "Ms. P. Gayathri",
      message: "Education and innovation must walk hand in hand. We are creating pathways where traditional knowledge meets contemporary solutions.",
      highlight: "Bridging knowledge and innovation",
      Image: "https://res.cloudinary.com/dmwvo0u6p/image/upload/v1757957517/Gayathari_mam_dzykrq.png"
    },
    {
      role: "Principal",
      name: "Dr. P. Geetha",
      message: "Our students are the architects of tomorrow. Through this incubation hub, we provide them with the tools to build a better future.",
      highlight: "Building tomorrow's leaders",
      Image: "https://res.cloudinary.com/dmwvo0u6p/image/upload/v1757957526/Principal_mam_rhglzd.jpg"
    },
    {
      role: "Head - Incubation Hub",
      name: "Mr. R. Gowtham Daas",
      message: "Every great innovation starts with a single idea. Here, we transform those sparks of creativity into sustainable ventures.",
      highlight: "From ideas to ventures",
      Image: "https://res.cloudinary.com/dmwvo0u6p/image/upload/v1757957833/WhatsApp_Image_2025-09-15_at_22.46.38_2f2d9109_cwqe1t.jpg"
    }
  ];
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-title text-primary mb-4" style={{ fontSize: 'var(--heading-size)' }}>
            Words That Spark the Future
          </h2>
          <p className="font-heading text-secondary text-xl">
            Direct from the Desk
          </p>
          <div className="flex justify-center mt-4">
            <div className="w-24 h-1 bg-secondary rounded-full"></div>
          </div>
        </div>

        {/* Message Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {messages.map((msg, index) => (
            <div
              key={index}
              className="scroll-card group hover:glow-effect transition-all duration-500 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Image */}
                {msg.Image && (
                  <div className="w-full md:w-1/3 flex-shrink-0">
                    <div className="relative pt-[100%] rounded-lg overflow-hidden border border-border/30">
                      <img
                        src={msg.Image}
                        alt={msg.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="flex-1">
                  {/* Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-primary text-lg">
                        {msg.role}
                      </h3>
                      <p className="font-body text-muted-foreground text-sm">
                        {msg.name}
                      </p>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-secondary/30" />
                    <blockquote className="font-body text-foreground text-base leading-relaxed pl-6 mb-4">
                      "{msg.message}"
                    </blockquote>
                  </div>

                  {/* Highlight */}
                  <div className="border-l-4 border-secondary pl-4 mt-4">
                    <p className="font-body-bold text-secondary text-sm">
                      {msg.highlight}
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

export default MessageScrolls;