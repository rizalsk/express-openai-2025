import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.route.js';
import dashboardRoutes from './routes/dashboard.route.js';
import path from 'path';
import fs from 'fs';
import { calenderPage } from './controllers/dashboard.controller.js';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Public folder
app.use(express.static(path.join(process.cwd(), 'public')));

app.use(bodyParser.json());

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

app.get('/', (req,res)=>res.redirect('/auth/login'));

/* app.get('/', (req, res) => {
  const contentFile = path.join(process.cwd(), 'src', 'views', 'welcome.html');

  let contentHtml = fs.readFileSync(contentFile, 'utf-8');
  const processedContent = processNestedHtml(contentHtml);
  console.log("render", processedContent)
  res.send(processedContent);
}); */
app.get('/calendar', calenderPage);
export default app;
