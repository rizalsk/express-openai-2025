import {renderView} from '../helpers/render.js'

export const dashboardPage = (req,res)=>{
  renderView(res,'dashboard/main', 'pages/dashboard')
};

export const calenderPage = (req,res)=>{
  res.sendFile('dashboard/calendar.html', { root: 'src/views/layouts' });
};

export const chatPage = (req,res)=>{
  renderView(res,'dashboard/main', 'pages/chat')
};

export const chatbotPage = (req,res)=>{
  renderView(res,'dashboard/main', 'pages/chatbot')
};

export const imageGenerator = (req,res)=>{
  renderView(res,'dashboard/main', 'pages/img-generator')
};

export const textExtractorPage = (req,res)=>{
  renderView(res,'dashboard/main', 'pages/text-extractor')
};

export const userPage = (req,res)=>{
  renderView(res,'dashboard/main', 'pages/user')
};

export const profilePage = (req,res)=>{
  renderView(res,'dashboard/main', 'pages/profile')
};

export const settingPage = (req,res)=>{
  renderView(res,'dashboard/main', 'pages/setting')
};
