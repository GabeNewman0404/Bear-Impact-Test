import { NavLink, Link } from 'react-router-dom'

const linkBase =
  "font-['Inter'] text-sm tracking-wide transition-colors duration-300"

function navClass({ isActive }) {
  return isActive
    ? `${linkBase} text-[#E8C05A] border-b border-[#E8C05A] pb-1`
    : `${linkBase} text-slate-300 hover:text-[#E8C05A]`
}

export default function Nav() {
  return (
    <nav className="bg-[#001633]/80 backdrop-blur-xl full-width top-0 sticky border-b border-[#E8C05A]/20 shadow-[0_20px_50px_rgba(0,31,73,0.4)] z-50">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        <Link to="/" className="flex items-center" aria-label="Bear Impact home">
          <img
            src="/bear-impact-logo.jpg"
            alt="Bear Impact"
            className="h-12 w-auto"
          />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/consulting" className={navClass}>
            Consulting
          </NavLink>
          <NavLink to="/services" className={navClass}>
            Services
          </NavLink>
          <NavLink to="/tools" className={navClass}>
            Tools
          </NavLink>
          <NavLink to="/about" className={navClass}>
            About
          </NavLink>
          <NavLink to="/insights" className={navClass}>
            Insights
          </NavLink>
          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>
        </div>
        <button className="bg-[#e8c05a] text-[#3e2e00] px-6 py-2.5 rounded-lg font-['Inter'] font-semibold text-sm scale-95 active:opacity-80 transition-all">
          Book Your Blueprint Session
        </button>
      </div>
    </nav>
  )
}
