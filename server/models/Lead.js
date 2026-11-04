import mongoose from 'mongoose'

const LeadSchema = new mongoose.Schema(
  {
    type: { type: String, enum: ['newsletter', 'contact'], required: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    name: { type: String, trim: true },
    message: { type: String, trim: true },
  },
  { timestamps: true }
)

export const Lead = mongoose.model('Lead', LeadSchema)
