import { Building2, Briefcase, Signature, Laptop, Tv, Rocket } from 'lucide-react';

const companies = [
  { icon: Building2, name: 'Fashion Industry' },
  { icon: Briefcase, name: 'TechCorps' },
  { icon: Signature, name: 'Influencers' },
  { icon: Laptop, name: 'Freelancers' },
  { icon: Tv, name: 'Media' },
  { icon: Rocket, name: 'Startups' },
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


//FUTURE WORKKKK



// const companies = [
//   { logoUrl: 'https://example.com/techcorp-logo.png', name: 'TechCorp' },
//   { logoUrl: 'https://example.com/enterprise-solutions-logo.png', name: 'Enterprise Solutions' },
//   { logoUrl: 'https://example.com/growth-analytics-logo.png', name: 'Growth Analytics' },
//   { logoUrl: 'https://example.com/digital-systems-logo.png', name: 'Digital Systems' },
//   { logoUrl: 'https://example.com/securenet-logo.png', name: 'SecureNet' },
//   { logoUrl: 'https://example.com/launchpad-logo.png', name: 'LaunchPad' },
// ];

// export function TrustedByBanner() {
//   return (
//     <div className="bg-black py-8 overflow-hidden">
//       <div className="flex flex-col items-center mb-10">
//         <h2 className="text-white text-2xl font-bold mb-2">Trusted By</h2>
//         <div className="h-1 w-20 bg-[#FF4D9E]"></div>
//       </div>

//       <div className="relative">
//         <div className="flex animate-marquee">
//           {[...companies, ...companies].map((company, index) => (
//             <div
//               key={`${company.name}-${index}`}
//               className="flex items-center mx-8 min-w-max"
//             >
//               {/* Render the company logo */}
//               <img
//                 src={company.logoUrl}
//                 alt={company.name}
//                 className="w-8 h-8 object-contain mr-6"
//               />
//               <span className="text-white font-medium">{company.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

