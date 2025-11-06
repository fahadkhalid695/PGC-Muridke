import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiHome, HiArrowLeft } from 'react-icons/hi'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-accent px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-white max-w-2xl"
      >
        {/* 404 Number */}
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="font-heading font-bold text-9xl md:text-[200px] mb-4 text-accent"
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-heading font-bold text-3xl md:text-5xl mb-4"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-gray-200 mb-8"
        >
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center space-x-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
          >
            <HiHome size={24} />
            <span>Go Home</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 border-2 border-white"
          >
            <HiArrowLeft size={24} />
            <span>Go Back</span>
          </button>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 pt-8 border-t border-white/20"
        >
          <p className="text-gray-300 mb-4">You might be looking for:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/about" className="text-white hover:text-accent transition-colors underline">
              About Us
            </Link>
            <Link to="/programs" className="text-white hover:text-accent transition-colors underline">
              Programs
            </Link>
            <Link to="/admissions" className="text-white hover:text-accent transition-colors underline">
              Admissions
            </Link>
            <Link to="/contact" className="text-white hover:text-accent transition-colors underline">
              Contact
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default NotFound
