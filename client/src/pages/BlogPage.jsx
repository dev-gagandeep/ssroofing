import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import BlogCard from '../components/BlogCard';
import SeoSectionHeader from '../components/SeoSectionHeader';
import { blogPosts, companyDetails } from '../data/siteData';
import useSeo from '../hooks/useSeo';

function BlogPage() {
  useSeo({
    title: 'Roofing Blog Hayes | Roofing Advice, Repairs & Maintenance',
    description:
      'Expert roofing articles from SS Roofing Specialist Limited covering roof repairs, flat roofing, maintenance, and local advice for Hayes, Middlesex, and West London.',
    path: '/blog',
    keywords:
      'roofing blog Hayes, roof repair advice Hayes, flat roof maintenance West London, roofing company Middlesex blog',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: `${companyDetails.legalName} Blog`,
      url: `${companyDetails.websiteUrl}/blog`,
      publisher: {
        '@type': 'Organization',
        name: companyDetails.legalName,
        url: companyDetails.websiteUrl
      }
    }
  });

  return (
    <>
      <PageHero
        eyebrow="Roofing Blog"
        title="Helpful roofing advice for homeowners, landlords, and commercial property teams"
        description="Search-ready articles built around the kinds of roofing questions local customers actually ask before requesting a survey or quote."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80"
      />

      <section className="section-padding">
        <div className="container-shell">
          <SeoSectionHeader
            eyebrow="Latest Articles"
            title="Content designed to support both local rankings and real customer decisions"
            description="These articles strengthen the site’s topical authority around residential roofing, commercial roofing, maintenance, and local roofing advice in Hayes and the surrounding area."
          />
          <div className="mt-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <img src={blogPosts[0].image} alt={blogPosts[0].title} className="h-full min-h-[300px] w-full object-cover" />
              <div className="p-8 lg:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-dark">Featured Article</p>
                <h2 className="mt-4 text-4xl font-extrabold text-slate-900">{blogPosts[0].title}</h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">{blogPosts[0].excerpt}</p>
                <div className="mt-8">
                  <Link to={`/blog/${blogPosts[0].slug}`} className="primary-btn">
                    Read Featured Article
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPage;
