import FAQSection from '../components/FAQSection';
import InternalLinksSection from '../components/InternalLinksSection';
import PageHero from '../components/PageHero';
import ProjectCard from '../components/ProjectCard';
import SeoSectionHeader from '../components/SeoSectionHeader';
import { companyDetails, projects } from '../data/siteData';
import useSeo from '../hooks/useSeo';

function ProjectsPage() {
  useSeo({
    title: 'Roofing Projects | SS Roofing Specialist Limited Hayes',
    description:
      'View representative roofing projects from SS Roofing Specialist Limited covering residential, commercial, industrial, and inspection work.',
    path: '/projects',
    keywords: 'roofing projects Hayes, commercial roofing projects Middlesex, roof repair case studies West London',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: `${companyDetails.legalName} Projects`,
        url: `${companyDetails.websiteUrl}/projects`
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${companyDetails.websiteUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Projects', item: `${companyDetails.websiteUrl}/projects` }
        ]
      }
    ]
  });

  const projectFaqs = [
    {
      question: 'Why does a projects page help SEO and trust?',
      answer:
        'A projects page supports internal linking, visual proof, and service relevance. It helps users understand the kind of work the business is positioned to deliver.'
    },
    {
      question: 'Should project pages use real examples in future?',
      answer:
        'Yes. Real project case studies with location, scope, images, and outcomes will be significantly better for both conversions and trust than generic showcase content alone.'
    }
  ];

  return (
    <>
      <PageHero
        eyebrow="Recent Work"
        title="Selected projects that reflect the breadth of our roofing work"
        description="This projects page uses a clean grid layout to help prospective clients quickly understand the type and quality of work the company delivers."
        image="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80"
      />

      <section className="section-padding">
        <div className="container-shell">
          <SeoSectionHeader
            eyebrow="Projects"
            title="A professional portfolio presentation for lead generation"
            description="Project cards combine strong imagery, concise descriptions, and a premium layout that supports trust and credibility."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <FAQSection title="Projects FAQs" items={projectFaqs} />

      <InternalLinksSection
        title="Related pages worth exploring"
        links={[
          { to: '/services', label: 'Service Pages', text: 'See the roofing services connected to the types of projects shown here.' },
          { to: '/blog', label: 'Blog Articles', text: 'Read more about repairs, inspections, and maintenance topics.' },
          { to: '/about', label: 'About The Company', text: 'Understand the trust and positioning behind the business.' },
          { to: '/contact#quote-form', label: 'Request A Quote', text: 'Use the quote form if you want to discuss a similar project.' }
        ]}
      />
    </>
  );
}

export default ProjectsPage;
