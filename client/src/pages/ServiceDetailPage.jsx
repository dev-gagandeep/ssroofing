import AuthorBox from '../components/AuthorBox';
import { Link, Navigate, useParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import BlogCard from '../components/BlogCard';
import { blogPosts, companyDetails, contentAuthors, services } from '../data/siteData';
import useSeo from '../hooks/useSeo';

function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((entry) => entry.slug === slug);

  useSeo({
    title: service ? `${service.title} in Hayes | ${companyDetails.legalName}` : `Services | ${companyDetails.legalName}`,
    description: service ? service.description : 'Roofing services from SS Roofing Specialist Limited.',
    path: service ? `/services/${service.slug}` : '/services',
    image: service?.image,
    keywords: service
      ? `${service.title} Hayes, ${service.title} Middlesex, ${service.category}, roofing contractor Hayes`
      : 'roofing services Hayes',
    structuredData: service
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.title,
            description: service.description,
            provider: {
              '@type': 'RoofingContractor',
              name: companyDetails.legalName,
              url: companyDetails.websiteUrl
            },
            areaServed: 'Hayes, Middlesex, West London',
            serviceType: service.category
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${companyDetails.websiteUrl}/` },
              { '@type': 'ListItem', position: 2, name: 'Services', item: `${companyDetails.websiteUrl}/services` },
              { '@type': 'ListItem', position: 3, name: service.title, item: `${companyDetails.websiteUrl}/services/${service.slug}` }
            ]
          }
        ]
      : undefined
  });

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedServices = services.filter((entry) => entry.category === service.category && entry.slug !== service.slug).slice(0, 3);
  const relatedPosts = blogPosts.filter((post) => post.relatedServices?.includes(service.title)).slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={service.category}
        title={service.title}
        description={service.description}
        image={service.image}
      />

      <section className="section-padding">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div className="space-y-8">
            <div className="card-surface">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-dark">Service Overview</p>
              <h2 className="mt-4 text-3xl font-extrabold text-slate-900">Built around reliable delivery, practical detailing, and a professional finish.</h2>
              <p className="mt-5 leading-8 text-slate-600">
                {service.title} projects often require more than just installation or repair. They need clear communication, strong material choices, tidy workmanship, and an approach that fits the property type, access requirements, and long-term maintenance goals.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                SS Roofing Specialist Limited positions this service for clients in Hayes, Middlesex, and surrounding areas who want a dependable contractor with a premium but practical presentation.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="card-surface">
                  <p className="text-lg font-semibold text-slate-900">{benefit}</p>
                  <p className="mt-3 leading-7 text-slate-600">
                    This service page is structured to support clearer enquiries and stronger conversion by highlighting the practical value clients are usually looking for.
                  </p>
                </div>
              ))}
            </div>

            <AuthorBox author={contentAuthors[0]} />
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
              <img src={service.image} alt={service.title} className="h-72 w-full object-cover" />
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-dark">Suitable For</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {['Residential', 'Commercial', 'Industrial'].map((item) => (
                    <span key={item} className="rounded-full bg-brand-light px-4 py-2 text-sm font-semibold text-brand-dark">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-light">Need This Service?</p>
              <h3 className="mt-4 text-3xl font-bold text-white">Request a quote for {service.title.toLowerCase()}.</h3>
              <p className="mt-4 leading-7 text-slate-300">
                Tell us a little about the property, the issue, and your timescales, and we will guide you on the most suitable next step.
              </p>
              <Link to="/contact#quote-form" className="primary-btn mt-6">
                Request a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {relatedServices.length ? (
        <section className="bg-slate-50 section-padding">
          <div className="container-shell">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-dark">Related Services</p>
            <h2 className="mt-4 text-4xl font-extrabold text-slate-900">Explore more services in this category</h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {relatedServices.map((relatedService) => (
                <Link
                  key={relatedService.slug}
                  to={`/services/${relatedService.slug}`}
                  className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft transition hover:-translate-y-0.5"
                >
                  <img src={relatedService.image} alt={relatedService.title} className="h-52 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-slate-900">{relatedService.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{relatedService.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {relatedPosts.length ? (
        <section className="section-padding">
          <div className="container-shell">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-dark">Helpful Reading</p>
            <h2 className="mt-4 text-4xl font-extrabold text-slate-900">Related insights from our roofing blog</h2>
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {relatedPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

export default ServiceDetailPage;
