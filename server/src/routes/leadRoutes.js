import { Router } from 'express';
import { createContactLead, createQuoteRequest } from '../controllers/leadController.js';

const router = Router();

router.post('/contact', createContactLead);
router.post('/quote', createQuoteRequest);

export default router;
