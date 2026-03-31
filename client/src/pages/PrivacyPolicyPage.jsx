import PageHero from '../components/PageHero';
import LegalContent from '../components/LegalContent';
import { companyDetails } from '../data/siteData';
import useSeo from '../hooks/useSeo';

function PrivacyPolicyPage() {
  useSeo({
    title: 'Privacy Policy | SS Roofing Specialist Limited',
    description:
      'Read how SS Roofing Specialist Limited collects, uses, stores, and protects personal information submitted through this website.',
    path: '/privacy-policy',
    keywords: 'privacy policy roofing company Hayes, roofing website privacy policy UK',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Privacy Policy',
      url: `${companyDetails.websiteUrl}/privacy-policy`
    }
  });

  const sections = [
    {
      title: 'Who We Are',
      paragraphs: [
        `${companyDetails.legalName} is the data controller for the personal information collected through this website.`,
        `We are ${companyDetails.registrationStatus.toLowerCase()} and this website is intended to support roofing enquiries, quote requests, and customer communication in the United Kingdom.`,
        `Before this site goes live, replace the placeholder company registration number and registered office address shown on the website with the official Companies House details.`
      ]
    },
    {
      title: 'What Information We Collect',
      paragraphs: [
        'We collect the personal information that you provide directly when you complete our contact form or quote request form. This may include your name, email address, telephone number, service requirements, and project details.',
        'We may also collect limited technical information from your device when you visit the site, such as basic server logs used for security, performance, and troubleshooting.'
      ]
    },
    {
      title: 'How We Use Your Information',
      paragraphs: [
        'We use submitted information to respond to enquiries, provide quotations, arrange follow-up communication, manage customer relationships, and keep a record of incoming leads.',
        'Our lawful basis for processing this information will usually be legitimate interests, and in some cases steps taken at your request before entering into a contract.'
      ]
    },
    {
      title: 'How Long We Keep Your Information',
      paragraphs: [
        'Lead enquiries and quote requests should only be kept for as long as reasonably necessary to manage the enquiry, complete follow-up actions, and maintain relevant business records.',
        'As a practical default, many small businesses set a retention period for unconverted website leads. This should be confirmed and documented before launch.'
      ]
    },
    {
      title: 'Sharing Your Information',
      paragraphs: [
        'We do not sell personal data submitted through this website.',
        'Information may be shared with trusted service providers who support website hosting, database infrastructure, email handling, or technical maintenance where this is necessary for operating the website and servicing enquiries.'
      ]
    },
    {
      title: 'Your Rights',
      paragraphs: [
        'Depending on the circumstances, you may have rights to request access to your personal data, request correction, request erasure, object to processing, or ask for processing to be restricted.',
        `If you have concerns about how your data is handled, you can contact us using the website contact details. You may also have the right to complain to the UK Information Commissioner’s Office.`
      ]
    },
    {
      title: 'Cookies and Tracking',
      paragraphs: [
        'This website should not place non-essential cookies or analytics tools on user devices unless they are properly implemented and managed in line with applicable UK privacy rules.',
        'If analytics, advertising tags, or tracking tools are added later, the privacy information and any consent mechanism should be updated before those tools are enabled.'
      ]
    },
    {
      title: 'Contact for Privacy Queries',
      paragraphs: [
        `For privacy-related questions, you can contact ${companyDetails.legalName} using the contact details published on this website or by email at ${companyDetails.privacyEmail}.`
      ]
    }
  ];

  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="How personal information is handled on this website"
        description="This policy explains how contact and quote information submitted through the website is collected and used."
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80"
      />

      <section className="section-padding">
        <div className="container-shell max-w-4xl">
          <LegalContent sections={sections} />
        </div>
      </section>
    </>
  );
}

export default PrivacyPolicyPage;
