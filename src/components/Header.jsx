import './Header.css'
import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-container">
          <img
            src="/src/assets/gv1.png"
            alt="Logo"
            className="navbar-logo"
            height={32}
            width={32}
          />
          <div className="logo">GV INFO PARK</div>
        </div>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="hamburger"></span>
        </button>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#software">Software</a></li>
          <li><a href="#internships">Internships</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#contact-section">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
