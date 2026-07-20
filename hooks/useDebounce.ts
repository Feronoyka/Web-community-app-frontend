import { useEffect, useState } from 'react';

export const useDebounce = (query: string, delay = 500) => {
  const [debounce, setDebounce] = useState(query);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebounce(query);
    }, delay);

    return () => clearTimeout(id);
  }, [query, delay]);

  return debounce;
};
