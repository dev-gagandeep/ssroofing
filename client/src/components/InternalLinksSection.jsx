import { Link } from 'react-router-dom';

function InternalLinksSection({ eyebrow = 'Explore More', title, description, links }) {
  return (
    <section className="bg-slate-50 section-padding">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-dark">{eyebrow}</p>
          <h2 className="mt-4 text-4xl font-extrabold text-slate-900">{title}</h2>
          {description ? <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p> : null}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {links.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-0.5"
            >
              <p className="text-xl font-bold text-slate-900">{item.label}</p>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InternalLinksSection;
