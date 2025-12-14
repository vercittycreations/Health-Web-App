import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home() {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-health-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div variants={containerVariants} initial="initial" animate="animate">
            <motion.p variants={itemVariants} className="font-body text-sm tracking-widest text-health-600 uppercase mb-4">
              Welcome to HealthCare+
            </motion.p>

            <motion.h1 variants={itemVariants} className="font-display text-5xl md:text-6xl font-bold text-trust-900 mb-6 leading-tight">
              Your Health, Our Priority
            </motion.h1>

            <motion.p variants={itemVariants} className="font-body text-lg text-trust-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Experience world-class healthcare with our team of dedicated professionals. From routine check-ups to specialized treatments, we're here for you.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/appointment"
                className="px-8 py-4 bg-health-600 text-white font-body font-600 rounded-lg hover:bg-health-700 transition transform hover:scale-105 active:scale-95"
              >
                Book Appointment
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-health-600 text-health-600 font-body font-600 rounded-lg hover:bg-health-50 transition"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-bold text-center text-trust-900 mb-16"
          >
            Why Choose HealthCare+
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '👨‍⚕️',
                title: 'Expert Doctors',
                description: 'Board-certified physicians with years of experience in their specialties'
              },
              {
                icon: '🏥',
                title: 'Modern Facilities',
                description: 'State-of-the-art equipment and comfortable patient environment'
              },
              {
                icon: '⏰',
                title: 'Quick Service',
                description: 'Minimal wait times and efficient appointment scheduling'
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-health-50 rounded-xl hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-display text-xl font-bold text-trust-900 mb-3">{feature.title}</h3>
                <p className="font-body text-trust-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-health-600">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white rounded-xl p-12 shadow-lg text-center"
        >
          <h2 className="font-display text-3xl font-bold text-trust-900 mb-4">Ready to Schedule Your Visit?</h2>
          <p className="font-body text-trust-600 mb-8 leading-relaxed">
            Our healthcare professionals are ready to assist you. Book your appointment today.
          </p>
          <Link
            to="/appointment"
            className="inline-block px-8 py-4 bg-health-600 text-white font-body font-600 rounded-lg hover:bg-health-700 transition"
          >
            Book Now
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
