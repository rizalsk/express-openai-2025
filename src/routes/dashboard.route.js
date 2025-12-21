import express from 'express';
import { dashboardPage, chatPage, calenderPage, imageGenerator, userPage, chatbotPage, profilePage, settingPage, textExtractorPage } from '../controllers/dashboard.controller.js';
const router = express.Router();

router.get('/', dashboardPage);
router.get('/calendar', calenderPage);
router.get('/chatbot', chatbotPage);
router.get('/chat', chatPage);
router.get('/img-generator', imageGenerator);
router.get('/text-extractor', textExtractorPage);
router.get('/users', userPage);
router.get('/profile', profilePage);
router.get('/setting', settingPage);

export default router;
