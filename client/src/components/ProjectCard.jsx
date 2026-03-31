function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="mt-3 leading-7 text-slate-600">{project.description}</p>
      </div>
    </article>
  );
}

export default ProjectCard;
