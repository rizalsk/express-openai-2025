import express from 'express';
import { chatCompletion } from '../controllers/ai.controller.js';

const router = express.Router();

router.post('/chat', chatCompletion);

export default router;