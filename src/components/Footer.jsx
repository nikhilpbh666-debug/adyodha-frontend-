export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-16 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">SparkClean</h3>
            <p className="text-gray-400 text-sm">
              Professional cleaning services for homes and offices. Trusted by 500+ customers since 2016.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
              <li><a href="#why-us" className="hover:text-blue-400 transition">Why Us</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Home Cleaning</li>
              <li>Deep Cleaning</li>
              <li>Office Cleaning</li>
              <li>Custom Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div>
                <p className="text-gray-300 font-semibold">Phone</p>
                <a href="tel:+15551234567" className="hover:text-blue-400 transition">
                  +1 (555) 123-4567
                </a>
              </div>
              <div>
                <p className="text-gray-300 font-semibold">Email</p>
                <a href="mailto:hello@sparkcleanservices.com" className="hover:text-blue-400 transition break-all">
                  hello@sparkcleanservices.com
                </a>
              </div>
              <div>
                <p className="text-gray-300 font-semibold">Hours</p>
                <p>Mon-Fri: 8AM-6PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {currentYear} SparkClean Services. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
