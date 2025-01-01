import { Building2, Briefcase, LineChart, Laptop, Shield, Rocket } from 'lucide-react';

const companies = [
  { icon: Building2, name: 'TechCorp' },
  { icon: Briefcase, name: 'Enterprise Solutions' },
  { icon: LineChart, name: 'Growth Analytics' },
  { icon: Laptop, name: 'Digital Systems' },
  { icon: Shield, name: 'SecureNet' },
  { icon: Rocket, name: 'LaunchPad' },
];

export function TrustedByBanner() {
  return (
    <div className="bg-black py-8 overflow-hidden">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-white text-2xl font-bold mb-2">Trusted By</h2>
        <div className="h-1 w-20 bg-[#FF4D9E]"></div>
      </div>

      <div className="relative">
        <div className="flex animate-marquee">
          {[...companies, ...companies].map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex items-center mx-8 min-w-max"
            >
              {/* Render the icon */}
              <company.icon className="w-8 h-8 text-[#FF4D9E] mr-6" />
              <span className="text-white font-medium">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
