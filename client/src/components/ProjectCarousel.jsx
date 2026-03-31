import { useState } from 'react';
import { Link } from 'react-router-dom';

function ProjectCarousel({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
      <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative min-h-[320px]">
          <img src={activeItem.image} alt={activeItem.title} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-light">Featured Project</p>
            <h3 className="mt-3 text-3xl font-bold text-white">{activeItem.title}</h3>
            <p className="mt-4 max-w-2xl leading-7 text-slate-100">{activeItem.description}</p>
          </div>
        </div>

        <div className="p-6 lg:p-8">
          <div className="space-y-3">
            {items.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`w-full rounded-[1.4rem] border px-5 py-4 text-left transition ${
                  activeIndex === index
                    ? 'border-brand bg-brand-light text-slate-900'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-brand/40 hover:bg-slate-50'
                }`}
              >
                <p className="text-base font-semibold">{item.title}</p>
              </button>
            ))}
          </div>

          <Link to="/projects" className="primary-btn mt-6">
            View More Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCarousel;
