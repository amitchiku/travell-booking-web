import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-black via-gray-950 to-slate-900 text-gray-300 mt-auto border-t border-orange-500/20">

      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo Section */}
          <div className="group">
            <div className="flex items-center space-x-3 mb-5">

              <span className="text-5xl drop-shadow-lg group-hover:rotate-12 transition-all duration-500">
                🧭
              </span>

              <span className="font-extrabold text-2xl sm:text-3xl bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent tracking-wide">
                amitchiku travel agency
              </span>
            </div>

            <p className="text-sm leading-8 text-gray-400 group-hover:text-gray-300 transition duration-500">
              Explore incredible India with luxury, comfort, adventure,
              and unforgettable travel experiences designed specially for you.
            </p>

            {/* Decorative Line */}
            <div className="mt-6 h-1 w-24 bg-gradient-to-r from-orange-400 to-yellow-300 rounded-full group-hover:w-36 transition-all duration-500"></div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6 relative inline-block">
              Quick Links
              <span className="absolute left-0 -bottom-2 w-14 h-1 bg-orange-400 rounded-full"></span>
            </h3>

            <ul className="space-y-4 text-sm">

              <li>
                <NavLink
                  to="/"
                  className="group flex items-center gap-2 hover:text-orange-400 transition-all duration-300 hover:translate-x-2"
                >
                  <span className="w-0 group-hover:w-2 h-[2px] bg-orange-400 transition-all duration-300"></span>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className="group flex items-center gap-2 hover:text-orange-400 transition-all duration-300 hover:translate-x-2"
                >
                  <span className="w-0 group-hover:w-2 h-[2px] bg-orange-400 transition-all duration-300"></span>
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/destinations"
                  className="group flex items-center gap-2 hover:text-orange-400 transition-all duration-300 hover:translate-x-2"
                >
                  <span className="w-0 group-hover:w-2 h-[2px] bg-orange-400 transition-all duration-300"></span>
                  Destinations
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/packages"
                  className="group flex items-center gap-2 hover:text-orange-400 transition-all duration-300 hover:translate-x-2"
                >
                  <span className="w-0 group-hover:w-2 h-[2px] bg-orange-400 transition-all duration-300"></span>
                  Packages
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className="group flex items-center gap-2 hover:text-orange-400 transition-all duration-300 hover:translate-x-2"
                >
                  <span className="w-0 group-hover:w-2 h-[2px] bg-orange-400 transition-all duration-300"></span>
                  Contact
                </NavLink>
              </li>

            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6 relative inline-block">
              Contact Us
              <span className="absolute left-0 -bottom-2 w-14 h-1 bg-orange-400 rounded-full"></span>
            </h3>

            <ul className="space-y-5 text-sm text-gray-400">

              <li className="flex items-center gap-4 hover:text-orange-300 transition-all duration-300 hover:translate-x-2">
                <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-400/20">
                  <i className="fas fa-phone text-orange-400"></i>
                </div>

                <span>+91 8984678191</span>
              </li>

              <li className="flex items-center gap-4 hover:text-orange-300 transition-all duration-300 hover:translate-x-2">
                <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-400/20">
                  <i className="fas fa-envelope text-orange-400"></i>
                </div>

                <span className="break-all">
                  amitchiku2006@gmail.com
                </span>
              </li>

              <li className="flex items-center gap-4 hover:text-orange-300 transition-all duration-300 hover:translate-x-2">
                <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-400/20">
                  <i className="fas fa-location-dot text-orange-400"></i>
                </div>

                <span>Connaught Place, Bhubaneswar</span>
              </li>

            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6 relative inline-block">
              Follow Us
              <span className="absolute left-0 -bottom-2 w-14 h-1 bg-orange-400 rounded-full"></span>
            </h3>

            <div className="flex flex-wrap gap-5 mb-8">

              <span className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-3xl hover:bg-blue-500 hover:scale-110 hover:-translate-y-2 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-blue-500/40">
                <i className="fa-brands fa-square-facebook"></i>
              </span>

              <span className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-3xl hover:bg-pink-500 hover:scale-110 hover:-translate-y-2 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-pink-500/40">
                <i className="fa-brands fa-square-instagram"></i>
              </span>

              <span className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-3xl hover:bg-sky-500 hover:scale-110 hover:-translate-y-2 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-sky-500/40">
                <i className="fa-brands fa-linkedin"></i>
              </span>

              <span className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-3xl hover:bg-gray-700 hover:scale-110 hover:-translate-y-2 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-white/20">
                <i className="fa-brands fa-square-x-twitter"></i>
              </span>

            </div>

            {/* Newsletter Style Box */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md hover:border-orange-400/30 transition-all duration-500">
              <p className="text-sm text-gray-400 leading-7">
                Follow our social platforms for exclusive tour packages,
                travel offers, and adventure updates.
              </p>
            </div>

          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-14 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500 text-center md:text-left">
            © 2026 amitchiku travel agency. All rights reserved.
          </p>

          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span className="hover:text-orange-400 cursor-pointer transition duration-300">
              Privacy Policy
            </span>

            <span className="w-1 h-1 rounded-full bg-gray-600"></span>

            <span className="hover:text-orange-400 cursor-pointer transition duration-300">
              Terms & Conditions
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;