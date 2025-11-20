import './Footer.css'

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">GV INFO PARK</h3>
            <p className="footer-description">
              Empowering businesses and individuals through innovative digital solutions and quality education.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#software">Software</a></li>
              <li><a href="#internships">Internships</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#contact-section">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#services">E-commerce Development</a></li>
              <li><a href="#services">Digital Marketing</a></li>
              <li><a href="#services">UI/UX Design</a></li>
              <li><a href="#software">Our Software</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-contact">
              <li>Email: info@gvinfopark.com</li>
              <li>Phone: +91 123 456 7890</li>
              <li>Address: Your City, India</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 GV INFO PARK. All rights reserved.</p>
          <div className="social-links">
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
