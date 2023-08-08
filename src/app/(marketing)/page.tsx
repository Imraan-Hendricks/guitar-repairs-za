import { Hero } from './Hero';
import { Promo } from './Promo';

export const metadata = {
  title: 'Guitar Repair ZA | Home',
};

export default function Home() {
  return (
    <div>
      <Promo />
      <Hero />
    </div>
  );
}
