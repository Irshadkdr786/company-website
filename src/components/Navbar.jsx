import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-400 font-semibold"
      : "text-white hover:text-blue-400"

  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center">

      <h1 className="text-xl font-bold">MyCompany</h1>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-6 items-center">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/services" className={linkClass}>Services</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
      </div>

      <button className="hidden md:block bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">
        Get Quote
      </button>

      {/* MOBILE BUTTON */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-slate-800 flex flex-col gap-4 p-6 md:hidden">
          <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>Home</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/services" className={linkClass}>Services</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/about" className={linkClass}>About</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/contact" className={linkClass}>Contact</NavLink>
        </div>
      )}

    </nav>
  )
}