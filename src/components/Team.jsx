import './Team.css'
import ceo1 from '../assets/ceo1.jpg'
import hr from '../assets/hr.jpg'
import pro from '../assets/pro.jpg'
import agash from '../assets/agash.jpg'
import ashok from '../assets/ashok.jpg'
import varsha from '../assets/varsha.jpg'
import suji from '../assets/suji.jpg'
import maha from '../assets/maha.jpg'
import thangam from '../assets/thangam.jpg'

function Team() {
  const teamMembers = [
    {
      name: "Mr. Girithar V.K",
      position: "CEO & Founder",
      expertise: "Frontend Development",
      image: ceo1,
    },
    {
      name: "Mr.Prithive R.S",
      position: "Hr",
      expertise: "Backend Development & Graphics Designing",
      image: hr,
    },
    {
      name: "Mr. JeyaSurya K",
      position: "Project Manager",
      expertise: "Full Stack Development & Ai/Ml",
      image: pro,
    },
    {
      name: "Mr. Agash N",
      position: "Team Leader",
      expertise: "Full Stack Developer",
      image: agash,
    },
    {
      name: "Mr. Ashok A.P",
      position: "Full Stack Developer",
      expertise: "Developer",
      image: ashok,
    },
    {
      name: "Ms. Varsha V",
      position: " Developer",
      expertise: "Frontend Developer",
      image: varsha,
    },
    {
      name: "Ms. Veeralakshmi M",
      position: "Developer",
      expertise: "Fullstack Developer",
      image: suji,
    },
    {
      name: "Ms. Subhalekshmi K",
      position: "Developer",
      expertise: "Full Stack Developer",
      image: maha,
    },
    {
      name: "Mrs. Thangam Sundar N.B",
      position: "QA Lead",
      expertise: "Quality Assurance",
      image: thangam,
    }
  ]

  return (
    <section id="team" className="team">
      <div className="team-container">
        <div className="section-header">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-description">
            Talented professionals dedicated to delivering excellence
          </p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              {member.image ? (
                <img src={member.image} alt={member.name} className="member-avatar-img" />
              ) : (
                <div className="member-avatar">{member.initials}</div>
              )}
              <h3 className="member-name">{member.name}</h3>
              <p className="member-position">{member.position}</p>
              <p className="member-expertise">{member.expertise}</p>
              <div className="social-icons">
                <a href="#" className="social-icon">in</a>
                <a href="#" className="social-icon">tw</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
