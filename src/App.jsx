import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Consultation from './pages/Consultation'
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
          <Route path="solutions/:slug" element={<SolutionLanding />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
