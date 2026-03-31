import { Link } from 'react-router-dom';
import { companyDetails, navLinks } from '../data/siteData';

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container-shell grid gap-10 py-14 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <img
            src="/ss-roofing-logo-white.png"
            alt="SS Roofing Specialist Limited"
            className="h-14 w-auto sm:h-16"
          />
          <p className="mt-4 max-w-md leading-7 text-slate-400">
            Professional roofing support for residential, commercial, and industrial properties across the United
            Kingdom. Built on reliability, safety, and high standards of workmanship.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <div className="mt-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
            <Link to="/privacy-policy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="transition hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white">Company Details</h4>
          <div className="mt-4 space-y-3 text-slate-400">
            <p>Location: {companyDetails.registeredOffice}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container-shell flex flex-col gap-2 py-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SS Roofing Specialist Limited. All rights reserved.</p>
          <p>UK Registered Private Limited Company</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
