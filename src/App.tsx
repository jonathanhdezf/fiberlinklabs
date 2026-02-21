import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import TechStack from './components/TechStack'
import Manifesto from './components/Manifesto'
import SuccessCases from './components/SuccessCases'
import RecentProjects from './components/RecentProjects'
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
import Glossary from './components/Glossary'
import BookingSession from './components/BookingSession'
import TechChatbot from './components/TechChatbot'
import AboutUs from './components/AboutUs'
import Teziutlan from './components/Teziutlan'
import YouCanLearnAnything from './components/YouCanLearnAnything'
import ElBuenServir from './components/ElBuenServir'

function App() {
  return (
    <>
      <ScrollToTop />
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
              <RecentProjects />
              <BlogPreview />
              <BookingSession />
              <Diagnosis />
            </main>
            <Footer />
            <TechChatbot />
          </div>
        } />
        <Route path="/faq" element={<TechnicalFAQ />} />
        <Route path="/privacidad" element={<PrivacyPolicy />} />
        <Route path="/terminos" element={<TermsOfService />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="/glosario" element={<Glossary />} />
        <Route path="/quienes-somos" element={<AboutUs />} />
        <Route path="/iniciativas/teziutlan" element={<Teziutlan />} />
        <Route path="/educacion-digital" element={<YouCanLearnAnything />} />
        <Route path="/iniciativas/el-buen-servir" element={<ElBuenServir />} />
        <Route path="/casos/restaurante" element={<RestaurantCaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
