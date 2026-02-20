import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import TechStack from './components/TechStack'
import Manifesto from './components/Manifesto'
import SuccessCases from './components/SuccessCases'
import BlogPreview from './components/BlogPreview'
import Diagnosis from './components/Diagnosis'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import TechnicalFAQ from './components/TechnicalFAQ'
import GrowthEngine from './components/GrowthEngine'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import CookiePolicy from './components/CookiePolicy'
import RestaurantCaseStudy from './components/RestaurantCaseStudy'

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen">
          <Navbar />
          <main>
            <Hero />
            <Services />
            <GrowthEngine />
            <TechStack />
            <Manifesto />
            <SuccessCases />
            <BlogPreview />
            <Diagnosis />
          </main>
          <Footer />
        </div>
      } />
      <Route path="/faq" element={<TechnicalFAQ />} />
      <Route path="/privacidad" element={<PrivacyPolicy />} />
      <Route path="/terminos" element={<TermsOfService />} />
      <Route path="/cookies" element={<CookiePolicy />} />
      <Route path="/casos/restaurante" element={<RestaurantCaseStudy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
