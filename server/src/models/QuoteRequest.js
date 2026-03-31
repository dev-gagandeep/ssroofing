import mongoose from 'mongoose';

const quoteRequestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    serviceType: {
      type: String,
      required: true,
      trim: true
    },
    projectDetails: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('QuoteRequest', quoteRequestSchema);
