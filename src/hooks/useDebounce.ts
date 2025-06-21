import { useState, useEffect } from "react";

export function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState<T>(value);
  useEffect(() => {
    const handler = window.setTimeout(() => {
      setDebounced(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [delay, value]);

  return debounced;
}
