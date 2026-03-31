import { useState } from 'react';
import { submitContact } from '../lib/api';

const initialState = {
  name: '',
  email: '',
  phone: '',
  message: ''
};

function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await submitContact(formData);
      setStatus({ type: 'success', message: 'Thank you. Your enquiry has been received and our team will be in touch.' });
      setFormData(initialState);
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="card-surface" onSubmit={handleSubmit}>
      <h3 className="text-2xl font-bold text-slate-900">Contact Our Team</h3>
      <p className="mt-2 text-slate-600">Tell us about your roofing enquiry and we will respond promptly.</p>

      <div className="mt-6 grid gap-4">
        <input
          required
          type="text"
          placeholder="Name"
          className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand"
          value={formData.name}
          onChange={(event) => setFormData({ ...formData, name: event.target.value })}
        />
        <input
          required
          type="email"
          placeholder="Email"
          className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand"
          value={formData.email}
          onChange={(event) => setFormData({ ...formData, email: event.target.value })}
        />
        <input
          required
          type="tel"
          placeholder="Phone"
          className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand"
          value={formData.phone}
          onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
        />
        <textarea
          required
          rows="5"
          placeholder="Message"
          className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand"
          value={formData.message}
          onChange={(event) => setFormData({ ...formData, message: event.target.value })}
        />
      </div>

      {status.message ? (
        <p className={`mt-4 text-sm ${status.type === 'success' ? 'text-emerald-600' : 'text-red-600'}`}>{status.message}</p>
      ) : null}

      <button type="submit" className="primary-btn mt-6 w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Enquiry'}
      </button>
    </form>
  );
}

export default ContactForm;
