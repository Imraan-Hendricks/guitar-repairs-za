'use client';

import { clsx } from 'clsx';
import { handleMediaQuery } from '@/utils/media-query-utils';
import { PropsWithChildren, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export function InViewAnimation({ children }: PropsWithChildren) {
  const [threshold, setThreshold] = useState(0.2);

  useEffect(() => {
    handleMediaQuery(
      'sm',
      matches => {
        if (matches) return setThreshold(0.2);
        setThreshold(0.1);
      },
      true,
    );
  }, []);

  const { ref, inView, entry } = useInView({
    threshold,
    triggerOnce: false,
  });

  const top = entry?.boundingClientRect.top || 1;

  return (
    <div ref={ref} className='relative overflow-y-hidden'>
      <div
        className={clsx(
          inView
            ? 'translate-y-0 opacity-100'
            : top >= 0
            ? 'translate-y-full opacity-0'
            : '-translate-y-full opacity-0',
          ' transition-all duration-1000',
        )}>
        {children}
      </div>
    </div>
  );
}
