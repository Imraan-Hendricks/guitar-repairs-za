import GuitarZALogo from '../../../public/guitar-za.png';
import Image from 'next/image';

export function Hero() {
  return (
    <section>
      <Image className='h-12 w-auto' src={GuitarZALogo} alt='logo' />
      <h1 className='text-8xl'>Guitar Repair ZA</h1>
      <p>{`Unlock Your Guitar's True Sound: Precision Repairs that Won't Break the Bank!`}</p>
    </section>
  );
}
