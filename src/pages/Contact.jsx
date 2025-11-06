import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker, HiClock } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import { FORM_LINKS } from '../config/forms'

const Contact = () => {
  const contactInfo = [
    {
      icon: HiLocationMarker,
      title: 'Visit Us',
      details: ['Near THQ Hospital, Muridke', 'Punjab, Pakistan'],
    },
    {
      icon: HiPhone,
      title: 'Call Us',
      details: ['+92 (300) 123-4567', '+92 (300) 123-4568'],
    },
    {
      icon: HiMail,
      title: 'Email Us',
      details: ['info@pgc.edu.pk', 'admissions@pgc.edu.pk'],
    },
    {
      icon: HiClock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 5:00 PM', 'Saturday: 10:00 AM - 2:00 PM'],
    },
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
              Contact Us
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              We're here to answer your questions and help you get started
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center"
              >
                <info.icon className="w-12 h-12 mx-auto text-accent mb-4" />
                <h3 className="font-heading font-bold text-xl text-primary mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm mb-1">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="font-heading font-bold text-4xl text-primary mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out our contact form and we'll get back to you as soon as possible.
              </p>
              <a
                href={FORM_LINKS.contact}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-accent hover:bg-accent/90 text-white py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg text-center"
              >
                Open Contact Form
              </a>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Opens in a new tab • Powered by Google Forms
              </p>
            </motion.div>

            {/* Map & Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.0!2d74.2589!3d31.7859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDQ3JzA5LjIiTiA3NMKwMTUnMzIuMCJF!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Campus Location - Q7P5+9H5, Muridke, Pakistan"
                ></iframe>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-heading font-bold text-2xl text-primary mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <a 
                    href="https://wa.me/923001234567?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20PGC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    <FaWhatsapp size={24} />
                    <span>Chat on WhatsApp</span>
                  </a>
                  <a 
                    href={FORM_LINKS.campusTour}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    Schedule Campus Tour
                  </a>
                  <button className="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-lg font-semibold transition-colors">
                    Download Brochure
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-accent text-white rounded-2xl shadow-lg p-6">
                <h3 className="font-heading font-bold text-xl mb-3">
                  Need Immediate Help?
                </h3>
                <p className="mb-4">
                  Our admissions team is available to answer your questions right away.
                </p>
                <a
                  href="tel:+923001234567"
                  className="inline-block bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Call Now: +92 (300) 123-4567
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
