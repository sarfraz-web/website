import { Card } from "@/components/ui/card";
import { Image, ShoppingCart, FileCheck, Users, Zap, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, useCallback } from "react";

const features = [
  {
    name: "BackdropAI",
    description: "AI-powered generative tool for text-over-image creation using & font styling.",
    icon: Image,
    url: "https://backdropai.com", // Add your actual URL here
    gradient: "from-pink-500/20 to-purple-600/20",
    iconGradient: "from-pink-500 to-purple-600",
    borderGradient: "from-pink-500/50 to-purple-600/50",
  },
  {
    name: "Bechdo.in",
    description: "Next-gen marketplace redefining how India buys and sells with KYC based authentication, speed and simplicity.",
    icon: ShoppingCart,
    url: "https://bechdo.in", // Add your actual URL here
    gradient: "from-blue-600/20 to-cyan-500/20",
    iconGradient: "from-blue-600 to-cyan-500",
    borderGradient: "from-blue-600/50 to-cyan-500/50",
  },
  {
    name: "ClaimCheck",
    description: "An AI-powered web app that uses RAG to verify patent originality by semantically comparing user submissions with existing patents.",
    icon: FileCheck,
    url: "https://claimcheck.app", // Add your actual URL here
    gradient: "from-cyan-500/20 to-pink-500/20",
    iconGradient: "from-cyan-500 to-pink-500",
    borderGradient: "from-cyan-500/50 to-pink-500/50",
  },
  // {
  //   name: "Expert Consulting",
  //   description: "Get guidance from our team of AI experts to implement the right solutions.",
  //   icon: Users,
  //   gradient: "from-purple-600/20 to-blue-600/20",
  //   iconGradient: "from-purple-600 to-blue-600",
  //   borderGradient: "from-purple-600/50 to-blue-600/50",
  // },
  // {
  //   name: "Lightning Fast",
  //   description: "Optimized for performance with real-time processing capabilities.",
  //   icon: Zap,
  //   gradient: "from-pink-500/20 to-cyan-500/20",
  //   iconGradient: "from-pink-500 to-cyan-500",
  //   borderGradient: "from-pink-500/50 to-cyan-500/50",
  // },
  // {
  //   name: "Enterprise Security",
  //   description: "Bank-grade security with encrypted data transmission and storage.",
  //   icon: Shield,
  //   gradient: "from-blue-600/20 to-pink-600/20",
  //   iconGradient: "from-blue-600 to-pink-600",
  //   borderGradient: "from-blue-600/50 to-pink-600/50",
  // },
];

