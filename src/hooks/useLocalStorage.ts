import { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "codepen-clone-";

export default function useLocalStorage(key: string, initialValue: unknown) {
  const storageKey = LOCAL_STORAGE_KEY + key;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(storageKey);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [storageKey, value]);

  return [value, setValue];
}
