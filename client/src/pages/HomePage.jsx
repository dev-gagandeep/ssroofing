import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import SeoSectionHeader from '../components/SeoSectionHeader';
import TestimonialSlider from '../components/TestimonialSlider';
import QuoteForm from '../components/QuoteForm';
import { blogPosts, companyDetails, industries, localAreas, overviewServices, testimonials, whyChooseUs } from '../data/siteData';
import useSeo from '../hooks/useSeo';
import useReveal from '../hooks/useReveal';

function HomePage() {
  useSeo({
    title: 'Roofing Company in Hayes, Middlesex | SS Roofing Specialist Limited',
    description:
      'SS Roofing Specialist Limited is a roofing company based in Hayes, Middlesex, providing roof repairs, flat roofing, pitched roofing, and commercial roofing across West London and nearby areas.',
    path: '/',
    keywords:
      'roofing company Hayes, roof repairs Hayes, flat roofing Middlesex, commercial roofing West London, roofer UB3',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'RoofingContractor',
      name: companyDetails.legalName,
      url: companyDetails.websiteUrl,
      telephone: companyDetails.contactPhone,
      email: companyDetails.enquiryEmail,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123A Central Avenue',
        addressLocality: 'Hayes',
        addressRegion: 'Middlesex',
        postalCode: 'UB3 2BS',
        addressCountry: 'GB'
      },
      areaServed: localAreas.map((area) => ({
        '@type': 'City',
        name: area
      })),
      serviceType: overviewServices,
      image: `${companyDetails.websiteUrl}/ss-roofing-logo-colour.png`
    }
  });

  const heroRef = useReveal();

  return (
    <>
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80"
            alt="Professional roofing project"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-slate-950/20 via-slate-950/20 to-slate-950" />
        </div>
        <div className="container-shell relative section-padding">
          <div ref={heroRef} className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-light">UK Roofing Contractor</p>
              <h1 className="mt-6 font-display text-5xl font-extrabold leading-tight text-white sm:text-6xl">
                Trusted Roofing Specialists in the UK
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                Reliable Roofing Solutions for Residential & Commercial Projects from our Hayes, Middlesex base
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link to="/contact#quote-form" className="primary-btn">
                  Get Free Quote
                </Link>
                <Link to="/services" className="secondary-btn border-slate-600 text-white hover:border-brand hover:text-white">
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {['Residential Roofing', 'Commercial Roofing', 'Planned Maintenance', 'Fast Roof Repairs'].map((item) => (
                <div key={item} className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
                  <p className="text-lg font-semibold text-white">{item}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">
                    Delivered with a practical, reliable approach suited to UK property requirements.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-shell">
          <SeoSectionHeader
            eyebrow="Services"
            title="Roofing services tailored to the needs of modern properties"
            description="We support homeowners, developers, landlords, and commercial clients with roofing services built around quality workmanship and dependable communication."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {overviewServices.map((service) => (
              <div key={service} className="card-surface">
                <h3 className="text-xl font-bold">{service}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Practical roofing solutions planned around durability, weather protection, and clean presentation.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 section-padding">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <SeoSectionHeader
              eyebrow="Local Roofing"
              title="Serving Hayes, Middlesex, and surrounding West London areas"
              description="Local signals matter for search visibility. This section makes the business location and service coverage clear for both customers and search engines."
            />
          </div>
          <div className="card-surface">
            <p className="text-lg font-semibold text-slate-900">Official business address</p>
            <p className="mt-3 leading-8 text-slate-600">{companyDetails.registeredOffice}</p>
            <p className="mt-6 text-lg font-semibold text-slate-900">Areas we commonly support</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {localAreas.map((area) => (
                <span key={area} className="rounded-full bg-brand-light px-4 py-2 text-sm font-semibold text-brand-dark">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 section-padding">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SeoSectionHeader
              eyebrow="Why Choose Us"
              title="Professional delivery with the standards clients expect"
              description="Our work is shaped by safe practices, trusted materials, and a service-first mindset that keeps projects moving smoothly."
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="card-surface">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-shell">
          <SeoSectionHeader
            eyebrow="Industries"
            title="Roofing support across residential, commercial, and industrial sectors"
            description="Every environment calls for a different approach. We adapt our delivery to suit the building type, operational demands, and expected finish."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {industries.map((industry) => (
              <div key={industry.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
                <div className="h-2 bg-brand" />
                <div className="p-7">
                  <h3 className="text-2xl font-bold">{industry.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{industry.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 section-padding">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SeoSectionHeader
            eyebrow="Testimonials"
            title="What clients say about working with us"
            description="Lead generation depends on trust. These testimonials are written to reflect the professionalism and reliability clients expect from a premium roofing contractor."
          />
          <TestimonialSlider items={testimonials} />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-shell">
          <SeoSectionHeader
            eyebrow="Roofing Insights"
            title="Latest advice from our roofing blog"
            description="Publishing useful local roofing content supports long-term search growth and gives prospective customers practical information before they enquire."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {blogPosts.slice(0, 2).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="mt-8">
            <Link to="/blog" className="secondary-btn">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-shell">
          <SeoSectionHeader
            eyebrow="Roofing Questions"
            title="Answers to common questions local customers ask before booking"
            description="This answer-led content helps customers quickly understand the service and also strengthens AEO-style visibility by matching real search intent."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                q: 'Do you handle both emergency roof repairs and planned roofing works?',
                a: 'Yes. We position the business to support urgent repair enquiries as well as planned installations, inspections, and maintenance-led roofing projects.'
              },
              {
                q: 'Do you work on residential and commercial properties?',
                a: 'Yes. The site is structured to target homeowners, landlords, developers, and commercial property managers across multiple roofing service types.'
              },
              {
                q: 'Can I request a quote for a property in Hayes or nearby areas?',
                a: 'Yes. The quote form is designed to support lead capture for properties in Hayes, Middlesex, West London, and surrounding locations.'
              }
            ].map((item) => (
              <div key={item.q} className="card-surface">
                <h3 className="text-xl font-bold text-slate-900">{item.q}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-shell grid gap-10 rounded-[2rem] bg-gradient-to-r from-brand to-brand-dark p-8 text-white shadow-soft lg:grid-cols-[1fr_0.9fr] lg:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-light">Free Site Advice</p>
            <h2 className="mt-4 text-4xl font-extrabold text-white">Speak with a roofing team that understands performance, safety, and presentation.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-50">
              Whether you need repairs, a full replacement, or an inspection, we are ready to discuss the right solution for your property.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="secondary-btn border-white text-white hover:bg-white hover:text-brand-dark">
                Contact Us
              </Link>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}

export default HomePage;
