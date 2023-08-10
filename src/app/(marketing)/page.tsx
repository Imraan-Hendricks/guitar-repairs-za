import { Packages } from './Packages';
import { Hero } from './Hero';
import { Promo } from './Promo';
import { Services } from './Services';

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
    </div>
  );
}
