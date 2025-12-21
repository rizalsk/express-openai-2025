import fs from 'fs';
import path from 'path';

const INCLUDE_PATTERN = /<include\s+src=["'](.+?)["']\s*\/?>\s*(?:<\/include>)?/gis;

const processNestedHtml = (content, dir = null) => {
  if (!INCLUDE_PATTERN.test(content)) {
    return content;
  }

  return content.replace(INCLUDE_PATTERN, (m, src) => {
    const filePath = path.resolve(dir || process.cwd(), 'src', 'views', src);
    console.log(`Including file from: ${filePath}`);
    try {
      const includedContent = fs.readFileSync(filePath, 'utf8');
      return processNestedHtml(includedContent, path.dirname(filePath));
    } catch (err) {
      console.error(`Error reading file ${filePath}:`, err);
      return `<div class="error">Error loading ${src}</div>`;
    }
  });
};

const renderHtmlWithIncludes = (inputFile, outputFile) => {
  try {
    const content = fs.readFileSync(inputFile, 'utf8'); 
    const processedContent = processNestedHtml(content); 
    fs.writeFileSync(outputFile, processedContent, 'utf8');
    console.log(`File processed successfully! Output saved to ${outputFile}`);
  } catch (err) {
    console.error(`Error reading file ${inputFile}:`, err);
  }
};

export default processNestedHtml;

const renderLayoutWithContent = (view, data = {}) => {
  // Membaca layout utama
  const layoutPath = path.resolve(process.cwd(), 'src', 'views', 'layout.html');
  let layoutContent = fs.readFileSync(layoutPath, 'utf8');

  // Mengganti placeholder <%- body %> di layout dengan konten halaman
  let pageContent = getViewContent(view, data);
  layoutContent = layoutContent.replace('<%- body %>', pageContent);

  // Kembalikan HTML setelah layout digabung
  return processNestedHtml(layoutContent, path.dirname(layoutPath));
};


const getViewContent = (view, data) => {
  const viewPath = path.resolve(process.cwd(), 'src', 'views', `${view}.html`);
  let viewContent = fs.readFileSync(viewPath, 'utf8');

  // Ganti placeholder data di dalam view
  Object.keys(data).forEach(key => {
    const value = data[key];
    const regex = new RegExp(`<%=\\s*${key}\\s*%>`, 'g');
    viewContent = viewContent.replace(regex, value);
  });

  // Kembalikan konten view setelah data diganti
  return processNestedHtml(viewContent, path.dirname(viewPath));
};

const renderView = (res, layoutPath = 'dashboard/main', view, data = {}) => {
  const layoutFile = path.join(process.cwd(), 'src/views/layouts', layoutPath + '.html');
  const contentFile = path.join(process.cwd(), 'src/views/', `${view}.html`);
  
  try {
    let layoutHtml = fs.readFileSync(layoutFile, 'utf-8');
    let contentHtml = fs.readFileSync(contentFile, 'utf-8');
    contentHtml = contentHtml.replace('<%- error_message %>', '');
    layoutHtml = layoutHtml.replace('<%- include(content) %>', contentHtml);
    const processedContent = processNestedHtml(layoutHtml);
    res.send(processedContent);
  } catch (error) {
    console.error('Error reading files:', error);
    res.status(500).send('Error loading login page');
  }
};

export { processNestedHtml, renderLayoutWithContent, renderView};