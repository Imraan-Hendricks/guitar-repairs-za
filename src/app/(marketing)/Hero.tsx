'use client';

import GuitarAndAmpImage from '../../../public/guitar-player.jpg';
import Image from 'next/image';
import { scrollToRef } from '@/utils/scroll-utils';
import { useNavbarContext } from './NavbarContext';

export function Hero() {
  const { observer } = useNavbarContext();

  return (
    <section className='bg-black relative overflow-x-hidden'>
      <div className='grid justify-items-center xl:justify-items-start xl:grid-cols-2 content-center items-center xl:container xl:mx-auto'>
        <div className='grid gap-6 sm:gap-8 px-4 h-[50vh] content-center'>
          <div className='grid gap-2'>
            <p className='text-sm sm:text-base text-white text-yellow-300/60 text-center xl:text-start'>
              - by Dylan Marshall
            </p>
            <h1 className='text-4xl sm:text-5xl xl:text-6xl font-bold text-white text-center xl:text-start'>
              Guitar <span className='text-yellow-300/90'>Repair</span> ZA
            </h1>
          </div>
          <p className='text-lg sm:text-xl lg:text-lg xl:text-xl font-normal tracking-wide text-white/50 max-w-lg text-center xl:text-start'>
            Unlock Your {`Guitar's`} True Sound: Precision Repairs that{' '}
            {`Won't`} Break the Bank!
          </p>
          <div className='flex gap-2 mx-auto xl:mx-0'>
            <button
              onClick={() => scrollToRef(observer.packages.ref)}
              className='sm:text-lg text-black font-semibold py-1.5 sm:py-2 px-6 sm:px-8 border-2 border-yellow-300 bg-yellow-300 hover:bg-yellow-400 hover:border-yellow-400 active:bg-yellow-300 active:border-yellow-300 rounded transition-colors'>
              Explore Offers
            </button>
            <button
              onClick={() => scrollToRef(observer.contact.ref)}
              className='sm:text-lg text-gray-200 font-semibold py-1.5 sm:py-2 px-6 sm:px-8 border-2 border-yellow-300 hover:border-yellow-400 hover:bg-yellow-400 active:border-yellow-300 active:bg-yellow-300 hover:text-black rounded transition-colors'>
              Get in touch
            </button>
          </div>
        </div>
        <div className='relative xl:w-[50vw] overflow-hidden border-t xl:border-t-0 border-yellow-300'>
          <Image
            className='absolute inset-0 object-cover h-[50vh] xl:h-screen'
            src={GuitarAndAmpImage}
            alt='guitar-and-amp'
          />
          <div className='relative bg-gradient-to-b from-black/0 via-black/0 to-black'>
            <div className='relative bg-gradient-to-r from-black/0 via-black/0 to-black'>
              <Image
                className='object-cover h-[50vh] xl:h-screen invisible'
                src={GuitarAndAmpImage}
                alt='guitar-and-amp'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
