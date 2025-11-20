import { useState, useRef } from 'react'
import './Contact.css'
import * as emailjs from 'emailjs-com'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm(
      'service_2n50jnp',      // replace with your EmailJS service ID
      'template_nntuazf',     // replace with your EmailJS template ID
      formRef.current,
      'Qc-8huj0_jDlqgfDF'          // replace with your EmailJS user ID
    ).then(() => {
      setSubmitted(true)
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
        setSubmitted(false)
      }, 3000)
    })
  }

  return (
    <section id="contact-section" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-description">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3 className="info-title">Address</h3>
              <p className="info-text">
                GV INFO PARK<br/>
                20/48 Therimelvilai, Eathamozhi<br/>
                Nagercoil, Kanyakumari 629501
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3 className="info-title">Phone</h3>
              <p className="info-text">
                +91 9025493230<br/>
                Mon - Fri: 9:00 AM - 6:00 PM
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">✉️</div>
              <h3 className="info-title">Email</h3>
              <p className="info-text">
                gvinfopark@gmail.com<br/>
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">🕒</div>
              <h3 className="info-title">Working Hours</h3>
              <p className="info-text">
                Monday - Friday<br/>
                9:00 AM - 6:00 PM<br/>
                Saturday: 10:00 AM - 4:00 PM
              </p>
            </div>
          </div>

          <form
            className="contact-form"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            {submitted && (
              <div className="success-message">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 123 456 7890"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your inquiry..."
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
