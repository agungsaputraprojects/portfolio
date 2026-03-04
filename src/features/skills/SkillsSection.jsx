import { useEffect, useRef, useState } from 'react'

const skills = [
  { name: 'React.js / Next.js', val: 95 },
  { name: 'Vue.js / Nuxt', val: 85 },
  { name: 'JavaScript / TypeScript', val: 90 },
  { name: 'Flutter / React Native', val: 80 },
  { name: 'Laravel / Node.js', val: 80 },
  { name: 'Java Quarkus / Spring Boot', val: 70 },
  { name: 'Docker / Jenkins', val: 75 },
  { name: 'HTML / CSS / Tailwind', val: 95 },
]

function SkillBar({ name, val }) {
  const [width, setWidth] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setWidth(val); observer.disconnect() }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [val])

  return (
    <div className="progress" ref={ref}>
      <span className="skill">
        <span>{name}</span>
        <span className="val">{val}%</span>
      </span>
      <div className="progress-bar-wrap">
        <div className="progress-bar" style={{ width: `${width}%` }}></div>
      </div>
    </div>
  )
}

export default function SkillsSection() {
  const half = Math.ceil(skills.length / 2)
  return (
    <section id="skills" className="skills section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>Tech stack yang saya kuasai dari pengalaman kerja di berbagai industri</p>
      </div>
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6">
            {skills.slice(0, half).map(s => <SkillBar key={s.name} {...s} />)}
          </div>
          <div className="col-lg-6">
            {skills.slice(half).map(s => <SkillBar key={s.name} {...s} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
