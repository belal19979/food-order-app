import { useState, useEffect } from "react";

export function useLocalStorageState<T>(key: string, defaultValue: T) {
  const [state, setState] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch {
      console.error(`failed to set ${key} in local storage`);
    }
  }, [key, state]);
  return [state, setState] as const;
}
