// src/components/Navbar.jsx
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white fixed top-0 w-full shadow z-50">
      <div className="max-w-screen-2xl mx-auto px-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Title */}
          <a href="/" className="flex items-center space-x-2">
            <img
              src="/src/assets/images/logo.png"
              className="h-10 w-auto"
              alt="ORSN Logo"
            />
            <span className="text-2xl font-bold text-green-700 whitespace-nowrap">
              <span className="hidden lg:inline">
                Operational Research Society of Nepal
              </span>
              <span className="inline lg:hidden">ORSN</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {[
              { label: "Home", path: "/" },
              { label: "Conference", path: "/conference" },
              { label: "Journal", path: "/journal" },
              { label: "Members", path: "/members" },
              { label: "Talk Program", path: "/talk_program" },
              { label: "Contact", path: "/contact" },
            ].map(({ label, path }) => (
              <a
                key={label}
                href={path}
                className="text-gray-800 font-semibold hover:text-green-700 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col px-4 py-2 space-y-2">
            {[
              { label: "Home", path: "/" },
              { label: "Conference", path: "/conference" },
              { label: "Journal", path: "/journal" },
              { label: "Members", path: "/members" },
              { label: "Talk Program", path: "/talk_program" },
              { label: "Contact", path: "/contact" },
            ].map(({ label, path }) => (
              <li key={label}>
                <a
                  href={path}
                  className="block py-2 text-gray-800 font-medium hover:text-green-700"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
