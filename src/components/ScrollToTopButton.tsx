'use client';

import { clsx } from 'clsx';
import { HiChevronUp } from 'react-icons/hi';
import { scrollToTop } from '@/utils/scroll-utils';
import { useScrollObserver } from '@/hooks/useScrollObserver';

export function ScrollToTopButton() {
  const { scrollPosition } = useScrollObserver();
  const hide = scrollPosition < 800;

  return (
    <aside
      className={clsx(
        hide
          ? 'opacity-0 -bottom-[5%]'
          : 'opacity-100 bottom-[3%] sm:bottom-[3.5%] md:bottom-[4%] lg:bottom-[5%]',
        'fixed z-50 right-[5%] transition-all duration-1000',
      )}>
      <div
        onClick={() => scrollToTop()}
        className='bg-white hover:bg-yellow-300 active:bg-yellow-400 transition-colors rounded-xl cursor-pointer'>
        <HiChevronUp className='h-10 md:h-11 lg:h-12 w-auto' />
      </div>
    </aside>
  );
}
