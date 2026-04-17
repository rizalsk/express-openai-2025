import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.route.js';
import dashboardRoutes from './routes/dashboard.route.js';
import aiRoutes from './routes/ai.route.js';
import path from 'path';
import fs from 'fs';
import { calenderPage } from './controllers/dashboard.controller.js';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Public folder
app.use(express.static(path.join(process.cwd(), 'public')));

app.set('views', path.join(process.cwd(), 'src', 'views'));
app.engine('html', (filePath, options, callback) => {
  fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) return callback(err);
    return callback(null, content);
  });
});
app.set('view engine', 'html');

// Routes
app.use('/auth', authRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/api/ai', aiRoutes);

app.get('/', (req, res) => res.redirect('/auth/login'));
app.get('/calendar', calenderPage);

export default app;