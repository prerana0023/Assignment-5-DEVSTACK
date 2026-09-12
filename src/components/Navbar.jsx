import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="h-16 flex items-center justify-between">

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-xl text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Brand */}
          <a
            href="#"
            className="flex items-center gap-2 font-bold text-gray-800"
          >
            <span className="w-7 h-7 rounded-md bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500 text-white text-[10px] flex items-center justify-center font-bold">
              DS
            </span>

            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500 bg-clip-text text-transparent">
              Dev Stack
            </span>
          </a>

          {/* Navigation Links */}
          <div
            className={`
              ${menuOpen ? "flex" : "hidden"}
              md:flex
              absolute md:static
              top-16 md:top-auto
              left-0
              w-full md:w-auto
              bg-white md:bg-transparent
              border-b md:border-0 border-gray-100
              flex-col md:flex-row
              items-center
              gap-5 md:gap-8
              py-5 md:py-0
              text-xs text-gray-600
            `}
          >
            <a
              href="#"
              className="hover:text-pink-500 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>

            <a
              href="#technologies"
              className="hover:text-pink-500 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Technologies
            </a>

            <a
              href="#projects"
              className="hover:text-pink-500 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>

            <a
              href="#about"
              className="hover:text-pink-500 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>

            <a
              href="#contact"
              className="hover:text-pink-500 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>

          {/* Sign In / Sign Up */}
          <div className="flex items-center gap-2 sm:gap-4">

            <button className="text-xs text-gray-600 hover:text-pink-500 transition-colors">
              Sign In
            </button>

            <button className="text-xs font-semibold text-white px-4 py-2 rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500 hover:opacity-90 transition-opacity">
              Sign Up
            </button>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;