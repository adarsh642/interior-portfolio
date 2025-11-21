"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface Photo {
  _id: string;
  category: string;
  imageUrl: string;
  length?: number;
  width?: number;
  unit?: string;
  createdAt: string;
}

export default function SitePhotos() {
  const [selectedFilter, setSelectedFilter] = useState("All Photos");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [adminUsername, setAdminUsername] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [uploadCategory, setUploadCategory] = useState("Living Room");
  const [uploadImage, setUploadImage] = useState("");
  const [uploadDescription, setUploadDescription] = useState("");
  const [uploadMethod, setUploadMethod] = useState<"url" | "file">("url");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [areaLength, setAreaLength] = useState("");
  const [areaWidth, setAreaWidth] = useState("");
  const [measurementUnit, setMeasurementUnit] = useState("ft");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loadingPhotos, setLoadingPhotos] = useState(true);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [showAdminDashboard, setShowAdminDashboard] = useState(false);
  const [showAdminOptions, setShowAdminOptions] = useState(false);

  const filters = ["All Photos", "Living Room", "Bedroom", "Kitchen", "Before", "After", "3D Designs"];

  // Fetch photos from backend
  const fetchPhotos = async () => {
    try {
      setLoadingPhotos(true);
      const response = await fetch('https://interior-portfolio.onrender.com/api/photos');
      const data = await response.json();
      
      if (response.ok && data.success) {
        setPhotos(data.photos);
      } else {
        console.error('Failed to fetch photos:', data.message);
        setPhotos([]);
      }
    } catch (error) {
      console.error('Error fetching photos:', error);
      setPhotos([]);
    } finally {
      setLoadingPhotos(false);
    }
  };

  // Fetch photos on component mount
  useEffect(() => {
    fetchPhotos();
  }, []);

  // Delete photo handler
  const handleDeletePhoto = async (photoId: string, photoUrl: string) => {
    if (!confirm('Are you sure you want to delete this photo? This action cannot be undone.')) {
      return;
    }

    try {
      const response = await fetch(`https://interior-portfolio.onrender.com/api/photos/${photoId}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (response.ok) {
        alert('✅ Photo deleted successfully!');
        fetchPhotos();
        setSelectedImage(null);
      } else {
        alert(`❌ Delete failed: ${data.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('❌ Failed to delete photo. Please try again.');
    }
  };

  const filteredPhotos = selectedFilter === "All Photos" 
    ? photos 
    : photos.filter(photo => photo.category === selectedFilter);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminUsername === "admin" && adminPassword === "bindu2024") {
      setShowAdminLogin(false);
      setIsAdminLoggedIn(true);
      setAdminUsername("");
      setAdminPassword("");
      // Show admin options modal
      setShowAdminOptions(true);
    } else {
      alert("Invalid credentials! Please try again.");
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setSelectedFile(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        alert('Please select an image file');
      }
    }
  };

  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedFile) {
      setUploadStatus("Please select a file to upload");
      return;
    }

    try {
      setIsUploading(true);
      setUploadStatus("Uploading to Cloudinary...");
      
      const formData = new FormData();
      formData.append('image', selectedFile);
      formData.append('category', uploadCategory);
      formData.append('areaLength', areaLength);
      formData.append('areaWidth', areaWidth);
      formData.append('measurementUnit', measurementUnit);

      const response = await fetch('https://interior-portfolio.onrender.com/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setUploadStatus("✅ Photo uploaded successfully!");
        setTimeout(() => {
          setShowUploadForm(false);
          setUploadImage("");
          setUploadDescription("");
          setSelectedFile(null);
          setPreviewUrl("");
          setUploadMethod("file");
          setAreaLength("");
          setAreaWidth("");
          setMeasurementUnit("ft");
          setUploadStatus("");
          fetchPhotos();
        }, 2000);
      } else {
        setUploadStatus(`❌ Upload failed: ${data.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Upload error:', error);
      setUploadStatus("❌ Failed to upload photo. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < filteredPhotos.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  return (
    <div className="relative w-full">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-sm shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <div className="size-8 text-primary dark:text-accent">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_6_543)">
                    <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor" />
                    <path clipRule="evenodd" d="M7.24189 26.4066C7.31369 26.4411 7.64204 26.5637 8.52504 26.3738C9.59462 26.1438 11.0343 25.5311 12.7183 24.4963C14.7583 23.2426 17.0256 21.4503 19.238 19.238C21.4503 17.0256 23.2426 14.7583 24.4963 12.7183C25.5311 11.0343 26.1438 9.59463 26.3738 8.52504C26.5637 7.64204 26.4411 7.31369 26.4066 7.24189C26.345 7.21246 26.143 7.14535 25.6664 7.1918C24.9745 7.25925 23.9954 7.5498 22.7699 8.14278C20.3369 9.32007 17.3369 11.4915 14.4142 14.4142C11.4915 17.3369 9.32007 20.3369 8.14278 22.7699C7.5498 23.9954 7.25925 24.9745 7.1918 25.6664C7.14534 26.143 7.21246 26.345 7.24189 26.4066ZM29.9001 10.7285C29.4519 12.0322 28.7617 13.4172 27.9042 14.8126C26.465 17.1544 24.4686 19.6641 22.0664 22.0664C19.6641 24.4686 17.1544 26.465 14.8126 27.9042C13.4172 28.7617 12.0322 29.4519 10.7285 29.9001L21.5754 40.747C21.6001 40.7606 21.8995 40.931 22.8729 40.7217C23.9424 40.4916 25.3821 39.879 27.0661 38.8441C29.1062 37.5904 31.3734 35.7982 33.5858 33.5858C35.7982 31.3734 37.5904 29.1062 38.8441 27.0661C39.879 25.3821 40.4916 23.9425 40.7216 22.8729C40.931 21.8995 40.7606 21.6001 40.747 21.5754L29.9001 10.7285ZM29.2403 4.41187L43.5881 18.7597C44.9757 20.1473 44.9743 22.1235 44.6322 23.7139C44.2714 25.3919 43.4158 27.2666 42.252 29.1604C40.8128 31.5022 38.8165 34.012 36.4142 36.4142C34.012 38.8165 31.5022 40.8128 29.1604 42.252C27.2666 43.4158 25.3919 44.2714 23.7139 44.6322C22.1235 44.9743 20.1473 44.9757 18.7597 43.5881L4.41187 29.2403C3.29027 28.1187 3.08209 26.5973 3.21067 25.2783C3.34099 23.9415 3.8369 22.4852 4.54214 21.0277C5.96129 18.0948 8.43335 14.7382 11.5858 11.5858C14.7382 8.43335 18.0948 5.9613 21.0277 4.54214C22.4852 3.8369 23.9415 3.34099 25.2783 3.21067C26.5973 3.08209 28.1187 3.29028 29.2403 4.41187Z" fill="currentColor" fillRule="evenodd" />
                  </g>
                  <defs>
                    <clipPath id="clip0_6_543">
                      <rect fill="white" height="48" width="48" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h2 className="text-lg sm:text-2xl font-bold font-(family-name:--font-cormorant) text-text-light dark:text-text-dark">Bindu Designs</h2>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a className="text-sm font-medium hover:text-accent dark:hover:text-accent transition-colors" href="/">Home</a>
              <a className="text-sm font-medium hover:text-accent dark:hover:text-accent transition-colors" href="/#about">About</a>
              <a className="text-sm font-medium hover:text-accent dark:hover:text-accent transition-colors" href="/#services">Services</a>
              <a className="text-sm font-medium text-accent dark:text-accent transition-colors" href="/site-photos">Our Projects</a>
              <a className="text-sm font-medium hover:text-accent dark:hover:text-accent transition-colors" href="/#contact">Contact</a>
            </nav>

            {/* Desktop WhatsApp Button */}
            <a href="https://wa.me/919930866851" className="hidden lg:flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded h-10 px-6 bg-[#25D366] text-white text-sm font-bold shadow-sm hover:brightness-110 transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="truncate">For Enquiry</span>
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-neutral/20">
              <nav className="flex flex-col gap-4">
                <a className="text-sm font-medium hover:text-accent transition-colors" href="/">Home</a>
                <a className="text-sm font-medium hover:text-accent transition-colors" href="/#about">About</a>
                <a className="text-sm font-medium hover:text-accent transition-colors" href="/#services">Services</a>
                <a className="text-sm font-medium text-accent" href="/site-photos">Our Projects</a>
                <a className="text-sm font-medium hover:text-accent transition-colors" href="/#contact">Contact</a>
                <a href="https://wa.me/919930866851" className="flex items-center justify-center gap-2 rounded h-10 px-6 bg-[#25D366] text-white text-sm font-bold mt-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>For Enquiry</span>
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 px-4 py-10 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-7xl flex flex-col">
          {/* Page Heading */}
          <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
            <h1 className="font-playfair text-5xl font-bold text-text-light dark:text-text-dark md:text-6xl lg:text-7xl">Our Projects</h1>
            <p className="max-w-xl text-base text-text-light/70 dark:text-text-dark/70">A collection of real spaces designed and captured by Bindu Designs.</p>
            <div className="mt-2 h-0.5 w-24 bg-accent"></div>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 py-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 text-sm font-medium shadow-sm transition-all ${
                  selectedFilter === filter
                    ? "bg-accent text-white shadow-md"
                    : "border border-neutral/50 bg-white dark:bg-gray-800 text-text-light dark:text-text-dark hover:bg-neutral/10 dark:hover:bg-gray-700"
                }`}
              >
                {filter}
              </button>
            ))}
            
            {/* Add Photo Button for Admin */}
            {!isAdminLoggedIn ? (
              <button
                onClick={() => setShowAdminLogin(true)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-md hover:bg-primary/90 transition-all hover:scale-110"
                title="Admin Login"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            ) : (
              <>
                <button
                  onClick={() => setShowUploadForm(true)}
                  className="flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-white shadow-md hover:bg-primary/90 transition-all hover:scale-105 px-4"
                  title="Upload New Photo"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <span className="text-sm font-medium">Upload</span>
                </button>
                <button
                  onClick={() => setShowAdminDashboard(true)}
                  className="flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-accent text-white shadow-md hover:bg-accent/90 transition-all hover:scale-105 px-4"
                  title="Manage All Photos"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                  <span className="text-sm font-medium">Manage ({photos.length})</span>
                </button>
              </>
            )}
          </div>

          {/* Image Grid */}
          {loadingPhotos ? (
            <div className="flex justify-center items-center py-20">
              <p className="text-lg text-text-light/70 dark:text-text-dark/70">Loading photos...</p>
            </div>
          ) : filteredPhotos.length === 0 ? (
            <div className="flex flex-col justify-center items-center py-20">
              <p className="text-lg text-text-light/70 dark:text-text-dark/70 mb-4">No photos found in this category.</p>
              {selectedFilter === "All Photos" && (
                <p className="text-sm text-text-light/60 dark:text-text-dark/60">Upload your first photo using the admin panel!</p>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPhotos.map((photo, index) => (
                <div
                  key={photo._id}
                  className="group flex cursor-pointer flex-col"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="h-auto w-full overflow-hidden rounded-xl bg-neutral/20 dark:bg-gray-800 shadow-md transition-shadow duration-300 hover:shadow-xl">
                    <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                      <Image
                        src={photo.imageUrl}
                        alt={`${photo.category} design`}
                        fill
                        className="object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                      />
                      {isAdminLoggedIn && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeletePhoto(photo._id, photo.imageUrl);
                          }}
                          className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg transition-all hover:scale-110 opacity-0 group-hover:opacity-100"
                          title="Delete Photo"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                  {photo.length && photo.width && (
                    <p className="mt-2 text-base text-center text-text-light/80 dark:text-text-dark/80 font-semibold">📐 Area: {photo.length} × {photo.width} {photo.unit || 'ft'}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Meta Text */}
          <div className="py-8">
            <p className="text-center text-sm text-text-light/70 dark:text-text-dark/70">Images shown here are from completed interior design projects.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-neutral/50 dark:border-neutral/20 bg-neutral/10 dark:bg-gray-900/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 text-center sm:flex-row">
          <p className="text-sm text-text-light/70 dark:text-text-dark/70">© Bindu Designs – All rights reserved.</p>
          <div className="flex items-center justify-center gap-4">
            <a className="text-text-light/70 dark:text-text-dark/70 transition-colors hover:text-accent dark:hover:text-accent" href="#">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
            <a className="text-text-light/70 dark:text-text-dark/70 transition-colors hover:text-accent dark:hover:text-accent" href="#">
              <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z" fillRule="evenodd" />
              </svg>
            </a>
            <a className="text-text-light/70 dark:text-text-dark/70 transition-colors hover:text-accent dark:hover:text-accent" href="#">
              <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

      {/* Admin Login Modal */}
      {showAdminLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-xl bg-white dark:bg-gray-900 p-8 shadow-2xl">
            <button
              onClick={() => setShowAdminLogin(false)}
              className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-gray-800 text-text-light dark:text-text-dark shadow-lg transition-transform hover:scale-110"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-6 text-center">Admin Login</h2>
            
            <form onSubmit={handleAdminLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">Username</label>
                <input
                  type="text"
                  value={adminUsername}
                  onChange={(e) => setAdminUsername(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-neutral/50 bg-white dark:bg-gray-800 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter admin username"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">Password</label>
                <input
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-neutral/50 bg-white dark:bg-gray-800 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter admin password"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Admin Options Modal */}
      {showAdminOptions && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-xl bg-white dark:bg-gray-900 p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4 text-center">Admin Panel</h2>
            <p className="text-text-light/70 dark:text-text-dark/70 mb-6 text-center">What would you like to do?</p>
            
            <div className="space-y-4">
              <button
                onClick={() => {
                  setShowAdminOptions(false);
                  setShowUploadForm(true);
                }}
                className="w-full py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Upload New Photo</span>
              </button>
              
              <button
                onClick={() => {
                  setShowAdminOptions(false);
                  setShowAdminDashboard(true);
                }}
                className="w-full py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                <span>Manage All Photos ({photos.length})</span>
              </button>
              
              <button
                onClick={() => setShowAdminOptions(false)}
                className="w-full py-3 bg-neutral/20 dark:bg-gray-800 text-text-light dark:text-text-dark rounded-lg font-semibold hover:bg-neutral/30 dark:hover:bg-gray-700 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Admin Options Modal */}
      {showAdminOptions && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-xl bg-white dark:bg-gray-900 p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4 text-center">Admin Panel</h2>
            <p className="text-text-light/70 dark:text-text-dark/70 mb-6 text-center">What would you like to do?</p>
            
            <div className="space-y-4">
              <button
                onClick={() => {
                  setShowAdminOptions(false);
                  setShowUploadForm(true);
                }}
                className="w-full py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Upload New Photo</span>
              </button>
              
              <button
                onClick={() => {
                  setShowAdminOptions(false);
                  setShowAdminDashboard(true);
                }}
                className="w-full py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                <span>Manage All Photos ({photos.length})</span>
              </button>
              
              <button
                onClick={() => setShowAdminOptions(false)}
                className="w-full py-3 bg-neutral/20 dark:bg-gray-800 text-text-light dark:text-text-dark rounded-lg font-semibold hover:bg-neutral/30 dark:hover:bg-gray-700 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Admin Dashboard Modal */}
      {showAdminDashboard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-6xl rounded-xl bg-white dark:bg-gray-900 p-6 shadow-2xl my-8">
            <button
              onClick={() => setShowAdminDashboard(false)}
              className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-gray-800 text-text-light dark:text-text-dark shadow-lg transition-transform hover:scale-110"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-text-light dark:text-text-dark">Admin Photo Management</h2>
              <button
                onClick={() => {
                  setShowAdminDashboard(false);
                  setShowUploadForm(true);
                }}
                className="px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Upload New Photo
              </button>
            </div>

            <div className="mb-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-300">
                <strong>Total Photos:</strong> {photos.length} | Click on any photo to delete it from your project
              </p>
            </div>

            {loadingPhotos ? (
              <div className="flex justify-center items-center py-20">
                <p className="text-lg text-text-light/70 dark:text-text-dark/70">Loading photos...</p>
              </div>
            ) : photos.length === 0 ? (
              <div className="flex flex-col justify-center items-center py-20">
                <p className="text-lg text-text-light/70 dark:text-text-dark/70 mb-4">No photos uploaded yet.</p>
                <button
                  onClick={() => {
                    setShowAdminDashboard(false);
                    setShowUploadForm(true);
                  }}
                  className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all"
                >
                  Upload Your First Photo
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-h-[600px] overflow-y-auto pr-2">
                {photos.map((photo) => (
                  <div
                    key={photo._id}
                    className="group relative rounded-xl bg-neutral/20 dark:bg-gray-800 shadow-md hover:shadow-xl transition-all"
                  >
                    <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                      <Image
                        src={photo.imageUrl}
                        alt={`${photo.category} design`}
                        fill
                        className="object-cover rounded-t-xl"
                      />
                      <button
                        onClick={() => handleDeletePhoto(photo._id, photo.imageUrl)}
                        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg transition-all hover:scale-110 opacity-0 group-hover:opacity-100"
                        title="Delete Photo"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-semibold text-text-light dark:text-text-dark mb-1">
                        📂 {photo.category}
                      </p>
                      {photo.length && photo.width && (
                        <p className="text-xs text-text-light/70 dark:text-text-dark/70">
                          📐 {photo.length} × {photo.width} {photo.unit || 'ft'}
                        </p>
                      )}
                      <p className="text-xs text-text-light/60 dark:text-text-dark/60 mt-1">
                        🕒 {new Date(photo.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 flex justify-between items-center pt-4 border-t border-neutral/20 dark:border-gray-700">
              <button
                onClick={() => setShowAdminDashboard(false)}
                className="px-6 py-2 bg-neutral/20 dark:bg-gray-800 text-text-light dark:text-text-dark rounded-lg font-semibold hover:bg-neutral/30 dark:hover:bg-gray-700 transition-all"
              >
                Close Dashboard
              </button>
              <button
                onClick={() => {
                  setIsAdminLoggedIn(false);
                  setShowAdminDashboard(false);
                }}
                className="px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upload Form Modal */}
      {showUploadForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-md rounded-xl bg-white dark:bg-gray-900 p-6 shadow-2xl my-8">
            <button
              onClick={() => setShowUploadForm(false)}
              className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-gray-800 text-text-light dark:text-text-dark shadow-lg transition-transform hover:scale-110"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h2 className="text-2xl font-bold mb-4 text-center bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">Upload New Photo</h2>
            
            <form onSubmit={handleUploadSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">Category</label>
                <select
                  value={uploadCategory}
                  onChange={(e) => setUploadCategory(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-neutral/50 bg-white dark:bg-gray-800 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="Living Room">Living Room</option>
                  <option value="Bedroom">Bedroom</option>
                  <option value="Kitchen">Kitchen</option>
                  <option value="Before">Before</option>
                  <option value="After">After</option>
                  <option value="3D Designs">3D Designs</option>
                </select>
              </div>
              
              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">Select Image from Device</label>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="fileInput"
                    required
                  />
                  <label
                    htmlFor="fileInput"
                    className="flex items-center justify-center w-full px-4 py-4 border-2 border-dashed border-neutral/50 rounded-lg cursor-pointer hover:border-primary transition-all bg-white dark:bg-gray-800"
                  >
                    <div className="text-center">
                      <svg className="mx-auto h-8 w-8 text-text-light/50 dark:text-text-dark/50 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      {selectedFile ? (
                        <p className="text-xs text-primary font-medium">{selectedFile.name}</p>
                      ) : (
                        <>
                          <p className="text-xs text-text-light dark:text-text-dark font-medium">Click to upload image</p>
                          <p className="text-xs text-text-light/70 dark:text-text-dark/70 mt-0.5">PNG, JPG, GIF up to 10MB</p>
                        </>
                      )}
                    </div>
                  </label>
                </div>
                
                {/* Image Specifications */}
                <div className="mt-2 p-2 rounded-lg bg-white dark:bg-gray-800 border border-neutral/20 dark:border-gray-700">
                  <p className="text-xs font-medium text-text-light dark:text-text-dark mb-0.5">Recommended Image Specifications:</p>
                  <ul className="text-xs text-text-light/70 dark:text-text-dark/70 space-y-0.5">
                    <li>• <strong>Aspect Ratio:</strong> 4:3 or 16:9 (e.g., 1600x1200px or 1920x1080px)</li>
                    <li>• <strong>Minimum Size:</strong> 1200x900px for best quality</li>
                    <li>• <strong>File Format:</strong> JPG, PNG, or WebP</li>
                    <li>• <strong>File Size:</strong> Maximum 10MB</li>
                  </ul>
                </div>
              </div>
              
              {/* Area Dimensions */}
              <div>
                <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-1.5">Area Dimensions (Optional)</label>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <input
                      type="number"
                      value={areaLength}
                      onChange={(e) => setAreaLength(e.target.value)}
                      className="w-full px-3 py-1.5 text-sm rounded-lg border border-neutral/50 bg-white dark:bg-gray-800 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Length"
                      step="0.1"
                      min="0"
                    />
                  </div>
                  <span className="flex items-center text-text-light dark:text-text-dark font-medium text-sm">×</span>
                  <div className="flex-1">
                    <input
                      type="number"
                      value={areaWidth}
                      onChange={(e) => setAreaWidth(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-neutral/50 bg-white dark:bg-gray-800 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Width"
                      step="0.1"
                      min="0"
                    />
                  </div>
                  <div className="w-24">
                    <select
                      value={measurementUnit}
                      onChange={(e) => setMeasurementUnit(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-neutral/50 bg-white dark:bg-gray-800 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="ft">ft</option>
                      <option value="m">m</option>
                      <option value="cm">cm</option>
                      <option value="in">in</option>
                    </select>
                  </div>
                </div>
                <p className="text-xs text-text-light/70 dark:text-text-dark/70 mt-1">Example: 12 × 15 ft</p>
              </div>
              
              {previewUrl && (
                <div>
                  <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">Preview</label>
                  <div className="relative w-full h-48 rounded-lg overflow-hidden bg-neutral/20 dark:bg-gray-800">
                    <Image
                      src={previewUrl}
                      alt="Preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
              
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowUploadForm(false)}
                  className="flex-1 py-3 bg-neutral/20 dark:bg-gray-800 text-text-light dark:text-text-dark rounded-lg font-semibold hover:bg-neutral/30 dark:hover:bg-gray-700 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isUploading}
                  className={`flex-1 py-3 rounded-lg font-semibold text-white transition-all ${
                    isUploading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-primary hover:bg-primary/90'
                  }`}
                >
                  {isUploading ? 'Uploading...' : 'Upload Photo'}
                </button>
              </div>
              
              {uploadStatus && (
                <div className={`p-3 rounded-lg text-center font-medium ${uploadStatus.includes('✅') ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' : uploadStatus.includes('❌') ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'}`}>
                  {uploadStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      )}

      {/* Photo Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl rounded-xl bg-white dark:bg-gray-900 p-4 shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-gray-800 text-text-light dark:text-text-dark shadow-lg transition-transform hover:scale-110"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="relative">
              {selectedImage > 0 && (
                <button
                  onClick={handlePrev}
                  className="absolute top-1/2 left-4 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/50 dark:bg-gray-900/50 text-text-light dark:text-text-dark backdrop-blur-sm transition-transform hover:scale-110 hover:bg-white/75 dark:hover:bg-gray-900/75 z-10"
                >
                  <span className="material-symbols-outlined">arrow_back_ios_new</span>
                </button>
              )}
              <div className="relative w-full overflow-hidden rounded-lg bg-neutral/20 dark:bg-gray-700" style={{ aspectRatio: "16/9" }}>
                <Image
                  src={filteredPhotos[selectedImage].imageUrl}
                  alt={`${filteredPhotos[selectedImage].category} design`}
                  fill
                  className="object-cover"
                />
                {isAdminLoggedIn && (
                  <button
                    onClick={() => handleDeletePhoto(filteredPhotos[selectedImage]._id, filteredPhotos[selectedImage].imageUrl)}
                    className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-lg px-4 py-2 shadow-lg transition-all hover:scale-105 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Delete Photo
                  </button>
                )}
              </div>
              {selectedImage < filteredPhotos.length - 1 && (
                <button
                  onClick={handleNext}
                  className="absolute top-1/2 right-4 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/50 dark:bg-gray-900/50 text-text-light dark:text-text-dark backdrop-blur-sm transition-transform hover:scale-110 hover:bg-white/75 dark:hover:bg-gray-900/75 z-10"
                >
                  <span className="material-symbols-outlined">arrow_forward_ios</span>
                </button>
              )}
            </div>
            <p className="mt-4 text-center text-sm text-text-light/70 dark:text-text-dark/70">{filteredPhotos[selectedImage].category}</p>
          </div>
        </div>
      )}
    </div>
  );
}
