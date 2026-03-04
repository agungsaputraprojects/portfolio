import { useEffect } from 'react'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Preloader from './layouts/Preloader'
import ScrollTop from './layouts/ScrollTop'

import HeroSection from './features/hero/HeroSection'
import AboutSection from './features/about/AboutSection'
import StatsSection from './features/stats/StatsSection'
import SkillsSection from './features/skills/SkillsSection'
import ResumeSection from './features/resume/ResumeSection'
import PortfolioSection from './features/portfolio/PortfolioSection'
import ServicesSection from './features/services/ServicesSection'
import ContactSection from './features/contact/ContactSection'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('aos-animate')
        })
      },
      { threshold: 0.1 }
    )
    const init = () => document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el))
    setTimeout(init, 100)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Preloader />
      <Header />
      <main className="main">
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <SkillsSection />
        <ResumeSection />
        <PortfolioSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}
