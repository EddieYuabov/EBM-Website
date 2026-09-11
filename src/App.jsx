import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import WorkPage from './pages/WorkPage'
import CaseStudyPage from './pages/CaseStudyPage'
import HealthyPharmacyCaseStudy from './pages/HealthyPharmacyCaseStudy'
import RuachBreslovCaseStudy from './pages/RuachBreslovCaseStudy'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/healthy-pharmacy" element={<HealthyPharmacyCaseStudy />} />
          <Route path="/work/ruach-breslov" element={<RuachBreslovCaseStudy />} />
          <Route path="/work/:slug" element={<CaseStudyPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
