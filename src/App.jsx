import { useEffect } from 'react'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Services from './components/Services'
import WhyEBM   from './components/WhyEBM'
import About    from './components/About'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export default function App() {
  // Global IntersectionObserver: adds `.visible` to any `.reveal` element as it scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target) // fire once
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    const els = document.querySelectorAll('.reveal')
    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyEBM />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
