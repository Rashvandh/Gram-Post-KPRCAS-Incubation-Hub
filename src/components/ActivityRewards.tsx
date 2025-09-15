import { Trophy, Gift, Brain, Users, Target, Clock } from "lucide-react";

const ActivityRewards = () => {
  const activities = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Innovation Quiz",
      description: "Test your knowledge of Tamil innovations and modern technology",
      type: "quiz",
      reward: "Certificate + 100 points",
      deadline: "March 30, 2024",
      participants: 156,
      status: "active"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Pitch Perfect Challenge",
      description: "Present your startup idea in 3 minutes - practice makes perfect",
      type: "competition",
      reward: "Mentorship session + ₹5,000",
      deadline: "April 15, 2024",
      participants: 42,
      status: "active"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Heritage Tech Hackathon",
      description: "Build solutions inspired by ancient Tamil innovations",
      type: "hackathon",
      reward: "Incubation opportunity + ₹25,000",
      deadline: "May 20, 2024",
      participants: 89,
      status: "upcoming"
    }
  ];

  const rewards = [
    {
      icon: <Trophy className="w-6 h-6 text-secondary" />,
      title: "Innovation Champion",
      description: "Top performer in quarterly challenges",
      points: 1000,
      benefit: "Direct incubation eligibility"
    },
    {
      icon: <Gift className="w-6 h-6 text-secondary" />,
      title: "Heritage Researcher",
      description: "Outstanding contribution to Tamil tech research",
      points: 750,
      benefit: "Research collaboration opportunity"
    },
    {
      icon: <Target className="w-6 h-6 text-secondary" />,
      title: "Startup Catalyst",
      description: "Successfully mentored new entrepreneurs",
      points: 500,
      benefit: "Alumni mentor badge"
    }
  ];

  const getActivityColor = (type: string) => {
    switch (type) {
      case "quiz": return "bg-blue-500/20 text-blue-700";
      case "competition": return "bg-secondary/20 text-secondary";
      case "hackathon": return "bg-primary/20 text-primary";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-500/20 text-green-700";
      case "upcoming": return "bg-orange-500/20 text-orange-700";
      case "completed": return "bg-gray-500/20 text-gray-700";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center py-20 px-4 md:px-8">
      <div className="w-full max-w-7xl mx-auto text-center flex-1 flex flex-col">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <Trophy className="w-8 h-8 text-secondary animate-glow-pulse" />
            <h2 className="font-title text-primary" style={{ fontSize: 'var(--heading-size)' }}>
              Activity & Rewards Corner
            </h2>
            <Gift className="w-8 h-8 text-primary animate-glow-pulse" />
          </div>
          <p className="font-body text-muted-foreground text-lg max-w-3xl mx-auto">
            Engage, learn, and grow through exciting challenges and competitions.
            Every participation is a step towards innovation excellence!
          </p>
        </div>

        <div className="flex-1 grid lg:grid-cols-3 gap-12 justify-items-center">
          {/* Activities Section */}
          <div className="lg:col-span-2 w-full max-w-4xl">
            <h3 className="font-heading text-primary text-2xl mb-8 text-center">
              Current & Upcoming Activities
            </h3>

            <div className="space-y-6">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="scroll-card hover:glow-effect transition-all duration-300 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <div className="text-primary">
                        {activity.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-heading text-primary text-lg">
                          {activity.title}
                        </h4>
                        <div className="flex space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-body-bold ${getActivityColor(activity.type)}`}>
                            {activity.type}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-body-bold ${getStatusColor(activity.status)}`}>
                            {activity.status}
                          </span>
                        </div>
                      </div>

                      <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                        {activity.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Trophy className="w-4 h-4 text-secondary" />
                          <span className="font-body-bold text-secondary">{activity.reward}</span>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="font-body text-foreground">{activity.deadline}</span>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span className="font-body text-muted-foreground">{activity.participants} participants</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rewards Section */}
          <div className="w-full max-w-md">
            <h3 className="font-heading text-primary text-2xl mb-8 text-center">
              Achievement Rewards
            </h3>

            <div className="space-y-6">
              {rewards.map((reward, index) => (
                <div
                  key={index}
                  className="scroll-card animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start space-x-3 mb-3">
                    {reward.icon}
                    <div className="flex-1">
                      <h4 className="font-heading text-primary text-base mb-1">
                        {reward.title}
                      </h4>
                      <p className="font-body text-muted-foreground text-xs leading-relaxed">
                        {reward.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <span className="font-body-bold text-secondary text-sm">
                      {reward.points} points
                    </span>
                    <span className="font-body text-primary text-xs">
                      {reward.benefit}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Leaderboard Preview */}
            <div className="mt-8">
              <div className="scroll-card heritage-border text-center">
                <h4 className="font-heading text-primary text-lg mb-4">
                  Top Contributors
                </h4>

                <div className="space-y-3">
                  {["Priya S.", "Arjun K.", "Meera R."].map((name, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${index === 0 ? 'bg-secondary text-white' :
                          index === 1 ? 'bg-gray-400 text-white' :
                            'bg-orange-400 text-white'
                          }`}>
                          {index + 1}
                        </div>
                        <span className="font-body text-foreground">{name}</span>
                      </div>
                      <span className="font-body-bold text-secondary text-sm">
                        {1250 - (index * 200)} pts
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="w-full mt-auto pt-8 border-t border-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center space-y-6 py-6">
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-title text-primary">KPRCAS</span>
                <span className="text-muted-foreground">Incubation Hub</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </a>
            </div>
          </div>

          <div className="border-t border-border/50 pt-6 pb-8">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} KPRCAS Incubation Hub. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Empowering innovation through tradition and technology
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ActivityRewards;
