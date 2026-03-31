import PageHero from '../components/PageHero';
import SeoSectionHeader from '../components/SeoSectionHeader';
import ServiceCard from '../components/ServiceCard';
import { companyDetails, serviceMenuGroups, services } from '../data/siteData';
import useSeo from '../hooks/useSeo';

function ServicesPage() {
  useSeo({
    title: 'Roofing Services in Hayes & Middlesex | SS Roofing Specialist Limited',
    description:
      'Explore roofing services from SS Roofing Specialist Limited including flat roofing, pitched roofing, roof repairs, commercial roofing, cladding, rooflight replacement, inspections, and maintenance in Hayes and surrounding areas.',
    path: '/services',
    keywords:
      'flat roofing Hayes, pitched roofing Middlesex, roof repairs Hayes, commercial roofing West London, cladding services Hayes, rooflight replacement Hayes, roof inspection Hayes',
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
            title="A wider roofing and building-envelope service range for SS Roofing"
            description="The services page now reflects a broader commercial and specialist offer, similar in scope to the reference site, while keeping the SS Roofing visual identity and messaging."
          />

          <div className="mt-12 space-y-16">
            {serviceMenuGroups.map((group) => {
              const groupServices = services.filter((service) => group.items.includes(service.title));

              return (
                <section key={group.title}>
                  <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-dark">{group.title}</p>
                    <h2 className="mt-3 text-3xl font-extrabold text-slate-900">{group.description}</h2>
                  </div>
                  <div className="mt-8 grid gap-8 lg:grid-cols-2">
                    {groupServices.map((service) => (
                      <ServiceCard key={service.slug} {...service} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
