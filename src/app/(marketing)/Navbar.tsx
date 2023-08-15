'use client';

import { clsx } from 'clsx';
import { HiMenu } from 'react-icons/hi';
import { scrollToRef, scrollToTop } from '@/utils/scroll-utils';
import { TbGuitarPickFilled } from 'react-icons/tb';
import { useNavbarContext } from './NavbarContext';

export function Navbar() {
  const { observer, isActive } = useNavbarContext();

  return (
    <div className='h-[62px]'>
      <div className='fixed top-0 left-0 w-full z-50 bg-white px-4 py-1.5 border-b-2 border-yellow-300 h-[62px]'>
        <div className='w-full flex items-center justify-between container mx-auto'>
          <div className='flex justify-between'>
            <div className='flex gap-4 items-center relative'>
              <div
                className='group relative flex gap-0.5 items-center cursor-pointer'
                onClick={() => scrollToTop()}>
                <TbGuitarPickFilled className='h-12 w-auto text-black group-hover:text-yellow-300 transition-colors' />
                <span className='text-xs font-semibold text-yellow-300 group-hover:text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-colors'>
                  GRZ
                </span>
              </div>
              <nav className='hidden lg:flex'>
                <ul className='flex gap-4'>
                  {[
                    {
                      name: 'Home',
                      active: isActive === 'home',
                      onClick: () => scrollToRef(observer.home.ref),
                    },
                    {
                      name: 'Services',
                      active: isActive === 'services',
                      onClick: () => scrollToRef(observer.services.ref),
                    },
                    {
                      name: 'Packages',
                      active: isActive === 'packages',
                      onClick: () => scrollToRef(observer.packages.ref),
                    },
                    {
                      name: 'Price',
                      active: isActive === 'pricing',
                      onClick: () => scrollToRef(observer.pricing.ref),
                    },
                    {
                      name: 'Contact',
                      active: isActive === 'contact',
                      onClick: () => scrollToRef(observer.contact.ref),
                    },
                  ].map(({ active, name, onClick }) => (
                    <li
                      key={name}
                      onClick={onClick}
                      className={clsx(
                        'group py-1.5 px-4 rounded-md transition-colors sm:text-lg font-medium hover:text-black active:text-black hover:bg-yellow-300/70 active:bg-yellow-300 cursor-pointer',
                        active ? 'text-black bg-black/5' : 'text-black/70 ',
                      )}>
                      {name}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <div className='hidden sm:flex gap-2'>
            <button
              onClick={() =>
                scrollToRef(observer.exclusiveDeal.ref, { offsetY: 96 })
              }
              className='sm:text-lg text-white hover:text-black font-semibold py-1.5 px-4 border-2 border-black bg-black hover:bg-yellow-400 hover:border-yellow-400 active:bg-yellow-300 active:border-yellow-300 rounded transition-colors'>
              Exclusive Deal!
            </button>
            <button className='sm:text-lg text-black font-semibold py-1.5 px-4 border-2 border-yellow-300 bg-yellow-300 hover:bg-yellow-400 hover:border-yellow-400 active:bg-yellow-300 active:border-yellow-300 rounded transition-colors'>
              Sign In
            </button>
          </div>
          <div className='lg:hidden group rounded p-1.5 hover:bg-yellow-300 hover:border-yellow-300 active:bg-transparent active:border-transparent cursor-pointer transition-colors'>
            <HiMenu className='h-6 sm:h-7 w-auto text-yellow-300 group-hover:text-black group-active:text-yellow-300' />
          </div>
        </div>
      </div>
    </div>
  );
}
