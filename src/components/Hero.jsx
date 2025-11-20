import './Hero.css'

function Hero() {
  const handleScrollToServices = (e) => {
    e.preventDefault()
    const section = document.getElementById('services')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-bg-image"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Welcome to GV INFO PARK</h1>
        <p className="hero-subtitle">Transforming Ideas into Digital Reality</p>
        <p className="hero-description">
          We are your trusted partner in web development, digital marketing, and technology education.
          Empowering businesses and individuals to thrive in the digital world.
        </p>
        
      </div>
      <div className="hero-background">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </section>
  )
}

export default Hero
