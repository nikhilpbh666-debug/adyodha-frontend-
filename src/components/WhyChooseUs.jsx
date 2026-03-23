export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Trusted Professionals',
      description: 'All team members are background-checked and fully trained.',
      icon: '👥'
    },
    {
      title: 'Affordable Pricing',
      description: 'Competitive rates with transparent quotes, no hidden charges.',
      icon: '💰'
    },
    {
      title: 'Flexible Scheduling',
      description: 'We work around your schedule with early morning and evening slots.',
      icon: '🕐'
    },
    {
      title: 'Fast Response Time',
      description: 'Same-day service available for urgent cleaning needs.',
      icon: '⚡'
    }
  ]

  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose SparkClean</h2>
          <p className="text-lg text-gray-600">What sets us apart from the rest</p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex gap-4"
            >
              <div className="text-4xl flex-shrink-0 bg-blue-100 rounded-lg w-16 h-16 flex items-center justify-center">
                {reason.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
