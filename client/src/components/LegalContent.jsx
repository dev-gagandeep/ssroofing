function LegalContent({ sections }) {
  return (
    <div className="space-y-10">
      {sections.map((section) => (
        <section key={section.title} className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="leading-8 text-slate-600">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
}

export default LegalContent;
