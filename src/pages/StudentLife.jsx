import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiUserGroup, HiAcademicCap, HiHeart, HiLightningBolt } from 'react-icons/hi'
import Modal from '../components/Modal'

const StudentLife = () => {
  const [showTourModal, setShowTourModal] = useState(false)
  const [selectedActivity, setSelectedActivity] = useState(null)
  
  const activities = [
    {
      icon: HiUserGroup,
      title: 'Student Clubs',
      description: '50+ clubs covering tech, arts, sports, and more',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600',
      fullDescription: 'Join one of our 50+ student clubs and organizations! Whether you\'re interested in technology, arts, business, or social causes, there\'s a community waiting for you. Our clubs organize regular meetings, workshops, competitions, and social events throughout the year.',
      highlights: [
        'Tech Clubs: Coding Club, Robotics Society, AI & ML Club',
        'Arts & Culture: Drama Society, Music Club, Photography Club',
        'Business: Entrepreneurship Club, Finance Society, Marketing Club',
        'Social: Debate Society, Community Service, Environmental Club',
      ],
      gallery: [
        'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800',
      ],
    },
    {
      icon: HiLightningBolt,
      title: 'Sports & Fitness',
      description: 'Modern gym, courts, and competitive teams',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600',
      fullDescription: 'Stay active and healthy with our state-of-the-art sports facilities! Our campus features a modern gymnasium, multiple sports courts, a swimming pool, and outdoor fields. Join competitive teams or participate in recreational sports.',
      highlights: [
        'Facilities: Fully-equipped gym, basketball courts, tennis courts, cricket ground',
        'Competitive Teams: Basketball, Cricket, Football, Badminton, Table Tennis',
        'Fitness Programs: Yoga classes, Zumba, Personal training sessions',
        'Annual Events: Inter-college tournaments, Sports Day, Marathon',
      ],
      gallery: [
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',
        'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800',
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
      ],
    },
    {
      icon: HiHeart,
      title: 'Community Service',
      description: 'Make a difference through volunteer programs',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600',
      fullDescription: 'Give back to the community through our various volunteer and social service programs. Partner with local NGOs, participate in awareness campaigns, and make a real impact on society.',
      highlights: [
        'Education Initiatives: Teaching underprivileged children, literacy programs',
        'Health Campaigns: Blood donation drives, health awareness programs',
        'Environmental Projects: Tree plantation, clean-up drives, recycling initiatives',
        'Social Welfare: Food drives, clothing donations, elderly care visits',
      ],
      gallery: [
        'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800',
        'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800',
        'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800',
      ],
    },
    {
      icon: HiAcademicCap,
      title: 'Cultural Events',
      description: 'Festivals, concerts, and celebrations year-round',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600',
      fullDescription: 'Experience the vibrant cultural life on campus! From traditional festivals to modern concerts, talent shows to art exhibitions, there\'s always something exciting happening. Celebrate diversity and showcase your talents.',
      highlights: [
        'Annual Festivals: Cultural Week, Spring Festival, Independence Day celebrations',
        'Performances: Music concerts, dance competitions, theater productions',
        'Exhibitions: Art shows, photography exhibitions, science fairs',
        'Competitions: Talent shows, fashion shows, cooking competitions',
      ],
      gallery: [
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
        'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
      ],
    },
  ]

  const testimonials = [
    {
      name: 'Alex Thompson',
      program: 'Computer Science, Class of 2024',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      quote: 'The campus life here is incredible. From hackathons to cultural festivals, there\'s always something exciting happening.',
    },
    {
      name: 'Maria Garcia',
      program: 'Business Administration, Class of 2025',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      quote: 'I\'ve grown so much as a person here. The supportive community and diverse opportunities have shaped my future.',
    },
    {
      name: 'David Kim',
      program: 'Engineering, Class of 2024',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
      quote: 'Being part of the robotics club and participating in competitions has been the highlight of my college experience.',
    },
  ]

  const gallery = [
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600',
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600',
    'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600',
    'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600',
    'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600',
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600',
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
              Student Life
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Experience a vibrant campus community where learning meets living
            </p>
          </motion.div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl text-primary mb-4">
              Campus Activities
            </h2>
            <p className="text-xl text-gray-600">Discover endless opportunities to grow and connect</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedActivity(activity)}
                className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer h-80"
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <activity.icon className="w-12 h-12 mb-4" />
                  <h3 className="font-heading font-bold text-2xl mb-2">{activity.title}</h3>
                  <p className="text-gray-200 mb-3">{activity.description}</p>
                  <span className="text-accent font-semibold">Click to learn more →</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl text-primary mb-4">
              Student Voices
            </h2>
            <p className="text-xl text-gray-600">Hear from our amazing community</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.program}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl text-primary mb-4">
              Campus Gallery
            </h2>
            <p className="text-xl text-gray-600">A glimpse into daily life at our campus</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="relative h-64 rounded-xl overflow-hidden shadow-lg cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Campus ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-4xl mb-6">
              Experience Campus Life
            </h2>
            <p className="text-xl mb-8">
              Schedule a campus tour and see what makes our community special
            </p>
            <button 
              onClick={() => setShowTourModal(true)}
              className="bg-white text-primary hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
            >
              Book a Tour
            </button>
          </motion.div>
        </div>
      </section>

      {/* Campus Tour Modal */}
      <Modal 
        isOpen={showTourModal} 
        onClose={() => setShowTourModal(false)} 
        title="Book Campus Tour"
        size="md"
      >
        <form onSubmit={(e) => {
          e.preventDefault()
          alert('Tour booked successfully! We will send you a confirmation email.')
          setShowTourModal(false)
        }} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Full Name *
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
              placeholder="John Doe"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Phone *
              </label>
              <input
                type="tel"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Preferred Date *
              </label>
              <input
                type="date"
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Preferred Time *
              </label>
              <select
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
              >
                <option value="">Select time</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Number of Visitors
            </label>
            <input
              type="number"
              min="1"
              max="10"
              defaultValue="1"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
            />
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              className="flex-1 bg-accent hover:bg-accent/90 text-white py-3 rounded-lg font-semibold transition-all"
            >
              Book Tour
            </button>
            <button
              type="button"
              onClick={() => setShowTourModal(false)}
              className="px-6 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold transition-all"
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>

      {/* Activity Details Modal */}
      {selectedActivity && (
        <Modal 
          isOpen={!!selectedActivity} 
          onClose={() => setSelectedActivity(null)} 
          title={selectedActivity.title}
          size="xl"
        >
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative h-64 rounded-xl overflow-hidden">
              <img 
                src={selectedActivity.image} 
                alt={selectedActivity.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                  <selectedActivity.icon className="w-8 h-8 text-accent" />
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-heading font-bold text-2xl text-primary mb-3">
                About {selectedActivity.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {selectedActivity.fullDescription}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="font-heading font-bold text-xl text-primary mb-4">
                What We Offer
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {selectedActivity.highlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div>
              <h3 className="font-heading font-bold text-xl text-primary mb-4">
                Gallery
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {selectedActivity.gallery.map((img, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="relative h-40 rounded-lg overflow-hidden shadow-md cursor-pointer"
                  >
                    <img 
                      src={img} 
                      alt={`${selectedActivity.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary to-accent text-white p-6 rounded-xl">
              <h4 className="font-heading font-bold text-xl mb-2">
                Interested in Joining?
              </h4>
              <p className="mb-4 text-gray-100">
                Get in touch with us to learn more about how you can participate in {selectedActivity.title.toLowerCase()}.
              </p>
              <button 
                onClick={() => {
                  setSelectedActivity(null)
                  setShowTourModal(true)
                }}
                className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Schedule a Visit
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default StudentLife
