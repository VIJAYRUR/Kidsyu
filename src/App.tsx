import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '@/pages/Home'
import Contact from '@/pages/Contact'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { SEO } from './SEO'
import { ScrollToHash } from '@/components/ScrollToHash'

export default function App() {
  const location = useLocation()
  return (
    <div className="flex min-h-screen flex-col">
      <SEO path={location.pathname} />
      <NavBar />
      <ScrollToHash />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

