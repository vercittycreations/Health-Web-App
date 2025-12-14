import { motion } from 'framer-motion'

export default function Doctors() {
  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'General Practitioner',
      experience: '15+ years',
      image: '👨‍⚕️'
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Cardiologist',
      experience: '12+ years',
      image: '👨‍⚕️'
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrician',
      experience: '10+ years',
      image: '👩‍⚕️'
    },
    {
      name: 'Dr. James Wilson',
      specialty: 'Neurologist',
      experience: '18+ years',
      image: '👨‍⚕️'
    },
    {
      name: 'Dr. Lisa Anderson',
      specialty: 'Dentist',
      experience: '11+ years',
      image: '👩‍⚕️'
    },
    {
      name: 'Dr. David Kumar',
      specialty: 'Ophthalmologist',
      experience: '14+ years',
      image: '👨‍⚕️'
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
          <h1 className="font-display text-5xl font-bold text-trust-900 mb-4">Our Doctors</h1>
          <p className="font-body text-lg text-trust-600 max-w-2xl mx-auto">
            Meet our team of experienced healthcare professionals dedicated to your wellbeing
          </p>
        </motion.div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white border border-health-100 rounded-xl overflow-hidden hover:shadow-lg transition"
              >
                {/* Avatar */}
                <div className="bg-gradient-to-br from-health-100 to-health-50 h-48 flex items-center justify-center">
                  <div className="text-7xl">{doctor.image}</div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-trust-900 mb-2">{doctor.name}</h3>
                  <p className="font-body text-health-600 font-600 mb-2">{doctor.specialty}</p>
                  <p className="font-body text-trust-600 text-sm">{doctor.experience} experience</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-health-50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl font-bold text-trust-900 mb-6">Schedule with Our Doctors</h2>
          <p className="font-body text-trust-600 mb-8">
            Book an appointment with any of our specialists today
          </p>
          <a
            href="/appointment"
            className="inline-block px-8 py-4 bg-health-600 text-white font-body font-600 rounded-lg hover:bg-health-700 transition"
          >
            Book Appointment
          </a>
        </motion.div>
      </section>
    </div>
  )
}
