import './Internships.css'

function Internships() {
  const internships = [
    {
      title: "React Development",
      duration: "1 Months",
      description: "Master modern front-end development with React, hooks, state management, and component architecture.",
      skills: ["React JS", "HTML", "Css", "Java Script"]
    },
    {
      title: "Python Full Stack ",
      duration: "3-6 Months",
      description: "Learn Python programming, data structures, web frameworks, and automation techniques.",
      skills: ["Python", "Django/Flask", "MySQL/SQLite", "Rest APIs"]
    },
    
    {
      title: "Java Full Stack",
      duration: "6 Months",
      description: "Build enterprise-grade applications using Java, Spring Boot, and modern web technologies.",
      skills: ["Java", "Spring Boot", "MySQL", "Hibernate","React JS"]
    },
    {
      title: "MERN Stack",
      duration: "6 Months",
      description: "Master the complete JavaScript ecosystem with MongoDB, Express, React, and Node.js.",
      skills: ["MongoDB", "Express", "React", "Node.js","Rest APIs"]
    }
  ]

  return (
    <section id="internships" className="internships">
      <div className="internships-container">
        <div className="section-header">
          <h2 className="section-title">Internship Programs</h2>
          <p className="section-description">
            Kickstart your tech career with industry-relevant training and hands-on experience
          </p>
        </div>
        <div className="internships-grid">
          {internships.map((internship, index) => (
            <div key={index} className="internship-card">
              <div className="internship-header">
                <h3 className="internship-title">{internship.title}</h3>
                <span className="internship-duration">{internship.duration}</span>
              </div>
              <p className="internship-description">{internship.description}</p>
              <div className="skills-container">
                <h4 className="skills-title">What You'll Learn:</h4>
                <div className="skills-list">
                  {internship.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Internships
