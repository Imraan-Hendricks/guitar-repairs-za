'use client';

import { clsx } from 'clsx';
import { handleMediaQuery } from '@/utils/media-query-utils';
import { scrollToRef } from '@/utils/scroll-utils';
import { useClickAwayListener } from '@/hooks/useClickAwayListener';
import { useEffect, useRef } from 'react';
import { useNavbarContext } from './NavbarContext';

export function MobileMenu() {
  const ref = useRef<HTMLDivElement>(null);
  useClickAwayListener(ref, () => setIsOpen(false));

  const { observer, isActive, isOpen, setIsOpen } = useNavbarContext();
  function closeMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    handleMediaQuery('lg', matches => {
      if (matches) setIsOpen(false);
    });
  }, [setIsOpen]);

  return (
    <>
      <div
        className={clsx(
          isOpen
            ? 'opacity-1 h-screen'
            : 'opacity-0 overflow-hidden -translate-x-full',
          'fixed inset-0 bg-black/70 z-40 transition-all duration-[1000ms]',
        )}></div>
      <div
        ref={ref}
        className={clsx(
          isOpen ? '' : '-translate-y-[150%]',
          'fixed z-40 top-0 left-0 w-full bg-white mt-[62px] py-12 px-4 transition-all duration-[1000ms]',
        )}>
        <div className='container mx-auto grid gap-6'>
          <ul className='grid gap-4 mt-4'>
            {[
              {
                name: 'Home',
                active: isActive === 'home',
                onClick: () => {
                  scrollToRef(observer.home.ref);
                  closeMenu();
                },
              },
              {
                name: 'Services',
                active: isActive === 'services',
                onClick: () => {
                  scrollToRef(observer.services.ref);
                  closeMenu();
                },
              },
              {
                name: 'Packages',
                active: isActive === 'packages',
                onClick: () => {
                  scrollToRef(observer.packages.ref);
                  closeMenu();
                },
              },
              {
                name: 'Price',
                active: isActive === 'pricing',
                onClick: () => {
                  scrollToRef(observer.pricing.ref);
                  closeMenu();
                },
              },
              {
                name: 'Contact',
                active: isActive === 'contact',
                onClick: () => {
                  scrollToRef(observer.contact.ref);
                  closeMenu();
                },
              },
            ].map(({ active, name, onClick }) => (
              <li
                key={name}
                onClick={onClick}
                className={clsx(
                  'group py-2 px-4 rounded-md transition-colors sm:text-lg font-medium hover:text-black active:text-black hover:bg-yellow-300/70 active:bg-yellow-300 cursor-pointer',
                  active ? 'text-black bg-black/5' : 'text-black/70 ',
                )}>
                {name}
              </li>
            ))}
          </ul>
          <div className='flex sm:hidden gap-2'>
            <button
              onClick={() => {
                scrollToRef(observer.exclusiveDeal.ref, { offsetY: 96 });
                closeMenu();
              }}
              className='sm:text-lg text-white hover:text-black font-semibold py-1.5 px-4 border-2 border-black bg-black hover:bg-yellow-400 hover:border-yellow-400 active:bg-yellow-300 active:border-yellow-300 rounded transition-colors'>
              Exclusive Deal!
            </button>
            <button
              onClick={() => closeMenu()}
              className='sm:text-lg text-black font-semibold py-1.5 px-4 border-2 border-yellow-300 bg-yellow-300 hover:bg-yellow-400 hover:border-yellow-400 active:bg-yellow-300 active:border-yellow-300 rounded transition-colors'>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
