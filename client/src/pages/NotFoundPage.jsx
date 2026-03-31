import { Link } from 'react-router-dom';
import useSeo from '../hooks/useSeo';

function NotFoundPage() {
  useSeo({
    title: 'Page Not Found | SS Roofing Specialist Limited',
    description: 'The page you requested could not be found.',
    path: '/404'
  });

  return (
    <section className="section-padding">
      <div className="container-shell flex min-h-[60vh] flex-col items-center justify-center text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-dark">404</p>
        <h1 className="mt-4 text-5xl font-extrabold text-slate-900">Page not found</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          The page you are looking for may have moved or no longer exist. You can return to the homepage or contact us
          if you need help.
        </p>
        <div className="mt-8">
          <Link to="/" className="primary-btn">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
