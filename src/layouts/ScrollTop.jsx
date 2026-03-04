import { useEffect, useState } from 'react'

export default function ScrollTop() {
  const [active, setActive] = useState(false)
  useEffect(() => {
    const onScroll = () => setActive(window.scrollY > 100)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <button
      className={`scroll-top ${active ? 'active' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <i className="bi bi-arrow-up-short"></i>
    </button>
  )
}
