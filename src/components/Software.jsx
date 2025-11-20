import './Software.css'

function Software() {
  const software = [
    {
      title: "Billing Management",
      description: "Complete billing solution with invoicing, payment tracking, and financial reporting.",
      icon: "💰"
    },
    {
      title: "Hospital Management",
      description: "Comprehensive healthcare system for patient records, appointments, and medical data.",
      icon: "🏥"
    },
    {
      title: "School Management",
      description: "Educational platform for student records, attendance, grades, and communications.",
      icon: "🎓"
    },
    {
      title: "Grocery Bill & Stock Management",
      description: "Retail solution for inventory tracking, billing, and stock management.",
      icon: "🛍️"
    },
    {
      title: "PSO Management",
      description: "Petrol pump management system with sales tracking and inventory control.",
      icon: "⛽"
    },
    {
      title: "Enterprise Resource Planning",
      description: "Integrated business management software for operations and planning.",
      icon: "🏢"
    },
    {
      title: "HR Management",
      description: "Human resources system for payroll, attendance, and employee management.",
      icon: "👥"
    },
    {
      title: "Hotel Management",
      description: "Complete hospitality solution with booking, billing, and room management.",
      icon: "🏨"
    },
    {
      title: "Turf Booking Management",
      description: "Sports facility booking system with scheduling and payment processing.",
      icon: "⚽"
    }
  ]

  return (
    <section id="software" className="software">
      <div className="software-container">
        <div className="section-header">
          <h2 className="section-title">Our Software Solutions</h2>
          <p className="section-description">
            Industry-specific software tailored to streamline your business operations
          </p>
        </div>
        <div className="software-grid">
          {software.map((item, index) => (
            <div key={index} className="software-card">
              <div className="software-icon">{item.icon}</div>
              <h3 className="software-title">{item.title}</h3>
              <p className="software-description">{item.description}</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Software
