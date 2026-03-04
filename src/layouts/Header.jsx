import { useState, useEffect } from 'react'

const navItems = [
  { href: '#hero',        icon: 'bi-house',            label: 'Home' },
  { href: '#about',       icon: 'bi-person',           label: 'About' },
  { href: '#resume',      icon: 'bi-file-earmark-text',label: 'Resume' },
  { href: '#portfolio',   icon: 'bi-images',           label: 'Portfolio' },
  { href: '#services',    icon: 'bi-hdd-stack',        label: 'Services' },
  { href: '#contact',     icon: 'bi-envelope',         label: 'Contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('#hero')

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + 200
      for (const item of navItems) {
        const el = document.querySelector(item.href)
        if (el && scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
          setActiveHash(item.href)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setActiveHash(href)
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) {
      const top = el.offsetTop - parseInt(getComputedStyle(el).scrollMarginTop || '0')
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <i
        className={`header-toggle bi ${isOpen ? 'bi-x' : 'bi-list'}`}
        onClick={() => setIsOpen(!isOpen)}
      />
      <header id="header" className={`header ${isOpen ? 'header-show' : ''}`}>
        <nav id="navmenu" className="navmenu">
          <ul>
            {navItems.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={activeHash === item.href ? 'active' : ''}
                  onClick={e => { e.preventDefault(); handleNavClick(item.href) }}
                >
                  <i className={`bi ${item.icon} navicon`}></i>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}
