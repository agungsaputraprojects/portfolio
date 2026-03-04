import { useState, useEffect, useRef } from 'react'

const testimonials = [
  { name: 'Saul Goodman', role: 'CEO & Founder', img: 'assets/img/testimonials/testimonials-1.jpg', text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.' },
  { name: 'Sara Wilsson',  role: 'Designer',      img: 'assets/img/testimonials/testimonials-2.jpg', text: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.' },
  { name: 'Jena Karlis',   role: 'Store Owner',   img: 'assets/img/testimonials/testimonials-3.jpg', text: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.' },
  { name: 'John Larson',   role: 'Entrepreneur',  img: 'assets/img/testimonials/testimonials-4.jpg', text: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore.' },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)

  const go = (idx) => setCurrent((idx + testimonials.length) % testimonials.length)

  useEffect(() => {
    timerRef.current = setInterval(() => go(current + 1), 5000)
    return () => clearInterval(timerRef.current)
  }, [current])

  const t = testimonials[current]

  return (
    <section id="testimonials" className="testimonials section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      <div className="container" data-aos="fade-up">
        <div className="testimonial-item">
          <div className="row gy-4 justify-content-center">
            <div className="col-testimonial-text">
              <div className="testimonial-content">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>{t.text}</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <h3>{t.name}</h3>
                <h4>{t.role}</h4>
                <div className="stars">
                  {[...Array(5)].map((_, i) => <i key={i} className="bi bi-star-fill"></i>)}
                </div>
              </div>
            </div>
            <div className="col-testimonial-img">
              <img src={t.img} className="testimonial-img" alt={t.name} />
            </div>
          </div>
        </div>
        <div className="swiper-pagination" style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 30 }}>
          {testimonials.map((_, i) => (
            <span
              key={i}
              onClick={() => go(i)}
              style={{
                width: 12, height: 12, borderRadius: '50%', cursor: 'pointer',
                background: i === current ? 'var(--accent-color)' : 'color-mix(in srgb, var(--default-color), transparent 85%)',
                display: 'inline-block'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
