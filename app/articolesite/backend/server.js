import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// Ensure directories exist
const dataDir = path.join(__dirname, 'data');
const uploadsDir = path.join(__dirname, 'uploads');
const articlesFile = path.join(dataDir, 'articles.json');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}
if (!fs.existsSync(articlesFile)) {
  fs.writeFileSync(articlesFile, JSON.stringify([], null, 2));
}

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(uploadsDir));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueName = `${uuidv4()}${ext}`;
    cb(null, uniqueName);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'));
    }
  }
});

// Helper functions
function readArticles() {
  const data = fs.readFileSync(articlesFile, 'utf-8');
  return JSON.parse(data);
}

function writeArticles(articles) {
  fs.writeFileSync(articlesFile, JSON.stringify(articles, null, 2));
}

// Routes

// Get all articles
app.get('/api/articles', (req, res) => {
  try {
    const articles = readArticles();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read articles' });
  }
});

// Get single article
app.get('/api/articles/:id', (req, res) => {
  try {
    const articles = readArticles();
    const article = articles.find(a => a.id === req.params.id);
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read article' });
  }
});

// Create new article
app.post('/api/articles', (req, res) => {
  try {
    const articles = readArticles();
    const newArticle = {
      id: uuidv4(),
      title: req.body.title,
      slug: req.body.slug || req.body.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
      content: req.body.content,
      excerpt: req.body.excerpt || '',
      imageUrl: req.body.imageUrl || '',
      author: req.body.author || 'Irina Gospodaru',
      published: req.body.published || false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    articles.push(newArticle);
    writeArticles(articles);
    res.status(201).json(newArticle);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create article' });
  }
});

// Update article
app.put('/api/articles/:id', (req, res) => {
  try {
    const articles = readArticles();
    const index = articles.findIndex(a => a.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ error: 'Article not found' });
    }
    
    const updatedArticle = {
      ...articles[index],
      title: req.body.title ?? articles[index].title,
      slug: req.body.slug ?? articles[index].slug,
      content: req.body.content ?? articles[index].content,
      excerpt: req.body.excerpt ?? articles[index].excerpt,
      imageUrl: req.body.imageUrl ?? articles[index].imageUrl,
      author: req.body.author ?? articles[index].author,
      published: req.body.published ?? articles[index].published,
      updatedAt: new Date().toISOString()
    };
    
    articles[index] = updatedArticle;
    writeArticles(articles);
    res.json(updatedArticle);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update article' });
  }
});

// Delete article
app.delete('/api/articles/:id', (req, res) => {
  try {
    const articles = readArticles();
    const index = articles.findIndex(a => a.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ error: 'Article not found' });
    }
    
    // Delete associated image if exists
    const article = articles[index];
    if (article.imageUrl) {
      const imagePath = path.join(uploadsDir, path.basename(article.imageUrl));
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }
    
    articles.splice(index, 1);
    writeArticles(articles);
    res.json({ message: 'Article deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete article' });
  }
});

// Upload image
app.post('/api/upload', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    const imageUrl = `http://localhost:${PORT}/uploads/${req.file.filename}`;
    res.json({ imageUrl, filename: req.file.filename });
  } catch (error) {
    res.status(500).json({ error: 'Failed to upload file' });
  }
});

// Delete image
app.delete('/api/upload/:filename', (req, res) => {
  try {
    const imagePath = path.join(uploadsDir, req.params.filename);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
      res.json({ message: 'Image deleted successfully' });
    } else {
      res.status(404).json({ error: 'Image not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete image' });
  }
});

// Error handling middleware
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File is too large. Maximum size is 10MB.' });
    }
  }
  res.status(500).json({ error: error.message });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Uploads available at http://localhost:${PORT}/uploads/`);
});
