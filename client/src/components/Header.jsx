import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks, serviceMenuGroups, services } from '../data/siteData';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const serviceSlugByTitle = Object.fromEntries(services.map((service) => [service.title, service.slug]));

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="container-shell flex items-center justify-between py-4">
        <Link to="/" className="flex items-center">
          <img
            src="/ss-roofing-logo-colour.png"
            alt="SS Roofing Specialist Limited"
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            link.label === 'Services' ? (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  type="button"
                  className={`inline-flex items-center gap-2 text-sm font-medium transition ${
                    isServicesOpen ? 'text-brand' : 'text-slate-700 hover:text-brand'
                  }`}
                >
                  Services
                  <svg
                    className={`h-4 w-4 transition ${isServicesOpen ? 'rotate-180' : ''}`}
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                  </svg>
                </button>

                {isServicesOpen ? (
                  <div className="absolute left-1/2 top-full z-50 w-[min(72rem,calc(100vw-3rem))] -translate-x-1/2 pt-5">
                    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
                      <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr_1fr_1fr]">
                        <div className="rounded-[1.5rem] bg-slate-950 p-7 text-white">
                          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-light">All Services</p>
                          <h3 className="mt-4 text-3xl font-bold text-white">Roofing support for domestic, commercial, and specialist projects.</h3>
                          <p className="mt-4 leading-7 text-slate-300">
                            Explore the full SS Roofing offering, from core repairs and installations to specialist roofing and envelope works.
                          </p>
                          <Link to="/services" className="secondary-btn mt-6 border-white text-white hover:bg-white hover:text-slate-950">
                            View All Services
                          </Link>
                        </div>

                        {serviceMenuGroups.map((group) => (
                          <div key={group.title}>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-dark">{group.title}</p>
                            <p className="mt-3 text-sm leading-6 text-slate-500">{group.description}</p>
                            <div className="mt-5 space-y-3">
                              {group.items.map((item) => (
                                <Link
                                  key={item}
                                  to={`/services/${serviceSlugByTitle[item]}`}
                                  className="block text-sm font-medium text-slate-700 transition hover:text-brand"
                                >
                                  {item}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            ) : (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${isActive ? 'text-brand' : 'text-slate-700 hover:text-brand'}`
                }
              >
                {link.label}
              </NavLink>
            )
          ))}
          <Link to="/contact#quote-form" className="primary-btn">
            Get Free Quote
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-16 w-16 items-center justify-center rounded-[1.75rem] border border-slate-200 bg-white text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition hover:border-brand hover:text-brand lg:hidden"
          onClick={() => setIsOpen((previousState) => !previousState)}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 8H18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M6 12H18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M6 16H18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-shell flex flex-col gap-5 py-5">
            {navLinks.map((link) => (
              link.label === 'Services' ? (
                <div key={link.path} className="rounded-[1.5rem] border border-slate-200 p-4">
                  <Link to="/services" onClick={() => setIsOpen(false)} className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-dark">
                    Services
                  </Link>
                  <div className="mt-4 grid gap-3">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="text-sm font-medium text-slate-700 transition hover:text-brand"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-medium transition ${isActive ? 'text-brand' : 'text-slate-700 hover:text-brand'}`
                  }
                >
                  {link.label}
                </NavLink>
              )
            ))}
            <Link to="/contact#quote-form" className="primary-btn" onClick={() => setIsOpen(false)}>
              Get Free Quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
