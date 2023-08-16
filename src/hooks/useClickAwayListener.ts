import { RefObject, useCallback, useEffect } from 'react';

export function useClickAwayListener(
  ref: RefObject<HTMLElement>,
  onClickAway: () => void,
) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onClickAwayCallback = useCallback(onClickAway, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        event.target instanceof HTMLElement &&
        !ref.current.contains(event.target)
      ) {
        onClickAwayCallback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClickAwayCallback]);
}
