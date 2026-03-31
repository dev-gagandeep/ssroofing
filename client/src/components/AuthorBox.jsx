function AuthorBox({ author }) {
  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-dark">Content Review</p>
      <h3 className="mt-3 text-2xl font-bold text-slate-900">{author.name}</h3>
      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{author.role}</p>
      <p className="mt-4 leading-7 text-slate-600">{author.bio}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {author.expertise.map((item) => (
          <span key={item} className="rounded-full bg-brand-light px-4 py-2 text-sm font-semibold text-brand-dark">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default AuthorBox;
