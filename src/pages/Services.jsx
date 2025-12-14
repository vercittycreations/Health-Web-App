import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    {
      icon: '🔬',
      title: 'General Checkup',
      description: 'Comprehensive health screening and preventive care services'
    },
    {
      icon: '😁',
      title: 'Dental Care',
      description: 'Professional dental treatment and oral hygiene services'
    },
    {
      icon: '👶',
      title: 'Pediatrics',
      description: 'Specialized healthcare for infants, children, and adolescents'
    },
    {
      icon: '♥️',
      title: 'Cardiology',
      description: 'Heart and cardiovascular health management and treatment'
    },
    {
      icon: '🧠',
      title: 'Neurology',
      description: 'Neurological disorders diagnosis and treatment'
    },
    {
      icon: '👁️',
      title: 'Ophthalmology',
      description: 'Eye care, vision correction, and eye surgery services'
    }
  ]

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-health-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="font-display text-5xl font-bold text-trust-900 mb-4">Our Services</h1>
          <p className="font-body text-lg text-trust-600 max-w-2xl mx-auto">
            We offer a wide range of healthcare services to meet all your medical needs
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-8 bg-white border border-health-100 rounded-xl hover:shadow-lg hover:border-health-300 transition"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="font-display text-xl font-bold text-trust-900 mb-3">{service.title}</h3>
                <p className="font-body text-trust-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-health-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-xl shadow-lg"
          >
            <h2 className="font-display text-3xl font-bold text-trust-900 mb-6">Professional Healthcare</h2>
            <p className="font-body text-trust-600 leading-relaxed mb-4">
              HealthCare+ is committed to providing comprehensive, compassionate healthcare services. Our team of board-certified physicians and healthcare professionals utilize the latest medical technology and evidence-based practices.
            </p>
            <p className="font-body text-trust-600 leading-relaxed">
              Every patient receives personalized attention and treatment plans tailored to their specific health needs. We believe in preventive care, patient education, and building long-term relationships with our patients.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
