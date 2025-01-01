import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { TrustedByBanner } from '@/components/TrustedByBanner';

export function Home() {
  return (
    <div>
      <Hero />
      <TrustedByBanner/>
      <Features />
    </div>
  );
}