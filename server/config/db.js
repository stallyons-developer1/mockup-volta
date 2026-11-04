import mongoose from 'mongoose'

// Connect to MongoDB if a URI is configured. Never throw — the API is
// designed to keep working with an in-memory store when there's no DB.
export async function connectDB() {
  const uri = process.env.MONGODB_URI
  if (!uri) {
    console.log('ℹ️  No MONGODB_URI set — running with in-memory store.')
    return false
  }
  try {
    mongoose.set('strictQuery', true)
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 4000 })
    console.log('✅ MongoDB connected.')
    return true
  } catch (err) {
    console.warn('⚠️  MongoDB unavailable — falling back to in-memory store.')
    console.warn('   ', err.message)
    return false
  }
}
