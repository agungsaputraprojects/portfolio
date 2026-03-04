import { useState, useEffect, useRef } from 'react'

export function useIntersection(options = {}) {
  const ref = useRef(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true)
        observer.disconnect()
      }
    }, { threshold: 0.1, ...options })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, isIntersecting }
}
