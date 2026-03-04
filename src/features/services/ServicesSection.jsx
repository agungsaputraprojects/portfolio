const services = [
  { color: 'item-cyan',   icon: 'bi-layout-text-window-reverse', title: 'Frontend Development', desc: 'Building responsive and interactive web apps using React.js, Next.js, Vue.js, Nuxt, and Angular with modern UI frameworks like Tailwind CSS and Bootstrap.' },
  { color: 'item-orange', icon: 'bi-server',                     title: 'Backend Development',  desc: 'Developing scalable RESTful APIs and backend services using Laravel, Node.js, Java Quarkus, and Spring Boot for enterprise-grade applications.' },
  { color: 'item-teal',   icon: 'bi-phone',                      title: 'Mobile Development',   desc: 'Cross-platform mobile app development using Flutter and React Native, delivering smooth and consistent user experiences on iOS and Android.' },
  { color: 'item-red',    icon: 'bi-box',                        title: 'DevOps & CI/CD',       desc: 'Containerizing applications with Docker and establishing automated CI/CD pipelines using Jenkins for reliable and efficient software delivery.' },
  { color: 'item-indigo', icon: 'bi-database',                   title: 'Database Management',  desc: 'Designing and managing relational databases (PostgreSQL, MySQL) and integrating with ORMs for optimized data flow in complex applications.' },
  { color: 'item-pink',   icon: 'bi-people',                     title: 'Agile Collaboration',  desc: 'Experienced working in Agile and Scrum environments, collaborating with cross-functional teams using Jira, Trello, and GitLab for version control.' },
]

const blobPath = "M300,521C376,517,466,529,510,468C554,407,508,328,491,256C474,184,479,96,416,58C348,18,261,5,175,40C97,76,51,156,36,239C21,319,43,401,96,461C147,519,223,538,300,521"

export default function ServicesSection() {
  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Layanan pengembangan software yang saya tawarkan berdasarkan keahlian dan pengalaman profesional.</p>
      </div>
      <div className="container">
        <div className="row gy-4">
          {services.map((s, i) => (
            <div key={s.title} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={`${(i + 1) * 100}`}>
              <div className={`service-item ${s.color} position-relative`}>
                <div className="icon">
                  <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="none" strokeWidth="0" fill="#f5f5f5" d={blobPath}></path>
                  </svg>
                  <i className={`bi ${s.icon}`}></i>
                </div>
                <a href="#" style={{ display: 'block', marginBottom: 8 }}>
                  <h3>{s.title}</h3>
                </a>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
