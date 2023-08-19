type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
type MediaQueryCallback = (matches: boolean) => void;

export function handleMediaQuery(
  breakpoint: Breakpoint,
  callback: MediaQueryCallback,
  runOnMount?: boolean,
) {
  const width =
    breakpoint === 'xs'
      ? 0
      : breakpoint === 'sm'
      ? 640
      : breakpoint === 'md'
      ? 768
      : breakpoint === 'lg'
      ? 1024
      : breakpoint === 'xl'
      ? 1200
      : breakpoint === '2xl'
      ? 1400
      : 1921;

  const mediaQuery = window.matchMedia(`(min-width: ${width}px)`);

  function handleMediaChange(event: MediaQueryListEvent) {
    callback(event.matches);
  }

  if (runOnMount) callback(mediaQuery.matches);

  mediaQuery.addEventListener('change', handleMediaChange);

  return mediaQuery;
}
