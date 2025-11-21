"use client";
import { useState } from "react";
import Link from "next/link";

export default function AdminAPI() {
  const [activeTab, setActiveTab] = useState("test-email");
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Test Email
  const [testEmailData, setTestEmailData] = useState({
    to: "",
    subject: "Test Email from Bindu Designs",
    message: "This is a test email from the admin panel.",
  });

  // Test Enquiry
  const [enquiryData, setEnquiryData] = useState({
    name: "Test User",
    email: "test@example.com",
    phone: "1234567890",
    projectType: "Residential",
    budgetRange: "10L-20L",
    message: "This is a test enquiry message.",
  });

  // Test Review
  const [reviewData, setReviewData] = useState({
    name: "Test Reviewer",
    email: "reviewer@example.com",
    rating: 5,
    review: "This is a test review message.",
  });

  const API_BASE_URL = "https://interior-portfolio.onrender.com";

  const handleTestEmail = async () => {
    setLoading(true);
    setError("");
    setResponse(null);

    try {
      const res = await fetch(`${API_BASE_URL}/api/test-email`, {
        method: "GET",
      });
      const data = await res.json();
      setResponse(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleTestEnquiry = async () => {
    setLoading(true);
    setError("");
    setResponse(null);

    try {
      const res = await fetch(`${API_BASE_URL}/api/enquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enquiryData),
      });
      const data = await res.json();
      setResponse(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGetPhotos = async () => {
    setLoading(true);
    setError("");
    setResponse(null);

    try {
      const res = await fetch(`${API_BASE_URL}/api/photos`);
      const data = await res.json();
      setResponse(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleTestLogin = async () => {
    setLoading(true);
    setError("");
    setResponse(null);

    try {
      const res = await fetch(`${API_BASE_URL}/api/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "admin",
          password: "bindu2024",
        }),
      });
      const data = await res.json();
      setResponse(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleTestReview = async () => {
    setLoading(true);
    setError("");
    setResponse(null);

    try {
      const res = await fetch(`${API_BASE_URL}/api/review`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      });
      const data = await res.json();
      setResponse(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGetReviews = async () => {
    setLoading(true);
    setError("");
    setResponse(null);

    try {
      const res = await fetch(`${API_BASE_URL}/api/reviews`);
      const data = await res.json();
      setResponse(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGetEnquiries = async () => {
    setLoading(true);
    setError("");
    setResponse(null);

    try {
      const res = await fetch(`${API_BASE_URL}/api/enquiries`);
      const data = await res.json();
      setResponse(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Admin API Testing Panel
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Test all backend API endpoints from this interface
              </p>
            </div>
            <Link
              href="/"
              className="bg-[#D4AF8B] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>

        {/* API Status */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            API Connection Status
          </h2>
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 dark:text-gray-300">
              Backend API: {API_BASE_URL}
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-4 px-6 overflow-x-auto">
              {[
                { id: "test-email", label: "Test Email" },
                { id: "enquiry", label: "Test Enquiry" },
                { id: "get-enquiries", label: "View Enquiries" },
                { id: "photos", label: "Get Photos" },
                { id: "login", label: "Test Login" },
                { id: "review", label: "Submit Review" },
                { id: "get-reviews", label: "Get Reviews" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? "border-[#D4AF8B] text-[#D4AF8B]"
                      : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Test Email Tab */}
            {activeTab === "test-email" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Test Email Sending
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Send a test email to verify the email configuration is working.
                </p>
                <button
                  onClick={handleTestEmail}
                  disabled={loading}
                  className="bg-[#D4AF8B] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Test Email"}
                </button>
              </div>
            )}

            {/* Test Enquiry Tab */}
            {activeTab === "enquiry" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Test Enquiry Submission
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    value={enquiryData.name}
                    onChange={(e) =>
                      setEnquiryData({ ...enquiryData, name: e.target.value })
                    }
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={enquiryData.email}
                    onChange={(e) =>
                      setEnquiryData({ ...enquiryData, email: e.target.value })
                    }
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    value={enquiryData.phone}
                    onChange={(e) =>
                      setEnquiryData({ ...enquiryData, phone: e.target.value })
                    }
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                  <select
                    value={enquiryData.projectType}
                    onChange={(e) =>
                      setEnquiryData({
                        ...enquiryData,
                        projectType: e.target.value,
                      })
                    }
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Renovation">Renovation</option>
                  </select>
                  <select
                    value={enquiryData.budgetRange}
                    onChange={(e) =>
                      setEnquiryData({
                        ...enquiryData,
                        budgetRange: e.target.value,
                      })
                    }
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="Below 5L">Below 5L</option>
                    <option value="5L-10L">5L-10L</option>
                    <option value="10L-20L">10L-20L</option>
                    <option value="20L+">20L+</option>
                  </select>
                  <textarea
                    placeholder="Message"
                    value={enquiryData.message}
                    onChange={(e) =>
                      setEnquiryData({
                        ...enquiryData,
                        message: e.target.value,
                      })
                    }
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white md:col-span-2"
                    rows={3}
                  />
                </div>
                <button
                  onClick={handleTestEnquiry}
                  disabled={loading}
                  className="bg-[#D4AF8B] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Submit Test Enquiry"}
                </button>
              </div>
            )}

            {/* Get Photos Tab */}
            {activeTab === "photos" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Fetch All Photos
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Retrieve all uploaded photos from the backend.
                </p>
                <button
                  onClick={handleGetPhotos}
                  disabled={loading}
                  className="bg-[#D4AF8B] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Fetching..." : "Get Photos"}
                </button>
              </div>
            )}

            {/* Get Enquiries Tab */}
            {activeTab === "get-enquiries" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  View All Enquiries
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  See all enquiries submitted through the contact form (saved in database).
                </p>
                <button
                  onClick={handleGetEnquiries}
                  disabled={loading}
                  className="bg-[#D4AF8B] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Fetching..." : "Get All Enquiries"}
                </button>
                {response && response.enquiries && (
                  <div className="mt-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
                      <p className="text-blue-800 dark:text-blue-300 font-semibold">
                        Total Enquiries: {response.count}
                      </p>
                    </div>
                    <div className="space-y-4">
                      {response.enquiries.map((enq: any) => (
                        <div
                          key={enq._id}
                          className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4 shadow-sm"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                              <p className="text-sm text-gray-600 dark:text-gray-400">Name</p>
                              <p className="font-semibold text-gray-900 dark:text-white">{enq.name}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                              <p className="font-semibold text-gray-900 dark:text-white">{enq.email}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                              <p className="font-semibold text-gray-900 dark:text-white">{enq.phone}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 dark:text-gray-400">Project Type</p>
                              <p className="font-semibold text-gray-900 dark:text-white">{enq.projectType}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 dark:text-gray-400">Budget</p>
                              <p className="font-semibold text-gray-900 dark:text-white">{enq.budgetRange || 'N/A'}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 dark:text-gray-400">Status</p>
                              <p className={`font-semibold ${enq.emailSent ? 'text-green-600 dark:text-green-400' : 'text-orange-600 dark:text-orange-400'}`}>
                                {enq.emailSent ? '✅ Email Sent' : '⏳ Email Pending'}
                              </p>
                            </div>
                          </div>
                          {enq.message && (
                            <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
                              <p className="text-sm text-gray-600 dark:text-gray-400">Message</p>
                              <p className="text-gray-900 dark:text-white mt-1">{enq.message}</p>
                            </div>
                          )}
                          <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Submitted: {new Date(enq.createdAt).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Test Login Tab */}
            {activeTab === "login" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Test Admin Login
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Test the admin authentication endpoint (username: admin, password: bindu2024).
                </p>
                <button
                  onClick={handleTestLogin}
                  disabled={loading}
                  className="bg-[#D4AF8B] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Testing..." : "Test Login"}
                </button>
              </div>
            )}

            {/* Submit Review Tab */}
            {activeTab === "review" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Submit Test Review
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    value={reviewData.name}
                    onChange={(e) =>
                      setReviewData({ ...reviewData, name: e.target.value })
                    }
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={reviewData.email}
                    onChange={(e) =>
                      setReviewData({ ...reviewData, email: e.target.value })
                    }
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Rating: {reviewData.rating} ⭐
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={reviewData.rating}
                      onChange={(e) =>
                        setReviewData({ ...reviewData, rating: Number(e.target.value) })
                      }
                      className="w-full"
                    />
                  </div>
                  <textarea
                    placeholder="Review"
                    value={reviewData.review}
                    onChange={(e) =>
                      setReviewData({ ...reviewData, review: e.target.value })
                    }
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white md:col-span-2"
                    rows={3}
                  />
                </div>
                <button
                  onClick={handleTestReview}
                  disabled={loading}
                  className="bg-[#D4AF8B] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Submit Review"}
                </button>
              </div>
            )}

            {/* Get Reviews Tab */}
            {activeTab === "get-reviews" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Fetch All Reviews
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Retrieve all submitted reviews from the database.
                </p>
                <button
                  onClick={handleGetReviews}
                  disabled={loading}
                  className="bg-[#D4AF8B] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Fetching..." : "Get All Reviews"}
                </button>
              </div>
            )}

            {/* Response Display */}
            {(response || error) && (
              <div className="mt-6 p-4 rounded-lg bg-gray-50 dark:bg-gray-900">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Response:
                </h4>
                {error ? (
                  <div className="text-red-600 dark:text-red-400">
                    Error: {error}
                  </div>
                ) : (
                  <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
                    {JSON.stringify(response, null, 2)}
                  </pre>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mt-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/site-photos"
              className="text-center bg-gray-100 dark:bg-gray-700 p-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <div className="text-[#D4AF8B] font-semibold">Site Photos</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Manage photos
              </div>
            </Link>
            <Link
              href="/"
              className="text-center bg-gray-100 dark:bg-gray-700 p-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <div className="text-[#D4AF8B] font-semibold">Home Page</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                View homepage
              </div>
            </Link>
            <div className="text-center bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <div className="text-[#D4AF8B] font-semibold">Backend Server</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Port 4000
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
