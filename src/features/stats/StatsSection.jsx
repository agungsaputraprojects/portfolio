import { useEffect, useRef, useState } from 'react'

const stats = [
  { icon: 'bi-building', end: 10, label: 'Companies' },
  { icon: 'bi-journal-richtext', end: 20, label: 'Projects' },
  { icon: 'bi-calendar-check', end: 5, label: 'Years Experience' },
  { icon: 'bi-phone', end: 3, label: 'Mobile Apps' },
]

function Counter({ end }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const step = Math.ceil(end / 60)
        const timer = setInterval(() => {
          start += step
          if (start >= end) { setCount(end); clearInterval(timer) }
          else setCount(start)
        }, 16)
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end])

  return <span ref={ref}>{count}+</span>
}

export default function StatsSection() {
  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up">
        <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {stats.map(s => (
            <div key={s.label} className="col-stat">
              <i className={`bi ${s.icon}`}></i>
              <div className="stats-item">
                <Counter end={s.end} />
                <p>{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
