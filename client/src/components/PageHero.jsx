function PageHero({ eyebrow, title, description, image }) {
  return (
    <section className="relative isolate overflow-hidden bg-slate-100">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute inset-0 bg-white/55" />
      </div>

      <div className="container-shell relative section-padding">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="rounded-[2rem] border border-white/80 bg-white/85 p-8 shadow-soft backdrop-blur sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-dark">{eyebrow}</p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-soft backdrop-blur">
              <img src={image} alt={title} className="h-64 w-full object-cover" />
            </div>
            <div className="space-y-4">
              <div className="rounded-[1.5rem] border border-white/70 bg-white/85 p-6 shadow-soft backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-dark">UK Roofing Focus</p>
                <p className="mt-3 leading-7 text-slate-600">Professional roofing support presented with a cleaner, more image-led layout and a brighter commercial feel.</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/70 bg-white/85 p-6 shadow-soft backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-dark">Visual Detail</p>
                <p className="mt-3 leading-7 text-slate-600">This header style now feels much closer to the home page instead of dropping into a flat dark block.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageHero;
