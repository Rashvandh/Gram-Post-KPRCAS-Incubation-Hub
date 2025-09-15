import { CheckCircle, Clock, Star, Calendar } from "lucide-react";

const Timeline = () => {
  const milestones = [
    {
      date: "March 2025",
      title: "Seyal Vadivam",
      description: "Launch of our flagship Design Thinking Program, Version 1.0, focused on empathy-led problem solving and structured innovation across disciplines.",
      status: "completed",
      category: "Initiative"
    },
    {
      date: "April 2025",
      title: "MoUs with India's Leading Incubation Bodies",
      description: "Initiated formal partnerships with IIT Palakkad and IIT-M Pravartak Technology Foundation, hosted by IIT Madras and funded by the Department of Science and Technology, Government of India.",
      status: "completed",
      category: "Partnership",
      images: [
        "https://res.cloudinary.com/dmwvo0u6p/image/upload/v1757953884/WhatsApp_Image_2025-09-15_at_17.20.24_9cc142bb_t72hnv.jpg",
        "https://res.cloudinary.com/dmwvo0u6p/image/upload/v1757953855/WhatsApp_Image_2025-09-15_at_17.20.23_8d3538fc_kcprky.jpg"
      ]
    },
    {
      date: "May 2025",
      title: "TEDxKPRCAS License Secured",
      description: "KPRCAS received a free license to host TEDx, an independently organized, TED-style event focused on 'ideas worth spreading' — locally led, globally inspired.",
      status: "completed",
      category: "Achievement",
      images:["https://res.cloudinary.com/dmwvo0u6p/image/upload/v1757956318/WhatsApp_Image_2025-09-15_at_17.21.28_688c9ab5_unnynk.jpg"]
    },
    {
      date: "June 2025",
      title: "First Startup Pitch to Principal",
      description: "A Cambridge alumnus-founded AgriTech startup pitched to set up a product company in collaboration with our incubation ecosystem.",
      status: "completed",
      category: "Milestone"
    },
    {
      date: "July 2025",
      title: "MoU with IIT Palakkad & ABIN Lab Launch",
      description: "• Launched the Open Call for Incubation and the ABIN Lab initiative, nurturing student product teams.\n• 80+ students registered | 6 teams currently incubated\n• An Alumni of KPRCAS Mr. Bavishnu joined as first employee of Incubation Hub as an Executive",
      status: "completed",
      category: "Growth"
    },
    {
      date: "August 2025",
      title: "Space, Summit & StartupTN",
      description: "• MoU signed with IIT-M Pravartak (Chennai).\n• KPRCAS selected as an Academic Partner to StartupTN for the Tamil Nadu Global Startup Summit 2025.\n• 7500 sq. ft. dedicated space approved for KPRCAS Incubation Hub — to be operational soon.\n• Our incubator will showcase its vision to the global startup audience.",
      status: "in-progress",
      category: "Expansion"
    },
    {
      date: "September 2025",
      title: "Pre-Event Pulse Check",
      description: "From a pre-event survey:\n→ 712 students want to become founders\n→ 492 want to build their own startups\n→ 199 aspire to be among India's top 100 innovators\n\n📯 And… we launched this very newsletter:\nGram Post — where sparks get shared.",
      status: "in-progress",
      category: "Engagement"
    },
    {
      date: "Future",
      title: "KPRCAS Incubation Forward",
      description: "With our foundation laid, a new phase quietly takes form.\n\nComing up next under our umbrella initiative:\n\n🧭 KPRCAS Incubation Forward\n\nAn integrated roadmap of student-led programs, events, and unseen sparks, all shaping the next chapter of our Startup ecosystem.\n\nStay Tuned.",
      status: "upcoming",
      category: "Vision"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "in-progress": return <Clock className="w-5 h-5 text-secondary" />;
      case "upcoming": return <Star className="w-5 h-5 text-primary" />;
      default: return <Calendar className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "border-green-500 bg-green-50";
      case "in-progress": return "border-secondary bg-secondary/10";
      case "upcoming": return "border-primary bg-primary/10";
      default: return "border-muted bg-muted/10";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Foundation": return "bg-primary/20 text-primary";
      case "Growth": return "bg-green-500/20 text-green-700";
      case "Expansion": return "bg-blue-500/20 text-blue-700";
      case "Innovation": return "bg-secondary/20 text-secondary";
      case "Achievement": return "bg-purple-500/20 text-purple-700";
      case "Global": return "bg-orange-500/20 text-orange-700";
      case "Sustainability": return "bg-emerald-500/20 text-emerald-700";
      case "Community": return "bg-pink-500/20 text-pink-700";
      case "Initiative": return "bg-yellow-500/20 text-yellow-700";
      case "Partnership": return "bg-teal-500/20 text-teal-700";
      case "Milestone": return "bg-red-500/20 text-red-700";
      case "Vision": return "bg-indigo-500/20 text-indigo-700";
      case "Engagement": return "bg-cyan-500/20 text-cyan-700";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-card/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-title text-primary mb-4" style={{ fontSize: 'var(--heading-size)' }}>
            Our Journey
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-3xl mx-auto">
            From inception to innovation - tracking our milestones and mapping our future aspirations
          </p>
          
          <div className="flex justify-center mt-6 space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="font-body text-muted-foreground">Completed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-secondary" />
              <span className="font-body text-muted-foreground">In Progress</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-primary" />
              <span className="font-body text-muted-foreground">Upcoming</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-12 h-12 rounded-full border-4 ${getStatusColor(milestone.status)} flex items-center justify-center`}>
                    {getStatusIcon(milestone.status)}
                  </div>
                </div>

                {/* Content card */}
                <div className={`scroll-card w-full max-w-md ${index % 2 === 0 ? 'mr-8' : 'ml-8'} hover:glow-effect transition-all duration-300`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-body-bold text-secondary text-sm">
                      {milestone.date}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-body-bold ${getCategoryColor(milestone.category)}`}>
                      {milestone.category}
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-primary text-lg mb-2">
                    {milestone.title}
                  </h3>
                  
                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-3">
                    {milestone.description}
                  </p>

                  {milestone.images && (
                    <div className={`mt-3 ${milestone.images.length > 1 ? 'grid grid-cols-2 gap-2' : 'w-full'}`}>
                      {milestone.images.map((img, imgIndex) => (
                        <a 
                          key={imgIndex} 
                          href={img} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`block ${milestone.images.length === 1 ? 'w-full max-w-2xl mx-auto' : ''}`}
                        >
                          <img 
                            src={img} 
                            alt={`${milestone.title} ${imgIndex + 1}`} 
                            className={`w-full h-auto rounded-lg border border-border ${milestone.images.length === 1 ? 'max-h-96 object-contain' : 'h-32 object-cover'}`}
                          />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div className="mt-20 text-center">
          <div className="scroll-card max-w-4xl mx-auto heritage-border">
            <h3 className="font-heading text-primary text-2xl mb-4">
              KPRCAS Incubation Forward
            </h3>
            <p className="font-body text-foreground leading-relaxed">
              With our foundation laid, a new phase quietly takes form. Stay tuned for an integrated roadmap of student-led programs, events, and unseen sparks, all shaping the next chapter of our Startup ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;