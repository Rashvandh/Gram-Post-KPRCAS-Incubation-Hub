import { Scroll, ChevronDown } from "lucide-react";
import ParchmentTexture from "../assets/parchment-texture.jpg";

const CoverPage = () => {
  return (
    <section 
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${ParchmentTexture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-4 border-2 border-primary/20 rounded-lg"></div>
        <div className="absolute inset-8 border border-primary/10 rounded"></div>
      </div>
      
      {/* Main content */}
      <div className="text-center space-y-8 z-10 max-w-3xl mx-auto px-6 md:px-8 py-12 relative">
        {/* Volume and Edition */}
        <div className="font-mono text-xs uppercase tracking-widest text-foreground/80 mb-2">
          VOL. 1, Ed. 1
        </div>
        
        {/* Main Title */}
        <h1 className="font-title text-5xl md:text-6xl font-bold text-foreground/90 mb-2">
          Gram Post
        </h1>
        
        {/* Tagline */}
        <div className="space-y-2 mb-8">
          <p className="text-lg text-foreground/80 italic">
            A whisper from the Incubation Nest...
          </p>
          <p className="text-2xl font-heading text-primary/90">
            where ideas turn to fire
          </p>
        </div>
        
        {/* Divider */}
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-auto my-8"></div>
        
        {/* Introduction Content */}
        <div className="space-y-6 text-left max-w-2xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl text-foreground/90 text-center mb-6">
            Introducing the Gram Post
          </h2>
          
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p className="font-medium text-center text-lg">
              Greetings, Innovators!
            </p>
            <p>
              We're thrilled to unveil the first edition of <span className="font-semibold text-primary/90">Gram Post</span>, your fortnightly dispatch from the heart of KPRCAS Incubation Nest. In each issue, we'll explore the exciting world of incubation, from the spark of an idea (Pre-Incubation) to the moment it takes off (Post-Incubation).
            </p>
            <p>
              We're also proud to share that KPRCAS has secured a TEDx license, paving the way for even more groundbreaking ideas to be shared. Join us on this journey of transformation and growth!
            </p>
          </div>
          
          <div className="pt-6 mt-6 border-t border-border/20 text-center">
            <p className="font-medium text-secondary">Launching September 16 2025</p>
            <p className="text-sm text-muted-foreground mt-1">From KPRCAS Incubation Hub</p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary/60" />
        </div>
      </div>
    </section>
  );
};

export default CoverPage;