import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, LineChart, Users, Zap, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    name: "Advanced ML Models",
    description:
      "State-of-the-art machine learning models trained on vast datasets for optimal performance.",
    icon: Brain,
    gradient: "from-pink-500/20 to-purple-600/20",
    iconGradient: "from-pink-500 to-purple-600",
    borderGradient: "from-pink-500/50 to-purple-600/50",
  },
  {
    name: "Natural Language Processing",
    description: "Process and understand human language at scale with our NLP solutions.",
    icon: Code,
    gradient: "from-blue-600/20 to-cyan-500/20",
    iconGradient: "from-blue-600 to-cyan-500",
    borderGradient: "from-blue-600/50 to-cyan-500/50",
  },
  {
    name: "Predictive Analytics",
    description: "Make data-driven decisions with our powerful predictive analytics tools.",
    icon: LineChart,
    gradient: "from-cyan-500/20 to-pink-500/20",
    iconGradient: "from-cyan-500 to-pink-500",
    borderGradient: "from-cyan-500/50 to-pink-500/50",
  },
  {
    name: "Expert Consulting",
    description: "Get guidance from our team of AI experts to implement the right solutions.",
    icon: Users,
    gradient: "from-purple-600/20 to-blue-600/20",
    iconGradient: "from-purple-600 to-blue-600",
    borderGradient: "from-purple-600/50 to-blue-600/50",
  },
  {
    name: "Lightning Fast",
    description: "Optimized for performance with real-time processing capabilities.",
    icon: Zap,
    gradient: "from-pink-500/20 to-cyan-500/20",
    iconGradient: "from-pink-500 to-cyan-500",
    borderGradient: "from-pink-500/50 to-cyan-500/50",
  },
  {
    name: "Enterprise Security",
    description: "Bank-grade security with encrypted data transmission and storage.",
    icon: Shield,
    gradient: "from-blue-600/20 to-pink-600/20",
    iconGradient: "from-blue-600 to-pink-600",
    borderGradient: "from-blue-600/50 to-pink-600/50",
  },
];

export function Features() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = [];
    
    cardRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleCards(prev => new Set([...prev, index]));
            }
          },
          { 
            threshold: 0.3,
            rootMargin: '-50px 0px -50px 0px'
          }
        );
        
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-black-900 via-black to-grey-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold leading-7 bg-gradient-to-r from-pink-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent uppercase tracking-wider">
            Everything you need
          </h2>
          <p className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
            AI Solutions for Every Need
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-400 max-w-2xl mx-auto">
            Our comprehensive suite of AI tools and services helps businesses transform their operations and stay ahead of the competition.
          </p>
        </div>

        <div className="space-y-8">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              ref={el => cardRefs.current[index] = el}
              className={cn(
                "transform transition-all duration-1000 ease-out",
                visibleCards.has(index) 
                  ? "opacity-100 translate-y-0 scale-100" 
                  : "opacity-0 translate-y-16 scale-95"
              )}
              style={{
                transitionDelay: `${index * 200}ms`
              }}
            >
              <Card className="group relative overflow-hidden bg-gradient-to-r from-gray-900/50 via-black/80 to-gray-900/50 border-0 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:scale-105">
                {/* Animated gradient background */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-all duration-1000",
                  feature.gradient
                )} />
                
                {/* Animated border with pulse effect */}
                <div className="absolute inset-0 rounded-lg p-[1px] bg-gradient-to-r from-transparent via-gray-700/50 to-transparent group-hover:from-pink-500/40 group-hover:via-blue-500/40 group-hover:to-cyan-500/40 transition-all duration-700 group-hover:animate-pulse">
                  <div className="bg-black/90 rounded-lg w-full h-full" />
                </div>

                {/* Sliding reveal effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black transform translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out opacity-50"></div>

                <div className="relative z-10 p-8">
                  <div className="flex items-center gap-6">
                    {/* Icon section with enhanced animation */}
                    <div className="flex-shrink-0">
                      <div className={cn(
                        "relative p-4 rounded-2xl transition-all duration-700 group-hover:scale-125 group-hover:rotate-6",
                        "bg-gradient-to-br shadow-lg group-hover:shadow-2xl",
                        "from-gray-800/50 to-gray-900/50 group-hover:from-gray-800/80 group-hover:to-gray-900/80",
                        "transform-gpu"
                      )}>
                        <div className={cn(
                          "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-20 group-hover:opacity-60 transition-all duration-700",
                          feature.iconGradient
                        )} />
                        {/* Icon glow effect */}
                        <div className={cn(
                          "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-30 blur-md transition-all duration-700",
                          feature.iconGradient
                        )} />
                        <feature.icon className="relative z-10 h-8 w-8 text-white group-hover:text-white transition-all duration-500 group-hover:drop-shadow-lg" />
                      </div>
                    </div>

                    {/* Content section with staggered animation */}
                    <div className="flex-1 min-w-0 transform transition-all duration-500 group-hover:translate-x-2">
                      <h3 className="text-2xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:via-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-700 group-hover:scale-105 transform-gpu">
                        {feature.name}
                      </h3>
                      <p className="mt-3 text-gray-400 group-hover:text-gray-200 transition-all duration-500 text-lg leading-relaxed transform group-hover:translate-y-1">
                        {feature.description}
                      </p>
                    </div>

                    {/* Enhanced decorative element */}
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-8 group-hover:translate-x-0 group-hover:scale-110">
                      <div className={cn(
                        "w-2 h-20 rounded-full bg-gradient-to-b shadow-lg",
                        feature.iconGradient
                      )} />
                      <div className={cn(
                        "w-1 h-16 rounded-full bg-gradient-to-b absolute top-2 left-0.5 opacity-60 blur-sm",
                        feature.iconGradient
                      )} />
                    </div>
                  </div>
                </div>

                {/* Enhanced glow effect with animation */}
                <div className={cn(
                  "absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-40 blur-lg transition-all duration-700 -z-10 animate-pulse",
                  "bg-gradient-to-r",
                  feature.borderGradient
                )} />
                
                {/* Ripple effect on hover */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-1000">
                  <div className={cn(
                    "absolute inset-0 rounded-lg animate-ping",
                    "bg-gradient-to-r",
                    feature.iconGradient
                  )} style={{ animationDuration: '2s' }} />
                </div>
              </Card>
            </div>
          ))}
        </div>


        {/* Floating particles effect */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}