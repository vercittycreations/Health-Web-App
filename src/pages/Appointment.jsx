import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.date) {
      alert('Please fill in all required fields')
      return
    }

    setIsSubmitting(true)

    try {
      await emailjs.send(
  'service_lpq396b',          // 🔴 your EmailJS SERVICE ID
  'template_3o9ws09',   // 🔴 your TEMPLATE ID
  {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    date: formData.date,
    message: formData.message,
  },
  'l2ib-qRvcDjFqoNdO'            // 🔴 your PUBLIC KEY
)

setSubmitted(true)
setIsSubmitting(false)
setFormData({
  name: '',
  email: '',
  phone: '',
  date: '',
  message: ''
})

setTimeout(() => setSubmitted(false), 5000)

    } catch (error) {
      console.error('Error:', error)
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-health-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="font-display text-5xl font-bold text-trust-900 mb-4">Book an Appointment</h1>
          <p className="font-body text-lg text-trust-600 max-w-2xl mx-auto">
            Schedule your visit with our healthcare professionals
          </p>
        </motion.div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-health-100 rounded-xl p-8 shadow-lg"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="text-5xl mb-4">✓</div>
                <h2 className="font-display text-3xl font-bold text-health-600 mb-2">
                  Appointment Booked!
                </h2>
                <p className="font-body text-trust-600">
                  We've received your appointment request. Our staff will confirm your booking via email shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block font-body font-600 text-trust-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-health-200 rounded-lg bg-health-50 focus:outline-none focus:border-health-600 focus:ring-2 focus:ring-health-600/10 transition font-body"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-body font-600 text-trust-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-health-200 rounded-lg bg-health-50 focus:outline-none focus:border-health-600 focus:ring-2 focus:ring-health-600/10 transition font-body"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-body font-600 text-trust-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 border border-health-200 rounded-lg bg-health-50 focus:outline-none focus:border-health-600 focus:ring-2 focus:ring-health-600/10 transition font-body"
                    required
                  />
                </div>

                {/* Date */}
                <div>
                  <label className="block font-body font-600 text-trust-900 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-health-200 rounded-lg bg-health-50 focus:outline-none focus:border-health-600 focus:ring-2 focus:ring-health-600/10 transition font-body"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block font-body font-600 text-trust-900 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your health concerns..."
                    rows="4"
                    className="w-full px-4 py-3 border border-health-200 rounded-lg bg-health-50 focus:outline-none focus:border-health-600 focus:ring-2 focus:ring-health-600/10 transition font-body resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-health-600 text-white font-body font-600 rounded-lg hover:bg-health-700 transition disabled:opacity-50 disabled:cursor-not-allowed relative z-10 pointer-events-auto"
                >
                  {isSubmitting ? 'Booking...' : 'Book Appointment'}
                </motion.button>

                <p className="text-center font-body text-sm text-trust-600">
                  We respect your privacy and will never share your information.
                </p>
              </form>
            )}
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: '📞',
                title: 'Call Us',
                content: '+1 (800) 123-4567'
              },
              {
                icon: '📧',
                title: 'Email Us',
                content: 'appointments@healthcare.com'
              },
              {
                icon: '⏰',
                title: 'Hours',
                content: 'Mon-Fri: 8AM-6PM'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="text-center p-6 bg-health-50 rounded-lg"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-display font-bold text-trust-900 mb-2">{item.title}</h3>
                <p className="font-body text-trust-600 text-sm">{item.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
