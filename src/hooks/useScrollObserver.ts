import { useEffect, useState } from 'react';

export function useScrollObserver() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [top, setTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollPosition(currentScrollY);

      if (currentScrollY === 0) {
        setTop(true);
      } else {
        setTop(false);
      }

      if (currentScrollY > scrollPosition) {
        setScrollDirection('down');
      } else if (currentScrollY < scrollPosition) {
        setScrollDirection('up');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  return { scrollDirection, scrollPosition, top };
}
