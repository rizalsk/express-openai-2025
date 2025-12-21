import fs from 'fs';
import path from 'path';

export const loginPage = (req, res) => {
  const layoutFile = path.join(process.cwd(), 'src', 'views', 'layouts', 'blank', 'main.html');
  const contentFile = path.join(process.cwd(), 'src', 'views', 'auth', 'login.html');

  try {
    let layoutHtml = fs.readFileSync(layoutFile, 'utf-8');
    let contentHtml = fs.readFileSync(contentFile, 'utf-8');

    contentHtml = contentHtml.replace('<%- error_message %>', '');
    layoutHtml = layoutHtml.replace('<%- include(content) %>', contentHtml);
    res.send(layoutHtml);
  } catch (error) {
    console.error('Error reading files:', error);
    res.status(500).send('Error loading login page');
  }
};

export const login = (req,res)=>{
  const layoutFile = path.join(process.cwd(), 'src', 'views', 'layouts', 'blank', 'main.html');
  const contentFile = path.join(process.cwd(), 'src', 'views', 'auth', 'login.html');
  const { username, password } = req.body;
  if(username==='admin' && password==='admin'){
    res.redirect('/dashboard');
  } else {
    // Pass an error message back to the login page
    const errorMessage = 'Invalid username or password!';
    let layoutHtml = fs.readFileSync(layoutFile, 'utf-8');
    let contentHtml = fs.readFileSync(contentFile, 'utf-8');

    contentHtml = contentHtml.replace('<%- error_message %>', errorMessage);
    layoutHtml = layoutHtml.replace('<%- include(content) %>', contentHtml);
    
    res.send(layoutHtml);
  }
};
