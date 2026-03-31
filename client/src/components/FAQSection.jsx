function FAQSection({ eyebrow = 'FAQs', title, description, items }) {
  return (
    <section className="section-padding">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-dark">{eyebrow}</p>
          <h2 className="mt-4 text-4xl font-extrabold text-slate-900">{title}</h2>
          {description ? <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p> : null}
        </div>
        <div className="mt-10 grid gap-6">
          {items.map((item) => (
            <details key={item.question} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft">
              <summary className="cursor-pointer list-none pr-8 text-xl font-bold text-slate-900">
                {item.question}
              </summary>
              <p className="mt-4 leading-8 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
