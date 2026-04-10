import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Consultation from './pages/Consultation'
import Insights from './pages/Insights'
import Service from './pages/Service'
import SolutionLanding from './pages/SolutionLanding'

export default function App() {
  return (
    <BrowserRouter>
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
