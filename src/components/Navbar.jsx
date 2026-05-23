import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/destinations', label: 'Destinations' },
    { path: '/packages', label: 'Packages' },
    { path: '/contact', label: 'Contact' },
    { path: '/my-bookings', label: 'My Bookings' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.5)] overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-400/10 blur-3xl rounded-full animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center space-x-3 group"
          >
            <span className="text-4xl drop-shadow-lg group-hover:rotate-12 transition-all duration-500">
              🧭
            </span>

            <span className="font-extrabold text-2xl tracking-wide bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
              amitchiku
              <span className="ml-1">
                travel agency
              </span>
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm uppercase tracking-wide font-semibold transition-all duration-300 hover:text-orange-400 ${
                    isActive
                      ? 'text-orange-400'
                      : 'text-gray-300'
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="relative group">
                    {link.label}

                    <span
                      className={`absolute left-0 -bottom-2 h-[2px] bg-gradient-to-r from-orange-400 to-yellow-300 rounded-full transition-all duration-500 ${
                        isActive
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </span>
                )}
              </NavLink>
            ))}

          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <button
              onClick={() => navigate('/packages')}
              className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 hover:scale-105 hover:shadow-orange-500/40 shadow-lg text-black font-bold py-3 px-7 rounded-xl transition-all duration-500 cursor-pointer group"
            >

              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-all duration-500"></span>

              <span className="relative z-10">
                Book Now
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg flex items-center justify-center text-white text-2xl hover:bg-orange-500/20 hover:border-orange-400/30 transition-all duration-300"
            >
              <span className="transition-transform duration-500">
                {isOpen ? '✕' : '☰'}
              </span>
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isOpen
              ? 'max-h-[500px] opacity-100 pb-6'
              : 'max-h-0 opacity-0'
          }`}
        >

          <div className="mt-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-2xl space-y-3">

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-orange-500 to-yellow-400 text-black shadow-lg'
                      : 'text-gray-300 hover:bg-white/10 hover:text-orange-400'
                  }`
                }
              >
                {link.label}

                <span className="text-lg">
                  →
                </span>
              </NavLink>
            ))}

            {/* Mobile Button */}
            <button
              onClick={() => navigate('/packages')}
              className="w-full mt-4 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 hover:scale-[1.02] transition-all duration-500 text-black font-bold py-3 rounded-xl shadow-lg hover:shadow-orange-500/40 cursor-pointer"
            >
              Book Now
            </button>

          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;