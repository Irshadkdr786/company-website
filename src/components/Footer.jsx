import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* 3 COLUMN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {/* COLUMN 1 */}
          <div>
            <h2 className="text-2xl font-bold">MyCompany</h2>
            <p className="text-gray-400 mt-3 leading-relaxed">
              We build modern, responsive and high-performance websites
              for businesses and startups.
            </p>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">

              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Info</h3>

            <p className="text-gray-400">📍 Dubai, UAE</p>
            <p className="text-gray-400 mt-2">📧 info@mycompany.com</p>
            <p className="text-gray-400 mt-2">📞 +971 50 000 0000</p>

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2026 MyCompany. All rights reserved.
        </div>

      </div>
    </footer>
  )
}