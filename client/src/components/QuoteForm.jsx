import { useState } from 'react';
import { submitQuote } from '../lib/api';

const initialState = {
  name: '',
  phone: '',
  serviceType: '',
  projectDetails: ''
};

function QuoteForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await submitQuote(formData);
      setStatus({ type: 'success', message: 'Your quote request has been submitted. We will contact you shortly.' });
      setFormData(initialState);
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form id="quote-form" className="min-w-0 overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-soft sm:p-8" onSubmit={handleSubmit}>
      <h3 className="text-2xl font-bold text-white">Request a Free Quote</h3>
      <p className="mt-2 text-slate-300">
        Share a few project details and our team will follow up with suitable next steps.
      </p>

      <div className="mt-6 grid min-w-0 gap-4">
        <input
          required
          type="text"
          placeholder="Name"
          className="w-full min-w-0 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-brand"
          value={formData.name}
          onChange={(event) => setFormData({ ...formData, name: event.target.value })}
        />
        <input
          required
          type="tel"
          placeholder="Phone"
          className="w-full min-w-0 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-brand"
          value={formData.phone}
          onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
        />
        <select
          required
          className="w-full min-w-0 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-brand"
          value={formData.serviceType}
          onChange={(event) => setFormData({ ...formData, serviceType: event.target.value })}
        >
          <option value="" disabled>
            Type of service
          </option>
          <option>Flat Roofing</option>
          <option>Pitched Roofing</option>
          <option>Roof Repairs</option>
          <option>Commercial Roofing</option>
          <option>Roof Inspections</option>
          <option>Guttering & Maintenance</option>
        </select>
        <textarea
          required
          rows="5"
          placeholder="Project details"
          className="w-full min-w-0 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-brand"
          value={formData.projectDetails}
          onChange={(event) => setFormData({ ...formData, projectDetails: event.target.value })}
        />
      </div>

      {status.message ? (
        <p className={`mt-4 text-sm ${status.type === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>{status.message}</p>
      ) : null}

      <button type="submit" className="primary-btn mt-6 w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Request Quote'}
      </button>
    </form>
  );
}

export default QuoteForm;
