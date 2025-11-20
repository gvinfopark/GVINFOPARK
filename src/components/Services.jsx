import './Services.css'

function Services() {
  const services = [
    {
      title: "E-commerce Website Development",
      description: "Build powerful online stores with seamless shopping experiences, secure payment gateways, and inventory management systems.",
      icon: "🛒"
    },
    {
      title: "SEO",
      description: "Boost your online visibility with strategic search engine optimization that drives organic traffic and increases conversions.",
      icon: "🔍"
    },
    {
      title: "Digital Marketing",
      description: "Reach your target audience effectively through data-driven marketing campaigns across multiple digital channels.",
      icon: "📱"
    },
    {
      title: "UI/UX Designing",
      description: "Create intuitive and visually stunning interfaces that enhance user experience and drive engagement.",
      icon: "🎨"
    },
    {
      title: "Digital Newspaper",
      description: "Transform traditional publishing into modern digital platforms with interactive content and real-time updates.",
      icon: "📰"
    }
  ]

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-description">
            Comprehensive digital solutions tailored to elevate your business
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
