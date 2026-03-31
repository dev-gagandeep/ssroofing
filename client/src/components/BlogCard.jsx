import { Link } from 'react-router-dom';

function BlogCard({ post }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
      <img src={post.image} alt={post.title} className="h-60 w-full object-cover" />
      <div className="p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-dark">{post.category}</p>
        <h2 className="mt-3 text-2xl font-bold text-slate-900">
          <Link to={`/blog/${post.slug}`} className="transition hover:text-brand-dark">
            {post.title}
          </Link>
        </h2>
        <p className="mt-4 leading-7 text-slate-600">{post.excerpt}</p>
        <Link to={`/blog/${post.slug}`} className="primary-btn mt-6">
          Read Article
        </Link>
      </div>
    </article>
  );
}

export default BlogCard;
