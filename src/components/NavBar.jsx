import React from "react";
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

import logo from "../assets/e-logo.png";

const NavBar = () => {
    return (
      <div className="mb-32 max-w-screen mx-auto">
      <nav className="fixed top-0 left-0 w-full bg-white text-gray-800 z-50 shadow-md">
        <div className="flex justify-between items-center px-6 py-6">
          <NavLink
              to="/home"
              className="hover:text-gray-400 transition-colors duration-300 font-bold"
          >
            <div className="flex items-center space-x-3 ">
              <img src={logo} className="h-10 w-10"/>
              <span className="text-black font-semibold">
              Ethan Lin
              </span>
            </div>
          </NavLink>
          <div className="flex items-center space-x-10 xs:space-x-0">
            {[
              { path: '/about', label: 'About' },
              // { path: '/projects', label: 'Projects' },
              // { path: '/experience', label: 'Experience' },
              // { path: '/resume', label: 'Resume' },
              // { path: '/contact', label: 'Contact' },
            ].map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? 'relative text-blue-400 font-bold after:content-[""] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-4 after:h-1 after:bg-blue-400 after:rounded-full'
                      : 'text-gray-800 hover:text-gray-400 font-bold'
                  }
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {label}
                  </motion.button>
                </NavLink>
            ))}
          </div>
        </div>
      </nav>
      </div>
    );
};

export default NavBar;