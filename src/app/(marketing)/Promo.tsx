import { BsFire } from 'react-icons/bs';
import { HiMenu } from 'react-icons/hi';

export function Promo() {
  return (
    <div className='relative'>
      <section className='absolute z-40 w-full bg-black/80 py-2 px-2'>
        <div className='flex items-center justify-between gap-2 sm:gap-4 container mx-auto'>
          <div className='group rounded p-1.5 border-black/60 hover:bg-black hover:border-black active:bg-transparent active:border-transparent cursor-pointer transition-colors'>
            <HiMenu className='h-6 sm:h-7 w-auto text-white group-hover:text-yellow-300 group-active:text-white' />
          </div>
          <div className='relative flex gap-4 justify-center items-center'>
            <BsFire className='h-5 sm:h-6 w-auto text-yellow-300/90 hidden lg:block' />
            <p className='text-white/50 text-sm md:text-base font-medium text-center'>
              <strong className='text-white'>Exclusive Deal:</strong> 25% Off
              Full Guitar Setups! Limited Availability!
            </p>
            <BsFire className='h-6 w-auto text-yellow-300/90 hidden lg:block' />
          </div>
          <div>
            <button className='text-yellow-300 text-sm sm:text-base font-semibold py-1.5 sm:py-2 px-1.5 md:px-6 bg-transparent hover:bg-yellow-300/90 hover:text-black active:bg-black active:text-gray-200 rounded transition-colors'>
              Grab the Deal
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}