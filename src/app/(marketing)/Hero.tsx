import GuitarAndAmpImage from '../../../public/guitar-and-amp.jpg';
import Image from 'next/image';
import LogoSymbol from '../../../public/logo-symbol.png';

export function Hero() {
  return (
    <section>
      <div className='relative'>
        <Image
          className='absolute inset-0 object-cover w-full h-full'
          src={GuitarAndAmpImage}
          alt='guitar-and-amp'
        />
        <div className='relative h-screen bg-gradient-to-bl from-black/75 via-black/80 to-black md:bg-gradient-to-bl md:from-black/10 md:via-black/80 md:to-black'>
          <div className='grid gap-8 content-center h-full container mx-auto px-5'>
            <Image
              className='h-40 sm:h-48 opacity-25 w-auto mx-auto md:mx-0'
              src={LogoSymbol}
              alt='logo-symbol'
            />
            <div className='grid gap-2'>
              <p className='text-sm sm:text-base text-white text-yellow-300/60 text-center md:text-start'>
                - by Joshua Houston
              </p>
              <h1 className='text-5xl sm:text-6xl font-bold text-white text-center md:text-start'>
                Guitar <span className='text-yellow-300/90'>Repair</span> ZA
              </h1>
            </div>
            <hr className='border-white/10 max-w-2xl' />
            <p className='text-lg sm:text-xl font-normal tracking-wide text-white/50 max-w-2xl text-center md:text-start'>{`Unlock Your Guitar's True Sound: Precision Repairs that Won't Break the Bank!`}</p>
            <div className='flex gap-2 mx-auto md:mx-0'>
              <button className='sm:text-lg text-black font-semibold py-1.5 sm:py-2 px-6 sm:px-8 border-2 border-yellow-300 bg-yellow-300 hover:bg-yellow-400 hover:border-yellow-400 active:bg-yellow-300 active:border-yellow-300 rounded transition-colors'>
                Explore Offers
              </button>
              <button className='sm:text-lg text-gray-200 font-semibold py-1.5 sm:py-2 px-6 sm:px-8 border-2 border-yellow-300 hover:border-yellow-400 hover:bg-yellow-400 active:border-yellow-300 active:bg-yellow-300 hover:text-black rounded transition-colors'>
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
