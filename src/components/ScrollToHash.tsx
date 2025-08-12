import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const id = hash ? decodeURIComponent(hash.replace('#', '')) : ''
    if (id) {
      // Try a couple animation frames to ensure the element exists after navigation
      let attempts = 0
      const tryScroll = () => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else if (attempts < 5) {
          attempts += 1
          requestAnimationFrame(tryScroll)
        }
      }
      requestAnimationFrame(tryScroll)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [pathname, hash])

  return null
}

