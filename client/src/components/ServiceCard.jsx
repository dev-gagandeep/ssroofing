import { Link } from 'react-router-dom';

function ServiceCard({ title, description, image, benefits, slug }) {
  return (
    <article id={slug} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft scroll-mt-28">
      <img
        src={image}
        alt={title}
        className="h-56 w-full object-cover"
        onError={(event) => {
          event.currentTarget.src =
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
        }}
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-3 leading-7 text-slate-600">{description}</p>
        <ul className="mt-5 space-y-2 text-sm text-slate-500">
          {benefits.map((benefit) => (
            <li key={benefit}>• {benefit}</li>
          ))}
        </ul>
        <Link to="/contact#quote-form" className="primary-btn mt-6">
          Request Service Quote
        </Link>
      </div>
    </article>
  );
}

export default ServiceCard;
