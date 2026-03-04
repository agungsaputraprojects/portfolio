import { useState, useEffect } from 'react'

export function useTyped(strings, { typeSpeed = 100, backSpeed = 50, backDelay = 2000, loop = true } = {}) {
  const [displayed, setDisplayed] = useState('')
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = strings[index % strings.length]
    let timeout

    if (!isDeleting && charIndex <= current.length) {
      setDisplayed(current.substring(0, charIndex))
      timeout = setTimeout(() => setCharIndex(c => c + 1), typeSpeed)
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), backDelay)
    } else if (isDeleting && charIndex >= 0) {
      setDisplayed(current.substring(0, charIndex))
      timeout = setTimeout(() => setCharIndex(c => c - 1), backSpeed)
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false)
      setIndex(i => loop ? (i + 1) % strings.length : Math.min(i + 1, strings.length - 1))
      setCharIndex(0)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, index, strings, typeSpeed, backSpeed, backDelay, loop])

  return displayed
}
