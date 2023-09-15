import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import { ExclusiveDeal } from './ExclusiveDeal';
import { Hero } from './Hero';
import { InViewAnimation } from '@/components/InViewAnimation';
import { MobileMenu } from './MobileMenu';
import { Navbar } from './Navbar';
import { Packages } from './Packages';
import { Pricing } from './Pricing';
import { ScrollAnchor } from './NavbarContext';
import { Services } from './Services';
import { ScrollToTopButton } from '../../components/ScrollToTopButton';
import { Testimonials } from './Testimonials';

export const metadata = {
  title: 'Guitar Repair ZA | Home',
};

export default function Home() {
  return (
    <div>
      <ScrollAnchor name='home'>
        <Navbar />
        <MobileMenu />
        <Hero />
      </ScrollAnchor>
      <ScrollToTopButton />

      <ScrollAnchor name='services'>
        <InViewAnimation>
          <Services />
        </InViewAnimation>
      </ScrollAnchor>

      <ScrollAnchor name='packages'>
        <InViewAnimation>
          <Packages />
        </InViewAnimation>
      </ScrollAnchor>

      <ScrollAnchor name='pricing'>
        <InViewAnimation>
          <Pricing />
        </InViewAnimation>
        <ScrollAnchor name='exclusiveDeal'>
          <InViewAnimation>
            <ExclusiveDeal />
          </InViewAnimation>
        </ScrollAnchor>
      </ScrollAnchor>

      <ScrollAnchor name='testimonials'>
        <InViewAnimation>
          <Testimonials />
        </InViewAnimation>
      </ScrollAnchor>

      <ScrollAnchor name='contact'>
        <InViewAnimation>
          <ContactInfo />
        </InViewAnimation>
        <InViewAnimation>
          <ContactForm />
        </InViewAnimation>
      </ScrollAnchor>
    </div>
  );
}
