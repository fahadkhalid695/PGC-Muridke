import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HiAcademicCap, HiUserGroup, HiGlobeAlt, HiTrendingUp, HiLightBulb, HiHeart } from 'react-icons/hi'

const Counter = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let startTime
    let animationFrame

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / (duration * 1000)

      if (progress < 1) {
        setCount(Math.floor(end * progress))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, end, duration])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

const Home = () => {
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true })

  const stats = [
    { icon: HiAcademicCap, value: 5000, label: 'Graduates', suffix: '+' },
    { icon: HiUserGroup, value: 30, label: 'Programs', suffix: '+' },
    { icon: HiGlobeAlt, value: 10, label: 'Partnerships', suffix: '+' },
    { icon: HiTrendingUp, value: 95, label: 'Success Rate', suffix: '%' },
  ]

  const features = [
    {
      icon: HiAcademicCap,
      title: 'World-Class Education',
      description: 'Cutting-edge curriculum designed by industry experts',
    },
    {
      icon: HiLightBulb,
      title: 'Innovation Hub',
      description: 'State-of-the-art facilities and research opportunities',
    },
    {
      icon: HiHeart,
      title: 'Student-Centered',
      description: 'Personalized support and mentorship programs',
    },
  ]

  const news = [
    {
      title: 'New Research Center Opens',
      date: 'Nov 1, 2025',
      image: '/pgc1.png',
    },
    {
      title: 'Students Win National Competition',
      date: 'Oct 28, 2025',
      image: '/pgc2.png',
    },
    {
      title: 'Annual Tech Summit 2025',
      date: 'Oct 25, 2025',
      image: '/pgc3.png',
    },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-accent">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920')] bg-cover bg-center opacity-30"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4 max-w-5xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-heading font-bold text-5xl md:text-7xl mb-6"
          >
            Empowering Minds.<br />Building Futures.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            Join a community of learners, innovators, and future leaders
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/admissions"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Apply Now
            </Link>
            <Link
              to="/programs"
              className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 border-2 border-white"
            >
              Explore Programs
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                <div className="font-heading font-bold text-4xl md:text-5xl text-primary mb-2">
                  <Counter end={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience excellence in education with our comprehensive approach
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <feature.icon className="w-16 h-16 text-accent mb-6" />
                <h3 className="font-heading font-bold text-2xl text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
              Latest News & Events
            </h2>
            <p className="text-xl text-gray-600">Stay updated with our community</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-accent text-sm font-semibold mb-2">{item.date}</div>
                  <h3 className="font-heading font-bold text-xl text-primary">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/news"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
            >
              View All News
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Join thousands of students who have transformed their lives through education
            </p>
            <Link
              to="/admissions"
              className="inline-block bg-white text-primary hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
            >
              Apply Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
