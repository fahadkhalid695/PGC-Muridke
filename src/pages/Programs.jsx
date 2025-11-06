import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiAcademicCap, HiClock, HiUsers, HiCheckCircle } from 'react-icons/hi'
import Modal from '../components/Modal'
import ContactModal from '../components/ContactModal'

const Programs = () => {
  const [filter, setFilter] = useState('All')
  const [selectedProgram, setSelectedProgram] = useState(null)
  const [showContactModal, setShowContactModal] = useState(false)

  const categories = ['All', 'Undergraduate', 'Graduate', 'Certifications']

  const programs = [
    {
      category: 'Undergraduate',
      name: 'Computer Science',
      duration: '4 Years',
      students: '500+',
      description: 'Comprehensive program covering software development, AI, and data science',
      fullDescription: 'Our Computer Science program prepares students for careers in software development, artificial intelligence, and data science. With hands-on projects and industry partnerships, students gain practical experience.',
      curriculum: ['Programming Fundamentals', 'Data Structures & Algorithms', 'Database Systems', 'Web Development', 'Machine Learning', 'Software Engineering', 'Mobile App Development', 'Cybersecurity'],
      careers: ['Software Developer', 'Data Scientist', 'AI Engineer', 'Full Stack Developer'],
      fees: '$15,000/year',
    },
    {
      category: 'Undergraduate',
      name: 'Business Administration',
      duration: '4 Years',
      students: '450+',
      description: 'Learn management, finance, marketing, and entrepreneurship',
      fullDescription: 'The Business Administration program equips students with essential business skills including management, finance, marketing, and entrepreneurship. Real-world case studies and internships enhance learning.',
      curriculum: ['Business Fundamentals', 'Financial Accounting', 'Marketing Management', 'Human Resources', 'Business Strategy', 'Entrepreneurship', 'International Business', 'Business Analytics'],
      careers: ['Business Manager', 'Marketing Manager', 'Financial Analyst', 'Entrepreneur'],
      fees: '$12,000/year',
    },
    {
      category: 'Graduate',
      name: 'MBA',
      duration: '2 Years',
      students: '200+',
      description: 'Advanced business leadership and strategic management',
      fullDescription: 'Our MBA program is designed for professionals seeking to advance their careers in business leadership. Focus on strategic thinking, leadership, and innovation.',
      curriculum: ['Strategic Management', 'Leadership & Ethics', 'Financial Management', 'Operations Management', 'Marketing Strategy', 'Innovation Management', 'Global Business', 'Capstone Project'],
      careers: ['CEO', 'Business Consultant', 'Operations Director', 'Strategy Manager'],
      fees: '$25,000/year',
    },
    {
      category: 'Graduate',
      name: 'Data Science',
      duration: '2 Years',
      students: '150+',
      description: 'Master machine learning, analytics, and big data technologies',
      fullDescription: 'Advanced program focusing on machine learning, big data analytics, and statistical modeling. Work on real-world data projects with industry partners.',
      curriculum: ['Statistical Analysis', 'Machine Learning', 'Deep Learning', 'Big Data Technologies', 'Data Visualization', 'Natural Language Processing', 'Computer Vision', 'Research Project'],
      careers: ['Data Scientist', 'ML Engineer', 'Data Analyst', 'Research Scientist'],
      fees: '$20,000/year',
    },
    {
      category: 'Certifications',
      name: 'Digital Marketing',
      duration: '6 Months',
      students: '300+',
      description: 'SEO, social media, content marketing, and analytics',
      fullDescription: 'Intensive certification program covering all aspects of digital marketing including SEO, social media marketing, content strategy, and analytics.',
      curriculum: ['SEO Fundamentals', 'Social Media Marketing', 'Content Marketing', 'Email Marketing', 'Google Analytics', 'PPC Advertising', 'Marketing Automation', 'Final Project'],
      careers: ['Digital Marketing Specialist', 'SEO Specialist', 'Social Media Manager', 'Content Strategist'],
      fees: '$3,000',
    },
    {
      category: 'Certifications',
      name: 'Project Management',
      duration: '4 Months',
      students: '250+',
      description: 'Agile, Scrum, and traditional project management methodologies',
      fullDescription: 'Professional certification in project management covering Agile, Scrum, and traditional methodologies. Prepare for PMP certification.',
      curriculum: ['Project Management Basics', 'Agile Methodology', 'Scrum Framework', 'Risk Management', 'Stakeholder Management', 'Project Planning', 'Team Leadership', 'Certification Prep'],
      careers: ['Project Manager', 'Scrum Master', 'Program Manager', 'Agile Coach'],
      fees: '$2,500',
    },
  ]

  const filteredPrograms = filter === 'All' 
    ? programs 
    : programs.filter(p => p.category === filter)

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
              Academic Programs
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover programs designed to shape your future and unlock your potential
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 bg-white sticky top-20 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  filter === category
                    ? 'bg-accent text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPrograms.map((program, index) => (
                <motion.div
                  key={program.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                >
                  <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
                  <div className="p-6">
                    <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      {program.category}
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-primary mb-4">
                      {program.name}
                    </h3>
                    <p className="text-gray-600 mb-6">{program.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-2">
                        <HiClock className="text-accent" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <HiUsers className="text-accent" />
                        <span>{program.students}</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => setSelectedProgram(program)}
                      className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <HiAcademicCap className="w-16 h-16 mx-auto text-accent mb-6" />
            <h2 className="font-heading font-bold text-4xl text-primary mb-6">
              Can't Find Your Program?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact our admissions team to explore more options tailored to your goals
            </p>
            <button 
              onClick={() => setShowContactModal(true)}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
            >
              Contact Admissions
            </button>
          </motion.div>
        </div>
      </section>

      {/* Program Details Modal */}
      {selectedProgram && (
        <Modal 
          isOpen={!!selectedProgram} 
          onClose={() => setSelectedProgram(null)} 
          title={selectedProgram.name}
          size="lg"
        >
          <div className="space-y-6">
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <HiClock className="text-accent" />
                <span className="font-semibold">{selectedProgram.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <HiUsers className="text-accent" />
                <span className="font-semibold">{selectedProgram.students} Students</span>
              </div>
              <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                {selectedProgram.category}
              </div>
            </div>

            <div>
              <h3 className="font-heading font-bold text-xl text-primary mb-3">About This Program</h3>
              <p className="text-gray-600 leading-relaxed">{selectedProgram.fullDescription}</p>
            </div>

            <div>
              <h3 className="font-heading font-bold text-xl text-primary mb-3">Curriculum</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {selectedProgram.curriculum.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <HiCheckCircle className="text-accent flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-heading font-bold text-xl text-primary mb-3">Career Opportunities</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProgram.careers.map((career, index) => (
                  <span key={index} className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                    {career}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Tuition Fees</p>
                  <p className="font-heading font-bold text-2xl text-primary">{selectedProgram.fees}</p>
                </div>
                <button 
                  onClick={() => {
                    setSelectedProgram(null)
                    setShowContactModal(true)
                  }}
                  className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* Contact Modal */}
      <ContactModal 
        isOpen={showContactModal} 
        onClose={() => setShowContactModal(false)}
        subject="programs"
      />
    </div>
  )
}

export default Programs
