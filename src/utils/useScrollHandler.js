import { useEffect } from 'react';
import { pageScroll } from './gtag'; 

export const useScrollTracker = (ref, slot) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const handleScroll = () => {
      pageScroll(slot);
    };

    element.addEventListener('scroll', handleScroll);

    return () => {
      element.removeEventListener('scroll', handleScroll);
    };
  }, [ref, slot]);
};
