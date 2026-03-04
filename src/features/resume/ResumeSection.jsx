export default function ResumeSection() {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>Pengalaman profesional saya di berbagai perusahaan dan industri selama lebih dari 5 tahun.</p>
      </div>
      <div className="container">
        <div className="row">

          {/* Left Column */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Agung Saputra</h4>
              <p><em>Experienced Web &amp; Mobile Developer with 5+ years expertise in React.js, Next.js, Vue.js, Flutter, and backend technologies including Laravel, Node.js, and Java Quarkus.</em></p>
              <ul>
                <li>Jakarta Timur, DKI Jakarta, Indonesia</li>
                <li>082338039761</li>
                <li>agung.syntax@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Informatics Management</h4>
              <h5>Mar 2016 — Sept 2019</h5>
              <p><em>Institut Pertanian Bogor (IPB), Bogor</em></p>
              <p>Fondasi kuat dalam ilmu komputer, sistem informasi, dan pengembangan perangkat lunak.</p>
            </div>

            <h3 className="resume-title">Freelance</h3>
            <div className="resume-item">
              <h4>Fullstack Developer — Apotek Roxy</h4>
              <h5>Feb 2025 — Jun 2025</h5>
              <p><em>React, Next.js, Laravel</em></p>
              <ul>
                <li>Developing pharmacy management systems with React & Next.js frontend</li>
                <li>Building RESTful APIs using Laravel for pharmacy operations</li>
                <li>Enhanced cashier workflow with custom keyboard shortcuts</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Flutter Developer — Cometsoul</h4>
              <h5>Mar 2024 — Dec 2024</h5>
              <p><em>Flutter, REST API</em></p>
              <ul>
                <li>Developed POS mobile applications using Flutter</li>
                <li>Built reusable widget components for multiple screen sizes</li>
                <li>Integrated REST API for real-time data synchronization</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Fullstack Developer — The Arthanata</h4>
              <h5>Jul 2021 — Nov 2021</h5>
              <p><em>ReactJS, Laravel</em></p>
              <ul>
                <li>Built responsive web apps with pixel-perfect UI implementation</li>
                <li>Developed RESTful API integration and backend services</li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience</h3>

            <div className="resume-item">
              <h4>Fullstack Developer — IFG Life</h4>
              <h5>Jul 2025 — Present</h5>
              <p><em>ReactJS, Java Quarkus, HTML/CSS/JS</em></p>
              <ul>
                <li>Part of DCMS team creating documents for clients and government agencies</li>
                <li>Built HTML templates integrated with database configuration</li>
                <li>Frontend dashboard with HTML, CSS, JS; documents with ReactJS; backend with Java Quarkus</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Fullstack Developer — Bank DKI Jakarta</h4>
              <h5>Dec 2024 — Jun 2025</h5>
              <p><em>React, Next.js, Angular, Nuxt.js, Laravel, Docker, Jenkins</em></p>
              <ul>
                <li>Redesigned and rebuilt Jakone Billing Generator 2</li>
                <li>Refactored DKI IST Branch Portal and Config Portal</li>
                <li>Implemented Docker containerization and Jenkins CI/CD pipelines</li>
                <li>Resolved critical bugs in Digital Wallet webview components</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Frontend Developer — Sinarmas MSIG Life</h4>
              <h5>Apr 2023 — Dec 2024</h5>
              <p><em>React.js, Next.js</em></p>
              <ul>
                <li>Initiated and developed PANDORA project frontend from scratch</li>
                <li>Built internal transaction and payment management systems</li>
                <li>Handled full development cycle: UI/UX design, responsive implementation, API integration</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Frontend Developer — Monster Group</h4>
              <h5>Sept 2021 — Nov 2022</h5>
              <p><em>Next.js, Xendit Payment Gateway</em></p>
              <ul>
                <li>Designed and developed lakugan.id e-commerce platform for gold trading</li>
                <li>Integrated Xendit payment gateway for secure financial transactions</li>
                <li>Implemented product catalog, user auth, cart, and order processing</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Frontend Developer — Unictive</h4>
              <h5>Sept 2020 — Sept 2021</h5>
              <ul>
                <li>Developed BCA Expoversary digital platform with mortgage events & doorprize systems</li>
                <li>Built interfaces for BCA KPR, Mandiri Living, and Copra banking products</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Frontend Developer — Weekend Inc.</h4>
              <h5>Sept 2019 — Sept 2020</h5>
              <ul>
                <li>Developed DWP 2019 (Djakarta Warehouse Project) event website</li>
                <li>Created corporate profile websites: marlboro.id and src.id</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
