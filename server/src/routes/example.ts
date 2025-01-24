import { Router, Request, Response } from 'express';
import Example, { IExample } from '../models/Example';

const router = Router();

// GET all examples
router.get('/', async (req: Request, res: Response) => {
  try {
    const examples: IExample[] = await Example.find();

    res.json(examples);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching examples', error });
  }
});

// POST new example
router.post(
  '/',
  async (req: Request<unknown, unknown, IExample>, res: Response) => {
    try {
      const newExample = new Example(req.body);
      const savedExample = await newExample.save();
      res.status(201).json(savedExample);
    } catch (error) {
      res.status(400).json({ message: 'Error creating example', error });
    }
  },
);

export default router;
