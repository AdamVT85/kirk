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
              <Link to="/" className="font-['Inter'] tracking-tighter uppercase font-medium text-[0.75rem] text-[#e5e2e1] opacity-70 hover:opacity-100 hover:text-[#adc7ff] transition-all duration-300">Services</Link>
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-24 w-full">
          <div className="md:col-span-1">
            <div className="text-3xl font-black tracking-tighter text-[#e5e2e1] mb-8">Kirk & Kirk</div>
            <p className="text-[#e5e2e1]/60 font-light text-sm leading-relaxed max-w-xs">
              Pioneering operational architecture for the next era of global industry. Precision at every layer.
            </p>
          </div>
          <div>
            <span className="block text-[#adc7ff] font-bold text-[0.75rem] uppercase tracking-widest mb-8">Navigation</span>
            <ul className="space-y-4">
              <li><Link to="/" className="text-[#e5e2e1]/60 hover:text-[#4a8eff] transition-colors duration-200">Services</Link></li>
              <li><Link to="/consultation" className="text-[#e5e2e1]/60 hover:text-[#4a8eff] transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>
          <div>
            <span className="block text-[#adc7ff] font-bold text-[0.75rem] uppercase tracking-widest mb-8">Connect</span>
            <ul className="space-y-4">
              <li><Link to="/" className="text-[#e5e2e1]/60 hover:text-[#4a8eff] transition-colors duration-200">LinkedIn</Link></li>
              <li><Link to="/" className="text-[#e5e2e1]/60 hover:text-[#4a8eff] transition-colors duration-200">Twitter</Link></li>
              <li><Link to="/" className="text-[#e5e2e1]/60 hover:text-[#4a8eff] transition-colors duration-200">Instagram</Link></li>
            </ul>
          </div>
        </div>
        <div className="px-12 py-8 border-t border-[#353535] flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[0.65rem] uppercase tracking-[0.3em] text-[#e5e2e1]/40">© 2024 Kirk & Kirk. Engineered Excellence.</span>
          <div className="flex gap-4">
            <div className="w-1 h-1 bg-primary"></div>
            <div className="w-1 h-1 bg-outline-variant"></div>
            <div className="w-1 h-1 bg-primary"></div>
          </div>
        </div>
      </footer>
    </>
  )
}
