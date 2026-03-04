import { useState } from 'react'

const items = [
  {
    id: 1, filter: 'filter-app',
    img: 'assets/img/masonry-portfolio/masonry-portfolio-1.jpg',
    title: 'Jakone Billing Generator',
    desc: 'Web App',
    category: 'Web Application',
    client: 'Bank DKI Jakarta',
    date: 'Dec 2024 — Jun 2025',
    tech: 'React.js, Laravel',
    detail: 'Complete redesign and rebuild of Jakone Billing Generator 2. Implemented modern UI with React.js and robust backend with Laravel, integrated with Docker for containerization.',
  },
  {
    id: 2, filter: 'filter-product',
    img: 'assets/img/masonry-portfolio/masonry-portfolio-2.jpg',
    title: 'PANDORA Project',
    desc: 'Dashboard',
    category: 'Web Application',
    client: 'Sinarmas MSIG Life',
    date: 'Apr 2023 — Dec 2024',
    tech: 'React.js, Next.js',
    detail: 'Initiated and developed PANDORA project frontend from scratch. Built internal transaction and payment management systems for MSIG operations with full UI/UX design and API integration.',
  },
  {
    id: 3, filter: 'filter-branding',
    img: 'assets/img/masonry-portfolio/masonry-portfolio-3.jpg',
    title: 'Lakugan.id',
    desc: 'E-Commerce',
    category: 'E-Commerce Platform',
    client: 'Monster Group',
    date: 'Sept 2021 — Nov 2022',
    tech: 'Next.js, Xendit',
    detail: 'Comprehensive e-commerce platform for gold trading. Built complete UI with responsive design, integrated Xendit payment gateway, and implemented product catalog, user auth, cart, and order processing.',
  },
  {
    id: 4, filter: 'filter-app',
    img: 'assets/img/masonry-portfolio/masonry-portfolio-4.jpg',
    title: 'Apotek Roxy',
    desc: 'Web App',
    category: 'Pharmacy Management',
    client: 'Apotek Roxy (Freelance)',
    date: 'Feb 2025 — Jun 2025',
    tech: 'React, Next.js, Laravel',
    detail: 'Comprehensive pharmacy management system with cashier workflow, inventory management, and customer transaction processing. Custom keyboard shortcuts for high-volume retail environments.',
  },
  {
    id: 5, filter: 'filter-product',
    img: 'assets/img/masonry-portfolio/masonry-portfolio-5.jpg',
    title: 'Cometsoul POS',
    desc: 'Mobile App',
    category: 'Mobile Application',
    client: 'Cometsoul (Freelance)',
    date: 'Mar 2024 — Dec 2024',
    tech: 'Flutter, REST API',
    detail: 'Point of Sale mobile application built with Flutter. Reusable widget components ensuring consistent UI across devices, with real-time data synchronization via REST API.',
  },
  {
    id: 6, filter: 'filter-branding',
    img: 'assets/img/masonry-portfolio/masonry-portfolio-6.jpg',
    title: 'BCA Expoversary',
    desc: 'Event Platform',
    category: 'Event Website',
    client: 'BCA / Unictive',
    date: 'Sept 2020 — Sept 2021',
    tech: 'React.js, JavaScript',
    detail: 'Digital platform for BCA anniversary celebration featuring mortgage events, doorprize systems, and installment programs. Built interfaces for BCA KPR, Mandiri Living, and Copra banking products.',
  },
  {
    id: 7, filter: 'filter-app',
    img: 'assets/img/masonry-portfolio/masonry-portfolio-7.jpg',
    title: 'DWP 2019 Website',
    desc: 'Event Website',
    category: 'Event Website',
    client: 'Weekend Inc.',
    date: 'Sept 2019 — Sept 2020',
    tech: 'HTML, CSS, JavaScript',
    detail: 'Information-rich event website for Djakarta Warehouse Project 2019 with engaging animations and interactive elements to enhance user engagement for festival attendees.',
  },
  {
    id: 8, filter: 'filter-product',
    img: 'assets/img/masonry-portfolio/masonry-portfolio-8.jpg',
    title: 'DKI IST Portal',
    desc: 'Dashboard',
    category: 'Web Application',
    client: 'Bank DKI Jakarta',
    date: 'Dec 2024 — Jun 2025',
    tech: 'Angular, Nuxt.js, Docker',
    detail: 'Comprehensive code refactoring for DKI IST Branch Portal and DKI IST Config Portal. Established automated CI/CD pipelines through Jenkins for improved maintainability and performance.',
  },
  {
    id: 9, filter: 'filter-branding',
    img: 'assets/img/masonry-portfolio/masonry-portfolio-9.jpg',
    title: 'DCMS IFG Life',
    desc: 'Document System',
    category: 'Document Management',
    client: 'IFG Life',
    date: 'Jul 2025 — Present',
    tech: 'ReactJS, Java Quarkus',
    detail: 'Document management system for creating official documents needed by clients and government agencies. HTML templates integrated with database configuration using React.js frontend and Java Quarkus backend.',
  },
]

