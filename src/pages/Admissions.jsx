import { motion } from 'framer-motion'
import { HiCheckCircle, HiDocumentText, HiCalendar, HiCreditCard } from 'react-icons/hi'

const Admissions = () => {
  const steps = [
    { icon: HiDocumentText, title: 'Submit Application', description: 'Complete online form' },
    { icon: HiCalendar, title: 'Entrance Test', description: 'Schedule and attend' },
    { icon: HiCheckCircle, title: 'Interview', description: 'Meet with faculty' },
    { icon: HiCreditCard, title: 'Enrollment', description: 'Pay fees and register' },
  ]

  const documents = [
    'High School Transcripts',
    'Standardized Test Scores',
    'Letters of Recommendation (2)',
    'Personal Statement',
    'Government-issued ID',
    'Passport-size Photographs',
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">
              Admissions
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Start your journey to excellence. Applications open year-round.
            </p>
            <button className="bg-white text-primary hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl">
              Apply Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl text-primary mb-4">
              Admission Process
            </h2>
            <p className="text-xl text-gray-600">Four simple steps to join our community</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent text-white rounded-full mb-4 shadow-lg">
                    <step.icon className="w-10 h-10" />
                  </div>
                  <div className="absolute top-10 left-1/2 w-full h-0.5 bg-gray-300 -z-10 hidden md:block">
                    {index < steps.length - 1 && (
                      <div className="h-full bg-accent" style={{ width: '100%' }}></div>
                    )}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-4xl text-primary mb-4">
              Required Documents
            </h2>
            <p className="text-xl text-gray-600">Prepare these documents for your application</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="grid md:grid-cols-2 gap-4">
              {documents.map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <HiCheckCircle className="text-accent text-2xl flex-shrink-0" />
                  <span className="text-gray-700">{doc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-4xl text-primary mb-4">
              Important Dates
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Application Deadline', date: 'March 31, 2026', color: 'from-blue-500 to-blue-600' },
              { title: 'Entrance Test', date: 'April 15, 2026', color: 'from-purple-500 to-purple-600' },
              { title: 'Results Announcement', date: 'May 1, 2026', color: 'from-accent to-red-600' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-br ${item.color} text-white p-8 rounded-2xl shadow-lg text-center`}
              >
                <HiCalendar className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-heading font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-2xl font-bold">{item.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-4xl text-primary mb-4">
              Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our admissions team is here to help you every step of the way
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-all">
                Contact Admissions
              </button>
              <button className="bg-white hover:bg-gray-50 text-primary border-2 border-primary px-8 py-3 rounded-full font-semibold transition-all">
                Schedule Campus Tour
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Admissions
