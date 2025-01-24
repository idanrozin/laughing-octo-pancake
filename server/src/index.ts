import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { Request, Response } from 'express';
import connectDB from './config/database';
import exampleRoutes from './routes/example';

// Load environment variables
dotenv.config();

const app = express();

if (!process.env.PORT) {
  throw new Error('PORT is not defined in environment variables');
}

const port = parseInt(process.env.PORT);

// Connect to MongoDB
connectDB();

// API routes
app.use('/api', express.json());
app.use('/api/examples', exampleRoutes);

app.get('/api/hello', (req: Request, res: Response<{ message: string }>) => {
  res.json({ message: 'Hello World!' });
});

// In production, serve the React build files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../client/dist')));

  // Handle React routing, return all non-api requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
