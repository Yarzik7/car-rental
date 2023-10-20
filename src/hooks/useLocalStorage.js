import { useState, useEffect } from "react";

const useLocalStorage = (KEY, defaultValue = []) => {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(KEY)) ?? defaultValue
  );

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(state));
  }, [KEY, state]);

  return [state, setState];
};

export { useLocalStorage };
