import { motion } from 'framer-motion'
import { HiCalendar, HiClock, HiTag } from 'react-icons/hi'

const News = () => {
  const newsItems = [
    {
      title: 'New Research Center Opens',
      date: 'November 1, 2025',
      category: 'Campus News',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
      excerpt: 'State-of-the-art facility dedicated to AI and robotics research',
      readTime: '5 min read',
    },
    {
      title: 'Students Win National Competition',
      date: 'October 28, 2025',
      category: 'Achievements',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800',
      excerpt: 'Our team secured first place in the National Innovation Challenge',
      readTime: '3 min read',
    },
    {
      title: 'Annual Tech Summit 2025',
      date: 'October 25, 2025',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      excerpt: 'Join industry leaders and innovators for three days of learning',
      readTime: '4 min read',
    },
    {
      title: 'Partnership with Global Tech Giants',
      date: 'October 20, 2025',
      category: 'Partnerships',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
      excerpt: 'New collaborations to enhance student internship opportunities',
      readTime: '6 min read',
    },
    {
      title: 'Scholarship Program Expansion',
      date: 'October 15, 2025',
      category: 'Announcements',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800',
      excerpt: 'Increased funding to support deserving students',
      readTime: '4 min read',
    },
    {
      title: 'Alumni Success Stories',
      date: 'October 10, 2025',
      category: 'Alumni',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800',
      excerpt: 'Meet graduates making waves in their industries',
      readTime: '7 min read',
    },
  ]

  const upcomingEvents = [
    { title: 'Open House Day', date: 'Nov 15, 2025', time: '10:00 AM' },
    { title: 'Career Fair', date: 'Nov 20, 2025', time: '9:00 AM' },
    { title: 'Winter Graduation', date: 'Dec 10, 2025', time: '2:00 PM' },
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
              {newsItems.map((item, index) => (
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
                        <button className="text-accent hover:text-accent/80 font-semibold">
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
          <div className="space-y-8">
            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-lg p-6 sticky top-32"
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
              <button className="w-full mt-6 bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold transition-colors">
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
                {['Campus News', 'Achievements', 'Events', 'Partnerships', 'Announcements', 'Alumni'].map((cat, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between group"
                  >
                    <span className="flex items-center text-gray-700 group-hover:text-accent">
                      <HiTag className="mr-2" />
                      {cat}
                    </span>
                    <span className="text-sm text-gray-400">→</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
