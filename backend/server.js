require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const nodemailer = require("nodemailer");
const connectDB = require("./db");
const Review = require("./models/Review");
const Photo = require("./models/Photo");
const cloudinary = require("./cloudinary");

const app = express();
const PORT = process.env.PORT || 4000;

// DB connect
connectDB();

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Middleware
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  process.env.FRONTEND_URL,
  'https://interior-portfolio-adarsh642.vercel.app',
  'https://interior-portfolio.vercel.app'
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, curl, postman)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1 || allowedOrigins.some(allowed => origin?.startsWith(allowed))) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(express.json());

// Configure multer for memory storage (for Cloudinary)
const upload = multer({
  storage: multer.memoryStorage(),
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

// Routes
app.get("/", (req, res) => {
  res.send("Interior design backend running with MongoDB ✅");
});

// Test email endpoint
app.get("/api/test-email", async (req, res) => {
  try {
    const mailOptions = {
      from: `"Bindu Designs Test" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "Test Email - Bindu Designs",
      html: `
        <h2>Test Email</h2>
        <p>This is a test email to verify email configuration is working.</p>
        <p>Time: ${new Date().toLocaleString()}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.json({
      success: true,
      message: "Test email sent successfully!",
      sentTo: process.env.ADMIN_EMAIL
    });
  } catch (err) {
    console.error("Email Error:", err.message);
    return res.status(500).json({
      success: false,
      message: "Failed to send test email.",
      error: err.message
    });
  }
});

// Get all photos from MongoDB
app.get('/api/photos', async (req, res) => {
  try {
    const photos = await Photo.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: photos.length,
      photos
    });
  } catch (error) {
    console.error('Error fetching photos:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to fetch photos',
      error: error.message 
    });
  }
});

// Upload photo to Cloudinary and save to MongoDB
app.post('/api/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const { category, areaLength, areaWidth, measurementUnit } = req.body;
    
    // Upload image buffer to Cloudinary
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: 'bindu-designs-photos',
        resource_type: 'image'
      },
      async (error, result) => {
        if (error) {
          console.error('Cloudinary upload error:', error);
          return res.status(500).json({ error: 'Failed to upload image' });
        }

        try {
          // Save photo data to MongoDB
          const photo = await Photo.create({
            category: category || 'Living Room',
            imageUrl: result.secure_url,
            length: areaLength || null,
            width: areaWidth || null,
            unit: measurementUnit || null,
          });

          res.status(201).json({
            message: 'Photo uploaded successfully',
            photo
          });
        } catch (dbError) {
          console.error('Database error:', dbError);
          res.status(500).json({ error: 'Failed to save photo' });
        }
      }
    );

    // Pipe the buffer to Cloudinary
    const bufferStream = require('stream').Readable.from(req.file.buffer);
    bufferStream.pipe(uploadStream);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete photo from Cloudinary and MongoDB
app.delete('/api/photos/:id', async (req, res) => {
  try {
    const photoId = req.params.id;
    
    // Find photo in MongoDB
    const photo = await Photo.findById(photoId);
    
    if (!photo) {
      return res.status(404).json({ error: 'Photo not found' });
    }

    // Extract public_id from Cloudinary URL
    const urlParts = photo.imageUrl.split('/');
    const publicIdWithExt = urlParts.slice(-2).join('/');
    const publicId = publicIdWithExt.split('.')[0];

    // Delete from Cloudinary
    await cloudinary.uploader.destroy(publicId);

    // Delete from MongoDB
    await Photo.findByIdAndDelete(photoId);
    
    res.json({ message: 'Photo deleted successfully' });
  } catch (error) {
    console.error('Delete error:', error);
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

// Enquiry endpoint
app.post("/api/enquiry", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      projectType,
      budgetRange,
      message,
    } = req.body;

    if (!name || !email || !phone || !projectType) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const mailOptions = {
      from: `"Bindu Designs" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Project Enquiry - Bindu Designs",
      html: `
        <h2>New Project Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Budget Range:</strong> ${budgetRange || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No message provided"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.json({
      success: true,
      message: "Enquiry successfully sent!",
    });
  } catch (err) {
    console.error("Email Error:", err.message);
    return res.status(500).json({
      success: false,
      message: "Failed to send enquiry.",
    });
  }
});

// Submit review endpoint
app.post("/api/review", async (req, res) => {
  try {
    const { name, email, rating, review } = req.body;

    if (!name || !email || !rating || !review) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields.",
      });
    }

    const newReview = new Review({
      name,
      email,
      rating,
      review,
    });

    await newReview.save();

    return res.json({
      success: true,
      message: "Review submitted successfully!",
    });
  } catch (err) {
    console.error("Review error:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to submit review.",
    });
  }
});

// Get all reviews endpoint
app.get("/api/reviews", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 }); // newest first
    return res.json({
      success: true,
      count: reviews.length,
      reviews,
    });
  } catch (err) {
    console.error("Fetch reviews error:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch reviews.",
    });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
