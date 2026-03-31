function PageHero({ eyebrow, title, description, image }) {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute inset-0 bg-slate-950/80" />
      </div>

      <div className="container-shell relative section-padding">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-light">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">{description}</p>
      </div>
    </section>
  );
}

export default PageHero;
