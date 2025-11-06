import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiAcademicCap, HiLocationMarker, HiBriefcase } from 'react-icons/hi'
import Modal from '../components/Modal'
import { FORM_LINKS } from '../config/forms'

const Faculty = () => {
  const [selectedDept, setSelectedDept] = useState('All')
  const [showPositionsModal, setShowPositionsModal] = useState(false)

  const departments = ['All', 'Computer Science', 'Business', 'Engineering', 'Arts & Sciences']

  const faculty = [
    {
      name: 'Dr. Sarah Johnson',
      department: 'Computer Science',
      position: 'Professor & Head',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      email: 'sarah.j@excellence.edu',
      specialization: 'Artificial Intelligence, Machine Learning',
    },
    {
      name: 'Dr. Michael Chen',
      department: 'Business',
      position: 'Associate Professor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      email: 'michael.c@excellence.edu',
      specialization: 'Strategic Management, Entrepreneurship',
    },
    {
      name: 'Dr. Emily Rodriguez',
      department: 'Engineering',
      position: 'Professor',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      email: 'emily.r@excellence.edu',
      specialization: 'Robotics, Automation Systems',
    },
    {
      name: 'Dr. James Wilson',
      department: 'Arts & Sciences',
      position: 'Senior Lecturer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
      email: 'james.w@excellence.edu',
      specialization: 'Psychology, Behavioral Science',
    },
    {
      name: 'Dr. Lisa Anderson',
      department: 'Computer Science',
      position: 'Assistant Professor',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      email: 'lisa.a@excellence.edu',
      specialization: 'Cybersecurity, Network Systems',
    },
    {
      name: 'Dr. Robert Taylor',
      department: 'Business',
      position: 'Professor',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      email: 'robert.t@excellence.edu',
      specialization: 'Finance, Investment Banking',
    },
  ]

  const filteredFaculty = selectedDept === 'All'
    ? faculty
    : faculty.filter(f => f.department === selectedDept)

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
              Our Faculty
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Meet the brilliant minds shaping the future of education
            </p>
          </motion.div>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-12 bg-white sticky top-20 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedDept === dept
                    ? 'bg-accent text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFaculty.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-heading font-bold text-xl mb-1">{member.name}</h3>
                    <p className="text-sm text-gray-200">{member.position}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-accent mb-3">
                    <HiAcademicCap />
                    <span className="text-sm font-semibold">{member.department}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{member.specialization}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center space-x-2 text-primary hover:text-accent transition-colors"
                  >
                    <HiMail />
                    <span className="text-sm">{member.email}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Faculty CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-4xl text-primary mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're always looking for passionate educators to join our community
            </p>
            <button 
              onClick={() => setShowPositionsModal(true)}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
            >
              View Open Positions
            </button>
          </motion.div>
        </div>
      </section>

      {/* Open Positions Modal */}
      <Modal 
        isOpen={showPositionsModal} 
        onClose={() => setShowPositionsModal(false)} 
        title="Open Faculty Positions"
        size="lg"
      >
        <div className="space-y-6">
          {[
            {
              title: 'Assistant Professor - Computer Science',
              department: 'Computer Science',
              type: 'Full-time',
              location: 'Main Campus',
              description: 'We are seeking a passionate educator with expertise in AI and Machine Learning.',
              requirements: ['PhD in Computer Science or related field', '3+ years teaching experience', 'Strong research background', 'Published papers in reputed journals'],
            },
            {
              title: 'Associate Professor - Business Administration',
              department: 'Business',
              type: 'Full-time',
              location: 'Main Campus',
              description: 'Looking for an experienced business educator with industry connections.',
              requirements: ['PhD in Business Administration', '5+ years teaching experience', 'Industry experience preferred', 'Strong publication record'],
            },
            {
              title: 'Lecturer - Engineering',
              department: 'Engineering',
              type: 'Part-time',
              location: 'Main Campus',
              description: 'Part-time position for robotics and automation systems instruction.',
              requirements: ['Masters in Engineering', '2+ years experience', 'Hands-on project experience', 'Good communication skills'],
            },
          ].map((position, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-accent transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-heading font-bold text-xl text-primary mb-2">
                    {position.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <span className="flex items-center text-gray-600">
                      <HiAcademicCap className="mr-1 text-accent" />
                      {position.department}
                    </span>
                    <span className="flex items-center text-gray-600">
                      <HiBriefcase className="mr-1 text-accent" />
                      {position.type}
                    </span>
                    <span className="flex items-center text-gray-600">
                      <HiLocationMarker className="mr-1 text-accent" />
                      {position.location}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{position.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-primary mb-2">Requirements:</h4>
                <ul className="space-y-1">
                  {position.requirements.map((req, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-start">
                      <span className="text-accent mr-2">•</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href={FORM_LINKS.facultyApplication}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Apply for this Position
              </a>
            </div>
          ))}
        </div>
      </Modal>

    </div>
  )
}

export default Faculty
