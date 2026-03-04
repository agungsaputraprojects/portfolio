import { useState } from 'react'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Feel free to reach out for collaboration, project inquiries, or just to say hello!</p>
      </div>
      <div className="container" data-aos="fade">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div><h3>Address</h3><p>Jl. Kayu Manis VIII No.28, RT.5/RW.8, Matraman, Jakarta Timur, 13130</p></div>
            </div>
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300" style={{ marginTop: 40 }}>
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div><h3>Call / WhatsApp</h3><p>082338039761</p></div>
            </div>
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400" style={{ marginTop: 40 }}>
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div><h3>Email</h3><p>agung.syntax@gmail.com</p></div>
            </div>
          </div>
          <div className="col-lg-8">
            <form onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="200">
              <div className="form-row">
                <div className="form-col-half">
                  <input type="text" placeholder="Your Name" required value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })} />
                </div>
                <div className="form-col-half">
                  <input type="email" placeholder="Your Email" required value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>
              </div>
              <div className="form-col-full" style={{ marginBottom: 16 }}>
                <input type="text" placeholder="Subject" required value={form.subject}
                  onChange={e => setForm({ ...form, subject: e.target.value })} />
              </div>
              <div className="form-col-full" style={{ marginBottom: 16 }}>
                <textarea rows="6" placeholder="Message" required value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })} />
              </div>
              <div style={{ textAlign: 'center' }}>
                {sent && <div style={{ color: '#059652', marginBottom: 12, fontWeight: 600 }}>Your message has been sent. Thank you!</div>}
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
