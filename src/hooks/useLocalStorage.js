import { useState, useEffect } from "react";

const useLocalStorage = (KEY, defaultValue = []) => {
  const [state, setState] = useState(() =>
    JSON.parse(window.localStorage.getItem(KEY) ?? defaultValue)
  );

  useEffect(() => {
    window.localStorage.setItem(KEY, JSON.stringify(state));
  }, [KEY, state]);

  return [state, setState];
};

export { useLocalStorage };
