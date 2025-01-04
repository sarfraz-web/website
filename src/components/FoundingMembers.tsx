import { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, UserRound } from "lucide-react";

const founders = [
  {
    name: "Md Adnan Baqi",
    role: "CEO & founder",
    image: "/Founders/Adnan.jpg",
    bio: "AI/ML Engineer & Entrepreneur",
    links: {
      website: "https://www.adnanbaqi.tech",
      linkedin: "https://www.linkedin.com/in/buckybarns",
      github: "https://github.com/adnanbaqi"
    }
  },
  {
    name: "Mohammed Sarfraz",
    role: "COO & Co-founder",
    image: "/Founders/Sarfraz.jpg",
    bio: "SOFTWARE ENGINEER",
    links: {
      website: "https://portfolio-seven-inky-24.vercel.app",
      linkedin: "https://www.linkedin.com/in/mohammad-sarfraz-043118258",
      github: "https://github.com/sarfraz-web"
    }
  },
  {
    name: "Aquib Jawed",
    role: "Chief Research Officer",
    image: "/Founders/Aquib.jpg",
    bio: "Python Developer & Data Scientist",
    links: {
      website: "https://anaquib1110.github.io/Portfolio/",
      linkedin: "https://www.linkedin.com/in/aquib-jawed-1147ab164",
      github: "https://github.com/anaquib1110"
    }
  },
  {
    name: "Gufran Ahmad Siddiqui",
    role: "Head of Product",
    image: "/Founders/Gufran.jpg",
    bio: "Full Stack Developer",
    links: {
      website: "https://astronaut-portfolio-template.vercel.app/",
      linkedin: "https://www.linkedin.com/in/gufran-ahmad-siddiqui-232756278",
      github: "https://github.com/GufranSiddiqui0101"
    }
  }
];

const duplicatedFounders = [...founders, ...founders];

export function FoundingMembers() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const innerScrollerRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!scrollerRef.current || !innerScrollerRef.current) return;

    const scrollerContent = Array.from(innerScrollerRef.current.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      if (innerScrollerRef.current) {
        innerScrollerRef.current.appendChild(duplicatedItem);
      }
    });

    if (innerScrollerRef.current) {
      setScrollWidth(innerScrollerRef.current.scrollWidth / 2);
    }

    const handleResize = () => {
      if (innerScrollerRef.current) {
        setScrollWidth(innerScrollerRef.current.scrollWidth / 2);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full py-12 md:py-24 overflow-hidden bg-gradient-to-r from-[#1A202C]/10 via-[#2D3748]/10 to-[#4A5568]/10">
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${scrollWidth}px);
          }
        }

        .scroll-container {
          animation: scroll ${isMobile ? '20s' : '40s'} linear infinite;
        }

        .scroll-container:hover {
          animation-play-state: paused;
        }

        .founder-card {
          transition: all 0.3s ease-in-out;
          background: white;
        }

        .founder-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          z-index: 10;
        }

        .social-icon {
          transition: transform 0.2s ease-in-out;
        }

        .social-icon:hover {
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .founder-card:hover {
            transform: translateY(-5px) scale(1.01);
          }
        }
      `}</style>

      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4 text-pink-300">Meet Our Founders</h2>
          <p className="text-sm md:text-base text-muted-foreground">
            The visionaries behind AIVOLVE's groundbreaking AI technology
          </p>
        </div>
      </div>
      
      <div
        ref={scrollerRef}
        className="max-w-full md:max-w-7xl mx-auto scroller relative overflow-hidden"
      >
        <div
          ref={innerScrollerRef}
          className="flex gap-2 md:gap-4 py-4 scroll-container"
          style={{
            willChange: 'transform',
          }}
        >
          {duplicatedFounders.map((founder, idx) => (
            <Card
              key={`${founder.name}-${idx}`}
              className="founder-card relative flex-shrink-0 w-[250px] md:w-[300px] overflow-hidden group bg-white"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF4D9E]/10 via-[#A349E5]/10 to-[#4A90E2]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="p-4 md:p-6 z-10 relative">
                <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto mb-3 md:mb-4 rounded-full overflow-hidden shadow-lg transform transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="text-center transform transition-transform duration-300">
                  <h3 className="text-lg md:text-xl font-semibold mb-1 text-gray-800 group-hover:text-pink-500">{founder.name}</h3>
                  <p className="text-xs md:text-sm text-gray-600 mb-1 md:mb-2 group-hover:text-purple-500">{founder.role}</p>
                  <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4">{founder.bio}</p>

                  <div className="flex justify-center gap-3 md:gap-4">
                    <a
                      href={founder.links.website}
                      className="social-icon p-1.5 md:p-2 rounded-full transition-all duration-200 hover:bg-[#FF4D9E]/10 text-[#FF4D9E]"
                    >
                      <UserRound className="w-3 h-3 md:w-4 md:h-4" />
                    </a>
                    <a
                      href={founder.links.linkedin}
                      className="social-icon p-1.5 md:p-2 rounded-full transition-all duration-200 hover:bg-[#A349E5]/10 text-[#A349E5]"
                    >
                      <Linkedin className="w-3 h-3 md:w-4 md:h-4" />
                    </a>
                    <a
                      href={founder.links.github}
                      className="social-icon p-1.5 md:p-2 rounded-full transition-all duration-200 hover:bg-[#4A90E2]/10 text-[#4A90E2]"
                    >
                      <Github className="w-3 h-3 md:w-4 md:h-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}