import ContactLead from '../models/ContactLead.js';
import QuoteRequest from '../models/QuoteRequest.js';
import { validateContactPayload, validateQuotePayload } from '../utils/validators.js';

export async function createContactLead(request, response) {
  const validationError = validateContactPayload(request.body);

  if (validationError) {
    return response.status(400).json({ message: validationError });
  }

  const lead = await ContactLead.create(request.body);

  return response.status(201).json({
    message: 'Contact enquiry submitted successfully.',
    id: lead._id
  });
}

export async function createQuoteRequest(request, response) {
  const validationError = validateQuotePayload(request.body);

  if (validationError) {
    return response.status(400).json({ message: validationError });
  }

  const quote = await QuoteRequest.create(request.body);

  return response.status(201).json({
    message: 'Quote request submitted successfully.',
    id: quote._id
  });
}
