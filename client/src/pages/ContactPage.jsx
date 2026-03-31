import FAQSection from '../components/FAQSection';
import InternalLinksSection from '../components/InternalLinksSection';
import PageHero from '../components/PageHero';
import QuoteForm from '../components/QuoteForm';
import { accreditationHighlights, companyDetails } from '../data/siteData';
import useSeo from '../hooks/useSeo';

function ContactPage() {
  useSeo({
    title: 'Contact Roofing Company in Hayes | SS Roofing Specialist Limited',
    description:
      'Contact SS Roofing Specialist Limited in Hayes, Middlesex for roof repairs, inspections, roofing quotes, and commercial roofing enquiries.',
    path: '/contact',
    keywords: 'contact roofer Hayes, roof quote Middlesex, roofing company UB3, roofing contact West London',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: `Contact ${companyDetails.legalName}`,
        url: `${companyDetails.websiteUrl}/contact`
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${companyDetails.websiteUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Contact', item: `${companyDetails.websiteUrl}/contact` }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How can I request a roofing quote?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can use the quote form on the contact page to submit your name, phone number, service type, and project details.'
            }
          },
          {
            '@type': 'Question',
            name: 'Is the business located in Hayes, Middlesex?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. The website identifies the business location as 123A, Central Avenue, Hayes, Middlesex, UB3 2BS, United Kingdom.'
            }
          }
        ]
      }
    ]
  });

  const contactFaqs = [
    {
      question: 'What information should I include in a quote request?',
      answer:
        'The most useful details are the type of service you think you need, a short description of the issue or project, and the best contact number for follow-up.'
    },
    {
      question: 'Can I contact SS Roofing Specialist Limited about inspections and maintenance as well as repairs?',
      answer:
        'Yes. The quote form can be used for repairs, inspections, maintenance, and broader residential or commercial roofing enquiries.'
    },
    {
      question: 'Does the contact page support local SEO?',
      answer:
        'Yes. It reinforces the business name, local address, contact details, and quote conversion path for visitors searching in Hayes and surrounding areas.'
    }
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start your roofing enquiry with a team that responds professionally"
        description="Use the quote request form below to share your project details and receive a prompt response from our team."
        image="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80"
      />

      <section className="section-padding">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="min-w-0">
            <div className="card-surface">
              <h2 className="text-2xl font-bold">Contact Details</h2>
              <div className="mt-5 space-y-3 break-words text-slate-600">
                <p>Phone: 0800 123 4567</p>
                <p>Email: {companyDetails.enquiryEmail}</p>
                <p>Address: 123A, Central Avenue, Hayes, Middlesex, UB3 2BS, United Kingdom</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {accreditationHighlights.map((item) => (
                  <span key={item} className="rounded-full bg-brand-light px-4 py-2 text-sm font-semibold text-brand-dark">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="min-w-0">
            <QuoteForm />
          </div>
        </div>
      </section>

      <FAQSection title="Contact FAQs" items={contactFaqs} />

      <InternalLinksSection
        title="Helpful pages before you enquire"
        links={[
          { to: '/services', label: 'Browse Services', text: 'Check which roofing service best matches your property needs.' },
          { to: '/projects', label: 'Review Projects', text: 'See representative examples of the kind of work covered on the site.' },
          { to: '/about', label: 'Read About Us', text: 'Learn more about the company background and trust positioning.' },
          { to: '/blog', label: 'Read Blog Advice', text: 'Explore roof repair, inspection, and maintenance guidance.' }
        ]}
      />
    </>
  );
}

export default ContactPage;
