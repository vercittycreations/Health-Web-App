import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-trust-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="font-display font-bold text-xl text-health-400 mb-4">HealthCare+</h3>
            <p className="font-body text-trust-300 text-sm leading-relaxed">
              Providing comprehensive healthcare solutions with professional and compassionate care.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h4 className="font-display font-bold text-health-400 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="font-body text-trust-300 hover:text-health-400 transition">Home</a></li>
              <li><a href="/services" className="font-body text-trust-300 hover:text-health-400 transition">Services</a></li>
              <li><a href="/doctors" className="font-body text-trust-300 hover:text-health-400 transition">Doctors</a></li>
              <li><a href="/appointment" className="font-body text-trust-300 hover:text-health-400 transition">Appointment</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h4 className="font-display font-bold text-health-400 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="font-body text-trust-300">Phone: +1 (800) 123-4567</span></li>
              <li><span className="font-body text-trust-300">Email: info@healthcare.com</span></li>
              <li><span className="font-body text-trust-300">Address: 123 Medical Center, NY 10001</span></li>
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <h4 className="font-display font-bold text-health-400 mb-4">Hours</h4>
            <ul className="space-y-2 text-sm font-body text-trust-300">
              <li>Mon - Fri: 8:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 2:00 PM</li>
              <li>Sunday: Closed</li>
              <li className="text-health-400 mt-2">24/7 Emergency</li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-trust-800 pt-8 text-center font-body text-trust-400 text-sm">
          <p>&copy; 2025 HealthCare+. All rights reserved. | Professional Medical Services</p>
        </div>
      </div>
    </footer>
  )
}
