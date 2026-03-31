function TrustPanel({ items, title = 'Why clients trust SS Roofing' }) {
  return (
    <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-soft">
      <h3 className="text-3xl font-bold text-white">{title}</h3>
      <div className="mt-6 grid gap-4">
        {items.map((item) => (
          <div key={item.title} className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5">
            <p className="text-lg font-semibold text-white">{item.title}</p>
            <p className="mt-2 leading-7 text-slate-300">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrustPanel;
