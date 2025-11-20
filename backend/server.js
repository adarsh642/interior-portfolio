const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Create uploads directory if it doesn't exist
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'));
    }
  }
});

// In-memory storage for photos (replace with database in production)
let photos = [];

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Bindu Designs API Server' });
});

// Get all photos
app.get('/api/photos', (req, res) => {
  res.json(photos);
});

// Upload photo
app.post('/api/upload', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const { category, areaLength, areaWidth, measurementUnit } = req.body;
    
    const newPhoto = {
      id: Date.now(),
      url: `http://localhost:${PORT}/uploads/${req.file.filename}`,
      filename: req.file.filename,
      category: category || 'Living Room',
      area: areaLength && areaWidth ? `${areaLength} × ${areaWidth} ${measurementUnit}` : null,
      uploadedAt: new Date().toISOString()
    };

    photos.push(newPhoto);
    
    res.status(201).json({
      message: 'Photo uploaded successfully',
      photo: newPhoto
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete photo
app.delete('/api/photos/:id', (req, res) => {
  try {
    const photoId = parseInt(req.params.id);
    const photoIndex = photos.findIndex(p => p.id === photoId);
    
    if (photoIndex === -1) {
      return res.status(404).json({ error: 'Photo not found' });
    }

    const photo = photos[photoIndex];
    
    // Delete file from disk
    const filePath = path.join(uploadDir, photo.filename);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    photos.splice(photoIndex, 1);
    
    res.json({ message: 'Photo deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Admin login endpoint
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  
  // Simple authentication (replace with proper auth in production)
  if (username === 'admin' && password === 'bindu2024') {
    res.json({ 
      success: true, 
      message: 'Login successful',
      token: 'demo-token-' + Date.now() // Replace with JWT in production
    });
  } else {
    res.status(401).json({ 
      success: false, 
      message: 'Invalid credentials' 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
