import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#001633] w-full border-t border-[#4d4637]/20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-20 w-full max-w-7xl mx-auto font-['Inter'] text-sm leading-relaxed">
        <div className="md:col-span-1">
          <div className="text-3xl font-['Newsreader'] font-bold text-[#E8C05A] mb-4">
            Bear Impact
          </div>
          <p className="text-slate-400 mb-6">
            Strategic inbound engines for high-stakes law firms and professional
            services.
          </p>
        </div>
        <div>
          <h5 className="text-[#E8C05A] font-bold uppercase tracking-widest text-[10px] mb-6">
            Products
          </h5>
          <ul className="space-y-4">
            <li>
              <Link to="/services" className="text-slate-400 hover:text-white transition-all">
                Case Growth Systems
              </Link>
            </li>
            <li>
              <Link to="/consulting" className="text-slate-400 hover:text-white transition-all">
                Case Growth Blueprint
              </Link>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-all">
                Partner Programs
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-[#E8C05A] font-bold uppercase tracking-widest text-[10px] mb-6">
            Company
          </h5>
          <ul className="space-y-4">
            <li>
              <Link to="/about" className="text-slate-400 hover:text-white transition-all">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/insights" className="text-slate-400 hover:text-white transition-all">
                Insights
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-slate-400 hover:text-white transition-all">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-[#E8C05A] font-bold uppercase tracking-widest text-[10px] mb-6">
            Legal
          </h5>
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-all">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white transition-all">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-12 pb-12 border-t border-outline-variant/10 pt-8">
        <p className="text-slate-500 text-xs text-center">
          Copyright 2026 Bear Impact. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
