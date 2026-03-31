import { Link, Navigate, useParams } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import PageHero from '../components/PageHero';
import { blogPosts, companyDetails, services } from '../data/siteData';
import useSeo from '../hooks/useSeo';

function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((entry) => entry.slug === slug);

  useSeo({
    title: post ? `${post.title} | ${companyDetails.legalName}` : `Roofing Blog | ${companyDetails.legalName}`,
    description: post ? post.excerpt : 'Roofing blog articles from SS Roofing Specialist Limited.',
    path: post ? `/blog/${post.slug}` : '/blog',
    image: post?.image,
    keywords: post
      ? `${post.category}, roofing advice Hayes, roofing company Hayes Middlesex, ${post.title.toLowerCase()}`
      : 'roofing blog Hayes, roofing advice Middlesex',
    structuredData: post
      ? {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
          image: [post.image],
          datePublished: post.datePublished,
          dateModified: post.datePublished,
          author: {
            '@type': 'Organization',
            name: post.author
          },
          publisher: {
            '@type': 'Organization',
            name: companyDetails.legalName,
            url: companyDetails.websiteUrl,
            logo: {
              '@type': 'ImageObject',
              url: `${companyDetails.websiteUrl}/ss-roofing-logo-colour.png`
            }
          },
          mainEntityOfPage: `${companyDetails.websiteUrl}/blog/${post.slug}`
        }
      : undefined
  });

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const currentIndex = blogPosts.findIndex((entry) => entry.slug === post.slug);
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const relatedPosts = blogPosts.filter((entry) => entry.slug !== post.slug).slice(0, 3);
  const linkedServices = services.filter((service) => post.relatedServices?.includes(service.title));

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        image={post.image}
      />

      <section className="section-padding">
        <article className="container-shell max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-dark">{post.datePublished}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {post.gallery?.map((image) => (
              <div key={image} className="overflow-hidden rounded-[1.75rem] border border-slate-200 shadow-soft">
                <img src={image} alt={post.title} className="h-64 w-full object-cover" />
              </div>
            ))}
          </div>

          {linkedServices.length ? (
            <div className="mt-8 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-dark">Related Services</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {linkedServices.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="rounded-full bg-brand-light px-4 py-2 text-sm font-semibold text-brand-dark transition hover:bg-brand hover:text-white"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-10 space-y-10">
            {post.content.map((section, index) => (
              <section key={section.heading} className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">{section.heading}</h2>
                  <div className="mt-5 space-y-5">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-lg leading-8 text-slate-600">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 shadow-soft">
                  <img
                    src={post.gallery?.[index % (post.gallery?.length || 1)] || post.image}
                    alt={section.heading}
                    className="h-72 w-full object-cover"
                  />
                </div>
              </section>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] bg-slate-50 p-8">
            <h3 className="text-2xl font-bold text-slate-900">Need roofing advice for a property in Hayes or nearby?</h3>
            <p className="mt-4 leading-8 text-slate-600">
              If you need practical guidance on repairs, replacement, inspections, or maintenance, our team can help
              you assess the most suitable next step for your property.
            </p>
            <Link to="/contact#quote-form" className="primary-btn mt-6">
              Request a Free Quote
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {previousPost ? (
              <Link
                to={`/blog/${previousPost.slug}`}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-0.5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-dark">Previous Article</p>
                <h3 className="mt-3 text-xl font-bold text-slate-900">{previousPost.title}</h3>
              </Link>
            ) : (
              <div className="rounded-[1.75rem] border border-dashed border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Previous Article</p>
                <p className="mt-3 text-lg font-semibold text-slate-500">You are reading the first article in this series.</p>
              </div>
            )}

            {nextPost ? (
              <Link
                to={`/blog/${nextPost.slug}`}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-0.5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-dark">Next Article</p>
                <h3 className="mt-3 text-xl font-bold text-slate-900">{nextPost.title}</h3>
              </Link>
            ) : (
              <div className="rounded-[1.75rem] border border-dashed border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Next Article</p>
                <p className="mt-3 text-lg font-semibold text-slate-500">You are reading the latest article in this series.</p>
              </div>
            )}
          </div>
        </article>
      </section>

      <section className="bg-slate-50 section-padding">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-dark">More Articles</p>
            <h2 className="mt-4 text-4xl font-extrabold text-slate-900">Keep reading related roofing advice</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Showing more useful articles below helps users stay on the site longer and discover additional service-related content.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <BlogCard key={relatedPost.slug} post={relatedPost} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPostPage;