const filters = [
  { key: '*',               label: 'All' },
  { key: 'filter-app',     label: 'App' },
  { key: 'filter-product', label: 'Dashboard' },
  { key: 'filter-branding',label: 'Platform' },
]

function PortfolioModal({ item, onClose }) {
  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.7)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#fff', borderRadius: 12, maxWidth: 800, width: '100%',
          maxHeight: '90vh', overflowY: 'auto',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        }}
        onClick={e => e.stopPropagation()}
      >
        <img
          src={item.img} alt={item.title}
          style={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: '12px 12px 0 0' }}
        />
        <div style={{ padding: '30px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
            <h2 style={{ fontFamily: 'var(--heading-font)', color: 'var(--heading-color)', margin: 0 }}>{item.title}</h2>
            <button
              onClick={onClose}
              style={{ background: 'none', border: 'none', fontSize: 24, cursor: 'pointer', color: '#999', padding: '0 4px' }}
            >×</button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 20 }}>
            {[
              { label: 'Category', value: item.category },
              { label: 'Client',   value: item.client },
              { label: 'Date',     value: item.date },
              { label: 'Tech',     value: item.tech },
            ].map(info => (
              <div key={info.label} style={{
                background: '#f9f9f9', borderRadius: 8, padding: '10px 16px',
                flex: '1 1 160px', borderLeft: '3px solid var(--accent-color)'
              }}>
                <div style={{ fontSize: 11, textTransform: 'uppercase', color: '#999', marginBottom: 4 }}>{info.label}</div>
                <div style={{ fontWeight: 600, color: 'var(--heading-color)', fontSize: 14 }}>{info.value}</div>
              </div>
            ))}
          </div>
          <p style={{ color: 'var(--default-color)', lineHeight: 1.7, fontSize: 15 }}>{item.detail}</p>
        </div>
      </div>
    </div>
  )
}

export default function PortfolioSection() {
  const [active, setActive] = useState('*')
  const [selected, setSelected] = useState(null)

  const visible = active === '*' ? items : items.filter(i => i.filter === active)

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>Kumpulan project yang telah saya kerjakan di berbagai perusahaan dan klien freelance.</p>
      </div>
      <div className="container">
        <ul className="portfolio-filters" data-aos="fade-up">
          {filters.map(f => (
            <li
              key={f.key}
              className={active === f.key ? 'filter-active' : ''}
              onClick={() => setActive(f.key)}
            >{f.label}</li>
          ))}
        </ul>
        <div className="row gy-4" data-aos="fade-up" data-aos-delay="200">
          {visible.map(item => (
            <div key={item.id} className="col-lg-4 col-md-6 portfolio-item">
              <img src={item.img} className="img-fluid" alt={item.title} />
              <div className="portfolio-info">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <button
                  className="details-link"
                  title="More Details"
                  onClick={() => setSelected(item)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', position: 'absolute', right: 14, top: 'calc(50% - 14px)', fontSize: 28, color: 'color-mix(in srgb, var(--default-color), transparent 30%)', lineHeight: 0 }}
                >
                  <i className="bi bi-link-45deg"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && <PortfolioModal item={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
