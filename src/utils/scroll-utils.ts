import { RefObject } from 'react';

interface ScrollToPositionOptions {
  x?: number;
  y?: number;
  offsetX?: number;
  offsetY?: number;
}

export function scrollToPosition({
  x,
  y,
  offsetY = 0,
  offsetX = 0,
}: ScrollToPositionOptions = {}) {
  window.scrollTo({
    top: y ? y - offsetY : y,
    left: x ? x - offsetX : x,
    behavior: 'smooth',
  });
}

export function scrollToRef(ref: RefObject<HTMLElement>, { offsetY = 0 } = {}) {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    const react = ref.current.getBoundingClientRect();
    window.scrollTo({
      top: react.top + window.scrollY - offsetY,
      left: 0,
      behavior: 'smooth',
    });
  }
}

export function scrollToTop({ offsetY = 0 } = {}) {
  window.scrollTo({ top: 0 - offsetY, left: 0, behavior: 'smooth' });
}
