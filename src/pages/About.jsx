import { motion } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi'

const About = () => {
  const values = [
    { title: 'Excellence', description: 'Striving for the highest standards in education' },
    { title: 'Innovation', description: 'Embracing new ideas and technologies' },
    { title: 'Integrity', description: 'Building trust through ethical practices' },
    { title: 'Diversity', description: 'Celebrating different perspectives and backgrounds' },
  ]

  const timeline = [
    { year: '1990', event: 'Institution Founded' },
    { year: '2000', event: 'First International Partnership' },
    { year: '2010', event: 'Research Center Established' },
    { year: '2020', event: 'Digital Campus Launch' },
    { year: '2025', event: '5000+ Graduates Milestone' },
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
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">About Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Building a legacy of excellence in education for over three decades
            </p>
          </motion.div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600"
                alt="Director"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-4xl text-primary mb-6">
                Director's Message
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                "Welcome to Excellence Institute, where we believe in nurturing not just minds, 
                but futures. Our commitment to academic excellence, combined with a focus on 
                holistic development, ensures that every student leaves our institution prepared 
                to make a meaningful impact in the world."
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "We are proud of our diverse community, world-class faculty, and state-of-the-art 
                facilities that create an environment where innovation thrives and dreams become reality."
              </p>
              <p className="font-semibold text-primary">Dr. John Smith</p>
              <p className="text-gray-500">Director, Excellence Institute</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="font-heading font-bold text-3xl text-primary mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide transformative education that empowers students with knowledge, 
                skills, and values to excel in their chosen fields and contribute positively 
                to society.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="font-heading font-bold text-3xl text-primary mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a globally recognized institution that sets the standard for educational 
                excellence, innovation, and social responsibility, shaping leaders who will 
                drive positive change.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl text-primary mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(229,9,20,0.2)' }}
                className="bg-gradient-to-br from-primary to-accent text-white p-6 rounded-xl"
              >
                <HiCheckCircle className="w-10 h-10 mb-4" />
                <h3 className="font-heading font-bold text-xl mb-2">{value.title}</h3>
                <p className="text-sm text-gray-100">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl text-primary mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Milestones that shaped our institution</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="font-heading font-bold text-2xl text-accent mb-2">
                      {item.year}
                    </div>
                    <div className="text-gray-700">{item.event}</div>
                  </div>
                </div>
                <div className="w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
