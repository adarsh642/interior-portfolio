# Bindu Designs Backend API

Backend server for the Bindu Designs interior portfolio website.

## Features

- Photo upload API with multer
- Image file validation (max 10MB, image types only)
- Photo management (upload, list, delete)
- Admin authentication
- CORS enabled for frontend integration
- Area dimensions storage for photos

## Setup

1. Install dependencies:
```bash
cd backend
npm install
```

2. Configure environment variables:
Edit `.env` file with your settings

3. Start the server:
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### GET /api/photos
Get all uploaded photos

### POST /api/upload
Upload a new photo
- Requires: multipart/form-data with `image` file
- Optional fields: `category`, `areaLength`, `areaWidth`, `measurementUnit`

### DELETE /api/photos/:id
Delete a photo by ID

### POST /api/admin/login
Admin authentication
- Body: `{ username, password }`

## Integration with Frontend

The frontend Next.js app runs on port 3000, and this backend API runs on port 5000. Make sure both servers are running for full functionality.

## Production Deployment

For production:
1. Use a proper database (MongoDB, PostgreSQL, etc.) instead of in-memory storage
2. Implement JWT authentication
3. Use cloud storage (AWS S3, Cloudinary) for images
4. Add rate limiting and security headers
5. Set up HTTPS
6. Update CORS settings
