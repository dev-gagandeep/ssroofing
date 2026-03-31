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
