import Image from 'next/image';
import LogoSymbol from '../../../public/logo-symbol.png';
import GuitarAndAmpImage from '../../../public/guitar-and-amp.jpg';

export function Hero() {
  return (
    <section className='bg-black'>
      <div className='grid lg:grid-cols-2'>
        <div className='flex justify-center items-center py-24 lg:py-0 px-4'>
          <div className='grid gap-8'>
            <Image
              className='h-40 sm:h-48 opacity-25 w-auto mx-auto lg:mx-0'
              src={LogoSymbol}
              alt='logo-symbol'
            />
            <div className='grid gap-2'>
              <p className='text-sm sm:text-base text-white text-yellow-300/60 text-center lg:text-start'>
                - by Joshua Houston
              </p>
              <h1 className='text-5xl xl:text-6xl font-bold text-white text-center lg:text-start'>
                Guitar <span className='text-yellow-300/90'>Repair</span> ZA
              </h1>
            </div>
            <hr className='border-white/10 max-w-2xl' />
            <p className='text-lg sm:text-xl lg:text-lg xl:text-xl font-normal tracking-wide text-white/50 max-w-2xl text-center lg:text-start'>{`Unlock Your Guitar's True Sound: Precision Repairs that Won't Break the Bank!`}</p>
            <div className='flex gap-2 mx-auto lg:mx-0'>
              <button className='sm:text-lg text-black font-semibold py-1.5 sm:py-2 px-6 sm:px-8 border-2 border-yellow-300 bg-yellow-300 hover:bg-yellow-400 hover:border-yellow-400 active:bg-yellow-300 active:border-yellow-300 rounded transition-colors'>
                Explore Offers
              </button>
              <button className='sm:text-lg text-gray-200 font-semibold py-1.5 sm:py-2 px-6 sm:px-8 border-2 border-yellow-300 hover:border-yellow-400 hover:bg-yellow-400 active:border-yellow-300 active:bg-yellow-300 hover:text-black rounded transition-colors'>
                Get in touch
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className='relative'>
            <Image
              className='absolute inset-0 object-cover h-[60vh] sm:h-[75vw] md:[h-85vh] lg:h-full w-full'
              src={GuitarAndAmpImage}
              alt='guitar-and-amp'
            />
            <div className='relative bg-gradient-to-t from-black/0 via-black/0 to-black'>
              <div className='relative bg-gradient-to-b from-black/0 via-black/0 to-black'>
                <div className='relative h-[60vh] sm:h-[75vw] md:[h-85vh] lg:h-screen bg-gradient-to-l from-black/0 via-black/20 to-black'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
