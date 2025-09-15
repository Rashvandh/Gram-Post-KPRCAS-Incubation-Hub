import { Scroll, ChevronDown } from "lucide-react";

const CoverPage = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Tamil-inspired decorative border */}
      <div className="absolute inset-4 heritage-border rounded-lg opacity-30"></div>
      
      {/* Main content */}
      <div className="text-center space-y-8 z-10 max-w-4xl mx-auto px-8">
        {/* Logo/Icon */}
        <div className="flex justify-center mb-6">
          <div className="scroll-card p-4 rounded-full">
            <Scroll className="w-16 h-16 text-primary" />
          </div>
        </div>
        
        {/* Main Title */}
        <h1 className="font-title text-primary mb-4 animate-fade-in" 
            style={{ fontSize: 'var(--title-size)' }}>
          Gram Post
        </h1>
        
        {/* Subtitle */}
        <p className="font-heading text-secondary text-xl md:text-3xl animate-slide-in-left text-balance">
          KPRCAS Incubation Hub Newsletter
        </p>
        
        {/* Decorative element */}
        <div className="flex justify-center items-center space-x-4 my-8">
          <div className="w-16 h-0.5 bg-secondary"></div>
          <div className="w-3 h-3 bg-secondary rounded-full"></div>
          <div className="w-16 h-0.5 bg-secondary"></div>
        </div>
        
        {/* Tagline */}
        <p className="font-body text-muted-foreground text-lg md:text-xl animate-slide-in-right italic">
          "Where Ancient Wisdom Meets Modern Innovation"
        </p>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-scroll-bounce">
        <ChevronDown className="w-8 h-8 text-secondary" />
      </div>
    </section>
  );
};

export default CoverPage;