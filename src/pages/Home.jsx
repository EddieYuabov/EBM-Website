import Hero         from '../components/Hero'
import Attention    from '../components/Attention'
import Results      from '../components/Results'
import Work         from '../components/Work'
import Process      from '../components/Process'
import About        from '../components/About'
import Testimonials from '../components/Testimonials'
import FinalCTA      from '../components/FinalCTA'
import useReveal from '../hooks/useReveal'

export default function Home() {
  useReveal()

  return (
    <>
      <Hero />
      <Attention />
      <Results />
      <Work />
      <Process />
      <About />
      <Testimonials />
      <FinalCTA />
    </>
  )
}
