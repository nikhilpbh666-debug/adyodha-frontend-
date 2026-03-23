import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">SparkClean</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
            <a href="#why-us" className="text-gray-700 hover:text-blue-600 font-medium">Why Us</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Book Now
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t">
            <a href="#home" className="block py-2 text-gray-700 hover:text-blue-600">Home</a>
            <a href="#services" className="block py-2 text-gray-700 hover:text-blue-600">Services</a>
            <a href="#why-us" className="block py-2 text-gray-700 hover:text-blue-600">Why Us</a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</a>
            <a href="#contact" className="block mt-3 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold text-center">
              Book Now
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
