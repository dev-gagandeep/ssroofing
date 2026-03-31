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
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: `${companyDetails.legalName} Projects`,
      url: `${companyDetails.websiteUrl}/projects`
    }
  });

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
    </>
  );
}

export default ProjectsPage;
