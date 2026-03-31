function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function validateContactPayload(payload) {
  const { name, email, phone, message } = payload;

  if (!name || !email || !phone || !message) {
    return 'All contact form fields are required.';
  }

  if (!isEmail(email)) {
    return 'Please provide a valid email address.';
  }

  return null;
}

export function validateQuotePayload(payload) {
  const { name, phone, serviceType, projectDetails } = payload;

  if (!name || !phone || !serviceType || !projectDetails) {
    return 'All quote request fields are required.';
  }

  return null;
}