const GlitterParticles = ({ visibleCount }) => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Reduced main particles */}
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className={cn(
          "absolute w-0.5 h-0.5 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full transition-all duration-1000",
          visibleCount > 2 ? "opacity-20 animate-pulse" : "opacity-5"
        )}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${4 + Math.random() * 3}s`
        }}
      />
    ))}
    
    {/* Subtle glitter particles */}
    {[...Array(12)].map((_, i) => (
      <div
        key={`glitter-${i}`}
        className="absolute animate-pulse"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 4}s`,
          animationDuration: `${2 + Math.random() * 2}s`
        }}
      >
        <div className={cn(
          "w-0.5 h-0.5 bg-white rounded-full opacity-30",
          Math.random() > 0.7 && "bg-gradient-to-r from-pink-200 to-blue-200"
        )} />
      </div>
    ))}
    
    {/* Minimal sparkle effects */}
    {[...Array(6)].map((_, i) => (
      <div
        key={`sparkle-${i}`}
        className="absolute animate-ping"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 6}s`,
          animationDuration: `${3 + Math.random() * 2}s`
        }}
      >
        <div className="w-0.5 h-0.5 bg-gradient-to-r from-yellow-200 to-white rounded-full opacity-25" />
      </div>
    ))}
    
    {/* Few twinkling stars */}
    {[...Array(8)].map((_, i) => (
      <div
        key={`star-${i}`}
        className="absolute text-white opacity-15 animate-pulse"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          fontSize: `${Math.random() * 4 + 3}px`,
          animationDelay: `${Math.random() * 8}s`,
          animationDuration: `${3 + Math.random() * 3}s`
        }}
      >
        ✦
      </div>
    ))}
  </div>
);

const FeatureCard = ({ feature, index, cardState }) => {
  const IconComponent = feature.icon;
  
  const CardContent = () => (
    <>
      {/* Animated gradient background */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-r transition-all duration-2000",
        feature.gradient,
        cardState.animated ? "opacity-100 scale-100" : "opacity-0 scale-110"
      )} />
      
      {/* Animated border */}
      <div className={cn(
        "absolute inset-0 rounded-lg p-[1px] transition-all duration-1500",
        cardState.animated 
          ? "bg-gradient-to-r from-pink-500/40 via-blue-500/40 to-cyan-500/40" 
          : "bg-gradient-to-r from-transparent via-gray-700/50 to-transparent"
      )}>
        <div className="bg-black/90 rounded-lg w-full h-full" />
      </div>

      {/* Sliding reveal effect */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-r from-black via-transparent to-black transition-all duration-2000 ease-out opacity-50",
        cardState.animated ? "translate-x-full opacity-0" : "translate-x-0 opacity-50"
      )} />

      <div className="relative z-10 p-8">
        <div className="flex items-center gap-6">
          {/* Icon section */}
          <div className="flex-shrink-0">
            <div className={cn(
              "relative p-4 rounded-2xl transition-all duration-1500 transform-gpu",
              "bg-gradient-to-br shadow-lg from-gray-800/50 to-gray-900/50",
              cardState.animated && "scale-110 rotate-3 shadow-2xl from-gray-800/80 to-gray-900/80"
            )}>
              <div className={cn(
                "absolute inset-0 rounded-2xl bg-gradient-to-br transition-all duration-1500",
                feature.iconGradient,
                cardState.animated ? "opacity-60" : "opacity-20"
              )} />
              
              <div className={cn(
                "absolute inset-0 rounded-2xl bg-gradient-to-br blur-md transition-all duration-1500",
                feature.iconGradient,
                cardState.animated ? "opacity-40 scale-110" : "opacity-0"
              )} />
              
              <IconComponent className={cn(
                "relative z-10 h-8 w-8 text-white transition-all duration-1000",
                cardState.animated && "drop-shadow-lg scale-110"
              )} />
            </div>
          </div>

          {/* Content section */}
          <div className={cn(
            "flex-1 min-w-0 transform transition-all duration-1200",
            cardState.animated && "translate-x-2"
          )}>
            <h3 className={cn(
              "text-2xl font-bold transition-all duration-1000 transform-gpu",
              cardState.animated 
                ? "bg-gradient-to-r from-pink-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent scale-105" 
                : "text-white"
            )}>
              {feature.name}
            </h3>
            <p className={cn(
              "text-lg leading-relaxed transition-all duration-1000 transform",
              cardState.animated 
                ? "text-gray-200 translate-y-1" 
                : "text-gray-400"
            )}>
              {feature.description}
            </p>
          </div>

          {/* Decorative element */}
          <div className={cn(
            "flex-shrink-0 transition-all duration-1500 transform relative",
            cardState.animated 
              ? "opacity-100 translate-x-0 scale-110" 
              : "opacity-0 translate-x-8"
          )}>
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

      {/* Glow effect */}
      <div className={cn(
        "absolute -inset-1 rounded-lg blur-lg transition-all duration-2000 z-0",
        "bg-gradient-to-r",
        feature.borderGradient,
        cardState.animated ? "opacity-50" : "opacity-0"
      )} />
      
      {/* Ripple effect */}
      {cardState.animated && (
        <div className="absolute inset-0 rounded-lg opacity-20">
          <div className={cn(
            "absolute inset-0 rounded-lg animate-ping bg-gradient-to-r",
            feature.iconGradient
          )} style={{ 
            animationDuration: '3s', 
            animationIterationCount: '2',
            animationDelay: '0.5s'
          }} />
        </div>
      )}
    </>
  );
  
  return (
    <Card className="group relative overflow-hidden bg-gradient-to-r from-gray-900/50 via-black/80 to-gray-900/50 border-0 shadow-lg">
      {feature.url ? (
        <a 
          href={feature.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full h-full cursor-pointer"
        >
          <CardContent />
        </a>
      ) : (
        <CardContent />
      )}
    </Card>
  );
};

export function Features() {
  const [cardStates, setCardStates] = useState({});
  const cardRefs = useRef([]);
  const timeoutRefs = useRef({});

  const updateCardState = useCallback((index, visible, animated) => {
    setCardStates(prev => ({
      ...prev,
      [index]: { visible, animated }
    }));
  }, []);

  useEffect(() => {
    const observers = [];
    
    cardRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              updateCardState(index, true, false);
              
              if (timeoutRefs.current[index]) {
                clearTimeout(timeoutRefs.current[index]);
              }
              
              timeoutRefs.current[index] = setTimeout(() => {
                updateCardState(index, true, true);
              }, index * 150 + 200);
              
            } else {
              if (timeoutRefs.current[index]) {
                clearTimeout(timeoutRefs.current[index]);
              }
              updateCardState(index, false, false);
            }
          },
          { 
            threshold: 0.2,
            rootMargin: '-100px 0px -100px 0px'
          }
        );
        
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
      Object.values(timeoutRefs.current).forEach(timeout => clearTimeout(timeout));
    };
  }, [updateCardState]);

  const visibleCount = Object.values(cardStates).filter(state => state.visible).length;

  return (
    <div className="min-h-screen py-16 bg-black relative">
      <GlitterParticles visibleCount={visibleCount} />
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
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

        <div className="space-y-12">
          {features.map((feature, index) => {
            const cardState = cardStates[index] || { visible: false, animated: false };
            
            return (
              <div
                key={feature.name}
                ref={el => cardRefs.current[index] = el}
                className={cn(
                  "transform transition-all duration-1000 ease-out",
                  cardState.visible 
                    ? "opacity-100 translate-y-0 scale-100" 
                    : "opacity-0 translate-y-20 scale-95"
                )}
              >
                <FeatureCard 
                  feature={feature} 
                  index={index} 
                  cardState={cardState} 
                />
              </div>
            );
          })}
        </div>

        {/* Scroll progress indicator */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
          <div 
            className="h-full bg-gradient-to-r from-pink-500 via-blue-500 to-cyan-500 transition-all duration-300"
            style={{ width: `${(visibleCount / features.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}