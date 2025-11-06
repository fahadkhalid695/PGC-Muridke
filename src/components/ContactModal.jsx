import { useState } from 'react'
import Modal from './Modal'

const ContactModal = ({ isOpen, onClose, subject = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: subject,
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you, ${formData.name}! We'll contact you soon at ${formData.email}`)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    onClose()
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Contact Us" size="md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Subject *
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
          >
            <option value="">Select a subject</option>
            <option value="admissions">Admissions Inquiry</option>
            <option value="programs">Program Information</option>
            <option value="campus-tour">Campus Tour</option>
            <option value="faculty">Faculty Positions</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
            placeholder="Tell us how we can help you..."
          ></textarea>
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            className="flex-1 bg-accent hover:bg-accent/90 text-white py-3 rounded-lg font-semibold transition-all"
          >
            Send Message
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-6 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold transition-all"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  )
}

export default ContactModal
