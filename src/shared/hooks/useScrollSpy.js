import { useState, useEffect } from 'react'

export function useScrollSpy(sectionIds) {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY + 200
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        if (position >= el.offsetTop && position <= el.offsetTop + el.offsetHeight) {
          setActiveSection(id)
          return
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds])

  return activeSection
}
