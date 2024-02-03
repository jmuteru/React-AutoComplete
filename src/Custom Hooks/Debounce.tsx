import { useEffect, useState } from 'react';

const useDebounce = (value: string, delay: number): string => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const debounceTimer = setTimeout(() => { //update value after delay
      setDebouncedValue(value);
    }, delay);

    return () => {   //clear when value changes
      clearTimeout(debounceTimer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
