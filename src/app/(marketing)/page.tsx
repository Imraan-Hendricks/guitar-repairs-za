import { Hero } from './Hero';
import { Packages } from './Packages';
import { Promo } from './Promo';
import { Services } from './Services';
import { Pricing } from './Pricing';
import { ExclusiveDeal } from './ExclusiveDeal';

export const metadata = {
  title: 'Guitar Repair ZA | Home',
};

export default function Home() {
  return (
    <div>
      <Promo />
      <Hero />
      <Services />
      <Packages />
      <Pricing />
      <ExclusiveDeal />
    </div>
  );
}
