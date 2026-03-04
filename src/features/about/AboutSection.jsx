export default function AboutSection() {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>Experienced Developer with proven expertise in building responsive web applications using modern JavaScript frameworks. Proficient in core web technologies with strong backend and mobile development capabilities.</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src="assets/img/profile-img.png" className="img-fluid" alt="Agung Saputra" />
          </div>
          <div className="col-lg-8 content">
            <h2>Web &amp; Mobile Developer</h2>
            <p className="fst-italic py-3">
              Collaborative team player experienced in Agile, Scrum, and Waterfall methodologies. 
              Skilled in project management tools including Jira and Trello for efficient task tracking and delivery.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Jakarta Timur, Indonesia</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>082338039761</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>agung.syntax@gmail.com</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Informatics Management</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>University:</strong> <span>IPB, Bogor</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              Experienced in Docker containerization and Jenkins automation. Direct reporting experience to Team Leads and Project Managers across banking, insurance, e-commerce, and fintech industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
