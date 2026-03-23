export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center py-12 md:py-0">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Professional Cleaning Services for Homes and Offices
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Reliable, affordable, and same-day cleaning solutions tailored to your schedule.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 mb-10">
              <div>
                <p className="text-3xl font-bold text-blue-600">500+</p>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">8+</p>
                <p className="text-gray-600">Years in Service</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">24h</p>
                <p className="text-gray-600">Quick Response</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-center"
              >
                Book a Service
              </a>
              <a
                href="#contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition text-center"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="hidden md:flex items-center justify-center">
            <svg className="w-full h-full max-w-md" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Professional cleaning illustration">
              {/* Background Circle */}
              <circle cx="200" cy="200" r="180" fill="#E0E7FF" opacity="0.6"/>
              <circle cx="200" cy="200" r="150" fill="#DDD6FE" opacity="0.4"/>
              
              {/* Cleaning Supplies Icon - Spray Bottle */}
              <g transform="translate(100, 120)">
                <rect x="40" y="20" width="20" height="100" fill="#3B82F6" rx="2"/>
                <rect x="35" y="15" width="30" height="10" fill="#60A5FA" rx="2"/>
                <circle cx="50" cy="135" r="25" fill="#3B82F6" opacity="0.7"/>
              </g>
              
              {/* Brush Icon */}
              <g transform="translate(220, 140)">
                <rect x="30" y="40" width="10" height="70" fill="#8B5CF6"/>
                <ellipse cx="35" cy="40" rx="15" ry="12" fill="#A78BFA"/>
                <path d="M 20 30 Q 35 20 50 30" stroke="#8B5CF6" strokeWidth="3" fill="none"/>
              </g>
              
              {/* Sparkle/Check marks */}
              <g transform="translate(150, 250)">
                <circle cx="0" cy="0" r="4" fill="#FCD34D"/>
                <circle cx="30" cy="-20" r="3" fill="#FBBF24"/>
                <circle cx="-30" cy="20" r="3" fill="#FCD34D"/>
                <circle cx="45" cy="15" r="2.5" fill="#FBD34D"/>
              </g>
              
              {/* Checkmark */}
              <g transform="translate(280, 240)">
                <circle cx="0" cy="0" r="20" fill="#10B981" opacity="0.2"/>
                <path d="M -8 0 L 3 10 L 15 -8" stroke="#10B981" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
