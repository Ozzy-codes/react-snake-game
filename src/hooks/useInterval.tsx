// taking from website: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
import { useEffect, useRef } from 'react';

export function useInterval(callback: () => void, delay: number, isOutOfBounds: boolean) {
  const savedCallback = useRef<() => void>();
  console.log("useInterval hook mounted")

  // Remember the latest callback.
  useEffect(() => {
    console.log("callback changed in useInterval")
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      (savedCallback.current as () => void)();
    }
    if (delay !== null) {
      console.log("running setInterval in useInteval")
      const id = setInterval(tick, delay);
      if (isOutOfBounds) clearInterval(id)
      return () => clearInterval(id);
    }
  }, [delay, isOutOfBounds]);
}
