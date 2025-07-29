import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { LuArrowRightFromLine } from "react-icons/lu";

import logo from "../assets/e-logo.png";

const links = [
  { path: '#about', label: 'About' },
  { path: '#projects', label: 'Projects' },
  { path: '#experience', label: 'Experience' },
  { path: '#resume', label: 'Resume' },
  { path: '#contact', label: 'Contact' },
]

const buttonLinkClass = `text-sm font-bold transition-colors duration-300 ease-in-out`;

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
      <div className="mb-32 max-w-screen mx-auto">
        <nav className="fixed top-0 left-0 w-full bg-white text-gray-800 z-50 shadow-md">
          <div className="flex justify-between items-center px-6 py-6">
            <HashLink
                smooth to="#about"
                className="hover:text-gray-400 transition-colors duration-300 font-bold"
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <img src={logo} className="h-8 sm:h-10 aspect-[1]"/>
                <span className="text-black font-semibold text-sm sm:text-base">
                Ethan Lin
                </span>
              </div>
            </HashLink>

            {/* Navbar on bigger screens */}
            <div className="hidden sm:flex items-center sm:space-x-6">
              {links.map(({ path, label }) => (
                <HashLink key={label} smooth to={path}>
                    <motion.button
                      className={buttonLinkClass}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {label}
                    </motion.button>
                </HashLink>
              ))}
            </div>

            {/* Navbar on smaller screens */}
            <button
              className="flex sm:hidden "
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <FiMenu className="w-6 h-6"/>
            </button>
            <AnimatePresence>
              {sidebarOpen && (
                <>
                  <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setSidebarOpen(false)}
                  />
                  <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                    className="fixed top-0 right-0 h-screen w-64 bg-white z-50 shadow-md p-6 flex flex-col"
                  >
                    <div className="flex flex-col space-y-6">
                      {links.map(({ path, label }) => (
                        <HashLink
                          key={label}
                          smooth
                          to={path}
                          onClick={() => setSidebarOpen(false)}
                        >
                            <span className={buttonLinkClass}>{label}</span>
                        </HashLink>
                      ))}
                    </div>

                    <button 
                      className="mt-auto"
                      onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                      <LuArrowRightFromLine />
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </div>
    );
};

export default NavBar;