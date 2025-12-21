import express from 'express';
import { loginPage, login } from '../controllers/auth.controller.js';
const router = express.Router();

router.get('/login', loginPage);
router.post('/login', login);

export default router;
