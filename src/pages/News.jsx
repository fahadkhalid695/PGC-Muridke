import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiCalendar, HiClock, HiTag } from 'react-icons/hi'
import Modal from '../components/Modal'

const News = () => {
  const [selectedNews, setSelectedNews] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showAllEvents, setShowAllEvents] = useState(false)
  const newsItems = [
    {
      title: 'New Research Center Opens',
      date: 'November 1, 2025',
      category: 'Campus News',
      image: '/pgc1.png',
      excerpt: 'State-of-the-art facility dedicated to AI and robotics research',
      readTime: '5 min read',
      fullContent: 'We are thrilled to announce the opening of our new state-of-the-art Research Center dedicated to Artificial Intelligence and Robotics. This 50,000 square foot facility features cutting-edge laboratories, collaborative workspaces, and advanced computing infrastructure. The center will serve as a hub for groundbreaking research in machine learning, computer vision, and autonomous systems. With partnerships from leading tech companies and government agencies, our students and faculty will have access to unprecedented resources and opportunities. The facility includes specialized labs for robot prototyping, AI model training clusters, and innovation spaces for interdisciplinary collaboration.',
    },
    {
      title: 'Students Win National Competition',
      date: 'October 28, 2025',
      category: 'Achievements',
      image: '/pgc2.png',
      excerpt: 'Our team secured first place in the National Innovation Challenge',
      readTime: '3 min read',
      fullContent: 'Congratulations to our brilliant students who secured first place at the National Innovation Challenge! Competing against 150 teams from universities across the country, our team presented an innovative solution for sustainable urban transportation. Their project, "EcoMove," combines IoT sensors, AI algorithms, and mobile technology to optimize public transit routes and reduce carbon emissions. The team will receive $50,000 in funding to further develop their prototype and mentorship from industry leaders. This achievement showcases the exceptional talent and innovative thinking of our student community.',
    },
    {
      title: 'Annual Tech Summit 2025',
      date: 'October 25, 2025',
      category: 'Events',
      image: '/pgc3.png',
      excerpt: 'Join industry leaders and innovators for three days of learning',
      readTime: '4 min read',
      fullContent: 'Mark your calendars for our Annual Tech Summit 2025, taking place December 5-7! This three-day event brings together industry leaders, innovators, and students for an immersive experience in technology and entrepreneurship. Featured speakers include CEOs from Fortune 500 companies, successful startup founders, and renowned researchers. The summit includes keynote presentations, hands-on workshops, networking sessions, and a startup pitch competition with $100,000 in prizes. Students will have the opportunity to connect with potential employers, learn about emerging technologies, and gain insights into career paths in tech.',
    },
    {
      title: 'Partnership with Global Tech Giants',
      date: 'October 20, 2025',
      category: 'Partnerships',
      image: '/pgc4.png',
      excerpt: 'New collaborations to enhance student internship opportunities',
      readTime: '6 min read',
      fullContent: 'We are excited to announce strategic partnerships with leading global technology companies including Microsoft, Google, and Amazon. These collaborations will provide our students with enhanced internship opportunities, access to cutting-edge technologies, and real-world project experiences. The partnerships include sponsored research projects, guest lectures from industry experts, and dedicated recruitment programs. Students will have the opportunity to work on actual business challenges, gain mentorship from professionals, and potentially secure full-time positions upon graduation. This initiative reinforces our commitment to bridging the gap between academic learning and industry requirements.',
    },
    {
      title: 'Scholarship Program Expansion',
      date: 'October 15, 2025',
      category: 'Announcements',
      image: '/pgc1.png',
      excerpt: 'Increased funding to support deserving students',
      readTime: '4 min read',
      fullContent: 'We are proud to announce a significant expansion of our scholarship program, with $5 million in additional funding for the upcoming academic year. This expansion will provide financial support to 200 additional students, making quality education accessible to talented individuals regardless of their economic background. The scholarships cover tuition fees, accommodation, and living expenses. We have also introduced new merit-based scholarships for students excelling in STEM fields, arts, and community service. Applications for the next academic year are now open, and we encourage all eligible students to apply.',
    },
    {
      title: 'Alumni Success Stories',
      date: 'October 10, 2025',
      category: 'Alumni',
      image: '/pgc2.png',
      excerpt: 'Meet graduates making waves in their industries',
      readTime: '7 min read',
      fullContent: 'Our alumni continue to make us proud with their remarkable achievements across various industries. This month, we spotlight three exceptional graduates: Sarah Chen (Class of 2018), now a Senior AI Researcher at DeepMind; Michael Rodriguez (Class of 2016), founder of a successful fintech startup valued at $100 million; and Dr. Emily Watson (Class of 2015), leading groundbreaking cancer research at Johns Hopkins. Their journeys from our campus to global recognition inspire current students and demonstrate the quality of education and opportunities we provide. Read their full stories and advice for current students in our alumni magazine.',
    },
  ]

  const allEvents = [
    { title: 'Open House Day', date: 'Nov 15, 2025', time: '10:00 AM', description: 'Tour our campus and meet faculty' },
    { title: 'Career Fair', date: 'Nov 20, 2025', time: '9:00 AM', description: 'Connect with top employers' },
    { title: 'Winter Graduation', date: 'Dec 10, 2025', time: '2:00 PM', description: 'Celebrating our graduates' },
    { title: 'Tech Summit 2025', date: 'Dec 5-7, 2025', time: 'All Day', description: 'Three days of innovation' },
    { title: 'Alumni Reunion', date: 'Dec 15, 2025', time: '6:00 PM', description: 'Reconnect with classmates' },
    { title: 'Research Symposium', date: 'Jan 10, 2026', time: '9:00 AM', description: 'Showcase of student research' },
  ]

  const upcomingEvents = allEvents.slice(0, 3)
  
  const filteredNews = selectedCategory === 'All' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory)

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
              News & Events
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Stay connected with the latest happenings in our community
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {filteredNews.map((item, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 h-64 md:h-auto">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                          {item.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <HiCalendar className="mr-1" />
                          {item.date}
                        </div>
                      </div>
                      <h2 className="font-heading font-bold text-2xl text-primary mb-3 hover:text-accent transition-colors">
                        {item.title}
                      </h2>
                      <p className="text-gray-600 mb-4">{item.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500 text-sm">
                          <HiClock className="mr-1" />
                          {item.readTime}
                        </div>
                        <button 
                          onClick={() => setSelectedNews(item)}
                          className="text-accent hover:text-accent/80 font-semibold"
                        >
                          Read More →
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:sticky lg:top-32 lg:self-start space-y-8">
            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="font-heading font-bold text-2xl text-primary mb-6">
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-accent pl-4 py-2 hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <h4 className="font-semibold text-primary mb-1">{event.title}</h4>
                    <div className="flex items-center text-sm text-gray-500 space-x-3">
                      <span className="flex items-center">
                        <HiCalendar className="mr-1" />
                        {event.date}
                      </span>
                      <span className="flex items-center">
                        <HiClock className="mr-1" />
                        {event.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => setShowAllEvents(true)}
                className="w-full mt-6 bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                View All Events
              </button>
            </motion.div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="font-heading font-bold text-2xl text-primary mb-6">
                Categories
              </h3>
              <div className="space-y-2">
                {['All', 'Campus News', 'Achievements', 'Events', 'Partnerships', 'Announcements', 'Alumni'].map((cat, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center justify-between group ${
                      selectedCategory === cat ? 'bg-accent text-white' : 'hover:bg-gray-50'
                    }`}
                  >
                    <span className={`flex items-center ${selectedCategory === cat ? 'text-white' : 'text-gray-700 group-hover:text-accent'}`}>
                      <HiTag className="mr-2" />
                      {cat}
                    </span>
                    <span className={`text-sm ${selectedCategory === cat ? 'text-white' : 'text-gray-400'}`}>→</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* News Detail Modal */}
      {selectedNews && (
        <Modal 
          isOpen={!!selectedNews} 
          onClose={() => setSelectedNews(null)} 
          title={selectedNews.title}
          size="lg"
        >
          <div className="space-y-4">
            <img 
              src={selectedNews.image} 
              alt={selectedNews.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="flex items-center space-x-4 text-sm">
              <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full font-semibold">
                {selectedNews.category}
              </span>
              <div className="flex items-center text-gray-500">
                <HiCalendar className="mr-1" />
                {selectedNews.date}
              </div>
              <div className="flex items-center text-gray-500">
                <HiClock className="mr-1" />
                {selectedNews.readTime}
              </div>
            </div>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {selectedNews.fullContent}
              </p>
            </div>
          </div>
        </Modal>
      )}

      {/* All Events Modal */}
      <Modal 
        isOpen={showAllEvents} 
        onClose={() => setShowAllEvents(false)} 
        title="All Upcoming Events"
        size="lg"
      >
        <div className="space-y-4">
          {allEvents.map((event, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg p-4 hover:border-accent transition-colors"
            >
              <h3 className="font-heading font-bold text-lg text-primary mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">{event.description}</p>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <span className="flex items-center">
                  <HiCalendar className="mr-1 text-accent" />
                  {event.date}
                </span>
                <span className="flex items-center">
                  <HiClock className="mr-1 text-accent" />
                  {event.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  )
}

export default News
