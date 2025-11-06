import { motion } from 'framer-motion'
import { HiUserGroup, HiAcademicCap, HiHeart, HiLightningBolt } from 'react-icons/hi'

const StudentLife = () => {
  const activities = [
    {
      icon: HiUserGroup,
      title: 'Student Clubs',
      description: '50+ clubs covering tech, arts, sports, and more',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600',
    },
    {
      icon: HiLightningBolt,
      title: 'Sports & Fitness',
      description: 'Modern gym, courts, and competitive teams',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600',
    },
    {
      icon: HiHeart,
      title: 'Community Service',
      description: 'Make a difference through volunteer programs',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600',
    },
    {
      icon: HiAcademicCap,
      title: 'Cultural Events',
      description: 'Festivals, concerts, and celebrations year-round',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600',
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
                  <p className="text-gray-200">{activity.description}</p>
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
            <button className="bg-white text-primary hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl">
              Book a Tour
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default StudentLife
