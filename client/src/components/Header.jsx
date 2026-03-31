import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../data/siteData';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? 'text-brand' : 'text-slate-700 hover:text-brand'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact#quote-form" className="primary-btn">
            Get Free Quote
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex rounded-xl border border-slate-200 p-2 text-slate-700 lg:hidden"
          onClick={() => setIsOpen((previousState) => !previousState)}
          aria-label="Toggle navigation"
        >
          <span className="h-6 w-6 text-xl">{isOpen ? '×' : '≡'}</span>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-shell flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
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
