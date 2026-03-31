import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function useReveal(options = {}) {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        elementRef.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: options.duration || 0.8,
          delay: options.delay || 0,
          ease: 'power3.out'
        }
      );
    }, elementRef);

    return () => ctx.revert();
  }, [options.delay, options.duration]);

  return elementRef;
}

export default useReveal;
