import PageHero from '../components/PageHero';
import LegalContent from '../components/LegalContent';
import { companyDetails } from '../data/siteData';
import useSeo from '../hooks/useSeo';

function TermsPage() {
  useSeo({
    title: 'Terms and Conditions | SS Roofing Specialist Limited',
    description: 'Website terms and conditions for SS Roofing Specialist Limited.',
    path: '/terms-and-conditions',
    keywords: 'terms and conditions roofing company Hayes, website terms roofing business UK',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Terms and Conditions',
      url: `${companyDetails.websiteUrl}/terms-and-conditions`
    }
  });

  const sections = [
    {
      title: 'Website Use',
      paragraphs: [
        `This website is operated by ${companyDetails.legalName}. By using the site, you agree to use it only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the site.`,
        'The content on this website is provided for general information about our roofing services and does not amount to technical, legal, or professional advice.'
      ]
    },
    {
      title: 'Service Information',
      paragraphs: [
        'Descriptions of services, project examples, and turnaround expectations are provided to give a realistic overview of the company’s offering.',
        'Any quotation, timeline, or recommendation for roofing works will depend on the actual scope of work, site conditions, access, materials, and inspection findings.'
      ]
    },
    {
      title: 'Enquiries and Quotes',
      paragraphs: [
        'Submitting a contact form or quote request does not create a binding contract. It is simply a request for communication or indicative pricing.',
        'Formal work should only proceed after scope, pricing, terms, and any relevant project details have been agreed separately.'
      ]
    },
    {
      title: 'Accuracy of Content',
      paragraphs: [
        'We aim to keep the content on this website accurate and up to date, but we do not guarantee that all information will always be complete, current, or free from error.',
        'The company may update, remove, or amend content at any time without notice.'
      ]
    },
    {
      title: 'Liability',
      paragraphs: [
        'To the fullest extent permitted by law, we exclude liability for loss or damage arising from reliance on general website content, interruption of site availability, or third-party links and services.',
        'Nothing in these terms is intended to exclude liability where exclusion would be unlawful.'
      ]
    },
    {
      title: 'Intellectual Property',
      paragraphs: [
        'The branding, written content, layout, and design elements on this website are the property of the company or are used under appropriate rights and permissions.',
        'You may not reproduce, distribute, or reuse material from this website for commercial purposes without prior written permission.'
      ]
    },
    {
      title: 'Third-Party Links',
      paragraphs: [
        'If this website links to third-party websites, those links are provided for convenience only. We are not responsible for the content, policies, or availability of third-party sites.'
      ]
    },
    {
      title: 'Governing Law',
      paragraphs: [
        'These terms are governed by the laws of England and Wales unless another applicable part of the UK is required by law.'
      ]
    }
  ];

  return (
    <>
      <PageHero
        eyebrow="Terms & Conditions"
        title="Website terms for visitors and enquiries"
        description="These terms explain how this website may be used and how website content and enquiries should be understood."
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80"
      />

      <section className="section-padding">
        <div className="container-shell max-w-4xl">
          <LegalContent sections={sections} />
        </div>
      </section>
    </>
  );
}

export default TermsPage;
