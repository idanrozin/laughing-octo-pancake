import mongoose from 'mongoose';

// Define the interface for the document
export interface IExample {
  title: string;
  description: string;
  createdAt: Date;
}

// Define the schema
const exampleSchema = new mongoose.Schema<IExample>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create and export the model
export default mongoose.model<IExample>('Example', exampleSchema);
