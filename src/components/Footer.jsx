import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { SOCIAL_LINKS } from '../config/social'

const Footer = () => {
  const socialIcons = [
    { name: 'Facebook', icon: FaFacebook, link: SOCIAL_LINKS.facebook },
    { name: 'Twitter', icon: FaTwitter, link: SOCIAL_LINKS.twitter },
    { name: 'Instagram', icon: FaInstagram, link: SOCIAL_LINKS.instagram },
    { name: 'LinkedIn', icon: FaLinkedin, link: SOCIAL_LINKS.linkedin },
    { name: 'YouTube', icon: FaYoutube, link: SOCIAL_LINKS.youtube },
  ]
  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent/10 to-primary opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.png" 
                alt="PGC Logo" 
                className="h-12 w-auto object-contain bg-white rounded-lg p-1"
              />
              <h3 className="font-heading font-bold text-xl">PGC Muridke</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering minds and building futures through quality education.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social) => 
                social.link ? (
                  <a 
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon size={20} />
                  </a>
                ) : null
              )}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-accent transition-colors">Programs</Link></li>
              <li><Link to="/admissions" className="text-gray-300 hover:text-accent transition-colors">Admissions</Link></li>
              <li><Link to="/faculty" className="text-gray-300 hover:text-accent transition-colors">Faculty</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/news" className="text-gray-300 hover:text-accent transition-colors">News & Events</Link></li>
              <li><Link to="/student-life" className="text-gray-300 hover:text-accent transition-colors">Student Life</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Library</a></li>
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Career Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <HiLocationMarker className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">Near THQ Hospital, Muridke, Pakistan</span>
              </li>
              <li className="flex items-center space-x-2">
                <HiPhone />
                <span className="text-gray-300">+92 (300) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <HiMail />
                <span className="text-gray-300">info@excellence.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Punjab College Muridke. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
