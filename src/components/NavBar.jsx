import React from "react";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold">My Portfolio</div>
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/about"
                className="hover:text-gray-400 transition-colors duration-300"
                activeClassName="text-yellow-400"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className="hover:text-gray-400 transition-colors duration-300"
                activeClassName="text-yellow-400"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experience"
                className="hover:text-gray-400 transition-colors duration-300"
                activeClassName="text-yellow-400"
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className="hover:text-gray-400 transition-colors duration-300"
                activeClassName="text-yellow-400"
              >
                Resume
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default NavBar;