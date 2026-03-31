import FAQSection from '../components/FAQSection';
import InternalLinksSection from '../components/InternalLinksSection';
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
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: services.map((service, index) => ({
          '@type': 'Service',
          position: index + 1,
          name: service.title,
          provider: companyDetails.legalName,
          areaServed: 'Hayes, Middlesex, West London'
        }))
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${companyDetails.websiteUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${companyDetails.websiteUrl}/services` }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What roofing services are offered by SS Roofing Specialist Limited?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The services page covers flat roofing, pitched roofing, repairs, inspections, commercial roofing, cladding-related support, rooflight replacement, maintenance, and specialist envelope works.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do these services cover both residential and commercial properties?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. The service range is presented for residential, commercial, and industrial property requirements depending on the service type.'
            }
          }
        ]
      }
    ]
  });

  const serviceFaqs = [
    {
      question: 'Do you provide roofing services for both homes and commercial buildings?',
      answer:
        'Yes. The services are structured to support homeowners, landlords, developers, facilities teams, and commercial property managers depending on the project type.'
    },
    {
      question: 'Can I click through to a dedicated page for each service?',
      answer:
        'Yes. Each main roofing service now has its own dedicated page, which helps with internal linking, user navigation, and search targeting.'
    },
    {
      question: 'How should I choose the right roofing service for my property?',
      answer:
        'If you are unsure whether you need repairs, maintenance, inspection, or replacement, the best starting point is to request a quote and describe the issue or project goals.'
    }
  ];

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

      <FAQSection
        title="Service FAQs"
        description="This section helps visitors quickly understand the service structure and gives search engines more contextual information about the page."
        items={serviceFaqs}
      />

      <InternalLinksSection
        title="Continue exploring the site"
        links={[
          { to: '/projects', label: 'View Projects', text: 'See representative work and project-led content.' },
          { to: '/contact#quote-form', label: 'Request A Quote', text: 'Submit project details and ask for the right next step.' },
          { to: '/blog', label: 'Read Roofing Advice', text: 'Explore articles linked to inspections, repairs, and maintenance.' },
          { to: '/about', label: 'Why Trust Us', text: 'See the business positioning and trust-focused content.' }
        ]}
      />
    </>
  );
}

export default ServicesPage;
