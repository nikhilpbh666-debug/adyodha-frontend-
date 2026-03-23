import { useState } from 'react'

// API base URL - works for both development and production
const API_BASE_URL = import.meta.env.VITE_API_URL

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'home-cleaning',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [apiError, setApiError] = useState('')

  // Email validation regex
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Validate form fields (client-side)
  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    return newErrors
  }

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
    // Clear API error when user types
    if (apiError) {
      setApiError('')
    }
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Client-side validation
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Clear previous errors
    setErrors({})
    setApiError('')
    setIsLoading(true)

    try {
      // Submit to backend API
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        // Handle validation errors from backend
        if (data.errors) {
          setErrors(data.errors)
          setApiError(data.message || 'Validation failed. Please check your input.')
        } else {
          setApiError(data.message || 'Failed to submit contact form. Please try again.')
        }
        return
      }

      // Success response
      setIsSubmitted(true)

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'home-cleaning',
        message: '',
      })

      // Hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error('Contact form error:', error)
      setApiError(
        'Unable to reach the server. Please check your connection and try again.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600">Let us help you keep your space sparkling clean</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>

            <div className="space-y-6">
              <div>
                <p className="text-gray-600 mb-2 font-semibold">Phone</p>
                <a href="tel:+15551234567" className="text-blue-600 font-semibold text-lg hover:text-blue-700">
                  +1 (555) 123-4567
                </a>
              </div>

              <div>
                <p className="text-gray-600 mb-2 font-semibold">Email</p>
                <a href="mailto:hello@sparkcleanservices.com" className="text-blue-600 font-semibold text-lg hover:text-blue-700">
                  hello@sparkcleanservices.com
                </a>
              </div>

              <div>
                <p className="text-gray-600 mb-2 font-semibold">Address</p>
                <p className="text-gray-900 font-semibold">245 West Elm Street, Dallas, TX</p>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-700">
                  <strong>Hours:</strong><br />
                  Monday - Friday: 8AM - 6PM<br />
                  Saturday: 9AM - 4PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form - Now Functional */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>

            {/* Success Message */}
            {isSubmitted && (
              <div className="form-success-message mb-6">
                <p className="text-sm text-green-800">
                  ✓ Thank you! We've received your message and will contact you within 24 hours.
                </p>
              </div>
            )}

            {/* API Error Message */}
            {apiError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-800">{apiError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-900 font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                    errors.name ? 'form-input-error' : 'border-gray-300'
                  }`}
                />
                {errors.name && <p className="form-error-text">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-900 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                    errors.email ? 'form-input-error' : 'border-gray-300'
                  }`}
                />
                {errors.email && <p className="form-error-text">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-gray-900 font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                    errors.phone ? 'form-input-error' : 'border-gray-300'
                  }`}
                />
                {errors.phone && <p className="form-error-text">{errors.phone}</p>}
              </div>

              {/* Service Type */}
              <div>
                <label htmlFor="service" className="block text-gray-900 font-semibold mb-2">
                  Service Type
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition bg-white"
                >
                  <option value="home-cleaning">Home Cleaning</option>
                  <option value="deep-cleaning">Deep Cleaning</option>
                  <option value="office-cleaning">Office Cleaning</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-900 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your cleaning needs..."
                  rows="4"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-none ${
                    errors.message ? 'form-input-error' : 'border-gray-300'
                  }`}
                />
                {errors.message && <p className="form-error-text">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 rounded-lg font-semibold transition mt-6 ${
                  isLoading
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isLoading ? '🔄 Submitting...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
