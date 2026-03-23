export default function Services() {
  const services = [
    {
      title: 'Home Cleaning',
      description: 'Routine cleaning for apartments, villas, and family homes.',
      icon: '🏠'
    },
    {
      title: 'Deep Cleaning',
      description: 'Thorough top-to-bottom cleaning for kitchens, bathrooms, and living spaces.',
      icon: '✨'
    },
    {
      title: 'Office Cleaning',
      description: 'Professional cleaning services for productive and hygienic workspaces.',
      icon: '🏢'
    }
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">Comprehensive cleaning solutions for every need</p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition border border-gray-100"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a href="#contact" className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
