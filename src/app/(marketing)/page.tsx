import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import { ExclusiveDeal } from './ExclusiveDeal';
import { Hero } from './Hero';
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
        <Services />
      </ScrollAnchor>
      <ScrollAnchor name='packages'>
        <Packages />
      </ScrollAnchor>
      <ScrollAnchor name='pricing'>
        <Pricing />
        <ScrollAnchor name='exclusiveDeal'>
          <ExclusiveDeal />
        </ScrollAnchor>
      </ScrollAnchor>
      <ScrollAnchor name='testimonials'>
        <Testimonials />
      </ScrollAnchor>
      <ScrollAnchor name='contact'>
        <ContactInfo />
        <ContactForm />
      </ScrollAnchor>
    </div>
  );
}
