function SeoSectionHeader({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={alignment}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-dark">{eyebrow}</p>
      ) : null}
      <h2 className="section-heading">{title}</h2>
      {description ? <p className="section-copy">{description}</p> : null}
    </div>
  );
}

export default SeoSectionHeader;
