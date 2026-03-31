import PageHero from '../components/PageHero';
import QuoteForm from '../components/QuoteForm';
import { companyDetails } from '../data/siteData';
import useSeo from '../hooks/useSeo';

function ContactPage() {
  useSeo({
    title: 'Contact Roofing Company in Hayes | SS Roofing Specialist Limited',
    description:
      'Contact SS Roofing Specialist Limited in Hayes, Middlesex for roof repairs, inspections, roofing quotes, and commercial roofing enquiries.',
    path: '/contact',
    keywords: 'contact roofer Hayes, roof quote Middlesex, roofing company UB3, roofing contact West London',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: `Contact ${companyDetails.legalName}`,
      url: `${companyDetails.websiteUrl}/contact`
    }
  });

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
            </div>
          </div>
          <div className="min-w-0">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
