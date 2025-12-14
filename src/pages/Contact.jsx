import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields')
      return
    }

    setIsSubmitting(true)

    try {
     await emailjs.send(
  'service_icjx6la',        // 🔴 SERVICE ID
  'template_3o9ws09',      // 🔴 CONTACT TEMPLATE ID
  {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    subject: formData.subject,
    message: formData.message,
  },
  'l2ib-qRvcDjFqoNdO'       // 🔴 PUBLIC KEY
)

setSubmitted(true)
setIsSubmitting(false)
setFormData({
  name: '',
  email: '',
  phone: '',
  subject: '',
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
          <h1 className="font-display text-5xl font-bold text-trust-900 mb-4">Contact Us</h1>
          <p className="font-body text-lg text-trust-600 max-w-2xl mx-auto">
            Get in touch with our healthcare team for any questions or inquiries
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-trust-900 mb-8">Get in Touch</h2>

            <div className="space-y-8">
              {[
                {
                  icon: '📍',
                  title: 'Address',
                  content: '123 Medical Center, New York, NY 10001'
                },
                {
                  icon: '📞',
                  title: 'Phone',
                  content: '+1 (800) 123-4567'
                },
                {
                  icon: '📧',
                  title: 'Email',
                  content: 'info@healthcare.com'
                },
                {
                  icon: '🕐',
                  title: 'Hours',
                  content: 'Mon-Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM\nSun: Closed'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <h3 className="font-display font-bold text-trust-900 mb-2">{item.title}</h3>
                      <p className="font-body text-trust-600 whitespace-pre-line">{item.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-health-50 border border-health-100 rounded-xl p-8"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="text-5xl mb-4">✓</div>
                <h2 className="font-display text-3xl font-bold text-health-600 mb-2">
                  Message Sent!
                </h2>
                <p className="font-body text-trust-600">
                  Thank you for contacting us. We'll get back to you shortly.
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
                    className="w-full px-4 py-3 border border-health-200 rounded-lg bg-white focus:outline-none focus:border-health-600 focus:ring-2 focus:ring-health-600/10 transition font-body"
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
                    className="w-full px-4 py-3 border border-health-200 rounded-lg bg-white focus:outline-none focus:border-health-600 focus:ring-2 focus:ring-health-600/10 transition font-body"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-body font-600 text-trust-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 border border-health-200 rounded-lg bg-white focus:outline-none focus:border-health-600 focus:ring-2 focus:ring-health-600/10 transition font-body"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block font-body font-600 text-trust-900 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 border border-health-200 rounded-lg bg-white focus:outline-none focus:border-health-600 focus:ring-2 focus:ring-health-600/10 transition font-body"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block font-body font-600 text-trust-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows="5"
                    className="w-full px-4 py-3 border border-health-200 rounded-lg bg-white focus:outline-none focus:border-health-600 focus:ring-2 focus:ring-health-600/10 transition font-body resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-health-600 text-white font-body font-600 rounded-lg hover:bg-health-700 transition disabled:opacity-50 disabled:cursor-not-allowed relative z-10 pointer-events-auto
"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
