import { Card } from "@/components/ui/card";
import { Image, ShoppingCart, FileCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, useCallback, useMemo } from "react";

const features = [
  {
    name: "BackdropAI",
    description: "AI-powered generative tool for text-over-image creation using & font styling.",
    icon: Image,
    url: "https://backdrop-ai-one.vercel.app/",
    gradient: "from-pink-500/20 to-purple-600/20",
    iconGradient: "from-pink-500 to-purple-600",
    borderGradient: "from-pink-500/50 to-purple-600/50",
  },
  {
    name: "Bechdo.in",
    description: "Next-gen marketplace redefining how India buys and sells with KYC based authentication, speed and simplicity.",
    icon: ShoppingCart,
    url: "https://bechdo.in",
    gradient: "from-blue-600/20 to-cyan-500/20",
    iconGradient: "from-blue-600 to-cyan-500",
    borderGradient: "from-blue-600/50 to-cyan-500/50",
  },
  {
    name: "ClaimCheck",
    description: "An AI-powered web app that uses RAG to verify patent originality by semantically comparing user submissions with existing patents.",
    icon: FileCheck,
    url: "https://claimcheck.app",
    gradient: "from-cyan-500/20 to-pink-500/20",
    iconGradient: "from-cyan-500 to-pink-500",
    borderGradient: "from-cyan-500/50 to-pink-500/50",
  },
];

// Optimized glitter particles with fewer elements and better performance
const GlitterParticles = ({ visibleCount }) => {
  const particleCount = Math.min(8 + visibleCount * 2, 20);
  
  const particles = useMemo(() => 
    [...Array(particleCount)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 2,
      type: i % 3 === 0 ? 'glitter' : i % 3 === 1 ? 'sparkle' : 'star'
    }))
  , [particleCount]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`
          }}
        >
          {particle.type === 'star' ? (
            <div className="text-white opacity-20 text-xs">✦</div>
          ) : (
            <div className={cn(
              "w-0.5 h-0.5 rounded-full",
              particle.type === 'glitter' 
                ? "bg-gradient-to-r from-pink-400 to-cyan-400 opacity-30" 
                : "bg-white opacity-20"
            )} />
          )}
        </div>
      ))}
    </div>
  );
};

// Optimized feature card with reduced complexity
const FeatureCard = ({ feature, isVisible, isAnimated }) => {
  const IconComponent = feature.icon;
  
  const CardContent = () => (
    <>
      {/* Background gradient */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-r transition-all duration-1000",
        feature.gradient,
        isAnimated ? "opacity-100" : "opacity-0"
      )} />
      
      {/* Border gradient */}
      <div className={cn(
        "absolute inset-0 rounded-lg p-[1px] transition-all duration-1000",
        isAnimated 
          ? "bg-gradient-to-r from-pink-500/40 via-blue-500/40 to-cyan-500/40" 
          : "bg-gradient-to-r from-gray-700/30 to-gray-700/30"
      )}>
        <div className="bg-black/90 rounded-lg w-full h-full" />
      </div>

      <div className="relative z-10 p-6 lg:p-8">
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Icon */}
          <div className={cn(
            "relative p-3 lg:p-4 rounded-xl bg-gray-800/50 transition-all duration-1000",
            isAnimated && "scale-110 shadow-2xl"
          )}>
            <div className={cn(
              "absolute inset-0 rounded-xl bg-gradient-to-br transition-all duration-1000",
              feature.iconGradient,
              isAnimated ? "opacity-60" : "opacity-20"
            )} />
            <IconComponent className="relative z-10 h-6 w-6 lg:h-8 lg:w-8 text-white" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className={cn(
              "text-xl lg:text-2xl font-bold transition-all duration-1000",
              isAnimated 
                ? "bg-gradient-to-r from-pink-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent" 
                : "text-white"
            )}>
              {feature.name}
            </h3>
            <p className={cn(
              "text-base lg:text-lg leading-relaxed mt-1 transition-all duration-1000",
              isAnimated ? "text-gray-200" : "text-gray-400"
            )}>
              {feature.description}
            </p>
          </div>

          {/* Accent bar */}
          <div className={cn(
            "w-1 h-16 lg:h-20 rounded-full bg-gradient-to-b transition-all duration-1000",
            feature.iconGradient,
            isAnimated ? "opacity-100 scale-110" : "opacity-0 scale-90"
          )} />
        </div>
      </div>

      {/* Glow effect */}
      <div className={cn(
        "absolute -inset-1 rounded-lg blur-lg transition-all duration-1000",
        "bg-gradient-to-r",
        feature.borderGradient,
        isAnimated ? "opacity-40" : "opacity-0"
      )} />
    </>
  );
  
  return (
    <Card className="relative overflow-hidden bg-gray-900/50 border-0 shadow-lg transition-transform duration-300 hover:scale-[1.02]">
      {feature.url ? (
        <a 
          href={feature.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full h-full"
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
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [animatedCards, setAnimatedCards] = useState(new Set());
  const observerRef = useRef(null);
  const timeoutsRef = useRef(new Map());

  // Optimized intersection observer with single instance
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.dataset.index);
        
        if (entry.isIntersecting) {
          setVisibleCards(prev => new Set([...prev, index]));
          
          // Clear existing timeout
          if (timeoutsRef.current.has(index)) {
            clearTimeout(timeoutsRef.current.get(index));
          }
          
          // Set animation timeout
          const timeout = setTimeout(() => {
            setAnimatedCards(prev => new Set([...prev, index]));
            timeoutsRef.current.delete(index);
          }, index * 100 + 200);
          
          timeoutsRef.current.set(index, timeout);
        } else {
          setVisibleCards(prev => {
            const newSet = new Set(prev);
            newSet.delete(index);
            return newSet;
          });
          setAnimatedCards(prev => {
            const newSet = new Set(prev);
            newSet.delete(index);
            return newSet;
          });
          
          // Clear timeout
          if (timeoutsRef.current.has(index)) {
            clearTimeout(timeoutsRef.current.get(index));
            timeoutsRef.current.delete(index);
          }
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
      rootMargin: '-50px 0px -50px 0px'
    });

    // Observe all cards
    const cards = document.querySelectorAll('[data-feature-card]');
    cards.forEach(card => observerRef.current.observe(card));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      // Clear all timeouts
      timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
      timeoutsRef.current.clear();
    };
  }, []);

  const visibleCount = visibleCards.size;

  return (
    <div className="min-h-screen py-16 bg-black relative">
      <GlitterParticles visibleCount={visibleCount} />
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
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

        {/* Feature cards */}
        <div className="space-y-8 lg:space-y-12">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              data-feature-card
              data-index={index}
              className={cn(
                "transform transition-all duration-700 ease-out",
                visibleCards.has(index)
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              )}
            >
              <FeatureCard 
                feature={feature}
                isVisible={visibleCards.has(index)}
                isAnimated={animatedCards.has(index)}
              />
            </div>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-800/50 z-50">
          <div 
            className="h-full bg-gradient-to-r from-pink-500 via-blue-500 to-cyan-500 transition-all duration-500 ease-out"
            style={{ width: `${(visibleCount / features.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}