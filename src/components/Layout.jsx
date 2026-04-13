import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 rounded-none border-b border-white/5 bg-zinc-950/40 backdrop-blur-2xl">
        <div className="flex justify-between items-center px-8 py-4 w-full max-w-none">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-xl font-black tracking-tighter text-[#e5e2e1] uppercase">
              Kirk & Kirk
            </Link>
            <div className="hidden md:flex gap-6">
              <Link to="/consultation" className="font-['Inter'] tracking-tighter uppercase font-medium text-[0.75rem] text-[#e5e2e1] opacity-70 hover:opacity-100 hover:text-[#adc7ff] transition-all duration-300">Contact</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/consultation">
              <button className="px-6 py-2 bg-primary text-on-primary font-bold text-[0.75rem] uppercase tracking-widest hover:bg-primary-container transition-all active:scale-95 duration-200 ease-in-out">
                Consultation
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <Outlet />

      <footer className="w-full border-t border-[#353535] rounded-none bg-[#0e0e0e]">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 px-12 py-24 w-full">
          <div className="md:col-span-1">
            <div className="text-3xl font-black tracking-tighter text-[#e5e2e1] mb-8">Kirk & Kirk</div>
            <p className="text-[#e5e2e1]/60 font-light text-sm leading-relaxed max-w-xs">
              Tailored HSEQ consultancy, fire risk assessment, training and management systems for SMBs across the UK.
            </p>
          </div>
          <div>
            <span className="block text-[#adc7ff] font-bold text-[0.75rem] uppercase tracking-widest mb-8">Services</span>
            <ul className="space-y-4">
              <li><Link to="/solutions/health-safety-environmental" className="text-[#e5e2e1]/60 hover:text-[#4a8eff] transition-colors duration-200">Health, Safety & Environmental</Link></li>
              <li><Link to="/solutions/fire-risk-assessment" className="text-[#e5e2e1]/60 hover:text-[#4a8eff] transition-colors duration-200">Fire Risk Assessment</Link></li>
              <li><Link to="/solutions/facilities-project-management" className="text-[#e5e2e1]/60 hover:text-[#4a8eff] transition-colors duration-200">Facilities & Project Management</Link></li>
              <li><Link to="/solutions/integrated-management-systems" className="text-[#e5e2e1]/60 hover:text-[#4a8eff] transition-colors duration-200">Integrated Management Systems</Link></li>
              <li><Link to="/solutions/risk-management" className="text-[#e5e2e1]/60 hover:text-[#4a8eff] transition-colors duration-200">Risk Management</Link></li>
              <li><Link to="/solutions/training-education" className="text-[#e5e2e1]/60 hover:text-[#4a8eff] transition-colors duration-200">Training & Education</Link></li>
            </ul>
          </div>
          <div>
            <span className="block text-[#adc7ff] font-bold text-[0.75rem] uppercase tracking-widest mb-8">Contact</span>
            <ul className="space-y-4">
              <li><Link to="/consultation" className="text-[#e5e2e1]/60 hover:text-[#4a8eff] transition-colors duration-200">Consultation</Link></li>
            </ul>
          </div>
          <div>
            <span className="block text-[#adc7ff] font-bold text-[0.75rem] uppercase tracking-widest mb-8">Connect</span>
            <ul className="space-y-4">
              <li><a href="https://linkedin.com/company/kirk-and-kirk-limited/" target="_blank" rel="noopener noreferrer" className="text-[#e5e2e1]/60 hover:text-[#4a8eff] transition-colors duration-200">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="px-12 py-10 border-t border-[#353535]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <span className="text-[0.65rem] uppercase tracking-[0.3em] text-[#e5e2e1]/40">© 2026 Kirk & Kirk. Trusted HSEQ Partners.</span>
            <div className="flex items-center gap-6">
              <div className="bg-white rounded px-3 py-2"><img src="/iosh-for-posts-1.jpg" alt="IOSH" className="h-8 object-contain" /></div>
              <div className="bg-white rounded px-3 py-2"><img src="/CQI-IRCA-Certified-Course-logo.jpg" alt="CQI IRCA Certified Course" className="h-8 object-contain" /></div>
              <div className="bg-white rounded px-3 py-2"><img src="/CTP-Preferred-Supplier-RGB-Colour-Logo-on-White-Background-002.png" alt="CTP Preferred Supplier" className="h-8 object-contain" /></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
