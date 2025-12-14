import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-health-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Link to="/" className="font-display font-bold text-2xl text-health-700 hover:text-health-600 transition">
              HealthCare+
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {[
              { to: '/', label: 'Home' },
              { to: '/services', label: 'Services' },
              { to: '/doctors', label: 'Doctors' },
              { to: '/appointment', label: 'Appointment' },
              { to: '/contact', label: 'Contact' }
            ].map((item, idx) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.05 }}
              >
                <Link
                  to={item.to}
                  className="font-body text-sm font-500 text-trust-700 hover:text-health-600 transition pb-1 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-health-600 rounded-full group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Link
              to="/appointment"
              className="px-4 py-2 bg-health-600 text-white font-body font-600 rounded-lg hover:bg-health-700 transition text-sm"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
