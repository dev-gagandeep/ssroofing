import PageHero from '../components/PageHero';
import SeoSectionHeader from '../components/SeoSectionHeader';
import ServiceCard from '../components/ServiceCard';
import { companyDetails, services } from '../data/siteData';
import useSeo from '../hooks/useSeo';

function ServicesPage() {
  useSeo({
    title: 'Roofing Services in Hayes & Middlesex | SS Roofing Specialist Limited',
    description:
      'Explore roofing services from SS Roofing Specialist Limited including flat roofing, pitched roofing, roof repairs, commercial roofing, and inspections in Hayes and surrounding areas.',
    path: '/services',
    keywords:
      'flat roofing Hayes, pitched roofing Middlesex, roof repairs Hayes, commercial roofing West London, roof inspection Hayes',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: services.map((service, index) => ({
        '@type': 'Service',
        position: index + 1,
        name: service.title,
        provider: companyDetails.legalName,
        areaServed: 'Hayes, Middlesex, West London'
      }))
    }
  });

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Specialist roofing services delivered with quality and care"
        description="From planned installations to urgent repairs, we provide roofing support that balances workmanship, safety, and practical project delivery."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80"
      />

      <section className="section-padding">
        <div className="container-shell">
          <SeoSectionHeader
            eyebrow="Service Areas"
            title="Solutions for residential and commercial roofing requirements"
            description="Each service below is structured to reassure prospective clients, communicate value clearly, and support enquiry conversion."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
