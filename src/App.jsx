import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Consultation from './pages/Consultation'
import Insights from './pages/Insights'
import Service from './pages/Service'
import SolutionLanding from './pages/SolutionLanding'

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="consultation" element={<Consultation />} />
          <Route path="insights" element={<Insights />} />
          <Route path="service" element={<Service />} />
          <Route path="solutions/:slug" element={<SolutionLanding />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
