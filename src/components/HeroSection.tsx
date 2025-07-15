import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Leaf, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-agro-tourism.jpg";

const HeroSection = () => {
  const stats = [
    { icon: Users, label: "Farmers Connected", value: "10,000+" },
    { icon: Leaf, label: "Eco Products", value: "50,000+" },
    { icon: TrendingUp, label: "Revenue Generated", value: "$2.5M+" },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-nature flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Connecting
              <span className="text-sunset-orange"> Farmers</span>
              <br />
              to Global
              <span className="text-accent"> Markets</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Bridge the gap between local agricultural communities and global markets through 
              sustainable tourism, e-commerce, and smart farming solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-white text-nature-green hover:bg-white/90 shadow-soft group"
              >
                Explore Platform
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 group"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-nature">
              <img 
                src={heroImage} 
                alt="Smart Agro-Tourism Platform - Sustainable farming and eco-tourism"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nature-green/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <stat.icon className="h-8 w-8 text-white mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;