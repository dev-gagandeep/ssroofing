import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

function TestimonialSlider({ items }) {
  const [index, setIndex] = useState(0);
  const quoteRef = useRef(null);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % items.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [items.length]);

  useEffect(() => {
    if (!quoteRef.current) {
      return;
    }

    gsap.fromTo(quoteRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' });
  }, [index]);

  const currentItem = items[index];

  return (
    <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-soft lg:p-12">
      <div ref={quoteRef}>
        <p className="text-2xl font-semibold leading-10 text-white">“{currentItem.quote}”</p>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-brand-light">{currentItem.author}</p>
      </div>

      <div className="mt-8 flex gap-3">
        {items.map((item, itemIndex) => (
          <button
            key={item.author}
            type="button"
            aria-label={`Show testimonial ${itemIndex + 1}`}
            onClick={() => setIndex(itemIndex)}
            className={`h-2.5 rounded-full transition ${
              itemIndex === index ? 'w-10 bg-brand' : 'w-2.5 bg-slate-600 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonialSlider;
