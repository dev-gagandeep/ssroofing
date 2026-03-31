import FAQSection from '../components/FAQSection';
import InternalLinksSection from '../components/InternalLinksSection';
import PageHero from '../components/PageHero';
import SeoSectionHeader from '../components/SeoSectionHeader';
import TrustPanel from '../components/TrustPanel';
import { companyDetails, trustSignals } from '../data/siteData';
import useSeo from '../hooks/useSeo';

function AboutPage() {
  useSeo({
    title: 'About Our Roofing Company in Hayes | SS Roofing Specialist Limited',
    description:
      'Learn about SS Roofing Specialist Limited, a roofing company based in Hayes, Middlesex, serving residential and commercial clients with a professional approach.',
    path: '/about',
    keywords: 'about roofing company Hayes, roofer Middlesex, commercial roofer Hayes, residential roofer West London',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: `About ${companyDetails.legalName}`,
        url: `${companyDetails.websiteUrl}/about`
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${companyDetails.websiteUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'About', item: `${companyDetails.websiteUrl}/about` }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Where is SS Roofing Specialist Limited based?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'SS Roofing Specialist Limited is based in Hayes, Middlesex, and the website is positioned to support local and nearby roofing enquiries.'
            }
          },
          {
            '@type': 'Question',
            name: 'What kind of projects does the company support?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The business is presented for residential, commercial, and industrial roofing support including repairs, planned works, maintenance, and specialist roofing services.'
            }
          }
        ]
      }
    ]
  });

  const aboutFaqs = [
    {
      question: 'Why does the About page matter for SEO and trust?',
      answer:
        'A strong About page helps users and search engines understand who is behind the website, where the company is based, and why the business can be trusted.'
    },
    {
      question: 'Is SS Roofing Specialist Limited presented as a UK company?',
      answer:
        'Yes. The site presents the business as a UK registered private limited company with a clear local base in Hayes, Middlesex.'
    },
    {
      question: 'Does this page help local ranking signals?',
      answer:
        'Yes. The About page supports local trust by reinforcing the company identity, location, service focus, and business purpose.'
    }
  ];

  return (
    <>
      <PageHero
        eyebrow="About The Company"
        title="A professional roofing company built around reliability and trust"
        description="SS Roofing Specialist Limited is presented as a UK registered private limited company serving clients with a practical, quality-led approach to roofing work."
        image="https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1400&q=80"
      />

      <section className="section-padding">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <SeoSectionHeader
              eyebrow="Who We Are"
              title="Roofing expertise designed to give clients confidence"
              description="Our positioning, tone, and messaging are intentionally professional, realistic, and suited to the expectations of UK residential and commercial customers."
            />
            <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
              <p>
                SS Roofing Specialist Limited provides roofing support for residential, commercial, and industrial
                properties throughout the United Kingdom, with a clear local presence in Hayes, Middlesex. Our focus is on delivering dependable workmanship,
                straightforward advice, and a professional customer experience from first enquiry to project handover.
              </p>
              <p>
                We understand that roofing works often need to balance durability, appearance, programme requirements,
                and budget control. That is why our service is built around clear communication, practical
                recommendations, and solutions that are appropriate for the building and the client’s long-term goals.
              </p>
              <p>
                As a UK registered private limited company, we present a business identity that reflects accountability,
                professionalism, and a commitment to consistent standards. Whether the requirement is planned
                refurbishment, targeted repairs, or ongoing maintenance, we aim to be a trusted partner clients can rely on.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="card-surface">
              <h3 className="text-2xl font-bold">Trust & Experience</h3>
              <p className="mt-4 leading-7 text-slate-600">
                Our messaging is designed to reflect an experienced roofing team with practical knowledge of UK weather
                exposure, safe working practices, and the delivery expectations of both private and commercial clients.
              </p>
            </div>
            <div className="card-surface">
              <h3 className="text-2xl font-bold">Registered Company Status</h3>
              <p className="mt-4 leading-7 text-slate-600">
                Using the full company name and limited company status reinforces credibility and supports a professional
                online presence suited to lead generation and formal client enquiries.
              </p>
            </div>
            <div className="card-surface">
              <h3 className="text-2xl font-bold">Professional Standards</h3>
              <p className="mt-4 leading-7 text-slate-600">
                We position the company around fast response, quality materials, and careful project management to create
                a premium impression without sounding exaggerated or unrealistic.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 section-padding">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SeoSectionHeader
              eyebrow="Trust"
              title="Why this page supports stronger E-E-A-T"
              description="About pages are one of the clearest places to reinforce who is behind the business, where the company is based, and why someone should feel comfortable making contact."
            />
          </div>
          <TrustPanel items={trustSignals} title="Key trust signals across the SS Roofing website" />
        </div>
      </section>

      <FAQSection title="About Page FAQs" items={aboutFaqs} />

      <InternalLinksSection
        title="Helpful pages to visit next"
        links={[
          { to: '/services', label: 'Our Services', text: 'Explore the full roofing service range and specialist support.' },
          { to: '/projects', label: 'Project Examples', text: 'See the style of roofing projects the site is built to showcase.' },
          { to: '/blog', label: 'Roofing Advice', text: 'Read informational content linked to common customer questions.' },
          { to: '/contact#quote-form', label: 'Request A Quote', text: 'Take the next step if you want help with a project or repair.' }
        ]}
      />
    </>
  );
}

export default AboutPage;
